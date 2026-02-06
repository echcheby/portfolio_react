import type { Project } from "@/lib/mdx";

interface ProjectCardProps {
  item: Project;
  children?: React.ReactNode;
}

export default function ProjectCard({ item, children }: ProjectCardProps) {
  return (
    <article className="glass hover-lift rounded-2xl border border-slate-200/70 p-6 shadow-soft dark:border-slate-800/70">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.frontmatter.status}</p>
          <h3 className="mt-2 text-xl font-semibold text-ink dark:text-mist">{item.frontmatter.title}</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.frontmatter.period}</p>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300">{item.frontmatter.problem}</p>
        {children ? <div className="prose-academic text-sm">{children}</div> : null}
        <div className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300">
          {item.frontmatter.tools.map((tool) => (
            <span key={tool} className="rounded-full border border-slate-200/70 px-3 py-1 dark:border-slate-700">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
