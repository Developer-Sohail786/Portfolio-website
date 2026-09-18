"use client";

import { useChat } from "@/app/hooks/use-chat";
import {
  Bot,
  ChevronRight,
  Loader2,
  Send,
  Square,
  Trash2,
  User,
} from "lucide-react";
import { ChatMarkdown } from "@/components/ui/chat-markdown";

const suggestions = [
  "Who is Sohail?",
  "Tell me about his projects",
  "What technologies does he use?",
];

export default function AskSohail() {
  const {
    message,
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
  } = useChat();

  return (
    <section
      id="ask-sohail"
      className="relative overflow-hidden bg-[#174ea6] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12"
    >
      {/* Blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      {/* Corner marks */}
      <div className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l border-t border-white/30 sm:left-6 sm:top-6" />
      <div className="pointer-events-none absolute right-5 top-5 h-8 w-8 border-r border-t border-white/30 sm:right-6 sm:top-6" />
      <div className="pointer-events-none absolute bottom-5 left-5 h-8 w-8 border-b border-l border-white/30 sm:bottom-6 sm:left-6" />
      <div className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 border-b border-r border-white/30 sm:bottom-6 sm:right-6" />

      <div className="relative mx-auto max-w-5xl">
        {/* Section heading */}
        <div className="mb-8 sm:mb-10">
          <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 sm:text-xs">
            <span className="h-px w-8 bg-white/40" />
            AI Interface
          </div>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Ask Sohail.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
            Have a question about my work, projects, experience, or technical
            skills? Ask the portfolio assistant.
          </p>
        </div>

        {/* AI interface */}
        <div className="overflow-hidden rounded-md border border-white/10 bg-[#111315] shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#181a1d] px-4 py-3">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/10 bg-[#111315]">
                <Bot className="h-4 w-4 text-white/70" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">
                  Sohail&apos;s AI Assistant
                </p>

                <div className="mt-0.5 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span className="text-[11px] text-white/40">Online</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={clearConversation}
              disabled={isLoading}
              aria-label="Clear conversation"
              className="shrink-0 rounded-md p-2 text-white/40 transition hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <Trash2 className="h-4 w-4 cursor-pointer" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="h-[360px] overflow-y-auto px-3 py-5 sm:px-6"
            aria-live="polite"
            aria-atomic="false"
          >
            <div className="space-y-5">
              {messages.map((chatMessage) => {
                if (
                  chatMessage.role === "assistant" &&
                  chatMessage.content === "" &&
                  isLoading
                ) {
                  return null;
                }

                const isUser = chatMessage.role === "user";

                return (
                  <div
                    key={chatMessage.id}
                    className={`flex gap-2.5 sm:gap-3 ${
                      isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    {!isUser && (
                      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/10 bg-[#181a1d]">
                        <Bot className="h-3.5 w-3.5 text-white/60" />
                      </div>
                    )}

                    <div
                      className={`max-w-[92%] rounded-md px-3 py-3 text-sm sm:max-w-[85%] sm:px-4 ${
                        isUser
                          ? "bg-[#174ea6] text-white"
                          : "border border-white/10 bg-[#181a1d] text-white/75"
                      }`}
                    >
                      {isUser ? (
                        <p className="whitespace-pre-wrap break-words leading-6">
                          {chatMessage.content}
                        </p>
                      ) : (
                        <div className="break-words">
                          <ChatMarkdown content={chatMessage.content} />

                          {isLoading &&
                            chatMessage.id ===
                              messages[messages.length - 1]?.id && (
                              <span className="ml-1 inline-block animate-pulse">
                                ▋
                              </span>
                            )}
                        </div>
                      )}
                    </div>

                    {isUser && (
                      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/10 bg-[#181a1d]">
                        <User className="h-3.5 w-3.5 text-white/60" />
                      </div>
                    )}
                  </div>
                );
              })}

              {isLoading && messages[messages.length - 1]?.content === "" && (
                <div className="flex gap-2.5 sm:gap-3">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/10 bg-[#181a1d]">
                    <Bot className="h-3.5 w-3.5 text-white/60" />
                  </div>

                  <div className="flex items-center gap-2 rounded-md border border-white/10 bg-[#181a1d] px-4 py-3">
                    <Loader2 className="h-4 w-4 animate-spin text-white/40" />

                    <span className="text-sm text-white/40">Thinking...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Suggestions */}
          <div className="border-t border-white/10 px-3 py-3 sm:px-6">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => handleSuggestion(suggestion)}
                  disabled={isLoading}
                  className="group flex shrink-0 items-center gap-1.5 rounded-md border border-white/10 bg-[#181a1d] px-3 py-2 text-xs text-white/50 transition hover:border-white/20 hover:bg-white/5 hover:text-white/80 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {suggestion}

                  <ChevronRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-white/10 bg-[#151719] p-3 sm:p-5">
            <div className="flex items-end gap-2 rounded-md border border-white/10 bg-[#0d0f10] p-2 focus-within:border-white/20 sm:gap-3">
              <textarea
                ref={textareaRef}
                aria-label="Ask Sohail a question"
                value={message}
                onChange={handleMessageChange}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                rows={1}
                disabled={isLoading}
                className="max-h-32 min-h-10 min-w-0 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-white/25 disabled:cursor-not-allowed"
              />

              <button
                type="button"
                onClick={() => {
                  if (isLoading) {
                    stopStreaming();
                    return;
                  }

                  void handleSubmit();
                }}
                disabled={!message.trim() && !isLoading}
                aria-label={isLoading ? "Stop response" : "Send message"}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#174ea6] text-white transition hover:bg-[#205db8] disabled:cursor-not-allowed disabled:opacity-30"
              >
                {isLoading ? (
                  <Square className="h-3.5 w-3.5 fill-current" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            </div>

            <p className="mt-2 px-1 text-[10px] leading-5 text-white/25">
              Press Enter to send · Shift + Enter for a new line
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
