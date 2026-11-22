import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class 8 Christmas Exam 2026 | Time Table, Portions & Question Papers - Exam Focus Plus",
  description:
    "Get Kerala Class 8 Christmas Exam 2026 timetable, subject-wise portions and 2025 previous year question papers. Access exam preparation resources for Class 8 students at Exam Focus Plus.",
  keywords: [
    "Class 8 Christmas Exam 2026",
    "Class 8 Christmas Exam Time Table 2026",
    "Class 8 Christmas Exam Portions 2026",
    "Class 8 Christmas Exam Question Papers 2025",
    "Class 8 Christmas Exam Question Papers 2026",
    "Class 8 Christmas Exam Question Paper 2026",
    "Class 8 Previous Year Question Papers",
    "Kerala Class 8 Study Materials",
    "Kerala Class 8 Christmas Exam",
    "Class 8 Exam Preparation",
    "Class 8 PDF Study Materials",
    "Exam Focus Plus"
  ],
  alternates: {
    canonical: "/class-8",
  },
  openGraph: {
    title: "Class 8 Christmas Exam 2026 | Exam Focus Plus",
    description:
      "Find Class 8 Christmas exam timetable, portions and previous year question papers for Kerala students.",
    url: "https://examfocusplus.in/class-8",
    siteName: "Exam Focus Plus",
    type: "website",
  },
};

const sections = [
  {
    title: "Christmas Exam Time Table 2026",
    description:
      "Check the Class 8 Christmas examination timetable with subject-wise dates and session details. Use the schedule to plan your revision and prepare for each examination.",
    icon: "📅",
    href: "/class-8-christmas-timetable-26",
    button: "View Time Table",
  },
  {
    title: "Christmas Exam Portions 2026",
    description:
      "Access Class 8 Christmas exam portions and subject-wise PDF study materials. Check the lessons and topics included in the examination to organise your preparation.",
    icon: "📚",
    href: "/class-8-portions-26",
    button: "View Portions",
  },
  {
    title: "Christmas Exam Question Papers 2025",
    description:
      "Practise with Class 8 previous year Christmas examination question papers. English Medium and available Malayalam Medium PDF papers are provided for subject-wise practice.",
    icon: "📝",
    href: "/class-8-previous-year-questions-26",
    button: "View Question Papers",
  },
];

export default function Class8Page() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">
          <p className="mb-3 font-semibold text-blue-600">
            EXAM FOCUS PLUS
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Class 8 Christmas Exam 2026
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Welcome to the Class 8 Christmas Exam section of Exam Focus
            Plus. This page helps Kerala Class 8 students and parents
            access useful examination resources in one place. Students
            can find the Christmas Exam Time Table 2026, subject-wise
            Christmas Exam Portions and Previous Year Question Papers
            2025. The timetable provides examination dates and session
            details to help students plan their revision. The portions
            section provides subject-wise study materials in PDF format.
            Students can also practise using previous year question
            papers to understand question patterns and improve their
            exam preparation. Available resources can be accessed
            through the links below on mobile phones, tablets and
            computers. Exam Focus Plus aims to make Kerala school
            examination resources simple and easy to access.
          </p>
        </div>

        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Class 8 Christmas Exam Resources
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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

              <a
                href={section.href}
                className="mt-5 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                {section.button}
                <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}