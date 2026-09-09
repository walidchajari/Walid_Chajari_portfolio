import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { projects, Project } from '../data'
import { useLanguage } from '../context/LanguageContext'

function ProjectCard({ project, index, t }: { project: Project; index: number; t: { caseStudy: string; code: string; demo: string; statusLabels: Record<string, string> } }) {
  const navigate = useNavigate()
  const hasDetail = project.status === 'flagship' || project.status === 'research'

  const statusStyle = {
    flagship: { color: '#7DD3FC', bg: 'rgba(14,165,233,0.08)', border: 'rgba(14,165,233,0.25)' },
    live: { color: '#6EE7B7', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.25)' },
    research: { color: '#C4B5FD', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.25)' },
  }
  const s = statusStyle[project.status]
  const statusLabel = t.statusLabels[project.status]

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hasDetail ? { y: -4 } : {}}
      className="card card-glow-hover flex flex-col"
      style={{ cursor: hasDetail ? 'pointer' : 'default' }}
      onClick={() => hasDetail && navigate(`/projects/${project.id}`)}
    >
      {/* Gradient accent bar at top */}
      <div
        className="h-0.5 rounded-t-xl"
        style={{
          background: project.status === 'flagship'
            ? 'linear-gradient(90deg, #0EA5E9, #8B5CF6)'
            : project.status === 'live'
            ? 'linear-gradient(90deg, #10B981, #0EA5E9)'
            : 'linear-gradient(90deg, #8B5CF6, #C4B5FD)',
        }}
      />

      <div className="p-6 flex-1">
        {/* Number + status */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
            {project.number}
          </span>
          <span
            className="font-mono text-xs px-2.5 py-1 rounded-full"
            style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}` }}
          >
            {statusLabel}
          </span>
        </div>

        <h3
          className="text-lg font-semibold leading-snug mb-1 transition-colors group-hover:text-blue-400"
          style={{ color: 'var(--text)' }}
        >
          {project.title}
        </h3>
        <p className="font-mono text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
          {project.subtitle}
        </p>

        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>

        {project.highlights.length > 0 && (
          <ul className="space-y-1.5 mb-5">
            {project.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }}>›</span>
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-6 py-4 border-t flex items-center justify-between"
        style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
      >
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="btn-ghost text-xs py-1 px-2 gap-1.5"
            >
              <Github size={12} />{t.code}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="btn-ghost text-xs py-1 px-2 gap-1.5"
            >
              <ExternalLink size={12} />{t.demo}
            </a>
          )}
        </div>

        {hasDetail && (
          <motion.span
            className="flex items-center gap-1 text-xs font-medium"
            style={{ color: 'var(--accent)' }}
            whileHover={{ x: 3 }}
          >
            {t.caseStudy}
            <ArrowRight size={12} />
          </motion.span>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const { t, isRTL } = useLanguage()

  return (
    <section id="projects" className="py-28 relative" style={{ background: 'var(--bg)' }} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">{t.projects.label}</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
            {t.projects.title}
          </h2>
          <p className="mt-3 text-sm max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            {t.projects.subtitle}
          </p>
        </AnimatedSection>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} t={t.projects} />
          ))}
        </div>
      </div>
    </section>
  )
}
