import { MDXRemote } from "next-mdx-remote/rsc";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { getProjects } from "@/lib/mdx";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Projects",
  pageDescription: "Research projects spanning causal modeling, knowledge graphs, and clinical narrative mining.",
  pathname: "/projects",
});

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="space-y-10">
      <Reveal>
        <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Projects</p>
        <h1 className="text-3xl font-semibold text-ink dark:text-mist">Active research initiatives</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Multi-year projects focused on interpretable graph learning, causal audit trails, and deployment-ready decision
          support.
        </p>
        </header>
      </Reveal>

      <div className="space-y-8">
        {projects.map((project) => (
          <Reveal key={project.slug}>
            <ProjectCard item={project}>
              <MDXRemote source={project.content} />
            </ProjectCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
