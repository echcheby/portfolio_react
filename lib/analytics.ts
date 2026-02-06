declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string> }) => void;
    umami?: {
      track: (eventName: string, data?: Record<string, string>) => void;
    };
  }
}

const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER ?? "plausible";

export function trackEvent(name: string, data?: Record<string, string>) {
  if (typeof window === "undefined") {
    return;
  }

  if (provider === "plausible" && window.plausible) {
    window.plausible(name, { props: data });
    return;
  }

  if (provider === "umami" && window.umami?.track) {
    window.umami.track(name, data);
  }
}

export function trackDownload(path: string, category: string) {
  trackEvent("Download", { path, category });
}

export async function getVisitorCount(): Promise<number | null> {
  const analyticsProvider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER ?? "plausible";

  if (analyticsProvider === "plausible") {
    const siteId = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
    const apiKey = process.env.PLAUSIBLE_API_KEY;

    if (!siteId || !apiKey) {
      return null;
    }

    const response = await fetch(
      `https://plausible.io/api/v1/stats/aggregate?site_id=${encodeURIComponent(siteId)}&metrics=visitors`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as { results?: { visitors?: { value: number } } };
    return data?.results?.visitors?.value ?? null;
  }

  if (analyticsProvider === "umami") {
    const apiUrl = process.env.UMAMI_API_URL;
    const apiKey = process.env.UMAMI_API_KEY;
    const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

    if (!apiUrl || !apiKey || !websiteId) {
      return null;
    }

    const response = await fetch(`${apiUrl}/api/websites/${websiteId}/stats`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as { visitors?: number };
    return data?.visitors ?? null;
  }

  return null;
}
