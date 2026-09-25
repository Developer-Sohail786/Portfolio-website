# 🧑‍💻 Sohail Khan — Developer Portfolio

> A modern, interactive developer portfolio built with Next.js, TypeScript, RAG, and AI-powered features.

This is the personal portfolio of **Sohail Khan**, showcasing projects, technical skills, experience, and software development work.

The portfolio goes beyond a traditional static website by including an **AI-powered portfolio assistant**, a **RAG knowledge system**, an interactive **developer CLI**, dynamic project pages, contact email handling, rate limiting, and SEO-friendly metadata.

---

## 🌐 Live Website

**Portfolio:**  
https://portfolio-website1-virid.vercel.app

---

## ✨ Features

### 🤖 AI Portfolio Assistant

Visitors can interact with an AI assistant and ask questions about:

- Projects
- Technical skills
- Experience
- Education
- Career
- Certifications
- Technical decisions
- Development work
- Contact and hiring information

The assistant uses a relevance-checking step before retrieving portfolio knowledge, preventing unrelated questions from unnecessarily entering the RAG pipeline.

---

### 🧠 Retrieval-Augmented Generation (RAG)

The portfolio contains a custom RAG pipeline for answering questions using structured portfolio knowledge.

The system includes:

- Knowledge document generation
- Document embeddings
- ChromaDB vector storage
- Semantic retrieval
- Similarity filtering
- Document deduplication
- Context formatting
- LLM-powered response generation

### RAG Flow

```text
Portfolio Knowledge
       │
       ▼
Knowledge Documents
       │
       ▼
Cohere Embeddings
       │
       ▼
ChromaDB
       │
       ▼
User Question
       │
       ▼
Query Embedding
       │
       ▼
Semantic Retrieval
       │
       ▼
Relevant Context
       │
       ▼
LLM
       │
       ▼
Streaming Response
```

---

### 💬 Streaming AI Responses

The AI assistant streams responses from the server rather than waiting for the complete response before displaying anything.

The frontend maintains:

- Streaming state
- Abort controller
- Response buffering
- Smooth response rendering
- Stop-generation functionality
- Conversation history
- Auto-scrolling

Users can stop an active AI response while preserving the content already received.

---

### 💻 Interactive Developer CLI

The portfolio includes an interactive terminal-style CLI.

Visitors can use commands to explore the portfolio:

```text
help
clear
resume
project <name>
```

The CLI also provides:

- Command history
- Arrow-key navigation
- Tab autocomplete
- Project autocomplete
- Dynamic command responses
- Resume opening

---

### 📁 Dynamic Project Pages

Projects are stored as structured data and rendered dynamically using:

```text
/projects/[slug]
```

Each project page includes:

- Project title
- Description
- Technical details
- Technology stack
- Features
- Live project link
- GitHub repository
- Project metadata
- SEO metadata
- Open Graph metadata
- Twitter metadata

---

## 🚀 Featured Projects

### 01 — Nexora

**AI Workspace Platform**

A modular AI-powered SaaS workspace featuring:

- Multi-model AI chat
- Streaming responses
- RAG document processing
- Vector search
- File intelligence
- Image generation
- Web search
- Authentication
- Analytics
- Subscriptions
- Cloud storage

**Technologies:**

```text
Next.js
React
TypeScript
PostgreSQL
Prisma
Vercel AI SDK
Google Gemini
Groq
Cohere
DeepSeek
ChromaDB
Cloudinary
Razorpay
```

**Links:**

- Live: https://nexora-ai-dusky.vercel.app
- GitHub: https://github.com/Developer-Sohail786/Nexora

---

### 02 — WAF + JWT

**Explainable AI-Based Web Application Firewall**

A security-focused full-stack application combining traditional WAF controls with machine-learning-based attack detection.

**Features:**

- SQL injection detection
- XSS detection
- NoSQL injection protection
- Path traversal detection
- Command injection detection
- Brute-force protection
- IP blocking
- Rate limiting
- Request filtering
- ML-based payload classification
- TF-IDF feature extraction
- Logistic Regression
- LIME explanations
- JWT authentication
- Protected routes
- Security logging
- Security monitoring dashboard

**Technologies:**

```text
React
Node.js
Express.js
MongoDB
JWT
Python
Scikit-learn
TF-IDF
Logistic Regression
LIME
Explainable AI
```

**Links:**

- Live: https://waf-jwt-frontend.vercel.app
- GitHub: https://github.com/Developer-Sohail786/WAF-JWT

---

### 03 — AI URL Shortener

**AI-Powered Secure URL Shortener**

A full-stack URL management platform combining traditional URL shortening with AI-powered metadata generation.

**Features:**

