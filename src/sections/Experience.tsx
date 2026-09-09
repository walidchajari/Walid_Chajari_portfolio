import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { education, internships, documents, EducationItem, InternshipItem, DocumentItem } from '../data'
import { useLanguage } from '../context/LanguageContext'

// ─── Document download card ───────────────────────────────────────────────────

function DocCard({ doc, index }: { doc: DocumentItem; index: number }) {
  const typeColors: Record<string, { color: string; bg: string; border: string }> = {
    'Diplôme':          { color: '#0EA5E9', bg: 'rgba(14,165,233,0.08)',  border: 'rgba(14,165,233,0.2)' },
    'Document officiel':{ color: '#8B5CF6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)' },
    'Certification':    { color: '#10B981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)' },
    'CV':               { color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)' },
  }
  const c = typeColors[doc.type] ?? typeColors['Diplôme']

  return (
    <motion.a
      href={doc.file}
      download
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ y: -2 }}
      className="card flex items-center gap-3 p-4 group cursor-pointer"
      style={{ textDecoration: 'none' }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
        style={{ background: c.bg, border: `1px solid ${c.border}` }}
      >
        <FileText size={16} style={{ color: c.color }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate" style={{ color: 'var(--text)' }}>
          {doc.label}
        </p>
        <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
          {doc.type}
        </p>
      </div>
      <Download
        size={14}
        className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: c.color }}
      />
    </motion.a>
  )
}

// ─── Education card ───────────────────────────────────────────────────────────

function EduCard({ item, index }: { item: EducationItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="card p-5 flex flex-col gap-3"
    >
      <span className="tag self-start">{item.year}</span>
      <div>
        <h3 className="text-sm font-semibold leading-snug" style={{ color: 'var(--text)' }}>
          {item.degree}
        </h3>
        <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
          {item.school}
        </p>
      </div>
      {item.description && (
        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {item.description}
        </p>
      )}
      {item.mention && (
        <span className="tag-accent self-start">{item.mention}</span>
      )}
    </motion.div>
  )
}

// ─── Internship card ──────────────────────────────────────────────────────────

const stageColors = [
  { accent: '#3B82F6', accent2: '#0891B2', gradient: 'linear-gradient(90deg, #2563EB, #0891B2)' },
  { accent: '#0891B2', accent2: '#06B6D4', gradient: 'linear-gradient(90deg, #0891B2, #06B6D4)' },
]

function InternCard({ item, index }: { item: InternshipItem; index: number }) {
  const c = stageColors[index % stageColors.length]
  const isPFE = item.type === 'Stage PFE'

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="card overflow-hidden"
    >
      {/* Gradient top bar */}
      <div className="h-0.5" style={{ background: c.gradient }} />

      <div className="p-6 lg:p-7">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span
            className="font-mono text-xs px-3 py-1 rounded-full font-semibold"
            style={{ color: c.accent, background: `${c.accent}12`, border: `1px solid ${c.accent}28` }}
          >
            {item.type}
          </span>
          <span className="tag">{item.period}</span>
          {isPFE && (
            <span
              className="font-mono text-xs px-2.5 py-0.5 rounded-full"
              style={{ color: '#F59E0B', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)' }}
            >
              Projet de fin d'études
            </span>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left — identity + stack */}
          <div className="lg:col-span-1 space-y-5">
            <div>
              <h3 className="text-base font-bold mb-1" style={{ color: 'var(--text)' }}>
                {item.title}
              </h3>
              <p className="font-mono text-sm font-semibold mb-0.5" style={{ color: c.accent }}>
                {item.company}
              </p>
              <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                {item.location}
              </p>
            </div>

            <div>
              <p className="font-mono text-xs tracking-widest uppercase mb-2.5" style={{ color: 'var(--text-muted)' }}>
                Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.stack.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — mission + réalisations */}
          <div className="lg:col-span-2 space-y-5">
            {/* Mission */}
            <div
              className="rounded-xl p-4"
              style={{ background: `${c.accent}08`, border: `1px solid ${c.accent}18` }}
            >
              <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: c.accent }}>
                Mission / But
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.mission}
              </p>
            </div>

            {/* Réalisations */}
            <div>
              <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--text-muted)' }}>
                Réalisations clés
              </p>
              <ul className="space-y-2.5">
                {item.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.07 }}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span
                      className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                      style={{ background: c.accent }}
                    />
                    {b}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function Experience() {
  const { isRTL } = useLanguage()

  return (
    <section id="experience" className="py-28" style={{ background: 'var(--bg)' }} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="section-container space-y-24">

        {/* ── Expérience professionnelle ─────────────────── */}
        <div>
          <AnimatedSection>
            <span className="section-label">Expérience professionnelle</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
              Stages &amp; missions
            </h2>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              2 stages chez{' '}
              <span style={{ color: 'var(--accent)' }}>Peaqock Financials</span>
              {' '}— mission, réalisations clés et stack technique.
            </p>
          </AnimatedSection>

          <div className="mt-10 space-y-6">
            {internships.map((item, i) => (
              <InternCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="glow-line" />

        {/* ── Formation ─────────────────────────────────── */}
        <div>
          <AnimatedSection>
            <span className="section-label">Formation</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
              Parcours académique
            </h2>
          </AnimatedSection>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {education.map((item, i) => (
              <EduCard key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* Documents téléchargeables */}
          <AnimatedSection delay={0.2}>
            <div className="mt-10">
              <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
                Documents &amp; Attestations
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {documents.map((doc, i) => (
                  <DocCard key={doc.id} doc={doc} index={i} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  )
}
