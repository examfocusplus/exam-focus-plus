import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class 9 Christmas Exam 2026 | Time Table, Portions & Question Papers",
  description:
    "Find Class 9 Christmas Exam 2026 timetable, subject-wise portions and previous year question papers for Kerala students. View and download study materials at Exam Focus Plus.",
  keywords: [
    "Class 9 Christmas Exam 2026",
    "Class 9 Christmas Exam Question Paper 2026",
    "Class 9 Christmas Exam Question Paper 2025",
    "Class 9 Christmas Exam Time Table",
    "Class 9 Christmas Exam Portions",
    "Class 9 Question Papers 2025",
    "Kerala Class 9 Study Materials",
    "9th Standard Christmas Exam",
    "Class 9 Previous Year Question Papers",
    "Exam Focus Plus",
  ],
  alternates: {
    canonical: "https://examfocusplus.in/class-9",
  },
};

const sections = [
  {
    title: "Christmas Exam Time Table 2026",
    description:
      "Check the Class 9 Christmas examination timetable for 2026 with subject-wise exam dates and FN/AN sessions. View the timetable and plan your examination preparation.",
    icon: "📅",
    link: "/class-9-christmas-timetable-26",
    button: "View Time Table",
  },
  {
    title: "Christmas Exam Portions 2026",
    description:
      "Access subject-wise Class 9 Christmas exam portions PDF. Study materials are available for Malayalam, Hindi, English, Mathematics, Biology, Chemistry, Physics, Geography and History.",
    icon: "📚",
    link: "/class-9-portions-26",
    button: "View Portions",
  },
  {
    title: "Christmas Exam Question Papers 2025",
    description:
      "Practise with Class 9 previous Christmas examination question papers. Access subject-wise question papers in English Medium and Malayalam Medium to improve your exam preparation.",
    icon: "📝",
    link: "/class-9-previous-year-questions-26",
    button: "View Question Papers",
  },
];

export default function Class9Page() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">
          <p className="mb-3 font-semibold text-blue-600">
            EXAM FOCUS PLUS
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Class 9 Christmas Exam 2026
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Welcome to the Class 9 Christmas Exam section of Exam Focus
            Plus. This page helps Kerala Class 9 students and parents
            access useful examination information and study materials
            in one place. Find the Christmas Exam Time Table 2026,
            subject-wise examination portions and previous year
            Christmas question papers. Students can check examination
            dates, identify the topics to study and practise previous
            question papers for better preparation. The resources are
            organised for easy access on mobile phones, tablets and
            computers. Visit the individual sections to view or
            download the available study materials.
          </p>
        </div>

        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Class 9 Christmas Exam Resources
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
                href={section.link}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                {section.button}
                <span>→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}