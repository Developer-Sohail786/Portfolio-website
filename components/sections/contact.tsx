"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { contactSchema, type ContactFormData } from "@/lib/validations/contact";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Failed to send message.");
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-white/20 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1470px]">
        {/* Section label */}
        <div className="mb-12 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/65 sm:mb-14 sm:gap-4 sm:text-[11px]">
          <span className="h-px w-8 bg-white/80 sm:w-12" />
          Contact / 07
        </div>

        {/* Main layout */}
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left content */}
          <div className="min-w-0 lg:col-span-5">
            <h2 className="max-w-[600px] text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-7xl lg:text-[6rem]">
              Let&apos;s build
              <br />
              something
              <br />
              <span className="text-blue-200">together.</span>
            </h2>

            <p className="mt-7 max-w-md font-mono text-sm leading-7 text-white/60 sm:mt-8 sm:text-base">
              Have a project, opportunity, or idea worth discussing? Send me a
              message and I&apos;ll get back to you.
            </p>

            <div className="mt-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35 sm:mt-8">
              <span className="h-2 w-2 shrink-0 rounded-full bg-green-300" />
              Currently open to opportunities
            </div>
          </div>

          {/* Form card */}
          <div className="min-w-0 lg:col-span-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="relative border border-white/55 bg-[#11498c]/70 p-5 sm:p-8 lg:p-10"
            >
              {/* Corner marks */}
              <span className="absolute -left-px -top-px h-6 w-14 border-l-2 border-t-2 border-white" />
              <span className="absolute -right-px -top-px h-6 w-14 border-r-2 border-t-2 border-white" />
              <span className="absolute -bottom-px -left-px h-6 w-14 border-b-2 border-l-2 border-white" />
              <span className="absolute -bottom-px -right-px h-6 w-14 border-b-2 border-r-2 border-white" />

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div className="min-w-0">
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-white/70"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    {...register("name")}
                    className={`h-14 w-full border bg-[#dbeafe] px-4 font-mono text-sm text-[#0f172a] outline-none placeholder:text-[#475569] transition-colors focus:bg-white ${
                      errors.name
                        ? "border-red-400 focus:border-red-500"
                        : "border-[#93c5fd] focus:border-[#174ea6]"
                    }`}
                  />

                  {errors.name && (
                    <p className="mt-2 font-mono text-[10px] text-red-200">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="min-w-0">
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-white/70"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    className={`h-14 w-full border bg-[#dbeafe] px-4 font-mono text-sm text-[#0f172a] outline-none placeholder:text-[#475569] transition-colors focus:bg-white ${
                      errors.email
                        ? "border-red-400 focus:border-red-500"
                        : "border-[#93c5fd] focus:border-[#174ea6]"
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-2 font-mono text-[10px] text-red-200">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-white/70"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell me what you're working on..."
                    {...register("message")}
                    className={`w-full resize-none border bg-[#dbeafe] px-4 py-4 font-mono text-sm leading-6 text-[#0f172a] outline-none placeholder:text-[#475569] transition-colors focus:bg-white ${
                      errors.message
                        ? "border-red-400 focus:border-red-500"
                        : "border-[#93c5fd] focus:border-[#174ea6]"
                    }`}
                  />

                  {errors.message && (
                    <p className="mt-2 font-mono text-[10px] text-red-200">
                      {errors.message.message}
                    </p>
                  )}

                  <p className="mt-2 text-right font-mono text-[9px] text-white/30">
                    Max 2000 characters
                  </p>
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group mt-5 flex h-14 w-full cursor-pointer items-center justify-center gap-3 bg-black font-mono text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#0b0b0b] disabled:cursor-not-allowed disabled:opacity-60 sm:w-1/2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}

                  <Send
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>

              {/* Status */}
              <div className="mt-4 min-h-5 text-center">
                {status === "success" && (
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-green-300">
                    Message sent successfully.
                  </p>
                )}

                {status === "error" && (
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-red-300">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35 sm:mt-16 sm:text-[10px]">
          <span>Open Communication</span>
          <span>07 — 07</span>
        </div>
      </div>
    </section>
  );
}
