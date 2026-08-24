import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mattmcb.me"),
  title: {
    default: "Matthew McBride — Human-Centered Technology Executive | Enterprise AI & Transformation",
    template: "%s  |  Matthew McBride",
  },
  description:
    "Matthew McBride is an enterprise AI and transformation executive helping large organizations turn AI into operating reality and build toward the autonomous enterprise — keeping AI in service of the human experience.",
  keywords: [
    "Matthew McBride",
    "Matt McBride",
    "Enterprise AI",
    "Autonomous enterprise",
    "Chief Digital Officer",
    "Chief Transformation Officer",
    "Chief Technology Officer",
    "Chief Experience Officer",
    "Digital transformation",
    "AI strategy",
  ],
  authors: [{ name: "Matthew McBride" }],
  alternates: {
    canonical: new URL("https://www.mattmcb.me/"),
  },
  openGraph: {
    type: "website",
    url: "https://www.mattmcb.me/",
    siteName: "Matthew McBride",
    title: "Matthew McBride — Human-Centered Technology Executive | Enterprise AI & Transformation",
    description:
      "Helping large enterprises turn AI into operating reality and build toward the autonomous enterprise.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Matthew McBride — Human-Centered Technology Executive | Enterprise AI & Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew McBride — Human-Centered Technology Executive | Enterprise AI & Transformation",
    description:
      "Helping large enterprises turn AI into operating reality and build toward the autonomous enterprise.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
