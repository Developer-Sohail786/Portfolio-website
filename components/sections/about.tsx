export function About() {
  return (
    <section
      id="about"
      className="relative border-b border-white/20 px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-[1470px]">
        {/* Heading */}
        <div className="mb-12 sm:mb-16">
          <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/65 sm:mb-6 sm:gap-4 sm:text-[11px]">
            <span className="h-px w-8 bg-white/80 sm:w-12" />
            About / 06
          </div>

          <h2 className="text-5xl font-semibold tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.5rem]">
            About me
            <span className="text-blue-200">.</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Main text */}
          <div className="min-w-0 lg:col-span-8">
            <p className="max-w-4xl text-2xl font-medium leading-[1.45] tracking-[-0.025em] text-white sm:text-3xl lg:text-4xl">
              I&apos;m Sohail, a full-stack developer focused on building modern
              web applications and AI-powered products.
            </p>

            <div className="mt-8 max-w-3xl space-y-5 font-mono text-sm leading-7 text-white/60 sm:mt-10 sm:space-y-6">
              <p>
                I work across Next.js, React, TypeScript, Node.js, Express.js,
                PostgreSQL, MongoDB, Prisma, and Tailwind CSS, with hands-on
                experience building REST APIs, authentication systems, real-time
                streaming, file uploads, and scalable application architectures.
              </p>

              <p>
                I&apos;m particularly interested in{" "}
                <span className="text-white">backend engineering</span>,{" "}
                <span className="text-white">system design</span>, and{" "}
                <span className="text-white">AI integration</span>. I&apos;ve
                worked with AI SDKs, LangChain.js, RAG, vector search, and
                modern AI models, and I&apos;m continuously exploring how these
                technologies can be turned into useful software.
              </p>

              <p>
                I enjoy taking an idea from{" "}
                <span className="text-white">
                  architecture to a working product
                </span>{" "}
                and care about building software that is clean, maintainable,
                and genuinely useful.
              </p>
            </div>
          </div>

          {/* Technical profile */}
          <aside className="min-w-0 lg:col-span-4">
            <div className="relative border border-white/55 bg-[#11498c]/60 p-6 sm:p-8">
              {/* Corner marks */}
              <span className="absolute -left-px -top-px h-5 w-12 border-l-2 border-t-2 border-white" />
              <span className="absolute -right-px -top-px h-5 w-12 border-r-2 border-t-2 border-white" />
              <span className="absolute -bottom-px -left-px h-5 w-12 border-b-2 border-l-2 border-white" />
              <span className="absolute -bottom-px -right-px h-5 w-12 border-b-2 border-r-2 border-white" />

              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
                Profile / 06
              </p>

              <div className="mt-6 divide-y divide-white/15 sm:mt-8">
                <div className="py-5 first:pt-0">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                    Focus
                  </p>

                  <p className="mt-2 text-lg text-white">
                    Full-Stack Development
                  </p>
                </div>

                <div className="py-5">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                    Specialization
                  </p>

                  <p className="mt-2 text-lg leading-7 text-white">
                    Backend · AI · System Design
                  </p>
                </div>

                <div className="py-5">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                    Building with
                  </p>

                  <p className="mt-2 text-lg leading-7 text-white">
                    Next.js · TypeScript · Node.js
                  </p>
                </div>

                <div className="py-5 last:pb-0">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                    Status
                  </p>

                  <p className="mt-2 flex items-center gap-2 text-lg text-white">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-green-300" />
                    Open to opportunities
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom metadata */}
        <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-white/15 pt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35 sm:mt-16 sm:gap-4 sm:text-[10px]">
          <span>Full-Stack Developer</span>
          <span>AI / Backend / Systems</span>
          <span>06 — 07</span>
        </div>
      </div>
    </section>
  );
}
