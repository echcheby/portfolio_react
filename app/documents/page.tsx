import DocumentLink from "@/components/DocumentLink";
import Reveal from "@/components/Reveal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Documents",
  pageDescription: "Downloadable PDFs including working papers, datasets, and research summaries.",
  pathname: "/documents",
});

export default function DocumentsPage() {
  return (
    <div className="space-y-10">
      <Reveal>
        <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Documents</p>
        <h1 className="text-3xl font-semibold text-ink dark:text-mist">Downloadable materials</h1>
        <p className="text-slate-600 dark:text-slate-300">
          PDF resources including the academic CV and a curated publications list.
        </p>
        </header>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <DocumentLink
            href="/cv.pdf"
            label="Curriculum Vitae"
            description="Full academic CV including education, publications, skills, and teaching assistantship."
            category="cv"
          />
        </Reveal>
        <Reveal delayMs={80}>
          <DocumentLink
            href="/papers/publications-list.pdf"
            label="Publications List"
            description="Journal articles and conference proceedings in IoT security and blockchain systems."
            category="publication-list"
          />
        </Reveal>
      </div>
    </div>
  );
}
