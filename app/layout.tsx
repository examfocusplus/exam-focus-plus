import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://examfocusplus.in"),

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
      <head>
        {/* Google AdSense Auto Ads Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1853280728697349"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Google Analytics Script (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z46FW0QVXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z46FW0QVXX');
          `}
        </Script>
      </head>
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