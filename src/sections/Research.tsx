import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import { researchInterests } from '../data'
import { useLanguage } from '../context/LanguageContext'

const accentColors = ['#0EA5E9', '#8B5CF6', '#10B981', '#F59E0B', '#F87171', '#7DD3FC']

export default function Research() {
  const { t, isRTL } = useLanguage()

  return (
    <section
      id="research"
      className="py-28 relative"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 80% 50%, rgba(14,165,233,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="section-container relative">
        <AnimatedSection>
          <span className="section-label">{t.research.label}</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
            {t.research.title}
          </h2>
          <p className="mt-3 text-sm max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            {t.research.subtitle}
          </p>
        </AnimatedSection>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {researchInterests.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="card p-5 group"
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold transition-all group-hover:scale-110"
                  style={{
                    background: `${accentColors[i % accentColors.length]}15`,
                    border: `1px solid ${accentColors[i % accentColors.length]}30`,
                    color: accentColors[i % accentColors.length],
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold mb-1.5 transition-colors"
                    style={{ color: 'var(--text)' }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div
                className="h-0.5 mt-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, ${accentColors[i % accentColors.length]}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Thesis highlight */}
        <AnimatedSection delay={0.3}>
          <motion.div
            className="mt-10 rounded-xl p-6 max-w-2xl relative overflow-hidden"
            style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}
            whileHover={{ borderColor: 'rgba(14,165,233,0.2)' }}
          >
            {/* Corner accent */}
            <div
              className="absolute top-0 left-0 w-1 h-full rounded-l-xl"
              style={{ background: 'linear-gradient(to bottom, #0EA5E9, #8B5CF6)' }}
            />
            <div className="pl-4">
              <p className="section-label mb-3">{t.research.focusLabel}</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t.research.focusText}
              </p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
