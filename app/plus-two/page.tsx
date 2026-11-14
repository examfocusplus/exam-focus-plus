import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plus Two Christmas Exam 2026 | Exam Focus Plus",
  description:
    "Find Kerala Plus Two Christmas Exam 2026 timetable, subject-wise portions, weightage and previous year question papers. Access study resources and exam updates at Exam Focus Plus.",
  alternates: {
    canonical: "/plus-two",
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
            Plus Two Christmas Exam 2026
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Welcome to the Plus Two Christmas Exam 2026 section of Exam Focus
            Plus. This page brings together useful examination resources for
            Kerala Higher Secondary students preparing for their Christmas
            examinations. Students can access the subject-wise examination
            timetable, check the portions and weightage for different subjects,
            and practise using previous year question papers. These resources
            are organised to make exam preparation easier and help students
            plan their revision effectively. The timetable provides examination
            dates and session details, while the portions section offers
            subject-wise PDF materials for reference. Previous year question
            papers can help students understand question patterns and practise
            answering within the examination time. Visit the respective
            sections to view or download the available study materials.
            Exam Focus Plus aims to provide organised and accessible
            educational resources to support students throughout their
            examination preparation.
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
                  Access the examination timetable, subject-wise portions,
                  weightage and previous year question papers in one place.
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