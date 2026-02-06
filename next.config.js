/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

const nextConfig = {
  output: "export",
  basePath: "/portfolio_react",
  assetPrefix: "/portfolio_react/",
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    mdxRs: true,
  },
  turbopack: {
    root: __dirname,
  },
};

module.exports = withMDX(nextConfig);
