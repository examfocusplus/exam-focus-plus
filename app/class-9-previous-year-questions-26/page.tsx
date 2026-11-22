import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class 9 Christmas Exam Question Paper 2025 PDF | Kerala",
  description:
    "Download Class 9 Christmas Exam Question Paper 2025 PDFs. Get Malayalam, English, Hindi, Biology, Chemistry, Physics and Social Science question papers in English and Malayalam medium.",
  keywords: [
    "Class 9 Christmas Exam Question Paper 2025",
    "Class 9 Christmas Exam Question Paper 2026",
    "Class 9 Christmas Exam Answer key 2026",
    "Class 9 Christmas Question Papers Kerala",
    "Class 9 Previous Year Question Papers",
    "9th Standard Christmas Exam Papers",
    "Class 9 Malayalam Medium Question Papers",
    "Class 9 English Medium Question Papers",
    "Kerala Class 9 Study Materials",
    "Exam Focus Plus",
  ],
  alternates: {
    canonical:
      "https://examfocusplus.in/class-9-previous-year-questions-26",
  },
};

const englishMedium = [
  { name: "Malayalam", file: "malayalam-1_9.pdf", icon: "📖" },
  { name: "English", file: "english_9.pdf", icon: "📝" },
  { name: "Hindi", file: "hindi_9.pdf", icon: "📚" },
  { name: "Biology", file: "biology_9.pdf", icon: "🧬" },
  { name: "Chemistry", file: "chemistry_9.pdf", icon: "🧪" },
  { name: "Physics", file: "physics_9.pdf", icon: "⚛️" },
  { name: "Social Science", file: "social_9.pdf", icon: "🌍" },
  { name: "Mathematics", file: "maths_9.pdf", icon: "📐" }
];

const malayalamMedium = [
  { name: "Biology", file: "biology-mm_9.pdf", icon: "🧬" },
  { name: "Chemistry", file: "chemistry-mm_9.pdf", icon: "🧪" },
  { name: "Physics", file: "physics-mm_9.pdf", icon: "⚛️" },
  { name: "Social Science", file: "social-mm_8.pdf", icon: "🌍" },
  { name: "Mathematics", file: "maths-mm_9.pdf", icon: "📐" }
];

function QuestionPaperSection({
  title,
  description,
  subjects,
}: {
  title: string;
  description: string;
  subjects: { name: string; file: string; icon: string }[];
}) {
  return (
    <section className="mb-10">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">
          {title}
        </h2>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => {
          const pdfPath = "/pdf/previous-year-questions/" + subject.file;

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
                    Class 9 | Christmas Exam 2025
                  </p>
                </div>
              </div>

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
  );
}

export default function Class9PreviousYearQuestionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <section className="mb-8 rounded-2xl bg-gradient-to-r from-indigo-950 to-blue-800 p-6 text-white shadow-lg sm:p-9">
          <div className="mb-3 text-3xl">📚</div>

          <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
            CLASS 9 CHRISTMAS EXAM QUESTION PAPER 2025
          </h1>

          <p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base">
            Prepare for your Class 9 examinations with previous Christmas exam
            question papers. This page provides subject-wise question paper
            PDFs in English Medium and Malayalam Medium. Students can access
            papers for Malayalam, English, Hindi, Biology, Chemistry, Physics
            and Social Science. Practising previous question papers can help
            students understand the examination pattern, revise important
            topics and improve time management. Select your preferred medium
            and subject to view or download the available PDF for practice.
          </p>
        </section>

        <QuestionPaperSection
          title="English Medium Question Papers"
          description="Select a subject to view or download the Class 9 Christmas Exam 2025 question paper in English Medium."
          subjects={englishMedium}
        />

        <QuestionPaperSection
          title="Malayalam Medium Question Papers"
          description="Select a subject to view or download the Class 9 Christmas Exam 2025 question paper in Malayalam Medium."
          subjects={malayalamMedium}
        />

        <div className="mt-8 rounded-xl bg-blue-50 p-4 text-sm leading-6 text-blue-900">
          <strong>Note:</strong> These PDFs are provided for study and
          examination practice. Make sure the correct PDF files are uploaded
          before opening or downloading them.
        </div>

        <div className="mt-8 text-center">
          <a
            href="/class-9"
            className="inline-block rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            ← Back to Class 9
          </a>
        </div>
      </div>
    </main>
  );
}