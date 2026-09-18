import { generateQueryEmbedding } from "@/lib/rag/embeddings";
import { queryKnowledge } from "@/lib/rag/vector-store";
import { CATEGORY_KEYWORDS } from "@/lib/rag/category-keywords";

export type RetrievedDocument = {
  id: string;
  content: string;
  metadata: {
    category: string;
    source: string;
  };
  distance: number;
};

const DEFAULT_LIMIT = 8;
const MAX_LIMIT = 8;
const MAX_DISTANCE = 0.8;
const CATEGORY_CANDIDATE_LIMIT = 20;

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function keywordMatches(normalizedQuery: string, keyword: string): boolean {
  const normalizedKeyword = normalizeText(keyword);

  if (!normalizedKeyword) {
    return false;
  }

  return ` ${normalizedQuery} `.includes(` ${normalizedKeyword} `);
}

/*
 * Find the strongest category matches.
 *
 * More specific phrases receive a higher
 * score than generic single-word matches.
 *
 * Example:
 *
 * "AI technologies"
 *
 * aiMl:
 *   "ai technologies" = strong match
 *
 * skills:
 *   "technology" = generic match
 *
 * Therefore aiMl wins.
 */
function detectPrimaryCategory(query: string): string | null {
  const normalizedQuery = normalizeText(query);

  const categoryScores = new Map<string, number>();

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    let score = 0;

    for (const keyword of keywords) {
      if (keywordMatches(normalizedQuery, keyword)) {
        const normalizedKeyword = normalizeText(keyword);

        /*
         * Longer/more specific phrases
         * receive more weight.
         */
        const wordCount = normalizedKeyword.split(" ").length;

        const characterWeight = Math.min(normalizedKeyword.length, 30);

        score += wordCount * 10 + characterWeight;
      }
    }

    if (score > 0) {
      categoryScores.set(category, score);
    }
  }

  if (categoryScores.size === 0) {
    return null;
  }

  let primaryCategory: string | null = null;

  let highestScore = -1;

  for (const [category, score] of categoryScores) {
    if (score > highestScore) {
      highestScore = score;
      primaryCategory = category;
    }
  }

  return primaryCategory;
}

export async function retrieveKnowledge(
  query: string,
  limit = DEFAULT_LIMIT,
): Promise<RetrievedDocument[]> {
  const queryEmbedding = await generateQueryEmbedding(query);

  const safeLimit = Math.min(Math.max(limit, 1), MAX_LIMIT);

  const primaryCategory = detectPrimaryCategory(query);

  console.log(`[RAG] Detected primary category: ${primaryCategory ?? "none"}`);

  let retrieved: RetrievedDocument[] = [];

  if (primaryCategory) {
    retrieved = await retrieveByCategory(
      queryEmbedding,
      CATEGORY_CANDIDATE_LIMIT,
      primaryCategory,
    );
  } else {
    const results = await queryKnowledge(queryEmbedding, safeLimit);

    retrieved = parseQueryResults(results);
  }

  /*
   * Category-specific ordering.
   */
  if (primaryCategory === "experience") {
    retrieved = sortExperienceDocuments(retrieved);
  }

  if (primaryCategory === "education") {
    retrieved = sortEducationDocuments(retrieved);
  }

  /*
   * AI/ML questions should prioritize
   * explicit technology information.
   */
  if (primaryCategory === "aiMl") {
    retrieved = rankAiMlDocuments(retrieved, query);
  }

  const finalDocuments = deduplicateDocuments(retrieved).slice(0, safeLimit);

  console.log(
    `[RAG] Retrieved documents: ${finalDocuments.map(
      (document) => `${document.metadata.source}:${document.id}`,
    )}`,
  );

  return finalDocuments;
}

async function retrieveByCategory(
  queryEmbedding: number[],
  limit: number,
  category: string,
): Promise<RetrievedDocument[]> {
  const results = await queryKnowledge(queryEmbedding, limit, category);

  return parseQueryResults(results, category);
}

