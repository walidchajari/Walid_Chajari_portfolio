import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Download, MapPin } from 'lucide-react'
import { personal } from '../data'
import { useLanguage } from '../context/LanguageContext'
import PipelineTerminal from '../components/PipelineTerminal'
import NeuralCanvas from '../components/NeuralCanvas'

function useTyping(text: string, speed = 50) {
  const [displayed, setDisplayed] = useState('')
  const indexRef = useRef(0)

  useEffect(() => {
    indexRef.current = 0
    setDisplayed('')
    const timer = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayed(text.slice(0, indexRef.current + 1))
        indexRef.current++
      } else {
        clearInterval(timer)
      }
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed])

  return displayed
}

export default function Hero() {
  const { t, isRTL } = useLanguage()
  const tagline = useTyping(t.hero.tagline, 42)
  const [taglineDone, setTaglineDone] = useState(false)

  useEffect(() => {
    setTaglineDone(false)
    const timer = setTimeout(
      () => setTaglineDone(true),
      t.hero.tagline.length * 42 + 200
    )
    return () => clearTimeout(timer)
  }, [t.hero.tagline])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 grid-bg overflow-hidden"
      style={{ background: 'var(--bg)' }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Neural network background */}
      <NeuralCanvas />

      {/* Professional background accents — static, no floating animation */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1,
          background: [
            'radial-gradient(ellipse 60% 50% at 78% 12%, rgba(37,99,235,0.07) 0%, transparent 70%)',
            'radial-gradient(ellipse 40% 35% at 15% 85%, rgba(8,145,178,0.05) 0%, transparent 65%)',
          ].join(', '),
        }}
      />

      <div className="section-container w-full py-24 relative" style={{ zIndex: 2 }}>
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Left — Text ── */}
          <div>
            {/* Label + photo pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              {/* Inline photo */}
              <div
                className="w-10 h-10 rounded-full overflow-hidden shrink-0"
                style={{
                  boxShadow: '0 0 0 2px var(--accent), 0 0 0 4px rgba(59,130,246,0.15)',
                }}
              >
                <img
                  src={personal.profileImage}
                  alt="Walid CHAJARI"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full pulse-dot shrink-0"
                  style={{ background: 'var(--accent)' }}
                />
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
                  {t.hero.label}
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="hero-name-gradient text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
              style={{ lineHeight: 1.06 }}
            >
              {personal.name}
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1"
            >
              <p className="text-lg font-semibold" style={{ color: 'var(--text-secondary)' }}>
                {personal.subtitle}
              </p>
              <span className="hidden sm:inline" style={{ color: 'var(--text-muted)' }}>·</span>
              <span className="flex items-center gap-1 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                <MapPin size={11} />
                {personal.location}
              </span>
            </motion.div>

            {/* Tagline typing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-7 min-h-[3.5rem] flex items-start"
            >
              <p
                className="text-base lg:text-lg leading-relaxed max-w-xl"
                style={{ color: 'var(--text)', fontWeight: 450 }}
              >
                {tagline}
                {!taglineDone && <span className="typing-cursor" />}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-2 text-sm max-w-xl leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              {t.hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.75 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <button onClick={scrollToProjects} className="btn-primary gap-2">
                {t.hero.viewProjects}
                <ArrowRight size={14} />
              </button>
              <a href={personal.cv} download="Walid_CHAJARI_CV.pdf" className="btn-secondary gap-2">
                <Download size={14} />
                {t.hero.downloadCV}
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost gap-2 text-xs">
                <Linkedin size={14} />
                LinkedIn
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-ghost gap-2 text-xs">
                <Github size={14} />
                GitHub
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="font-mono text-xs transition-colors"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--accent)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-muted)')}
              >
                {personal.email}
              </a>
            </motion.div>
          </div>

          {/* ── Right — Pipeline terminal ── */}
          <motion.div
            initial={{ opacity: 0, x: 28, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <PipelineTerminal />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 2 }}
      >
        <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>
          {t.hero.scrollHint}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 1, height: 32,
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
          }}
        />
      </motion.div>

      <div className="glow-line absolute bottom-0 left-0 right-0" style={{ zIndex: 2 }} />
    </section>
  )
}
