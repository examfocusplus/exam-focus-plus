import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Plus Two Christmas Exam Question Papers 2026, Timetable & Portions | Exam Focus Plus",

  description:
    "Find Kerala Plus Two Christmas Exam Question Papers 2026, previous year question papers, subject-wise exam timetable, portions and weightage for Plus Two students.",

  keywords: [
    "Plus Two Christmas Exam Question Paper 2026",
    "Plus Two Christmas Exam 2026",
    "Plus Two Christmas Question Papers",
    "Kerala Plus Two Christmas Exam",
    "Plus Two Christmas Exam Timetable 2026",
    "Plus Two Christmas Exam Portions",
    "Plus Two Previous Year Question Papers",
    "Plus Two Exam Preparation Kerala",
    "Plus Two Physics Question Paper",
    "Plus Two Chemistry Question Paper",
    "Plus Two Maths Question Paper",
    "Plus Two Biology Question Paper",
    "Exam Focus Plus",
  ],

  alternates: {
    canonical: "/plus-two",
  },

  openGraph: {
    title: "Plus Two Christmas Exam 2026 | Exam Focus Plus",
    description:
      "Plus Two Christmas Exam question papers, timetable, subject-wise portions and weightage for Kerala Higher Secondary students.",
    url: "https://examfocusplus.in/plus-two",
    siteName: "Exam Focus Plus",
    type: "website",
  },
};

export default function PlusTwoPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        <section className="mb-8">
          <p className="mb-2 font-semibold tracking-wide text-blue-700">
            EXAM FOCUS PLUS
          </p>

          <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            Plus Two Christmas Exam 2026 – Question Papers, Timetable & Portions
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Welcome to the Plus Two Christmas Exam 2026 resource section of
            Exam Focus Plus. Kerala Higher Secondary Plus Two students can
            find useful examination materials and study resources here.
            Students looking for Plus Two Christmas Exam question papers
            can explore the available previous year question papers and
            practise subject-wise questions for better exam preparation.

            This page also provides the Plus Two Christmas Exam timetable,
            subject-wise portions and weightage information. Students can
            check examination dates, review the portions for each subject
            and download available PDF study materials. Resources for
            Physics, Chemistry, Mathematics, Biology, Computer Science
            and English are organised to make revision easier.

            Whether you are preparing for the Plus Two Christmas examination
            or looking for previous question papers, this page brings
            together the available resources in one place. Visit the
            respective sections below to access the timetable, portions
            and question papers. Exam Focus Plus aims to support Kerala
            Higher Secondary students with organised and accessible
            educational resources.
          </p>
        </section>

        <section className="mb-8">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid sm:grid-cols-[200px_1fr]">

              <div className="flex min-h-44 items-center justify-center bg-gradient-to-br from-green-950 via-green-800 to-emerald-600 p-6 text-center text-white">
                <div>
                  <div className="text-5xl">🎄</div>
                  <p className="mt-3 text-lg font-extrabold">
                    PLUS TWO
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
                  Plus Two Christmas Exam 2026
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Access Plus Two Christmas Exam question papers,
                  examination timetable, subject-wise portions and
                  weightage in one place. Useful resources for Kerala
                  Higher Secondary students.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href="/plus-two-science-christmas-timetable-2026"
                    className="rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
                  >
                    📅 Time Table
                  </a>

                  <a
                    href="/plus-two-portions-26"
                    className="rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
                  >
                    📚 Portions & Weightage
                  </a>

                  <a
                    href="/plus-two-previous-year-questions-26"
                    className="rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
                  >
                    📝 Previous Year Papers
                  </a>
                </div>
              </div>

            </div>
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