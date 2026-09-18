import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa6";

import { projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} — ${project.title}`,
    description: project.description,
    openGraph: {
      title: `${project.name} — ${project.title}`,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${project.name} — ${project.title}`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#174ea6] text-white">
      {/* Blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "56px 56px",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-[1470px] px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-10 lg:pt-36">
        {/* Back */}
        <Link
          href="/#work"
          className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-white sm:text-[11px]"
        >
          <ArrowLeft
            size={15}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to Work
        </Link>

        {/* Header */}
        <div className="mt-12 grid gap-8 sm:mt-16 sm:gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="min-w-0 lg:col-span-8">
            <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55 sm:mb-6 sm:gap-4 sm:text-[11px]">
              <span>{project.number}</span>
              <span className="h-px w-8 bg-white/40 sm:w-10" />
              <span>Project</span>
            </div>

            <h1 className="max-w-[1000px] break-words text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[7rem]">
              {project.name}
              <span className="text-blue-200">.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg font-medium leading-[1.45] tracking-[-0.02em] text-white/85 sm:mt-7 sm:text-2xl">
              {project.title}
            </p>
          </div>

          {/* Project number */}
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35 lg:col-span-4 lg:text-right">
            Selected Work
            <br />
            {project.number} — 03
          </div>
        </div>

        {/* Divider */}
        <div className="relative mt-12 h-px bg-white/40 sm:mt-16">
          <span className="absolute -right-1 -top-[5px] h-3 w-3">
            <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-white" />
            <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-white" />
          </span>
        </div>

        {/* Main information */}
        <div className="mt-10 grid gap-10 sm:mt-14 sm:gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Description */}
          <div className="min-w-0 lg:col-span-7">
            <p className="max-w-3xl text-xl font-medium leading-[1.45] tracking-[-0.025em] text-white sm:text-3xl">
              {project.description}
            </p>

            <p className="mt-7 max-w-3xl break-words font-mono text-sm leading-7 text-white/55 sm:mt-8">
              {project.details}
            </p>
          </div>

          {/* Stack */}
          <aside className="min-w-0 lg:col-span-5">
            <div className="relative border border-white/50 bg-[#11498c]/65 p-6 sm:p-8">
              {/* Corner marks */}
              <span className="absolute -left-px -top-px h-5 w-12 border-l-2 border-t-2 border-white" />
              <span className="absolute -right-px -top-px h-5 w-12 border-r-2 border-t-2 border-white" />
              <span className="absolute -bottom-px -left-px h-5 w-12 border-b-2 border-l-2 border-white" />
              <span className="absolute -bottom-px -right-px h-5 w-12 border-b-2 border-r-2 border-white" />

              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                Technology
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="border border-white/25 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.08em] text-white/75"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Features */}
        <div className="mt-16 border-t border-white/15 pt-8 sm:mt-20 sm:pt-10">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                Capabilities
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                What it does
                <span className="text-blue-200">.</span>
              </h2>
            </div>

            <div className="min-w-0 lg:col-span-8">
              <div className="grid border-t border-white/15 sm:grid-cols-2">
                {project.features.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex min-w-0 items-start gap-4 border-b border-white/15 py-5"
                  >
                    <span className="shrink-0 font-mono text-[10px] text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="break-words text-sm leading-6 text-white/80">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="mt-16 border-t border-white/15 pt-8 sm:mt-20 sm:pt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 border border-white bg-white px-7 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#174ea6] transition-colors hover:bg-transparent hover:text-white"
            >
              Live Project
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 border border-white/60 px-7 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white transition-colors hover:border-white hover:bg-white hover:text-[#174ea6]"
            >
              <FaGithub size={15} />
              GitHub
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-white/30 sm:mt-20 sm:gap-4 sm:text-[10px]">
          <span>{project.name}</span>

          <span>{project.stack.slice(0, 3).join(" · ")}</span>

          <span>{project.number} — 03</span>
        </div>
      </div>
    </main>
  );
}
