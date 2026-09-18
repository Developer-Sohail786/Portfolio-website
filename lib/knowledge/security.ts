export const securityKnowledge = {
  overview: {
    focus:
      "Web application security, authentication, authorization, request protection, machine-learning-based attack detection, and secure application architecture.",

    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "JWT",
      "OAuth",
      "NextAuth",
      "MongoDB",
      "PostgreSQL",
      "Python",
      "Scikit-learn",
      "LIME",
    ],
  },

  webApplicationSecurity: {
    threats: [
      "SQL Injection",
      "XSS",
      "NoSQL Injection",
      "Path Traversal",
      "Command Injection",
      "Brute-force attacks",
    ],

    protections: [
      "Request filtering",
      "Input validation",
      "Rate limiting",
      "IP blocking",
      "Authentication checks",
      "Protected routes",
      "Security logging",
    ],
  },

  waf: {
    name: "Explainable AI-Based Web-Application Firewall + JWT Authentication",

    requestProtection: [
      "IP blocking",
      "Rate limiting",
      "Brute-force protection",
      "Request filtering",
      "Suspicious payload detection",
    ],

    attackDetection: [
      "SQL Injection detection",
      "XSS detection",
      "NoSQL Injection detection",
      "Path Traversal detection",
      "Command Injection detection",
    ],

    machineLearning: {
      language: "Python",

      pipeline: [
        "Request payload",
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
      "LIME provides human-readable explanations for individual machine-learning predictions.",

    monitoring: [
      "Security logging",
      "Security monitoring dashboard",
      "Attack classification results",
    ],
  },

  authentication: {
    technologies: [
      "JWT",
      "OAuth",
      "NextAuth",
      "Google OAuth",
      "GitHub OAuth",
      "Credentials authentication",
      "bcryptjs",
    ],

    methods: [
      "JWT-based sessions",
      "Google OAuth authentication",
      "GitHub OAuth authentication",
      "Credentials-based authentication",
    ],

    securityPractices: [
      "Password hashing",
      "Protected routes",
      "Authentication middleware",
      "Authorization checks",
      "User-specific resource ownership",
      "Secure session handling",
    ],
  },

  nextjsSecurity: {
    framework: "Next.js",

    practices: [
      "Protected application routes",
      "Server-side request handling",
      "API route protection",
      "Authentication integration",
      "Server-side validation",
      "Controlled access to user resources",
    ],

    authenticationIntegration: [
      "NextAuth",
      "Google OAuth",
      "GitHub OAuth",
      "Credentials authentication",
      "JWT sessions",
    ],
  },

  projectSecurity: {
    nexora: [
      "Google OAuth",
      "GitHub OAuth",
      "Credentials authentication",
      "JWT sessions",
      "Protected routes",
      "User authentication",
      "User-specific resources",
    ],

    waf: [
      "Custom WAF middleware",
      "SQL Injection detection",
      "XSS detection",
      "NoSQL Injection protection",
      "Path Traversal detection",
      "Command Injection detection",
      "Brute-force protection",
      "Rate limiting",
      "IP blocking",
      "JWT authentication",
      "Security logging",
    ],

    urlShortener: [
      "NextAuth authentication",
      "Google OAuth",
      "Credentials authentication",
      "JWT sessions",
      "Protected routes",
      "User-specific URL ownership",
      "Password hashing",
    ],
  },

  cryptography: {
    project: "Secure RSA Encryption and Decryption Tool",

    concepts: [
      "RSA encryption",
      "RSA decryption",
      "Public-key cryptography",
      "Cryptography fundamentals",
    ],

    context:
      "Built during cybersecurity project training at NIELIT Guwahati.",
  },

  securityEngineering: {
    principles: [
      "Defense in depth",
      "Input validation",
      "Least-privilege access",
      "Authentication before protected operations",
      "Request filtering",
      "Rate limiting",
      "Security monitoring",
      "Graceful handling of suspicious requests",
    ],

    summary:
      "Security work combines traditional web-security controls, authentication systems, and machine-learning-based threat detection.",
  },

  interviewSummary: {
    strongestSecurityProject:
      "The WAF + JWT project demonstrates practical security engineering through custom request filtering, attack detection, rate limiting, IP blocking, JWT authentication, machine learning, and explainable AI.",

    authenticationExperience:
      "Experience includes JWT authentication, OAuth providers, NextAuth, credentials authentication, protected routes, and password hashing.",

    frameworkExperience:
      "Next.js is used for building full-stack applications with authentication, protected routes, API endpoints, and server-side functionality.",
  },
} as const;