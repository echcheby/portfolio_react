import * as React from "react";
import Script from "next/script";

export function Analytics() {
	const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER ?? "plausible";

	if (provider === "plausible") {
		const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
		const src = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ?? "https://plausible.io/js/script.js";

		if (!domain) {
			return null;
		}

		const props = { defer: true, "data-domain": domain, src } as unknown as React.ComponentProps<typeof Script>;
		return React.createElement(Script, props);
	}

	if (provider === "umami") {
		const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
		const src = process.env.NEXT_PUBLIC_UMAMI_SRC ?? "https://analytics.umami.is/script.js";

		if (!websiteId) {
			return null;
		}

		const props = { defer: true, "data-website-id": websiteId, src } as unknown as React.ComponentProps<typeof Script>;
		return React.createElement(Script, props);
	}

	return null;
}
