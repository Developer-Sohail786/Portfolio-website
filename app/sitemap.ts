import type { MetadataRoute } from "next";

import { projects } from "@/lib/projects";

const BASE_URL =
  "https://portfolio-website1-virid.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls =
    projects.map((project) => ({
      url: `${BASE_URL}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectUrls,
  ];
}