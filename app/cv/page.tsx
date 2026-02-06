import DocumentLink from "@/components/DocumentLink";
import Reveal from "@/components/Reveal";
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
          <object data="/cv.pdf" type="application/pdf" className="h-[720px] w-full rounded-xl" aria-label="CV PDF preview">
            <p className="text-sm text-slate-600 dark:text-slate-300">Your browser cannot preview PDFs. Use the download button.</p>
          </object>
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
