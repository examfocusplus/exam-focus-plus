import type { Metadata } from "next";
import {
  CalendarDays,
  Clock,
  BookOpen,
  FileText,
  Eye,
  Download
} from "lucide-react";

export const metadata: Metadata = {
  title: "Class 9 Christmas Exam Time Table 2026 PDF – Kerala",
  description:
    "Download Kerala Class 9 Christmas Exam Time Table 2026 PDF. Check subject-wise exam dates and FN, AN timings for Language 1, Hindi, English, Social Science, Physics, Maths, Malayalam 2, Biology, Chemistry and Arts.",
  keywords: [
    "Class 9 Christmas Exam Time Table 2026",
    "Kerala Class 9 Time Table 2026",
    "Class 9 Christmas Exam 2026",
    "9th Standard Christmas Exam Time Table",
    "Class 9 Exam Date 2026",
    "Kerala Class 9 Exam Schedule",
    "Class 9 Christmas Exam Timetable PDF",
    "Class 9 Language 1 Exam",
    "Class 9 Hindi Exam 2026",
    "Class 9 English Exam 2026",
    "Class 9 Social Science Exam 2026",
    "Class 9 Maths Exam 2026",
    "Class 9 Christmas Exam PDF Download",
    "Exam Focus Plus"
  ],
  openGraph: {
    title: "Class 9 Christmas Exam Time Table 2026",
    description:
      "Check and download Kerala Class 9 Christmas Exam 2026 timetable with subject-wise dates and FN, AN timings.",
    type: "website"
  }
};

const pdfPath =
  "/pdf/christmas-exam-timetable/class-9-christmas-exam-timetable-26.pdf";

const timetable = [
  { date: "08/12/2026", day: "Tuesday", subject: "Language 1", session: "FN" },
  { date: "08/12/2026", day: "Tuesday", subject: "Hindi", session: "AN" },
  { date: "09/12/2026", day: "Wednesday", subject: "English", session: "FN" },
  { date: "10/12/2026", day: "Thursday", subject: "Social Science", session: "FN" },
  { date: "11/12/2026", day: "Friday", subject: "Physics", session: "FN" },
  { date: "14/12/2026", day: "Monday", subject: "Maths", session: "FN" },
  { date: "15/12/2026", day: "Tuesday", subject: "Malayalam 2", session: "FN" },
  { date: "15/12/2026", day: "Tuesday", subject: "Biology", session: "AN" },
  { date: "16/12/2026", day: "Wednesday", subject: "Chemistry", session: "FN" },
  { date: "17/12/2026", day: "Thursday", subject: "Arts", session: "FN" }
];

export default function Class9ChristmasTimetablePage() {
  return (
    <main className="mx-auto max-w-5xl px-3 py-6 sm:px-6 sm:py-10">
      <div className="mb-6 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          <CalendarDays size={17} />
          Kerala Class 9
        </div>

        <h1 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white sm:text-3xl">
          CLASS 9 CHRISTMAS EXAM TIME TABLE 2026
        </h1>

        <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
          Check the Kerala Class 9 Christmas Exam Time Table 2026.
          Find the complete subject-wise examination schedule with
          exam dates, days and session timings. Download the
          timetable PDF and plan your Christmas exam preparation.
        </p>
      </div>

      <section className="mb-6 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-300">
              <CalendarDays size={23} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Examination Schedule
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                December 2026
              </p>
            </div>
          </div>

          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-950 dark:text-green-300">
            10 Exams
          </span>
        </div>

        <div className="hidden overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 sm:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
              <tr>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3 font-semibold">Day</th>
                <th className="px-4 py-3 font-semibold">Subject</th>
                <th className="px-4 py-3 text-center font-semibold">Time</th>
              </tr>
            </thead>

            <tbody>
              {timetable.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200 text-gray-700 dark:border-gray-700 dark:text-gray-200"
                >
                  <td className="px-4 py-3 font-medium">{item.date}</td>
                  <td className="px-4 py-3">{item.day}</td>
                  <td className="px-4 py-3 font-semibold">{item.subject}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={
                        "inline-flex min-w-12 justify-center rounded-full px-3 py-1 text-xs font-bold " +
                        (item.session === "FN"
                          ? "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                          : "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300")
                      }
                    >
                      {item.session}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-2 sm:hidden">
          {timetable.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-2 rounded-xl border border-gray-200 p-3 dark:border-gray-700"
            >
              <div className="min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.date} · {item.day}
                </p>
                <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                  {item.subject}
                </p>
              </div>

              <span
                className={
                  "shrink-0 rounded-full px-3 py-1 text-xs font-bold " +
                  (item.session === "FN"
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                    : "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300")
                }
              >
                {item.session}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-600 dark:text-gray-300">
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600"></span>
            FN – Forenoon
          </span>

          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500"></span>
            AN – Afternoon
          </span>
        </div>
      </section>

      <section className="mb-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-300">
            <FileText size={22} />
          </div>

          <div>
            <h2 className="font-bold text-gray-900 dark:text-white">
              Class 9 Christmas Exam Time Table PDF
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Download the complete examination schedule
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <Eye size={17} />
            View PDF
          </a>

          <a
            href={pdfPath}
            download
            className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            <Download size={17} />
            Download PDF
          </a>
        </div>
      </section>

      <section className="mb-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
          <div className="mb-2 flex items-center gap-2">
            <Clock size={19} className="text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Exam Sessions
            </h3>
          </div>

          <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
            FN means Forenoon and AN means Afternoon. Check the
            session mentioned against each subject.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
          <div className="mb-2 flex items-center gap-2">
            <BookOpen size={19} className="text-green-600 dark:text-green-400" />
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Exam Preparation
            </h3>
          </div>

          <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
            Use the timetable to organise your study plan and
            prepare for each subject before the examination.
          </p>
        </div>
      </section>

      <div className="rounded-xl bg-gray-50 p-5 text-center dark:bg-gray-800">
        <h2 className="font-bold text-gray-900 dark:text-white">
          Class 9 Christmas Exam Study Materials
        </h2>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Visit Exam Focus Plus for more study materials and
          examination updates.
        </p>

        <a
          href="/class-9"
          className="mt-4 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          View Class 9 Resources
        </a>
      </div>
    </main>
  );
}