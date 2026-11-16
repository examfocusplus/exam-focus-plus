import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "SSLC Christmas Exam Time Table 2026 – Kerala Class 10 | Exam Focus Plus",
  description:
    "Kerala SSLC Christmas Exam 2026 is expected to be conducted from 8 December to 17 December 2026. Check the subject-wise exam timetable, dates and schedule. The official timetable will be updated here once released.",
  keywords: [
    "SSLC Christmas Exam Time Table 2026",
    "SSLC Time Table 2026",
    "Kerala SSLC Christmas Exam 2026",
    "Class 10 Christmas Exam Time Table",
    "SSLC December Exam Schedule 2026",
    "SSLC Exam Dates December 2026",
    "Kerala Class 10 Exam Schedule",
    "SSLC Subject Wise Timetable",
    "SSLC Exam Time Table PDF",
    "Exam Focus Plus",
  ],
  alternates: {
    canonical: "/sslc-christmas-timetable-26",
  },
  openGraph: {
    title: "SSLC Christmas Exam Time Table 2026",
    description:
      "Kerala SSLC Christmas Exam 2026 is expected from 8 December to 17 December 2026. Check the latest timetable updates on Exam Focus Plus.",
    url: "https://examfocusplus.in/sslc-christmas-timetable-26",
    siteName: "Exam Focus Plus",
    type: "website",
  },
};

export default function SSLCTimetablePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">

        <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-green-800 via-green-700 to-emerald-900 px-5 py-10 text-center text-white shadow-lg sm:px-10 sm:py-14">
          <div className="mb-3 text-5xl">📅</div>

          <p className="mb-2 text-sm font-bold tracking-widest text-green-200">
            EXAM FOCUS PLUS
          </p>

          <h1 className="text-3xl font-extrabold sm:text-4xl">
            SSLC Christmas Exam Time Table 2026
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-green-100 sm:text-base">
            Kerala SSLC Class 10 Christmas Examination
            Schedule – December 2026
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="text-center">
            <div className="mb-4 text-5xl">🕒</div>

            <h2 className="text-2xl font-bold text-gray-900">
              Official Timetable Not Released Yet
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              The SSLC Christmas Examination 2026 is expected
              to be conducted from 8 December to 17 December
              2026. The official subject-wise timetable has
              not been released yet.
            </p>

            <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
              Once the official timetable becomes available,
              we will update this page with the complete
              examination schedule, including examination
              dates and subjects.
            </p>

            <div className="mt-6 rounded-xl bg-green-50 p-4 text-sm font-medium leading-6 text-green-800">
              Visit Exam Focus Plus regularly for the latest
              SSLC Christmas Exam 2026 timetable updates.
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-gray-900">
            SSLC Christmas Exam 2026 – Related Resources
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Link
              href="/sslc-portions-26"
              className="rounded-xl border border-green-200 bg-green-50 p-4 font-semibold text-green-800 transition hover:bg-green-100"
            >
              📚 SSLC Exam Portions →
            </Link>

            <Link
              href="/sslc-previous-year-questions-26"
              className="rounded-xl border border-blue-200 bg-blue-50 p-4 font-semibold text-blue-800 transition hover:bg-blue-100"
            >
              📝 Previous Year Question Papers →
            </Link>
          </div>
        </section>

        <div className="mt-8 flex flex-wrap justify-center gap-3 pb-6">
          <Link
            href="/sslc"
            className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            ← Back to SSLC
          </Link>

          <Link
            href="/"
            className="rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Home
          </Link>
        </div>

      </div>
    </main>
  );
}