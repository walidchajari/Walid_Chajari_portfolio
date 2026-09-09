export const personal = {
  name: 'Walid CHAJARI',
  title: 'Data Scientist',
  subtitle: 'Machine Learning · Explainable AI · Financial Data',
  tagline: 'Transforming transaction streams into explainable risk intelligence.',
  bio: `I work at the intersection of quantitative finance and machine learning.
My focus is building systems that don't just predict — they explain.
When a model flags a transaction, a business needs to know why.`,
  location: 'Casablanca, Morocco',
  email: 'walidchajari02@gmail.com',
  phone: '+212 606 405 381',
  github: 'https://github.com/walidchajari',
  linkedin: 'https://linkedin.com/in/walid-chajari-3b2272280',
  cv: '/cv.pdf',
  profileImage: '/profile.png',
}

export interface Project {
  id: string
  number: string
  title: string
  subtitle: string
  tags: string[]
  description: string
  highlights: string[]
  github?: string
  demo?: string
  status: 'flagship' | 'live' | 'research'
}

export const projects: Project[] = [
  {
    id: 'fraud-detection',
    number: '01',
    title: 'Explainable AI for Instant Payment Fraud Detection',
    subtitle: 'PFE · Peacock Financials',
    tags: ['Fraud Detection', 'Machine Learning', 'XAI', 'ISO 20022', 'Financial AI'],
    description:
      'A production-grade fraud detection system for instant payments using a hybrid unsupervised pipeline combined with SHAP-based explainability. Processes ISO 20022 PACS.008 transactions in real time, producing risk scores that compliance teams can interrogate — not just black-box predictions.',
    highlights: [
      'Hybrid model combining Isolation Forest, GRU Autoencoder, and business rules',
      'SHAP explanations for every flagged transaction',
      'Sub-second inference latency on ISO 20022 PACS.008 messages',
      'Three-tier decision system: APPROVE · REVIEW · BLOCK',
    ],
    github: 'https://github.com/walidchajari/Deduction_des_fraudesML',
    status: 'flagship',
  },
  {
    id: 'financial-intelligence',
    number: '02',
    title: 'Financial Intelligence Platform',
    subtitle: 'Marché marocain · AMMC · Bourse de Casablanca',
    tags: ['Python', 'Next.js 14', 'FastAPI', 'PostgreSQL', 'pgvector', 'FinBERT', 'Docker', 'AMMC'],
    description:
      'Plateforme complète d\'intelligence financière pour le marché marocain — collecte automatisée multi-sources (Yahoo Finance, AMMC, FRED, RSS, ESG), traitement de documents PDF financiers par pipeline multi-moteur, et recherche sémantique vectorielle sur 250+ émetteurs trilingue FR/EN/AR.',
    highlights: [
      '90+ sociétés marocaines · 12 secteurs · 250+ émetteurs AMMC',
      'Pipeline de collecte async : Yahoo Finance, AMMC, FRED, RSS + sentiment FinBERT, ESG',
      'DMS Phase 1 complète — scan, métadonnées, déduplication SHA-256, validation PDF',
      'Recherche vectorielle pgvector · sentence-transformers · trilingue FR/EN/AR',
      'Stack full-stack : Next.js 14 · FastAPI · PostgreSQL 16 · Docker · 15+ modèles ORM',
    ],
    github: 'https://github.com/walidchajari/financial-intelligence-platform-v2',
    status: 'research',
  },
  {
    id: 'bourse-casablanca',
    number: '03',
    title: 'Bourse Casablanca Live',
    subtitle: 'Real-Time Market Tracker',
    tags: ['Python', 'Flask', 'Playwright', 'Web Scraping'],
    description:
      'Real-time tracker for the Casablanca Stock Exchange. Scrapes live market data with Playwright and presents it in a clean web interface with dynamic charts.',
    highlights: [
      'Live data scraping with Playwright',
      'Dynamic charts and market overview',
    ],
    github: 'https://github.com/walidchajari/Bourse_Casablanca_Live',
    status: 'live',
  },
  {
    id: 'tradsense',
    number: '04',
    title: 'Tradsense',
    subtitle: 'Modern Trading Platform',
    tags: ['React', 'TypeScript', 'FastAPI', 'SQLAlchemy', 'Tailwind'],
    description:
      'A full-stack trading platform with authentication, real-time data feeds, portfolio tracking, and a clean analytics dashboard.',
    highlights: [
      'React + FastAPI full-stack architecture',
      'Real-time data integration and portfolio analytics',
    ],
    github: 'https://github.com/walidchajari/Tradsense_project',
    demo: 'https://tradsense-project-hj7w.vercel.app/',
    status: 'live',
  },
]

