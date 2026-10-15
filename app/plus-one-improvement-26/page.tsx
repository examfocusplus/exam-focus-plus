import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plus One Improvement Exam 2026 Question Papers and Answer Keys",
  description:
    "Download Kerala Plus One Improvement Exam 2026 question papers and answer keys for all subjects.",
  alternates: {
    canonical: "https://examfocusplus.in/plus-one-improvement-26",
  },
};

const subjects = [
  "Physics",
  "Maths (Science)",
  "Maths (Commerce)",
  "Chemistry",
  "Botany",
  "Zoology",
  "English",
  "Computer Science",
  "Economics",
  "Accountancy",
  "Business Studies",
  "History",
  "Political Science",
  "Geography",
  "Sociology",
  "Psychology",
  "Malayalam",
  "Hindi",
];

export default function PlusOneImprovementPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-3 py-6 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
            Exam Focus Plus
          </p>

          <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Plus One Improvement Exam 2026
          </h1>

          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Question Papers and Answer Keys
          </p>
        </header>

        <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
          <table className="w-full min-w-[460px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-sky-800 text-white">
                <th className="border-r border-sky-700 px-3 py-4 font-bold">
                  Subject
                </th>
                <th className="border-r border-sky-700 px-3 py-4 font-bold">
                  Question Paper
                </th>
                <th className="px-3 py-4 font-bold">
                  Answer Key
                </th>
              </tr>
            </thead>

            <tbody>
              {subjects.map((subject, index) => (
                <tr
                  key={subject}
                  className={index % 2 === 0 ? "bg-white" : "bg-sky-50"}
                >
                  <td className="border-r border-b border-gray-200 px-3 py-5 font-semibold text-gray-800">
                    {subject}
                  </td>

                  <td className="border-r border-b border-gray-200 px-3 py-5">
                    <span className="text-gray-500">Coming Soon</span>
                  </td>

                  <td className="border-b border-gray-200 px-3 py-5">
                    <span className="text-gray-500">Coming Soon</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs leading-5 text-gray-500">
          Question papers and answer keys will be available here when the
          corresponding files are added.
        </p>

        <footer className="mt-8 rounded-lg bg-blue-900 px-4 py-5 text-center text-white">
          <p className="font-bold">Exam Focus Plus</p>
          <p className="mt-1 text-sm text-blue-100">
            Kerala Higher Secondary Exam Resources
          </p>
        </footer>
      </div>
    </main>
  );
}