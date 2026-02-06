import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://phd-portfolio.example.edu";
const siteName = "Mohamed Ech-Chebaby";
const siteTitle = `${siteName} · PhD Research Portfolio`;
const description =
  "PhD candidate in Computer Science & Wireless Security focusing on IoT authentication, authorization, and blockchain-enabled healthcare systems.";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s · ${siteName}`,
  },
  description,
  openGraph: {
    title: siteTitle,
    description,
    url: siteUrl,
    siteName: siteTitle,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description,
  },
};

export function createMetadata({
  title,
  pageDescription,
  pathname,
}: {
  title: string;
  pageDescription?: string;
  pathname?: string;
}): Metadata {
  const url = pathname ? `${siteUrl}${pathname}` : siteUrl;

  return {
    ...baseMetadata,
    title,
    description: pageDescription ?? description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description: pageDescription ?? description,
      url,
    },
  };
}

export function scholarlyArticleSchema({
  title,
  doi,
  authors,
  datePublished,
  journal,
  url,
  abstract,
}: {
  title: string;
  doi?: string;
  authors: string[];
  datePublished: string;
  journal: string;
  url: string;
  abstract?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: title,
    identifier: doi ? `https://doi.org/${doi}` : undefined,
    datePublished,
    isPartOf: {
      "@type": "Periodical",
      name: journal,
    },
    author: authors.map((name) => ({
      "@type": "Person",
      name,
    })),
    url,
    description: abstract,
  };
}
