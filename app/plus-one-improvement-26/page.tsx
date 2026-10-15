import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plus One Improvement Exam 2026 Question Papers and Answer Keys",
  description:
    "Download Kerala Plus One Improvement Exam 2026 question papers and answer keys for English, Maths and Physics.",
  alternates: {
    canonical: "https://examfocusplus.in/plus-one-improvement-26",
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
    name: "Maths (Commerce)",
    questionPaper: "/pdf/plus-one-improvement-26/maths-question-paper.pdf",
    answerKey: "/pdf/plus-one-improvement-26/maths-answerkey.pdf",
  },
  {
    name: "English",
    questionPaper: "/pdf/plus-one-improvement-26/english-question-paper.pdf",
    answerKey: "/pdf/plus-one-improvement-26/english-answerkey.pdf",
  },
  {
    name: "Chemistry",
    questionPaper: "",
    answerKey: "",
  },
  {
    name: "Botany",
    questionPaper: "",
    answerKey: "",
  },
  {
    name: "Zoology",
    questionPaper: "",
    answerKey: "",
  },
  {
    name: "Computer Science",
    questionPaper: "",
    answerKey: "",
  },
  {
    name: "Economics",
    questionPaper: "",
    answerKey: "",
  },
  {
    name: "Accountancy",
    questionPaper: "",
    answerKey: "",
  },
  {
    name: "Business Studies",
    questionPaper: "",
    answerKey: "",
  },
  {
    name: "History",
    questionPaper: "",
    answerKey: "",
  },
  {
    name: "Political Science",
    questionPaper: "",
    answerKey: "",
  },
  {
    name: "Geography",
    questionPaper: "",
    answerKey: "",
  },
  {
    name: "Sociology",
    questionPaper: "",
    answerKey: "",
  },
  {
    name: "Psychology",
    questionPaper: "",
    answerKey: "",
  },
  {
    name: "Malayalam",
    questionPaper: "",
    answerKey: "",
  },
  {
    name: "Hindi",
    questionPaper: "",
    answerKey: "",
  },
];

function DownloadButton({ href }: { href: string }) {
  if (!href) {
    return <span className="text-xs text-gray-400">Coming Soon</span>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-md bg-blue-700 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-blue-800 sm:text-sm"
    >
      Download
    </a>
  );
}

export default function PlusOneImprovementPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-2 py-6 sm:px-5">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-700">
            Exam Focus Plus
          </p>

          <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Plus One Improvement Exam 2026
          </h1>

          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Question Papers and Answer Keys
          </p>
        </header>

        <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
          <table className="w-full min-w-[430px] border-collapse text-left text-sm">
            <thead>
              <tr className="