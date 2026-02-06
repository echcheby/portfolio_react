/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

const nextConfig = {
  output: "export",
  basePath: "/portfolio_react",
  assetPrefix: "/portfolio_react/",
  trailingSlash: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  env: {
    NEXT_PUBLIC_BASE_PATH: "/portfolio_react",
  },
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  experimental: {
    mdxRs: true,
  },
  turbopack: {
    root: __dirname,
  },
};

module.exports = withMDX(nextConfig);
