"use client";

import Link from "next/link";
import { trackDownload } from "@/lib/analytics";

interface DocumentLinkProps {
  href: string;
  label: string;
  description: string;
  category: string;
}

export default function DocumentLink({ href, label, description, category }: DocumentLinkProps) {
  return (
    <div className="glass hover-lift rounded-2xl border border-slate-200/70 p-6 shadow-soft dark:border-slate-800/70">
      <p className="text-sm font-semibold text-ink dark:text-mist">{label}</p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-flex rounded-full border border-slate-200/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-200"
        onClick={() => trackDownload(href, category)}
      >
        Download
      </Link>
    </div>
  );
}
