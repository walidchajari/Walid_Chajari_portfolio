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
}

export const translations: Record<Lang, Translations> = {
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
  },

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
    },
    research: {
      label: 'Intérêts de Recherche', title: 'Comment je pense',
      subtitle: "Mon travail académique et appliqué gravite autour d'un ensemble cohérent de questions à l'intersection des systèmes financiers et de l'automatisation intelligente.",
      focusLabel: 'Focus actuel',
      focusText: `Mon PFE explore comment l'apprentissage non supervisé (Isolation Forest, GRU Autoencoders) peut détecter des anomalies dans les flux de paiements instantanés tout en maintenant une explicabilité complète via SHAP — permettant aux équipes compliance d'agir sur les décisions du modèle.`,
    },
    contact: {
      label: 'Contact', title: 'Construisons des systèmes', titleAccent: 'financiers intelligents.',
      subtitle: 'Disponible pour des stages PFE, postes junior en data science, missions freelance et échanges autour du ML financier. Je réponds sous 24 heures.',
      send: 'Envoyer un message', download: 'Télécharger le CV',
    },
    footer: { role: 'Data Scientist' },
  },

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
      bio3: `أُنهي حالياً ماجستير التمويل وعلم البيانات في جامعة الحسن الثاني، مع مشروع تخرج يركز على الكشف القابل للتفسير عن الاحتيال في منظومة المدفوعات الفورية.`,
      stats: { projects: 'مشاريع رئيسية', focus: 'التركيز الأساسي', standard: 'معيار المجال' },
      education: 'التعليم', languages: 'اللغات',
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
    },
    research: {
      label: 'اهتمامات البحث', title: 'كيف أفكر',
      subtitle: 'يدور عملي الأكاديمي والتطبيقي حول مجموعة متسقة من الأسئلة عند تقاطع الأنظمة المالية والأتمتة الذكية.',
      focusLabel: 'التركيز الحالي',
      focusText: `يستكشف مشروع تخرجي كيف يمكن للتعلم غير الخاضع للإشراف (Isolation Forest و GRU Autoencoders) الكشف عن الحالات الشاذة في تدفقات المدفوعات الفورية مع الحفاظ على القابلية الكاملة للتفسير عبر SHAP.`,
    },
    contact: {
      label: 'التواصل', title: 'لنبني أنظمة مالية', titleAccent: 'ذكية.',
      subtitle: 'متاح لتدريب PFE، وظائف علم البيانات، مهام مستقلة، ومناقشات حول التعلم الآلي المالي. أرد خلال 24 ساعة.',
      send: 'إرسال رسالة', download: 'تحميل السيرة الذاتية',
    },
    footer: { role: 'عالم بيانات' },
  },

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
      bio3: `Ich schließe derzeit meinen Master in Finance & Data Science an der Universität Hassan II ab, mit einer Abschlussarbeit zur erklärbaren Betrugserkennung für Sofortzahlungssysteme.`,
      stats: { projects: 'Hauptprojekte', focus: 'Schwerpunkt', standard: 'Branchenstandard' },
      education: 'Ausbildung', languages: 'Sprachen',
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
    },
    research: {
      label: 'Forschungsinteressen', title: 'Wie ich denke',
      subtitle: 'Meine akademische und angewandte Arbeit kreist um eine konsistente Reihe von Fragen an der Schnittstelle von Finanzsystemen und intelligenter Automatisierung.',
      focusLabel: 'Aktueller Schwerpunkt',
      focusText: `Meine Abschlussarbeit untersucht, wie unüberwachtes Lernen (Isolation Forest, GRU Autoencoders) Anomalien in Sofortzahlungsströmen erkennen kann und dabei vollständige Erklärbarkeit via SHAP beibehält.`,
    },
    contact: {
      label: 'Kontakt', title: 'Lassen Sie uns intelligente', titleAccent: 'Finanzsysteme bauen.',
      subtitle: 'Offen für Abschlussarbeit-Praktika, Junior-Data-Science-Stellen, Freelance-Missionen und Gespräche über Financial ML. Ich antworte innerhalb von 24 Stunden.',
      send: 'Nachricht senden', download: 'Lebenslauf herunterladen',
    },
    footer: { role: 'Data Scientist' },
  },
}
