export const aiMlKnowledge = {
  overview: {
    focus:
      "AI integration, large language model applications, retrieval-augmented generation, vector search, embeddings, prompt engineering, and machine-learning-based security detection.",

    skills: [
      "LangChain.js",
      "RAG",
      "Vector Search",
      "Embeddings",
      "Gemini AI",
      "Prompt Engineering",
    ],
  },

  llmAndAi: {
    technologies: [
      "Google Gemini",
      "Groq",
      "Cohere",
      "DeepSeek",
      "LangChain.js",
      "Vercel AI SDK",
    ],

    concepts: [
      "Large Language Models",
      "Multi-model AI",
      "AI routing",
      "Prompt Engineering",
      "Streaming AI responses",
      "AI-powered application development",
    ],
  },

  rag: {
    technologies: [
      "RAG",
      "LangChain.js",
      "Embeddings",
      "Vector Search",
      "ChromaDB",
      "Google Embeddings",
    ],

    concepts: [
      "Document ingestion",
      "Document chunking",
      "Embeddings generation",
      "Vector storage",
      "Vector search",
      "Retrieval-Augmented Generation",
      "Context retrieval",
    ],

    supportedDocuments: [
      "PDF",
      "DOCX",
      "TXT",
      "Markdown",
      "Images",
    ],
  },

  projects: {
    nexora: {
      name: "Nexora",
      aiCapabilities: [
        "Multi-model AI chat",
        "Streaming AI responses",
        "Gemini integration",
        "Groq integration",
        "Cohere integration",
        "DeepSeek integration",
        "RAG document search",
        "Embeddings",
        "Vector search",
        "AI image generation",
        "HuggingFace image-generation fallback",
        "AI web search with Tavily",
        "Vision-based image understanding",
      ],

      architecture: [
        "AI routing layer",
        "RAG document processing",
        "Document chunking",
        "Embedding generation",
        "Vector repository architecture",
        "Retrieval pipeline",
      ],

      description:
        "Nexora is a production-ready AI workspace with multi-model chat, RAG document search, web search, and AI image generation.",
    },

    waf: {
      name: "Explainable AI-Based Web-Application Firewall + JWT Authentication",

      machineLearning: {
        language: "Python",
        libraries: [
          "Scikit-learn",
          "LIME",
        ],

        pipeline: [
          "Incoming request payload",
          "TF-IDF feature extraction",
          "Logistic Regression classification",
          "Attack classification",
          "LIME explanation",
        ],

        classifications: [
          "Normal",
          "SQL Injection",
          "XSS",
          "Path Traversal",
          "Command Injection",
        ],
      },

      explainability:
        "LIME is used to provide human-readable explanations for individual machine-learning predictions.",

      description:
        "The WAF combines traditional security controls with machine-learning-based attack detection and explainable AI.",
    },

    urlShortener: {
      name: "AI-Powered URL Shortener",

      aiCapabilities: [
        "Gemini AI integration",
        "AI-generated URL slugs",
        "AI-generated webpage summaries",
        "Model fallback",
        "Deterministic fallback",
      ],

      description:
        "The application uses Gemini AI to generate meaningful short URL slugs and concise summaries of destination webpages.",
    },
  },

  machineLearning: {
    technologies: [
      "Python",
      "Scikit-learn",
      "TF-IDF",
      "Logistic Regression",
      "LIME",
    ],

    concepts: [
      "Text classification",
      "Feature extraction",
      "Supervised learning",
      "Model prediction",
      "Explainable AI",
    ],

    primaryApplication:
      "Machine-learning-based web attack detection in the Explainable AI-Based WAF.",
  },

  aiEngineering: {
    capabilities: [
      "Integrating multiple LLM providers",
      "Building AI-powered application features",
      "Implementing RAG pipelines",
      "Working with embeddings and vector search",
      "Designing AI routing architectures",
      "Implementing streaming AI responses",
      "Adding model fallbacks",
      "Applying prompt engineering",
      "Building explainable machine-learning systems",
    ],
  },

  interviewSummary: {
    primaryStrength:
      "Building practical AI-powered applications by integrating LLMs, RAG, embeddings, vector search, and machine-learning components into full-stack systems.",

    strongestProjects: [
      "Nexora demonstrates LLM integration, RAG, embeddings, vector search, AI routing, image generation, and web search.",
      "The WAF demonstrates practical machine learning using TF-IDF and Logistic Regression with LIME explainability.",
      "The AI URL Shortener demonstrates Gemini integration for AI-generated metadata.",
    ],
  },
} as const;