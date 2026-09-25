import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import {Toaster} from "sonner"

import "./globals.css";

const SITE_URL =
  "https://portfolio-website1-virid.vercel.app";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sohail Khan — Full-Stack Developer",
  description:
    "Portfolio of Sohail Khan, a Full-Stack Developer focused on modern web applications, backend engineering, AI-powered products, and scalable software.",
  keywords: [
    "Sohail Khan",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "AI Developer",
    "Backend Developer",
  ],
  authors: [
    {
      name: "Sohail Khan",
    },
  ],
  creator: "Sohail Khan",
  metadataBase: new URL(SITE_URL),

  openGraph: {
    title: "Sohail Khan — Full-Stack Developer",
    description:
      "Portfolio of Sohail Khan — Full-Stack Developer focused on modern web applications, backend engineering, and AI-powered products.",
    url: SITE_URL,
    siteName: "Sohail Khan Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Sohail Khan — Full-Stack Developer",
    description:
      "Full-Stack Developer focused on modern web applications, backend engineering, and AI-powered products.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sohail Khan",
  url: SITE_URL,
  jobTitle: "Full-Stack Developer",
  sameAs: [
    "https://github.com/Developer-Sohail786",
    "https://www.linkedin.com/in/sohailkhan-dev/",
    "https://x.com/DevSohail786",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexMono.variable}>
        {children}

        <Toaster
        position="bottom-right"
        richColors
        closeButton/>


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              structuredData,
            ),
          }}
        />
      </body>
    </html>
  );
}