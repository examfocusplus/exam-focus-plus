import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Class 6 Christmas Exam Portions 2026 | Exam Focus Plus",
  description:
    "Check Class 6 Christmas Exam Portions 2026. Get useful exam preparation information and access Class 6 Christmas exam question papers through Exam Focus Plus.",
  keywords: [
    "Class 6 Christmas Exam Portions 2026",
    "Class 6 Christmas Exam Question Paper 2026",
    "Class 6 Christmas Exam Question Paper 2025",
    "Class 6 portions Kerala",
    "Class 6 Christmas Exam",
    "Class 6 exam preparation",
    "Class 6 question papers",
    "Kerala syllabus Class 6",
    "Exam Focus Plus",
  ],
  alternates: {
    canonical: "https://examfocusplus.in/class-6-portions-26",
  },
  openGraph: {
    title: "Class 6 Christmas Exam Portions 2026",
    description:
      "Class 6 Christmas exam portions and preparation information for Kerala syllabus students.",
    url: "https://examfocusplus.in/class-6-portions-26",
    type: "website",
  },
};

export default function Class6PortionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-4xl space-y-6">

        <section className="rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-6 text-white shadow-lg sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-100">
            Exam Focus Plus
          </p>

          <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
            Class 6 Christmas Exam Portions 2026
          </h1>

          <p className="mt-4 text-sm leading-7 text-blue-50 sm:text-base">
            Prepare for the Class 6 Christmas Examination 2026 with a clear
            study plan and regular revision. Students should review the
            chapters covered in their classes, practise important questions,
            and revise each subject carefully before the examination.
            Focus on understanding concepts rather than memorising answers.
            Regular practice and proper time management can help students
            prepare confidently for their exams.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800">
            Class 6 Christmas Exam Preparation
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Make a daily study timetable and give enough time to every
            subject. Read your textbooks, revise classroom notes, and
            practise questions regularly. Students can also use previous
            question papers to understand the examination pattern and
            improve their preparation.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/class-6-previous-year-questions-26"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              View Class 6 Question Papers
            </Link>

            <a
              href="https://www.youtube.com/@examfocusplus-hg7hb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-red-200 bg-red-50 px-5 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100"
            >
              Visit Our YouTube Channel
            </a>
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/class-6"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            ← Back to Class 6
          </Link>
        </div>

      </div>
    </main>
  );
}