import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class 7 Christmas Exam Question Papers 2025 | Kerala - Exam Focus Plus",
  description:
    "Download Class 7 Christmas Exam Question Papers 2025 for Kerala students. Access English Medium and Malayalam Medium subject-wise previous year question papers in PDF format at Exam Focus Plus.",
  keywords: [
    "Class 7 Christmas Exam Question Paper 2025",
    "Class 7 Christmas Exam Question Paper 2026",
    "Class 7 Christmas Question Papers PDF",
    "Kerala Class 7 Previous Year Question Papers",
    "Class 7 English Medium Question Papers",
    "Class 7 Malayalam Medium Question Papers",
    "Class 7 Christmas Exam Papers",
    "Class 7 Maths Question Paper",
    "Class 7 Science Question Paper",
    "Class 7 Social Science Question Paper",
    "Exam Focus Plus"
  ],
  alternates: {
    canonical: "/class-7-previous-year-questions-26",
  },
  openGraph: {
    title: "Class 7 Christmas Exam Question Papers 2025",
    description:
      "Find Class 7 Christmas examination previous year question papers in English and Malayalam Medium PDF format.",
    url: "https://examfocusplus.in/class-7-previous-year-questions-26",
    siteName: "Exam Focus Plus",
    type: "website",
  },
};

const subjects = [
  {
    name: "Malayalam",
    icon: "📖",
    papers: [
      { medium: "English Medium", file: "malayalam_7.pdf" },
    ],
  },
  {
    name: "Hindi",
    icon: "📝",
    papers: [
      { medium: "English Medium", file: "hindi_7.pdf" },
    ],
  },
  {
    name: "English",
    icon: "🔤",
    papers: [
      { medium: "English Medium", file: "english_7.pdf" },
    ],
  },
  {
    name: "Social Science",
    icon: "🌍",
    papers: [
      { medium: "English Medium", file: "social_7.pdf" },
      { medium: "Malayalam Medium", file: "social-mm_7.pdf" },
    ],
  },
  {
    name: "Mathematics",
    icon: "📐",
    papers: [
      { medium: "English Medium", file: "maths_7.pdf" },
      { medium: "Malayalam Medium", file: "maths-mm_7.pdf" },
    ],
  },
  {
    name: "Science",
    icon: "🔬",
    papers: [
      { medium: "English Medium", file: "science_7.pdf" },
      { medium: "Malayalam Medium", file: "science-mm_7.pdf" },
    ],
  },
];

export default function Class7QuestionPapersPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 px-5 py-8 text-center text-white shadow-md sm:px-8">
          <p className="mb-3 text-sm font-semibold tracking-wider text-blue-100">
            EXAM FOCUS PLUS
          </p>

          <h1 className="text-2xl font-bold sm:text-4xl">
            Class 7 Christmas Exam Question Paper 2025
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-blue-50 sm:text-base">
            Find Class 7 Christmas examination question papers
            for 2025 on Exam Focus Plus. This page provides
            subject-wise previous year question papers for
            Kerala students in English Medium and Malayalam
            Medium wherever available. Students can use these
            papers to practise questions, understand examination
            patterns and improve their preparation. View or
            download the available PDF question papers for
            revision and practice.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Class 7 Subject-wise Question Papers
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Select a subject to access its previous year
            Christmas examination question paper.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-3 text-3xl">
                {subject.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900">
                {subject.name}
              </h3>

              <div className="mt-4 space-y-3">
                {subject.papers.map((paper) => {
                  const pdfUrl =
                    "/pdf/previous-year-questions/" + paper.file;

                  return (
                    <div
                      key={paper.file}
                      className="rounded-lg bg-gray-50 p-3"
                    >
                      <p className="mb-2 text-sm font-semibold text-gray-700">
                        {paper.medium}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <a
                          href={pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                        >
                          View PDF
                        </a>

                        <a
                          href={pdfUrl}
                          download
                          className="rounded-lg border border-blue-600 px-3 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-50"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-4">
          <p className="text-sm leading-6 text-gray-700">
            <strong>Preparation Tip:</strong> Practise the
            previous year question papers after revising each
            subject. Try answering the questions within a
            fixed time to improve speed and time management.
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