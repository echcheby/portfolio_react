import DocumentLink from "@/components/DocumentLink";
import Reveal from "@/components/Reveal";
import { withBasePath } from "@/lib/paths";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Curriculum Vitae",
  pageDescription: "Academic CV highlighting research, teaching, grants, and service roles.",
  pathname: "/cv",
});

export default function CvPage() {
  return (
    <div className="space-y-8">
      <Reveal>
        <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Curriculum Vitae</p>
        <h1 className="text-3xl font-semibold text-ink dark:text-mist">Academic CV</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Updated February 2026. Includes education, publications, technical skills, and teaching assistantship.
        </p>
        </header>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-[1.4fr_0.6fr]">
        <Reveal>
          <div className="glass rounded-2xl border border-slate-200/70 p-4 shadow-soft dark:border-slate-800/70">
          <div className="space-y-4">
            <div className="md:hidden space-y-3 rounded-xl border border-dashed border-slate-300/70 bg-white/70 p-4 text-sm text-slate-600 dark:border-slate-700/70 dark:bg-slate-900/40 dark:text-slate-300">
              <p className="font-semibold text-ink dark:text-mist">PDF preview isn’t supported on some mobile browsers.</p>
              <p>Open the CV in a new tab or use the download button to view it.</p>
              <a
                href={withBasePath("/cv.pdf")}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Open CV in new tab
              </a>
            </div>
            <object
              data={withBasePath("/cv.pdf")}
              type="application/pdf"
              className="hidden h-[720px] w-full rounded-xl md:block"
              aria-label="CV PDF preview"
            >
              <p className="text-sm text-slate-600 dark:text-slate-300">Your browser cannot preview PDFs. Use the download button.</p>
            </object>
          </div>
          </div>
        </Reveal>
        <div className="space-y-4">
          <Reveal delayMs={120}>
            <DocumentLink
              href="/cv.pdf"
              label="Download CV"
              description="High-resolution PDF suitable for academic applications."
              category="cv"
            />
          </Reveal>
          <Reveal delayMs={180}>
            <div className="glass rounded-2xl border border-slate-200/70 p-6 text-sm text-slate-600 shadow-soft dark:border-slate-800/70 dark:text-slate-300">
            <p className="font-semibold text-ink dark:text-mist">Available on request</p>
            <p className="mt-2">Research statement and teaching materials can be shared upon request.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
