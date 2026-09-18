"use client";

import { KeyboardEvent, useMemo, useState } from "react";

import { commands } from "@/lib/cli/commands";
import { responses } from "@/lib/cli/responses";
import { projects } from "@/lib/projects";

export function useCLI() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const suggestion = useMemo(() => {
    const value = input.toLowerCase();

    if (!value) {
      return "";
    }

    if (value.startsWith("project ")) {
      const projectInput = value.slice("project ".length);

      const match = projects.find((project) =>
        project.slug.startsWith(projectInput),
      );

      if (match && match.slug !== projectInput) {
        return `project ${match.slug}`;
      }

      return "";
    }

    const match = commands.find(
      (command) => command.startsWith(value) && command !== value,
    );

    return match ?? "";
  }, [input]);

  function executeCommand(command: string) {
    const normalizedCommand = command.trim().toLowerCase();

    if (!normalizedCommand) {
      return;
    }

    setCommandHistory((previous) => [
      ...previous.filter((item) => item !== command.trim()),
      command.trim(),
    ]);

    setHistoryIndex(-1);

    if (normalizedCommand === "clear") {
      setHistory([]);
      return;
    }

    if (normalizedCommand === "help") {
      setHistory((previous) => [
        ...previous,
        `$ ${command}`,
        "AVAILABLE COMMANDS",
        "────────────────────────────────────────",
        "",
        ...commands.map((item) => `  ${item}`),
        "",
        "Portfolio interface initialized. Choose a command to continue.",
        "",
      ]);

      return;
    }

    if (normalizedCommand === "resume") {
      setHistory((previous) => [
        ...previous,
        `$ ${command}`,
        "RESUME",
        "────────────────────────────────────────",
        "",
        "Opening resume...",
        "",
      ]);

      window.open("/resume/Sohail_Khan.pdf", "_blank");

      return;
    }

    const response = responses[normalizedCommand];

    if (response) {
      setHistory((previous) => [...previous, `$ ${command}`, ...response, ""]);

      return;
    }

    setHistory((previous) => [
      ...previous,
      `$ ${command}`,
      `command not found: ${normalizedCommand}`,
      "",
      'Type "help" to see available commands.',
      "",
    ]);
  }

  function navigateHistory(direction: "up" | "down") {
    if (commandHistory.length === 0) {
      return;
    }

    if (direction === "up") {
      const nextIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(historyIndex - 1, 0);

      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);

      return;
    }

    if (historyIndex === -1) {
      return;
    }

    const nextIndex = historyIndex + 1;

    if (nextIndex >= commandHistory.length) {
      setHistoryIndex(-1);
      setInput("");
      return;
    }

    setHistoryIndex(nextIndex);
    setInput(commandHistory[nextIndex]);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();

      executeCommand(input);
      setInput("");

      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      navigateHistory("up");

      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      navigateHistory("down");

      return;
    }

    if (event.key === "Tab") {
      event.preventDefault();

      if (suggestion) {
        setInput(suggestion);
      }
    }
  }

  return {
    input,
    setInput,
    history,
    suggestion,
    handleKeyDown,
  };
}
