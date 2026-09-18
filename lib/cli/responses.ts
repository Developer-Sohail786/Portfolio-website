import { experiences } from "@/lib/experience";
import { projects } from "@/lib/projects";
import { skillGroups } from "@/lib/skills";

function formatDescription(
  description: string,
  indent = "    ",
  maxLength = 60,
) {
  const words = description.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const testLine = currentLine
      ? `${currentLine} ${word}`
      : word;

    if (testLine.length > maxLength) {
      if (currentLine) {
        lines.push(`${indent}${currentLine}`);
      }

      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }

  if (currentLine) {
    lines.push(`${indent}${currentLine}`);
  }

  return lines;
}

function getProjectResponse(
  project: (typeof projects)[number],
) {
  return [
    project.name.toUpperCase(),
    "────────────────────────────────────────",
    project.title,
    "",
    ...formatDescription(project.details),
    "",
    "Features:",
    ...project.features.map((feature) => `→ ${feature}`),
    "",
    "Stack:",
    project.stack.join(" · "),
    "",
    `Live: ${project.liveUrl.replace(/^https?:\/\//, "")}`,
    `GitHub: ${project.githubUrl.replace(/^https?:\/\//, "")}`,
  ];
}

export const responses: Record<string, string[]> = {
  about: [
    "SOHAIL",
    "────────────────────────────────────────",
    "Full-Stack Developer focused on modern web",
    "applications, backend engineering, and AI.",
    "",
    "I build production-ready applications using",
    "Next.js, React, TypeScript, Node.js, PostgreSQL,",
    "MongoDB, Prisma, and modern AI tooling.",
    "",
    "Current interests:",
    "→ Backend engineering",
    "→ System design",
    "→ AI integration",
    "→ Scalable application architecture",
  ],

  projects: [
    "SELECTED PROJECTS",
    "────────────────────────────────────────",
    "",
    ...projects.flatMap((project) => [
      `${project.number}  ${project.name}`,
      `    ${project.title}`,
      "",
    ]),
    'Type "project" for available project details.',
  ],

  project: [
    "AVAILABLE PROJECTS",
    "────────────────────────────────────────",
    "",
    ...projects.flatMap((project) => [
      `${project.number}  ${project.name}`,
      `    ${project.title}`,
      "",
    ]),
    "For more details:",
    ...projects.map(
      (project) => `→ project ${project.slug}`,
    ),
  ],

  skills: [
    "TECHNICAL STACK",
    "────────────────────────────────────────",
    "",
    ...skillGroups.flatMap((group) => [
      group.title.toUpperCase(),
      group.skills.join(" · "),
      "",
    ]),
  ],

  experience: [
    "EXPERIENCE",
    "────────────────────────────────────────",
    "",

    ...experiences.flatMap((experience) => [
      `${experience.number}  ${experience.role}`,
      `    ${experience.company}`,
      `    ${experience.period}`,
      "",
      ...formatDescription(experience.description),
      "",
    ]),
  ],

  contact: [
    "CONTACT",
    "────────────────────────────────────────",
    "",
    "Want to discuss a project, opportunity,",
    "or collaboration?",
    "",
    "Use the contact form on this page to",
    "send Sohail a message.",
    "",
    "Email and social links are available",
    "in the footer.",
  ],

  socials: [
    "SOCIALS",
    "────────────────────────────────────────",
    "",
    "GitHub",
    "github.com/Developer-Sohail786",
    "",
    "LinkedIn",
    "linkedin.com/in/sohailkhan-dev",
    "",
    "Email",
    "sanu30963@gmail.com",
    "Phone",
    "+91 9531023320",
    "Whatsapp",
    "https://wa.me/919531023320"
  ],
};

for (const project of projects) {
  responses[`project ${project.slug}`] =
    getProjectResponse(project);
}