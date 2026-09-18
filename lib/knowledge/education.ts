export const educationKnowledge = {
  degree: {
    level: "Bachelor of Computer Application (BCA)",
    university: "Girijananda Chowdhury University",
    duration: "2023 — 2026",
    cgpa: "8.12",

    professionalExperience: {
      internships: [
        {
          role: "Backend Developer Intern",
          company: "Odd Kind",
          period: "April 2026 — August 2026",
          description:
            "Worked on backend development, building and maintaining backend APIs, authentication systems, and database integrations while gaining hands-on experience in scalable web application development and backend best practices.",
        },
        {
          role: "Frontend Developer Intern",
          company: "Sane Infotech",
          period: "August 2025 — February 2026",
          description:
            "Worked as a Frontend Developer Intern at Sane Infotech Guwahati, contributing to a SaaS product using the MERN stack by building responsive React components and supporting Node.js and Express backend features.",
        },
      ],

      cybersecurityTraining: {
        role: "Cybersecurity Project Trainee",
        organization: "NIELIT Guwahati",
        period: "July 1 — July 25, 2024",
        project:
          "Secure RSA Encryption and Decryption Tool",
        description:
          "Completed a cybersecurity project training program with a mini project focused on building a Secure RSA Encryption and Decryption Tool, gaining practical exposure to encryption and cybersecurity concepts.",
      },
    },
  },

  higherSecondary: {
    level: "Higher Secondary",
    college: "B.Borooah College",
    stream: "Commerce",
    percentage: "65%",
    duration: "2021 — 2023",
  },

  hslc: {
    level: "HSLC",
    school: "Bethany Convent School",
    percentage: "67%",
    passingYear: "2021",
    achievement:
      "Red House Petrol Leader for consecutive 2 years (2019 and 2020)",
  },

  educationSummary: {
    institutions: [
      "Girijananda Chowdhury University",
      "B.Borooah College",
      "Bethany Convent School",
    ],

    academicPath:
      "Completed a Bachelor of Computer Application (BCA) after Higher Secondary education in Commerce, following HSLC education.",

    achievements: [
      "Red House Petrol Leader for consecutive 2 years (2019 and 2020)",
    ],
  },
} as const;