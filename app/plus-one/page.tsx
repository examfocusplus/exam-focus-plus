import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Plus One Christmas Exam Question Papers 2026, Timetable & Portions | Exam Focus Plus",

  description:
    "Find Kerala Plus One Christmas Exam 2026 question papers, examination timetable, subject-wise portions, weightage and Plus One Improvement Exam resources.",

  keywords: [
    "Plus One Christmas Exam 2026",
    "Plus One Christmas Exam Question Paper 2026",
    "Plus One Christmas Question Papers",
    "Kerala Plus One Christmas Exam",
    "Plus One Christmas Exam Timetable 2026",
    "Plus One Christmas Exam Portions",
    "Plus One Previous Year Question Papers",
    "Plus One Exam Preparation Kerala",
    "Plus One Improvement Exam 2026",
    "Exam Focus Plus",
  ],

  alternates: {
    canonical: "/plus-one",
  },

  openGraph: {
    title: "Plus One Christmas Exam 2026 | Exam Focus Plus",
    description:
      "Plus One Christmas Exam question papers, timetable, subject-wise portions and weightage for Kerala Higher Secondary students.",
    url: "https://examfocusplus.in/plus-one",
    siteName: "Exam Focus Plus",
    type: "website",
  },
};

export default function PlusOnePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        <section className="mb-8">
          <p className="mb-2 font-semibold tracking-wide text-blue-700">
            EXAM FOCUS PLUS
          </p>

          <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            Plus One Christmas Exam 2026 – Question Papers, Timetable & Portions
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Welcome to the Plus One Christmas Exam 2026 resource section
            of Exam Focus Plus. Kerala Higher Secondary Plus One students
            can find useful examination information and study materials
            here. Students preparing for the Plus One Christmas examination
            can explore the subject-wise examination timetable, portions
            and weightage, and previous year question papers.

            The timetable section will provide examination dates and
            session details. The portions section will help students
            identify the chapters and topics included in the examination.
            Previous year question papers can help students understand
            question patterns and practise answering within the examination
            time. This page also provides direct access to Plus One
            Improvement Exam 2026 resources, including available question
            papers and answer key materials.

            All available resources are organised into separate sections
            to make exam preparation easier. Visit the respective sections
            below to access the study materials and examination updates.
            Exam Focus Plus aims to provide organised and accessible
            educational resources for Kerala Higher Secondary students.
          </p>
        </section>

        <section className="mb-8">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid sm:grid-cols-[200px_1fr]">

              <div className="flex min-h-44 items-center justify-center bg-gradient-to-br from-green-950 via-green-800 to-emerald-600 p-6 text-center text-white">
                <div>
                  <div className="text-5xl">🎄</div>
                  <p className="mt-3 text-lg font-extrabold">
                    PLUS ONE
                  </p>
                  <p className="text-sm font-semibold">
                    CHRISTMAS EXAM 2026
                  </p>
                  <p className="mt-2 text-xs text-green-100">
                    Exam Focus Plus
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Plus One Christmas Exam 2026
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Access Plus One Christmas Exam question papers,
                  examination timetable, subject-wise portions
                  and weightage in one place. Useful study resources
                  for Kerala Higher Secondary students.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href="/plus-one-christmas-timetable-2026"
                    className="rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
                  >
                    📅 Time Table
                  </a>

                  <a
                    href="/plus-one-portions-26"
                    className="rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
                  >
                    📚 Portions & Weightage
                  </a>

                  <a
                    href="/plus-one-previous-year-questions-26"
                    className="rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
                  >
                    📝 Previous Year Papers
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-blue-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Plus One Improvement Exam 2026
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Access Plus One Improvement Exam question papers
                and available answer key resources. Find subject-wise
                examination materials and PDF resources for practice.
              </p>
            </div>

            <a
              href="/plus-one-improvement-26"
              className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              View Resources →
            </a>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Exam Focus Plus YouTube Channel
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Watch educational videos, exam updates and useful study
                materials on our YouTube channel.
              </p>
            </div>

            <a
              href="https://www.youtube.com/@examfocusplus-hg7hb"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700"
            >
              ▶️ Visit YouTube Channel
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}