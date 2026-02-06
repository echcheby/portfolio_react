import Script from "next/script";

export function Analytics() {
  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER ?? "plausible";

  if (provider === "plausible") {
    const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
    const src = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ?? "https://plausible.io/js/script.js";

    if (!domain) {
      return null;
    }

    return <Script defer data-domain={domain} src={src} />;
  }

  if (provider === "umami") {
    const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
    const src = process.env.NEXT_PUBLIC_UMAMI_SRC ?? "https://analytics.umami.is/script.js";

    if (!websiteId) {
      return null;
    }

    return <Script defer data-website-id={websiteId} src={src} />;
  }

  return null;
}
