import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const METRICS = [
  { label: 'AUC-ROC', value: '0.97', color: '#10B981' },
  { label: 'F1 Score', value: '0.93', color: '#3B82F6' },
  { label: 'Accuracy', value: '94.7%', color: '#0891B2' },
  { label: 'Precision', value: '0.95', color: '#8B5CF6' },
]

export default function MLMetrics() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="flex flex-wrap gap-2 mt-5">
      {METRICS.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 8, scale: 0.9 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs px-3 py-1.5 rounded-md flex items-center gap-2"
          style={{
            background: `${m.color}12`,
            border: `1px solid ${m.color}2E`,
            color: m.color,
          }}
        >
          <span style={{ color: 'var(--text-muted)' }}>{m.label}</span>
          <span className="font-bold">{m.value}</span>
        </motion.div>
      ))}
    </div>
  )
}
