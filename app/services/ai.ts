export async function streamChat(
  message: string,
  signal?: AbortSignal,
) {
  const response = await fetch("/api/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
    signal,
  });

  if (!response.ok) {
    let errorMessage = "Something went wrong. Please try again.";

    try {
      const errorData = await response.json();

      if (typeof errorData?.message === "string") {
        errorMessage = errorData.message;
      }
    } catch {
      // Ignore JSON parsing errors.
    }

    throw new Error(errorMessage);
  }

  if (!response.body) {
    throw new Error("The AI response stream is unavailable.");
  }

  return response.body.getReader();
}