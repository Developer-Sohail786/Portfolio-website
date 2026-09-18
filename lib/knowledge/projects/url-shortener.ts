export const urlShortenerKnowledge = {
  identity: {
    name: "AI-Powered Secure URL Shortener",
    shortName: "AI URL Shortener",
    slug: "url-shortener",
    type: "Full-stack web application",
    title: "AI-Powered Secure URL Shortener",
    author: "Sohail Khan",
  },

  overview: {
    description:
      "A production-ready full-stack URL shortener built with Next.js, NextAuth, MongoDB, and Gemini AI. The application allows authenticated users to securely create, manage, and track shortened URLs while using AI to suggest meaningful short URL slugs and generate concise summaries from the destination webpage.",

    purpose:
      "The project demonstrates real-world full-stack development concepts including authentication, authorization, protected routes, user-scoped data, server-side session validation, database operations, click tracking, AI integration, and secure URL management.",

    coreCapabilities: [
      "Create shortened URLs",
      "Create custom short URL codes",
      "AI-generated short URL slug suggestions",
      "AI-generated webpage summaries",
      "User-specific URL ownership",
      "Secure authentication",
      "Google OAuth authentication",
      "Credentials-based authentication",
      "Protected routes",
      "URL click tracking",
      "URL management dashboard",
      "Delete shortened URLs",
      "Copy shortened URLs",
      "Server-side URL redirects",
    ],
  },

  technologyStack: {
    framework: [
      "Next.js",
      "Next.js App Router",
      "React",
      "React 19",
    ],

    language: [
      "JavaScript",
    ],

    styling: [
      "Tailwind CSS",
    ],

    authentication: [
      "NextAuth",
      "Credentials Authentication",
      "Google OAuth",
      "JWT Sessions",
    ],

    database: [
      "MongoDB",
      "MongoDB Atlas",
      "MongoDB Native Driver",
    ],

    ai: [
      "Google Generative AI",
      "Gemini 2.5 Flash",
      "Gemini 3 Flash Preview",
    ],

    frontendLibraries: [
      "React Hook Form",
      "React Icons",
      "React Toastify",
    ],

    security: [
      "bcryptjs",
      "Server-side session validation",
      "Protected routes",
      "User-scoped database queries",
    ],

    deployment: [
      "Vercel",
    ],
  },

  architecture: {
    overview:
      "The application uses the Next.js App Router with server and client components. Authentication is handled through NextAuth, application data is stored in MongoDB, and the AI suggestion feature is exposed through a dedicated Next.js API route.",

    highLevelFlow: [
      "User",
      "Next.js application",
      "Authentication layer",
      "Protected application routes",
      "API routes",
      "MongoDB",
      "Gemini AI",
    ],

    urlCreationFlow: [
      "Authenticated user enters a destination URL",
      "User enters a preferred short URL or requests an AI suggestion",
      "The application sends the request to the appropriate API route",
      "The server validates the authenticated session",
      "The URL and short URL are checked",
      "Duplicate short URLs are rejected",
      "The URL record is stored in MongoDB",
      "The dashboard refreshes and displays the generated URL",
    ],

    redirectFlow: [
      "User visits a shortened URL",
      "Next.js receives the short URL parameter",
      "The application searches MongoDB for the short URL",
      "If the short URL does not exist, the application returns notFound",
      "The click counter is atomically incremented using MongoDB $inc",
      "The user is redirected to the original destination URL",
    ],

    dashboardFlow: [
      "Authenticated user opens the shorten page",
      "Server validates the user's session",
      "Client requests /api/urls",
      "API identifies the current user",
      "MongoDB returns URLs belonging to that user",
      "URLs are sorted by creation date",
      "Dashboard displays original URL, short URL, summary, clicks, and creation date",
    ],
  },

  authentication: {
    provider: "NextAuth",

    sessionStrategy: "JWT",

    methods: [
      "Credentials login",
      "Google OAuth login",
    ],

    credentialsAuthentication: {
      loginFlow: [
        "User submits email and password",
        "NextAuth credentials provider receives the credentials",
        "Email is normalized to lowercase",
        "MongoDB is queried for the user",
        "Stored password hash is compared using bcrypt",
        "Invalid credentials are rejected",
        "Valid credentials produce a user ID",
        "User ID is stored in the JWT",
        "Session exposes the user ID",
      ],

      passwordSecurity:
        "Passwords are hashed with bcryptjs before being stored in MongoDB.",
    },

    googleAuthentication: {
      provider: "Google OAuth",

      behavior: [
        "User authenticates with Google",
        "The application checks whether the user already exists",
        "A new user record is created if necessary",
        "The user's MongoDB ID is placed into the JWT",
        "The session exposes the user's ID",
      ],
    },

    session: {
      strategy: "JWT",

      usage: [
        "Server-side authentication checks",
        "Protected pages",
        "Protected API routes",
        "User-specific database operations",
      ],
    },
  },

  routeProtection: {
    protectedRoutes: [
      "/shorten",
    ],

    authenticationOnlyRoutes: [
      "/login",
      "/register",
    ],

    behavior: {
      shorten:
        "Unauthenticated users attempting to access /shorten are redirected to /login?callbackUrl=/shorten.",

      login:
        "Authenticated users are redirected to /shorten.",

      register:
        "Authenticated users are redirected to /shorten.",
    },

    implementation: [
      "getServerSession()",
      "authOptions",
      "redirect()",
      "force-dynamic",
      "Server-side session validation",
    ],

    middleware:
      "The current middleware file does not implement route protection. Protection is performed directly in the relevant server-rendered pages and API routes.",
  },

  ai: {
    purpose:
      "The AI feature helps users generate meaningful short URL slugs and concise summaries from a destination webpage.",

    entryPoint:
      "/api/ai-generate",

    provider: "Google Generative AI",

    primaryModel: "gemini-2.5-flash",

    fallbackModel: "gemini-3-flash-preview",

    frontendTrigger: "AI Suggest",

    input: {
      field: "url",
      description:
        "The destination URL entered by the authenticated user.",
    },

    processing: [
      "User enters a URL",
      "Frontend sends the URL to /api/ai-generate",
      "Server fetches the destination webpage",
      "Server reads the webpage HTML",
      "Server attempts to extract the HTML title",
      "If the title tag is unavailable, the server attempts to extract og:title",
      "The URL and extracted title are included in the Gemini prompt",
      "Gemini generates a short summary",
      "Gemini generates a clean URL slug",
      "The response is parsed",
      "The generated slug and summary are returned to the frontend",
    ],

    promptRequirements: [
      "Generate a short summary of maximum 10 words",
      "Generate a clean URL slug",
      "Use lowercase characters for the slug",
      "Use hyphen-separated words",
      "Use both URL and webpage title when the title is weak",
    ],

    output: {
      summary:
        "A concise description of the destination webpage, limited to approximately 10 words by the prompt.",

      slug:
        "A lowercase, hyphen-separated short URL slug generated from the URL and webpage title.",
    },

    modelFallback: {
      description:
        "The application attempts to use Gemini 2.5 Flash first. If that request fails, it attempts Gemini 3 Flash Preview.",

      sequence: [
        "Gemini 2.5 Flash",
        "Gemini 3 Flash Preview",
        "Deterministic fallback slug and generic summary",
      ],
    },

    finalFallback: {
      trigger:
        "Used when both Gemini model requests fail.",

      summary: "Generated from URL",

      slugGeneration:
        "The application extracts the final URL path segment, converts it to lowercase, replaces non-alphanumeric characters with hyphens, and uses short-link as the final fallback.",
    },

    frontendBehavior: {
      button: "AI Suggest",

      loadingState: "AI Thinking...",

      success: [
        "Generated slug is placed into the short URL input",
        "Generated summary is stored in component state",
      ],

      failure: [
        "Toast notification is displayed",
        "If fallback data is returned, the fallback slug and summary are populated",
      ],
    },
  },

  urlGeneration: {
    endpoint: "/api/generate",

    authentication:
      "The endpoint requires a valid NextAuth server session.",

    inputs: [
      "url",
      "shorturl",
      "summary",
    ],

    validation: [
      "URL is required",
      "Short URL is required",
      "User must be authenticated",
    ],

    duplicatePrevention:
      "The API checks MongoDB for an existing shorturl before creating a new record.",

    duplicateResponse:
      "If the short URL already exists, the API returns a conflict response.",

    storedFields: [
      "url",
      "shorturl",
      "summary",
      "clicks",
      "userId",
      "createdAt",
      "lastClickedAt",
    ],

    initialValues: {
      clicks: 0,
      lastClickedAt: null,
    },
  },

  dashboard: {
    route: "/shorten",

    features: [
      "View generated URLs",
      "View original destination URLs",
      "View shortened URLs",
      "View AI-generated summaries",
      "View click counts",
      "View creation dates",
      "Copy shortened URLs",
      "Delete URLs",
    ],

    urlTableFields: [
      "Original URL",
      "Short URL",
      "Summary",
      "Clicks",
      "Created",
      "Action",
    ],

    refreshBehavior: [
      "URLs are fetched when the page loads",
      "URLs are fetched again when the browser window receives focus",
    ],

    emptyState: "Generate your first URL",
  },

  clickTracking: {
    mechanism: "MongoDB atomic increment",

    operation: "$inc",

    behavior: [
      "A shortened URL is resolved from MongoDB",
      "The URL document is located by shorturl",
      "The click counter is incremented atomically",
      "The user is redirected to the original URL",
    ],

    trackedFields: [
      "clicks",
      "createdAt",
      "lastClickedAt",
    ],

    note:
      "The current redirect implementation increments clicks using MongoDB $inc. The source code initializes lastClickedAt when creating a URL, but the redirect handler currently does not update lastClickedAt during the click operation.",
  },

  database: {
    technology: "MongoDB",

    databaseName: "URL_Shorten",

    driver: "MongoDB Native Driver",

    collections: [
      "users",
      "url",
    ],

    urlCollection: {
      name: "url",

      schema: {
        url: "Original destination URL",
        shorturl: "Short URL identifier",
        summary: "AI-generated or supplied summary",
        userId: "Owner's user ID",
        clicks: "Total number of clicks",
        createdAt: "URL creation timestamp",
        lastClickedAt:
          "Timestamp field initialized for the URL; current redirect code does not update it.",
      },
    },

    usersCollection: {
      name: "users",

      fields: [
        "name",
        "email",
        "password",
        "provider",
        "createdAt",
      ],
    },

    ownership:
      "URL records contain the authenticated user's userId, allowing dashboard queries and deletion operations to be scoped to the current user.",
  },

  authorization: {
    principle:
      "Users should only manage URLs associated with their own account.",

    urlListing:
      "The /api/urls endpoint queries MongoDB using the authenticated user's userId.",

    deletion:
      "The /api/delete endpoint deletes a URL only when both the requested MongoDB document ID and authenticated session userId match.",

    unauthorizedBehavior: [
      "Unauthenticated requests are rejected",
      "Users cannot delete another user's URL",
    ],
  },

  security: {
    authenticationSecurity: [
      "NextAuth authentication",
      "JWT sessions",
      "Password hashing with bcryptjs",
      "Google OAuth",
    ],

    authorizationSecurity: [
      "Server-side session validation",
      "User-scoped database queries",
      "Ownership verification during deletion",
      "Protected application routes",
    ],

    dataSecurity: [
      "Passwords are never stored in plaintext",
      "User URL records contain ownership information",
      "Database operations are performed server-side",
    ],

    applicationSecurity:
      "The application uses server-side authentication and authorization checks rather than relying solely on client-side route protection.",
  },

  api: {
    authentication: [
      {
        route: "/api/auth/[...nextauth]",
        purpose: "NextAuth authentication handler",
        methods: [
          "GET",
          "POST",
        ],
      },
      {
        route: "/api/auth/register",
        purpose: "Create a new credentials-based user",
        method: "POST",
      },
    ],

    urls: [
      {
        route: "/api/generate",
        purpose: "Create a shortened URL",
        method: "POST",
        authentication: "Required",
      },
      {
        route: "/api/urls",
        purpose: "Retrieve URLs belonging to the authenticated user",
        method: "GET",
        authentication: "Required",
      },
      {
        route: "/api/delete",
        purpose: "Delete an owned shortened URL",
        method: "POST",
        authentication: "Required",
      },
      {
        route: "/api/ai-generate",
        purpose:
          "Generate an AI-powered short URL slug and webpage summary",
        method: "POST",
      },
    ],
  },

  serverSideFeatures: {
    nextJsFeatures: [
      "Next.js App Router",
      "Server Components",
      "Client Components",
      "Route Handlers",
      "Server-side redirects",
      "Dynamic rendering",
      "Server-side session validation",
    ],

    redirects:
      "Short URLs are resolved server-side before redirecting users to the destination URL.",

    notFoundHandling:
      "Invalid or missing short URLs result in Next.js notFound handling.",
  },

  urlRedirect: {
    routePattern: "/[shorturl]",

    behavior: [
      "Receive short URL parameter",
      "Search MongoDB for matching shorturl",
      "Verify that a valid destination exists",
      "Increment click count",
      "Redirect to destination",
    ],

    validation:
      "The destination must begin with http before the application redirects to it.",
  },

  environmentVariables: {
    required: [
      "MONGODB_URI",
      "NEXTAUTH_SECRET",
      "NEXTAUTH_URL",
      "GOOGLE_CLIENT_ID",
      "GOOGLE_CLIENT_SECRET",
      "NEXT_PUBLIC_HOST",
      "GEMINI_API_KEY",
    ],

    descriptions: {
      MONGODB_URI:
        "MongoDB connection string.",

      NEXTAUTH_SECRET:
        "Secret used by NextAuth for authentication/session security.",

      NEXTAUTH_URL:
        "Base URL used by NextAuth.",

      GOOGLE_CLIENT_ID:
        "Google OAuth client ID.",

      GOOGLE_CLIENT_SECRET:
        "Google OAuth client secret.",

      NEXT_PUBLIC_HOST:
        "Public host used when constructing shortened URLs on the client.",

      GEMINI_API_KEY:
        "API key used to access Google Generative AI.",
    },
  },

  deployment: {
    platform: "Vercel",

    liveUrl:
      "https://url-shortener-app-topaz.vercel.app",

    database:
      "MongoDB Atlas",

    productionConsiderations: [
      "Configure production MongoDB connection string",
      "Configure NextAuth secret",
      "Configure Google OAuth credentials",
      "Configure Gemini API key",
      "Configure production NextAuth URL",
      "Configure public application host",
    ],
  },

  localSetup: {
    repository:
      "https://github.com/Developer-Sohail786/url-shortener-app",

    commands: [
      "git clone https://github.com/Developer-Sohail786/url-shortener-app",
      "cd url-shortener-app",
      "npm install",
      "npm run dev",
    ],

    developmentUrl:
      "http://localhost:3000",
  },

  projectStructure: {
    importantFiles: [
      "app/(auth)/login/page.js",
      "app/(auth)/login/loginComponent.js",
      "app/(auth)/register/page.js",
      "app/(auth)/register/register-component.js",
      "app/(main)/shorten/page.js",
      "app/(main)/shorten/shorten.js",
      "app/(main)/[shorturl]/page.js",
      "app/api/ai-generate/route.js",
      "app/api/generate/route.js",
      "app/api/urls/route.js",
      "app/api/delete/route.js",
      "app/api/auth/register/route.js",
      "app/api/auth/[...nextauth]/route.js",
      "lib/auth.js",
      "lib/mongodb.js",
      "lib/normalizeUrl.js",
    ],
  },

  futureImprovements: [
    "Rate limiting",
    "Analytics charts",
    "URL expiration",
    "Role-based access control",
    "Advanced usage statistics",
  ],

  projectHighlights: [
    "Full-stack Next.js URL shortener",
    "Authentication with credentials and Google OAuth",
    "JWT-based session management",
    "Server-side protected routes",
    "User-specific URL ownership",
    "MongoDB-backed URL management",
    "Atomic click tracking",
    "AI-powered slug generation",
    "AI-generated URL summaries",
    "Gemini model fallback",
    "Deterministic fallback when AI is unavailable",
    "Responsive dashboard",
    "Vercel deployment",
  ],

  links: {
    live:
      "https://url-shortener-app-topaz.vercel.app",

    github:
      "https://github.com/Developer-Sohail786/url-shortener-app",
  },

  author: {
    name: "Sohail Khan",
  },
} as const;