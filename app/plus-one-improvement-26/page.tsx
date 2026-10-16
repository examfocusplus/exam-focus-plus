import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plus One Improvement Exam 2026 Question Papers & Answer Keys (PDF) - Kerala",
  description:
    "Download Kerala Higher Secondary (+1) Plus One Improvement / Supplementary Exam 2026 Question Papers and Official Answer Keys PDF for Physics, Chemistry, Maths, Biology, Commerce & Humanities.",
  keywords: [
    "Plus One Improvement Exam 2026",
    "Kerala Plus One Answer Key 2026",
    "Plus One Improvement Exam Question Paper 2026",
    "DHSE Kerala Plus One Question Paper",
    "plus one improvement exam answer key 2026",
    "Kerala Higher Secondary +1 Answer Key PDF"
  ],
  alternates: {
    canonical: "https://examfocusplus.in/plus-one-improvement-26",
  },
  openGraph: {
    title: "Plus One Improvement Exam 2026 Question Papers & Answer Keys (PDF)",
    description: "Download Kerala Plus One (+1) Improvement Exam 2026 Question Papers and Answer Keys PDF.",
    url: "https://examfocusplus.in/plus-one-improvement-26",
    siteName: "Exam Focus Plus",
    type: "article",
  },
};

const subjects = [
  {
    name: "Physics",
    questionPaper: "/pdf/plus-one-improvement-26/physics-question-paper.pdf",
    answerKey: "/pdf/plus-one-improvement-26/physics-answerkey.pdf",
  },
  {
    name: "Maths (Science)",
    questionPaper: "/pdf/plus-one-improvement-26/maths-question-paper.pdf",
    answerKey: "/pdf/plus-one-improvement-26/maths-answerkey.pdf",
  },
  {
    name: "English",
    questionPaper: "/pdf/plus-one-improvement-26/english-question-paper.pdf",
    answerKey: "/pdf/plus-one-improvement-26/english-answerkey.pdf",
  },
  { name: "Chemistry", questionPaper: "", answerKey: "" },
  { name: "Botany", questionPaper: "", answerKey: "" },
  { name: "Zoology", questionPaper: "", answerKey: "" },
  { name: "Computer Science", questionPaper: "", answerKey: "" },
  { name: "Economics", questionPaper: "", answerKey: "" },
  { name: "Accountancy", questionPaper: "", answerKey: "" },
  { name: "Business Studies", questionPaper: "", answerKey: "" },
  { name: "History", questionPaper: "", answerKey: "" },
  { name: "Political Science", questionPaper: "", answerKey: "" },
  { name: "Geography", questionPaper: "", answerKey: "" },
  { name: "Sociology", questionPaper: "", answerKey: "" },
  { name: "Psychology", questionPaper: "", answerKey: "" },
  { name: "Malayalam", questionPaper: "", answerKey: "" },
  { name: "Hindi", questionPaper: "", answerKey: "" },
];

function DownloadButton({ href }: { href: string }) {
  if (!href) {
    return (
      <span className="text-xs font-medium text-gray-400 sm:text-sm">
        Coming Soon
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-md bg-blue-700 px-3 py-2 text-center text-xs font-semibold text-white shadow-sm hover:bg-blue-800 sm:text-sm"
    >
      Download
    </a>
  );
}

export default function PlusOneImprovementPage() {
  // Schema for Google Search Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    "name": "Plus One Improvement Exam 2026 Question Papers & Answer Keys",
    "description": "Download Kerala Higher Secondary (+1) Improvement exam question papers and answer keys in PDF format.",
    "provider": {
      "@type": "Organization",
      "name": "Exam Focus Plus",
      "url": "https://examfocusplus.in"
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-2 py-6 sm:px-5">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-5xl">
        <header className="mb-6 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
            Exam Focus Plus
          </p>

          <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Plus One Improvement Exam 2026 Question Papers & Answer Keys
          </h1>

          <p className="mt-2 text-sm text-gray-600 sm:text-base max-w-2xl mx-auto">
            Download official DHSE Kerala Class 11 (+1) Improvement & Supplementary Examination 2026 question papers with solved answer keys for Science, Commerce, and Humanities.
          </p>
        </header>

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <table className="w-full table-fixed border-collapse text-left text-sm">
            <thead>
              <tr className="bg-sky-800 text-white">
                <th className="w-[32%] px-3 py-4 font-bold sm:px-5">
                  Subject
                </th>
                <th className="w-[34%] px-2 py-4 font-bold sm:px-5">
                  Question Paper
                </th>
                <th className="w-[34%] px-2 py-4 font-bold sm:px-5">
                  Answer Key
                </th>
              </tr>
            </thead>

            <tbody>
              {subjects.map((subject, index) => (
                <tr
                  key={subject.name}
                  className={
                    index % 2 === 0
                      ? "border-b border-gray-200 bg-white"
                      : "border-b border-gray-200 bg-sky-50"
                  }
                >
                  <td className="break-words px-3 py-4 font-semibold text-gray-800 sm:px-5">
                    {subject.name}
                  </td>

                  <td className="px-2 py-4 sm:px-5">
                    <DownloadButton href={subject.questionPaper} />
                  </td>

                  <td className="px-2 py-4 sm:px-5">
                    <DownloadButton href={subject.answerKey} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SEO Text Content Block */}
        <section className="mt-8 rounded-lg bg-white p-5 border border-gray-200 shadow-sm text-gray-700 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            Kerala Higher Secondary (+1) Improvement Exam 2026 Overview
          </h2>
          <p className="mb-3">
            The Directorate of Higher Secondary Education (DHSE), Kerala conducts the Plus One Improvement / Supplementary examinations for Class 11 students to improve their scores. Students who appeared for the exam can check and download the official question papers and answer keys prepared by subject experts.
          </p>
          <p>
            Use the links in the table above to download subject-wise PDF files for Physics, Chemistry, Mathematics, Biology, Accountancy, and other subjects. PDF files for missing subjects will be updated shortly after the exams conclude.
          </p>
        </section>

        <p className="mt-4 text-center text-xs text-gray-500">
          More question papers and answer keys will be added soon.
        </p>
      </div>
    </main>
  );
}