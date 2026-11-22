import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class 8 Christmas Exam Question Paper 2025 PDF | Kerala",
  description:
    "Download Class 8 Christmas Exam Question Papers 2025 PDF for English and Malayalam Medium. Access Arabic, English, Hindi, Malayalam, Science, Social Science and Maths papers.",
  keywords: [
    "Class 8 Christmas Exam Question Paper 2025",
    "Class 8 Christmas Exam Question Paper 2026",
    "Class 8 Previous Year Question Papers",
    "Kerala Class 8 Christmas Exam Papers",
    "8th Standard Christmas Question Papers",
    "Class 8 Malayalam Medium Question Papers",
    "Class 8 English Medium Question Papers",
    "Class 8 Maths Question Paper PDF",
    "Exam Focus Plus",
  ],
  alternates: {
    canonical:
      "https://examfocusplus.in/class-8-previous-year-questions-26",
  },
  openGraph: {
    title: "Class 8 Christmas Exam Question Paper 2025",
    description:
      "View and download Class 8 Christmas exam question papers in English and Malayalam Medium.",
    url: "https://examfocusplus.in/class-8-previous-year-questions-26",
    siteName: "Exam Focus Plus",
    type: "website",
  },
};

const subjects = [
  {
    name: "Arabic",
    icon: "📖",
    papers: [{ medium: "English Medium", file: "arabic_8.pdf" }],
  },
  {
    name: "English",
    icon: "📝",
    papers: [{ medium: "English Medium", file: "english_8.pdf" }],
  },
  {
    name: "Hindi",
    icon: "📚",
    papers: [{ medium: "English Medium", file: "hindi_8.pdf" }],
  },
  {
    name: "Malayalam 1",
    icon: "📕",
    papers: [{ medium: "English Medium", file: "malayalam-1_8.pdf" }],
  },
  {
    name: "Malayalam 2",
    icon: "📗",
    papers: [{ medium: "English Medium", file: "malayalam-2_8.pdf" }],
  },
  {
    name: "Science",
    icon: "🔬",
    papers: [{ medium: "English Medium", file: "science_8.pdf" }],
  },
  {
    name: "Social Science",
    icon: "🌍",
    papers: [
      { medium: "English Medium", file: "social_8.pdf" },
      { medium: "Malayalam Medium", file: "social-mm_8.pdf" },
    ],
  },
  {
    name: "Mathematics",
    icon: "📐",
    papers: [
      { medium: "English Medium", file: "maths_8.pdf" },
      { medium: "Malayalam Medium", file: "maths-mm_8.pdf" },
    ],
  },
];

export default function Class8PreviousYearQuestionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-7">
      <div className="mx-auto max-w-5xl">

        <section className="mb-7 rounded-2xl bg-gradient-to-r from-indigo-950 to-blue-800 p-5 text-white shadow-lg sm:p-7">
          <div className="mb-2 text-3xl">📚</div>

          <h1 className="text-xl font-bold leading-tight sm:text-3xl">
            CLASS 8 CHRISTMAS EXAM QUESTION PAPER 2025
          </h1>

          <p className="mt-3 text-sm leading-6 text-blue-100">
            Access Class 8 previous Christmas examination question papers
            for practice. Subject-wise PDFs are available in English
            Medium and Malayalam Medium wherever provided. Practise
            these papers to understand question patterns, revise
            important topics and improve your exam preparation.
          </p>
        </section>

        <section>
          <div className="mb-4">
            <h2 className="text-xl font-bold text-slate-800">
              Subject-wise Question Papers
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Choose your subject and medium to view or download the PDF.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <article
                key={subject.name}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-2xl">{subject.icon}</span>
                  <h3 className="text-base font-bold text-slate-800">
                    {subject.name}
                  </h3>
                </div>

                <div className="space-y-2">
                  {subject.papers.map((paper) => {
                    const pdfPath =
                      "/pdf/previous-year-questions/" + paper.file;

                    return (
                      <div
                        key={paper.file}
                        className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 p-2"
                      >
                        <span className="min-w-0 text-xs font-semibold text-slate-700">
                          {paper.medium}
                        </span>

                        <div className="flex shrink-0 gap-2">
                          <a
                            href={pdfPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md bg-blue-700 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-800"
                          >
                            View
                          </a>

                          <a
                            href={pdfPath}
                            download
                            aria-label={"Download " + subject.name + " " + paper.medium + " question paper"}
                            className="rounded-md border border-blue-700 px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-50"
                          >
                            ↓ PDF
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-6 rounded-xl bg-blue-50 p-4 text-sm leading-6 text-blue-900">
          <strong>Note:</strong> Question papers are provided for
          examination practice. Check the available medium before
          downloading each PDF.
        </div>

        <div className="mt-6 text-center">
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