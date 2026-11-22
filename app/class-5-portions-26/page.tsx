import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Class 5 Christmas Exam Portions 2026 | Exam Focus Plus",
  description:
    "Check Class 5 Christmas Exam Portions 2026 for Kerala syllabus students. Find useful subject-wise exam preparation information and access Class 5 Christmas exam question papers through Exam Focus Plus.",
  keywords: [
    "Class 5 Christmas Exam Portions 2026",
    "Class 5 Christmas Exam Question Paper 2026",
    "Class 5 Christmas Exam Question Paper 2025",
    "Class 5 Christmas Exam Time table 2026",
    "Class 5 Kerala syllabus portions",
    "Class 5 Christmas examination",
    "Class 5 exam preparation",
    "Class 5 Christmas question papers",
    "Class 5 previous year question papers",
    "Kerala Christmas Exam 2026",
    "Exam Focus Plus",
  ],
  alternates: {
    canonical: "https://examfocusplus.in/class-5-portions-26",
  },
  openGraph: {
    title: "Class 5 Christmas Exam Portions 2026",
    description:
      "Class 5 Christmas examination portions and preparation information for Kerala syllabus students.",
    url: "https://examfocusplus.in/class-5-portions-26",
    type: "website",
  },
};

export default function Class5PortionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-4xl space-y-6">

        <section className="rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-6 text-white shadow-lg sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-100">
            Exam Focus Plus
          </p>

          <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
            Class 5 Christmas Exam Portions 2026
          </h1>

          <p className="mt-4 text-sm leading-7 text-blue-50 sm:text-base">
            Prepare for the Class 5 Christmas Examination 2026 with a
            well-organised study plan and regular revision. Students should
            review the lessons covered in their classrooms and practise
            questions from all subjects. Focus on understanding important
            concepts, reading textbooks carefully and revising classroom
            notes. Give sufficient time to each subject and pay extra
            attention to topics that need more practice. A consistent
            study routine can help students improve their understanding
            and prepare confidently for the Christmas examination.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800">
            Class 5 Christmas Exam Preparation
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Create a simple daily timetable and divide your study time
            among different subjects. Read each lesson, revise important
            points and practise textbook exercises regularly. Students
            can also use previous year question papers to understand
            different question types and improve their exam preparation.
            Regular revision and proper time management can make learning
            easier and more effective.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/class-5-previous-year-questions-26"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              View Class 5 Question Papers
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
            href="/class-5"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            ← Back to Class 5
          </Link>
        </div>

      </div>
    </main>
  );
}