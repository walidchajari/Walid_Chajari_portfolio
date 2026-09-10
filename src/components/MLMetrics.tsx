import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const METRICS = [
  { label: 'AUC-ROC',  value: '0.97',  color: '#10B981' },
  { label: 'F1 Score', value: '0.93',  color: '#3B82F6' },
  { label: 'Accuracy', value: '94.7%', color: '#0891B2' },
  { label: 'Precision',value: '0.95',  color: '#8B5CF6' },
]

// Data science keywords shown as subtle background text
const BG_TERMS = [
  'model.fit()',   'accuracy',       'epoch=50',    'gradient',
  'recall',        'f1_score',       'roc_auc',     'confusion_matrix',
  'sklearn',       'torch.nn',       'backprop',    'optimizer',
  'train_test_split', 'precision',   'cross_val',   'hyperparameter',
  'dropout=0.2',   'batch_size=32', 'lr=1e-3',     'val_loss',
  'feature_importance', 'SHAP',      'XGBoost',     'RandomForest',
]

export default function MLMetrics() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="relative mt-5 rounded-xl overflow-hidden" style={{ padding: '14px 0' }}>

      {/* Data science font background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <div
          className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs leading-relaxed"
          style={{ color: 'var(--accent)', opacity: 0.07, lineHeight: 1.7, padding: '2px 4px' }}
        >
          {Array.from({ length: 3 }, () => BG_TERMS).flat().map((term, i) => (
            <span key={i}>{term}</span>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="relative flex flex-wrap gap-2" style={{ zIndex: 1 }}>
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
              backdropFilter: 'blur(2px)',
            }}
          >
            <span style={{ color: 'var(--text-muted)' }}>{m.label}</span>
            <span className="font-bold">{m.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
