export const engineeringKnowledge = {
  overview: {
    focus:
      "Full-stack application architecture with emphasis on modular backend systems, API development, authentication, database integration, AI integration, security, and scalable application design.",

    strengths: [
      "Full-stack development",
      "Backend engineering",
      "REST API development",
      "Database integration",
      "Authentication and authorization",
      "AI integration",
      "Security engineering",
      "Cloud deployment",
      "Third-party API integration",
      "Modular application architecture",
    ],
  },

  architecture: {
    principles: [
      "Separation of concerns",
      "Modular architecture",
      "Reusable components",
      "API-driven application design",
      "Server-side validation",
      "Protected backend routes",
      "Centralized configuration",
      "Error handling and fallbacks",
    ],

    approach:
      "Applications are structured into separate UI, API, service, data, validation, and knowledge layers so individual responsibilities remain isolated and maintainable.",
  },

  frontend: {
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],

    practices: [
      "Component-based architecture",
      "Reusable UI components",
      "Responsive interface development",
      "Form validation",
      "Client-server API communication",
      "Loading and error states",
    ],
  },

  backend: {
    technologies: [
      "Node.js",
      "Express.js",
      "Next.js API Routes",
    ],

    practices: [
      "REST API development",
      "Request validation",
      "Authentication middleware",
      "Protected routes",
      "Server-side processing",
      "Error handling",
      "Rate limiting",
      "Security middleware",
      "Third-party API integration",
    ],
  },

  databases: {
    technologies: [
      "MongoDB",
      "PostgreSQL",
      "Prisma",
    ],

    practices: [
      "Database integration",
      "User-specific data ownership",
      "Relational data modeling",
      "Document-based data modeling",
      "Atomic database operations",
      "Persistent application data",
    ],
  },

  authentication: {
    technologies: [
      "JWT",
      "NextAuth",
      "Google OAuth",
      "GitHub OAuth",
      "Credentials authentication",
      "bcryptjs",
    ],

    practices: [
      "Protected routes",
      "JWT sessions",
      "OAuth authentication",
      "Credential-based authentication",
      "Password hashing",
      "User authorization",
      "User-specific resource ownership",
    ],
  },

  nexora: {
    architecture: [
      "Next.js application",
      "Modular AI routing layer",
      "Streaming response architecture",
      "RAG pipeline",
      "Document processing pipeline",
      "Vector search architecture",
      "Authentication layer",
      "Analytics layer",
      "Subscription system",
      "Cloud storage integration",
    ],

    integrations: [
      "Google Gemini",
      "Groq",
      "Cohere",
      "DeepSeek",
      "ChromaDB",
      "Cloudinary",
      "Razorpay",
      "Tavily",
      "HuggingFace",
    ],

    engineeringHighlights: [
      "Provider-agnostic AI architecture",
      "Multi-model integration",
      "Streaming AI responses",
      "Document ingestion and retrieval",
      "Model fallback handling",
      "Protected application routes",
      "Subscription integration",
    ],
  },

  waf: {
    architecture: [
      "React frontend",
      "Node.js backend",
      "Express security middleware",
      "MongoDB persistence",
      "Python machine-learning component",
      "JWT authentication",
    ],

    requestFlow: [
      "Incoming request",
      "Security middleware",
      "IP and rate-limit checks",
      "Payload inspection",
      "Machine-learning classification for suspicious payloads",
      "Security decision",
      "Logging and monitoring",
    ],

    engineeringHighlights: [
      "Custom WAF middleware",
      "Brute-force protection",
      "IP blocking",
      "Rate limiting",
      "Request filtering",
      "Machine-learning attack classification",
      "JWT-protected routes",
      "Security logging",
      "Security monitoring dashboard",
    ],
  },

  urlShortener: {
    architecture: [
      "Next.js application",
      "React frontend",
      "MongoDB database",
      "NextAuth authentication",
      "Gemini AI integration",
      "Server-side redirect handling",
    ],

    engineeringHighlights: [
      "Authenticated URL management",
      "User-specific URL ownership",
      "Duplicate URL prevention",
      "Atomic click tracking",
      "Server-side redirects",
      "AI metadata generation",
      "AI and deterministic fallbacks",
    ],
  },

  reliability: {
    practices: [
      "Input validation",
      "Error handling",
      "Loading states",
      "API response validation",
      "Model fallbacks",
      "Deterministic fallbacks",
      "Rate limiting",
      "Authentication checks",
      "Protected resources",
    ],

    fallbackStrategy:
      "External AI and service dependencies use fallback strategies where implemented so application functionality can degrade gracefully when a provider or model fails.",
  },

  deployment: {
    platform: "Vercel",

    practices: [
      "Production web deployment",
      "Environment-based configuration",
      "Cloud-hosted applications",
      "API deployment",
      "Third-party service integration",
    ],
  },

  developmentTools: [
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "n8n",
  ],

  engineeringSummary: {
    primaryStrength:
      "Building complete full-stack systems where frontend interfaces, backend APIs, databases, authentication, AI services, and security controls work together as a single application.",

    architectureStrength:
      "Comfortable breaking complex applications into modular services and layers instead of putting application logic into a single component or route.",

    interviewSummary:
      "Strongest engineering experience comes from Nexora's multi-model AI and RAG architecture, the WAF's security and machine-learning pipeline, and the AI URL Shortener's authenticated URL and analytics architecture.",
  },
} as const;