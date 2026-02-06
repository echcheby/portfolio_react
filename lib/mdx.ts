import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface PublicationFrontmatter {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  date: string;
  doi?: string;
  pdf?: string;
  abstract?: string;
  bibtex?: string;
}

export interface ProjectFrontmatter {
  title: string;
  status: string;
  period: string;
  role: string;
  tools: string[];
  problem: string;
  methodology: string;
  outcomes: string;
}

export interface ContentItem<TFrontmatter> {
  slug: string;
  frontmatter: TFrontmatter;
  content: string;
}

export type Publication = ContentItem<PublicationFrontmatter>;
export type Project = ContentItem<ProjectFrontmatter>;

const contentRoot = path.join(process.cwd(), "content");

function getMdxFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    return [] as string[];
  }
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

function parseMdxFile<TFrontmatter>(filePath: string): ContentItem<TFrontmatter> {
  const slug = path.basename(filePath, ".mdx");
  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(raw);

  return {
    slug,
    frontmatter: data as TFrontmatter,
    content,
  };
}

export function getPublications(): Publication[] {
  const dir = path.join(contentRoot, "publications");
  return getMdxFiles(dir)
    .map((file) => parseMdxFile<PublicationFrontmatter>(path.join(dir, file)))
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function getProjects(): Project[] {
  const dir = path.join(contentRoot, "projects");
  return getMdxFiles(dir)
    .map((file) => parseMdxFile<ProjectFrontmatter>(path.join(dir, file)))
    .sort((a, b) => (a.frontmatter.period < b.frontmatter.period ? 1 : -1));
}
