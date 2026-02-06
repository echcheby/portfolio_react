import Link from "next/link";
import Reveal from "@/components/Reveal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  pageDescription: "Get in touch for collaboration, supervision, and speaking invitations.",
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <Reveal>
        <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Contact</p>
        <h1 className="text-3xl font-semibold text-ink dark:text-mist">Let’s collaborate</h1>
        <p className="text-slate-600 dark:text-slate-300">
          I welcome research collaborations in IoT security, authentication protocols, and blockchain-enabled healthcare
          systems. Please include a brief summary of the project scope and timeline.
        </p>
        </header>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="glass rounded-2xl border border-slate-200/70 p-6 shadow-soft dark:border-slate-800/70">
          <p className="text-sm font-semibold text-ink dark:text-mist">Email</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">mohamed.ech-chebaby@usms.ma</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">+212 7 067 031 29</p>
          <Link
            href="mailto:mohamed.ech-chebaby@usms.ma"
            className="mt-4 inline-flex rounded-full border border-slate-200/70 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-soft transition hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100"
          >
            Send email
          </Link>
          </div>
        </Reveal>
        <Reveal delayMs={120}>
          <div className="glass rounded-2xl border border-slate-200/70 p-6 text-sm text-slate-600 shadow-soft dark:border-slate-800/70 dark:text-slate-300">
          <p className="font-semibold text-ink dark:text-mist">Office</p>
          <p className="mt-2">Faculty of Sciences and Techniques, Sultan Moulay Slimane University</p>
          <p className="mt-1">Beni Mellal, Morocco</p>
          <p className="mt-4 font-semibold text-ink dark:text-mist">Office hours</p>
          <p className="mt-1">Tuesday & Thursday · 14:00–16:00 (ET)</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
