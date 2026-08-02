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
  title: "Exam Focus Plus | Kerala Exam Preparation",
  description:
    "SSLC, Plus One, Plus Two and Class 5-9 study materials, question papers, answer keys and exam updates for Kerala students.",
  keywords: [
    "Exam Focus Plus",
    "Kerala SSLC 2026",
    "SSLC Onam Exam",
    "Plus One Notes",
    "Plus Two Notes",
    "Kerala School Exam",
    "Question Papers",
    "Answer Keys",
  ],
  authors: [{ name: "Exam Focus Plus" }],
  openGraph: {
    title: "Exam Focus Plus",
    description:
      "Kerala students' exam preparation platform with notes, question papers and updates.",
    type: "website",
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
        className={${geistSans.variable} ${geistMono.variable} antialiased}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}