export interface SkillGroup {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Data Science',
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter'],
  },
  {
    category: 'Machine Learning',
    items: ['Isolation Forest', 'Autoencoders (GRU)', 'Anomaly Detection', 'Feature Engineering', 'XGBoost'],
  },
  {
    category: 'Explainable AI',
    items: ['SHAP', 'Model Interpretability', 'Risk Scoring', 'Fairness Analysis'],
  },
  {
    category: 'Data & Storage',
    items: ['SQL', 'PostgreSQL', 'MySQL', 'SQLite', 'ETL'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'REST API', 'Docker'],
  },
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'AI & LLM',
    items: ['RAG', 'LLM Integration', 'Knowledge Graph', 'Gemini AI'],
  },
  {
    category: 'Engineering',
    items: ['Git', 'Docker', 'Playwright', 'Jupyter', 'Linux'],
  },
]

export interface EducationItem {
  id: string
  year: string
  degree: string
  school: string
  description?: string
  mention?: string
}

export interface InternshipItem {
  id: string
  period: string
  title: string
  company: string
  location: string
  type: string
  mission: string
  bullets: string[]
  stack: string[]
}

export const education: EducationItem[] = [
  {
    id: 'master',
    year: '2025 — 2026',
    degree: 'Master Finance & Data Science',
    school: 'Université Hassan II — FSJES Mohammedia',
    description: 'Spécialisation en analyse financière quantitative et machine learning financier.',
    mention: 'Mention Bien',
  },
  {
    id: 'licence',
    year: '2023 — 2024',
    degree: 'Licence fondamentale en Gestion',
    school: 'Université Hassan II — FSJES Aïn Chock',
    description: 'Études fondamentales en gestion, économie et analyse financière.',
  },
  {
    id: 'bac',
    year: '2019',
    degree: 'Baccalauréat Sciences Expérimentales',
    school: 'Lycée Tarek Ibn Ziad — Hay Hassani, Casablanca',
    mention: 'Mention Bien',
    description: 'Option Sciences Physiques.',
  },
]

export interface DocumentItem {
  id: string
  label: string
  file: string
  type: string
}

export const documents: DocumentItem[] = [
  {
    id: 'attestation-master',
    label: 'Attestation Master',
    file: '/docs/attestation-master.pdf',
    type: 'Diplôme',
  },
  {
    id: 'attestation-fr',
    label: 'Attestation (FR)',
    file: '/docs/attestation-fr.pdf',
    type: 'Document officiel',
  },
  {
    id: 'certificat-allemand',
    label: 'Certificat Allemand',
    file: '/docs/certificat-allemand.pdf',
    type: 'Certification',
  },
  {
    id: 'cv',
    label: 'Curriculum Vitæ',
    file: '/cv.pdf',
    type: 'CV',
  },
]

