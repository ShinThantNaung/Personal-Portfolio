import { ContactSocials, CheckIcon } from "../components/IconsClient";

export const dynamic = "force-static";

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
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ContactSocials />
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
