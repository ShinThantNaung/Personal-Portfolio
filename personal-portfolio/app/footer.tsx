import Link from "next/link";
import { FooterSocials } from "./components/IconsClient";

export default function Footer() {
  return (
    <footer className="site-footer mt-16 border-t px-6 py-12 md:mt-24 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="footer-kicker text-xs font-semibold uppercase tracking-[0.28em]">
              Let&apos;s build something great.
            </p>
            <p className="footer-copy mt-4 max-w-xl text-sm leading-6 md:text-base">
              Feel free to reach out if you&apos;re looking for a developer,
              have a question, or just want to connect.
            </p>
          </div>

          <div className="md:text-right">
            <Link
              href="https://shinthantnaung.dev"
              target="_blank"
              rel="noreferrer"
              className="footer-brand text-2xl font-semibold transition hover:text-emerald-400 md:text-3xl"
            >
              shinthantnaung.dev
            </Link>
            <FooterSocials />
          </div>
        </div>

        <div className="footer-meta mt-10 flex flex-col gap-2 border-t pt-5 text-xs md:flex-row md:items-center md:justify-between">
          <span>Based in Mandalay/Thaton</span>
          <span>&copy; 2026 Shin Thant Naung. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
