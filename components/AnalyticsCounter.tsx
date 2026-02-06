import { getVisitorCount } from "@/lib/analytics";

export default async function AnalyticsCounter() {
  const totalVisitors = await getVisitorCount();
  const formatted = totalVisitors ? new Intl.NumberFormat("en", { notation: "compact" }).format(totalVisitors) : "—";

  return (
    <div className="glass hover-lift rounded-2xl border border-slate-200/70 px-5 py-4 text-sm text-slate-600 shadow-soft dark:border-slate-800/70 dark:text-slate-300">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Research Footprint</p>
      <p className="mt-2 text-2xl font-semibold text-ink dark:text-mist">{formatted}</p>
      <p className="mt-1">Unique visitors (rolling 30 days)</p>
    </div>
  );
}
