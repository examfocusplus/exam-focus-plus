import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSLC Christmas Exam 2026 | Time Table, Portions & Question Papers",
  description:
    "Find SSLC Christmas Exam 2026 updates, timetable, exam portions and previous year question papers for Kerala students at Exam Focus Plus.",
  alternates: {
    canonical: "/sslc",
  },
};

const sections = [
  {
    title: "Christmas Exam Time Table",
    description:
      "The Kerala SSLC Christmas examination timetable will be published here after its official release. Students can revisit this page to find subject-wise examination dates and schedules. The timetable will help Class 10 students organise their study time, plan revision and prepare for each subject. Please check this section again for the latest official examination updates.",
    icon: "📅",
  },
  {
    title: "Christmas Exam Portions",
    description:
      "The SSLC Christmas examination portions will be updated here when the official details become available. Students will be able to check the subjects, lessons and topics included in the examination. This section will help Class 10 students identify the chapters to revise and organise their preparation effectively. Please revisit this page for updates.",
    icon: "📚",
  },
  {
    title: "Previous Year Question Papers",
    description:
      "Kerala SSLC previous year Christmas examination question papers will be added here when available. Students can use these papers to practise different types of questions and understand examination patterns. Regular practice can help improve time management, accuracy and confidence. Visit this section again for question papers and additional examination preparation resources.",
    icon: "📝",
  },
];

export default function SSLCPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">
          <p className="mb-3 font-semibold text-blue-600">
            EXAM FOCUS PLUS
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            SSLC Christmas Exam 2026
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Welcome to the Kerala SSLC Christmas Exam section of Exam
            Focus Plus. This page is designed to help Class 10 students
            and parents find useful information related to the SSLC
            Christmas examination. Students can find dedicated sections
            for the Christmas Exam Time Table, Christmas Exam Portions
            and Previous Year Question Papers. The timetable section
            will provide subject-wise examination dates after the
            official schedule is announced. The portions section will
            help students identify the lessons and topics they need to
            prepare for the examination. The previous year question
            paper section will offer practice materials to help students
            understand question patterns and improve their preparation.
            Parents and teachers can also use these resources to guide
            students during revision. Our aim is to make examination
            information simple, organised and accessible on mobile
            phones, tablets and computers. We will update this page
            whenever official examination details and relevant study
            materials become available. Students are encouraged to
            revisit this page regularly for the latest SSLC Christmas
            examination updates.
          </p>
        </div>

        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          SSLC Christmas Exam Resources
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