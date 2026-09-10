export type Lang = 'en' | 'fr' | 'ar' | 'de'

export interface Translations {
  nav: {
    about: string; projects: string; skills: string
    experience: string; research: string; contact: string; resume: string
  }
  hero: {
    label: string; tagline: string; description: string
    viewProjects: string; downloadCV: string; scrollHint: string
  }
  about: {
    label: string; title: string; titleAccent: string
    bio1: string; bio2: string; bio3: string
    stats: { projects: string; focus: string; standard: string }
    education: string; languages: string
    roleSubtitle: string; availability: string; mentionBien: string
    masterDegree: string; licenceDegree: string
  }
  projects: {
    label: string; title: string; subtitle: string
    caseStudy: string; code: string; demo: string
    statusLabels: { flagship: string; live: string; research: string }
  }
  skills: {
    label: string; title: string; subtitle: string
  }
  experience: {
    label: string; title: string
    typeLabels: { education: string; experience: string }
    professionalLabel: string; internshipsTitle: string; internshipsSubtitle: string
    pfeLabel: string; missionLabel: string; achievementsLabel: string
    educationLabel: string; academicTitle: string; docsLabel: string
  }
  research: {
    label: string; title: string; subtitle: string; focusLabel: string
    focusText: string
  }
  contact: {
    label: string; title: string; titleAccent: string
    subtitle: string; send: string; download: string
  }
  footer: { role: string }
  content: {
    projects: Record<string, { title: string; description: string; highlights: string[] }>
    internships: Record<string, { type: string; title: string; period: string; mission: string; bullets: string[] }>
    education: Record<string, { degree: string; description: string }>
    researchInterests: Array<{ label: string; description: string }>
    documents: { diploma: string; official: string; certification: string; cv: string }
    languageNames: string[]
    nativeLevel: string
  }
}

