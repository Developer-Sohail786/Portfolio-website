import { projects } from "@/lib/projects";

import { profileKnowledge } from "@/lib/knowledge/profile";
import { experienceKnowledge } from "@/lib/knowledge/experience";
import { skillsKnowledge } from "@/lib/knowledge/skills";
import { contactKnowledge } from "@/lib/knowledge/contact";
import { aiMlKnowledge } from "@/lib/knowledge/ai-ml";
import { engineeringKnowledge } from "@/lib/knowledge/engineering";
import { securityKnowledge } from "@/lib/knowledge/security";
import { careerKnowledge } from "@/lib/knowledge/career";
import { educationKnowledge } from "@/lib/knowledge/education";
import { certificationsKnowledge } from "@/lib/knowledge/certifications";
import { resumeKnowledge } from "@/lib/knowledge/resume";

import { nexoraKnowledge } from "@/lib/knowledge/projects/nexora";
import { wafKnowledge } from "@/lib/knowledge/projects/waf";
import { urlShortenerKnowledge } from "@/lib/knowledge/projects/url-shortener";

export const portfolioKnowledge = {
  profile: profileKnowledge,

  projects: {
    overview: projects,

    nexora: nexoraKnowledge,

    waf: wafKnowledge,

    urlShortener: urlShortenerKnowledge,
  },

  experience: experienceKnowledge,

  skills: skillsKnowledge,

  contact: contactKnowledge,

  aiMl: aiMlKnowledge,

  engineering: engineeringKnowledge,

  security: securityKnowledge,

  career: careerKnowledge,

  education: educationKnowledge,

  certifications: certificationsKnowledge,

  resume: resumeKnowledge,
} as const;

export function getPortfolioKnowledge() {
  return JSON.stringify(
    portfolioKnowledge,
    null,
    2,
  );
}