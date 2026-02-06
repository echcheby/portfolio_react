const provider = process.env.ANALYTICS_PROVIDER ?? process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER ?? "plausible";
const path = process.argv[2] ?? "/unknown";
const category = process.argv[3] ?? "document";

async function track() {
  if (provider === "plausible") {
    const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
    const apiKey = process.env.PLAUSIBLE_API_KEY;

    if (!domain || !apiKey) {
      console.warn("Missing Plausible domain or API key.");
      return;
    }

    await fetch("https://plausible.io/api/event", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Download",
        url: `https://${domain}${path}`,
        domain,
        props: { category },
      }),
    });
    return;
  }

  if (provider === "umami") {
    const apiUrl = process.env.UMAMI_API_URL;
    const apiKey = process.env.UMAMI_API_KEY;
    const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

    if (!apiUrl || !apiKey || !websiteId) {
      console.warn("Missing Umami API settings.");
      return;
    }

    await fetch(`${apiUrl}/api/send`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "event",
        payload: {
          website: websiteId,
          name: "Download",
          data: { path, category },
        },
      }),
    });
  }
}

track().catch((error) => {
  console.error(error);
  process.exit(1);
});
