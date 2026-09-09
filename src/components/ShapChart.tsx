import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from 'recharts'
import { shapData } from '../data'

const sorted = [...shapData].sort((a, b) => Math.abs(b.value) - Math.abs(a.value))

interface TooltipPayload {
  payload: { feature: string; value: number; label: string }
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: TooltipPayload[] }) {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div
      className="rounded-lg px-3 py-2 text-xs font-mono"
      style={{
        background: 'var(--surface2)',
        border: '1px solid var(--border)',
        color: 'var(--text)',
      }}
    >
      <p className="font-medium mb-1">{d.feature}</p>
      <p style={{ color: 'var(--text-secondary)' }}>{d.label}</p>
      <p className="mt-1" style={{ color: d.value > 0 ? '#F87171' : '#60A5FA' }}>
        SHAP: {d.value > 0 ? '+' : ''}
        {d.value.toFixed(3)}
      </p>
    </div>
  )
}

export default function ShapChart() {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
    >
      {/* Header */}
      <div className="px-6 pt-5 pb-4 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="section-label mb-1">SHAP Explainability</p>
            <h3 className="text-base font-semibold" style={{ color: 'var(--text)' }}>
              Feature Contributions — TXN #7823941
            </h3>
          </div>
          <div className="shrink-0 text-right">
            <p className="font-mono text-2xl font-bold text-orange-400">0.73</p>
            <span
              className="font-mono text-xs px-2 py-0.5 rounded"
              style={{
                background: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.3)',
                color: '#F87171',
              }}
            >
              HIGH RISK
            </span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="px-6 pt-4 flex items-center gap-6">
        <span className="flex items-center gap-2 text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
          <span className="w-3 h-2 rounded-sm bg-red-400 inline-block" />
          Increases risk
        </span>
        <span className="flex items-center gap-2 text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
          <span className="w-3 h-2 rounded-sm bg-blue-400 inline-block" />
          Reduces risk
        </span>
      </div>

      {/* Chart */}
      <div className="px-2 py-4" style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sorted}
            layout="vertical"
            margin={{ top: 0, right: 40, left: 160, bottom: 0 }}
          >
            <XAxis
              type="number"
              domain={[-0.4, 0.4]}
              tickCount={5}
              tick={{ fill: 'var(--text-muted)', fontSize: 10, fontFamily: 'JetBrains Mono, monospace' }}
              axisLine={{ stroke: 'var(--border)' }}
              tickLine={false}
              tickFormatter={(v: number) => (v > 0 ? `+${v.toFixed(1)}` : v.toFixed(1))}
            />
            <YAxis
              type="category"
              dataKey="feature"
              width={155}
              tick={{ fill: 'var(--text-secondary)', fontSize: 11, fontFamily: 'JetBrains Mono, monospace' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
            <ReferenceLine x={0} stroke="rgba(255,255,255,0.12)" strokeWidth={1} />
            <Bar dataKey="value" radius={[0, 3, 3, 0]} maxBarSize={14}>
              {sorted.map((entry, i) => (
                <Cell
                  key={`cell-${i}`}
                  fill={entry.value > 0 ? '#F87171' : '#60A5FA'}
                  fillOpacity={0.7 + Math.abs(entry.value) / 0.35 * 0.3}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Decision */}
      <div
        className="mx-6 mb-5 rounded-lg px-4 py-3 flex items-center justify-between"
        style={{
          background: 'rgba(239,68,68,0.06)',
          border: '1px solid rgba(239,68,68,0.2)',
        }}
      >
        <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
          Sum of positive contributions exceeds protective factors · score 0.73 &gt; threshold 0.60
        </span>
        <span
          className="font-mono text-xs font-bold shrink-0 ml-4 px-3 py-1 rounded"
          style={{
            background: 'rgba(239,68,68,0.15)',
            border: '1px solid rgba(239,68,68,0.4)',
            color: '#F87171',
          }}
        >
          BLOCK
        </span>
      </div>
    </div>
  )
}
