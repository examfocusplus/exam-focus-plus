import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class 8 Christmas Exam Portions 2026 PDF | Kerala",
  description:
    "Download Kerala Class 8 Christmas Exam Portions 2026 subject-wise PDF files. Access Malayalam, English, Mathematics, Hindi, Chemistry, Biology, Physics and Social Science study materials.",
  keywords: [
    "Class 8 Christmas Exam Portions 2026",
    "Class 8 Christmas Exam Portions PDF",
    "Kerala Class 8 Portions",
    "8th Standard Christmas Exam Portions",
    "Class 8 Subject Wise Portions",
    "Class 8 Study Materials Kerala",
    "Class 8 Christmas Exam 2026",
    "Exam Focus Plus",
  ],
  alternates: {
    canonical: "https://examfocusplus.in/class-8-portions-26",
  },
  openGraph: {
    title: "Class 8 Christmas Exam Portions 2026",
    description:
      "Download subject-wise Kerala Class 8 Christmas Exam Portions 2026 PDF.",
    url: "https://examfocusplus.in/class-8-portions-26",
    siteName: "Exam Focus Plus",
    type: "website",
  },
};

const subjects = [
  { name: "Malayalam", file: "malayalam-8.pdf", icon: "📖" },
  { name: "English", file: "english-8.pdf", icon: "📝" },
  { name: "Mathematics", file: "maths-8.pdf", icon: "📐" },
  { name: "Hindi", file: "hindi-8.pdf", icon: "📚" },
  { name: "Chemistry", file: "chemistry-8.pdf", icon: "🧪" },
  { name: "Biology", file: "biology-8.pdf", icon: "🧬" },
  { name: "Physics", file: "physics-8.pdf", icon: "⚛️" },
  { name: "Social Science", file: "social-8.pdf", icon: "🌍" },
];

export default function Class8PortionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-5xl">

        <section className="mb-8 rounded-2xl bg-gradient-to-r from-indigo-950 to-blue-800 p-6 text-white shadow-lg sm:p-9">
          <div className="mb-3 text-3xl">📚</div>

          <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
            CLASS 8 CHRISTMAS EXAM PORTIONS 2026
          </h1>

          <p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base">
            Prepare for the Kerala Class 8 Christmas Examination 2026
            with subject-wise portions and study materials. This page
            provides easy access to PDF files for Malayalam, English,
            Mathematics, Hindi, Chemistry, Biology, Physics and Social
            Science. Students can refer to the individual subject PDFs
            to identify the topics included in the examination and
            organise their preparation. These resources are arranged
            in one place to make studying easier and more convenient.
            Each document can be opened online or downloaded for
            offline reading and revision. Use the subject-wise portions
            to plan your study schedule and revise the relevant topics
            before the Christmas examination.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-slate-800 sm:text-2xl">
            Class 8 Subject-wise Portions
          </h2>

          <p className="mb-5 text-sm text-slate-600">
            Select your subject to view or download the Christmas Exam 2026 PDF.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => {
              const pdfPath = "/pdf/portions/" + subject.file;

              return (
                <article
                  key={subject.file}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-3xl">{subject.icon}</span>

                    <div>
                      <h3 className="text-lg font-bold text-slate-800">
                        {subject.name}
                      </h3>
                      <p className="text-xs text-slate-500">
                        Class 8 | Christmas Exam 2026
                      </p>
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-6 text-slate-600">
                    Class 8 {subject.name} Christmas Exam 2026 portions.
                    Access the subject-wise study topics in PDF format.
                  </p>

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
                </article>
              );
            })}
          </div>
        </section>

        <div className="mt-8 rounded-xl bg-blue-50 p-4 text-sm leading-6 text-blue-900">
          <strong>Note:</strong> Each subject PDF contains the respective
          Class 8 Christmas exam portions. Make sure the correct PDF files
          are uploaded before opening or downloading them.
        </div>

        <div className="mt-8 text-center">
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