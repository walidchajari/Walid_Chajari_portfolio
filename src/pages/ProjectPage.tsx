import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import { projects } from '../data'
import ShapChart from '../components/ShapChart'

// ─── Fraud Detection Detail ───────────────────────────────────────────────────

function FeatureCategories() {
  const categories = [
    {
      name: 'Velocity',
      items: ['tx_count_1h', 'tx_count_24h', 'tx_count_7d', 'velocity_ratio'],
      color: '#60A5FA',
    },
    {
      name: 'Amount',
      items: ['amount_zscore', 'amount_vs_avg_7d', 'amount_percentile', 'large_amount_flag'],
      color: '#F472B6',
    },
    {
      name: 'Temporal',
      items: ['hour_of_day', 'day_of_week', 'is_off_hours', 'hour_risk_score'],
      color: '#A78BFA',
    },
    {
      name: 'Network',
      items: ['counterparty_age_days', 'new_beneficiary_flag', 'country_risk', 'iban_valid'],
      color: '#34D399',
    },
    {
      name: 'Statistical',
      items: ['rolling_mean_7d', 'rolling_std_7d', 'isolation_score_raw', 'reconstruction_error'],
      color: '#FBBF24',
    },
    {
      name: 'Behavioural',
      items: ['channel_usual', 'device_known', 'beneficiary_known', 'account_age_days'],
      color: '#F87171',
    },
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="card p-4 group hover:border-white/10 transition-colors"
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-1.5 h-4 rounded-full"
              style={{ background: cat.color, opacity: 0.7 }}
            />
            <span className="font-mono text-xs font-medium" style={{ color: cat.color }}>
              {cat.name}
            </span>
          </div>
          <ul className="space-y-1">
            {cat.items.map((item) => (
              <li key={item} className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function ModelArchitecture() {
  const models = [
    {
      name: 'Isolation Forest',
      weight: '40%',
      purpose: 'Global anomaly detection',
      description:
        'Isolates observations by randomly partitioning data. Anomalies, being few and different, have shorter average path lengths. Excellent for detecting global outliers without assuming a data distribution.',
      output: 'Anomaly score ∈ [0,1]',
      color: '#60A5FA',
    },
    {
      name: 'GRU Autoencoder',
      weight: '40%',
      purpose: 'Temporal behaviour learning',
      description:
        'A recurrent neural network trained to reconstruct normal transaction sequences. High reconstruction error indicates behaviour that deviates from learned patterns — effective for sequential and behavioural anomalies.',
      output: 'Reconstruction error ∈ [0,1]',
      color: '#A78BFA',
    },
    {
      name: 'Business Rules',
      weight: '20%',
      purpose: 'Compliance constraints',
      description:
        'Deterministic rules encoding domain knowledge: velocity limits, country risk tiers, off-hours patterns, and regulatory thresholds. Ensures the system always respects hard compliance boundaries.',
      output: 'Rule trigger count',
      color: '#34D399',
    },
  ]

  return (
    <div className="space-y-4">
      {/* Formula */}
      <div
        className="rounded-xl p-5 font-mono text-sm text-center"
        style={{
          background: 'var(--surface2)',
          border: '1px solid var(--border)',
          color: 'var(--text-secondary)',
        }}
      >
        <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>HYBRID RISK SCORE</p>
        <p style={{ color: 'var(--text)' }}>
          Score ={' '}
          <span style={{ color: '#60A5FA' }}>0.40 × IF</span>
          {' '}+{' '}
          <span style={{ color: '#A78BFA' }}>0.40 × GRU</span>
          {' '}+{' '}
          <span style={{ color: '#34D399' }}>0.20 × BR</span>
        </p>
      </div>

      {/* Models */}
      <div className="grid lg:grid-cols-3 gap-4">
        {models.map((model) => (
          <div
            key={model.name}
            className="card p-5 flex flex-col"
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className="font-mono text-xs font-medium"
                style={{ color: model.color }}
              >
                {model.name}
              </span>
              <span
                className="font-mono text-xs px-2 py-0.5 rounded"
                style={{
                  background: 'var(--surface2)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                }}
              >
                ×{model.weight}
              </span>
            </div>
            <p className="text-xs font-medium mb-2" style={{ color: 'var(--text)' }}>
              {model.purpose}
            </p>
            <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
              {model.description}
            </p>
            <p className="font-mono text-xs mt-3 pt-3" style={{ borderTop: '1px solid var(--border)', color: model.color }}>
              → {model.output}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function DecisionSystem() {
  const tiers = [
    {
      label: 'APPROVE',
      range: 'Score ≤ 0.30',
      description: 'Low risk. Transaction processed automatically.',
      color: '#22C55E',
      bg: 'rgba(34,197,94,0.06)',
      border: 'rgba(34,197,94,0.2)',
    },
    {
      label: 'REVIEW',
      range: '0.30 < Score ≤ 0.60',
      description: 'Elevated risk. Flagged for analyst review before processing.',
      color: '#F59E0B',
      bg: 'rgba(245,158,11,0.06)',
      border: 'rgba(245,158,11,0.2)',
    },
    {
      label: 'BLOCK',
      range: 'Score > 0.60',
      description: 'High risk. Transaction blocked. SHAP report sent to compliance.',
      color: '#EF4444',
      bg: 'rgba(239,68,68,0.06)',
      border: 'rgba(239,68,68,0.2)',
    },
  ]

  return (
    <div className="space-y-3">
      {tiers.map((tier) => (
        <div
          key={tier.label}
          className="flex items-center gap-5 rounded-xl px-5 py-4"
          style={{
            background: tier.bg,
            border: `1px solid ${tier.border}`,
          }}
        >
          <span
            className="font-mono text-sm font-bold w-20 shrink-0"
            style={{ color: tier.color }}
          >
            {tier.label}
          </span>
          <span
            className="font-mono text-xs shrink-0"
            style={{ color: tier.color, opacity: 0.7 }}
          >
            {tier.range}
          </span>
          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {tier.description}
          </span>
        </div>
      ))}
    </div>
  )
}

// ─── Financial Intelligence Detail ───────────────────────────────────────────

function FIPStats() {
  const stats = [
    { value: '90+', label: 'Sociétés marocaines', color: '#3B82F6' },
    { value: '12', label: 'Secteurs couverts', color: '#0891B2' },
    { value: '250+', label: 'Émetteurs AMMC', color: '#10B981' },
    { value: '15+', label: 'Modèles ORM', color: '#F59E0B' },
  ]
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="card p-5 text-center">
          <p className="font-mono text-3xl font-bold mb-1" style={{ color: s.color }}>{s.value}</p>
          <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{s.label}</p>
        </div>
      ))}
    </div>
  )
}

function FIArchitecture() {
  const layers = [
    {
      label: 'Frontend',
      tech: 'Next.js 14 · TypeScript · shadcn/ui · React Query · Recharts',
      port: ':3000',
      color: '#3B82F6',
      pages: ['/dashboard', '/companies', '/sectors', '/reports', '/upload', '/search'],
    },
    {
      label: 'Backend API',
      tech: 'FastAPI · Python 3.12 · JWT · Alembic · Pydantic v2',
      port: ':8000',
      color: '#0891B2',
      pages: ['POST /auth', 'GET /health', 'GET /docs (Swagger)'],
    },
    {
      label: 'PostgreSQL 16 + pgvector',
      tech: 'companies · documents · embeddings · knowledge_graph · macro',
      port: ':5432',
      color: '#10B981',
      pages: [],
    },
  ]
  const collectors = [
    { label: 'data_collection/', desc: 'Yahoo Finance · AMMC · FRED · RSS · ESG' },
    { label: 'dms/', desc: 'PDF scan · metadata · dedup SHA-256 · extraction' },
  ]

  return (
    <div className="space-y-3 max-w-2xl">
      {layers.map((l, i) => (
        <div key={l.label}>
          <div
            className="card p-4 flex items-start gap-4"
            style={{ borderLeft: `3px solid ${l.color}` }}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold" style={{ color: l.color }}>{l.label}</span>
                <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{l.port}</span>
              </div>
              <p className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>{l.tech}</p>
              {l.pages.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {l.pages.map((p) => (
                    <span key={p} className="tag" style={{ fontSize: 10 }}>{p}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
          {i < layers.length - 1 && (
            <div className="flex justify-center py-1">
              <div className="w-px h-4" style={{ background: 'var(--border)' }} />
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-center py-1">
        <div className="w-px h-4" style={{ background: 'var(--border)' }} />
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {collectors.map((c) => (
          <div key={c.label} className="card p-4" style={{ borderLeft: '3px solid rgba(148,163,184,0.3)' }}>
            <p className="font-mono text-xs font-bold mb-1" style={{ color: 'var(--text)' }}>{c.label}</p>
            <p className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function FIDataSources() {
  const sources = [
    {
      source: 'Yahoo Finance',
      data: 'Prix historiques, états financiers, infos entreprise',
      color: '#3B82F6',
    },
    {
      source: 'AMMC (ammc.ma)',
      data: 'Émetteurs, rapports annuels PDF, états financiers',
      color: '#0891B2',
    },
    {
      source: 'FRED API',
      data: 'Taux de change, inflation, PIB, taux directeurs',
      color: '#10B981',
    },
    {
      source: 'Flux RSS + FinBERT',
      data: 'Articles financiers + analyse de sentiment NLP',
      color: '#8B5CF6',
    },
    {
      source: 'ESG Scores',
      data: 'Environnemental, Social, Gouvernance',
      color: '#F59E0B',
    },
  ]
  const indicators = ['RSI', 'MACD', 'SMA/EMA', 'Bandes de Bollinger', 'ATR', 'Stochastique', 'OBV']

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        {sources.map((s) => (
          <div
            key={s.source}
            className="flex items-start gap-4 rounded-lg px-4 py-3"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
              style={{ background: s.color }}
            />
            <div>
              <span className="font-mono text-xs font-semibold" style={{ color: s.color }}>{s.source}</span>
              <span className="font-mono text-xs ml-3" style={{ color: 'var(--text-secondary)' }}>{s.data}</span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--text-muted)' }}>
          Indicateurs techniques calculés
        </p>
        <div className="flex flex-wrap gap-1.5">
          {indicators.map((i) => <span key={i} className="tag">{i}</span>)}
        </div>
      </div>
    </div>
  )
}

function FIDMSPipeline() {
  const phase1 = [
    'Scan de répertoires PDF',
    'Extraction des métadonnées (taille, pages, langue, année, type)',
    'Validation (format, intégrité, taille)',
    'Déduplication SHA-256',
    'Persistance PostgreSQL (companies · documents · logs)',
    'Rapport qualité JSON/CSV',
  ]
  const phase2 = [
    'Extraction multi-moteur : PyMuPDF → Docling → Camelot → pdfplumber → PaddleOCR',
    'Détection de sections (Bilan, CPC, Flux trésorerie, BFR, Notes)',
    'Extraction de 20+ variables financières trilingue FR/EN/AR',
    'Calcul de 25+ ratios (ROE, ROA, liquidité, levier, valorisation)',
    'Validation comptable (A = L + E, cohérence inter-années)',
    'Ontologie financière + analyse sémantique',
  ]

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Phase 1 */}
      <div className="card overflow-hidden">
        <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #10B981, #0891B2)' }} />
        <div className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs font-bold" style={{ color: '#10B981' }}>Phase 1</span>
            <span
              className="font-mono text-xs px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(16,185,129,0.10)', border: '1px solid rgba(16,185,129,0.25)', color: '#10B981' }}
            >
              ✓ Complète
            </span>
          </div>
          <ul className="space-y-2.5">
            {phase1.map((step, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
                <span className="shrink-0 mt-1 w-1 h-1 rounded-full bg-emerald-500" />
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Phase 2 */}
      <div className="card overflow-hidden">
        <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #F59E0B, #EF4444)' }} />
        <div className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs font-bold" style={{ color: '#F59E0B' }}>Phase 2</span>
            <span
              className="font-mono text-xs px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(245,158,11,0.10)', border: '1px solid rgba(245,158,11,0.25)', color: '#F59E0B' }}
            >
              ⟳ En cours
            </span>
          </div>
          <ul className="space-y-2.5">
            {phase2.map((step, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
                <span className="shrink-0 mt-1 w-1 h-1 rounded-full" style={{ background: '#F59E0B' }} />
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function FIRoadmap() {
  const done = [
    'Pipeline de collecte async (Yahoo Finance, AMMC, FRED, RSS, ESG)',
    '15+ modèles ORM, déduplication SHA-256, reprise sur erreur',
    'Pipeline DMS Phase 1 (scan, metadata, validation, dedup, rapport)',
    'Backend FastAPI avec JWT, CORS, Alembic',
    'Frontend Next.js avec dashboard, companies, sectors, search, upload',
  ]
  const inProgress = [
    'DMS Phase 2 — extraction multi-moteur (PyMuPDF → Docling → Camelot → PaddleOCR)',
    'DMS Phase 3 — extraction financière : 20+ variables, 25+ ratios, ontologie trilingue',
  ]
  const planned = [
    'Connexion backend ↔ data_collection (unification des deux APIs)',
    'Module research/ — 10 notebooks Jupyter + framework de benchmark',
    'Évaluation RAG (retrieval + qualité réponse)',
    'Benchmark embeddings (bge-m3, E5, GTE, MiniLM)',
  ]

  const Section = ({ title, items, color, icon }: { title: string; items: string[]; color: string; icon: string }) => (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span style={{ color }}>{icon}</span>
        <span className="font-mono text-xs font-semibold" style={{ color }}>{title}</span>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
            <span className="shrink-0 mt-1 w-1 h-1 rounded-full" style={{ background: color }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className="space-y-8 max-w-2xl">
      <Section title="Terminé" items={done} color="#10B981" icon="✓" />
      <div className="glow-line" />
      <Section title="En cours" items={inProgress} color="#F59E0B" icon="⟳" />
      <div className="glow-line" />
      <Section title="Planifié" items={planned} color="#3B82F6" icon="◇" />
    </div>
  )
}

// ─── Main Page Component ──────────────────────────────────────────────────────

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ background: 'var(--bg)' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Project not found.</p>
        <Link to="/" className="btn-primary">Back to home</Link>
      </div>
    )
  }

  const isFraud = id === 'fraud-detection'
  const isFinance = id === 'financial-intelligence'

  return (
    <motion.main
      initial={{ opacity: 0, filter: 'blur(6px)', scale: 0.995 }}
      animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(6px)', scale: 1.005 }}
      transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
      className="min-h-screen pt-24 pb-32"
      style={{ background: 'var(--bg)' }}
    >
      <div className="section-container">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="btn-ghost gap-2 mb-10 -ml-1"
        >
          <ArrowLeft size={14} />
          Back
        </button>

        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-label">{project.number}</span>
            {project.status === 'flagship' && (
              <span
                className="font-mono text-xs px-2 py-0.5 rounded"
                style={{
                  color: '#93C5FD',
                  background: 'rgba(59,130,246,0.08)',
                  border: '1px solid rgba(59,130,246,0.25)',
                }}
              >
                Flagship
              </span>
            )}
          </div>
          <h1
            className="text-3xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--text)', lineHeight: 1.1 }}
          >
            {project.title}
          </h1>
          <p className="font-mono text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            {project.subtitle}
          </p>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-accent">{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary gap-2"
              >
                <Github size={14} />
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost gap-2"
              >
                <ExternalLink size={14} />
                Live demo
              </a>
            )}
          </div>
        </div>

        {/* ─── FRAUD DETECTION CONTENT ─────────────────────────────── */}
        {isFraud && (
          <div className="space-y-20">
            {/* Problem */}
            <section>
              <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--text)' }}>
                <span className="section-label block mb-2">01 — Problem</span>
                Why instant payments make fraud harder
              </h2>
              <div
                className="max-w-3xl space-y-3 text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                <p>
                  Traditional fraud detection systems were designed for batch processing —
                  they had minutes or hours to evaluate a transaction. Instant payments (ISO 20022 PACS.008)
                  change that constraint to milliseconds. The system must decide before the money moves,
                  with no opportunity for retrospective correction.
                </p>
                <p>
                  Compounding this, fraudsters operate in low-signal environments: a single fraudulent
                  transaction looks nearly identical to a legitimate one. Supervised learning approaches
                  require labelled fraud data that is often scarce, delayed, or distorted by selection
                  bias. Unsupervised approaches can detect the unknown — but produce outputs that
                  compliance teams cannot act on without an explanation.
                </p>
                <p>
                  This project addresses both constraints: real-time detection via a hybrid unsupervised
                  pipeline, combined with SHAP-based post-hoc explainability for every flagged transaction.
                </p>
              </div>
            </section>

            {/* Data */}
            <section>
              <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--text)' }}>
                <span className="section-label block mb-2">02 — Data</span>
                ISO 20022 PACS.008 transaction features
              </h2>
              <p className="text-sm max-w-2xl mb-8" style={{ color: 'var(--text-secondary)' }}>
                The dataset consists of synthetic transactions structured around the ISO 20022 PACS.008
                message standard — the international norm for instant credit transfers. Synthetic
                generation ensures privacy compliance while preserving realistic statistical distributions.
              </p>
              <FeatureCategories />
            </section>

            {/* Models */}
            <section>
              <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--text)' }}>
                <span className="section-label block mb-2">03 — Architecture</span>
                Hybrid detection pipeline
              </h2>
              <ModelArchitecture />
            </section>

            {/* SHAP */}
            <section>
              <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--text)' }}>
                <span className="section-label block mb-2">04 — Explainability</span>
                SHAP feature contributions
              </h2>
              <p className="text-sm max-w-2xl mb-8" style={{ color: 'var(--text-secondary)' }}>
                For every transaction the system flags, a SHAP waterfall is generated — showing
                exactly which features drove the risk score up or down, and by how much.
                This is not post-hoc decoration: it is a compliance requirement.
              </p>
              <ShapChart />
            </section>

            {/* Decision */}
            <section>
              <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--text)' }}>
                <span className="section-label block mb-2">05 — Decision System</span>
                Three-tier risk classification
              </h2>
              <div className="max-w-2xl">
                <DecisionSystem />
              </div>
            </section>

            {/* Stack */}
            <section>
              <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--text)' }}>
                <span className="section-label block mb-2">06 — Stack</span>
                Technologies used
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python', 'Pandas', 'NumPy', 'Scikit-learn',
                  'Isolation Forest', 'GRU Autoencoder', 'SHAP',
                  'FastAPI', 'PostgreSQL', 'React', 'Tailwind CSS', 'Docker',
                  'ISO 20022', 'Feature Engineering',
                ].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ─── FINANCIAL INTELLIGENCE CONTENT ─────────────────────── */}
        {isFinance && (
          <div className="space-y-20">

            {/* 01 — Vue d'ensemble */}
            <section>
              <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--text)' }}>
                <span className="section-label block mb-3">01 — Vue d'ensemble</span>
                Trois axes d'intelligence financière
              </h2>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  {
                    num: '1',
                    title: 'Collecte automatisée',
                    desc: 'Pipeline async multi-sources : Yahoo Finance, AMMC, FRED, RSS (FinBERT sentiment), ESG — avec reprise sur erreur et export CSV/Parquet/JSON.',
                    color: '#3B82F6',
                  },
                  {
                    num: '2',
                    title: 'Traitement PDF (DMS)',
                    desc: 'Document Management System — scan, validation, déduplication SHA-256, extraction multi-moteur de variables financières en FR/EN/AR.',
                    color: '#0891B2',
                  },
                  {
                    num: '3',
                    title: 'Recherche sémantique',
                    desc: 'Embeddings vectoriels (pgvector + sentence-transformers) sur 250+ émetteurs. Interface de recherche trilingue FR/EN/AR.',
                    color: '#10B981',
                  },
                ].map((ax) => (
                  <div key={ax.num} className="card overflow-hidden">
                    <div className="h-0.5" style={{ background: ax.color }} />
                    <div className="p-5">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center font-mono text-sm font-bold mb-3"
                        style={{ background: `${ax.color}14`, color: ax.color }}
                      >
                        {ax.num}
                      </div>
                      <p className="font-semibold text-sm mb-2" style={{ color: 'var(--text)' }}>{ax.title}</p>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{ax.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <FIPStats />
            </section>

            {/* 02 — Architecture */}
            <section>
              <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--text)' }}>
                <span className="section-label block mb-3">02 — Architecture</span>
                Stack 4 couches · Full-stack · Dockerisé
              </h2>
              <FIArchitecture />
            </section>

            {/* 03 — Sources de données */}
            <section>
              <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--text)' }}>
                <span className="section-label block mb-3">03 — Sources de données</span>
                Pipeline de collecte async · 5 sources intégrées
              </h2>
              <div className="max-w-3xl">
                <FIDataSources />
              </div>
            </section>

            {/* 04 — DMS Pipeline */}
            <section>
              <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--text)' }}>
                <span className="section-label block mb-3">04 — DMS Pipeline</span>
                Traitement des PDFs financiers marocains · 90+ sociétés · 12 secteurs
              </h2>
              <FIDMSPipeline />
            </section>

            {/* 05 — Roadmap */}
            <section>
              <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--text)' }}>
                <span className="section-label block mb-3">05 — Roadmap</span>
                État d'avancement
              </h2>
              <FIRoadmap />
            </section>

            {/* 06 — Stack */}
            <section>
              <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--text)' }}>
                <span className="section-label block mb-3">06 — Stack technique</span>
                Technologies par couche
              </h2>
              <div className="space-y-4">
                {[
                  {
                    layer: 'Frontend',
                    color: '#3B82F6',
                    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'React Query', 'Recharts'],
                  },
                  {
                    layer: 'Backend',
                    color: '#0891B2',
                    tags: ['FastAPI', 'Python 3.12', 'SQLAlchemy async', 'Alembic', 'Pydantic v2', 'JWT', 'aiohttp'],
                  },
                  {
                    layer: 'Base de données',
                    color: '#10B981',
                    tags: ['PostgreSQL 16', 'pgvector', 'Docker Compose'],
                  },
                  {
                    layer: 'PDF & NLP',
                    color: '#8B5CF6',
                    tags: ['PyMuPDF', 'pdfplumber', 'Camelot', 'Docling', 'PaddleOCR', 'sentence-transformers', 'FinBERT', 'PyTorch'],
                  },
                  {
                    layer: 'Collecte & Données',
                    color: '#F59E0B',
                    tags: ['yfinance', 'AMMC scraper', 'FRED API', 'NetworkX', 'scikit-learn', 'tenacity', 'loguru'],
                  },
                ].map((group) => (
                  <div key={group.layer} className="flex flex-wrap items-center gap-2">
                    <span
                      className="font-mono text-xs font-semibold shrink-0 w-32"
                      style={{ color: group.color }}
                    >
                      {group.layer}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        )}
      </div>
    </motion.main>
  )
}