function parseQueryResults(
  results: Awaited<ReturnType<typeof queryKnowledge>>,
  category?: string,
): RetrievedDocument[] {
  const ids = results.ids?.[0] ?? [];

  const documents = results.documents?.[0] ?? [];

  const metadatas = results.metadatas?.[0] ?? [];

  const distances = results.distances?.[0] ?? [];

  const retrieved: RetrievedDocument[] = [];

  for (let index = 0; index < ids.length; index++) {
    const content = documents[index];

    if (!content) {
      continue;
    }

    const rawDistance = distances[index];

    const distance = typeof rawDistance === "number" ? rawDistance : Infinity;

    if (!category && distance > MAX_DISTANCE) {
      continue;
    }

    const metadata = metadatas[index];

    retrieved.push({
      id: ids[index],
      content,
      metadata: {
        category:
          typeof metadata?.category === "string"
            ? metadata.category
            : "unknown",

        source:
          typeof metadata?.source === "string" ? metadata.source : "unknown",
      },
      distance,
    });
  }

  return retrieved;
}

function rankAiMlDocuments(
  documents: RetrievedDocument[],
  query: string,
): RetrievedDocument[] {
  const normalizedQuery = normalizeText(query);

  return [...documents].sort((a, b) => {
    const scoreA = getAiMlRelevanceScore(a, normalizedQuery);

    const scoreB = getAiMlRelevanceScore(b, normalizedQuery);

    if (scoreA !== scoreB) {
      return scoreB - scoreA;
    }

    return a.distance - b.distance;
  });
}

function getAiMlRelevanceScore(
  document: RetrievedDocument,
  normalizedQuery: string,
): number {
  const content = normalizeText(document.content);

  let score = 0;

  if (content.includes("technologies")) {
    score += 5;
  }

  const technologyKeywords = [
    "gemini",
    "groq",
    "cohere",
    "deepseek",
    "langchain",
    "vercel ai sdk",
    "rag",
    "embeddings",
    "vector search",
    "chromadb",
    "tf idf",
    "logistic regression",
    "scikit learn",
    "lime",
  ];

  for (const keyword of technologyKeywords) {
    if (content.includes(normalizeText(keyword))) {
      score += 1;
    }
  }

  if (
    normalizedQuery.includes("technology") ||
    normalizedQuery.includes("technologies") ||
    normalizedQuery.includes("tools") ||
    normalizedQuery.includes("tech")
  ) {
    if (content.includes("technologies")) {
      score += 10;
    }
  }

  return score;
}

function sortExperienceDocuments(
  documents: RetrievedDocument[],
): RetrievedDocument[] {
  return [...documents].sort((a, b) => {
    const dateA = extractStartDate(a.content);

    const dateB = extractStartDate(b.content);

    if (dateA === null && dateB === null) {
      return 0;
    }

    if (dateA === null) {
      return 1;
    }

    if (dateB === null) {
      return -1;
    }

    return dateB.getTime() - dateA.getTime();
  });
}

function sortEducationDocuments(
  documents: RetrievedDocument[],
): RetrievedDocument[] {
  const educationOrder = ["degree", "higherSecondary", "hslc"];

  return [...documents].sort((a, b) => {
    const orderA = getEducationOrder(a.content, educationOrder);

    const orderB = getEducationOrder(b.content, educationOrder);

    return orderA - orderB;
  });
}

function getEducationOrder(content: string, order: string[]): number {
  const normalized = content.toLowerCase();

  const index = order.findIndex((section) =>
    normalized.includes(`section: ${section}`),
  );

  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function extractStartDate(content: string): Date | null {
  const match = content.match(/startDate:\s*(\d{4}-\d{2}-\d{2})/i);

  if (!match?.[1]) {
    return null;
  }

  const date = new Date(`${match[1]}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date;
}

function deduplicateDocuments(
  documents: RetrievedDocument[],
): RetrievedDocument[] {
  const seen = new Set<string>();

  return documents.filter((document) => {
    const normalized = document.content
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();

    if (seen.has(normalized)) {
      return false;
    }

    seen.add(normalized);

    return true;
  });
}

export function formatRetrievedKnowledge(
  documents: RetrievedDocument[],
): string {
  if (documents.length === 0) {
    return "No relevant portfolio knowledge was found.";
  }

  return documents
    .map(
      (document, index) =>
        `[Knowledge ${index + 1}]
Category: ${document.metadata.category}
Source: ${document.metadata.source}

${document.content}`,
    )
    .join("\n\n");
}
