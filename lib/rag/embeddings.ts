import { CohereClientV2 } from "cohere-ai";

const EMBEDDING_MODEL = "embed-v4.0";
const EMBEDDING_DIMENSION = 1024;
const MAX_BATCH_SIZE = 96;

const cohere = new CohereClientV2({
  token: process.env.COHERE_API_KEY,
});

type EmbeddingInputType = "search_document" | "search_query";

function validateApiKey() {
  if (!process.env.COHERE_API_KEY) {
    throw new Error("COHERE_API_KEY is not configured.");
  }
}

async function embedBatch(
  texts: string[],
  inputType: EmbeddingInputType,
): Promise<number[][]> {
  validateApiKey();

  if (texts.length === 0) {
    return [];
  }

  const response = await cohere.embed({
    model: EMBEDDING_MODEL,
    texts,
    inputType,
    outputDimension: EMBEDDING_DIMENSION,
    embeddingTypes: ["float"],
  });

  const embeddings = response.embeddings?.float;

  if (!embeddings) {
    throw new Error("Cohere did not return float embeddings.");
  }

  return embeddings;
}

export async function generateDocumentEmbeddings(
  texts: string[],
): Promise<number[][]> {
  const embeddings: number[][] = [];

  for (let start = 0; start < texts.length; start += MAX_BATCH_SIZE) {
    const batch = texts.slice(start, start + MAX_BATCH_SIZE);

    const batchEmbeddings = await embedBatch(batch, "search_document");

    embeddings.push(...batchEmbeddings);
  }

  return embeddings;
}

export async function generateQueryEmbedding(query: string): Promise<number[]> {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    throw new Error("Query is required for embedding.");
  }

  const embeddings = await embedBatch([trimmedQuery], "search_query");

  const embedding = embeddings[0];

  if (!embedding) {
    throw new Error("Cohere did not return a query embedding.");
  }

  return embedding;
}

export const embeddingConfig = {
  model: EMBEDDING_MODEL,
  dimension: EMBEDDING_DIMENSION,
  maxBatchSize: MAX_BATCH_SIZE,
} as const;
