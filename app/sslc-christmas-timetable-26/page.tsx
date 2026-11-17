import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SSLC Christmas Exam Time Table 2026 – Kerala Class 10",
  description:
    "Kerala SSLC Christmas Exam 2026 is expected to start on 8 December and continue until 17 December 2026. The official subject-wise timetable has not been released yet. Check here for updates.",
  keywords: [
    "SSLC Christmas Exam Time Table 2026",
    "SSLC Time Table 2026 Kerala",
    "Kerala SSLC Christmas Exam 2026",
    "Class 10 Christmas Exam 2026",
    "SSLC Exam Dates 2026",
  ],
  alternates: {
    canonical: "/sslc-christmas-timetable-26",
  },
  openGraph: {
    title: "SSLC Christmas Exam Time Table 2026",
    description:
      "Kerala SSLC Christmas Exam 2026 is expected from 8 December to 17 December 2026. Official timetable updates will be published here.",
    url: "https://examfocusplus.in/sslc-christmas-timetable-26",
    siteName: "Exam Focus Plus",
    type: "website",
  },
};

export default function SSLCChristmasTimetablePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-4xl">

        <div className="rounded-3xl bg-gradient-to-r from-green-900 to-emerald-700 p-7 text-white shadow-lg sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-200">
            Kerala SSLC Examination 2026
          </p>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            SSLC Christmas Exam Time Table 2026
          </h1>

          <p className="mt-4 text-base leading-7 text-green-50">
            Expected examination period: 8 December to 17 December 2026.
          </p>
        </div>

        <section className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-slate-900">
            Official Timetable Not Released Yet
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The Kerala SSLC Christmas Examination 2026 is expected to begin
            on 8 December and continue until 17 December 2026, according to
            the available news information.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            The official subject-wise examination timetable has not been
            released yet. The exact examination dates and subject schedule
            will be updated on this page once officially announced.
          </p>
        </section>

        <section className="mt-7 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">
            SSLC Christmas Exam Study Resources
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Students can use the available study materials to prepare for
            the upcoming examination.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link
              href="/sslc-portions-26"
              className="rounded-xl border border-green-200 bg-green-50 p-4 font-semibold text-green-900 transition hover:bg-green-100"
            >
              SSLC Christmas Exam Portions →
            </Link>

            <Link
              href="/sslc"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              Back to SSLC Resources →
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}