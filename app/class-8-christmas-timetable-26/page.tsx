import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class 8 Christmas Exam Time Table 2026 | Kerala",
  description:
    "Check Kerala Class 8 Christmas Exam Time Table 2026 with subject-wise dates and AN sessions. View and download the Class 8 Christmas examination timetable PDF.",
  keywords: [
    "Class 8 Christmas Exam Time Table 2026",
    "Class 8 Christmas Exam 2026 Kerala",
    "8th Standard Christmas Exam Timetable",
    "Kerala Class 8 Exam Time Table",
    "Class 8 December Exam Timetable 2026",
    "Class 8 Christmas Exam Schedule",
    "Exam Focus Plus",
  ],
  alternates: {
    canonical: "https://examfocusplus.in/class-8-christmas-timetable-26",
  },
  openGraph: {
    title: "Class 8 Christmas Exam Time Table 2026",
    description:
      "View and download the Kerala Class 8 Christmas Exam 2026 timetable.",
    url: "https://examfocusplus.in/class-8-christmas-timetable-26",
    siteName: "Exam Focus Plus",
    type: "website",
  },
};

const exams = [
  { date: "08/12/2026", day: "Tuesday", subject: "Language 1", session: "AN", icon: "📖" },
  { date: "09/12/2026", day: "Wednesday", subject: "English", session: "AN", icon: "📝" },
  { date: "10/12/2026", day: "Thursday", subject: "Social Science", session: "AN", icon: "🌍" },
  { date: "11/12/2026", day: "Friday", subject: "Hindi", session: "AN", icon: "📚" },
  { date: "14/12/2026", day: "Monday", subject: "Mathematics", session: "AN", icon: "📐" },
  { date: "15/12/2026", day: "Tuesday", subject: "Science", session: "AN", icon: "🔬" },
  { date: "16/12/2026", day: "Wednesday", subject: "Malayalam 2", session: "AN", icon: "📕" },
  { date: "17/12/2026", day: "Thursday", subject: "Arts", session: "AN", icon: "🎨" },
];

const pdfPath =
  "/pdf/christmas-exam-timetable/class-8-christmas-exam-timetable-26.pdf";

export default function Class8ChristmasTimetablePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-5xl">

        <section className="mb-8 rounded-2xl bg-gradient-to-r from-indigo-950 to-blue-800 p-6 text-white shadow-lg sm:p-9">
          <div className="mb-3 text-3xl">📅</div>

          <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
            CLASS 8 CHRISTMAS EXAM TIME TABLE 2026
          </h1>

          <p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base">
            Find the Kerala Class 8 Christmas Examination Time Table 2026
            with subject-wise examination dates and afternoon sessions.
            This page provides the complete examination schedule for
            students preparing for the Christmas examination. Check the
            dates for Language 1, English, Social Science, Hindi,
            Mathematics, Science, Malayalam 2 and Arts. Students can
            use this timetable to organise their revision, prepare
            subject-wise study plans and manage their examination
            preparation effectively. The timetable is arranged in a
            simple format for easy access on mobile phones, tablets
            and computers. You can also view or download the timetable
            PDF for future reference.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-slate-800 sm:text-2xl">
            Class 8 Subject-wise Exam Schedule
          </h2>

          <p className="mb-5 text-sm leading-6 text-slate-600">
            Check the examination date, day and session for each subject.
          </p>

          {/* Desktop timetable */}
          <div className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:block">
            <table className="w-full text-left">
              <thead className="bg-blue-50 text-sm text-slate-700">
                <tr>
                  <th className="px-5 py-4 font-bold">Date</th>
                  <th className="px-5 py-4 font-bold">Day</th>
                  <th className="px-5 py-4 font-bold">Subject</th>
                  <th className="px-5 py-4 text-center font-bold">Session</th>
                </tr>
              </thead>
              <tbody>
                {exams.map((exam) => (
                  <tr
                    key={exam.date + exam.subject}
                    className="border-t border-slate-100"
                  >
                    <td className="px-5 py-4 text-sm font-semibold text-slate-800">
                      {exam.date}
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-600">
                      {exam.day}
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold text-slate-800">
                      <span className="mr-2">{exam.icon}</span>
                      {exam.subject}
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold text-orange-700">
                        {exam.session}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile timetable cards */}
          <div className="grid gap-3 sm:hidden">
            {exams.map((exam) => (
              <article
                key={exam.date + exam.subject}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="text-2xl">{exam.icon}</span>
                    <div className="min-w-0">
                      <h3 className="font-bold text-slate-800">
                        {exam.subject}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        {exam.day}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 rounded-full bg-orange-100 px-3 py-1.5 text-xs font-bold text-orange-700">
                    {exam.session}
                  </span>
                </div>

                <div className="mt-3 border-t border-slate-100 pt-3 text-sm font-semibold text-slate-600">
                  📅 {exam.date}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-blue-50 p-5">
          <h2 className="text-lg font-bold text-blue-950">
            Class 8 Christmas Exam Preparation
          </h2>
          <p className="mt-2 text-sm leading-7 text-blue-900">
            Use the examination schedule to plan your revision in advance.
            Prepare each subject according to its examination date and
            keep enough time for revision. Download the timetable PDF
            so that you can refer to the schedule whenever required.
          </p>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📄</span>
            <div>
              <h2 className="font-bold text-slate-800">
                Class 8 Christmas Exam Time Table PDF
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                View or download the complete examination schedule.
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-700 px-3 py-3 text-center text-sm font-semibold text-white hover:bg-blue-800"
            >
              👁️ View PDF
            </a>

            <a
              href={pdfPath}
              download
              className="rounded-lg border border-blue-700 px-3 py-3 text-center text-sm font-semibold text-blue-700 hover:bg-blue-50"
            >
              ⬇️ Download
            </a>
          </div>
        </section>

        <div className="mt-8 text-center">
          <a
            href="/class-8"
            className="inline-block rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            ← Back to Class 8
          </a>
        </div>

      </div>
    </main>
  );
}