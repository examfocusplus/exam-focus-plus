import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plus One Improvement Exam 2026 Question Papers & Answer Keys (PDF)",
  description:
    "Download Kerala Higher Secondary (+1) Plus One Improvement Exam 2026 Question Papers and Answer Keys PDF for Physics, Chemistry, Maths, Biology, Commerce & Humanities.",
  keywords: [
    "Plus One Improvement Exam 2026",
    "Kerala Plus One Answer Key 2026",
    "Plus One Improvement Exam Question Paper 2026",
    "DHSE Kerala Plus One Question Paper",
    "plus one improvement exam answer key 2026"
  ],
  alternates: {
    canonical: "https://examfocusplus.in/plus-one-improvement-26",
  },
};

const subjects = [
  {
    name: "Physics",
    questionPaper: "/pdf/plus-one-improvement-26/physics-question-paper.pdf",
    answerKey: "/pdf/plus-one-improvement-26/physics-answerkey.pdf",
  },
  {
    name: "Maths (Science)",
    questionPaper: "/pdf/plus-one-improvement-26/maths-question-paper.pdf",
    answerKey: "/pdf/plus-one-improvement-26/maths-answerkey.pdf",
  },
  {
    name: "English",
    questionPaper: "/pdf/plus-one-improvement-26/english-question-paper.pdf",
    answerKey: "/pdf/plus-one-improvement-26/english-answerkey.pdf",
  },
  { name: "Chemistry", questionPaper: "", answerKey: "" },
  { name: "Botany", questionPaper: "", answerKey: "" },
  { name: "Zoology", questionPaper: "", answerKey: "" },
  { name: "Computer Science", questionPaper: "", answerKey: "" },
  { name: "Economics", questionPaper: "", answerKey: "" },
  { name: "Accountancy", questionPaper: "", answerKey: "" },
  { name: "Business Studies", questionPaper: "", answerKey: "" },
  { name: "History", questionPaper: "", answerKey: "" },
  { name: "Political Science", questionPaper: "", answerKey: "" },
  { name: "Geography", questionPaper: "", answerKey: "" },
  { name: "Sociology", questionPaper: "", answerKey: "" },
  { name: "Psychology", questionPaper: "", answerKey: "" },
  { name: "Malayalam", questionPaper: "", answerKey: "" },
  { name: "Hindi", questionPaper: "", answerKey: "" },
];

function DownloadButton({ href }: { href: string }) {
  if (!href) {
    return (
      <span className="text-xs font-medium text-gray-400 sm:text-sm">
        Coming Soon
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-md bg-blue-700 px-3 py-2 text-center text-xs font-semibold text-white shadow-sm hover:bg-blue-800 sm:text-sm"
    >
      Download
    </a>
  );
}

export default function PlusOneImprovementPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-2 py-6 sm:px-5">
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

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <table className="w-full table-fixed border-collapse text-left text-sm">
            <thead>
              <tr className="bg-sky-800 text-white">
                <th className="w-[32%] px-3 py-4 font-bold sm:px-5">
                  Subject
                </th>
                <th className="w-[34%] px-2 py-4 font-bold sm:px-5">
                  Question Paper
                </th>
                <th className="w-[34%] px-2 py-4 font-bold sm:px-5">
                  Answer Key
                </th>
              </tr>
            </thead>

            <tbody>
              {subjects.map((subject, index) => (
                <tr
                  key={subject.name}
                  className={
                    index % 2 === 0
                      ? "border-b border-gray-200 bg-white"
                      : "border-b border-gray-200 bg-sky-50"
                  }
                >
                  <td className="break-words px-3 py-4 font-semibold text-gray-800 sm:px-5">
                    {subject.name}
                  </td>

                  <td className="px-2 py-4 sm:px-5">
                    <DownloadButton href={subject.questionPaper} />
                  </td>

                  <td className="px-2 py-4 sm:px-5">
                    <DownloadButton href={subject.answerKey} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-xs text-gray-500">
          More question papers and answer keys will be added soon.
        </p>
      </div>
    </main>
  );
}