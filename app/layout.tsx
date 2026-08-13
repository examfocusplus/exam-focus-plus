import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Exam Focus Plus",
    template: "%s | Exam Focus Plus",
  },
  description:
    "SSLC, Plus One, Plus Two and Class 5-9 study materials, question papers, answer keys and exam updates for Kerala students.",
  applicationName: "Exam Focus Plus",
  keywords: [
    "Exam Focus Plus",
    "Kerala SSLC 2026",
    "SSLC Onam Exam",
    "Plus One Notes",
    "Plus Two Notes",
    "Question Papers",
    "Answer Keys",
  ],
  verification: {
    google: "dvpLXhHxbvolirYjTcszQY1NEV8hsYolFasav-XYzCQ",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Exam Focus Plus",
              url: "https://examfocusplus.in",
            }),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}