export const translations: Record<Lang, Translations> = {
  // ─────────────────────────────────────────────────────────────────────────────
  // ENGLISH
  // ─────────────────────────────────────────────────────────────────────────────
  en: {
    nav: {
      about: 'About', projects: 'Projects', skills: 'Skills',
      experience: 'Experience', research: 'Research', contact: 'Contact', resume: 'Resume',
    },
    hero: {
      label: 'Data Scientist · Casablanca, Morocco',
      tagline: 'Transforming transaction streams into explainable risk intelligence.',
      description: 'Master Finance & Data Science · Université Hassan II · Fraud detection, XAI, and financial ML.',
      viewProjects: 'View Projects', downloadCV: 'Download CV', scrollHint: 'scroll',
    },
    about: {
      label: 'About', title: 'Where finance meets', titleAccent: 'machine learning',
      bio1: `I work at the intersection of quantitative finance and machine learning. My focus is building systems that don't just predict — they explain. When a model flags a transaction, a business needs to know why.`,
      bio2: `My background in finance gives me the domain understanding to build models that are not only technically sound but operationally meaningful. I know the difference between a model that scores well on a validation set and a system that works in production.`,
      bio3: `Currently completing a Master in Finance & Data Science at Université Hassan II, with my PFE focused on explainable fraud detection for instant payment systems — at the crossroads of ML, regulatory compliance, and real-time infrastructure.`,
      stats: { projects: 'Major Projects', focus: 'Core Focus', standard: 'Domain Standard' },
      education: 'Education', languages: 'Languages',
      roleSubtitle: 'Data Scientist · ML Engineer',
      availability: 'Available · Open to work',
      mentionBien: 'With Distinction',
      masterDegree: 'Master Finance & Data Science',
      licenceDegree: 'Bachelor in Management Sciences',
    },
    projects: {
      label: 'Projects', title: 'What I build',
      subtitle: 'End-to-end systems — from raw data to production inference. Click a flagship or research project for the full case study.',
      caseStudy: 'Case study', code: 'Code', demo: 'Demo',
      statusLabels: { flagship: 'Flagship', live: 'Live', research: 'Research' },
    },
    skills: {
      label: 'Technical Stack', title: 'Tools & technologies',
      subtitle: 'Organised by domain — not a logo grid. Each category reflects where I can build independently.',
    },
    experience: {
      label: 'Experience & Education', title: 'My journey',
      typeLabels: { education: 'Education', experience: 'Experience' },
      professionalLabel: 'Professional Experience',
      internshipsTitle: 'Internships & assignments',
      internshipsSubtitle: '2 internships at Peaqock Financials — mission, key achievements and technology stack.',
      pfeLabel: 'Final Year Project',
      missionLabel: 'Mission / Goal',
      achievementsLabel: 'Key achievements',
      educationLabel: 'Education',
      academicTitle: 'Academic background',
      docsLabel: 'Documents & Certificates',
    },
    research: {
      label: 'Research Interests', title: 'How I think',
      subtitle: 'My academic and applied work orbits a consistent set of questions at the intersection of financial systems and intelligent automation.',
      focusLabel: 'Current Focus',
      focusText: `My PFE investigates how unsupervised learning (Isolation Forest, GRU Autoencoders) can detect anomalies in instant payment streams while maintaining full explainability via SHAP — enabling compliance teams to act on model decisions without treating them as black boxes.`,
    },
    contact: {
      label: 'Contact', title: "Let's build intelligent", titleAccent: 'financial systems.',
      subtitle: 'Open to PFE internships, junior data science roles, freelance missions, and conversations around financial ML. I respond within 24 hours.',
      send: 'Send a message', download: 'Download CV',
    },
    footer: { role: 'Data Scientist' },
    content: {
      projects: {
        'fraud-detection': {
          title: 'Explainable AI for Instant Payment Fraud Detection',
          description: 'A production-grade fraud detection system for instant payments using a hybrid unsupervised pipeline combined with SHAP-based explainability. Processes ISO 20022 PACS.008 transactions in real time, producing risk scores that compliance teams can interrogate — not just black-box predictions.',
          highlights: [
            'Hybrid model combining Isolation Forest, GRU Autoencoder, and business rules',
            'SHAP explanations for every flagged transaction',
            'Sub-second inference latency on ISO 20022 PACS.008 messages',
            'Three-tier decision system: APPROVE · REVIEW · BLOCK',
          ],
        },
        'financial-intelligence': {
          title: 'Financial Intelligence Platform',
          description: 'A comprehensive financial intelligence platform for the Moroccan market — multi-source automated collection (Yahoo Finance, AMMC, FRED, RSS, ESG), multi-engine PDF pipeline processing, and trilingual vector semantic search across 250+ issuers (FR/EN/AR).',
          highlights: [
            '90+ Moroccan companies · 12 sectors · 250+ AMMC issuers',
            'Async collection pipeline: Yahoo Finance, AMMC, FRED, RSS + FinBERT sentiment, ESG',
            'Complete DMS Phase 1 — scan, metadata, SHA-256 deduplication, PDF validation',
            'pgvector semantic search · sentence-transformers · trilingual FR/EN/AR',
            'Full-stack: Next.js 14 · FastAPI · PostgreSQL 16 · Docker · 15+ ORM models',
          ],
        },
        'bourse-casablanca': {
          title: 'Bourse Casablanca Live',
          description: 'Real-time tracker for the Casablanca Stock Exchange. Scrapes live market data with Playwright and presents it in a clean web interface with dynamic charts.',
          highlights: [
            'Live data scraping with Playwright',
            'Dynamic charts and market overview',
          ],
        },
        'tradsense': {
          title: 'Tradsense',
          description: 'A full-stack trading platform with authentication, real-time data feeds, portfolio tracking, and a clean analytics dashboard.',
          highlights: [
            'React + FastAPI full-stack architecture',
            'Real-time data integration and portfolio analytics',
          ],
        },
      },
      internships: {
        'peaqock-pfe': {
          type: 'Final Year Project Internship',
          title: 'Data Scientist / Machine Learning Engineer',
          period: 'February — August 2026',
          mission: 'Design and deploy a complete bank fraud detection solution for instant payments on ISO 20022 PACS.008, using a hybrid approach combining unsupervised learning, deep learning and explainable AI (XAI), integrated into a production-ready full-stack architecture.',
          bullets: [
            'Development of a hybrid pipeline: Isolation Forest + GRU Autoencoder + business rules with weighted scoring.',
            'Behavioural feature engineering: Benford\'s law, amounts, customer aggregates, velocity, beneficiaries, entropy.',
            'SHAP (XAI) integration for risk score interpretation; APPROVE / REVIEW / BLOCK decision system.',
            'Full-stack architecture: Python, FastAPI, PostgreSQL and React — inference latency < 50 ms.',
          ],
        },
        'peaqock-stage': {
          type: 'Internship',
          title: 'Data Science / Machine Learning Intern',
          period: 'July — October 2025',
          mission: 'Intelligent fraud detection on synthetic banking data: explore clustering and supervised classification approaches to identify suspicious profiles in a simulated transaction dataset.',
          bullets: [
            'Behavioural feature engineering: Benford\'s law, amounts, customer aggregates, velocity, beneficiaries and entropy.',
            'Exploration of transactional profiles via K-Means clustering and customer scoring to prioritise suspects.',
            'Training and optimisation of XGBoost with decision threshold tuning and cross-validation.',
            'Development of a Streamlit interface for exploration, detection and results export.',
          ],
        },
      },
      education: {
        master: {
          degree: 'Master Finance & Data Science',
          description: 'Specialisation in quantitative financial analysis and financial machine learning.',
        },
        licence: {
          degree: 'Bachelor in Management Sciences',
          description: 'Foundational studies in management, economics and financial analysis.',
        },
        bac: {
          degree: 'Baccalaureate in Experimental Sciences',
          description: 'Physical Sciences option.',
        },
      },
      researchInterests: [
        { label: 'Fraud Detection', description: 'Real-time and batch anomaly detection in financial transactions.' },
        { label: 'Explainable AI', description: 'Making ML decisions interpretable for compliance and audit.' },
        { label: 'Anomaly Detection', description: 'Unsupervised and semi-supervised approaches to rare event detection.' },
        { label: 'Financial ML', description: 'Applying machine learning to financial modelling and risk analysis.' },
        { label: 'Risk Analytics', description: 'Hybrid scoring systems combining statistical and rule-based methods.' },
        { label: 'Document Intelligence', description: 'Extracting structured knowledge from unstructured financial documents.' },
      ],
      documents: { diploma: 'Diploma', official: 'Official document', certification: 'Certification', cv: 'CV' },
      languageNames: ['Arabic', 'French', 'English', 'German'],
      nativeLevel: 'Native',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // FRANÇAIS
  // ─────────────────────────────────────────────────────────────────────────────
  fr: {
    nav: {
      about: 'À propos', projects: 'Projets', skills: 'Compétences',
      experience: 'Parcours', research: 'Recherche', contact: 'Contact', resume: 'CV',
    },
    hero: {
      label: 'Data Scientist · Casablanca, Maroc',
      tagline: 'Transformer les flux de transactions en intelligence de risque explicable.',
      description: 'Master Finance & Data Science · Université Hassan II · Détection de fraude, IA explicable et ML financier.',
      viewProjects: 'Voir les projets', downloadCV: 'Télécharger le CV', scrollHint: 'défiler',
    },
    about: {
      label: 'À propos', title: 'Là où la finance rencontre', titleAccent: "l'apprentissage automatique",
      bio1: `Je travaille à l'intersection de la finance quantitative et du machine learning. Mon objectif est de construire des systèmes qui ne se contentent pas de prédire — ils expliquent. Quand un modèle signale une transaction, le métier doit savoir pourquoi.`,
      bio2: `Ma formation en finance me donne la compréhension métier pour créer des modèles non seulement solides techniquement, mais aussi opérationnellement pertinents. Je connais la différence entre un score élevé sur un jeu de validation et un système qui fonctionne en production.`,
      bio3: `Je termine actuellement un Master Finance & Data Science à l'Université Hassan II, avec un PFE centré sur la détection de fraude explicable dans les virements instantanés — à la croisée du ML, de la conformité réglementaire et des infrastructures temps réel.`,
      stats: { projects: 'Projets majeurs', focus: 'Focus principal', standard: 'Standard métier' },
      education: 'Formation', languages: 'Langues',
      roleSubtitle: 'Data Scientist · ML Engineer',
      availability: 'Disponible · À l\'écoute du marché',
      mentionBien: 'Mention Bien',
      masterDegree: 'Master Finance & Data Science',
      licenceDegree: 'Licence Fondamentale en Gestion',
    },
    projects: {
      label: 'Projets', title: 'Ce que je construis',
      subtitle: 'Des systèmes complets — de la donnée brute à l\'inférence en production. Cliquez sur un projet phare ou de recherche pour l\'étude de cas complète.',
      caseStudy: 'Étude de cas', code: 'Code', demo: 'Démo',
      statusLabels: { flagship: 'Phare', live: 'En ligne', research: 'Recherche' },
    },
    skills: {
      label: 'Stack Technique', title: 'Outils & technologies',
      subtitle: 'Organisé par domaine — pas une grille de logos. Chaque catégorie reflète ce que je peux construire de manière autonome.',
    },
    experience: {
      label: 'Expérience & Formation', title: 'Mon parcours',
      typeLabels: { education: 'Formation', experience: 'Expérience' },
      professionalLabel: 'Expérience professionnelle',
      internshipsTitle: 'Stages & missions',
      internshipsSubtitle: '2 stages chez Peaqock Financials — mission, réalisations clés et stack technique.',
      pfeLabel: 'Projet de fin d\'études',
      missionLabel: 'Mission / But',
      achievementsLabel: 'Réalisations clés',
      educationLabel: 'Formation',
      academicTitle: 'Parcours académique',
      docsLabel: 'Documents & Attestations',
    },
    research: {
      label: 'Intérêts de Recherche', title: 'Comment je pense',
      subtitle: "Mon travail académique et appliqué gravite autour d'un ensemble cohérent de questions à l'intersection des systèmes financiers et de l'automatisation intelligente.",
      focusLabel: 'Focus actuel',
      focusText: `Mon PFE explore comment l'apprentissage non supervisé (Isolation Forest, GRU Autoencoders) peut détecter des anomalies dans les flux de paiements instantanés tout en maintenant une explicabilité complète via SHAP — permettant aux équipes conformité d'agir sur les décisions du modèle sans les traiter comme des boîtes noires.`,
    },
    contact: {
      label: 'Contact', title: 'Construisons des systèmes', titleAccent: 'financiers intelligents.',
      subtitle: 'Disponible pour des stages PFE, postes junior en data science, missions freelance et échanges autour du ML financier. Je réponds sous 24 heures.',
      send: 'Envoyer un message', download: 'Télécharger le CV',
    },
    footer: { role: 'Data Scientist' },
    content: {
      projects: {
        'fraud-detection': {
          title: 'IA Explicable pour la Détection de Fraude sur Paiements Instantanés',
          description: 'Système de détection de fraude de niveau production pour les paiements instantanés, basé sur un pipeline hybride non supervisé couplé à l\'explicabilité SHAP. Traite les transactions ISO 20022 PACS.008 en temps réel, produisant des scores de risque interrogeables par les équipes conformité — pas de simples prédictions boîte noire.',
          highlights: [
            'Modèle hybride combinant Isolation Forest, GRU Autoencoder et règles métier',
            'Explications SHAP pour chaque transaction signalée',
            'Latence d\'inférence inférieure à la seconde sur messages ISO 20022 PACS.008',
            'Système de décision à trois niveaux : APPROUVER · EXAMINER · BLOQUER',
          ],
        },
        'financial-intelligence': {
          title: 'Plateforme d\'Intelligence Financière',
          description: 'Plateforme complète d\'intelligence financière pour le marché marocain — collecte automatisée multi-sources (Yahoo Finance, AMMC, FRED, RSS, ESG), traitement de documents PDF financiers par pipeline multi-moteur, et recherche sémantique vectorielle sur 250+ émetteurs trilingue FR/EN/AR.',
          highlights: [
            '90+ sociétés marocaines · 12 secteurs · 250+ émetteurs AMMC',
            'Pipeline de collecte async : Yahoo Finance, AMMC, FRED, RSS + sentiment FinBERT, ESG',
            'DMS Phase 1 complète — scan, métadonnées, déduplication SHA-256, validation PDF',
            'Recherche vectorielle pgvector · sentence-transformers · trilingue FR/EN/AR',
            'Stack full-stack : Next.js 14 · FastAPI · PostgreSQL 16 · Docker · 15+ modèles ORM',
          ],
        },
        'bourse-casablanca': {
          title: 'Bourse Casablanca Live',
          description: 'Tableau de bord en temps réel pour la Bourse de Casablanca. Collecte les données de marché en direct avec Playwright et les présente dans une interface web épurée avec des graphiques dynamiques.',
          highlights: [
            'Collecte de données en temps réel avec Playwright',
            'Graphiques dynamiques et vue d\'ensemble du marché',
          ],
        },
        'tradsense': {
          title: 'Tradsense',
          description: 'Plateforme de trading full-stack avec authentification, flux de données en temps réel, suivi de portefeuille et tableau de bord analytique épuré.',
          highlights: [
            'Architecture full-stack React + FastAPI',
            'Intégration de données en temps réel et analytique de portefeuille',
          ],
        },
      },
      internships: {
        'peaqock-pfe': {
          type: 'Stage PFE',
          title: 'Data Scientist / Machine Learning Engineer',
          period: 'Février — Août 2026',
          mission: 'Concevoir et déployer une solution complète de détection de fraude bancaire sur les virements instantanés ISO 20022 PACS.008, avec une approche hybride combinant apprentissage non supervisé, deep learning et IA explicable (XAI), intégrée dans une architecture full stack production-ready.',
          bullets: [
            'Développement d\'un pipeline hybride : Isolation Forest + GRU Autoencoder + règles métier avec score pondéré.',
            'Feature engineering comportemental : loi de Benford, montants, agrégats clients, vélocité, bénéficiaires, entropie.',
            'Intégration de SHAP (XAI) pour l\'interprétation du score de risque ; système de décision APPROVE / REVIEW / BLOCK.',
            'Architecture full stack : Python, FastAPI, PostgreSQL et React — latence d\'inférence < 50 ms.',
          ],
        },
        'peaqock-stage': {
          type: 'Stage',
          title: 'Stagiaire Data Science / Machine Learning',
          period: 'Juillet — Octobre 2025',
          mission: 'Détection intelligente des fraudes bancaires sur données synthétiques : explorer les approches de clustering et de classification supervisée pour identifier les profils suspects dans un jeu de transactions simulées.',
          bullets: [
            'Feature engineering comportemental : loi de Benford, montants, agrégats clients, vélocité, bénéficiaires et entropie.',
            'Exploration des profils transactionnels par clustering K-Means et scoring client pour hiérarchiser les suspects.',
            'Entraînement et optimisation de XGBoost avec ajustement du seuil de décision et validation croisée.',
            'Développement d\'une interface Streamlit pour l\'exploration, la détection et l\'export des résultats.',
          ],
        },
      },
      education: {
        master: {
          degree: 'Master Finance & Data Science',
          description: 'Spécialisation en analyse financière quantitative et machine learning financier.',
        },
        licence: {
          degree: 'Licence Fondamentale en Gestion',
          description: 'Études fondamentales en gestion, économie et analyse financière.',
        },
        bac: {
          degree: 'Baccalauréat Sciences Expérimentales',
          description: 'Option Sciences Physiques.',
        },
      },
      researchInterests: [
        { label: 'Détection de fraude', description: 'Détection d\'anomalies en temps réel et par lots dans les transactions financières.' },
        { label: 'IA Explicable', description: 'Rendre les décisions des modèles ML interprétables pour la conformité et l\'audit.' },
        { label: 'Détection d\'anomalies', description: 'Approches non supervisées et semi-supervisées pour la détection d\'événements rares.' },
        { label: 'ML Financier', description: 'Application du machine learning à la modélisation financière et à l\'analyse du risque.' },
        { label: 'Analyse du risque', description: 'Systèmes de scoring hybrides combinant méthodes statistiques et règles métier.' },
        { label: 'Intelligence documentaire', description: 'Extraction de connaissances structurées depuis des documents financiers non structurés.' },
      ],
      documents: { diploma: 'Diplôme', official: 'Document officiel', certification: 'Certification', cv: 'CV' },
      languageNames: ['Arabe', 'Français', 'Anglais', 'Allemand'],
      nativeLevel: 'Natif',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // ARABIC / العربية
  // ─────────────────────────────────────────────────────────────────────────────
  ar: {
    nav: {
      about: 'حول', projects: 'المشاريع', skills: 'المهارات',
      experience: 'المسار', research: 'البحث', contact: 'التواصل', resume: 'السيرة الذاتية',
    },
    hero: {
      label: 'عالم بيانات · الدار البيضاء، المغرب',
      tagline: 'تحويل تدفقات المعاملات إلى ذكاء مخاطر قابل للتفسير.',
      description: 'ماجستير التمويل وعلم البيانات · جامعة الحسن الثاني · كشف الاحتيال، الذكاء الاصطناعي القابل للتفسير، والتعلم الآلي المالي.',
      viewProjects: 'عرض المشاريع', downloadCV: 'تحميل السيرة الذاتية', scrollHint: 'تمرير',
    },
    about: {
      label: 'حول', title: 'حيث يلتقي التمويل مع', titleAccent: 'التعلم الآلي',
      bio1: `أعمل عند تقاطع التمويل الكمي والتعلم الآلي. تركيزي على بناء أنظمة لا تتنبأ فحسب — بل تشرح. عندما يُشير النموذج إلى معاملة ما، يحتاج العمل إلى معرفة السبب.`,
      bio2: `خلفيتي في التمويل تمنحني الفهم العميق لبناء نماذج ليست صحيحة تقنياً فحسب، بل مفيدة عملياً. أعرف الفرق بين نموذج يحقق نتائج جيدة في التحقق ونظام يعمل في الإنتاج.`,
      bio3: `أُنهي حالياً ماجستير التمويل وعلم البيانات في جامعة الحسن الثاني، مع مشروع تخرج يركز على الكشف القابل للتفسير عن الاحتيال في منظومة المدفوعات الفورية — عند تقاطع التعلم الآلي والامتثال التنظيمي والبنية التحتية الفورية.`,
      stats: { projects: 'مشاريع رئيسية', focus: 'التركيز الأساسي', standard: 'معيار المجال' },
      education: 'التعليم', languages: 'اللغات',
      roleSubtitle: 'عالم بيانات · مهندس تعلم آلي',
      availability: 'متاح · مفتوح للفرص المهنية',
      mentionBien: 'بتقدير جيد جداً',
      masterDegree: 'ماجستير التمويل وعلم البيانات',
      licenceDegree: 'إجازة في علوم التسيير والإدارة',
    },
    projects: {
      label: 'المشاريع', title: 'ما أبنيه',
      subtitle: 'أنظمة متكاملة — من البيانات الخام إلى الاستدلال في الإنتاج. انقر على مشروع رئيسي أو بحثي للحصول على دراسة الحالة الكاملة.',
      caseStudy: 'دراسة حالة', code: 'الكود', demo: 'تجريبي',
      statusLabels: { flagship: 'رائد', live: 'مباشر', research: 'بحث' },
    },
    skills: {
      label: 'المكدس التقني', title: 'الأدوات والتقنيات',
      subtitle: 'منظم حسب المجال — ليس شبكة شعارات. كل فئة تعكس ما يمكنني بناؤه باستقلالية.',
    },
    experience: {
      label: 'الخبرة والتعليم', title: 'مسيرتي',
      typeLabels: { education: 'تعليم', experience: 'خبرة' },
      professionalLabel: 'الخبرة المهنية',
      internshipsTitle: 'التدريبات والمهام',
      internshipsSubtitle: 'تدريبان في Peaqock Financials — المهمة والإنجازات الرئيسية والمكدس التقني.',
      pfeLabel: 'مشروع التخرج',
      missionLabel: 'المهمة / الهدف',
      achievementsLabel: 'الإنجازات الرئيسية',
      educationLabel: 'التعليم',
      academicTitle: 'المسار الأكاديمي',
      docsLabel: 'الوثائق والشهادات',
    },
    research: {
      label: 'اهتمامات البحث', title: 'كيف أفكر',
      subtitle: 'يدور عملي الأكاديمي والتطبيقي حول مجموعة متسقة من الأسئلة عند تقاطع الأنظمة المالية والأتمتة الذكية.',
      focusLabel: 'التركيز الحالي',
      focusText: `يستكشف مشروع تخرجي كيف يمكن للتعلم غير الخاضع للإشراف (Isolation Forest و GRU Autoencoders) الكشف عن الحالات الشاذة في تدفقات المدفوعات الفورية مع الحفاظ على القابلية الكاملة للتفسير عبر SHAP — مما يُتيح لفرق الامتثال التصرف بناءً على قرارات النموذج دون التعامل معها كصندوق أسود.`,
    },
    contact: {
      label: 'التواصل', title: 'لنبني أنظمة مالية', titleAccent: 'ذكية.',
      subtitle: 'متاح لتدريب PFE، وظائف علم البيانات المبتدئة، مهام مستقلة، ومناقشات حول التعلم الآلي المالي. أرد خلال 24 ساعة.',
      send: 'إرسال رسالة', download: 'تحميل السيرة الذاتية',
    },
    footer: { role: 'عالم بيانات' },
    content: {
      projects: {
        'fraud-detection': {
          title: 'الذكاء الاصطناعي القابل للتفسير للكشف عن الاحتيال في المدفوعات الفورية',
          description: 'نظام كشف احتيال على مستوى الإنتاج لمنظومة المدفوعات الفورية، يعتمد على خط أنابيب هجين غير خاضع للإشراف مقترناً بقابلية التفسير عبر SHAP. يعالج معاملات ISO 20022 PACS.008 في الوقت الفعلي، ويُنتج درجات مخاطر قابلة للفحص من قِبَل فرق الامتثال — لا مجرد تنبؤات غامضة.',
          highlights: [
            'نموذج هجين يجمع Isolation Forest و GRU Autoencoder وقواعد عمل تجارية',
            'تفسيرات SHAP لكل معاملة مُبلَّغ عنها',
            'زمن استجابة دون ثانية على رسائل ISO 20022 PACS.008',
            'نظام قرار ثلاثي المستويات: موافقة · مراجعة · حجب',
          ],
        },
        'financial-intelligence': {
          title: 'منصة الذكاء المالي',
          description: 'منصة شاملة للذكاء المالي للسوق المغربي — جمع بيانات متعدد المصادر (Yahoo Finance، AMMC، FRED، RSS، ESG)، معالجة وثائق PDF المالية بخط أنابيب متعدد المحركات، وبحث دلالي متجهي على 250+ جهة إصدار بثلاث لغات (FR/EN/AR).',
          highlights: [
            '90+ شركة مغربية · 12 قطاعاً · 250+ جهة إصدار AMMC',
            'خط أنابيب جمع غير متزامن: Yahoo Finance و AMMC و FRED و RSS + تحليل مشاعر FinBERT و ESG',
            'المرحلة الأولى من DMS مكتملة — مسح، بيانات وصفية، إلغاء تكرار SHA-256، تحقق PDF',
            'بحث متجهي pgvector · sentence-transformers · ثلاثي اللغة FR/EN/AR',
            'تقنية full-stack: Next.js 14 · FastAPI · PostgreSQL 16 · Docker · 15+ نموذج ORM',
          ],
        },
        'bourse-casablanca': {
          title: 'بورصة الدار البيضاء المباشرة',
          description: 'متتبع في الوقت الفعلي لبورصة الدار البيضاء. يجمع بيانات السوق الحية باستخدام Playwright ويعرضها في واجهة ويب نظيفة مع مخططات ديناميكية.',
          highlights: [
            'جمع البيانات في الوقت الفعلي باستخدام Playwright',
            'مخططات ديناميكية ونظرة عامة على السوق',
          ],
        },
        'tradsense': {
          title: 'Tradsense',
          description: 'منصة تداول متكاملة مع المصادقة وتغذيات البيانات في الوقت الفعلي وتتبع المحافظ ولوحة تحليلات أنيقة.',
          highlights: [
            'بنية full-stack React + FastAPI',
            'تكامل البيانات في الوقت الفعلي وتحليلات المحفظة',
          ],
        },
      },
      internships: {
        'peaqock-pfe': {
          type: 'تدريب مشروع التخرج',
          title: 'عالم بيانات / مهندس تعلم آلي',
          period: 'فبراير — أغسطس 2026',
          mission: 'تصميم ونشر حل متكامل للكشف عن الاحتيال البنكي في التحويلات الفورية ISO 20022 PACS.008، باتباع نهج هجين يجمع التعلم غير الخاضع للإشراف والتعلم العميق والذكاء الاصطناعي القابل للتفسير (XAI)، مدمجاً في بنية full-stack جاهزة للإنتاج.',
          bullets: [
            'تطوير خط أنابيب هجين: Isolation Forest + GRU Autoencoder + قواعد عمل بدرجة موزونة.',
            'هندسة ميزات سلوكية: قانون بنفورد، المبالغ، تجميعات العملاء، السرعة، المستفيدون، الإنتروبيا.',
            'تكامل SHAP (XAI) لتفسير درجة المخاطر؛ نظام قرار APPROVE / REVIEW / BLOCK.',
            'بنية full-stack: Python و FastAPI و PostgreSQL و React — زمن استجابة أقل من 50 ميلي ثانية.',
          ],
        },
        'peaqock-stage': {
          type: 'تدريب',
          title: 'متدرب في علم البيانات / التعلم الآلي',
          period: 'يوليو — أكتوبر 2025',
          mission: 'الكشف الذكي عن الاحتيال البنكي على بيانات اصطناعية: استكشاف أساليب التجميع والتصنيف الخاضع للإشراف لتحديد الأنماط المشبوهة في مجموعة معاملات محاكاة.',
          bullets: [
            'هندسة ميزات سلوكية: قانون بنفورد، المبالغ، تجميعات العملاء، السرعة، المستفيدون والإنتروبيا.',
            'استكشاف الأنماط المعاملاتية عبر تجميع K-Means وتسجيل درجات العملاء لترتيب المشتبه بهم.',
            'تدريب XGBoost وضبطه مع تحسين عتبة القرار والتحقق المتقاطع.',
            'تطوير واجهة Streamlit للاستكشاف والكشف وتصدير النتائج.',
          ],
        },
      },
      education: {
        master: {
          degree: 'ماجستير التمويل وعلم البيانات',
          description: 'تخصص في التحليل المالي الكمي وتعلم الآلة المالي.',
        },
        licence: {
          degree: 'إجازة في علوم التسيير والإدارة',
          description: 'دراسات أساسية في الإدارة والاقتصاد والتحليل المالي.',
        },
        bac: {
          degree: 'البكالوريا في العلوم التجريبية',
          description: 'خيار العلوم الفيزيائية.',
        },
      },
      researchInterests: [
        { label: 'كشف الاحتيال', description: 'الكشف عن الشذوذ في الوقت الفعلي وعلى دفعات في المعاملات المالية.' },
        { label: 'الذكاء الاصطناعي القابل للتفسير', description: 'جعل قرارات نماذج التعلم الآلي قابلة للتفسير لأغراض الامتثال والتدقيق.' },
        { label: 'كشف الشذوذ', description: 'أساليب غير خاضعة للإشراف وشبه خاضعة للكشف عن الأحداث النادرة.' },
        { label: 'التعلم الآلي المالي', description: 'تطبيق التعلم الآلي على النمذجة المالية وتحليل المخاطر.' },
        { label: 'تحليلات المخاطر', description: 'أنظمة تسجيل هجينة تجمع بين الأساليب الإحصائية والقواعد المبنية على المعرفة.' },
        { label: 'الذكاء الوثائقي', description: 'استخراج المعرفة المنظمة من الوثائق المالية غير المنظمة.' },
      ],
      documents: { diploma: 'شهادة', official: 'وثيقة رسمية', certification: 'شهادة معتمدة', cv: 'سيرة ذاتية' },
      languageNames: ['العربية', 'الفرنسية', 'الإنجليزية', 'الألمانية'],
      nativeLevel: 'اللغة الأم',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // DEUTSCH
  // ─────────────────────────────────────────────────────────────────────────────
  de: {
    nav: {
      about: 'Über mich', projects: 'Projekte', skills: 'Fähigkeiten',
      experience: 'Werdegang', research: 'Forschung', contact: 'Kontakt', resume: 'Lebenslauf',
    },
    hero: {
      label: 'Data Scientist · Casablanca, Marokko',
      tagline: 'Transaktionsströme in erklärbare Risikointelligenz verwandeln.',
      description: 'Master Finance & Data Science · Universität Hassan II · Betrugserkennung, erklärbare KI und Financial ML.',
      viewProjects: 'Projekte ansehen', downloadCV: 'Lebenslauf herunterladen', scrollHint: 'scrollen',
    },
    about: {
      label: 'Über mich', title: 'Wo Finanzen auf', titleAccent: 'maschinelles Lernen trifft',
      bio1: `Ich arbeite an der Schnittstelle von quantitativer Finanzwirtschaft und maschinellem Lernen. Mein Fokus liegt auf dem Aufbau von Systemen, die nicht nur vorhersagen — sondern erklären. Wenn ein Modell eine Transaktion markiert, muss das Unternehmen wissen warum.`,
      bio2: `Mein Finanz-Hintergrund gibt mir das Domänenwissen, um Modelle zu entwickeln, die nicht nur technisch solide, sondern auch operativ sinnvoll sind. Ich kenne den Unterschied zwischen einem Modell mit guten Validierungswerten und einem System, das in der Produktion funktioniert.`,
      bio3: `Ich schließe derzeit meinen Master in Finance & Data Science an der Universität Hassan II ab, mit einer Abschlussarbeit zur erklärbaren Betrugserkennung für Sofortzahlungssysteme — an der Schnittstelle von ML, regulatorischer Compliance und Echtzeit-Infrastruktur.`,
      stats: { projects: 'Hauptprojekte', focus: 'Schwerpunkt', standard: 'Branchenstandard' },
      education: 'Ausbildung', languages: 'Sprachen',
      roleSubtitle: 'Data Scientist · ML-Ingenieur',
      availability: 'Verfügbar · Offen für neue Stellen',
      mentionBien: 'Mit Auszeichnung',
      masterDegree: 'Master Finance & Data Science',
      licenceDegree: 'Bachelorabschluss in Betriebswirtschaft',
    },
    projects: {
      label: 'Projekte', title: 'Was ich baue',
      subtitle: 'Ende-zu-Ende-Systeme — von Rohdaten bis zur Produktionsinferenz. Klicken Sie auf ein Flaggschiff- oder Forschungsprojekt für die vollständige Fallstudie.',
      caseStudy: 'Fallstudie', code: 'Code', demo: 'Demo',
      statusLabels: { flagship: 'Hauptprojekt', live: 'Live', research: 'Forschung' },
    },
    skills: {
      label: 'Technischer Stack', title: 'Werkzeuge & Technologien',
      subtitle: 'Nach Domäne organisiert — kein Logo-Raster. Jede Kategorie zeigt, wo ich eigenständig aufbauen kann.',
    },
    experience: {
      label: 'Erfahrung & Ausbildung', title: 'Mein Werdegang',
      typeLabels: { education: 'Ausbildung', experience: 'Erfahrung' },
      professionalLabel: 'Berufserfahrung',
      internshipsTitle: 'Praktika & Einsätze',
      internshipsSubtitle: '2 Praktika bei Peaqock Financials — Mission, wichtigste Leistungen und Tech-Stack.',
      pfeLabel: 'Abschlussarbeit',
      missionLabel: 'Mission / Ziel',
      achievementsLabel: 'Wichtigste Leistungen',
      educationLabel: 'Ausbildung',
      academicTitle: 'Akademischer Werdegang',
      docsLabel: 'Dokumente & Zeugnisse',
    },
    research: {
      label: 'Forschungsinteressen', title: 'Wie ich denke',
      subtitle: 'Meine akademische und angewandte Arbeit kreist um eine konsistente Reihe von Fragen an der Schnittstelle von Finanzsystemen und intelligenter Automatisierung.',
      focusLabel: 'Aktueller Schwerpunkt',
      focusText: `Meine Abschlussarbeit untersucht, wie unüberwachtes Lernen (Isolation Forest, GRU Autoencoders) Anomalien in Sofortzahlungsströmen erkennen kann und dabei vollständige Erklärbarkeit via SHAP beibehält — sodass Compliance-Teams auf Modellentscheidungen reagieren können, ohne sie als Black Box zu behandeln.`,
    },
    contact: {
      label: 'Kontakt', title: 'Lassen Sie uns intelligente', titleAccent: 'Finanzsysteme bauen.',
      subtitle: 'Offen für Abschlussarbeit-Praktika, Junior-Data-Science-Stellen, Freelance-Missionen und Gespräche über Financial ML. Ich antworte innerhalb von 24 Stunden.',
      send: 'Nachricht senden', download: 'Lebenslauf herunterladen',
    },
    footer: { role: 'Data Scientist' },
    content: {
      projects: {
        'fraud-detection': {
          title: 'Erklärbare KI zur Betrugserkennung bei Sofortzahlungen',
          description: 'Ein produktionsreifes Betrugserkennungssystem für Sofortzahlungen, das eine hybride unüberwachte Pipeline mit SHAP-basierter Erklärbarkeit kombiniert. Verarbeitet ISO 20022 PACS.008-Transaktionen in Echtzeit und liefert Risikoscores, die Compliance-Teams nachvollziehen können — keine reinen Black-Box-Vorhersagen.',
          highlights: [
            'Hybrides Modell aus Isolation Forest, GRU Autoencoder und Geschäftsregeln',
            'SHAP-Erklärungen für jede markierte Transaktion',
            'Inferenzlatenz unter einer Sekunde für ISO 20022 PACS.008-Nachrichten',
            'Dreistufiges Entscheidungssystem: GENEHMIGEN · PRÜFEN · SPERREN',
          ],
        },
        'financial-intelligence': {
          title: 'Finanzintelligenz-Plattform',
          description: 'Eine umfassende Finanzintelligenz-Plattform für den marokkanischen Markt — automatisierte Mehrdatenquellen-Erfassung (Yahoo Finance, AMMC, FRED, RSS, ESG), mehrsprachige PDF-Verarbeitungspipeline und trilinguale vektorbasierte Semantiksuche über 250+ Emittenten (FR/EN/AR).',
          highlights: [
            '90+ marokkanische Unternehmen · 12 Sektoren · 250+ AMMC-Emittenten',
            'Asynchrone Erfassungspipeline: Yahoo Finance, AMMC, FRED, RSS + FinBERT-Sentiment, ESG',
            'Vollständige DMS Phase 1 — Scan, Metadaten, SHA-256-Deduplizierung, PDF-Validierung',
            'pgvector-Semantiksuche · sentence-transformers · trilingual FR/EN/AR',
            'Full-Stack: Next.js 14 · FastAPI · PostgreSQL 16 · Docker · 15+ ORM-Modelle',
          ],
        },
        'bourse-casablanca': {
          title: 'Bourse Casablanca Live',
          description: 'Echtzeit-Tracker für die Casablanca Stock Exchange. Scrapt Live-Marktdaten mit Playwright und stellt sie in einer übersichtlichen Web-Oberfläche mit dynamischen Charts dar.',
          highlights: [
            'Live-Daten-Scraping mit Playwright',
            'Dynamische Charts und Marktübersicht',
          ],
        },
        'tradsense': {
          title: 'Tradsense',
          description: 'Eine Full-Stack-Handelsplattform mit Authentifizierung, Echtzeit-Datenfeeds, Portfolio-Tracking und einem übersichtlichen Analyse-Dashboard.',
          highlights: [
            'React + FastAPI Full-Stack-Architektur',
            'Echtzeit-Datenintegration und Portfolio-Analytik',
          ],
        },
      },
      internships: {
        'peaqock-pfe': {
          type: 'Abschlussarbeit-Praktikum',
          title: 'Data Scientist / Machine Learning Engineer',
          period: 'Februar — August 2026',
          mission: 'Entwurf und Bereitstellung einer vollständigen Bankbetrugserkennung für Sofortzahlungen auf ISO 20022 PACS.008, mit einem hybriden Ansatz aus unüberwachtem Lernen, Deep Learning und erklärbarer KI (XAI), integriert in einer produktionsreifen Full-Stack-Architektur.',
          bullets: [
            'Entwicklung einer hybriden Pipeline: Isolation Forest + GRU Autoencoder + Geschäftsregeln mit gewichtetem Scoring.',
            'Verhaltensbasiertes Feature Engineering: Benfordsches Gesetz, Beträge, Kundenaggregationen, Velocity, Begünstigte, Entropie.',
            'SHAP (XAI)-Integration zur Risikoscore-Interpretation; Entscheidungssystem GENEHMIGEN / PRÜFEN / SPERREN.',
            'Full-Stack-Architektur: Python, FastAPI, PostgreSQL und React — Inferenzlatenz < 50 ms.',
          ],
        },
        'peaqock-stage': {
          type: 'Praktikum',
          title: 'Data Science / Machine Learning Praktikant',
          period: 'Juli — Oktober 2025',
          mission: 'Intelligente Betrugserkennung auf synthetischen Bankdaten: Erkundung von Clustering- und überwachten Klassifikationsansätzen zur Identifizierung verdächtiger Profile in einem simulierten Transaktionsdatensatz.',
          bullets: [
            'Verhaltensbasiertes Feature Engineering: Benfordsches Gesetz, Beträge, Kundenaggregationen, Velocity, Begünstigte und Entropie.',
            'Analyse von Transaktionsprofilen via K-Means-Clustering und Kunden-Scoring zur Priorisierung von Verdächtigen.',
            'Training und Optimierung von XGBoost mit Entscheidungsschwellen-Tuning und Kreuzvalidierung.',
            'Entwicklung einer Streamlit-Oberfläche für Exploration, Erkennung und Ergebnisexport.',
          ],
        },
      },
      education: {
        master: {
          degree: 'Master Finance & Data Science',
          description: 'Spezialisierung auf quantitative Finanzanalyse und Financial Machine Learning.',
        },
        licence: {
          degree: 'Grundlagenabschluss in Betriebswirtschaft',
          description: 'Grundstudium in Management, Wirtschaft und Finanzanalyse.',
        },
        bac: {
          degree: 'Abitur Naturwissenschaften',
          description: 'Schwerpunkt Physikalische Wissenschaften.',
        },
      },
      researchInterests: [
        { label: 'Betrugserkennung', description: 'Echtzeit- und Batch-Anomalieerkennung in Finanztransaktionen.' },
        { label: 'Erklärbare KI', description: 'ML-Entscheidungen für Compliance und Audit nachvollziehbar machen.' },
        { label: 'Anomalieerkennung', description: 'Unüberwachte und semi-überwachte Ansätze zur Erkennung seltener Ereignisse.' },
        { label: 'Financial ML', description: 'Anwendung von Machine Learning auf Finanzmodellierung und Risikoanalyse.' },
        { label: 'Risikoanalyse', description: 'Hybride Scoring-Systeme, die statistische und regelbasierte Methoden kombinieren.' },
        { label: 'Dokumentenintelligenz', description: 'Strukturiertes Wissen aus unstrukturierten Finanzdokumenten extrahieren.' },
      ],
      documents: { diploma: 'Diplom', official: 'Amtliches Dokument', certification: 'Zertifizierung', cv: 'Lebenslauf' },
      languageNames: ['Arabisch', 'Französisch', 'Englisch', 'Deutsch'],
      nativeLevel: 'Muttersprache',
    },
  },
}
