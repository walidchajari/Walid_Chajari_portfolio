import { motion } from 'framer-motion'

const stages = [
  {
    id: 'source',
    dot: '●',
    label: 'INCOMING TRANSACTION',
    value: '#TXN-7823941',
    meta: 'EUR 15,847.00  ·  PACS.008  ·  03:47:12 UTC',
    valueColor: 'var(--text)',
    delay: 0,
  },
  {
    id: 'features',
    dot: '├',
    label: 'FEATURE ENGINEERING',
    value: '12 features extracted',
    meta: 'velocity · amount · temporal · network · behavioural',
    valueColor: '#93C5FD',
    delay: 0.3,
  },
  {
    id: 'if',
    dot: '│ ├',
    label: 'ISOLATION FOREST',
    value: 'score 0.81',
    meta: 'global anomaly detection',
    valueColor: '#FCA5A5',
    delay: 0.55,
  },
  {
    id: 'gru',
    dot: '│ ├',
    label: 'GRU AUTOENCODER',
    value: 'recon. error 0.67',
    meta: 'temporal behaviour learning',
    valueColor: '#FCA5A5',
    delay: 0.7,
  },
  {
    id: 'rules',
    dot: '│ └',
    label: 'BUSINESS RULES',
    value: '2 / 5 triggered',
    meta: 'compliance & domain constraints',
    valueColor: '#FCD34D',
    delay: 0.85,
  },
  {
    id: 'score',
    dot: '├',
    label: 'HYBRID RISK SCORE',
    value: '0.73  ·  HIGH RISK',
    meta: '0.40×IF + 0.40×GRU + 0.20×BR',
    valueColor: '#F97316',
    delay: 1.1,
  },
  {
    id: 'decision',
    dot: '└',
    label: 'DECISION',
    value: 'BLOCK',
    meta: 'score > 0.60 threshold · refer to compliance',
    valueColor: '#EF4444',
    delay: 1.4,
    isDecision: true,
  },
]

export default function PipelineTerminal() {
  return (
    <div
      className="relative rounded-xl overflow-hidden font-mono"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
      }}
    >
      {/* Header bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="text-xs ml-2" style={{ color: 'var(--text-muted)' }}>
          fraud-detection-engine · live
        </span>
        <span className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
          <span className="text-xs text-emerald-400">RUNNING</span>
        </span>
      </div>

      {/* Pipeline stages */}
      <div className="px-5 py-5 space-y-4">
        {stages.map((stage) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: stage.delay, duration: 0.4, ease: 'easeOut' }}
            className="flex items-start gap-3"
          >
            <span
              className="text-xs pt-0.5 shrink-0 w-5 text-right select-none"
              style={{ color: 'var(--text-muted)' }}
            >
              {stage.dot}
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                <span className="text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>
                  {stage.label}
                </span>
                <span
                  className={`text-xs font-medium${stage.isDecision ? ' tracking-widest' : ''}`}
                  style={{
                    color: stage.valueColor,
                    ...(stage.isDecision
                      ? {
                          padding: '1px 8px',
                          border: '1px solid rgba(239,68,68,0.4)',
                          borderRadius: '4px',
                          background: 'rgba(239,68,68,0.08)',
                        }
                      : {}),
                  }}
                >
                  {stage.value}
                </span>
              </div>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)', fontSize: '10px' }}>
                {stage.meta}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div
        className="px-5 py-3 border-t flex items-center justify-between"
        style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
      >
        <span className="text-xs" style={{ color: 'var(--text-muted)', fontSize: '10px' }}>
          inference · 43ms
        </span>
        <span className="text-xs" style={{ color: 'var(--text-muted)', fontSize: '10px' }}>
          shap explanations generated
        </span>
      </div>
    </div>
  )
}
