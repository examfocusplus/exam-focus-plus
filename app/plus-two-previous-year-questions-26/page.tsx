import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plus Two Christmas Exam 2026 Previous Year Question Papers PDF",
  description:
    "Download Kerala Plus Two previous year question papers for exam preparation. Access Physics and Mathematics question paper PDFs and practise important questions to prepare for the Plus Two examinations.",
  alternates: {
    canonical:
      "https://examfocusplus.in/plus-two-previous-year-questions-26",
  },
};

const subjects = [
  { name: "Physics", file: "physics_+2.pdf", icon: "⚛️" },
  { name: "Mathematics", file: "maths_+2.pdf", icon: "📐" },
  { name: "Chemistry", file: "chemistry_+2", icon: "🧪" },
  { name: "Biology", file: "biology_+2", icon: "🧬" },
  { name: "English", file: "english_+2", icon: "📖" },
  { name: "Hindi", file: "hindi_+2", icon: "📝" },
];

export default function PlusTwoPreviousYearQuestionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-5xl">

        <section className="mb-8 rounded-2xl bg-gradient-to-r from-indigo-950 to-blue-800 p-6 text-white shadow-lg sm:p-9">
          <div className="mb-3 text-3xl">📄</div>

          <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
            Plus Two Previous Year Question Papers
          </h1>

          <p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base">
            Prepare for your Kerala Plus Two examinations with previous year
            question papers. Practising question papers helps students
            understand the examination pattern, question types and important
            topics from different subjects. This page provides subject-wise
            PDF resources for Plus Two students, making it easier to access
            question papers in one place. Students can open the available
            PDFs online or download them for offline practice. Regular
            practice can help improve time management, identify areas that
            need more attention and build confidence before examinations.
            Choose your subject below to access the available question papers.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-slate-800 sm:text-2xl">
            Subject-wise Question Papers
          </h2>

          <p className="mb-5 text-sm text-slate-600">
            Select a subject to view or download its question paper PDF.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => {
              const pdfPath =
                "/pdf/previous-year-questions/" + subject.file;

              return (
                <article
                  key={subject.name}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-3xl">{subject.icon}</span>

                    <div>
                      <h3 className="text-lg font-bold text-slate-800">
                        {subject.name}
                      </h3>
                      <p className="text-xs text-slate-500">
                        Plus Two Question Papers
                      </p>
                    </div>
                  </div>

                  {subject.file ? (
                    <div className="flex gap-2">
                      <a
                        href={pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-lg bg-blue-700 px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-800"
                      >
                        View PDF
                      </a>

                      <a
                        href={pdfPath}
                        download
                        className="flex-1 rounded-lg border border-blue-700 px-3 py-2.5 text-center text-sm font-semibold text-blue-700 hover:bg-blue-50"
                      >
                        ⬇️ Download
                      </a>
                    </div>
                  ) : (
                    <div className="rounded-lg bg-slate-100 px-3 py-2.5 text-center text-sm font-semibold text-slate-500">
                      Coming Soon
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <div className="mt-8 rounded-xl bg-blue-50 p-4 text-sm leading-6 text-blue-900">
          <strong>Preparation Tip:</strong> Try solving previous year
          question papers within the examination time limit. Review your
          answers and revise the topics where you need improvement.
        </div>

        <div className="mt-8 text-center">
          <a
            href="/plus-two"
            className="inline-block rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            ← Back to Plus Two
          </a>
        </div>

      </div>
    </main>
  );
}