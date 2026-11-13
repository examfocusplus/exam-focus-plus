import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plus One Christmas Exam 2026 | Exam Focus Plus",
  description:
    "Find Kerala Plus One Christmas Exam 2026 timetable, exam portions, previous year question papers and Improvement Exam resources.",
  alternates: {
    canonical: "/plus-one",
  },
};

const sections = [
  {
    title: "Christmas Exam Time Table",
    description:
      "The Plus One Christmas examination timetable will be published here after its official release. Students can revisit this section to find subject-wise examination dates and schedules. The timetable will help students plan their study time and organise revision before the examination. Please check again for official updates.",
    icon: "📅",
  },
  {
    title: "Christmas Exam Portions",
    description:
      "The Plus One Christmas examination portions will be updated here when official details become available. Students will be able to check the subjects, chapters and topics included in the examination. This section will help students organise their preparation and focus on the required lessons. Please revisit this page for updates.",
    icon: "📚",
  },
  {
    title: "Previous Year Question Papers",
    description:
      "Plus One previous year Christmas examination question papers will be added here when available. Students can use these papers to practise different question types, understand examination patterns and improve time management. Regular practice can help students prepare with greater confidence. Visit this section again for new question papers and resources.",
    icon: "📝",
  },
];

export default function PlusOnePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 font-semibold text-blue-600">
            EXAM FOCUS PLUS
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Plus One Exam Resources 2026
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Welcome to the Kerala Plus One section of Exam Focus Plus.
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
            patterns. This page also provides direct access to the
            Plus One Improvement Exam 2026 resources, where students
            can find available question papers and answer key
            materials. Our aim is to make educational resources
            simple, organised and accessible for students, parents
            and teachers. The page will be updated as new examination
            information and study materials become available.
            Students are encouraged to revisit Exam Focus Plus
            regularly for the latest Plus One examination updates
            and learning resources.
          </p>
        </div>

        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Plus One Exam Resources
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

          <Link
            href="/plus-one-improvement-26"
            className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-4 text-4xl">🎓</div>

            <h3 className="text-xl font-bold text-gray-900">
              Plus One Improvement Exam 2026
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Access Plus One Improvement Exam question papers
              and available answer key resources. Visit the
              dedicated page to find subject-wise examination
              materials and PDF resources for practice.
            </p>

            <p className="mt-5 font-semibold text-blue-600">
              View Resources →
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}