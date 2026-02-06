"use client";

import Link from "next/link";
import type { Publication } from "@/lib/mdx";
import { trackDownload } from "@/lib/analytics";

interface PublicationCardProps {
  item: Publication;
  children?: React.ReactNode;
}

export default function PublicationCard({ item, children }: PublicationCardProps) {
  const doiLink = item.frontmatter.doi ? `https://doi.org/${item.frontmatter.doi}` : null;

  const content = (
    <article className="glass hover-lift rounded-2xl border border-slate-200/70 p-6 shadow-soft dark:border-slate-800/70">
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            {item.frontmatter.journal} · {item.frontmatter.year}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-ink dark:text-mist">{item.frontmatter.title}</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {item.frontmatter.authors.join(", ")}
          </p>
        </div>
        {item.frontmatter.abstract ? (
          <p className="text-sm text-slate-600 dark:text-slate-300">{item.frontmatter.abstract}</p>
        ) : null}
        {children ? <div className="prose-academic text-sm">{children}</div> : null}
        <div className="flex flex-wrap items-center gap-4 text-sm">
          {item.frontmatter.doi ? (
            <span className="text-accent">DOI: {item.frontmatter.doi}</span>
          ) : null}
          {item.frontmatter.pdf ? (
            <Link
              href={item.frontmatter.pdf}
              className="rounded-full border border-slate-200/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-200"
              onClick={(event) => {
                event.stopPropagation();
                trackDownload(item.frontmatter.pdf ?? "", "publication");
              }}
            >
              Download PDF
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );

  if (!doiLink) {
    return content;
  }

  return (
    <Link href={doiLink} target="_blank" rel="noreferrer" className="block">
      {content}
    </Link>
  );
}
