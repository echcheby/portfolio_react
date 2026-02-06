import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
  { href: "/documents", label: "Documents" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200/60 dark:border-slate-800/60 bg-[rgb(var(--background))]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-ink transition hover:text-accent dark:text-mist">
          Mohamed Ech-Chebaby
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-slate-600 transition hover:text-accent dark:text-slate-300">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-full border border-slate-200/80 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-200 md:inline-flex"
          >
            Collaborate
          </Link>
        </div>
      </div>
      <nav aria-label="Primary mobile" className="flex flex-wrap gap-3 border-t border-slate-200/60 px-6 py-3 text-xs font-medium text-slate-600 dark:border-slate-800/60 dark:text-slate-300 md:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-full border border-slate-200/70 px-3 py-1.5 dark:border-slate-700">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
