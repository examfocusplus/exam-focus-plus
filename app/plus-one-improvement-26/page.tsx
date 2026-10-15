import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plus One Improvement Exam 2026 Question Papers and Answer Keys",
  description:
    "Download Kerala Plus One Improvement Exam 2026 question papers and answer keys. Get Physics, Chemistry, Mathematics, Biology and other subject question papers for Kerala Higher Secondary students.",
  keywords: [
    "Plus One Improvement Exam 2026",
    "Plus One Improvement Question Paper",
    "Plus One Improvement Answer Key",
    "Kerala Plus One Physics Improvement Question Paper",
    "Plus One Chemistry Question Paper",
    "Plus One Maths Question Paper",
    "Plus One Biology Question Paper",
    "Exam Focus Plus",
  ],
  alternates: {
    canonical: "https://examfocusplus.in/plus-one-improvement",
  },
};

const subjects = [
  "Physics",
  "Chemistry",
  "Mathematics",
  "Biology",
  "English",
  "Computer Science",
  "Economics",
  "Accountancy",
  "Business Studies",
];

export default function PlusOneImprovementPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700">
            Exam Focus Plus
          </p>

          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Plus One Improvement Exam 2026
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600">
            Plus One Improvement Exam question papers and answer keys for
            Kerala Higher Secondary students.
          </p>
        </header>

        <section className="mb-10 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Plus One Improvement Question Papers
          </h2>

          <p className="leading-7 text-gray-600">
            Find subject-wise question papers and use them to practise for your
            Plus One Improvement Examination. Question papers will be added
            here when available.
          </p>
        </section>

        <section className="mb-10 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Plus One Improvement Answer Keys
          </h2>

          <p className="leading-7 text-gray-600">
            Check your answers and evaluate your preparation using the
            corresponding subject answer keys.
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Subject-wise Question Papers and Answer Keys
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <article
                key={subject}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Plus One {subject}
                </h3>

                <p className="mb-4 text-sm leading-6 text-gray-600">
                  Improvement Exam 2026 Question Paper and Answer Key
                </p>

                <p className="text-sm font-medium text-gray-500">
                  Question Paper and Answer Key — Coming Soon
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-xl bg-blue-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-blue-900">
            Prepare for Your Plus One Improvement Exam
          </h2>

          <p className="leading-7 text-blue-900">
            Visit Exam Focus Plus for Kerala syllabus study materials,
            question papers, answer keys and exam preparation resources.
          </p>
        </section>
      </div>
    </main>
  );
}