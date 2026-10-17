import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plus One Improvement Exam 2026 Question Papers & Answer Keys",
  description:
    "Download Plus One Improvement Exam 2026 question papers and answer keys for Kerala Higher Secondary students. Practise questions and prepare for your examination with Exam Focus Plus.",
  alternates: {
    canonical: "https://examfocusplus.in/plus-one-improvement-26",
  },
  openGraph: {
    title: "Plus One Improvement Exam 2026 | Exam Focus Plus",
    description:
      "Find Plus One Improvement Exam 2026 question papers and answer keys for Kerala Higher Secondary students.",
    url: "https://examfocusplus.in/plus-one-improvement-26",
    type: "website",
  },
};

const subjects = [
  {
    name: "Physics",
    questionPaper: "/pdf/plus-one-improvement-26/physics-question-paper.pdf",
    answerKey: "/pdf/plus-one-improvement-26/physics-answerkey.pdf",
  },
  {
    name: "Mathematics",
    questionPaper: "/pdf/plus-one-improvement-26/maths-question-paper.pdf",
    answerKey: "/pdf/plus-one-improvement-26/maths-answerkey.pdf",
  },
  {
    name: "English",
    questionPaper: "/pdf/plus-one-improvement-26/english-question-paper.pdf",
    answerKey: "/pdf/plus-one-improvement-26/english-answerkey.pdf",
  },
  {
    name: "Biology",
    questionPaper: "/pdf/plus-one-improvement-26/biology-question-paper.pdf",
    answerKey: "",
  },
  {
  name: "Chemistry",
  questionPaper: "/pdf/plus-one-improvement-26/chemistry-question-paper.pdf",
  answerKey: "",
  },
  { name: "Computer Science", questionPaper: "", answerKey: "" },
  { name: "Economics", questionPaper: "", answerKey: "" },
  { name: "Accountancy", questionPaper: "", answerKey: "" },
  { name: "Business Studies", questionPaper: "", answerKey: "" },
];

export default function PlusOneImprovementPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl">
        {/* Page Heading */}
        <header className="mb-8 text-center sm:mb-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">
            Exam Focus Plus
          </p>

          <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Plus One Improvement Exam 2026
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Question Papers and Answer Keys
          </p>
        </header>

        {/* Description */}
        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <h2 className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
            About Plus One Improvement Exam 2026
          </h2>

          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            The Plus One Improvement Exam 2026 is an important opportunity for
            Kerala Higher Secondary students to improve their academic
            performance. On this page, students can find useful study resources
            for the Plus One Improvement Examination, including subject-wise
            question papers and answer keys. These materials can help students
            understand the exam pattern, practise important questions, and
            evaluate their preparation before the examination. Students can use
            the available question papers for revision and refer to the answer
            keys to check their answers and identify areas that need
            improvement. Our aim at Exam Focus Plus is to provide helpful
            educational resources and exam-related updates in one place, making
            preparation easier for students. Students are encouraged to
            practise regularly and review their lessons carefully. Check this
            page for available study materials and updates related to the Plus
            One Improvement Exam 2026.
          </p>
        </section>

        {/* Download Table */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-5 py-5 text-white sm:px-7">
            <h2 className="text-xl font-bold sm:text-2xl">
              Subject-wise Download Links
            </h2>

            <p className="mt-2 text-sm text-blue-100">
              Select a subject to access the available study materials.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left">
              <thead>
                <tr className="bg-sky-50 text-sm text-slate-800">
                  <th className="border-b border-slate-200 px-4 py-4 font-bold sm:px-6">
                    Subject
                  </th>

                  <th className="border-b border-slate-200 px-4 py-4 text-center font-bold sm:px-6">
                    Question Paper
                  </th>

                  <th className="border-b border-slate-200 px-4 py-4 text-center font-bold sm:px-6">
                    Answer Key
                  </th>
                </tr>
              </thead>

              <tbody>
                {subjects.map((subject, index) => (
                  <tr
                    key={subject.name}
                    className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border-b border-slate-100 px-4 py-4 text-sm font-semibold text-slate-800 sm:px-6">
                      {subject.name}
                    </td>

                    {/* Question Paper */}
                    <td className="border-b border-slate-100 px-4 py-4 text-center sm:px-6">
                      {subject.questionPaper ? (
                        <a
                          href={subject.questionPaper}
                          download
                          className="inline-block rounded-lg bg-blue-700 px-3 py-2 text-xs font-bold text-white transition hover:bg-blue-800 sm:text-sm"
                        >
                          Download PDF
                        </a>
                      ) : (
                        <span className="text-xs font-medium text-slate-400">
                          Coming Soon
                        </span>
                      )}
                    </td>

                    {/* Answer Key */}
                    <td className="border-b border-slate-100 px-4 py-4 text-center sm:px-6">
                      {subject.name === "Biology" ? (
                        <div className="flex flex-col items-center gap-2">
                          <a
                            href="/pdf/plus-one-improvement-26/zoology-answerkey.pdf"
                            download
                            className="inline-block rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-emerald-700 sm:text-sm"
                          >
                            Zoology Answer Key
                          </a>

                          <a
                            href="/pdf/plus-one-improvement-26/botany-answerkey.pdf"
                            download
                            className="inline-block rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-emerald-700 sm:text-sm"
                          >
                            Botany Answer Key
                          </a>
                        </div>
                      ) : subject.answerKey ? (
                        <a
                          href={subject.answerKey}
                          download
                          className="inline-block rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-emerald-700 sm:text-sm"
                        >
                          Download PDF
                        </a>
                      ) : (
                        <span className="text-xs font-medium text-slate-400">
                          Coming Soon
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Important Note */}
        <section className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 sm:p-5">
          <h2 className="font-bold text-amber-900">Important Note</h2>

          <p className="mt-2 text-sm leading-6 text-amber-900">
            Please check the available question papers and answer keys before
            downloading. Additional subject materials will be added when
            available.
          </p>
        </section>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}