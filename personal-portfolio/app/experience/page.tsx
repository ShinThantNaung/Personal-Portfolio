"use client";

import Image from "next/image";
import capoo from "../../public/capoo-crying.webp";

const ExperiencePage = () => {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-10 md:pt-16">
      <section className="mx-auto max-w-3xl">
        <div className="quantum-card rounded-3xl px-6 py-8 text-center">
          <div className="mx-auto flex h-52 w-52 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40">
            <Image
              src={capoo}
              alt="Capoo Crying"
              width={200}
              height={200}
              className="h-auto w-40"
            />
          </div>
          <h1 className="mt-6 text-2xl font-semibold text-slate-100 md:text-3xl">
            Previously seeking experiences... but now, look what I&apos;ve been
            building!
          </h1>
          <p className="mt-3 text-sm text-slate-300 md:text-base">
            New case studies are coming soon. Stay tuned for what I am building
            next.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ExperiencePage;
