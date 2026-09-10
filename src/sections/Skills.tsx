import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import { skills } from '../data'
import { useLanguage } from '../context/LanguageContext'
import NeuralCanvas from '../components/NeuralCanvas'
import MatrixRain from '../components/MatrixRain'

const categoryColors = [
  'var(--accent)',
  'var(--accent-2)',
  '#10B981',
  '#F59E0B',
  '#F87171',
  '#A78BFA',
  '#34D399',
  '#60A5FA',
]

export default function Skills() {
  const { t, isRTL } = useLanguage()

  return (
    <section
      id="skills"
      className="py-28 relative"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <NeuralCanvas count={30} />
      <MatrixRain opacity={0.05} />

      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(139,92,246,0.03) 0%, transparent 70%)',
          zIndex: 1,
        }}
      />

      <div className="section-container relative" style={{ zIndex: 2 }}>
        <AnimatedSection>
          <span className="section-label">{t.skills.label}</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
            {t.skills.title}
          </h2>
          <p className="mt-3 text-sm max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            {t.skills.subtitle}
          </p>
        </AnimatedSection>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: gi * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="card p-5 flex flex-col gap-3"
            >
              {/* Category header with color accent */}
              <div className="flex items-center gap-2 pb-3" style={{ borderBottom: '1px solid var(--border)' }}>
                <span
                  className="w-1.5 h-4 rounded-full"
                  style={{ background: categoryColors[gi % categoryColors.length], opacity: 0.8 }}
                />
                <p
                  className="font-mono text-xs font-medium tracking-wider uppercase"
                  style={{ color: categoryColors[gi % categoryColors.length] }}
                >
                  {group.category}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.06 + ii * 0.04 }}
                    className="tag"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
