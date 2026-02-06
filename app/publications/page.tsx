import { MDXRemote } from "next-mdx-remote/rsc";
import PublicationCard from "@/components/PublicationCard";
import Reveal from "@/components/Reveal";
import { getPublications } from "@/lib/mdx";
import { createMetadata, scholarlyArticleSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Publications",
  pageDescription: "Peer-reviewed journal articles, preprints, and selected conference papers.",
  pathname: "/publications",
});

export default function PublicationsPage() {
  const publications = getPublications();

  return (
    <div className="space-y-10">
      <Reveal>
        <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Publications</p>
        <h1 className="text-3xl font-semibold text-ink dark:text-mist">Peer-reviewed research outputs</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Selected journal publications emphasizing methodological transparency, replicable modeling, and policy impact.
        </p>
        </header>
      </Reveal>

      <div className="space-y-8">
        {publications.map((publication) => (
          <Reveal key={publication.slug}>
            <div className="space-y-4">
              <PublicationCard item={publication}>
                <MDXRemote source={publication.content} />
              </PublicationCard>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(
                    scholarlyArticleSchema({
                      title: publication.frontmatter.title,
                      doi: publication.frontmatter.doi,
                      authors: publication.frontmatter.authors,
                      datePublished: publication.frontmatter.date,
                      journal: publication.frontmatter.journal,
                      url: publication.frontmatter.doi
                        ? `https://doi.org/${publication.frontmatter.doi}`
                        : "https://usms.ma",
                      abstract: publication.frontmatter.abstract,
                    })
                  ),
                }}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
