import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const FULL_DATA = [
  { epoch: 1,  loss: 0.94, val: 0.97 },
  { epoch: 3,  loss: 0.80, val: 0.84 },
  { epoch: 5,  loss: 0.66, val: 0.72 },
  { epoch: 8,  loss: 0.51, val: 0.58 },
  { epoch: 12, loss: 0.38, val: 0.44 },
  { epoch: 16, loss: 0.28, val: 0.35 },
  { epoch: 20, loss: 0.21, val: 0.28 },
  { epoch: 25, loss: 0.15, val: 0.22 },
  { epoch: 30, loss: 0.11, val: 0.18 },
  { epoch: 35, loss: 0.08, val: 0.15 },
  { epoch: 40, loss: 0.07, val: 0.13 },
  { epoch: 50, loss: 0.06, val: 0.12 },
]

export default function LossChart() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [data, setData] = useState<typeof FULL_DATA>([])

  useEffect(() => {
    if (!inView) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setData(FULL_DATA.slice(0, i))
      if (i >= FULL_DATA.length) clearInterval(interval)
    }, 80)
    return () => clearInterval(interval)
  }, [inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-xl p-4"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
          Training Loss
        </span>
        <div className="flex items-center gap-4 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-0.5" style={{ background: '#3B82F6' }} /> train
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-0.5" style={{ background: '#10B981' }} /> val
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={140}>
        <AreaChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
          <defs>
            <linearGradient id="lossGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.18} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="valGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.12} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.06)" />
          <XAxis
            dataKey="epoch"
            tick={{ fill: 'var(--text-muted)', fontSize: 10, fontFamily: 'monospace' }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tick={{ fill: 'var(--text-muted)', fontSize: 10, fontFamily: 'monospace' }}
            tickLine={false}
            axisLine={false}
            domain={[0, 1]}
          />
          <Tooltip
            contentStyle={{
              background: 'var(--surface2)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              fontSize: 11,
              fontFamily: 'monospace',
              color: 'var(--text)',
            }}
            itemStyle={{ color: 'var(--text-secondary)' }}
            labelFormatter={(v) => `epoch ${v}`}
          />
          <Area
            type="monotone"
            dataKey="loss"
            stroke="#3B82F6"
            strokeWidth={1.5}
            fill="url(#lossGrad)"
            dot={false}
            isAnimationActive={false}
          />
          <Area
            type="monotone"
            dataKey="val"
            stroke="#10B981"
            strokeWidth={1.5}
            fill="url(#valGrad)"
            dot={false}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
