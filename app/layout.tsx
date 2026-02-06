import { Inter, Source_Serif_4 } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import Chatbot from "@/components/Chatbot";
import { Analytics } from "./analytics";
import { baseMetadata } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}
      suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-soft"
          >
            Skip to main content
          </a>
          <Analytics />
          <Navbar />
          <main id="main" className="mx-auto w-full max-w-6xl px-6 py-12">
            {children}
          </main>
          <Chatbot />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
