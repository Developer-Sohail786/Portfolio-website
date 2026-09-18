import { ArrowUpRight } from "lucide-react";

import { experiences } from "@/lib/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-b border-white/15 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1470px]">
        {/* Section heading */}
        <div className="mb-12 sm:mb-16">
          <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            <span className="h-px w-8 bg-white/60" />
            Experience / 03
          </div>

          <h2 className="text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Experience
            <span className="text-blue-200">.</span>
          </h2>
        </div>

        {/* Experience list */}
        <div className="border-t border-white/20">
          {experiences.map((experience) => (
            <article
              key={experience.number}
              className="grid gap-6 border-b border-white/15 py-9 sm:gap-8 sm:py-10 md:grid-cols-12 md:gap-6"
            >
              {/* Number */}
              <div className="font-mono text-[10px] tracking-[0.2em] text-white/40 md:col-span-1">
                {experience.number}
              </div>

              {/* Role + Company */}
              <div className="min-w-0 md:col-span-4">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                  {experience.role}
                </h3>

                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-2 inline-flex max-w-full items-center gap-1 font-mono text-xs uppercase tracking-wider text-blue-200 transition-colors hover:text-white"
                >
                  <span className="truncate">{experience.company}</span>

                  <ArrowUpRight
                    size={12}
                    className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>

              {/* Description */}
              <div className="min-w-0 md:col-span-5">
                <p className="break-words font-mono text-sm leading-7 text-white/60">
                  {experience.description}
                </p>
              </div>

              {/* Period */}
              <div className="font-mono text-[10px] uppercase tracking-wider text-white/40 md:col-span-2 md:text-right">
                {experience.period}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
