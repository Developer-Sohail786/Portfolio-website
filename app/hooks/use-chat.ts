"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import { streamChat } from "../services/ai";

export type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

const initialMessage: ChatMessage = {
  id: 0,
  role: "assistant",
  content:
    "Hi, I'm Sohail's portfolio assistant. Ask me about his projects, skills, experience, or background.",
};

// Controls the visual streaming speed.
const STREAM_INTERVAL = 30;
const CHARS_PER_TICK = 3;

export function useChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [isLoading, setIsLoading] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const streamBufferRef = useRef("");
  const displayedStreamRef = useRef("");
  const streamTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const assistantMessageIdRef = useRef<number | null>(null);

  // Allows the active network request to be cancelled.
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [messages]);

  useEffect(() => {
    return () => {
      if (streamTimerRef.current) {
        clearInterval(streamTimerRef.current);
      }

      abortControllerRef.current?.abort();
    };
  }, []);

  const resizeTextarea = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 128)}px`;
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
    resizeTextarea(event.target);
  };

  const handleSuggestion = (suggestion: string) => {
    setMessage(suggestion);

    requestAnimationFrame(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        resizeTextarea(textareaRef.current);
      }
    });
  };

  const startSmoothRenderer = () => {
    if (streamTimerRef.current) {
      clearInterval(streamTimerRef.current);
    }

    streamTimerRef.current = setInterval(() => {
      const assistantMessageId = assistantMessageIdRef.current;

      if (!assistantMessageId) {
        return;
      }

      const buffer = streamBufferRef.current;
      const displayed = displayedStreamRef.current;

      if (displayed.length >= buffer.length) {
        return;
      }

      const nextText = buffer.slice(
        displayed.length,
        displayed.length + CHARS_PER_TICK,
      );

      displayedStreamRef.current += nextText;

      setMessages((current) =>
        current.map((chatMessage) =>
          chatMessage.id === assistantMessageId
            ? {
                ...chatMessage,
                content: displayedStreamRef.current,
              }
            : chatMessage,
        ),
      );
    }, STREAM_INTERVAL);
  };

  const finishSmoothRenderer = () => {
    if (streamTimerRef.current) {
      clearInterval(streamTimerRef.current);
      streamTimerRef.current = null;
    }

    const assistantMessageId = assistantMessageIdRef.current;

    if (!assistantMessageId) {
      return;
    }

    if (displayedStreamRef.current.length < streamBufferRef.current.length) {
      displayedStreamRef.current = streamBufferRef.current;

      setMessages((current) =>
        current.map((chatMessage) =>
          chatMessage.id === assistantMessageId
            ? {
                ...chatMessage,
                content: displayedStreamRef.current,
              }
            : chatMessage,
        ),
      );
    }
  };

  /**
   * Stops the currently running AI response.
   *
   * - Cancels the network request.
   * - Stops the visual renderer.
   * - Keeps any response text already displayed.
   */
  const stopStreaming = () => {
    if (!isLoading) {
      return;
    }

    const assistantMessageId = assistantMessageIdRef.current;

    // Immediately stop the visual renderer.
    if (streamTimerRef.current) {
      clearInterval(streamTimerRef.current);
      streamTimerRef.current = null;
    }

    // Preserve everything that has already been received.
    displayedStreamRef.current = streamBufferRef.current;

    if (assistantMessageId) {
      if (streamBufferRef.current) {
        setMessages((current) =>
          current.map((chatMessage) =>
            chatMessage.id === assistantMessageId
              ? {
                  ...chatMessage,
                  content: streamBufferRef.current,
                }
              : chatMessage,
          ),
        );
      } else {
        // If absolutely no response arrived,
        // remove the empty assistant message.
        setMessages((current) =>
          current.filter(
            (chatMessage) => chatMessage.id !== assistantMessageId,
          ),
        );
      }
    }

    // Actually cancel the fetch request.
    abortControllerRef.current?.abort();
    abortControllerRef.current = null;

    setIsLoading(false);
  };

  const handleSubmit = async () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || isLoading) {
      return;
    }

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      content: trimmedMessage,
    };

    const assistantMessageId = Date.now() + 1;

    const assistantMessage: ChatMessage = {
      id: assistantMessageId,
      role: "assistant",
      content: "",
    };

    assistantMessageIdRef.current = assistantMessageId;

    streamBufferRef.current = "";
    displayedStreamRef.current = "";

    const abortController = new AbortController();

    abortControllerRef.current = abortController;

    setMessages((current) => [...current, userMessage, assistantMessage]);

    setMessage("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    setIsLoading(true);

    startSmoothRenderer();

    try {
      const reader = await streamChat(trimmedMessage, abortController.signal);

      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();

        if (done) {
          break;
        }

        const chunk = decoder.decode(value, {
          stream: true,
        });

        streamBufferRef.current += chunk;
      }

      const finalChunk = decoder.decode();

      if (finalChunk) {
        streamBufferRef.current += finalChunk;
      }

      /*
       * Wait for the smooth renderer to catch up with
       * everything received from the server.
       */
      while (
        displayedStreamRef.current.length < streamBufferRef.current.length
      ) {
        await new Promise((resolve) => setTimeout(resolve, STREAM_INTERVAL));
      }

      finishSmoothRenderer();
    } catch (error) {
      /*
       * AbortController cancellation is intentional.
       * Don't show an error message when the user clicks Stop.
       */
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      console.error("Ask Sohail error:", error);

      if (streamTimerRef.current) {
        clearInterval(streamTimerRef.current);
        streamTimerRef.current = null;
      }

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";

      setMessages((current) =>
        current.map((chatMessage) =>
          chatMessage.id === assistantMessageId
            ? {
                ...chatMessage,
                content: errorMessage,
              }
            : chatMessage,
        ),
      );
    } finally {
      if (abortControllerRef.current === abortController) {
        abortControllerRef.current = null;
      }

      setIsLoading(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void handleSubmit();
    }
  };

  const clearConversation = () => {
    if (isLoading) {
      return;
    }

    if (streamTimerRef.current) {
      clearInterval(streamTimerRef.current);
      streamTimerRef.current = null;
    }

    streamBufferRef.current = "";
    displayedStreamRef.current = "";
    assistantMessageIdRef.current = null;

    setMessages([initialMessage]);
    setMessage("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  return {
    message,
    setMessage,
    messages,
    isLoading,
    textareaRef,
    messagesEndRef,
    handleMessageChange,
    handleSuggestion,
    handleSubmit,
    handleKeyDown,
    clearConversation,
    stopStreaming,
  };
}
