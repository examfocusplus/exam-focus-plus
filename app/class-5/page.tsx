import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class 5 Christmas Exam 2026 | Exam Focus Plus",
  description:
    "Get Class 5 Christmas Exam 2026 updates, timetable, exam portions and previous year question papers for Kerala students. Visit Exam Focus Plus for study resources and examination updates.",
  alternates: {
    canonical: "/class-5",
  },
};

const sections = [
  {
    title: "Christmas Exam Time Table",
    description:
      "The Class 5 Christmas examination timetable will be published here once it is officially released. Students and parents can revisit this page to check the subject-wise examination dates and schedule. The timetable will help students plan their revision and prepare for each examination in an organised manner. Please wait for the official announcement.",
    icon: "📅",
  },
  {
    title: "Christmas Exam Portions",
    description:
      "The Class 5 Christmas examination portions will be updated here when the official portions are available. Students will be able to check the subjects, lessons and topics included in the examination. This section is intended to help students understand what they need to study and organise their revision effectively. Please check again for updates.",
    icon: "📚",
  },
  {
    title: "Previous Year Question Papers",
    description:
      "Class 5 previous year Christmas examination question papers will be added to this section when available. Students can use these question papers for practice and to become familiar with different types of examination questions. Practising question papers can also help improve time management and confidence. Please revisit this page for future updates and study resources.",
    icon: "📝",
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
            Welcome to the Class 5 Christmas Exam section of Exam Focus
            Plus. This page is designed to help Kerala Class 5 students
            and parents find important information related to the
            Christmas examination in one place. Students will find
            dedicated sections for the Christmas Exam Time Table,
            Christmas Exam Portions and Previous Year Question Papers.
            The timetable section will provide examination dates and
            subject-wise schedules after the official announcement.
            The portions section will help students identify the lessons
            and topics to prepare for their examinations. The previous
            year question paper section will provide practice resources
            to understand question patterns and improve examination
            preparation. Parents and teachers can also use these
            resources to guide students during their revision. We aim
            to make educational information simple, organised and
            accessible on mobile phones, tablets and computers.
            Information will be updated whenever official examination
            details and relevant study materials become available.
            Students are encouraged to revisit this page regularly
            for the latest Class 5 Christmas examination updates.
          </p>
        </div>

        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Class 5 Christmas Exam Resources
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