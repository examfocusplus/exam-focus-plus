import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Class 5 Christmas Exam Question Papers 2025 | Exam Focus Plus",
  description:
    "Download Class 5 Christmas Exam Question Papers 2025 for Kerala syllabus students. Access subject-wise previous question papers for Malayalam 1, Malayalam 2, Hindi, English, Science, Social Science and Mathematics in English Medium and Malayalam Medium. Practise previous papers, revise lessons and prepare effectively for your Christmas examinations.",
  keywords: [
    "Class 5 Christmas Exam Question Paper 2025",
    "Class 5 Christmas Exam Question Paper 2026",
    "Class 5 Maths Christmas Exam Question Paper 2026",
    "Class 5 Science Christmas Exam Question Paper 2026",
    "Class 5 Christmas Exam Question Papers Kerala",
    "Class 5 previous year question papers",
    "Class 5 English medium question papers",
    "Class 5 Malayalam medium question papers",
    "Class 5 Maths question paper",
    "Class 5 Science question paper",
    "Class 5 Social Science question paper",
    "Kerala syllabus Class 5",
    "Exam Focus Plus",
  ],
  alternates: {
    canonical: "https://examfocusplus.in/class-5-previous-year-questions-26",
  },
  openGraph: {
    title: "Class 5 Christmas Exam Question Papers 2025",
    description:
      "Download Class 5 Christmas exam previous question papers in English and Malayalam Medium for Kerala syllabus students.",
    url: "https://examfocusplus.in/class-5-previous-year-questions-26",
    type: "website",
  },
};

const subjects = [
  {
    name: "Malayalam 1",
    icon: "📘",
    papers: [{ medium: "English Medium", file: "malayalam-1_5.pdf" }],
  },
  {
    name: "Malayalam 2",
    icon: "📗",
    papers: [{ medium: "English Medium", file: "malayalam-2_5.pdf" }],
  },
  {
    name: "Hindi",
    icon: "📙",
    papers: [{ medium: "English Medium", file: "hindi_5.pdf" }],
  },
  {
    name: "English",
    icon: "📕",
    papers: [{ medium: "English Medium", file: "english_5.pdf" }],
  },
  {
    name: "Mathematics",
    icon: "📐",
    papers: [
      { medium: "English Medium", file: "maths_5.pdf" },
      { medium: "Malayalam Medium", file: "maths-mm_5.pdf" },
    ],
  },
  {
    name: "Social Science",
    icon: "🌍",
    papers: [
      { medium: "English Medium", file: "social_5.pdf" },
      { medium: "Malayalam Medium", file: "social-mm_5.pdf" },
    ],
  },
  {
    name: "Science",
    icon: "🔬",
    papers: [{ medium: "English Medium", file: "science_5.pdf" }],
  },
];

export default function Class5QuestionPapersPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-6xl space-y-8">

        <section className="rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-6 text-white shadow-lg sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-100">
            Exam Focus Plus
          </p>

          <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
            CLASS 5 CHRISTMAS EXAM QUESTION PAPER 2025
          </h1>

          <p className="mt-4 text-sm leading-7 text-blue-50 sm:text-base">
            Welcome to the Class 5 Christmas Exam Question Papers 2025
            section of Exam Focus Plus. Kerala syllabus students can access
            subject-wise previous question papers to support their exam
            preparation. Papers are available for Malayalam 1, Malayalam 2,
            Hindi, English, Mathematics, Social Science and Science.
            English Medium and Malayalam Medium question papers are
            provided for selected subjects. Students can use these papers
            to practise different types of questions, revise textbook
            lessons, understand examination patterns and improve time
            management. Regular practice and revision can help students
            prepare with greater confidence for their Christmas examinations.
          </p>
        </section>

        <section>
          <div className="mb-5">
            <h2 className="text-xl font-bold text-slate-800">
              Class 5 Subject-wise Question Papers
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Select a subject and choose the available medium to view
              or download the question paper in PDF format.
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
                          className="rounded-md bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                        >
                          View PDF
                        </a>

                        <a
                          href={"/pdf/previous-year-questions/" + paper.file}
                          download
                          className="rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
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
            How to Prepare for the Class 5 Christmas Exam
          </h2>
          <p className="mt-2 text-sm leading-7 text-blue-800">
            Revise your textbook lessons before practising previous
            question papers. Try answering questions within a fixed
            time and check your answers afterwards. Regular practice
            can help you identify topics that need more attention and
            improve your confidence.
          </p>
        </section>

        <div className="text-center">
          <Link
            href="/class-5"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            ← Back to Class 5
          </Link>
        </div>

      </div>
    </main>
  );
}