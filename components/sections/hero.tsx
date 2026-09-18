import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent pt-[68px] text-white">
      {/* Main content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-68px)] max-w-[1470px] flex-col px-6 lg:px-10">
        {/* Top technical label */}
        <div className="pt-20 lg:pt-24">
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/65">
            <span className="h-px w-12 bg-white/70" />
            <span>Portfolio / 2026</span>
          </div>
        </div>

        {/* Hero heading */}
        <div className="mt-14 lg:mt-24">
          <p className="mb-7 font-mono text-[12px] uppercase tracking-[0.2em] text-blue-200">
            Full-Stack Developer <span className="mx-2">·</span> AI
          </p>

          <h1 className="max-w-[1000px] text-[clamp(3.5rem,14vw,9rem)] font-bold leading-[0.84] tracking-[-0.07em]">
            <span className="block text-white">Building</span>

            <span className="block">
              <span className="text-blue-200">useful</span>{" "}
              <span className="text-white">things.</span>
            </span>
          </h1>
        </div>

        {/* Divider */}
        <div className="relative mt-16 h-px w-full bg-white/65 lg:mt-20">
          <span className="absolute -right-1 -top-[5px] h-3 w-3">
            <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-white" />
            <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-white" />
          </span>
        </div>

        {/* Bottom information */}
        <div className="mt-10 grid gap-10 pb-8 lg:grid-cols-12 lg:items-center">
          {/* Intro */}
          <div className="lg:col-span-5">
            <p className="max-w-[560px] font-mono text-[15px] leading-7 text-white/90 lg:text-[16px]">
              I&apos;m Sohail, a developer focused on building full-stack
              applications, AI-powered products, and thoughtful digital
              experiences.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-6 lg:col-span-7 lg:justify-end lg:gap-10">
            <a
              href="#work"
              className="group inline-flex items-center gap-4 border border-white/90 px-7 py-4 font-mono text-[12px] uppercase tracking-[0.12em] text-white transition-all hover:bg-white hover:text-[#174ea6]"
            >
              View Selected Work
              <ArrowDownRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="group hidden items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-white/65 transition-colors hover:text-white sm:inline-flex"
            >
              Let&apos;s Connect
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Technical footer */}
        <div className="mt-auto flex items-end justify-between border-t border-white/10 pb-7 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
          <span>26° 08&apos; N</span>

          <span className="hidden sm:block">Guwahati / India</span>

          <span>01 — 01</span>
        </div>

        {/* Bottom corner marks */}
        <div className="pointer-events-none absolute bottom-0 left-6 h-12 w-12 lg:left-10">
          <span className="absolute bottom-0 left-0 h-10 w-px bg-white/70" />
          <span className="absolute bottom-0 left-0 h-px w-10 bg-white/70" />
          <span className="absolute bottom-0 left-0 h-3 w-3 border border-white/90" />
        </div>

        <div className="pointer-events-none absolute bottom-0 right-6 h-12 w-12 lg:right-10">
          <span className="absolute bottom-0 right-0 h-10 w-px bg-white/70" />
          <span className="absolute bottom-0 right-0 h-px w-10 bg-white/70" />
          <span className="absolute bottom-0 right-0 h-3 w-3 border border-white/90" />
        </div>
      </div>
    </section>
  );
}
