import Image from "next/image";
export const dynamic = "force-static";
import Link from "next/link";
import { HeroSocials } from "./components/IconsClient";
import profile from "../public/profile.png";
import python from "../public/Python-logo-notext.svg";
import react from "../public/React-icon.svg";
import typescript from "../public/typescript-logo.svg";
import javascript from "../public/javascript-logo.svg";
import nodejs from "../public/NodeJS.svg";
import java from "../public/java-logo.svg";
import csharp from "../public/Csharp-logo.svg";
import c from "../public/C-logo.svg";
import mysql from "../public/mysql-logo.svg";
import prisma from "../public/prisma-logo.svg";
import pytorch from "../public/pytorch-logo.svg";

const techStack = [
  {
    category: "Languages",
    items: [
      {
        label: "Python",
        detail: "Primary language for full-stack and ML work",
        icons: [{ src: python, alt: "Python logo" }],
      },
      {
        label: "JavaScript / TypeScript",
        detail: "Frontend + backend fundamentals and tooling",
        icons: [
          { src: javascript, alt: "JavaScript logo" },
          { src: typescript, alt: "TypeScript logo" },
        ],
      },
      {
        label: "Java",
        detail: "Coursework and backend foundations",
        icons: [{ src: java, alt: "Java logo" }],
      },
      {
        label: "C#",
        detail: "APIs and service integrations",
        icons: [{ src: csharp, alt: "C# logo" }],
      },
      {
        label: "C",
        detail: "Systems fundamentals and algorithms",
        icons: [{ src: c, alt: "C logo" }],
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        label: "React",
        detail: "Design systems and interactive UI work",
        icons: [{ src: react, alt: "React logo" }],
      },
    ],
  },
  {
    category: "Backend / DB",
    items: [
      {
        label: "Node.js",
        detail: "API services and auth flows",
        icons: [{ src: nodejs, alt: "Node.js logo" }],
      },
      {
        label: "MySQL",
        detail: "Relational data modeling and queries",
        icons: [{ src: mysql, alt: "MySQL logo" }],
      },
      {
        label: "Prisma",
        detail: "Schema-driven data access",
        icons: [{ src: prisma, alt: "Prisma logo" }],
      },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      {
        label: "PyTorch",
        detail: "Model training and experimentation",
        icons: [{ src: pytorch, alt: "PyTorch logo" }],
      },
    ],
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-10 md:pt-16">
      <section className="quantum-card rounded-3xl p-6 md:p-10">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-center">
          <div className="flex justify-center md:justify-start">
            <div className="group relative">
              <div className="absolute -inset-5 rounded-full bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.25),transparent_65%)] opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
              <div className="relative rounded-full bg-gradient-to-r from-cyan-400/70 via-emerald-400/60 to-sky-500/70 p-1 shadow-[0_0_40px_rgba(56,189,248,0.35)] transition duration-500 group-hover:rotate-1 group-hover:shadow-[0_0_65px_rgba(34,211,238,0.55)]">
                <div className="rounded-full bg-gradient-to-r from-emerald-400/60 via-cyan-400/70 to-emerald-300/60 p-[3px] transition duration-500 group-hover:rotate-2">
                  <div className="relative h-60 w-60 overflow-hidden rounded-full border border-white/10 bg-slate-950/60 sm:h-72 sm:w-72 md:h-80 md:w-80">
                    <Image
                      src={profile}
                      alt="Profile"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 240px, (max-width: 1200px) 288px, 320px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-emerald-100/80">
              Full-Stack Curious, Frontend Focused
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-slate-100 sm:text-4xl md:text-5xl">
                Shin Thant Naung
              </h1>
              <p className="mt-3 text-base text-slate-300 md:text-lg">
                Passionate software developer with a deep interest in crafting
                web experiences and learning modern technologies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-100">
                Tech Stack
              </h2>
              <div className="space-y-3">
                {techStack.map((group) => (
                  <div
                    key={group.category}
                    className="quantum-card rounded-2xl p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/70">
                      {group.category}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((tech) => (
                        <div key={tech.label} className="group relative">
                          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-100 transition duration-300 group-hover:border-emerald-300/40 group-hover:bg-white/10">
                            {tech.icons.map((icon) => (
                              <Image
                                key={icon.alt}
                                src={icon.src}
                                alt={icon.alt}
                                width={18}
                                height={18}
                                className="h-4 w-4"
                              />
                            ))}
                            <span>{tech.label}</span>
                          </div>
                          <span className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1 scale-95 rounded-lg border border-white/10 bg-slate-950/70 px-2 py-1 text-[11px] text-slate-100 opacity-0 shadow-[0_10px_30px_rgba(2,6,23,0.55)] backdrop-blur-md transition duration-300 group-hover:-translate-y-6 group-hover:scale-100 group-hover:opacity-100">
                            {tech.detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="quantum-card rounded-2xl p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100/70">
                About Me
              </h3>
              <p className="mt-2 text-sm text-slate-300 md:text-base">
                I am Shin Thant Naung, a Computer Science undergraduate at
                Myanmar Institute of Information Technology. I am passionate
                about full-stack web development and currently building
                applications using Node.js while learning React for frontend
                development. I am also deeply interested in mathematics, machine
                learning, and deep learning. My goal is to become a full-stack
                developer and an AI engineer, and to contribute to meaningful,
                real-world projects in the future.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="quantum-pill inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white"
              >
                Contact Me
              </Link>
              <HeroSocials />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