export const internships: InternshipItem[] = [
  {
    id: 'peaqock-pfe',
    period: 'Février — Août 2026',
    title: 'Data Scientist / Machine Learning Engineer',
    company: 'Peaqock Financials',
    location: 'Casablanca, Maroc',
    type: 'Stage PFE',
    mission:
      'Concevoir et déployer une solution complète de détection de fraude bancaire sur les virements instantanés ISO 20022 PACS.008, avec une approche hybride combinant apprentissage non supervisé, deep learning et IA explicable (XAI), intégrée dans une architecture full stack production-ready.',
    bullets: [
      'Développement d\'un pipeline hybride : Isolation Forest + GRU Autoencoder + règles métier avec score pondéré.',
      'Feature engineering comportemental : loi de Benford, montants, agrégats clients, vélocité, bénéficiaires, entropie.',
      'Intégration de SHAP (XAI) pour l\'interprétation du score de risque ; système de décision APPROVE / REVIEW / BLOCK.',
      'Architecture full stack : Python, FastAPI, PostgreSQL et React — latence d\'inférence < 50 ms.',
    ],
    stack: ['Python', 'Isolation Forest', 'GRU Autoencoder', 'SHAP', 'FastAPI', 'PostgreSQL', 'React', 'Docker', 'ISO 20022'],
  },
  {
    id: 'peaqock-stage',
    period: 'Juillet — Octobre 2025',
    title: 'Stagiaire Data Science / Machine Learning',
    company: 'Peaqock Financials',
    location: 'Casablanca, Maroc',
    type: 'Stage',
    mission:
      'Détection intelligente des fraudes bancaires sur données synthétiques : explorer les approches de clustering et de classification supervisée pour identifier les profils suspects dans un jeu de transactions simulées.',
    bullets: [
      'Feature engineering comportemental : loi de Benford, montants, agrégats clients, vélocité, bénéficiaires et entropie.',
      'Exploration des profils transactionnels par clustering K-Means et scoring client pour hiérarchiser les suspects.',
      'Entraînement et optimisation de XGBoost avec ajustement du seuil de décision et validation croisée.',
      'Développement d\'une interface Streamlit pour l\'exploration, la détection et l\'export des résultats.',
    ],
    stack: ['Python', 'XGBoost', 'K-Means', 'Scikit-learn', 'Streamlit', 'Pandas', 'NumPy'],
  },
]

export const researchInterests = [
  { label: 'Fraud Detection', description: 'Real-time and batch anomaly detection in financial transactions.' },
  { label: 'Explainable AI', description: 'Making ML decisions interpretable for compliance and audit.' },
  { label: 'Anomaly Detection', description: 'Unsupervised and semi-supervised approaches to rare event detection.' },
  { label: 'Financial ML', description: 'Applying machine learning to financial modelling and risk analysis.' },
  { label: 'Risk Analytics', description: 'Hybrid scoring systems combining statistical and rule-based methods.' },
  { label: 'Document Intelligence', description: 'Extracting structured knowledge from unstructured financial documents.' },
]

export const languages = [
  { name: 'Arabic', level: 'Native', code: 'AR' },
  { name: 'French', level: 'B2', code: 'FR' },
  { name: 'English', level: 'B1', code: 'EN' },
  { name: 'German', level: 'B1', code: 'DE' },
]

export const shapData = [
  { feature: 'Amount z-score', value: 0.31, label: 'Large amount vs. history' },
  { feature: 'Velocity (1h)', value: 0.28, label: 'Unusually high frequency' },
  { feature: 'Hour of day', value: 0.15, label: '03:47 UTC — off-hours' },
  { feature: 'New counterparty', value: 0.12, label: 'Account age: 2 days' },
  { feature: 'Country risk', value: 0.09, label: 'High-risk jurisdiction' },
  { feature: 'Known beneficiary', value: -0.10, label: 'Recognised recipient' },
  { feature: 'Account maturity', value: -0.12, label: 'Established account (4y)' },
  { feature: 'Typical amount', value: -0.08, label: 'Near 7-day average' },
  { feature: 'Usual channel', value: -0.05, label: 'Standard transfer type' },
]