- AI-generated URL slugs
- AI-generated webpage summaries
- Gemini model fallback
- Deterministic fallback
- Credentials authentication
- Google OAuth
- JWT sessions
- Protected routes
- User-specific URL ownership
- Short URL generation
- Duplicate URL prevention
- Click analytics
- Atomic click tracking
- Server-side redirects
- URL deletion

**Technologies:**

```text
Next.js
React
JavaScript
Tailwind CSS
MongoDB
NextAuth
JWT
Gemini AI
React Hook Form
bcryptjs
```

**Links:**

- Live: https://url-shortener-app-topaz.vercel.app
- GitHub: https://github.com/Developer-Sohail786/url-shortener-app

---

## 🛠️ Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- React Hook Form
- React Markdown
- Lucide React
- React Icons
- Sonner

### AI & RAG

- Cohere AI
- ChromaDB
- Vector Search
- Embeddings
- Retrieval-Augmented Generation
- Streaming AI responses
- AI relevance classification

### Backend

- Next.js Route Handlers
- Server-side APIs
- Zod validation
- Resend
- Upstash Redis
- Rate limiting

### Infrastructure

- ChromaDB
- Docker
- Vercel
- Upstash Redis

### Developer Tools

- TypeScript
- ESLint
- Git
- GitHub
- npm

---

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │     Portfolio UI    │
                    └──────────┬──────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
        Project Pages       CLI System      AI Assistant
             │                                   │
             │                                   ▼
             │                              /api/ask
             │                                   │
             │                                   ▼
             │                         Relevance Check
             │                                   │
             │                                   ▼
             │                              RAG Retrieval
             │                                   │
             │                                   ▼
             │                               ChromaDB
             │                                   │
             │                                   ▼
             │                              LLM Provider
             │                                   │
             │                                   ▼
             │                          Streaming Response
             │
             ▼
       Dynamic Project Data
```

---

## 🧠 Portfolio RAG Architecture

Portfolio knowledge is organized into structured knowledge modules covering:

```text
AI / ML
Career
Certifications
Contact
Education
Engineering
Experience
Profile
Resume
Security
Skills
Projects
```

Project-specific knowledge is also maintained separately for:

```text
Nexora
WAF
AI URL Shortener
```

### RAG Pipeline

```text
Knowledge Files
      │
      ▼
Knowledge Documents
      │
      ▼
Cohere Embeddings
      │
      ▼
ChromaDB
      │
      ▼
Query Embedding
      │
      ▼
Semantic Search
      │
      ▼
Relevant Documents
      │
      ▼
Context Formatting
      │
      ▼
LLM Response
```

---

## 🔎 Semantic Retrieval

When a visitor asks the AI assistant a question:

1. The question is validated.
2. An LLM checks whether the question is related to the portfolio.
3. Irrelevant questions are rejected.
4. A query embedding is generated.
5. ChromaDB performs vector similarity search.
6. Low-relevance results are filtered.
7. Duplicate documents are removed.
8. Relevant knowledge is formatted into context.
9. The LLM generates the answer.
10. The answer is streamed back to the browser.

---

## 📧 Contact System

The portfolio includes a server-side contact API.

### Contact Flow

```text
Contact Form
     │
     ▼
Zod Validation
     │
     ▼
IP-based Rate Limiting
     │
     ▼
Resend
     │
     ├──► Notification Email
     │
     └──► Sender Confirmation
```

The contact endpoint:

- Validates incoming data
- Applies rate limiting
- Sends a notification email
- Sends a confirmation email
- Handles API errors safely

### Rate Limiting

The contact endpoint uses a sliding-window rate limiter:

```text
5 requests / hour / IP
```

This helps prevent abuse of the public contact endpoint.

---

## 🔐 Security

The application includes several security-focused measures.

### HTTP Security Headers

The application configures security headers including:

- `X-Content-Type-Options`
- `X-Frame-Options`
- `Referrer-Policy`
- `Permissions-Policy`

The permissions policy disables access to:

```text
Camera
Microphone
Geolocation
```

### API Protection

The contact API includes:

- Environment validation
- Input validation
- IP-based rate limiting
- Request parsing validation
- Error handling

---

## 🔍 SEO & Metadata

The portfolio includes structured SEO support through Next.js metadata APIs.

Implemented features include:

- Page title
- Meta description
- Keywords
- Author metadata
- Open Graph metadata
- Twitter metadata
- Robots configuration
- XML sitemap
- Dynamic project metadata
- Schema.org structured data

---

## 🗺️ Sitemap

The sitemap automatically includes the main portfolio pages and dynamic project pages.

Example:

```text
/
 /projects/nexora
 /projects/waf
 /projects/url-shortener
