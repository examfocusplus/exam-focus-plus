import type { Metadata } from "next";
import { FileText, Eye, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "SSLC Christmas Exam Question Paper 2025 PDF | Kerala Class 10",
  description:
    "Download Kerala SSLC Christmas Exam Question Papers 2025 for Class 10. Get English Medium and Malayalam Medium question papers for Malayalam, English, Hindi, Maths, Biology, Physics, Chemistry and Social Science in PDF format.",
  keywords: [
    "SSLC Christmas Exam Question Paper 2025",
    "Kerala SSLC Christmas Exam 2025",
    "Class 10 Christmas Exam Question Papers",
    "SSLC Question Papers PDF",
    "SSLC English Medium Question Papers",
    "SSLC Malayalam Medium Question Papers",
    "Kerala Class 10 Question Papers",
    "SSLC Maths Question Paper 2025",
    "SSLC Biology Question Paper 2025",
    "SSLC Physics Question Paper 2025",
    "SSLC Chemistry Question Paper 2025",
    "SSLC Social Science Question Paper 2025",
    "Exam Focus Plus"
  ],
  openGraph: {
    title: "SSLC Christmas Exam Question Paper 2025",
    description:
      "Download Kerala SSLC Christmas Exam 2025 question papers in English and Malayalam Medium PDF.",
    type: "website"
  }
};

const englishPapers = [
  { name: "Malayalam", file: "malayalam_10.pdf" },
  { name: "Hindi", file: "hindi_10.pdf" },
  { name: "English", file: "english_10.pdf" },
  { name: "Maths", file: "maths_10.pdf" },
  { name: "Biology", file: "biology_10.pdf" },
  { name: "Physics", file: "physics_10.pdf" },
  { name: "Chemistry", file: "chemistry_10.pdf" },
  { name: "Social Science", file: "social_10.pdf" }
];

const malayalamPapers = [
  { name: "Maths", file: "maths-mm_10.pdf" },
  { name: "Biology", file: "biology-mm_10.pdf" },
  { name: "Physics", file: "physics-mm_10.pdf" },
  { name: "Chemistry", file: "chemistry-mm_10.pdf" },
  { name: "Social Science", file: "social-mm_10.pdf" }
];

function PaperCard({
  name,
  file
}: {
  name: string;
  file: string;
}) {
  const pdfPath = "/pdf/previous-year-questions/" + file;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-900">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 dark:bg-red-950">
          <FileText size={21} />
        </div>
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
          {name}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <a
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 rounded-lg bg-blue-600 px-2 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
        >
          <Eye size={14} />
          View
        </a>

        <a
          href={pdfPath}
          download
          className="flex items-center justify-center gap-1 rounded-lg bg-green-600 px-2 py-2 text-xs font-semibold text-white transition hover:bg-green-700"
        >
          <Download size={14} />
          Download
        </a>
      </div>
    </div>
  );
}

export default function SSLCPreviousYearQuestionsPage() {
  return (
    <main className="mx-auto max-w-6xl px-3 py-5 sm:px-5 sm:py-8">
      <div className="mb-6 text-center">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          <FileText size={14} />
          Kerala SSLC Class 10
        </div>

        <h1 className="text-xl font-bold leading-tight text-gray-900 dark:text-white sm:text-3xl">
          SSLC CHRISTMAS EXAM QUESTION PAPER 2025
        </h1>

        <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-gray-600 dark:text-gray-300">
          Download Kerala SSLC Christmas Exam 2025 question papers
          for Class 10. Subject-wise PDF question papers are available
          in English Medium and Malayalam Medium. View online or
          download the question papers for exam preparation.
        </p>
      </div>

      <section className="mb-7">
        <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            English Medium
          </h2>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            8 Papers
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {englishPapers.map((paper) => (
            <PaperCard
              key={paper.file}
              name={paper.name}
              file={paper.file}
            />
          ))}
        </div>
      </section>

      <section className="mb-7">
        <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Malayalam Medium
          </h2>
          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-950 dark:text-green-300">
            5 Papers
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {malayalamPapers.map((paper) => (
            <PaperCard
              key={paper.file}
              name={paper.name}
              file={paper.file}
            />
          ))}
        </div>
      </section>

      <div className="rounded-xl bg-gray-50 p-4 text-center dark:bg-gray-800">
        <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
          Prepare well for your SSLC examinations!
        </p>
        <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
          More study materials and exam resources are available on
          Exam Focus Plus.
        </p>
      </div>
    </main>
  );
}