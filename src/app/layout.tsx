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
  title: "Matthew McBride — Making Technology Useful, Usable, and Valuable",
  description:
    "Digital services executive focused on enterprise AI adoption, operating models, and execution at global scale.",
  openGraph: {
    title: "Matthew McBride — Enterprise AI Adoption & Operating Model Execution",
    description:
      "Turning complex technology into usable, governed, and durable enterprise capability.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Matthew McBride — Enterprise AI Adoption & Operating Model Execution",
    description:
      "Turning complex technology into usable, governed, and durable enterprise capability.",
  },
  icons: {
    icon: "/577278.png",
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
