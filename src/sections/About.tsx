import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import { personal, languages } from '../data'
import { useLanguage } from '../context/LanguageContext'
import NeuralCanvas from '../components/NeuralCanvas'
import MLMetrics from '../components/MLMetrics'

export default function About() {
  const { t, isRTL } = useLanguage()

  return (
    <section id="about" className="py-28 relative" style={{ background: 'var(--bg)' }} dir={isRTL ? 'rtl' : 'ltr'}>
      <NeuralCanvas count={24} />
      {/* Subtle accent line at top */}
      <div className="glow-line absolute top-0 left-0 right-0" style={{ zIndex: 1 }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        <AnimatedSection>
          <span className="section-label">{t.about.label}</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: 'var(--text)', lineHeight: 1.12 }}>
            {t.about.title}<br />
            <span className="text-gradient-accent">{t.about.titleAccent}</span>
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <AnimatedSection className="lg:col-span-3" delay={0.1}>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              <p>{t.about.bio3}</p>
            </div>

            {/* ML Metrics KPI bar with data science background */}
            <MLMetrics />
          </AnimatedSection>

          {/* Right panel */}
          <AnimatedSection className="lg:col-span-2 space-y-3" delay={0.2}>
            {/* Profile card */}
            {personal.profileImage && (
              <motion.div
                className="card overflow-hidden"
                whileHover={{ scale: 1.01 }}
              >
                {/* Blue accent bar */}
                <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #2563EB, #0891B2)' }} />
                <div className="p-5 flex flex-col items-center text-center gap-4">
                  {/* Photo */}
                  <div className="relative">
                    <div
                      className="w-24 h-24 rounded-full overflow-hidden"
                      style={{
                        boxShadow: '0 0 0 2px var(--accent), 0 0 0 4px rgba(59,130,246,0.12), 0 8px 24px rgba(0,8,20,0.4)',
                      }}
                    >
                      <img
                        src={personal.profileImage}
                        alt="Walid CHAJARI"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <span
                      className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full border-2"
                      style={{ background: 'var(--success)', borderColor: 'var(--surface)' }}
                    />
                  </div>

                  {/* Identity */}
                  <div>
                    <p className="font-bold text-base" style={{ color: 'var(--text)' }}>
                      {personal.name}
                    </p>
                    <p className="font-mono text-xs mt-1" style={{ color: 'var(--accent)' }}>
                      {t.about.roleSubtitle}
                    </p>
                    <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                      {personal.location}
                    </p>
                  </div>

                  {/* Status */}
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-xs" style={{ color: '#34D399' }}>
                      {t.about.availability}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Education */}
            <div className="card p-5">
              <p className="section-label mb-3">{t.about.education}</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                    {t.about.masterDegree}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                    Université Hassan II · 2025–2026
                  </p>
                  <span className="tag-accent mt-2 inline-block">{t.about.mentionBien}</span>
                </div>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12 }}>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                    {t.about.licenceDegree}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                    Université Hassan II · 2021–2024
                  </p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="card p-5">
              <p className="section-label mb-3">{t.about.languages}</p>
              <div className="space-y-2">
                {languages.map((lang, i) => {
                  const displayName = t.content.languageNames[i] ?? lang.name
                  const displayLevel = lang.level === 'Native' ? t.content.nativeLevel : lang.level
                  const isHighLevel = lang.level === 'Native' || lang.level === 'B2'
                  return (
                    <motion.div
                      key={lang.code}
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: isRTL ? -12 : 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                    >
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {displayName}
                      </span>
                      <span
                        className="tag"
                        style={{
                          color: isHighLevel ? 'var(--accent)' : 'var(--text-secondary)',
                          borderColor: isHighLevel ? 'rgba(14,165,233,0.3)' : 'var(--border)',
                        }}
                      >
                        {displayLevel}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
