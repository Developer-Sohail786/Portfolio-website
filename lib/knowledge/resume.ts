export const resumeKnowledge = {
  personal: {
    name: "Md Sohail Khan",
    title: "Full Stack Developer",
    email: "sanu30963@gmail.com",
    phone: "+91 9531023320",
    location: "Delhi",
    linkedin: "linkedin.com/in/sohailkhan-dev",
    github: "github.com/Developer-Sohail786",
    portfolio: "portfolio-website1-virid.vercel.app",
  },

  professionalSummary:
    "I'm a Full Stack Developer with hands-on experience building production-ready web applications using the MERN stack and Next.js. Experienced in developing secure authentication systems, REST APIs, AI-powered applications, and scalable backend services through personal projects and internship experience. Passionate about backend engineering, system design, and AI integration, with a strong focus on writing clean, maintainable, and scalable code. Seeking an opportunity to contribute to real-world software products while continuously growing as a software engineer.",

  experience: [
    {
      role: "Backend Developer Intern",
      company: "Odd Kind",
      period: "April 2026 — August 2026",
      description:
        "Working as a Backend Developer Intern at Odd Kind, building and maintaining backend APIs, authentication systems and database integrations while gaining hands-on experience in scalable web application development and backend best practices.",
    },
    {
      role: "Frontend Developer Intern",
      company: "Sane Infotech",
      period: "August 2025 — February 2026",
      location: "Guwahati",
      description:
        "Worked as a Frontend Developer Intern at Sane Infotech Guwahati, contributing to a SaaS product using the MERN stack by building responsive React components and supporting Node.js/Express backend features.",
    },
  ],

  projects: [
    {
      name: "Nexora",
      title: "AI Workspace Platform",
      description:
        "Built a production-ready AI workspace with multi-model chat, RAG document search, web search, and AI image generation.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
      ],
      additionalFeatures: [
        "Authentication",
        "File uploads",
        "Vector search",
        "Analytics dashboard",
        "Razorpay subscriptions",
      ],
      liveUrl: "https://nexora-ai-dusky.vercel.app",
      githubUrl: "https://github.com/Developer-Sohail786/Nexora",
    },

    {
      name: "Explainable AI-Based Web-Application Firewall (WAF) + JWT Authentication",
      title: "Explainable AI-Based Web-Application Firewall",
      description:
        "Custom WAF that detects and blocks Brute-force, SQL Injection and XSS with JWT-based authentication and Explainable AI.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Python",
        "Scikit-learn",
        "LIME",
      ],
      liveUrl: "https://waf-jwt-frontend.vercel.app",
      githubUrl: "https://github.com/Developer-Sohail786/WAF-JWT",
    },

    {
      name: "AI-Powered URL Shortener",
      title: "Full Stack Platform",
      description:
        "URL shortening app with AI slug generation, authentication, and analytics.",
      technologies: [
        "Next.js",
        "MongoDB",
        "Gemini AI",
      ],
      liveUrl: "https://url-shortener-app-topaz.vercel.app",
      githubUrl:
        "https://github.com/Developer-Sohail786/url-shortener-app",
    },
  ],

  technicalSkills: {
    languages: [
      "JavaScript",
      "TypeScript",
      "Java",
      "C",
      "SQL",
    ],

    frontend: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "CSS3",
    ],

    backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "NextAuth",
      "JWT",
      "Redis",
    ],

    database: [
      "MongoDB",
      "PostgreSQL",
      "Prisma ORM",
    ],

    aiAndLlm: [
      "LangChain.js",
      "RAG",
      "Vector Search",
      "Embeddings",
      "Gemini AI",
      "Prompt Engineering",
    ],

    cloudAndDeployment: [
      "AWS",
      "Vercel",
      "Render",
    ],

    tools: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Jest",
      "Vitest",
      "Supertest",
    ],
  },

  education: {
    degree: "Bachelor of Computer Application (BCA)",
    university: "Girijananda Chowdhury University",
    period: "2023 — 2026",
    cgpa: "8.12",
  },

  careerProfile: {
    primaryRole: "Full Stack Developer",

    strengths: [
      "Backend engineering",
      "System design",
      "AI integration",
      "Secure authentication",
      "REST API development",
      "Scalable backend services",
      "Clean and maintainable code",
    ],

    coreStack: [
      "MERN",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
    ],

    aiFocus: [
      "LangChain.js",
      "RAG",
      "Vector Search",
      "Embeddings",
      "Gemini AI",
      "Prompt Engineering",
    ],

    careerGoal:
      "Contribute to real-world software products while continuously growing as a software engineer.",
  },
} as const;