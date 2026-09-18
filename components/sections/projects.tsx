import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section
      id="work"
      className="relative border-b border-white/15 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1470px]">
        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
              <span className="h-px w-8 bg-white/60" />
              Selected Work / 04
            </div>

            <h2 className="text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Projects
              <span className="text-blue-200">.</span>
            </h2>
          </div>

          <p className="max-w-sm font-mono text-xs leading-6 text-white/55">
            A selection of things I&apos;ve built across full-stack development,
            AI, and application security.
          </p>
        </div>

        {/* Projects */}
        <div className="border-t border-white/20">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative grid gap-7 border-b border-white/15 py-9 transition-colors hover:bg-white/[0.03] sm:gap-8 sm:py-10 md:grid-cols-12 md:gap-6"
            >
              {/* Number */}
              <div className="font-mono text-[10px] tracking-[0.2em] text-white/40 md:col-span-1">
                {project.number}
              </div>

              {/* Project info */}
              <div className="min-w-0 md:col-span-6">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl lg:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-2xl break-words font-mono text-sm leading-7 text-white/60 sm:mt-5">
                  {project.description}
                </p>

                {/* Project links */}
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-4 sm:mt-7 sm:gap-6">
                  {/* Live Demo */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 border border-white/80 px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#174ea6]"
                  >
                    Live Demo
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>

                  {/* Project detail */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/link inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-white/60 transition-colors hover:text-white"
                  >
                    View Project
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </Link>

                  {/* GitHub */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-white/60 transition-colors hover:text-white"
                  >
                    <FaGithub size={15} />
                    GitHub
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap content-start gap-2 md:col-span-5 md:justify-end">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="border border-white/20 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-white/55"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Corner mark */}
              <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-white/60 opacity-0 transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
