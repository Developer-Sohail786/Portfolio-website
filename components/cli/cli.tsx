"use client";

import { useCLI } from "@/app/hooks/use-cli";
import { ChevronRight, Terminal, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CLI() {
  const [isOpen, setIsOpen] = useState(false);

 const {
  input,
  setInput,
  history,
  suggestion,
  handleKeyDown,
} = useCLI();

  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const output = outputRef.current;

    if (output) {
      output.scrollTo({
        top: output.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history]);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-[var(--font-ibm-plex-mono)]">
      {/* Closed button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open terminal"
          className="group flex h-12 items-center gap-3 border border-white/30 bg-[#17191c] px-5 text-white shadow-2xl transition-all hover:border-white/60 hover:bg-[#202328] cursor-pointer"
        >
          <Terminal
            size={18}
            className="text-white/80 transition-transform group-hover:scale-110"
          />

          <span className="text-[11px] uppercase tracking-[0.16em] ">
            CLI
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
        </button>
      )}

      {/* Terminal */}
      {isOpen && (
        <div className="relative w-[min(92vw,700px)] overflow-hidden border border-white/25 bg-[#111315] shadow-2xl">
          {/* Corner marks */}
          <span className="pointer-events-none absolute -left-px -top-px h-6 w-12 border-l border-t border-white/60" />
          <span className="pointer-events-none absolute -right-px -top-px h-6 w-12 border-r border-t border-white/60" />
          <span className="pointer-events-none absolute -bottom-px -left-px h-6 w-12 border-b border-l border-white/60" />
          <span className="pointer-events-none absolute -bottom-px -right-px h-6 w-12 border-b border-r border-white/60" />

          {/* Header */}
          <div className="flex h-14 items-center justify-between border-b border-white/15 bg-[#181a1d] px-5">
            <div className="flex items-center gap-3">
              <Terminal
                size={17}
                className="text-white/70"
              />

              <span className="text-[12px] uppercase tracking-[0.18em] text-white/85">
                Sohail CLI
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close terminal"
              className="text-white/40 transition-colors hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Output */}
          <div
            ref={outputRef}
            className="scroll-smooth h-[430px] overflow-y-auto bg-[#111315] px-6 py-5 text-[13px] leading-7"
          >
            {history.length === 0 ? (
              <div className="space-y-2">
                <p className="text-white">
                  Welcome to Sohail CLI.
                </p>

                <p className="text-white/45">
                  Portfolio terminal v1.0
                </p>

                <p className="pt-3 text-white/25">
                  ─────────────────────────────────────────────
                </p>

                <p className="text-white/55">
                  Explore projects, skills, experience, and more.
                </p>

                <p className="text-white/55">
                  Type{" "}
                  <span className="text-white">
                    help
                  </span>{" "}
                  to see available commands.
                </p>

                <p className="pt-3 text-white/25">
                  ─────────────────────────────────────────────
                </p>
              </div>
            ) : (
              history.map((line, index) => (
                <div
                  key={`${line}-${index}`}
                  className={
                    line.startsWith("$")
                      ? "text-white"
                      : line.startsWith("─")
                        ? "text-white/20"
                        : line === line.toUpperCase() &&
                            line.length > 3
                          ? "text-white/80"
                          : "text-white/60"
                  }
                >
                  {line || "\u00A0"}
                </div>
              ))
            )}
          </div>

          {/* Input */}
       
<div className="flex min-h-14 items-center border-t border-white/15 bg-[#181a1d] px-5">
  <ChevronRight
    size={17}
    className="mr-2 shrink-0 text-white/60"
  />

  <div className="relative min-w-0 flex-1">
    {suggestion && (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center whitespace-pre text-[13px] text-white/20"
      >
        {suggestion}
      </div>
    )}

    <input
      value={input}
      onChange={(event) =>
        setInput(event.target.value)
      }
      onKeyDown={handleKeyDown}
      placeholder="type a command..."
      aria-label="CLI command"
      className="relative z-10 min-w-0 w-full bg-transparent py-3 text-[13px] text-white outline-none placeholder:text-white/25"
      autoFocus
    />
  </div>
</div>
        </div>
      )}
    </div>
  );
}