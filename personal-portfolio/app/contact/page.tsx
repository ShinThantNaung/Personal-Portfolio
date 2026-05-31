"use client";

import {
  Telegram as TelegramIcon,
  AlternateEmailRounded as AlternateEmailRoundedIcon,
  CheckCircleRounded as CheckCircleRoundedIcon,
  FacebookRounded as FacebookRoundedIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";

export default function ContactPage() {
  const opportunities = [
    "Freelance work",
    "Collaboration",
    "Web development projects",
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 pt-10 md:pt-16">
      <div className="grid gap-6 md:grid-cols-2">
        <section className="quantum-card rounded-3xl p-6 md:p-8">
          <h1 className="text-3xl font-semibold text-slate-100 md:text-4xl">
            Let&apos;s Get in Touch
          </h1>
          <p className="mt-3 text-sm text-slate-300 md:text-base">
            Currently available for:
          </p>

          <ul className="mt-5 space-y-3">
            {opportunities.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-slate-200 md:text-base"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-400/10 text-emerald-200">
                  <CheckCircleRoundedIcon fontSize="small" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-3">
            <a
              href="https://www.facebook.com/shin.thant.517084"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition duration-300 hover:border-emerald-300/40 hover:bg-white/10"
            >
              <FacebookRoundedIcon fontSize="small" className="text-cyan-200" />
              <span>Facebook: Shin Thant</span>
            </a>

            <a
              href="https://github.com/ShinThantNaung"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition duration-300 hover:border-emerald-300/40 hover:bg-white/10"
            >
              <GitHubIcon fontSize="small" className="text-slate-200" />
              <span>Github: ShinThantNaung</span>
            </a>

            <a
              href="mailto:shinthantnaung112@gmail.com"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition duration-300 hover:border-emerald-300/40 hover:bg-white/10"
            >
              <AlternateEmailRoundedIcon
                fontSize="small"
                className="text-rose-200"
              />
              <span>Email: shinthantnaung112@gmail.com</span>
            </a>

            <a
              href="https://t.me/Lord_Thant"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition duration-300 hover:border-emerald-300/40 hover:bg-white/10"
            >
              <TelegramIcon fontSize="small" className="text-cyan-200" />
              <span>Telegram: Shine Thant</span>
            </a>
          </div>
        </section>

        <section className="quantum-card rounded-3xl p-6 md:p-8">
          <form
            className="group space-y-4"
            action="mailto:shinthantnaung112@gmail.com"
            method="post"
            encType="text/plain"
          >
            <label className="block space-y-2 text-sm text-slate-200">
              <span>Full Name</span>
              <input
                id="fullName"
                name="fullName"
                required
                placeholder="Enter your full name"
                className="quantum-input w-full rounded-2xl border border-slate-700/50 bg-slate-900/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-emerald-400"
              />
            </label>
            <label className="block space-y-2 text-sm text-slate-200">
              <span>Email</span>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="quantum-input w-full rounded-2xl border border-slate-700/50 bg-slate-900/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-emerald-400"
              />
            </label>
            <label className="block space-y-2 text-sm text-slate-200">
              <span>Message</span>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Enter your message"
                className="quantum-input w-full rounded-2xl border border-slate-700/50 bg-slate-900/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-emerald-400"
              />
            </label>
            <button
              type="submit"
              className="quantum-pill w-full rounded-full px-6 py-3 text-sm font-semibold text-white group-valid:animate-softPulse"
            >
              Send
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
