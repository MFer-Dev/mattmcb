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
  title: "Matthew McBride",
  description:
    "Strategy, architecture, and delivery leadership for enterprise transformation and technology adoption.",
  openGraph: {
    title: "Matthew McBride",
    description:
      "Strategy, architecture, and delivery leadership for enterprise transformation and technology adoption.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Matthew McBride",
    description:
      "Strategy, architecture, and delivery leadership for enterprise transformation and technology adoption.",
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
