"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9 rounded-full border border-slate-200/70 dark:border-slate-700" />;
  }

  const isDark = (theme === "dark" || resolvedTheme === "dark");

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/70 text-slate-600 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-200"
    >
      {isDark ? (
        <span aria-hidden className="text-base">☾</span>
      ) : (
        <span aria-hidden className="text-base">☼</span>
      )}
    </button>
  );
}
