import { portfolioKnowledge } from "@/lib/knowledge";

export type KnowledgeDocument = {
  id: string;
  content: string;
  metadata: {
    category: string;
    source: string;
  };
};

const MAX_CHUNK_LENGTH = 1800;

function stringifyValue(value: unknown): string {
  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => stringifyValue(item))
      .filter(Boolean)
      .join(", ");
  }

  if (value && typeof value === "object") {
    return Object.entries(value as Record<string, unknown>)
      .map(([key, nestedValue]) => {
        const formatted = stringifyValue(nestedValue);

        if (!formatted) {
          return "";
        }

        return `${key}: ${formatted}`;
      })
      .filter(Boolean)
      .join("\n");
  }

  return "";
}

function splitLargeText(text: string): string[] {
  if (text.length <= MAX_CHUNK_LENGTH) {
    return [text];
  }

  const chunks: string[] = [];

  let current = "";

  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  for (const line of lines) {
    const candidate = current ? `${current}\n${line}` : line;

    if (candidate.length <= MAX_CHUNK_LENGTH) {
      current = candidate;
      continue;
    }

    if (current) {
      chunks.push(current);
    }

    current = line;
  }

  if (current) {
    chunks.push(current);
  }

  return chunks;
}

function createDocument(
  category: string,
  source: string,
  section: string,
  value: unknown,
): KnowledgeDocument[] {
  const formatted = stringifyValue(value).trim();

  if (!formatted) {
    return [];
  }

  const content = `Category: ${category}
Section: ${section}

${formatted}`;

  return splitLargeText(content).map((chunk, index) => ({
    id: `${category}-${source}-${section}-${index}`,

    content: chunk,

    metadata: {
      category,
      source,
    },
  }));
}

function createProjectDocuments(
  project: unknown,
  index: number,
): KnowledgeDocument[] {
  if (!project || typeof project !== "object") {
    return [];
  }

  const projectData = project as Record<string, unknown>;

  const projectName =
    typeof projectData.name === "string"
      ? projectData.name
      : `project-${index}`;

  const sections: KnowledgeDocument[] = [];

  const identityFields = [
    "name",
    "shortName",
    "title",
    "description",
    "details",
  ];

  const identity: Record<string, unknown> = {};

  for (const field of identityFields) {
    if (field in projectData) {
      identity[field] = projectData[field];
    }
  }

  if (Object.keys(identity).length > 0) {
    sections.push(
      ...createDocument("projects", projectName, "overview", identity),
    );
  }

  if ("stack" in projectData) {
    sections.push(
      ...createDocument(
        "projects",
        projectName,
        "technology",
        projectData.stack,
      ),
    );
  }

  if ("features" in projectData) {
    sections.push(
      ...createDocument(
        "projects",
        projectName,
        "features",
        projectData.features,
      ),
    );
  }

  const remainingFields = Object.entries(projectData).filter(
    ([key]) =>
      !identityFields.includes(key) && key !== "stack" && key !== "features",
  );

  if (remainingFields.length > 0) {
    const remaining: Record<string, unknown> = {};

    for (const [key, value] of remainingFields) {
      remaining[key] = value;
    }

    sections.push(
      ...createDocument(
        "projects",
        projectName,
        "additional information",
        remaining,
      ),
    );
  }

  return sections;
}

function createCategoryDocuments(
  category: string,
  value: unknown,
): KnowledgeDocument[] {
  if (!value || typeof value !== "object") {
    return createDocument(category, category, category, value);
  }

  if (Array.isArray(value)) {
    return value.flatMap((item, index) =>
      createDocument(category, category, `item-${index}`, item),
    );
  }

  return Object.entries(value as Record<string, unknown>).flatMap(
    ([section, sectionValue]) =>
      createDocument(category, category, section, sectionValue),
  );
}

export function getKnowledgeDocuments(): KnowledgeDocument[] {
  const documents: KnowledgeDocument[] = [];

  Object.entries(portfolioKnowledge).forEach(([category, value]) => {
    if (category === "projects") {
      const projects = value as Record<string, unknown>;

      if (Array.isArray(projects.overview)) {
        projects.overview.forEach((project, index) => {
          documents.push(...createProjectDocuments(project, index));
        });
      }

      Object.entries(projects)
        .filter(([key]) => key !== "overview")
        .forEach(([source, project]) => {
          documents.push(
            ...createDocument("projects", source, "project knowledge", project),
          );
        });

      return;
    }

    documents.push(...createCategoryDocuments(category, value));
  });

  return documents;
}
