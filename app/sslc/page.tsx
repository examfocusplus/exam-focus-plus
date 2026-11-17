import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "SSLC Christmas Exam 2026 – Time Table, Portions & Question Papers | Exam Focus Plus",
  description:
    "Kerala SSLC Christmas Exam 2026 is expected to start on 8 December and continue until 17 December 2026. Get timetable updates, SSLC exam portions PDFs and previous year question papers at Exam Focus Plus.",
  keywords: [
    "SSLC Christmas Exam 2026",
    "SSLC Christmas Exam Time Table 2026",
    "Kerala SSLC Time Table 2026",
    "SSLC Exam Dates 2026",
    "Class 10 Christmas Exam 2026",
    "SSLC Christmas Exam Portions 2026",
    "Kerala SSLC Portions PDF",
    "SSLC Previous Year Question Papers",
    "SSLC Question Papers PDF",
    "Kerala Class 10 Study Materials",
    "SSLC Exam Preparation 2026",
    "Exam Focus Plus",
  ],
  alternates: {
    canonical: "/sslc",
  },
  openGraph: {
    title:
      "SSLC Christmas Exam 2026 – Time Table, Portions & Question Papers",
    description:
      "Kerala SSLC Christmas Exam 2026 is expected from 8 December to 17 December 2026. Explore SSLC portions, timetable updates and study resources.",
    url: "https://examfocusplus.in/sslc",
    siteName: "Exam Focus Plus",
    type: "website",
  },
};

const resources = [
  {
    title: "Christmas Exam Time Table",
    description:
      "Kerala SSLC Christmas Exam 2026 is expected to start on 8 December and continue until 17 December 2026. The official subject-wise timetable has not been released yet. It will be updated here once officially announced.",
    icon: "📅",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    href: "/sslc-christmas-timetable-26",
    button: "View Time Table",
    status: "Updates Soon",
  },
  {
    title: "Christmas Exam Portions",
    description:
      "Find SSLC Class 10 subject-wise Christmas exam portions PDFs. Access the available study materials and prepare for your examinations.",
    icon: "📚",
    color: "bg-green-50",
    iconColor: "text-green-600",
    href: "/sslc-portions-26",
    button: "View Portions",
    status: "PDF Resources",
  },
  {
    title: "Previous Year Question Papers",
    description:
      "Practise with SSLC previous year question papers to understand question patterns and improve your examination preparation.",
    icon: "📝",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    href: "/sslc-previous-year-questions-26",
    button: "View Question Papers",
    status: "Coming Soon",
  },
];

export default function SSLCPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <section className="relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-br from-green-800 via-green-700 to-emerald-900 px-5 py-12 text-center text-white shadow-lg sm:px-10 sm:py-16">
          <div className="absolute -right-10 -top-12 text-8xl opacity-10 sm:text-9xl">
            🎄
          </div>

          <div className="relative">
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-green-200">
              EXAM FOCUS PLUS
            </p>

            <div className="mb-4 text-5xl sm:text-6xl">
              🎄
            </div>

            <h1 className="text-3xl font-extrabold sm:text-5xl">
              SSLC Christmas Exam 2026
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-green-100 sm:text-base">
              Your study companion for Kerala SSLC Christmas
              Examination 2026. Find exam portions, timetable
              updates and question papers in one place.
            </p>

            <div className="mt-7 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              Class 10 Study Resources
            </div>
          </div>
        </section>

        <section className="mb-10">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              SSLC Christmas Exam Resources
            </h2>

            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              Access useful study materials for your examination preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={
                    "mb-5 flex h-14 w-14 items-center justify-center rounded-2xl " +
                    item.color
                  }
                >
                  <span className="text-3xl">{item.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-5">
                  <span className="mb-4 inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                    {item.status}
                  </span>

                  <Link
                    href={item.href}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-800"
                  >
                    {item.button}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-green-100 bg-white p-6 text-center shadow-sm sm:p-8">
          <div className="mb-3 text-3xl">📖</div>

          <h2 className="text-xl font-bold text-gray-900">
            Prepare Better with Exam Focus Plus
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600">
            Explore subject-wise study materials and examination
            resources for Kerala students. We will update this page
            as more SSLC Christmas examination resources become available.
          </p>

          <a
            href="https://www.youtube.com/@examfocusplus-hg7hb"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            ▶️ Visit Our YouTube Channel
          </a>
        </section>

      </div>
    </main>
  );
}