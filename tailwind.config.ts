import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1120",
        slate: "#111827",
        mist: "#e2e8f0",
        paper: "#f8fafc",
        accent: "#1d4ed8",
        accentSoft: "#93c5fd",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "ui-serif", "Georgia"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 10px 30px -15px rgba(15, 23, 42, 0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
