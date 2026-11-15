const subjects = [
  { name: "Mathematics", file: "maths-11.pdf" },
  { name: "Physics", file: "physics-11.pdf" },
  { name: "Chemistry", file: "chemistry-11.pdf" },
  { name: "Biology", file: "biology-11.pdf" },
  { name: "Computer Science", file: "computer-science-11.pdf" },
  { name: "English", file: "english-11.pdf" },
];

export const metadata = {
  title: "Plus One Christmas Exam Portions & Weightage 2026 | Exam Focus Plus",
  description:
    "Download Plus One Christmas Exam 2026 subject-wise portions and weightage PDFs for Mathematics, Physics, Chemistry, Biology, Computer Science and English.",
  keywords: [
    "Plus One Christmas Exam Portions 2026",
    "Plus One Christmas Exam Weightage",
    "Plus One Portions PDF",
    "Plus One Physics Portions",
    "Plus One Maths Portions",
    "Plus One Chemistry Portions",
  ],
};

export default function PlusOnePortionsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-green-800 to-green-600 px-5 py-8 text-center text-white shadow-lg">
          <div className="mb-3 text-4xl">🎄</div>
          <h1 className="text-2xl font-bold sm:text-3xl">
            Plus One Christmas Exam Portions & Weightage 2026
          </h1>
          <p className="mt-3 text-sm text-green-50 sm:text-base">
            Subject-wise portions and weightage PDFs for Plus One Christmas Examination 2026.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-bold text-gray-900">
            Subject-wise Portions PDF
          </h2>
          <p className="mb-5 text-sm leading-6 text-gray-600">
            Select your subject to view or download the Plus One Christmas Exam
            2026 portions and weightage PDF. Use these materials to plan your
            revision and prepare for the examination.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => {
              const pdfPath = "/pdf/portions/" + subject.file;

              return (
                <div
                  key={subject.file}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-100 text-xl">
                      📘
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      {subject.name}
                    </h3>
                  </div>

                  <p className="mb-4 text-sm text-gray-500">
                    Plus One Christmas Exam 2026
                  </p>

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
                </div>
              );
            })}
          </div>
        </section>

        <div className="mb-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
          <h2 className="mb-1 font-semibold text-blue-900">
            Preparation Tip
          </h2>
          <p className="text-sm leading-6 text-blue-800">
            Check the subject-wise portions before starting your preparation.
            Complete the prescribed topics and revise important concepts
            regularly.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="/plus-one"
            className="rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-900"
          >
            Back to Plus One
          </a>
          <a
            href="/plus-one-improvement-26"
            className="rounded-lg border border-green-700 px-5 py-2.5 text-sm font-semibold text-green-700 hover:bg-green-50"
          >
            Plus One Improvement Exam 2026
          </a>
        </div>
      </div>
    </main>
  );
}