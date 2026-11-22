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
    "Exam Focus Plus is an educational website created to help Kerala students prepare effectively for school examinations. The website provides useful study resources for SSLC, Plus One, Plus Two, and Classes 5 to 9. Students can find Christmas examination timetables, syllabus portions, previous year question papers, model question papers, answer keys, and other learning materials in one place. Our resources are organised class-wise and subject-wise to make it easier for students to find the materials they need. We aim to support students with accessible educational content that helps them understand their syllabus, plan their study schedules, practise important questions, and revise lessons before examinations. Whether you are preparing for school-level Christmas examinations or higher secondary examinations, Exam Focus Plus helps you access relevant study materials conveniently. Explore our latest educational updates, examination resources, and learning content to make your exam preparation more organised and effective.",

  applicationName: "Exam Focus Plus",

  keywords: [
    "Exam Focus Plus",
    "Kerala school study materials",
    "SSLC Christmas exam time table 2026",
    "Class 9 Christmas exam time table 2026",
    "Class 8 Christmas exam time table 2026",
    "Class 7 Christmas exam time table 2026",
    "Class 6 Christmas exam time table 2026",
    "Class 5 Christmas exam time table 2026",
    "SSLC Christmas exam question papers",
    "Class 5 to 9 Christmas exam question papers",
    "Plus Two Christmas exam question paper 2026",
    "Plus One Christmas exam question paper 2026",
    "Kerala SSLC study materials",
    "Plus One Notes",
    "Plus Two Notes",
    "Christmas exam portions Kerala",
    "Previous year question papers",
    "Model question papers",
    "Answer Keys",
    "Kerala exam updates",
  ],

  verification: {
    google: "99WfPH3Z6j2KUXqMAJcnOT75_G8JrlqRI6PXODNviWE",
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