```

---

## 📂 Project Structure

```text
developer-sohail786-portfolio-website/
│
├── README.md
├── category.txt
├── check.txt
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   │
│   ├── api/
│   │   ├── ask/
│   │   │   └── route.ts
│   │   └── contact/
│   │       └── route.ts
│   │
│   ├── hooks/
│   │   ├── use-chat.ts
│   │   └── use-cli.ts
│   │
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   └── services/
│       └── ai.ts
│
├── chroma/
│   └── Dockerfile
│
├── components/
│   ├── cli/
│   │   └── cli.tsx
│   │
│   ├── email/
│   │   └── contact-confirmation.tsx
│   │
│   ├── layout/
│   │   ├── footer.tsx
│   │   └── navbar.tsx
│   │
│   ├── sections/
│   │   ├── about.tsx
│   │   ├── ask-sohail.tsx
│   │   ├── contact.tsx
│   │   ├── experience.tsx
│   │   ├── hero.tsx
│   │   ├── projects.tsx
│   │   └── skills.tsx
│   │
│   └── ui/
│       └── chat-markdown.tsx
│
├── lib/
│   ├── experience.ts
│   ├── projects.ts
│   ├── ratelimit.ts
│   ├── skills.ts
│   │
│   ├── cli/
│   │   ├── commands.ts
│   │   └── responses.ts
│   │
│   ├── knowledge/
│   │   ├── ai-ml.ts
│   │   ├── career.ts
│   │   ├── certifications.ts
│   │   ├── contact.ts
│   │   ├── education.ts
│   │   ├── engineering.ts
│   │   ├── experience.ts
│   │   ├── index.ts
│   │   ├── profile.ts
│   │   ├── resume.ts
│   │   ├── security.ts
│   │   ├── skills.ts
│   │   │
│   │   └── projects/
│   │       ├── nexora.ts
│   │       ├── url-shortener.ts
│   │       └── waf.ts
│   │
│   ├── prompts/
│   │   └── portfolio-assistent.ts
│   │
│   ├── rag/
│   │   ├── documents.ts
│   │   ├── embeddings.ts
│   │   ├── indexer.ts
│   │   ├── retriever.ts
│   │   └── vector-store.ts
│   │
│   └── validations/
│       └── contact.ts
│
└── scripts/
    └── index-portfolio.ts
```

---

## ⚙️ Environment Variables

Create a `.env.local` file and configure the required services.

```env
# AI
COHERE_API_KEY=

# Vector Database
CHROMA_HOST=
CHROMA_PORT=
CHROMA_SSL=

# Contact Email
RESEND_API_KEY=

# Rate Limiting
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Developer-Sohail786/Portfolio-website.git
cd Portfolio-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create:

```text
.env.local
```

Add the required environment variables listed above.

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🧠 Index Portfolio Knowledge

Before using the RAG-powered assistant, portfolio knowledge can be indexed into ChromaDB.

Run:

```bash
npm run index:portfolio
```

The indexing process:

```text
Knowledge Files
      │
      ▼
Knowledge Documents
      │
      ▼
Cohere Embeddings
      │
      ▼
ChromaDB
```

The indexing script reports:

- Knowledge document categories
- Total document count
- Embedding count
- Indexing status

---

## 🐳 ChromaDB

The project includes a dedicated Docker configuration for ChromaDB.

```text
chroma/
└── Dockerfile
```

The application connects to ChromaDB through configurable environment variables:

```env
CHROMA_HOST=
CHROMA_PORT=
CHROMA_SSL=
```

The vector store uses cosine similarity for retrieval.

---

## 📜 Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run index:portfolio
```

---

## 📈 Engineering Focus

This portfolio was built to demonstrate more than UI development.

Key engineering areas include:

- Full-stack application architecture
- Next.js App Router
- TypeScript
- API development
- AI integration
- RAG architecture
- Vector databases
- Embeddings
- Streaming responses
- Rate limiting
- API validation
- Email infrastructure
- Dynamic routing
- SEO
- Structured metadata
- Docker
- Production deployment

---

## 👨‍💻 About

I'm **Sohail Khan**, a Full-Stack Developer focused on:

```text
Next.js
TypeScript
React
Node.js
PostgreSQL
MongoDB
AI Integration
RAG
Backend Engineering
Web Application Security
```

I enjoy building applications that combine modern web technologies with practical AI and backend engineering.

---

## 🔗 Connect

- **Portfolio:** https://portfolio-website1-virid.vercel.app
- **GitHub:** https://github.com/Developer-Sohail786
- **LinkedIn:** https://www.linkedin.com/in/sohailkhan-dev/

---

## 📄 License

This repository contains the source code for my personal developer portfolio.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
