import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kerala Christmas Exam 2026 - Class 5 to 12",
  description:
    "Kerala Christmas Exam 2026 study resources for Classes 5 to 12. Find Christmas exam timetable, portions and previous year question papers.",
  alternates: {
    canonical: "/christmas-exam-2026",
  },
};

const classes = [
  { name: "Class 5", href: "/class-5" },
  { name: "Class 6", href: "/class-6" },
  { name: "Class 7", href: "/class-7" },
  { name: "Class 8", href: "/class-8" },
  { name: "Class 9", href: "/class-9" },
  { name: "SSLC - Class 10", href: "/sslc" },
  { name: "Plus One - Class 11", href: "/plus-one" },
  { name: "Plus Two - Class 12", href: "/plus-two" },
];

export default function ChristmasExamPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <section className="mb-8 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-green-700">
          Exam Focus Plus
        </p>

        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Kerala Christmas Exam 2026
        </h1>

        <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600">
          Find Christmas Exam 2026 updates and study resources for Kerala
          syllabus students from Class 5 to Class 12. Select your class below
          to access the available exam information.
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-green-200 bg-green-50 p-5">
        <h2 className="mb-2 text-xl font-bold text-gray-900">
          Christmas Exam 2026 – Class-wise Updates
        </h2>
        <p className="leading-7 text-gray-700">
          Class-wise Christmas Exam pages include sections for exam timetable,
          syllabus portions and previous year question papers. Information will
          be updated when it becomes available.
        </p>
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-bold text-gray-900">
          Select Your Class
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {classes.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-green-500 hover:shadow-md"
            >
              <span className="font-semibold text-gray-800">
                {item.name}
              </span>
              <span className="text-green-700">View Details →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}