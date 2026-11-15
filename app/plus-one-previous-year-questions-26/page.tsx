const subjects = [
  { name: "English", file: null },
  { name: "Physics", file: "Physics_+1.pdf" },
  { name: "Chemistry", file: null },
  { name: "Mathematics", file: "maths_+1.pdf" },
  { name: "Biology", file: null },
];

export const metadata = {
  title: "Plus One Previous Year Question Papers PDF | Exam Focus Plus",
  description:
    "Download Plus One previous year question papers for English, Physics, Chemistry, Mathematics and Biology. Access subject-wise question paper PDFs for exam preparation.",
  keywords: [
    "Plus One Previous Year Question Papers",
    "Plus One Question Papers PDF",
    "Plus One Physics Question Paper",
    "Plus One Maths Question Paper",
    "Plus one Christmas Exam Question Paper 2026",
    "Plus One Biology Question Paper",
  ],
};

export default function PlusOnePreviousYearQuestionsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-green-800 to-green-600 px-5 py-8 text-center text-white shadow-lg">
          <div className="mb-3 text-4xl">📚</div>
          <h1 className="text-2xl font-bold sm:text-3xl">
            Plus One Previous Year Question Papers
          </h1>
          <p className="mt-3 text-sm text-green-50 sm:text-base">
            Subject-wise previous year question papers for Plus One students.
          </p>
        </div>

        <section>
          <h2 className="mb-2 text-xl font-bold text-gray-900">
            Subject-wise Question Papers
          </h2>
          <p className="mb-5 text-sm leading-6 text-gray-600">
            Choose your subject to access available Plus One previous year
            question papers. Practising previous question papers can help
            students understand exam patterns and improve time management.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => {
              const pdfPath = subject.file
                ? "/pdf/previous-year-questions/" + subject.file
                : null;

              return (
                <div
                  key={subject.name}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-100 text-xl">
                      📄
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      {subject.name}
                    </h3>
                  </div>

                  <p className="mb-4 text-sm text-gray-500">
                    Plus One Previous Year Question Paper
                  </p>

                  {pdfPath ? (
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-lg bg-green-700 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-green-800"
                      >
                        View PDF
                      </a>
                      <a
                        href={pdfPath}
                        download
                        className="flex-1 rounded-lg border border-green-700 px-3 py-2 text-center text-sm font-semibold text-green-700 hover:bg-green-50"
                      >
                        Download
                      </a>
                    </div>
                  ) : (
                    <div className="rounded-lg bg-gray-100 px-3 py-2 text-center text-sm font-semibold text-gray-500">
                      Coming Soon
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-4">
          <h2 className="mb-1 font-semibold text-blue-900">
            How to Use Previous Year Question Papers
          </h2>
          <p className="text-sm leading-6 text-blue-800">
            Try solving the available question papers within the exam time
            limit. After completing each paper, review your answers and
            identify topics that need more practice.
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="/plus-one"
            className="rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-900"
          >
            Back to Plus One
          </a>
        </div>
      </div>
    </main>
  );
}