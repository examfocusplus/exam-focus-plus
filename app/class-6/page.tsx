import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Class 6 Christmas Exam 2026 | Time Table, Portions & Question Papers",
  description:
    "Get Class 6 Christmas Exam 2026 resources for Kerala syllabus students. View the latest Class 6 Christmas exam timetable, subject-wise portions and previous year question papers in English and Malayalam Medium. Find study materials and exam preparation resources at Exam Focus Plus.",
  keywords: [
    "Class 6 Christmas Exam 2026",
    "Class 6 Christmas Exam Time Table 2026",
    "Class 6 Christmas Exam Portions 2026",
    "Class 6 Christmas Exam Question Papers 2025",
    "Class 6 Christmas Exam Question Paper 2025",
    "Class 6 Christmas Exam Question Paper 2026",
    "Class 6 Previous Year Question Papers",
    "Class 6 Kerala Syllabus",
    "Class 6 English Medium Question Papers",
    "Class 6 Malayalam Medium Question Papers",
    "Kerala Christmas Exam 2026",
    "Exam Focus Plus",
  ],
  alternates: {
    canonical: "https://examfocusplus.in/class-6",
  },
  openGraph: {
    title: "Class 6 Christmas Exam 2026 | Exam Focus Plus",
    description:
      "Find Class 6 Christmas exam timetable, portions and previous year question papers for Kerala syllabus students.",
    url: "https://examfocusplus.in/class-6",
    type: "website",
  },
};

const sections = [
  {
    title: "Christmas Exam Time Table",
    description:
      "Check the Class 6 Christmas Exam Time Table 2026 with subject-wise examination dates and sessions. Students can use the timetable to organise their study schedule, plan revision and prepare for each examination.",
    icon: "📅",
    button: "View Time Table",
    link: "/class-6-christmas-timetable-26",
  },
  {
    title: "Christmas Exam Portions",
    description:
      "Explore Class 6 Christmas Exam Portions 2026 and get useful information for subject-wise exam preparation. Revise textbook lessons, practise important questions and follow a regular study plan to prepare confidently for the examination.",
    icon: "📚",
    button: "View Portions",
    link: "/class-6-portions-26",
  },
  {
    title: "Previous Year Question Papers",
    description:
      "Access Class 6 Christmas Exam Question Papers 2025 for subjects including Malayalam, Hindi, English, Mathematics, Social Science and Science. English Medium and Malayalam Medium question papers are available for selected subjects. Practise previous papers to understand question patterns and improve exam preparation.",
    icon: "📝",
    button: "View Question Papers",
    link: "/class-6-previous-year-questions-26",
  },
];

export default function Class6Page() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">
          <p className="mb-3 font-semibold text-blue-600">
            EXAM FOCUS PLUS
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Class 6 Christmas Exam 2026
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Welcome to the Class 6 Christmas Exam section of Exam Focus
            Plus. This page helps Kerala syllabus Class 6 students and
            parents find useful examination information and study
            resources in one place. Students can access the Christmas
            Exam Time Table 2026, subject-wise examination portions and
            previous year Christmas exam question papers. The timetable
            provides subject-wise examination dates and sessions to help
            students plan their revision. The portions page provides
            useful information to organise subject-wise preparation.
            Students can also practise previous year question papers
            from different subjects, including available English Medium
            and Malayalam Medium papers. Regular revision, textbook
            reading and question paper practice can help students
            improve their understanding, time management and confidence.
            These resources are designed to be easy to access on mobile
            phones, tablets and computers. Explore the sections below
            to find the Class 6 Christmas examination resources you
            need.
          </p>
        </div>

        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Class 6 Christmas Exam Resources
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 text-4xl">
                {section.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {section.title}
              </h3>

              <p className="mt-3 flex-grow leading-7 text-gray-600">
                {section.description}
              </p>

              <Link
                href={section.link}
                className="mt-6 inline-flex w-fit items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                {section.button} →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}