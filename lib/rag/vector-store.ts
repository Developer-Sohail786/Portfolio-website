import { ChromaClient } from "chromadb";

import type { KnowledgeDocument } from "@/lib/rag/documents";

const COLLECTION_NAME = "sohail_portfolio_knowledge";

const CHROMA_HOST = process.env.CHROMA_HOST || "localhost";

const CHROMA_PORT = Number(process.env.CHROMA_PORT || 8000);

const CHROMA_SSL = process.env.CHROMA_SSL === "true";

const chroma = new ChromaClient({
  host: CHROMA_HOST,
  port: CHROMA_PORT,
  ssl: CHROMA_SSL,
});

async function getCollection() {
  return chroma.getOrCreateCollection({
    name: COLLECTION_NAME,
    embeddingFunction: null,
    configuration: {
      hnsw: {
        space: "cosine",
      },
    },
  });
}

export async function upsertKnowledgeDocuments(
  documents: KnowledgeDocument[],
  embeddings: number[][],
) {
  if (documents.length === 0) {
    return;
  }

  if (documents.length !== embeddings.length) {
    throw new Error("Document and embedding counts do not match.");
  }

  const collection = await getCollection();

  await collection.upsert({
    ids: documents.map((document) => document.id),
    documents: documents.map((document) => document.content),
    embeddings,
    metadatas: documents.map((document) => document.metadata),
  });
}

export async function queryKnowledge(
  queryEmbedding: number[],
  limit = 5,
  category?: string,
) {
  const collection = await getCollection();

  return collection.query({
    queryEmbeddings: [queryEmbedding],
    nResults: limit,
    ...(category
      ? {
          where: {
            category,
          },
        }
      : {}),
    include: ["documents", "metadatas", "distances"],
  });
}

export async function resetKnowledgeCollection() {
  try {
    await chroma.deleteCollection({
      name: COLLECTION_NAME,
    });
  } catch {
    // Ignore if the collection does not exist.
  }
}

export const vectorStoreConfig = {
  collectionName: COLLECTION_NAME,
  chromaHost: CHROMA_HOST,
  chromaPort: CHROMA_PORT,
  chromaSsl: CHROMA_SSL,
} as const;
