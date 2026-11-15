import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plus One Christmas Exam Time Table 2026 | Kerala | Exam Focus Plus",
  description:
    "Check the Kerala Plus One Christmas Exam Time Table 2026 with subject-wise dates and afternoon session timings for Mathematics, English, Physics, Chemistry, Biology and other subjects.",
  keywords: [
    "Plus One Christmas Exam Time Table 2026",
    "Plus One Christmas Exam Date 2026",
    "Kerala Plus One Christmas Exam Timetable",
    "Plus One Exam December 2026",
    "Plus One Maths Exam Date 2026",
    "Plus One Physics Exam Date 2026",
    "Plus One Chemistry Exam Date 2026",
    "Exam Focus Plus",
  ],
  alternates: {
    canonical: "/plus-one-christmas-timetable-2026",
  },
};

const timetable = [
  { date: "08/12/2026", day: "Tuesday", subject: "Mathematics", time: "AN" },
  { date: "09/12/2026", day: "Wednesday", subject: "English", time: "AN" },
  { date: "10/12/2026", day: "Thursday", subject: "Physics", time: "AN" },
  { date: "11/12/2026", day: "Friday", subject: "Computer Science (CS)", time: "AN" },
  { date: "15/12/2026", day: "Tuesday", subject: "Chemistry", time: "AN" },
  { date: "16/12/2026", day: "Wednesday", subject: "Biology", time: "AN" },
  { date: "17/12/2026", day: "Thursday", subject: "Second Language", time: "AN" },
];

export default function PlusOneChristmasTimetablePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        <section className="mb-8">
          <p className="mb-2 font-semibold tracking-wide text-blue-700">
            EXAM FOCUS PLUS
          </p>

          <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            Plus One Christmas Exam Time Table 2026
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            The Plus One Christmas Exam Time Table 2026 provides the
            subject-wise examination dates for Kerala Higher Secondary
            First Year students. Students can use this timetable to
            check the examination schedule for Mathematics, English,
            Physics, Computer Science, Chemistry, Biology and Second
            Language. All the examinations listed below are scheduled
            for the afternoon session (AN). The timetable is organised
            date-wise to help students plan their revision and prepare
            for each subject. Check the subject and examination date
            carefully before planning your study schedule. Students
            can also visit Exam Focus Plus for Plus One Christmas Exam
            portions, weightage and previous year question papers.
          </p>
        </section>

        <section className="mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="bg-gradient-to-r from-green-950 via-green-800 to-emerald-700 px-5 py-6 text-white sm:px-7">
            <div className="text-4xl">🎄</div>
            <h2 className="mt-3 text-xl font-bold sm:text-2xl">
              PLUS ONE CHRISTMAS EXAM 2026
            </h2>
            <p className="mt-1 text-sm text-green-100">
              Subject-wise Examination Schedule
            </p>
          </div>

          <div className="p-4 sm:p-6">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[550px] border-collapse text-left">
                <thead>
                  <tr className="bg-blue-50 text-gray-800">
                    <th className="border border-gray-200 px-4 py-3 text-sm font-bold">Date</th>
                    <th className="border border-gray-200 px-4 py-3 text-sm font-bold">Day</th>
                    <th className="border border-gray-200 px-4 py-3 text-sm font-bold">Subject</th>
                    <th className="border border-gray-200 px-4 py-3 text-sm font-bold">Session</th>
                  </tr>
                </thead>

                <tbody>
                  {timetable.map((item) => (
                    <tr key={item.date} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        {item.date}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        {item.day}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-900">
                        {item.subject}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-blue-700">
                        {item.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 rounded-lg bg-amber-50 p-4 text-sm leading-6 text-amber-800">
              <strong>Note:</strong> AN means Afternoon Session.
              Please follow the examination instructions provided
              by your school.
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-gray-900">
            More Plus One Christmas Exam Resources
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Explore subject-wise portions, weightage and previous
            year question papers to prepare for the Plus One
            Christmas examination.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/plus-one"
              className="rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Plus One Exam Resources
            </a>

            <a
              href="/plus-one-improvement-26"
              className="rounded-lg border border-blue-200 px-4 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50"
            >
              Improvement Exam 2026
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}