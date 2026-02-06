# PhD Research Portfolio

International-grade academic portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and MDX.

## Highlights

- Minimalist academic design with light/dark mode.
- MDX-based publications and project content.
- Privacy-friendly analytics (Plausible or Umami) with download tracking.
- SEO-ready metadata, OpenGraph, and Schema.org for scholarly articles.

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env.local` and configure analytics if needed.

```bash
cp .env.example .env.local
```

## Content updates

- Publications: `content/publications/*.mdx`
- Projects: `content/projects/*.mdx`
- Documents: `public/` and `public/papers/`

## Build and deploy

```bash
npm run build
npm start
```

Deploy on Vercel with the same environment variables.
