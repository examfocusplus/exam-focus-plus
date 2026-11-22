import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Class 6 Christmas Exam Question Papers 2025 | Exam Focus Plus",
  description:
    "Download Class 6 Christmas Exam Question Papers 2025 in English and Malayalam Medium. Access Malayalam, Hindi, English, Maths, Social Science and Science question papers.",
  keywords: [
    "Class 6 Christmas Exam Question Paper 2025",
    "Class 6 Christmas Exam Question Paper 2026",
    "Class 6 question papers Kerala",
    "Class 6 previous year question papers",
    "Class 6 Malayalam medium question papers",
    "Class 6 English medium question papers",
    "Kerala syllabus Class 6",
    "Exam Focus Plus",
  ],
  alternates: {
    canonical: "https://examfocusplus.in/class-6-previous-year-questions-26",
  },
  openGraph: {
    title: "Class 6 Christmas Exam Question Papers 2025",
    description:
      "Class 6 Christmas examination previous question papers in English and Malayalam Medium.",
    url: "https://examfocusplus.in/class-6-previous-year-questions-26",
    type: "website",
  },
};

const subjects = [
  {
    name: "Malayalam 1",
    icon: "📘",
    papers: [{ medium: "English Medium", file: "malayalam-1_6.pdf" }],
  },
  {
    name: "Malayalam 2",
    icon: "📗",
    papers: [{ medium: "English Medium", file: "malayalam-2_6.pdf" }],
  },
  {
    name: "Hindi",
    icon: "📙",
    papers: [{ medium: "English Medium", file: "hindi_6.pdf" }],
  },
  {
    name: "English",
    icon: "📕",
    papers: [{ medium: "English Medium", file: "english_6.pdf" }],
  },
  {
    name: "Mathematics",
    icon: "📐",
    papers: [
      { medium: "English Medium", file: "maths_6.pdf" },
      { medium: "Malayalam Medium", file: "maths-mm_6.pdf" },
    ],
  },
  {
    name: "Social Science",
    icon: "🌍",
    papers: [
      { medium: "English Medium", file: "social_6.pdf" },
      { medium: "Malayalam Medium", file: "social-mm_6.pdf" },
    ],
  },
  {
    name: "Science",
    icon: "🔬",
    papers: [
      { medium: "English Medium", file: "science_6.pdf" },
      { medium: "Malayalam Medium", file: "science-mm_6.pdf" },
    ],
  },
];

export default function Class6QuestionPapersPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-6xl space-y-8">

        <section className="rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-6 text-white shadow-lg sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-100">
            Exam Focus Plus
          </p>

          <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
            CLASS 6 CHRISTMAS EXAM QUESTION PAPER 2025
          </h1>

          <p className="mt-4 text-sm leading-7 text-blue-50 sm:text-base">
            Find Class 6 Christmas examination question papers for 2025.
            Students can access subject-wise question papers in English
            Medium and Malayalam Medium. Use these papers for revision,
            practice, and better preparation for upcoming examinations.
          </p>
        </section>

        <section>
          <div className="mb-5">
            <h2 className="text-xl font-bold text-slate-800">
              Subject-wise Question Papers
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Select your subject and medium to view or download the PDF.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <div
                key={subject.name}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{subject.icon}</span>
                  <h3 className="text-lg font-bold text-slate-800">
                    {subject.name}
                  </h3>
                </div>

                <div className="mt-5 space-y-3">
                  {subject.papers.map((paper) => (
                    <div
                      key={paper.file}
                      className="rounded-lg bg-slate-50 p-3"
                    >
                      <p className="mb-2 text-xs font-semibold text-slate-600">
                        {paper.medium}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <a
                          href={"/pdf/previous-year-questions/" + paper.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700"
                        >
                          View PDF
                        </a>

                        <a
                          href={"/pdf/previous-year-questions/" + paper.file}
                          download
                          className="rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-blue-100 bg-blue-50 p-5">
          <h2 className="font-bold text-blue-900">
            Preparation Tip
          </h2>
          <p className="mt-2 text-sm leading-6 text-blue-800">
            Practise these previous question papers after revising your
            textbook lessons. Try answering the questions within a
            time limit to improve your confidence and time management.
          </p>
        </section>

        <div className="text-center">
          <Link
            href="/class-6"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            ← Back to Class 6
          </Link>
        </div>

      </div>
    </main>
  );
}