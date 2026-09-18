export const contactKnowledge = {
  personalContact: {
    name: "Md Sohail Khan",
    email: "sanu30963@gmail.com",
    phone: "+91 9531023320",
    location: "Delhi",
  },

  socialLinks: {
    linkedin: "linkedin.com/in/sohailkhan-dev",
    github: "github.com/Developer-Sohail786",
    portfolio: "portfolio-website1-virid.vercel.app",
  },

  contactMethods: [
    {
      type: "Email",
      value: "sanu30963@gmail.com",
      purpose: [
        "Professional inquiries",
        "Job opportunities",
        "Project discussions",
        "Collaboration",
      ],
    },
    {
      type: "Phone",
      value: "+91 9531023320",
      purpose: [
        "Professional communication",
        "Opportunities",
        "Project discussions",
      ],
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/sohailkhan-dev",
      purpose: [
        "Professional networking",
        "Career opportunities",
        "Professional communication",
      ],
    },
    {
      type: "GitHub",
      value: "github.com/Developer-Sohail786",
      purpose: [
        "Viewing source code",
        "Exploring projects",
        "Technical work",
        "Open-source work",
      ],
    },
    {
      type: "Portfolio",
      value: "portfolio-website1-virid.vercel.app",
      purpose: [
        "Viewing projects",
        "Learning about experience",
        "Viewing technical skills",
        "Contacting Sohail",
      ],
    },
  ],

  contactForm: {
    available: true,
    sectionId: "contact",
    sectionLabel: "Contact / 07",
    endpoint: "/api/contact",
    method: "POST",

    fields: [
      {
        name: "Full Name",
        field: "name",
        type: "text",
        required: true,
      },
      {
        name: "Email Address",
        field: "email",
        type: "email",
        required: true,
      },
      {
        name: "Message",
        field: "message",
        type: "textarea",
        required: true,
        maxLength: 2000,
      },
    ],

    validation: "Zod",
    formHandling: "React Hook Form",

    supportedTopics: [
      "Projects",
      "Job opportunities",
      "Internship opportunities",
      "Collaboration",
      "Technical ideas",
      "Professional inquiries",
    ],

    statusMessages: {
      submitting: "Sending...",
      success: "Message sent successfully.",
      error: "Something went wrong. Please try again.",
    },
  },

  professionalContactPreferences: {
    status: "Currently open to opportunities",

    preferredReasonsForContact: [
      "Software engineering opportunities",
      "Full-stack development opportunities",
      "Backend development opportunities",
      "AI engineering opportunities",
      "Project opportunities",
      "Technical collaboration",
      "Professional networking",
    ],

    communication:
      "Visitors can contact Sohail through email, phone, LinkedIn, GitHub, the portfolio contact form, or other listed professional channels.",
  },

  commonQuestions: {
    howToContact:
      "Sohail can be contacted through email at sanu30963@gmail.com, phone at +91 9531023320, LinkedIn, or the contact form on his portfolio.",

    email:
      "Sohail's email address is sanu30963@gmail.com.",

    phone:
      "Sohail's phone number is +91 9531023320.",

    linkedin:
      "Sohail can be found on LinkedIn at linkedin.com/in/sohailkhan-dev.",

    github:
      "Sohail's GitHub profile is github.com/Developer-Sohail786.",

    portfolio:
      "Sohail's portfolio is available at portfolio-website1-virid.vercel.app.",

    opportunities:
      "Sohail is currently open to opportunities, particularly software engineering, full-stack development, backend development, and AI engineering roles.",
  },
} as const;