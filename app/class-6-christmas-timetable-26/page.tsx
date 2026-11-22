import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class 6 Christmas Exam Time Table 2026 | Kerala - Exam Focus Plus",
  description:
    "Check the Kerala Class 6 Christmas Exam Time Table 2026 with subject-wise examination dates and afternoon session details. View and download the Class 6 Christmas exam timetable PDF at Exam Focus Plus.",
  keywords: [
    "Class 6 Christmas Exam Time Table 2026",
    "Class 6 Christmas Exam Question Paper 2026",
    "Class 6 Christmas Exam Question Paper 2025",
    "Class 6 Christmas Exam 2026",
    "Kerala Class 6 Exam Time Table",
    "Class 6 Christmas Examination Schedule",
    "Class 6 Exam Time Table PDF",
    "Class 6 December Exam 2026",
    "Kerala School Christmas Exam 2026",
    "Class 6 Study Materials",
    "Exam Focus Plus"
  ],
  alternates: {
    canonical: "/class-6-christmas-timetable-26",
  },
  openGraph: {
    title: "Class 6 Christmas Exam Time Table 2026",
    description:
      "View and download the Kerala Class 6 Christmas Exam Time Table 2026 PDF with subject-wise examination dates.",
    url: "https://examfocusplus.in/class-6-christmas-timetable-26",
    siteName: "Exam Focus Plus",
    type: "website",
  },
};

const exams = [
  { date: "08/12/2026", day: "Tuesday", subject: "Language 1", session: "AN" },
  { date: "09/12/2026", day: "Wednesday", subject: "Malayalam 2", session: "AN" },
  { date: "10/12/2026", day: "Thursday", subject: "Hindi", session: "AN" },
  { date: "11/12/2026", day: "Friday", subject: "Social Science", session: "AN" },
  { date: "14/12/2026", day: "Monday", subject: "Mathematics", session: "AN" },
  { date: "15/12/2026", day: "Tuesday", subject: "Arts", session: "AN" },
  { date: "16/12/2026", day: "Wednesday", subject: "Science", session: "AN" },
  { date: "17/12/2026", day: "Thursday", subject: "English", session: "AN" },
];

const pdfUrl =
  "/pdf/christmas-exam-timetable/class-6-christmas-timetable-26.pdf";

export default function Class6ChristmasTimetablePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-3 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 px-4 py-7 text-center text-white shadow-md sm:px-8 sm:py-8">
          <p className="mb-3 text-sm font-semibold tracking-wider text-blue-100">
            EXAM FOCUS PLUS
          </p>

          <h1 className="text-2xl font-bold sm:text-4xl">
            Class 6 Christmas Exam Time Table 2026
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-blue-50 sm:text-base">
            Find the Kerala Class 6 Christmas examination timetable
            for 2026 with subject-wise examination dates, days and
            session details. Students can use this schedule to plan
            their revision and prepare for each subject. The complete
            timetable is also available as a PDF for easy viewing
            and downloading.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Class 6 Christmas Examination Schedule
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Check all examination dates and afternoon session details
            in the timetable below.
          </p>
        </div>

        <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full table-fixed text-left">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="w-[28%] px-2 py-3 text-xs font-semibold sm:w-[25%] sm:px-5 sm:py-4 sm:text-sm">
                  Date
                </th>
                <th className="w-[25%] px-2 py-3 text-xs font-semibold sm:w-[25%] sm:px-5 sm:py-4 sm:text-sm">
                  Day
                </th>
                <th className="w-[29%] px-2 py-3 text-xs font-semibold sm:w-[30%] sm:px-5 sm:py-4 sm:text-sm">
                  Subject
                </th>
                <th className="w-[18%] px-2 py-3 text-xs font-semibold sm:w-[20%] sm:px-5 sm:py-4 sm:text-sm">
                  Session
                </th>
              </tr>
            </thead>

            <tbody>
              {exams.map((exam, index) => (
                <tr
                  key={exam.date + exam.subject}
                  className={
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }
                >
                  <td className="break-words px-2 py-4 text-xs text-gray-700 sm:px-5 sm:text-sm">
                    {exam.date}
                  </td>
                  <td className="break-words px-2 py-4 text-xs text-gray-700 sm:px-5 sm:text-sm">
                    {exam.day}
                  </td>
                  <td className="break-words px-2 py-4 text-xs font-semibold text-gray-900 sm:px-5 sm:text-sm">
                    {exam.subject}
                  </td>
                  <td className="px-2 py-4 sm:px-5">
                    <span className="inline-block rounded-full bg-orange-100 px-2 py-1 text-xs font-bold text-orange-700 sm:px-3">
                      {exam.session}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-8 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900">
            Download Class 6 Christmas Exam Time Table 2026
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            View or download the complete Class 6 Christmas
            examination timetable PDF for offline reference.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              View PDF
            </a>

            <a
              href={pdfUrl}
              download
              className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Download PDF
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-green-100 bg-green-50 p-4">
          <p className="text-sm leading-6 text-gray-700">
            <strong>Preparation Tip:</strong> Use the examination
            schedule to prepare a daily revision plan. Give enough
            time to every subject and revise important lessons
            before the examination.
          </p>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/class-6"
            className="inline-flex items-center rounded-lg bg-gray-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
          >
            ← Back to Class 6
          </a>
        </div>

      </div>
    </main>
  );
}