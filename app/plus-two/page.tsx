import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plus Two Christmas Exam 2026 | Exam Focus Plus",
  description:
    "Find Kerala Plus Two Christmas Exam 2026 timetable, exam portions and previous year question papers at Exam Focus Plus.",
  alternates: {
    canonical: "/plus-two",
  },
};

const sections = [
  {
    title: "Christmas Exam Time Table",
    description:
      "The Plus Two Christmas examination timetable will be published here after its official release. Students can revisit this section to find subject-wise examination dates and schedules. The timetable will help students plan their study time and organise revision before the examination. Please check again for official updates.",
    icon: "📅",
  },
  {
    title: "Christmas Exam Portions",
    description:
      "The Plus Two Christmas examination portions will be updated here when official details become available. Students will be able to check the subjects, chapters and topics included in the examination. This section will help students organise their preparation and focus on the required lessons. Please revisit this page for updates.",
    icon: "📚",
  },
  {
    title: "Previous Year Question Papers",
    description:
      "Plus Two previous year Christmas examination question papers will be added here when available. Students can use these papers to practise different question types, understand examination patterns and improve time management. Regular practice can help students prepare with greater confidence. Visit this section again for new question papers and resources.",
    icon: "📝",
  },
];

export default function PlusTwoPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 font-semibold text-blue-600">
            EXAM FOCUS PLUS
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Plus Two Exam Resources 2026
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Welcome to the Kerala Plus Two section of Exam Focus Plus.
            This page is designed to help Higher Secondary students
            find examination information and useful study resources
            in one place. Students can explore the Christmas Exam
            Time Table, Christmas Exam Portions and Previous Year
            Question Papers. The timetable section will provide
            subject-wise examination dates after the official
            announcement. The portions section will help students
            identify the lessons and topics to prepare for their
            examinations. Previous year question papers will provide
            opportunities to practise and understand question
            patterns. Our aim is to make educational resources
            simple, organised and accessible for students, parents
            and teachers. The page will be updated as new examination
            information and study materials become available.
            Students are encouraged to revisit Exam Focus Plus
            regularly for the latest Plus Two examination updates
            and learning resources.
          </p>
        </div>

        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Plus Two Exam Resources
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 text-4xl">
                {section.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {section.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {section.description}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                <span>●</span>
                Coming Soon
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}