import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">404</p>
      <h1 className="text-3xl font-semibold text-ink dark:text-mist">Page not found</h1>
      <p className="text-slate-600 dark:text-slate-300">
        The page you are looking for does not exist. Use the homepage link below.
      </p>
      <Link
        href="/"
        className="btn-primary rounded-full bg-[rgb(var(--accent))] px-6 py-2 text-sm font-semibold text-white shadow-soft transition hover:opacity-90"
      >
        Go to homepage
      </Link>
    </div>
  );
}
