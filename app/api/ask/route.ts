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

const RELEVANCE_SYSTEM_PROMPT = `
You are a relevance classifier for Sohail's developer portfolio.

Your only job is to decide whether the user's question is about Sohail
or something directly related to Sohail.

A question is RELEVANT if it asks about:
- Sohail's identity or background
- Sohail's education
- Sohail's skills or technologies
- Sohail's projects
- Sohail's work experience or internships
- Sohail's achievements or certifications
- Sohail's career
- Sohail's technical decisions, architecture, or development work
- Contacting or hiring Sohail
- Anything that clearly refers to Sohail using words such as "he", "his", or "him"
  when the context clearly refers to Sohail

A question is NOT RELEVANT if it is:
- General programming knowledge
- A generic coding question
- General technology explanations
- General AI questions
- General cybersecurity questions
- General career advice
- General knowledge
- Casual conversation unrelated to Sohail
- Questions about another person
- Requests to perform unrelated tasks

Return ONLY one word:

RELEVANT

or

IRRELEVANT
`;

async function isSohailRelated(message: string): Promise<boolean> {
  const response = await cohere.chat({
    model: MODEL,
    messages: [
      {
        role: "system",
        content: RELEVANCE_SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  const result =
    response.message.content?.[0]?.type === "text"
      ? response.message.content[0].text.trim().toUpperCase()
      : "";

  return result === "RELEVANT";
}

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

    //First let the LLM decide whether the question
      // is actually related to Sohail.

    const isRelevant = await isSohailRelated(message);

    console.log(`[RAG] Sohail relevance: ${isRelevant}`);

    if (!isRelevant) {
      const encoder = new TextEncoder();

      const stream = new ReadableStream({
        start(controller) {
          controller.enqueue(
            encoder.encode(
              "I can only answer questions related to Sohail, his work, projects, experience, and technical background.",
            ),
          );

          controller.close();
        },
      });

      return new Response(stream, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      });
    }

    
    //   Only relevant questions reach RAG.
     
    const retrievedDocuments = await retrieveKnowledge(message, 8);

    console.log(
      `[RAG] Retrieved ${retrievedDocuments.length} documents.`,
    );

    const retrievedContext =
      formatRetrievedKnowledge(retrievedDocuments);

    const systemPrompt =
      getPortfolioAssistantPrompt(retrievedContext);

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
              const text =
                event.delta?.message?.content?.text;

              if (text) {
                controller.enqueue(
                  encoder.encode(text),
                );
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
        message:
          "Something went wrong while processing your question.",
      },
      {
        status: 500,
      },
    );
  }
}