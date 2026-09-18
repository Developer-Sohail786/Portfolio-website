import { skillGroups } from "@/lib/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative border-b border-white/20 px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-[1470px]">
        {/* Heading */}
        <div className="mb-12 sm:mb-16">
          <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/65 sm:mb-6 sm:gap-4 sm:text-[11px]">
            <span className="h-px w-8 bg-white/80 sm:w-12" />
            Skills / 05
          </div>

          <h2 className="text-5xl font-semibold tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.5rem]">
            Technical Stack
            <span className="text-blue-200">.</span>
          </h2>
        </div>

        {/* Documentation panel */}
        <div className="relative border border-white/65 bg-[#11498c]/70">
          {/* Outer rails */}
          <div className="pointer-events-none absolute -left-2 top-0 h-full border-l border-white/30 sm:-left-3" />
          <div className="pointer-events-none absolute -right-2 top-0 h-full border-r border-white/30 sm:-right-3" />

          {/* Corner marks */}
          <span className="absolute -left-px -top-px h-6 w-12 border-l-2 border-t-2 border-white sm:h-7 sm:w-16" />
          <span className="absolute -right-px -top-px h-6 w-12 border-r-2 border-t-2 border-white sm:h-7 sm:w-16" />
          <span className="absolute -bottom-px -left-px h-6 w-12 border-b-2 border-l-2 border-white sm:h-7 sm:w-16" />
          <span className="absolute -bottom-px -right-px h-6 w-12 border-b-2 border-r-2 border-white sm:h-7 sm:w-16" />

          <div className="px-5 py-7 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            {skillGroups.map((group) => (
              <div
                key={group.number}
                className="py-8 first:pt-0 last:pb-0 sm:py-12"
              >
                {/* Category */}
                <div className="mb-5 flex flex-wrap items-center gap-3 sm:gap-4">
                  <span className="font-mono text-[11px] font-medium tracking-[0.16em] text-white/60 sm:text-sm">
                    SEC. {group.number}
                  </span>

                  <span className="font-mono text-[11px] text-white/40 sm:text-sm">
                      {"//"}
                  </span>

                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90 sm:text-sm">
                    {group.title}
                  </span>
                </div>

                {/* Divider */}
                <div className="mb-6 h-px w-full bg-white/45 sm:mb-7" />

                {/* Skills */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-white/65 bg-[#155092] px-3 py-2.5 font-mono text-[11px] font-medium tracking-[0.04em] text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-[#174ea6] sm:px-5 sm:py-3.5 sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer metadata */}
        <div className="mt-5 flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45 sm:mt-6 sm:text-[11px]">
          <span>Technical Documentation</span>
          <span>07 Sections</span>
        </div>
      </div>
    </section>
  );
}
