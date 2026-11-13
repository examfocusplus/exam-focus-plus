import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plus Two Christmas Exam Time Table 2026 | Exam Focus Plus",
  description:
    "Plus Two Science Christmas Exam Time Table 2026 for Mathematics, Biology and Computer Science students. Check exam dates, subjects and timings and download the timetable PDF.",
  alternates: {
    canonical: "/plus-two-science-christmas-timetable-2026",
  },
};

const timetable = [
  { date: "09/12/2026", day: "Wednesday", subject: "Physics", time: "FN" },
  { date: "10/12/2026", day: "Thursday", subject: "2nd Language", time: "FN" },
  { date: "11/12/2026", day: "Friday", subject: "Mathematics", time: "FN" },
  { date: "14/12/2026", day: "Monday", subject: "Chemistry", time: "FN" },
  { date: "15/12/2026", day: "Tuesday", subject: "Biology", time: "FN" },
  { date: "16/12/2026", day: "Wednesday", subject: "Computer Science", time: "FN" },
  { date: "17/12/2026", day: "Thursday", subject: "English", time: "FN" },
];

export default function PlusTwoScienceTimetablePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-3 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-4xl">

        <Link
          href="/plus-two"
          className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
        >
          ← Back to Plus Two
        </Link>

        <header className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-700 p-6 text-white shadow-lg sm:p-9">
          <div className="mb-4 flex items-center gap-3 text-4xl">
            <span>📅</span>
            <span>📚</span>
            <span>🎓</span>
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-200">
            Exam Focus Plus
          </p>

          <h1 className="text-2xl font-extrabold leading-tight sm:text-4xl">
            Plus Two Christmas Exam Time Table 2026
          </h1>

          <p className="mt-3 text-sm text-blue-100">
            Kerala Higher Secondary – Science Stream
          </p>
        </header>

        <section className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="mb-4 text-xl font-bold text-slate-900">
            Plus Two Science Christmas Examination 2026
          </h2>

          <p className="text-sm leading-7 text-slate-700">
            The Plus Two Christmas Examination 2026 is an important academic
            examination for Higher Secondary second-year students following
            the Kerala State syllabus. This page provides the subject-wise
            examination timetable for Plus Two Science students, including
            those studying Mathematics, Biology and Computer Science
            combinations. The schedule includes the examination date, day,
            subject and session to help students organise their preparation
            effectively. Students can check the dates for Physics, Chemistry,
            Mathematics, Biology, Computer Science, English and Second
            Language in one place. The timetable is presented in a simple,
            mobile-friendly format so that students can easily view it on
            their phones without horizontal scrolling. A PDF download option
            is also provided for students who wish to save the timetable
            for quick reference while planning their Christmas examination
            preparation.
          </p>
        </section>

        <section className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="bg-blue-900 p-4 text-white sm:p-5">
            <h2 className="text-lg font-bold">
              📋 Examination Time Table
            </h2>
            <p className="mt-1 text-xs text-blue-100">
              Plus Two Science – Christmas Exam 2026
            </p>
          </div>

          <div className="p-2 sm:p-5">
            <table className="w-full table-fixed border-collapse text-center">
              <thead>
                <tr className="bg-blue-50 text-slate-800">
                  <th className="w-[27%] border border-slate-200 px-1 py-3 text-[11px] font-bold sm:text-sm">
                    Date
                  </th>
                  <th className="w-[29%] border border-slate-200 px-1 py-3 text-[11px] font-bold sm:text-sm">
                    Day
                  </th>
                  <th className="w-[32%] border border-slate-200 px-1 py-3 text-[11px] font-bold sm:text-sm">
                    Subject
                  </th>
                  <th className="w-[12%] border border-slate-200 px-1 py-3 text-[11px] font-bold sm:text-sm">
                    Time
                  </th>
                </tr>
              </thead>

              <tbody>
                {timetable.map((item, index) => (
                  <tr
                    key={item.date}
                    className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-1 py-3 text-[10px] font-semibold text-slate-800 sm:text-sm">
                      {item.date}
                    </td>
                    <td className="border border-slate-200 px-1 py-3 text-[10px] text-slate-700 sm:text-sm">
                      {item.day}
                    </td>
                    <td className="break-words border border-slate-200 px-1 py-3 text-[10px] font-semibold text-slate-800 sm:text-sm">
                      {item.subject}
                    </td>
                    <td className="border border-slate-200 px-1 py-3 text-[10px] font-bold text-blue-800 sm:text-sm">
                      {item.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="mt-3 text-center text-xs text-slate-500">
              FN – Forenoon
            </p>
          </div>
        </section>

        <section className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-center sm:p-7">
          <div className="text-4xl">📥</div>

          <h2 className="mt-3 text-xl font-extrabold text-slate-900">
            Download Time Table PDF
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Download and save the Plus Two Science Christmas Exam 2026
            timetable for future reference.
          </p>

          <a
            href="/pdf/christmas-exam-timetable/plus-two-christmas-exam-timetable-2026.pdf"
            download
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
          >
            ⬇️ Download PDF
          </a>
        </section>

        <footer className="mt-8 text-center">
          <Link
            href="/plus-two"
            className="text-sm font-bold text-blue-700 hover:underline"
          >
            ← Return to Plus Two Page
          </Link>
          <p className="mt-4 text-xs text-slate-500">
            Exam Focus Plus | Kerala Higher Secondary Exam Updates
          </p>
        </footer>

      </div>
    </main>
  );
}