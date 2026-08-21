"use client";

import React from "react";
import {
  AlternateEmailRounded as AlternateEmailRoundedIcon,
  FacebookRounded as FacebookRoundedIcon,
  GitHub as GitHubIcon,
  Telegram as TelegramIcon,
  CheckCircleRounded as CheckCircleRoundedIcon,
} from "@mui/icons-material";

export function HeroSocials() {
  return (
    <div className="flex items-center gap-3">
      <a
        href="https://www.facebook.com/shin.thant.517084"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-100/80 transition duration-300 hover:border-emerald-300/40 hover:text-emerald-100"
      >
        <FacebookRoundedIcon fontSize="small" />
      </a>
      <a
        href="https://github.com/ShinThantNaung"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100/80 transition duration-300 hover:border-emerald-300/40 hover:text-emerald-100"
      >
        <GitHubIcon fontSize="small" />
      </a>
      <a
        href="mailto:shinthantnaung112@gmail.com"
        aria-label="Email"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-rose-200/80 transition duration-300 hover:border-emerald-300/40 hover:text-emerald-100"
      >
        <AlternateEmailRoundedIcon fontSize="small" />
      </a>
    </div>
  );
}

export function FooterSocials() {
  const socialLinks = [
    {
      label: "Telegram",
      href: "https://t.me/Lord_Thant",
      icon: <TelegramIcon fontSize="small" />,
    },
    {
      label: "GitHub",
      href: "https://github.com/ShinThantNaung",
      icon: <GitHubIcon fontSize="small" />,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/shin.thant.517084",
      icon: <FacebookRoundedIcon fontSize="small" />,
    },
  ];

  return (
    <nav
      aria-label="Social links"
      className="mt-5 flex flex-wrap gap-x-5 gap-y-2 md:justify-end"
    >
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          title={link.label}
          className="footer-link inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 text-sm transition hover:border-emerald-400 hover:text-emerald-400"
        >
          {link.icon}
        </a>
      ))}
    </nav>
  );
}

export function ContactSocials() {
  return (
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
        <AlternateEmailRoundedIcon fontSize="small" className="text-rose-200" />
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
  );
}

export function CheckIcon() {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-400/10 text-emerald-200">
      <CheckCircleRoundedIcon fontSize="small" />
    </span>
  );
}
