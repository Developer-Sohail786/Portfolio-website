export const wafKnowledge = {
  identity: {
    name: "Explainable AI-Based Web Application Firewall (WAF) + JWT Authentication",
    shortName: "WAF + JWT",
    slug: "waf",
    type: "Cybersecurity and full-stack web application",
    title:
      "Explainable AI-Based Web Application Firewall + JWT Authentication",
    author: "Sohail Khan",
    authorRole: "Full Stack Developer",
  },

  overview: {
    description:
      "An AI-assisted Web Application Firewall that detects and blocks malicious web requests using traditional security mechanisms and Machine Learning, while providing human-readable explanations for AI-based decisions.",

    purpose:
      "The project implements a custom Web Application Firewall that inspects incoming HTTP requests before they reach application routes. It combines traditional WAF security mechanisms with Machine Learning to identify malicious request payloads and uses Explainable AI to make machine-learning decisions understandable to humans.",

    capabilities: [
      "SQL Injection detection",
      "Cross-Site Scripting detection",
      "Path Traversal detection",
      "Command Injection detection",
      "Suspicious request detection",
      "Request payload inspection",
      "Dynamic IP blocking",
      "Rate limiting",
      "Security logging",
      "Machine Learning attack classification",
      "Explainable AI",
      "JWT authentication",
      "Protected API routes",
      "Refresh token authentication",
      "Security dashboard",
    ],
  },

  technicalChallenges: {
    hardestPart:
      "The hardest part was integrating the WAF into the normal request flow without breaking legitimate requests. The middleware had to inspect incoming requests, apply security checks, and decide whether to block or forward them while keeping authentication and application routes working normally. Later, integrating the ML detection into this flow added another layer of complexity.",

    mostDebugging:
      "The most debugging was around the middleware and request-processing flow. I had to make sure the WAF inspected the right parts of the request, handled different payload formats correctly, and did not interfere with legitimate API requests. I also had to troubleshoot the communication between the Node.js backend and the Python ML component.",

    proudestDecision:
      "The strongest technical decision was choosing a layered security approach rather than depending entirely on the ML model. The WAF combines traditional controls such as rate limiting, IP blocking, and request filtering with ML-based payload classification. This gives the system multiple security layers instead of relying on a single detection mechanism.",

    strongestAchievement:
      "The strongest part is that I did not build just a static security-rule demo. I built a full-stack WAF and then extended it with a machine-learning detection and explainability layer. The system combines request-level security middleware, JWT authentication, real-time payload classification, LIME explanations, logging, and a monitoring dashboard into one working application.",
  },

  personalContribution: {
    description:
      "I worked on the project end-to-end, covering the frontend, backend, WAF middleware, authentication, database integration, machine-learning pipeline, model training, ML integration, explainability, logging, and monitoring.",

    areas: [
      "React frontend",
      "Node.js backend",
      "Express.js APIs",
      "Custom WAF middleware",
      "JWT authentication",
      "Protected routes",
      "MongoDB integration",
      "Security logging",
      "Security dashboard",
      "Python ML pipeline",
      "Attack-classification model",
      "Node.js and Python integration",
      "LIME-based explanations",
    ],

    scope:
      "The implementation covers the complete application flow from incoming HTTP requests and security inspection to machine-learning classification, explainability, allow/block decisions, logging, and dashboard monitoring.",
  },

  attackDetection: {
    supportedAttacks: [
      {
        name: "SQL Injection",
        identifier: "sqli",
        description:
          "Malicious SQL-related request payloads intended to manipulate database queries.",
      },
      {
        name: "Cross-Site Scripting",
        identifier: "xss",
        description:
          "Malicious script-based payloads intended to execute client-side code.",
      },
      {
        name: "Path Traversal",
        identifier: "path_traversal",
        description:
          "Payloads attempting to access files or directories outside their intended location.",
      },
      {
        name: "Command Injection",
        identifier: "cmdi",
        description:
          "Malicious payloads attempting to execute operating-system commands.",
      },
    ],

    traditionalSecurityChecks: [
      "IP Blocking",
      "Rate Limiting",
      "Request Filtering",
    ],

    requestInspection:
      "The WAF inspects incoming HTTP request payloads before they reach protected application routes.",

    detectionProcess: [
      "Incoming request reaches the WAF middleware",
      "Relevant request payload/content is extracted",
      "Traditional security controls are applied",
      "Payload is sent to the Python ML component",
      "Payload is transformed using TF-IDF",
      "Logistic Regression classifies the payload",
      "Confidence information is returned",
      "The WAF evaluates the ML result together with implemented security rules",
      "The request is blocked or forwarded",
      "Security events are logged when appropriate",
    ],
  },

  architecture: {
    overview:
      "The system uses a layered security architecture combining a React frontend, an Express.js backend, custom WAF middleware, traditional security mechanisms, Machine Learning detection, Explainable AI, threat logging, and a security dashboard.",

    flow: [
      "User",
      "React Frontend",
      "Express.js Server",
      "WAF Middleware",
      "Traditional Security Checks and AI Detection",
      "LIME / Explainable AI",
      "Allow or Block",
      "Threat Logging",
      "Security Dashboard",
    ],

    layers: [
      "Authentication",
      "Request Filtering",
      "Rate Limiting",
      "IP Blocking",
      "Machine Learning Detection",
      "Explainable AI",
      "Threat Logging",
    ],

    designPrinciple:
      "The WAF uses multiple complementary security layers rather than depending on a single machine-learning model or static rule set.",
  },

  requestProcessing: {
    description:
      "Every incoming HTTP request passes through the security pipeline before reaching the application.",

    flow: [
      "HTTP Request",
      "JWT Validation",
      "WAF Middleware",
      "Traditional Security Checks",
      "AI Payload Classification",
      "LIME Explanation",
      "Allow or Block",
      "Security Logging",
    ],

    decisionLogic:
      "A request is blocked when it matches implemented blocking conditions or is classified as malicious according to the WAF decision logic. Otherwise, the request is forwarded to the application.",
  },

  machineLearning: {
    description:
      "The Machine Learning engine classifies request payloads to identify malicious web requests.",

    pipeline: [
      "Request Payload",
      "Text Preprocessing",
      "TF-IDF Vectorization",
      "Logistic Regression",
      "Attack Classification",
      "Confidence Score",
      "LIME Explanation",
      "Allow or Block",
    ],

    featureExtraction: {
      method: "TF-IDF",
      description:
        "TF-IDF is used to transform request payload text into numerical features for Machine Learning classification.",

      reasoning:
        "The input is primarily text-based web payloads, so TF-IDF provides a simple and practical way to represent important words and patterns numerically.",
    },

    classifier: {
      algorithm: "Logistic Regression",
      purpose:
        "Classifies request payloads into supported attack categories or normal traffic.",

      reasoning:
        "Logistic Regression was chosen because it is lightweight, fast to train, and works well for text classification. It also makes real-time prediction practical without requiring a heavy deep-learning model.",
    },

    output: {
      classification: "Attack classification",
      confidenceScore: "Confidence score",
    },

    integration:
      "The Python Machine Learning engine is integrated with the Node.js backend.",

    runtimeFlow: [
      "Node.js receives the request payload",
      "Node.js executes the Python prediction script",
      "The payload is passed to predict.py",
      "The saved TF-IDF vectorizer is loaded",
      "The trained Logistic Regression model is loaded",
      "The payload is transformed into features",
      "The model performs classification",
      "Prediction and confidence information are returned to Node.js",
      "Node.js continues the WAF decision process",
    ],
  },

  nodePythonIntegration: {
    description:
      "The Node.js backend communicates with the Python Machine Learning component by executing the prediction script as a child process.",

    flow: [
      "Node.js receives payload",
      "Node.js invokes predict.py",
      "Payload is passed to the Python process",
      "Python loads the saved TF-IDF vectorizer",
      "Python loads the trained Logistic Regression model",
      "Python performs prediction",
      "Python returns prediction and confidence information",
      "Node.js continues the WAF decision process",
    ],

    reason:
      "This allows the main web application to remain Node.js/Express-based while using Python's Machine Learning ecosystem for model training and prediction.",
  },

  attackClasses: [
    {
      name: "normal",
      description: "Legitimate web request",
    },
    {
      name: "sqli",
      description: "SQL Injection",
    },
    {
      name: "xss",
      description: "Cross-Site Scripting",
    },
    {
      name: "path_traversal",
      description: "Path Traversal",
    },
    {
      name: "cmdi",
      description: "Command Injection",
    },
  ],

  explainableAI: {
    technology:
      "LIME (Local Interpretable Model-Agnostic Explanations)",

    purpose:
      "LIME is used to explain why a request payload was classified as malicious by the Machine Learning model.",

    capabilities: [
      "LIME-based explanations",
      "Identification of important payload features",
      "Human-readable attack explanations",
      "Improved transparency of Machine Learning predictions",
    ],

    flow: [
      "Machine Learning Prediction",
      "Identify Important Payload Features",
      "Generate LIME Explanation",
      "Produce Human-Readable Explanation",
    ],

    example: {
      prediction: "SQL Injection",
      explanation:
        "The payload was classified as SQL Injection because it contains SQL-related patterns such as UNION, SELECT, FROM and other database-related terms.",
    },

    interpretation:
      "LIME explains an individual prediction by identifying which parts of the payload contributed most to the model's decision. The resulting model contributions are converted into a human-readable explanation for the security dashboard.",
  },

  dataset: {
    description:
      "The final training dataset contains approximately 39,495 web request payloads.",

    totalSamples: 39495,

    classes: {
      normal: 20304,
      sqli: 10939,
      xss: 7873,
      path_traversal: 290,
      cmdi: 89,
    },

    preparation: [
      "Dataset cleaning",
      "Deduplication",
      "Standardization",
      "Preparation for supervised Machine Learning",
    ],

    observation:
      "The dataset has significant class imbalance, particularly for Path Traversal and Command Injection examples.",
  },

  modelPerformance: {
    reportedAccuracy: "Approximately 99% classification accuracy",

    evaluationMetrics: [
      "Accuracy",
      "Precision",
      "Recall",
      "F1-Score",
      "Classification Report",
    ],

    interpretation:
      "The approximately 99% accuracy was achieved on the prepared dataset and should be understood in the context of that dataset and its class distribution.",
  },

  authentication: {
    description:
      "The application uses JWT-based authentication to protect API routes and provide authenticated access.",

    features: [
      "JWT access tokens",
      "Refresh token system",
      "Protected API routes",
      "Secure user registration",
      "Secure user login",
      "Automatic token refresh",
      "Axios authentication interceptors",
    ],

    tokenSystem: {
      accessToken: true,
      refreshToken: true,
      automaticRefresh: true,
    },
  },

  security: {
    mechanisms: [
      "Request filtering",
      "Rate limiting",
      "Dynamic IP blocking",
      "Machine Learning attack detection",
      "JWT authentication",
      "Protected routes",
      "Security logging",
      "Threat monitoring",
    ],

    layeredApproach: [
      "Authentication",
      "Request Filtering",
      "Rate Limiting",
      "IP Blocking",
      "Machine Learning Detection",
      "Explainable AI",
      "Threat Logging",
    ],

    rationale:
      "The layered approach prevents the system from relying exclusively on ML predictions. Traditional controls can provide fast defensive checks while ML adds payload-level classification and LIME provides explainability.",
  },

  securityDashboard: {
    features: [
      "Total threats",
      "Blocked requests",
      "Attack types",
      "Confidence scores",
      "Severity levels",
      "Source IP addresses",
      "Timestamps",
      "AI-generated explanations",
      "Security event logs",
    ],
  },

  protectionExamples: [
    {
      attackType: "SQL Injection",
      payload:
        "' OR 1=1 -- UNION SELECT username,password FROM users",
      result: {
        ok: false,
        reason: "malicious_payload",
        attackType: "sqli",
      },
    },
    {
      attackType: "Cross-Site Scripting",
      payload: "<script>alert('XSS')</script>",
      result: {
        ok: false,
        reason: "malicious_payload",
        attackType: "xss",
      },
    },
    {
      attackType: "Path Traversal",
      payload: "../../etc/passwd",
      result: {
        ok: false,
        reason: "malicious_payload",
        attackType: "path_traversal",
      },
    },
  ],

  technologyStack: {
    frontend: [
      "React.js",
      "Vite",
      "Axios",
      "React Router",
    ],

    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Helmet",
      "CORS",
    ],

    machineLearning: [
      "Python",
      "Scikit-learn",
      "TF-IDF",
      "Logistic Regression",
      "LIME",
      "Pandas",
      "NumPy",
    ],

    deployment: [
      "Vercel",
      "Render",
      "MongoDB Atlas",
    ],
  },

  database: {
    database: "MongoDB",
    odm: "Mongoose",
    hosting: "MongoDB Atlas",
  },

  api: {
    authentication: [
      "POST /api/auth/register",
      "POST /api/auth/login",
      "POST /api/auth/logout",
      "POST /api/auth/refresh",
    ],

    user: [
      "GET /api/users/me",
    ],

    security: [
      "GET /api/security/logs",
    ],

    health: [
      "GET /health",
    ],
  },

  machineLearningFiles: {
    directory: "ML/",

    files: [
      "predict.py",
      "train.py",
      "waf_model.pkl",
      "tfidf_vectorizer.pkl",
      "final_training_dataset.csv",
    ],

    runtime:
      "The trained Machine Learning model is loaded during runtime to classify incoming request payloads.",
  },

  localSetup: {
    repository:
      "https://github.com/Developer-Sohail786/WAF-JWT.git",

    directories: [
      "Backend",
      "Frontend",
    ],

    backendInstallation: [
      "cd Backend",
      "npm install",
    ],

    frontendInstallation: [
      "cd ../Frontend",
      "npm install",
    ],

    pythonDependencies: [
      "pandas",
      "numpy",
      "scikit-learn",
      "lime",
    ],

    pythonInstallation:
      "pip install pandas numpy scikit-learn lime",

    backendEnvironmentVariables: [
      "MONGO_URL",
      "ACCESS_TOKEN_SECRET",
      "REFRESH_TOKEN_SECRET",
      "ACCESS_TOKEN_EXPIRY",
      "REFRESH_TOKEN_EXPIRY",
      "WAF_ENABLED",
    ],

    backendRunCommand: "npm start",

    frontendRunCommand: "npm run dev",
  },

  deployment: {
    frontend: {
      platform: "Vercel",
      url: "https://waf-jwt-frontend.vercel.app",
    },

    backend: {
      platform: "Render",
      url: "https://waf-jwt.onrender.com",
    },

    database: {
      platform: "MongoDB Atlas",
    },
  },

  futureImprovements: [
    "Expand the dataset with more diverse and modern attack payloads",
    "Reduce class imbalance",
    "Compare Logistic Regression with Random Forest",
    "Evaluate transformer-based text classifiers",
    "Improve the decision layer combining rule-based and ML signals",
    "Improve detection accuracy for minority attack classes",
  ],

  projectHighlights: [
    "Custom middleware-based WAF",
    "AI-assisted attack detection",
    "Explainable AI using LIME",
    "SQL Injection detection",
    "XSS detection",
    "Path Traversal detection",
    "Command Injection detection",
    "Multi-class attack classification",
    "Approximately 99% model accuracy on the prepared dataset",
    "TF-IDF feature extraction",
    "Logistic Regression classification",
    "Python and Node.js integration",
    "JWT authentication",
    "Refresh token mechanism",
    "Dynamic IP blocking",
    "Rate limiting",
    "Real-time threat logging",
    "Security monitoring dashboard",
    "Full-stack implementation",
    "Deployed frontend",
    "Deployed backend",
    "Deployed database",
  ],

  author: {
    name: "Sohail Khan",
    role: "Full Stack Developer",
    description:
      "Built as a cybersecurity and full-stack development project demonstrating practical implementation of Web Application Security, Machine Learning, Explainable AI, Authentication, and REST APIs.",
  },

  links: {
    liveFrontend: "https://waf-jwt-frontend.vercel.app",
    backendApi: "https://waf-jwt.onrender.com",
    github: "https://github.com/Developer-Sohail786/WAF-JWT",
  },
} as const;