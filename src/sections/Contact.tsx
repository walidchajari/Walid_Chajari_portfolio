import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { personal } from '../data'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t, isRTL } = useLanguage()

  const links = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}`, color: '#0EA5E9' },
    { icon: Linkedin, label: 'LinkedIn', value: 'walid-chajari-3b2272280', href: personal.linkedin, external: true, color: '#38BDF8' },
    { icon: Github, label: 'GitHub', value: 'walidchajari', href: personal.github, external: true, color: '#8B5CF6' },
    { icon: Phone, label: 'WhatsApp', value: personal.phone, href: `https://wa.me/212606405381`, external: true, color: '#10B981' },
  ]

  return (
    <section id="contact" className="py-28 relative" style={{ background: 'var(--bg)' }} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Orb */}
      <div
        className="orb absolute"
        style={{
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
          bottom: '-100px', right: '-100px',
          '--dur': '14s',
        } as React.CSSProperties}
      />

      <div className="section-container relative">
        <div className="max-w-xl mx-auto text-center">
          <AnimatedSection>
            <span className="section-label">{t.contact.label}</span>
            <h2
              className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ color: 'var(--text)', lineHeight: 1.1 }}
            >
              {t.contact.title}<br />
              <span className="text-gradient-accent">{t.contact.titleAccent}</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t.contact.subtitle}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div
              className="mt-10 rounded-xl overflow-hidden"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 px-5 py-4 group transition-all"
                  style={{
                    borderBottom: i < links.length - 1 ? '1px solid var(--border)' : 'none',
                    textDecoration: 'none',
                  }}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.025)' }}
                >
                  <motion.span
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${link.color}12`, border: `1px solid ${link.color}20` }}
                    whileHover={{ scale: 1.1, boxShadow: `0 0 16px ${link.color}25` }}
                  >
                    <link.icon size={15} style={{ color: link.color }} />
                  </motion.span>
                  <div className="flex-1 text-left min-w-0">
                    <p className="font-mono text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>
                      {link.label}
                    </p>
                    <p
                      className="text-sm font-medium truncate transition-colors group-hover:text-white"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {link.value}
                    </p>
                  </div>
                  <motion.span
                    className="text-xs shrink-0"
                    style={{ color: link.color }}
                    initial={{ opacity: 0, x: -4 }}
                    whileHover={{ opacity: 1, x: 0 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </div>

            <div className="mt-6 flex gap-3 justify-center">
              <motion.a
                href={`mailto:${personal.email}`}
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.contact.send}
              </motion.a>
              <motion.a
                href={personal.cv}
                download="Walid_CHAJARI_CV.pdf"
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.contact.download}
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
