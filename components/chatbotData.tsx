import type { ReactNode } from "react";
import Link from "next/link";
import { withBasePath } from "@/lib/paths";

export type QaItem = {
  id: string;
  keywords: string[];
  answer: ReactNode;
};

export const qaItems: QaItem[] = [
  {
    id: "name",
    keywords: ["name", "who are you", "who r you", "who is mohamed", "identity"],
    answer: (
      <span>
        Mohamed Ech-Chebaby, PhD candidate in Computer Science & Wireless Security at Sultan Moulay Slimane University.
      </span>
    ),
  },
  {
    id: "location",
    keywords: ["location", "where", "beni mellal", "morocco", "based"],
    answer: <span>Beni Mellal, Morocco.</span>,
  },
  {
    id: "research",
    keywords: ["research", "focus", "topic", "thesis", "interest", "area", "topics"],
    answer: (
      <span>
        Research focuses on IoT authentication and authorization, ECC-based security protocols, blockchain-enabled
        healthcare IoT, and secure data storage for wearable devices.
      </span>
    ),
  },
  {
    id: "expertise",
    keywords: ["expertise", "specialization", "expert", "domain"],
    answer: (
      <span>
        Specialization includes IoT security, ECC-based authentication, blockchain architectures, and secure data
        storage for healthcare IoT systems.
      </span>
    ),
  },
  {
    id: "skills",
    keywords: ["skills", "programming", "stack", "languages", "tools"],
    answer: (
      <span>
        Core skills: Python, Java, C/C++, ECC, blockchain security, IoT protocol design. Web: HTML5, PHP, JSP,
        JavaScript. Databases: SQL, MySQL, Neo4j.
      </span>
    ),
  },
  {
    id: "education",
    keywords: ["education", "phd", "university", "degree"],
    answer: (
      <span>
        PhD in Computer Science & Wireless Security (2023–present), Sultan Moulay Slimane University, Faculty of
        Sciences and Techniques, Beni Mellal.
      </span>
    ),
  },
  {
    id: "teaching",
    keywords: ["teaching", "ta", "assistant", "courses"],
    answer: <span>Teaching Assistant for Algorithmics & C Language (Fall 2025).</span>,
  },
  {
    id: "publications",
    keywords: ["publications", "papers", "doi", "journal", "conference"],
    answer: (
      <span>
        See the publications list on <Link href="/publications">Publications</Link> for DOI-linked papers and
        abstracts.
      </span>
    ),
  },
  {
    id: "documents",
    keywords: ["documents", "downloads", "files", "pdf", "slides"],
    answer: (
      <span>
        Downloadable materials are available on <Link href="/documents">Documents</Link>. The CV is at{" "}
        <a href={withBasePath("/cv.pdf")} target="_blank" rel="noreferrer">cv.pdf</a>.
      </span>
    ),
  },
  {
    id: "projects",
    keywords: ["projects", "work", "research project"],
    answer: (
      <span>
        Current research work is summarized on the <Link href="/projects">Projects</Link> page.
      </span>
    ),
  },
  {
    id: "cv",
    keywords: ["cv", "resume", "curriculum", "vitae"],
    answer: (
      <span>
        The latest CV is available on <Link href="/cv">Curriculum Vitae</Link> or directly at{" "}
        <a href={withBasePath("/cv.pdf")} target="_blank" rel="noreferrer">cv.pdf</a>.
      </span>
    ),
  },
  {
    id: "contact",
    keywords: ["contact", "email", "mail", "reach"],
    answer: (
      <span>
        Email: <a href="mailto:mohamed.ech-chebaby@usms.ma">mohamed.ech-chebaby@usms.ma</a>. You can also use the
        contact page: <Link href="/contact">Contact</Link>.
      </span>
    ),
  },
  {
    id: "collaboration",
    keywords: ["collaboration", "collaborate", "partnership", "work together"],
    answer: (
      <span>
        Open to collaborations on IoT security protocols, applied cryptography, and secure healthcare systems.
        Share details via <Link href="/contact">Contact</Link>.
      </span>
    ),
  },
  {
    id: "supervision",
    keywords: ["supervision", "student", "intern", "phd", "msc", "bsc"],
    answer: (
      <span>
        Interested in supervision or internships? Please send your topic and background via{" "}
        <Link href="/contact">Contact</Link>.
      </span>
    ),
  },
];

export const defaultAnswer = (
  <span>
    I can answer questions about research focus, publications, projects, skills, teaching, CV, and contact details.
    Try asking “What is your research focus?” or “How can I contact you?”.
  </span>
);
