import { generateQueryEmbedding } from "@/lib/rag/embeddings";
import { queryKnowledge } from "@/lib/rag/vector-store";

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

export async function retrieveKnowledge(
  query: string,
  limit = DEFAULT_LIMIT,
): Promise<RetrievedDocument[]> {
  const queryEmbedding = await generateQueryEmbedding(query);

  const safeLimit = Math.min(Math.max(limit, 1), MAX_LIMIT);

  const results = await queryKnowledge(
    queryEmbedding,
    safeLimit,
  );

  const retrieved = parseQueryResults(results);

  const finalDocuments = deduplicateDocuments(retrieved).slice(
    0,
    safeLimit,
  );

  console.log(
    `[RAG] Retrieved documents: ${finalDocuments.map(
      (document) =>
        `${document.metadata.source}:${document.id}`,
    )}`,
  );

  return finalDocuments;
}

function parseQueryResults(
  results: Awaited<ReturnType<typeof queryKnowledge>>,
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

    const distance =
      typeof rawDistance === "number"
        ? rawDistance
        : Infinity;

    if (distance > MAX_DISTANCE) {
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
          typeof metadata?.source === "string"
            ? metadata.source
            : "unknown",
      },
      distance,
    });
  }

  return retrieved;
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