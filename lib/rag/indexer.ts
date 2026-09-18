import { getKnowledgeDocuments } from "@/lib/rag/documents";
import { generateDocumentEmbeddings } from "@/lib/rag/embeddings";
import {
  resetKnowledgeCollection,
  upsertKnowledgeDocuments,
} from "@/lib/rag/vector-store";

export async function indexPortfolioKnowledge() {
  console.log("Starting portfolio knowledge indexing...");

  console.log("Resetting existing ChromaDB collection...");

  await resetKnowledgeCollection();

  const documents = getKnowledgeDocuments();

  console.log(`Generated ${documents.length} knowledge documents.`);

  if (documents.length === 0) {
    throw new Error("No knowledge documents were found.");
  }

  const texts = documents.map((document) => document.content);

  console.log("Generating embeddings...");

  const embeddings = await generateDocumentEmbeddings(texts);

  console.log(`Generated ${embeddings.length} embeddings.`);

  console.log("Storing documents in ChromaDB...");

  await upsertKnowledgeDocuments(documents, embeddings);

  console.log(`Successfully indexed ${documents.length} documents.`);

  return {
    documentCount: documents.length,

    embeddingCount: embeddings.length,
  };
}
