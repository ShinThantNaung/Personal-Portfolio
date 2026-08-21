import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import type { ReactNode } from "react";
export const dynamic = "force-static";

type Project = {
  name: string;
  stack: string;
  description: string;
  github: string;
  production?: string;
  productionStatus?: "Live" | "Offline";
  accent: string;
};

const projects: Project[] = [
  {
    name: "Concert management system",
    stack: "NodeJS",
    description:
      "A backend system for organizing concerts, managing ticket inventory, and keeping events moving.",
    github: "https://github.com/ShinThantNaung/concert-management-system",
    production: "https://tickets.int.yt",
    productionStatus: "Offline",
    accent: "from-rose-400/20 via-orange-300/10 to-transparent",
  },
  {
    name: "Realtime chat app",
    stack: "NodeJS",
    description:
      "A real-time messaging experience built around fast conversations and a Node.js server.",
    github: "https://github.com/ShinThantNaung/ChatApp_Node",
    accent: "from-cyan-400/20 via-blue-300/10 to-transparent",
  },
  {
    name: "Hsum Chaint",
    stack: "React Native",
    description:
      "A mobile project created as part of the One Project One Month build challenge.",
    github: "https://github.com/one-project-one-month/HsumChaint_ReactNative",
    accent: "from-emerald-400/20 via-teal-300/10 to-transparent",
  },
  {
    name: "Quiz maker",
    stack: "NextJS",
    description:
      "A focused quiz-building tool for creating, organizing, and sharing custom quizzes.",
    github: "https://github.com/thuta277353-creator/Quiz_maker",
    accent: "from-violet-400/20 via-fuchsia-300/10 to-transparent",
  },
  {
    name: "Enginex",
    stack: "Node / NextJS",
    description:
      "A freelance website for engineers, connecting clients with skilled professionals for various engineering projects.",
    github: "https://github.com/ShinThantN/Enginex_Node",
    production: "https://api.enginexmm.tech/health",
    productionStatus: "Live",
    accent: "from-amber-300/20 via-lime-300/10 to-transparent",
  },
];

type ProjectActionProps = {
  href?: string;
  icon: ReactNode;
  children: ReactNode;
  disabled?: boolean;
};

const ProjectAction = ({
  href,
  icon,
  children,
  disabled = false,
}: ProjectActionProps) => (
  <a
    href={disabled ? undefined : href}
    target={disabled ? undefined : "_blank"}
    rel={disabled ? undefined : "noreferrer"}
    aria-disabled={disabled}
    className={`experience-action inline-flex min-w-36 items-center justify-center gap-2 rounded-full border-2 px-5 py-2.5 text-xs font-semibold ${disabled ? "experience-action-disabled cursor-not-allowed" : ""}`}
  >
    {icon}
    {children}
  </a>
);

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => (
  <article className="quantum-card experience-card group relative overflow-hidden rounded-3xl p-5 md:p-7">
    <div
      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70`}
    />
    <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
      <span className="experience-muted w-8 shrink-0 text-xs font-semibold uppercase tracking-[0.22em]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0 flex-1">
        <h2 className="experience-heading text-2xl font-semibold md:text-3xl">
          {project.name}
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="experience-badge rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-[11px] font-semibold">
            {project.stack}
          </span>
        </div>
        <p className="experience-copy mt-4 max-w-3xl text-sm leading-6">
          {project.description}
        </p>
      </div>
      <div className="flex shrink-0 flex-row flex-wrap gap-3 border-black border-white/10 pt-5 md:w-40 md:flex-col md:border-t-0 md:border-l md:pl-7 md:pt-0">
        <ProjectAction
          icon={<GitHubIcon sx={{ fontSize: 16 }} />}
          href={project.github}
        >
          Source
        </ProjectAction>
        {project.production ? (
          <ProjectAction
            icon={<OpenInNewRoundedIcon sx={{ fontSize: 15 }} />}
            href={project.production}
            disabled={project.productionStatus !== "Live"}
          >
            {project.productionStatus === "Live"
              ? "Visit API"
              : "Production offline"}
          </ProjectAction>
        ) : null}
      </div>
    </div>
  </article>
);

const ExperiencePage = () => {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:pt-16">
      <section>
        <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="experience-kicker text-xs font-semibold uppercase tracking-[0.3em]">
              Selected builds / 2023 - 2026
            </p>
            <h1 className="experience-heading mt-3 text-4xl font-semibold md:text-6xl">
              Things I&apos;ve shipped.
            </h1>
            <p className="experience-copy mt-4 max-w-xl text-sm leading-6 md:text-base">
              A small archive of products, experiments, and systems built across
              web, mobile, and backend work.
            </p>
          </div>
          <div className="experience-copy flex items-center gap-3 self-start text-xs md:self-auto">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
            <span>1 active production link</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ExperiencePage;
