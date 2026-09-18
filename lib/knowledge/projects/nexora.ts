export const nexoraKnowledge = {
  identity: {
    name: "Nexora AI",
    shortName: "Nexora",
    slug: "nexora",
    type: "AI-powered SaaS workspace",
    title:
      "AI-powered SaaS workspace with Multi-LLM Chat, RAG, File Intelligence, Image Generation, Web Search, Analytics, and Premium Features",
    author: "Sohail Khan",
  },

  overview: {
    description:
      "Nexora AI is a modular AI-powered SaaS workspace built with Next.js 16, TypeScript, Prisma, PostgreSQL, and the Vercel AI SDK. It provides a ChatGPT-like experience while supporting multiple AI providers, document understanding, RAG architecture, AI image generation, web search, analytics, subscriptions, authentication, and cloud storage.",

    purpose:
      "The project was designed as a modular AI platform rather than a simple chatbot, with a provider-agnostic architecture that allows multiple AI providers and specialized AI capabilities to work through a consistent application flow.",

    coreCapabilities: [
      "Multi-model AI chat",
      "Streaming AI responses",
      "Multiple AI providers",
      "Conversation history",
      "Markdown rendering",
      "Syntax-highlighted code blocks",
      "Response copying",
      "Response regeneration",
      "Stop generation",
      "Edit and resend",
      "Chat title generation",
      "Image responses",
      "File intelligence",
      "RAG architecture",
      "AI web search",
      "AI image generation",
      "Analytics",
      "Authentication",
      "User settings",
      "Premium subscriptions",
      "Cloud storage",
    ],
  },

  technicalChallenges: {
    hardestPart:
      "The hardest part was designing the AI architecture so that multiple providers, streaming, model-specific limitations, image generation, web search, and RAG could work through one consistent application flow without tightly coupling the application to any single provider.",

    mostDebugging:
      "The most debugging went into AI-provider integration and streaming, especially provider-specific errors, invalid or empty messages, model availability, token limits, and differences in reasoning and streaming behavior between Gemini, Groq, and Cohere.",

    proudestDecision:
      "The strongest architectural decision was adopting a Repository Pattern for the vector layer so that the RAG system remains independent from ChromaDB and the vector database can be replaced later without rewriting the rest of the RAG pipeline.",

    strongestAchievement:
      "The strongest achievement was building Nexora as a modular AI platform rather than a simple chatbot, with a provider-agnostic AI layer, real-time streaming, multiple models, multimodal/image capabilities, web search, file processing, and an extensible RAG architecture.",
  },

  personalContribution: {
    description:
      "Sohail built the application architecture and integration layer around the underlying libraries and services.",

    areas: [
      "AI routing",
      "Provider abstractions",
      "Streaming chat flow",
      "Subscription and model access logic",
      "File-processing flow",
      "RAG architecture",
      "Recursive document chunking",
      "Embedding integration",
      "Vision processing",
      "Vector repository abstraction",
    ],

    clarification:
      "Libraries and services such as the Vercel AI SDK, Prisma, Cloudinary, and ChromaDB provide infrastructure, while the application logic connecting these components was custom.",
  },

  aiProviders: {
    architecture:
      "Nexora uses an AI routing layer that abstracts provider-specific implementations and routes requests to supported models while keeping the chat API independent of individual provider SDKs.",

    providers: {
      google: ["Gemini 2.5 Flash"],
      groq: ["Llama 3.3 70B", "GPT OSS 120B"],
      cohere: ["Command A"],
      deepseek: ["DeepSeek Chat"],
    },

    specialFlows: [
      "Image generation is separated from normal LLM requests.",
      "Web search is separated from normal LLM requests.",
      "Provider-specific implementations are hidden behind the AI service/routing layer.",
    ],
  },

  aiChat: {
    features: [
      "Streaming AI responses",
      "Multiple AI providers",
      "Multiple model selection",
      "Conversation history",
      "Markdown rendering",
      "Syntax-highlighted code",
      "Copy response",
      "Regenerate response",
      "Stop generation",
      "Edit and resend",
      "Thinking states",
      "Chat title generation",
      "Image responses",
      "Typing animation",
    ],

    flow: [
      "User",
      "Chat Input",
      "API Route",
      "Chat Service",
      "Prompt Builder",
      "Selected AI Provider",
      "Streaming Response",
      "Database",
    ],

    streaming:
      "The streaming chat flow was implemented to support different providers while maintaining stop generation, regeneration, edit-and-resend, thinking states, error handling, and consistent conversation state.",
  },

  rag: {
    status:
      "The RAG ingestion architecture was implemented, but the final Chroma vector storage and retrieval integration was still pending in the documented V1 state.",

    architecture: [
      "Content extraction",
      "Ingestion",
      "Chunking",
      "Embedding generation",
      "Vector storage",
      "Semantic retrieval",
      "Context retrieval",
      "AI response",
    ],

    chunking: {
      method: "Recursive text splitting",
      chunkSize: 1000,
      chunkOverlap: 200,
    },

    embeddings: {
      provider: "Google",
      model: "text-embedding-004",
    },

    vectorLayer: {
      database: "ChromaDB",
      pattern: "Repository Pattern",

      purpose:
        "The repository abstraction keeps the RAG system independent from the concrete vector database implementation and allows ChromaDB to be replaced later without rewriting the rest of the RAG pipeline.",
    },

    imageIngestion: {
      behavior:
        "Gemini Vision converts an uploaded image into a detailed searchable description before the content enters the same ingestion pipeline.",

      flow: [
        "Image upload",
        "Gemini Vision processing",
        "Detailed searchable description",
        "Chunking",
        "Embedding",
        "Vector storage",
        "Retrieval",
      ],
    },

    flow: [
      "Upload File",
      "Document Parser",
      "Chunking",
      "Google Embeddings",
      "Chroma Vector DB",
      "Semantic Search",
      "Context Retrieval",
      "AI Response",
    ],

    futureImprovements: [
      "Complete Chroma vector storage",
      "Complete retrieval integration",
      "Filtered retrieval",
      "Source citations",
      "Hybrid search",
      "Reranking",
      "Integration with the AI router",
    ],
  },

  fileIntelligence: {
    supportedFormats: [
      "PDF",
      "DOCX",
      "TXT",
      "Markdown",
      "Images",
    ],

    features: [
      "File upload",
      "File preview",
      "Cloud storage",
      "AI document understanding",
      "File attachment in chat",
      "Recent documents",
      "Upload progress",
      "Document parser",
    ],
  },

  imageGeneration: {
    providers: [
      "Gemini Image Generation",
      "HuggingFace",
    ],

    fallback: "HuggingFace",

    features: [
      "Automatic image prompt detection",
      "Gemini image generation",
      "HuggingFace fallback",
      "Image preview",
      "Image modal",
    ],

    flow: [
      "Prompt",
      "Image Prompt Detection",
      "Gemini Image API",
      "HuggingFace Fallback",
      "Generated Image",
    ],
  },

  webSearch: {
    provider: "Tavily",

    features: [
      "Live web search",
      "Tavily integration",
      "AI summarized results",
      "Search prompt detection",
    ],

    flow: [
      "Prompt",
      "Search Detection",
      "Tavily API",
      "Search Results",
      "AI Summary",
    ],
  },

  authentication: {
    providers: [
      "Google OAuth",
      "GitHub OAuth",
      "Credentials Login",
    ],

    features: [
      "Registration",
      "JWT sessions",
      "Protected routes",
      "Middleware authentication",
    ],
  },

  analytics: {
    features: [
      "Activity analytics",
      "AI model usage",
      "File usage",
      "Charts",
      "User statistics",
      "Recent activity",
    ],
  },

  subscriptions: {
    provider: "Razorpay",

    features: [
      "Subscription plans",
      "Premium feature gates",
      "Feature restrictions",
    ],
  },

  userSettings: {
    features: [
      "Username",
      "Avatar upload",
      "Profile management",
      "Cloudinary integration",
    ],
  },

  cloudStorage: {
    provider: "Cloudinary",

    features: [
      "Secure uploads",
      "File previews",
    ],
  },

  database: {
    technology: "PostgreSQL",
    provider: "Neon",
    orm: "Prisma",

    mainModels: [
      "User",
      "Chat",
      "Message",
      "File",
      "Subscription",
    ],
  },

  architecture: {
    frontend: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "Sonner",
    ],

    backend: [
      "Next.js Route Handlers",
      "Prisma ORM",
      "PostgreSQL",
      "Neon",
      "Auth.js",
      "Vercel AI SDK",
    ],

    ai: [
      "Google Gemini",
      "Groq",
      "Cohere",
      "DeepSeek",
      "Tavily Search",
      "Google Embeddings",
    ],

    vectorDatabase: ["ChromaDB"],

    storage: ["Cloudinary"],

    payments: ["Razorpay"],
  },

  projectStructure: {
    directories: [
      "app/(auth)",
      "app/(dashboard)/analytics",
      "app/(dashboard)/chat",
      "app/(dashboard)/dashboard",
      "app/(dashboard)/files",
      "app/(dashboard)/pricing",
      "app/(dashboard)/settings",
      "app/api",
      "components",
      "hooks",
      "lib",
      "prisma",
      "services",
      "types",
    ],
  },

  technicalDecisions: [
    {
      decision: "Provider-agnostic AI routing",
      reason:
        "Allows multiple AI providers and models to operate through a consistent application flow without coupling the application to a single provider.",
    },
    {
      decision: "Repository Pattern for vector storage",
      reason:
        "Keeps the RAG vector layer independent from ChromaDB and makes future vector database replacement easier.",
    },
    {
      decision: "Recursive text splitting",
      reason:
        "Provides structured document chunking with a 1000-character chunk size and 200-character overlap.",
    },
    {
      decision: "Separate AI special flows",
      reason:
        "Image generation and web search have different requirements from normal conversational LLM requests, so they are handled separately.",
    },
  ],

  futureRoadmap: [
    "Voice Chat",
    "AI Agents",
    "Team Workspace",
    "Shared Chats",
    "Chat Export",
    "Memory",
    "OCR Improvements",
    "More AI Providers",
    "Mobile App",
    "Usage Limits",
    "Admin Dashboard",
  ],

  deployment: {
    platform: "Vercel",
  },

  links: {
    github: "https://github.com/Developer-Sohail786/Nexora",
    live: "https://nexora-ai-dusky.vercel.app",
  },

  author: {
    name: "Sohail Khan",
  },
} as const;