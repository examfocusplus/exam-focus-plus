import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Class 5 Christmas Exam 2026 | Time Table, Portions & Question Papers",
  description:
    "Find Class 5 Christmas Exam 2026 time table, exam portions and previous year question papers for Kerala students at Exam Focus Plus.",
  alternates: {
    canonical: "/class-5",
  },
};

const sections = [
  {
    title: "Christmas Exam Time Table",
    description:
      "Check the Class 5 Christmas examination schedule and plan your study days.",
    icon: "📅",
    href: "/class-5/christmas-exam-time-table",
  },
  {
    title: "Christmas Exam Portions",
    description:
      "Find the subject-wise lessons and topics included in the Christmas examination.",
    icon: "📚",
    href: "/class-5/christmas-exam-portions",
  },
  {
    title: "Previous Year Question Papers",
    description:
      "Practise previous year question papers to understand question patterns and prepare for exams.",
    icon: "📝",
    href: "/class-5/previous-year-question-papers",
  },
];

export default function Class5Page() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">
          <p className="mb-3 font-semibold text-blue-600">
            EXAM FOCUS PLUS
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Class 5 Christmas Exam 2026
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Welcome to the Class 5 Christmas Exam section of Exam Focus Plus,
            created to help Kerala students prepare for school examinations
            in an organised way. Here, students and parents can find
            information related to the Christmas examination in one place.
            The section brings together the Christmas Exam Time Table,
            Christmas Exam Portions and Previous Year Question Papers for
            Class 5. Use the time table to plan revision and understand the
            examination schedule. Check the portions to know which lessons
            and topics to prepare for each subject. Practise with previous
            year question papers to become familiar with question patterns,
            improve time management and build confidence before the
            examination. Teachers and parents can use these resources to
            guide children during revision. We aim to keep the information
            clear, accessible and easy to follow on mobile phones and
            computers. Please revisit this page for updates and newly added
            Class 5 Christmas examination resources.
          </p>
        </div>

        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Class 5 Christmas Exam Resources
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">
                {section.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">
                {section.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {section.description}
              </p>

              <p className="mt-5 font-semibold text-blue-600">
                View Details →
              </p>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}