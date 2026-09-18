import { CohereClientV2 } from "cohere-ai";

import {
  formatRetrievedKnowledge,
  retrieveKnowledge,
} from "@/lib/rag/retriever";
import { getPortfolioAssistantPrompt } from "@/lib/prompts/portfolio-assistent";

const cohere = new CohereClientV2({
  token: process.env.COHERE_API_KEY,
});

const MODEL = process.env.COHERE_MODEL || "command-a-03-2025";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const message =
      typeof body?.message === "string" ? body.message.trim() : "";

    if (!message) {
      return Response.json(
        {
          message: "Message is required.",
        },
        {
          status: 400,
        },
      );
    }

    if (!process.env.COHERE_API_KEY) {
      return Response.json(
        {
          message: "AI service is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    const retrievedDocuments = await retrieveKnowledge(message, 8);

    console.log(`[RAG] Retrieved ${retrievedDocuments.length} documents.`);

    const retrievedContext = formatRetrievedKnowledge(retrievedDocuments);

    const systemPrompt = getPortfolioAssistantPrompt(retrievedContext);

    const response = await cohere.chatStream({
      model: MODEL,
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of response) {
            if (event.type === "content-delta") {
              const text = event.delta?.message?.content?.text;

              if (text) {
                controller.enqueue(encoder.encode(text));
              }
            }
          }

          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("[RAG] Ask API error:", error);

    return Response.json(
      {
        message: "Something went wrong while processing your question.",
      },
      {
        status: 500,
      },
    );
  }
}
