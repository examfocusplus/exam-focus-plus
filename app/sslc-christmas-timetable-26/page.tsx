import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SSLC Christmas Exam Time Table 2026 | Kerala",
  description:
    "Check the Kerala SSLC Christmas Exam Time Table 2026 with subject-wise exam dates and FN/AN sessions. View and download the SSLC Christmas examination timetable PDF.",
  keywords: [
    "SSLC Christmas Exam Time Table 2026",
    "SSLC Christmas Exam Question Paper 2026",
    "SSLC Christmas Exam Question Paper 2025",
    "Kerala SSLC Time Table 2026",
    "SSLC Christmas Exam Dates 2026",
    "Class 10 Christmas Exam Time Table",
    "SSLC December Exam 2026",
    "SSLC Exam Schedule Kerala",
    "SSLC Timetable PDF",
    "Exam Focus Plus",
  ],
  alternates: {
    canonical: "/sslc-christmas-timetable-26",
  },
};

const exams = [
  { date: "08/12/2026", day: "Tuesday", subject: "Language 1", session: "FN" },
  { date: "09/12/2026", day: "Wednesday", subject: "English", session: "FN" },
  { date: "10/12/2026", day: "Thursday", subject: "Social", session: "FN" },
  { date: "11/12/2026", day: "Friday", subject: "Chemistry", session: "FN" },
  { date: "14/12/2026", day: "Monday", subject: "Maths", session: "FN" },
  { date: "15/12/2026", day: "Tuesday", subject: "Physics", session: "FN" },
  { date: "16/12/2026", day: "Wednesday", subject: "Biology", session: "FN" },
  { date: "16/12/2026", day: "Wednesday", subject: "Malayalam 2", session: "AN" },
  { date: "17/12/2026", day: "Thursday", subject: "Hindi", session: "FN" },
];

const pdfPath = "/pdf/christmas-exam-timetable/sslc-christmas-timetable-26.pdf";

export default function SSLCTimetablePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        <section className="mb-8 rounded-3xl bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 px-5 py-10 text-center text-white shadow-lg sm:px-10 sm:py-12">
          <p className="mb-3 text-xs font-bold tracking-widest text-green-200">
            EXAM FOCUS PLUS
          </p>

          <div className="mb-3 text-5xl">📅</div>

          <h1 className="text-2xl font-extrabold sm:text-4xl">
            SSLC CHRISTMAS EXAM TIME TABLE 2026
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-green-100 sm:text-base">
            Kerala SSLC Class 10 Christmas Examination 2026
            subject-wise timetable with examination dates and sessions.
          </p>
        </section>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-5 text-center">
            <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
              Examination Schedule
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              December 2026
            </p>
          </div>

          <div className="hidden overflow-hidden rounded-xl border border-slate-200 sm:block">
            <table className="w-full table-fixed text-left text-sm">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="w-[22%] px-4 py-4">Date</th>
                  <th className="w-[23%] px-4 py-4">Day</th>
                  <th className="w-[35%] px-4 py-4">Subject</th>
                  <th className="w-[20%] px-4 py-4 text-center">Session</th>
                </tr>
              </thead>

              <tbody>
                {exams.map((exam, index) => (
                  <tr
                    key={index}
                    className="border-t border-slate-100 even:bg-slate-50"
                  >
                    <td className="px-4 py-4 font-semibold text-slate-700">
                      {exam.date}
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      {exam.day}
                    </td>
                    <td className="px-4 py-4 font-semibold text-slate-800">
                      {exam.subject}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-flex rounded-full bg-green-100 px-3 py-1 font-bold text-green-800">
                        {exam.session}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-3 sm:hidden">
            {exams.map((exam, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-green-700">
                      {exam.day}
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-800">
                      {exam.date}
                    </p>
                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                    {exam.session}
                  </span>
                </div>

                <div className="mt-3 border-t border-slate-200 pt-3">
                  <p className="font-bold text-slate-900">
                    {exam.subject}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-slate-600">
            <span>
              <strong className="text-green-700">FN</strong> – Forenoon
            </span>
            <span>
              <strong className="text-green-700">AN</strong> – Afternoon
            </span>
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-green-100 bg-white p-5 text-center shadow-sm sm:p-7">
          <div className="mb-3 text-3xl">📄</div>

          <h2 className="text-xl font-extrabold text-slate-900">
            Download SSLC Christmas Exam Time Table 2026
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            View or download the complete timetable in PDF format.
          </p>

          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-800"
            >
              View PDF
            </a>

            <a
              href={pdfPath}
              download="sslc-christmas-timetable-26.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
            >
              Download PDF
            </a>
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/sslc"
            className="inline-flex items-center gap-2 rounded-xl border border-green-700 px-5 py-3 text-sm font-bold text-green-800 transition hover:bg-green-50"
          >
            ← Back to SSLC
          </Link>
        </div>

      </div>
    </main>
  );
}