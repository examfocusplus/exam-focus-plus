import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Class 5 Christmas Exam Time Table 2026 | Exam Focus Plus",
  description:
    "Check the Class 5 Christmas Exam Time Table 2026 for Kerala syllabus students. Find subject-wise exam dates and FN and AN examination sessions.",
  keywords: [
    "Class 5 Christmas Exam Time Table 2026",
    "Class 5 Christmas Exam Question Paper 2026",
    "Class 5 Christmas Exam Question Paper 2025",
    "Class 5 Christmas Exam 2026 Kerala",
    "Class 5 exam timetable",
    "Class 5 Kerala syllabus timetable",
    "Class 5 Christmas examination dates",
    "Exam Focus Plus",
  ],
  alternates: {
    canonical: "https://examfocusplus.in/class-5-christmas-timetable-26",
  },
  openGraph: {
    title: "Class 5 Christmas Exam Time Table 2026",
    description:
      "Subject-wise Class 5 Christmas examination dates and sessions for 2026.",
    url: "https://examfocusplus.in/class-5-christmas-timetable-26",
    type: "website",
  },
};

const exams = [
  { date: "08/12/2026", day: "Tuesday", subject: "Language 1", session: "FN" },
  { date: "09/12/2026", day: "Wednesday", subject: "English", session: "FN" },
  { date: "10/12/2026", day: "Thursday", subject: "Social Science", session: "FN" },
  { date: "11/12/2026", day: "Friday", subject: "Chemistry", session: "FN" },
  { date: "14/12/2026", day: "Monday", subject: "Mathematics", session: "FN" },
  { date: "15/12/2026", day: "Tuesday", subject: "Physics", session: "FN" },
  { date: "16/12/2026", day: "Wednesday", subject: "Biology", session: "FN" },
  { date: "16/12/2026", day: "Wednesday", subject: "Malayalam 2", session: "AN" },
  { date: "17/12/2026", day: "Thursday", subject: "Hindi", session: "FN" },
];

export default function Class5TimetablePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-5xl space-y-7">

        <section className="rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-6 text-white shadow-lg sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-100">
            Exam Focus Plus
          </p>

          <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
            CLASS 5 CHRISTMAS EXAM TIME TABLE 2026
          </h1>

          <p className="mt-4 text-sm leading-7 text-blue-50 sm:text-base">
            Find the Class 5 Christmas Exam Time Table 2026 with
            subject-wise examination dates and sessions. Students can
            check the schedule and plan their revision accordingly.
            The timetable includes both Forenoon (FN) and Afternoon
            (AN) examination sessions. Use this schedule to organise
            your study time and prepare for each subject.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <h2 className="mb-5 text-xl font-bold text-slate-800">
            Class 5 Christmas Examination Schedule
          </h2>

          <div className="overflow-hidden">
            <table className="w-full table-fixed border-collapse text-left">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="w-[27%] px-2 py-3 text-xs font-semibold sm:px-4 sm:text-sm">
                    Date
                  </th>
                  <th className="w-[23%] px-1 py-3 text-xs font-semibold sm:px-4 sm:text-sm">
                    Day
                  </th>
                  <th className="w-[32%] px-1 py-3 text-xs font-semibold sm:px-4 sm:text-sm">
                    Subject
                  </th>
                  <th className="w-[18%] px-1 py-3 text-xs font-semibold sm:px-4 sm:text-sm">
                    Session
                  </th>
                </tr>
              </thead>

              <tbody>
                {exams.map((exam, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-white" : "bg-slate-50"
                    }
                  >
                    <td className="border-b border-slate-200 px-2 py-3 text-xs text-slate-700 sm:px-4 sm:text-sm">
                      {exam.date}
                    </td>
                    <td className="border-b border-slate-200 px-1 py-3 text-xs text-slate-700 sm:px-4 sm:text-sm">
                      {exam.day}
                    </td>
                    <td className="break-words border-b border-slate-200 px-1 py-3 text-xs font-semibold text-slate-800 sm:px-4 sm:text-sm">
                      {exam.subject}
                    </td>
                    <td className="border-b border-slate-200 px-1 py-3 text-xs font-bold text-blue-700 sm:px-4 sm:text-sm">
                      {exam.session}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 rounded-lg bg-blue-50 p-4">
            <p className="text-sm leading-6 text-blue-800">
              <strong>Note:</strong> FN means Forenoon and AN means
              Afternoon. Students should confirm the examination
              schedule with their school.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="font-bold text-slate-800">
            Preparation Tips for Class 5 Students
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Follow the examination schedule and prepare one subject
            at a time. Revise textbook lessons, practise questions
            and make a simple daily study plan. Give extra attention
            to topics that need more revision.
          </p>
        </section>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="/pdf/christmas-exam-timetable/class-5-christmas-timetable-26.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
          >
            View Time Table PDF
          </a>

          <a
            href="/pdf/christmas-exam-timetable/class-5-christmas-timetable-26.pdf"
            download
            className="rounded-lg border border-blue-600 bg-white px-5 py-3 text-center text-sm font-semibold text-blue-700 hover:bg-blue-50"
          >
            Download PDF
          </a>
        </div>

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