import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class 7 Christmas Exam Time Table 2026 | Kerala - Exam Focus Plus",
  description:
    "Check the Kerala Class 7 Christmas Exam Time Table 2026 with subject-wise dates and afternoon session details. View and download the Class 7 Christmas examination timetable PDF at Exam Focus Plus.",
  keywords: [
    "Class 7 Christmas Exam Time Table 2026",
    "Class 7 Christmas Exam Question Paper 2026",
    "Class 7 Christmas Exam Question Paper 2025",
    "Class 7 Christmas Exam 2026",
    "Kerala Class 7 Exam Time Table",
    "Class 7 Christmas Examination Schedule",
    "Class 7 Exam Time Table PDF",
    "Class 7 December Exam 2026",
    "Kerala School Christmas Exam 2026",
    "Class 7 Study Materials",
    "Exam Focus Plus"
  ],
  alternates: {
    canonical: "/class-7-christmas-timetable-26",
  },
  openGraph: {
    title: "Class 7 Christmas Exam Time Table 2026",
    description:
      "View and download the Kerala Class 7 Christmas Exam Time Table 2026 PDF with subject-wise examination dates.",
    url: "https://examfocusplus.in/class-7-christmas-timetable-26",
    siteName: "Exam Focus Plus",
    type: "website",
  },
};

const exams = [
  { date: "08/12/2026", day: "Tuesday", subject: "English", session: "AN" },
  { date: "09/12/2026", day: "Wednesday", subject: "Malayalam 2", session: "AN" },
  { date: "10/12/2026", day: "Thursday", subject: "Language 1", session: "AN" },
  { date: "11/12/2026", day: "Friday", subject: "Mathematics", session: "AN" },
  { date: "14/12/2026", day: "Monday", subject: "Science", session: "AN" },
  { date: "15/12/2026", day: "Tuesday", subject: "Social Science", session: "AN" },
  { date: "16/12/2026", day: "Wednesday", subject: "Hindi", session: "AN" },
  { date: "17/12/2026", day: "Thursday", subject: "Arts", session: "AN" },
];

const pdfUrl =
  "/pdf/christmas-exam-timetable/class-7-christmas-timetable-26.pdf";

export default function Class7ChristmasTimetablePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 px-5 py-8 text-center text-white shadow-md sm:px-8">
          <p className="mb-3 text-sm font-semibold tracking-wider text-blue-100">
            EXAM FOCUS PLUS
          </p>

          <h1 className="text-2xl font-bold sm:text-4xl">
            Class 7 Christmas Exam Time Table 2026
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-blue-50 sm:text-base">
            Find the Kerala Class 7 Christmas examination timetable
            for 2026 with subject-wise examination dates, days and
            session details. Students can use this schedule to plan
            their revision and prepare for each subject. The complete
            timetable is also available as a PDF for easy viewing
            and downloading.
          </p>
        </div>

        <div className="mb-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
          <h2 className="text-lg font-bold text-gray-900">
            Class 7 Christmas Examination Schedule
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            The following table shows the subject-wise schedule
            for the Class 7 Christmas examination 2026.
            All listed examinations are scheduled for the afternoon
            session (AN).
          </p>
        </div>

        <div className="mb-8 hidden overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm sm:block">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="px-5 py-4 text-sm font-semibold">Date</th>
                  <th className="px-5 py-4 text-sm font-semibold">Day</th>
                  <th className="px-5 py-4 text-sm font-semibold">Subject</th>
                  <th className="px-5 py-4 text-sm font-semibold">Session</th>
                </tr>
              </thead>
              <tbody>
                {exams.map((exam, index) => (
                  <tr
                    key={exam.date + exam.subject}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-5 py-4 text-sm text-gray-700">
                      {exam.date}
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-700">
                      {exam.day}
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold text-gray-900">
                      {exam.subject}
                    </td>
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                        {exam.session}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8 grid gap-3 sm:hidden">
          {exams.map((exam) => (
            <div
              key={exam.date + exam.subject}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-gray-500">
                    {exam.date} · {exam.day}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-gray-900">
                    {exam.subject}
                  </h3>
                </div>
                <span className="shrink-0 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                  {exam.session}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900">
            Download Class 7 Christmas Exam Time Table 2026
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            View or download the complete Class 7 Christmas
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
            time to every subject and practise important questions
            before the examination.
          </p>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/class-7"
            className="inline-flex items-center rounded-lg bg-gray-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
          >
            ← Back to Class 7
          </a>
        </div>

      </div>
    </main>
  );
}