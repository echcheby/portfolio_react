import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-600 dark:text-slate-300 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-ink dark:text-mist">Mohamed Ech-Chebaby</p>
          <p>PhD Candidate, Computer Science & Wireless Security</p>
          <p>Faculty of Sciences and Techniques, Sultan Moulay Slimane University</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/documents">Documents</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/cv">CV</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
