export const certificationsKnowledge = {
  certifications: [
    {
      name: "Backend Developer Internship Certificate",
      organization: "Odd Kind Marketing & Consulting Agency",
      type: "Internship Certificate",
      recipient: "Md Sohail Khan",
      role: "Backend Developer",
      period: "07/04/2026 — 07/08/2026",
      certificateDate: "22/08/2026",
      place: "Dibrugarh, Assam",
      authorizedBy: "Aparna Singha, Co-founder, Odd Kind",

      workCovered: [
        "Building the backend system of Odd Kind's portfolio website",
        "Server-side architecture",
        "Database integration",
        "Deployment processes",
        "Backend development fundamentals",
        "Problem-solving",
      ],

      recognition:
        "The certificate recognizes consistency, eagerness to learn, professional attitude, backend development fundamentals, problem-solving, and dedication.",

      source:
        "Certificate of Internship issued by Odd Kind Marketing & Consulting Agency.",
    },

    {
      name: "Web Development Internship Certificate",
      organization: "Sane Infotech",
      type: "Internship Certificate",
      recipient: "Sohail Khan",
      certificateId: "SANEITIC00121",
      field: "Web Development",
      duration: "6 Months",
      period: "16/08/2025 — 16/02/2026",

      source:
        "Certificate of Internship issued by Sane Infotech for the six-month Web Development internship.",
    },
  ],

  training: [
    {
      name: "Cybersecurity Project Training",
      organization: "NIELIT Guwahati",
      type: "Cybersecurity Project Training",
      period: "July 1 — July 25, 2024",

      project: {
        name: "Secure RSA Encryption and Decryption Tool",
        type: "Cybersecurity mini project",

        focus: [
          "RSA encryption",
          "RSA decryption",
          "Public-key cryptography",
          "Cryptography fundamentals",
          "Cybersecurity concepts",
        ],
      },

      description:
        "Completed cybersecurity project training with practical work focused on building a Secure RSA Encryption and Decryption Tool.",
    },
  ],

  achievements: [
    {name:"Backend Developer Intern",
      organization: "Odd Kind Marketing & Consulting Agency",
      period: "April 2026 — August 2026",
      duration: "5 months",
      description:
        "Worked on backend development, building and maintaining APIs, authentication systems, and database integrations while gaining hands-on experience with scalable web applications and backend engineering practices.",
    },
     {name:"Frontend Developer Intern",
      organization: "Sane Infotech",
      period: "August 2025 — February 2026",
      duration: "6 months",
      description:
        "Worked as frontend developer intern and contributed to a SaaS product built with the MERN stack, developing responsive React interfaces while also supporting Node.js and Express backend features.",
    },
     {
      name: "Red House Petrol Leader",
      organization: "Bethany Convent School",
      period: "2019 — 2020",
      duration: "2 consecutive years",
      description:
        "Served as Red House Petrol Leader for two consecutive years.",
    }
  ],

  summary: {
    internshipCertificates: 2,
    trainingPrograms: 1,
    notableAchievements: 1,

    areas: [
      "Backend Development",
      "Web Development",
      "Cybersecurity",
      "Cryptography",
      "RSA Encryption",
      "RSA Decryption",
    ],
  },
} as const;