# Financial Intelligence Platform

> Plateforme d'intelligence financiere pour le marche marocain —
> collecte, traitement et analyse de donnees financieres (AMMC / Bourse de Casablanca).

[![Python 3.11+](https://img.shields.io/badge/Python-3.11+-blue.svg)](https://www.python.org/)
[![Next.js 14](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)
[![PostgreSQL 16](https://img.shields.io/badge/PostgreSQL-16-336791.svg)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-compose-2496ED.svg)](https://www.docker.com/)

---

## Vue d'ensemble

La plateforme couvre trois axes :

1. **Collecte automatisee** de donnees financieres multi-sources (Yahoo Finance, AMMC, FRED, RSS)
2. **Traitement de documents PDF** financiers marocains — extraction, deduplication, validation
3. **Recherche semantique** vectorielle sur le corpus (250+ emetteurs, trilingue FR/EN/AR)

---

## Architecture

```
 Navigateur
     |
     v
 ┌──────────────────┐
 │   Frontend       │  Next.js 14 · TypeScript · shadcn/ui
 │   :3000          │
 └────────┬─────────┘
          │ REST
          v
 ┌──────────────────┐
 │   Backend        │  FastAPI · Python 3.12 · JWT · Alembic
 │   :8000          │
 └────────┬─────────┘
          │
          v
 ┌──────────────────────────────────────┐
 │           PostgreSQL 16              │
 │  companies · documents · embeddings  │
 └──────────┬───────────────────────────┘
            │
     ┌──────┴──────┐
     │             │
     v             v
 ┌────────┐  ┌──────────┐
 │  data_ │  │   dms/   │
 │collect.│  │  (PDF)   │
 └────────┘  └──────────┘
```

| Couche | Technologie | Etat |
|--------|-------------|------|
| `frontend/` | Next.js 14, React Query, Recharts, shadcn/ui | Fonctionnel |
| `backend/` | FastAPI, SQLAlchemy async, Alembic, JWT | Fonctionnel |
| `data_collection/` | Pipeline async, yfinance, FRED, AMMC scrapers | Fonctionnel |
| `dms/` | Scan PDF, metadata, dedup SHA-256, rapport | Phase 1 complete |
| `dms/financial/` | Extraction variables, ratios, ontologie | En cours |
| `research/` | Notebooks, benchmarks, RAG evaluation | Planifie |

---

## Modules

### `frontend/` — Interface utilisateur

Dashboard interactif pour explorer les donnees collectees.

**Pages disponibles :**

| Page | Description |
|------|-------------|
| `/dashboard` | Stats globales, graphiques secteur/annee, activite recente |
| `/companies` | Liste et detail des entreprises marocaines |
| `/sectors` | Repartition par secteur |
| `/reports` | Catalogue des rapports PDF |
| `/upload` | Depot de nouveaux PDFs |
| `/search` | Recherche semantique vectorielle |
| `/settings` | Configuration de la plateforme |

**Stack :** Next.js 14 · TypeScript · Tailwind CSS · shadcn/ui · React Query · Recharts

---

### `backend/` — API REST

FastAPI avec authentification JWT, gestion des erreurs, CORS et migrations Alembic.

**Endpoints actifs :**

| Methode | Endpoint | Description |
|---------|----------|-------------|
| `POST` | `/api/auth/register` | Creer un compte |
| `POST` | `/api/auth/login` | Obtenir un token JWT |
| `POST` | `/api/auth/refresh` | Rafraichir le token |
| `GET` | `/health` | Sante de l'API |
| `GET` | `/docs` | Documentation Swagger |

**Configuration :**

```env
DATABASE_URL=postgresql+asyncpg://postgres:postgres@localhost:5432/financial_dms
JWT_SECRET_KEY=<cle-de-64-caracteres-minimum>
JWT_ACCESS_TOKEN_EXPIRE_MINUTES=30
CORS_ORIGINS=http://localhost:3000
STORAGE_PATH=./storage
MAX_UPLOAD_SIZE_MB=50
```

---

### `data_collection/` — Pipeline de collecte

Pipeline asynchrone qui alimente la base de donnees en donnees financieres structurees.

**Sources integrees :**

| Source | Donnees |
|--------|---------|
| Yahoo Finance | Prix historiques, etats financiers, infos entreprise |
| AMMC (ammc.ma) | Emetteurs, rapports annuels PDF, etats financiers |
| FRED API | Taux de change, inflation, PIB, taux directeurs |
| Flux RSS | Articles financiers + sentiment FinBERT |
| ESG | Scores environnementaux, sociaux, gouvernance |

**Indicateurs techniques calcules :** RSI · MACD · SMA/EMA · Bandes de Bollinger · ATR · Stochastique · OBV

**Modeles ORM (async PostgreSQL) :**

```
Company · IncomeStatement · BalanceSheet · CashFlow · FinancialRatio
StockPrice · MacroIndicator · NewsArticle · ESGReport · AnnualReport
ReportChunk · AmmcEmitter · AmmcFinancialStatement
KnowledgeGraphNode · KnowledgeGraphEdge · Document · Embedding
```

**Commandes :**

```bash
# Initialiser la base de donnees
python main.py init

# Pipeline complet
python main.py pipeline

# Taches specifiques
python main.py pipeline --tasks companies financials stocks
python main.py pipeline --tasks ammc        # collecte AMMC complete
python main.py pipeline --tasks macro news
python main.py pipeline --tasks graph       # graphe de connaissances
python main.py pipeline --tickers "OCP.MA,BCP.MA,ATW.MA"

# API de collecte standalone
python main.py api --port 8000

# Export des donnees
python main.py export --formats json,csv,parquet

# Rapport de qualite
python main.py quality
```

---

### `dms/` — Document Management System

Pipeline de traitement des PDFs financiers marocains.

**Phase 1 — Implementee :**

```
Scan repertoires
    → Extraction metadonnees PDF (taille, pages, langue, annee, type)
    → Validation (format, integrite, taille)
    → Deduplication SHA-256
    → Persistance PostgreSQL (companies · documents · logs)
    → Rapport qualite JSON/CSV
```

**Phase 2 — En cours :**

```
Extraction de texte multi-moteur (PyMuPDF → Docling → Camelot → pdfplumber → PaddleOCR)
    → Detection de sections (Bilan, CPC, Flux tresorerie, BFR, Notes)
    → Extraction de 20+ variables financieres (trilingue FR/EN/AR)
    → Calcul de 25+ ratios (ROE, ROA, liquidite, levier, valorisation)
    → Validation comptable (A = L + E, coherence inter-annees)
    → Ontologie financiere + analyse semantique
```

**Registre d'entreprises : 90+ societes marocaines** sur 12 secteurs
(Bancaire, Telecom, Energie, Industriel, Immobilier, Sante, Technologie, etc.)

**Commandes CLI :**

```bash
cd dms

# Scanner un repertoire de PDFs
python run_dms.py scan --source /chemin/vers/pdfs

# Pipeline complet Phase 1
python run_dms.py dms-run --source /chemin/vers/pdfs

# Rapport qualite uniquement
python run_dms.py quality --source /chemin/vers/pdfs

# Export
python run_dms.py export --source /chemin/vers/pdfs --format json
```

---

## Demarrage rapide

### Option A — Docker (recommande)

```bash
git clone <url-du-depot>
cd "Financial Intelligence Platform"

# Copier et adapter les variables d'environnement
cp .env.example .env

# Lancer l'ensemble de la plateforme
docker compose up -d
```

| Service | URL |
|---------|-----|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:8000 |
| Swagger | http://localhost:8000/docs |
| PostgreSQL | localhost:5432 |

### Option B — Installation manuelle

**Prerequis :** Python 3.11+, Node.js 18+, PostgreSQL 16+

**1. Backend**

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate          # Windows
# source .venv/bin/activate     # Linux/Mac
pip install -r requirements.txt

# Creer la base de donnees
psql -U postgres -c "CREATE DATABASE financial_dms;"

# Appliquer les migrations
alembic upgrade head

# Lancer
uvicorn app.main:app --reload --port 8000
```

**2. Frontend**

```bash
cd frontend
npm install
npm run dev                     # http://localhost:3000
```

**3. Pipeline de collecte (optionnel)**

```bash
# A la racine du projet
pip install -r requirements.txt
python main.py init
python main.py pipeline
```

---

## Configuration

### Variables d'environnement backend (`.env`)

```env
# Base de donnees
DATABASE_URL=postgresql+asyncpg://postgres:postgres@localhost:5432/financial_dms

# Securite
JWT_SECRET_KEY=                 # Minimum 64 caracteres
JWT_ACCESS_TOKEN_EXPIRE_MINUTES=30
JWT_REFRESH_TOKEN_EXPIRE_DAYS=7

# Application
CORS_ORIGINS=http://localhost:3000
STORAGE_PATH=./storage
MAX_UPLOAD_SIZE_MB=50
LOG_LEVEL=INFO
```

### Variables d'environnement collecte (`.env`)

```env
# APIs externes (optionnel)
FRED_API_KEY=                   # fred.stlouisfed.org
NEWS_API_KEY=                   # newsapi.org
FINNHUB_API_KEY=                # finnhub.io

# Pipeline
REQUEST_TIMEOUT=30
MAX_RETRIES=3
```

---

## Stack technique

### Backend & collecte

| Technologie | Role |
|-------------|------|
| Python 3.11 / 3.12 | Langage principal |
| FastAPI | API REST |
| SQLAlchemy 2.0 async | ORM |
| PostgreSQL 16 + pgvector | Base de donnees + recherche vectorielle |
| Alembic | Migrations |
| Pydantic v2 | Validation schemas |
| aiohttp / httpx | Clients HTTP async |
| yfinance | Donnees Yahoo Finance |
| tenacity | Retry avec backoff exponentiel |
| loguru | Logging structure |

### Traitement PDF

| Technologie | Role |
|-------------|------|
| PyMuPDF (fitz) | Extraction texte rapide |
| pdfplumber | Tableaux detailles |
| Camelot | Tableaux lattice/stream |
| Docling | Extraction IA avec layout |
| PaddleOCR | Fallback OCR documents scannes |

### NLP / ML

| Technologie | Role |
|-------------|------|
| sentence-transformers | Embeddings texte |
| transformers (HuggingFace) | FinBERT (sentiment), tokenisation |
| PyTorch | Framework deep learning |
| scikit-learn / scipy | Metriques, tests statistiques |
| NetworkX | Graphe de connaissances |

### Frontend

| Technologie | Role |
|-------------|------|
| Next.js 14 | Framework React |
| TypeScript | Typage statique |
| Tailwind CSS | Styling |
| shadcn/ui | Composants UI |
| React Query | Fetching et cache |
| Recharts | Visualisations (bar, pie, area) |

---

## Structure du projet

```
Financial Intelligence Platform/
│
├── docker-compose.yml           # Orchestration (db + backend + frontend)
├── .env.example                 # Template variables d'environnement
├── main.py                      # CLI pipeline de collecte
├── requirements.txt             # Dependances pipeline
│
├── frontend/                    # === INTERFACE UTILISATEUR ===
│   ├── src/app/                 # Pages Next.js (App Router)
│   │   ├── dashboard/           # Vue d'ensemble
│   │   ├── companies/           # Gestion entreprises
│   │   ├── sectors/             # Navigation par secteur
│   │   ├── reports/             # Catalogue PDFs
│   │   ├── upload/              # Depot de fichiers
│   │   └── search/              # Recherche semantique
│   ├── src/components/          # Composants reutilisables
│   └── Dockerfile
│
├── backend/                     # === API REST ===
│   ├── app/
│   │   ├── main.py              # Entree FastAPI (lifespan, CORS, handlers)
│   │   ├── config.py            # Settings Pydantic
│   │   ├── api/                 # Routeurs (auth, ...)
│   │   ├── exceptions.py        # Erreurs metier
│   │   └── utils/               # Securite, pagination, validation fichiers
│   ├── alembic/                 # Migrations BDD
│   └── Dockerfile
│
├── data_collection/             # === PIPELINE COLLECTE ===
│   ├── pipeline/                # Orchestrateur + etat (reprise sur erreur)
│   ├── scrapers/
│   │   ├── ammc/                # AMMC : emetteurs, financiers, PDFs
│   │   ├── companies/           # Yahoo Finance, MarketScreener
│   │   ├── financial/           # CPC, bilan, flux, ratios
│   │   ├── stock/               # Prix + indicateurs techniques
│   │   ├── macro/               # FRED
│   │   ├── news/                # RSS + sentiment FinBERT
│   │   └── esg/                 # Scores ESG
│   ├── storage/                 # ORM async, Repository generique
│   ├── knowledge_graph/         # Graphe de connaissances (NetworkX)
│   ├── vector/                  # Embeddings + pgvector
│   ├── api/                     # API FastAPI standalone
│   ├── exports/                 # CSV / Parquet / JSON
│   ├── quality/                 # Verification qualite des donnees
│   ├── config/                  # Settings, enums, tickers (250+ AMMC)
│   └── utils/                   # Rate-limiter, cache, retry, hashing
│
├── dms/                         # === DOCUMENT MANAGEMENT ===
│   ├── app/
│   │   ├── pipeline/            # Orchestrateur 6 phases
│   │   ├── scanner/             # Parcours repertoires PDF
│   │   ├── metadata/            # Extraction metadonnees
│   │   ├── hashing/             # SHA-256
│   │   ├── deduplication/       # Detection doublons
│   │   ├── validator/           # Validation pre-extraction
│   │   ├── reports/             # Generation rapports qualite
│   │   ├── financial/           # [EN COURS] variables, ratios, ontologie
│   │   └── extraction/          # [EN COURS] moteurs PDF multi-engines
│   ├── config/
│   │   └── companies.py         # Registre 90+ entreprises marocaines
│   └── alembic/                 # Migrations BDD DMS
│
└── data/
    ├── collected/               # Donnees brutes collectees
    ├── reports/                 # Rapports generes
    ├── cache/                   # Cache HTTP
    └── logs/                    # Journaux
```

---

## Roadmap

### Termine
- [x] Pipeline de collecte async (Yahoo Finance, AMMC, FRED, RSS, ESG)
- [x] 15+ modeles ORM, deduplication SHA-256, reprise sur erreur
- [x] Pipeline DMS Phase 1 (scan, metadata, validation, dedup, rapport)
- [x] Backend FastAPI avec JWT, CORS, Alembic
- [x] Frontend Next.js avec dashboard, companies, sectors, search, upload

### En cours
- [ ] DMS Phase 2 — extraction multi-moteur (PyMuPDF → Docling → Camelot → PaddleOCR)
- [ ] DMS Phase 3 — extraction financiere : 20+ variables, 25+ ratios, ontologie trilingue

### Planifie
- [ ] Connexion backend ↔ data_collection (unification des deux APIs)
- [ ] Module `research/` — 10 notebooks Jupyter + framework de benchmark
- [ ] Evaluation RAG (retrieval + qualite reponse)
- [ ] Benchmark embeddings (bge-m3, E5, GTE, MiniLM)
- [ ] Rapport LaTeX automatise pour la these

---

## Regles de developpement

1. **Async d'abord** pour `data_collection`, sync pour `dms`
2. **SHA-256** pour tout dedoublonnage de contenu binaire
3. **Secrets jamais dans le code** — variables d'environnement uniquement
4. **Les notebooks n'importent jamais depuis `data_collection`** directement
5. **Typage strict** — type hints systematiques, Pydantic pour les schemas

### Tests

```bash
# Pipeline de collecte
pytest data_collection/tests/ -v

# DMS
cd dms && pytest tests/ -v --tb=short

# Couverture
pytest --cov=data_collection --cov-report=html
```

### Formatage

```bash
black .
isort .
mypy data_collection/ dms/ backend/ --ignore-missing-imports
```

---

## Licence

MIT — voir `LICENSE`.
