import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

async function main() {
  try {
    console.log("🚀 Portfolio RAG indexing started...\n");

    const { getKnowledgeDocuments } = await import("../lib/rag/documents");

    const { indexPortfolioKnowledge } = await import("../lib/rag/indexer");

    const documents = getKnowledgeDocuments();

    const categoryCounts = documents.reduce(
      (counts, document) => {
        const category = document.metadata.category;

        counts[category] = (counts[category] || 0) + 1;

        return counts;
      },
      {} as Record<string, number>,
    );

    console.log("📚 Knowledge document categories:");

    console.log(JSON.stringify(categoryCounts, null, 2));

    console.log(`\n📄 Total documents: ${documents.length}`);

    console.log("\n🔄 Starting indexing...\n");

    const result = await indexPortfolioKnowledge();

    console.log("\n✅ Portfolio RAG indexing completed.");

    console.log(`Documents: ${result.documentCount}`);

    console.log(`Embeddings: ${result.embeddingCount}`);
  } catch (error) {
    console.error("\n❌ Portfolio RAG indexing failed.");

    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }

    process.exitCode = 1;
  }
}

void main();
