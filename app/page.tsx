import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import AnalyticsCounter from "@/components/AnalyticsCounter";
import Reveal from "@/components/Reveal";
import PublicationCard from "@/components/PublicationCard";
import ProjectCard from "@/components/ProjectCard";
import { getProjects, getPublications } from "@/lib/mdx";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Home",
  pageDescription:
    "Academic portfolio of Mohamed Ech-Chebaby, PhD candidate in Computer Science & Wireless Security focusing on IoT authentication and blockchain-enabled security.",
  pathname: "/",
});

export default function Home() {
  const publications = getPublications();
  const projects = getProjects();
  const featuredPublication = publications[0];
  const featuredProject = projects[0];

  return (
    <div className="flex flex-col gap-16">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <Reveal>
          <div className="glass hero-card space-y-6 rounded-3xl border border-slate-200/70 p-8 shadow-soft dark:border-slate-800/70">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">PhD Research Portfolio</p>
          <h1 className="text-4xl font-semibold tracking-tight text-ink dark:text-mist md:text-5xl">
            Secure, scalable authentication for next-generation IoT systems.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            I am Mohamed Ech-Chebaby, a PhD candidate in Computer Science & Wireless Security at Sultan Moulay Slimane
            University (Beni Mellal, Morocco). My research focuses on IoT authentication and authorization, secure data
            storage, and blockchain architectures for healthcare IoT.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/publications"
                className="btn-primary rounded-full bg-[rgb(var(--accent))] px-6 py-2 text-sm font-semibold text-white shadow-soft transition hover:opacity-90"
            >
              View publications
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-slate-200/70 px-6 py-2 text-sm font-semibold text-slate-700 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-200"
            >
              Research projects
            </Link>
          </div>
          </div>
        </Reveal>
        <div className="flex flex-col gap-6">
          <Reveal delayMs={120}>
            <div className="glass hover-lift flex flex-col items-center gap-4 rounded-3xl border border-slate-200/70 p-8 shadow-soft dark:border-slate-800/70">
              <div className="portrait overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Mohamed Ech-Chebaby portrait"
                  width={220}
                  height={220}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-ink dark:text-mist">Mohamed Ech-Chebaby</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">PhD Candidate</p>
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={180}>
            <AnalyticsCounter />
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className="grid gap-6 md:grid-cols-3">
          <div className="glass hover-lift rounded-2xl border border-slate-200/70 p-6 shadow-soft dark:border-slate-800/70">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Education</p>
            <p className="mt-3 text-sm font-semibold text-ink dark:text-mist">PhD, Computer Science & Wireless Security</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Sultan Moulay Slimane University · 2023–present
            </p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Faculty of Sciences and Techniques, Beni Mellal, Morocco.
            </p>
          </div>
          <div className="glass hover-lift rounded-2xl border border-slate-200/70 p-6 shadow-soft dark:border-slate-800/70">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Skills</p>
            <p className="mt-3 text-sm font-semibold text-ink dark:text-mist">Programming & Security</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Python, Java, C/C++, ECC, blockchain security, IoT protocol design.
            </p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Web: HTML5, PHP, JSP, JavaScript · Databases: SQL, MySQL, Neo4j.
            </p>
          </div>
          <div className="glass hover-lift rounded-2xl border border-slate-200/70 p-6 shadow-soft dark:border-slate-800/70">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Teaching</p>
            <p className="mt-3 text-sm font-semibold text-ink dark:text-mist">Teaching Assistant</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Fall 2025 · Algorithmics & C Language
            </p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Focused on algorithmic thinking, secure coding, and data structures.
            </p>
          </div>
        </section>
      </Reveal>

      <section className="grid gap-8 lg:grid-cols-2">
        {featuredPublication ? (
          <Reveal>
            <div className="space-y-4">
            <h2 className="text-xl font-semibold text-ink dark:text-mist">Featured publication</h2>
            <PublicationCard item={featuredPublication}>
              <MDXRemote source={featuredPublication.content} />
            </PublicationCard>
            </div>
          </Reveal>
        ) : null}
        {featuredProject ? (
          <Reveal delayMs={120}>
            <div className="space-y-4">
            <h2 className="text-xl font-semibold text-ink dark:text-mist">Active project</h2>
            <ProjectCard item={featuredProject}>
              <MDXRemote source={featuredProject.content} />
            </ProjectCard>
            </div>
          </Reveal>
        ) : null}
      </section>

      <Reveal delayMs={140}>
        <section className="glass rounded-3xl border border-slate-200/70 p-8 shadow-soft dark:border-slate-800/70">
          <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Research focus</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Causal modeling of epidemiological interventions, temporal graph learning on multimodal hospital records, and
              ECC-based authentication, blockchain-enabled healthcare IoT, and secure data storage for wearable devices.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Collaboration</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Open to collaborations on IoT security protocols, applied cryptography, and secure healthcare systems.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Contact</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Reach out for supervision inquiries, speaking requests, or data collaboration opportunities.
            </p>
            <Link href="/contact" className="mt-3 inline-flex text-sm font-semibold text-accent">
              Send a message →
            </Link>
          </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
