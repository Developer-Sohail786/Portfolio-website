import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b0d0f] px-6 text-white">
      {/* Blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      {/* Corner marks */}
      <div className="pointer-events-none absolute left-6 top-6 h-10 w-10 border-l border-t border-white/30" />
      <div className="pointer-events-none absolute right-6 top-6 h-10 w-10 border-r border-t border-white/30" />
      <div className="pointer-events-none absolute bottom-6 left-6 h-10 w-10 border-b border-l border-white/30" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-10 w-10 border-b border-r border-white/30" />

      <div className="relative w-full max-w-2xl text-center">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 sm:text-xs">
          Error / 404
        </p>

        <h1 className="font-mono text-[7rem] font-semibold leading-none tracking-[-0.08em] text-white sm:text-[10rem]">
          404
        </h1>

        <div className="mx-auto mt-6 h-px w-24 bg-blue-400/60" />

        <h2 className="mt-7 text-2xl font-semibold tracking-tight sm:text-3xl">
          Page not found.
        </h2>

        <p className="mx-auto mt-4 max-w-md font-mono text-xs leading-6 text-white/45 sm:text-sm">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved somewhere else.
        </p>

        <Link
          href="/"
          className="group mx-auto mt-8 flex w-fit items-center gap-3 border border-white/20 bg-white/[0.03] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:border-white/40 hover:bg-white/[0.06] hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
          Back to portfolio
        </Link>

        <div className="mt-12 font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
          SOHAIL KHAN — FULL-STACK DEVELOPER
        </div>
      </div>
    </main>
  );
}