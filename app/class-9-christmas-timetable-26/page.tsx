import type { Metadata } from "next";
import { CalendarDays, Clock, BookOpen, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Class 9 Christmas Exam Time Table 2026 – Kerala Class 9",
  description:
    "Check the Kerala Class 9 Christmas Exam Time Table 2026. Get the latest subject-wise exam dates, examination schedule and timetable updates for Class 9 students.",
  keywords: [
    "Class 9 Christmas Exam Time Table 2026",
    "Kerala Class 9 Time Table 2026",
    "Class 9 Christmas Exam 2026",
    "9th Standard Christmas Exam Time Table",
    "Class 9 Exam Dates 2026",
    "Kerala Class 9 Christmas Exam",
    "Class 9 Exam Schedule 2026",
    "Class 9 Christmas Exam Portions",
    "Exam Focus Plus"
  ],
  openGraph: {
    title: "Class 9 Christmas Exam Time Table 2026",
    description:
      "Check the latest Kerala Class 9 Christmas Exam 2026 timetable updates and subject-wise examination schedule.",
    type: "website"
  }
};

export default function Class9ChristmasTimetablePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
      <div className="mb-6 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          <CalendarDays size={17} />
          Kerala Class 9
        </div>

        <h1 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white sm:text-3xl">
          CLASS 9 CHRISTMAS EXAM TIME TABLE 2026
        </h1>

        <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
          Check the Kerala Class 9 Christmas Examination Time Table
          2026. Find the latest exam schedule, subject-wise dates
          and important timetable updates for Class 9 students.
        </p>
      </div>

      <section className="mb-6 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 dark:border-blue-900 dark:bg-blue-950/30 sm:p-7">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            <CalendarDays size={23} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Christmas Exam Time Table 2026
            </h2>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Class 9 – Kerala State Syllabus
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 shrink-0 text-amber-600" size={20} />

            <div>
              <h3 className="font-semibold text-amber-900 dark:text-amber-300">
                Official Timetable Awaited
              </h3>
              <p className="mt-1 text-sm leading-6 text-amber-800 dark:text-amber-200">
                The official subject-wise Class 9 Christmas Exam
                Time Table 2026 has not been published yet.
                The examination dates and subject-wise schedule
                will be updated here once officially announced.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
          <div className="mb-2 flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <Clock size={19} />
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Exam Schedule
            </h3>
          </div>
          <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
            Subject-wise examination dates and session timings
            will be added after the official announcement.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
          <div className="mb-2 flex items-center gap-2 text-green-600 dark:text-green-400">
            <BookOpen size={19} />
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Exam Preparation
            </h3>
          </div>
          <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
            Check the available study resources and prepare
            for your Class 9 Christmas examinations.
          </p>
        </div>
      </section>

      <div className="rounded-xl bg-gray-50 p-5 text-center dark:bg-gray-800">
        <h2 className="font-bold text-gray-900 dark:text-white">
          Class 9 Christmas Exam Study Materials
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Visit the Class 9 resource page for examination
          updates and study materials.
        </p>
        <a
          href="/class-9"
          className="mt-4 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          View Class 9 Resources
        </a>
      </div>
    </main>
  );
}