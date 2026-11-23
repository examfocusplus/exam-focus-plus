import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exam Focus Plus | Kerala School Study Materials",
  description:
    "Exam Focus Plus is an educational platform for Kerala syllabus students. Find SSLC, Plus One, Plus Two and Class 5 to 9 study materials, examination timetables, syllabus portions, previous year question papers, model question papers, answer keys, notes and educational updates. Our class-wise and subject-wise resources help students find useful materials for exam preparation, practice and revision. Explore Kerala school examination resources and learning content in one convenient place.",
  keywords: [
    "Exam Focus Plus",
    "Kerala syllabus study materials",
    "SSLC study materials Kerala",
    "SSLC Christmas exam timetable 2026",
    "class 5 Christmas exam timetable 2026",
    "class 6 Christmas exam timetable 2026",
    "class 7 Christmas exam timetable 2026",
    "class 8 Christmas exam timetable 2026",
    "class 9 Christmas exam timetable 2026",
    "SSLC Christmas exam question paper 2025",
    "SSLC Christmas exam question paper 2026",
    "Plus One Christmas exam question paper 2026",
    "Plus Two Christmas exam question paper 2026",
    "Plus One Christmas exam question paper 2025",
    "Plus Two Christmas exam question paper 2025",
    "class 5 christmas exam question paper 2025",
    "class 6 christmas exam question paper 2025",
    "class 7 christmas exam question paper 2025",
    "class 8 christmas exam question paper 2025",
    "class 9 christmas exam question paper 2025",
    "class 5 christmas exam question paper 2026",
    "Class 5 to 9 Christmas exam timetable 2026",
    "Kerala Christmas exam portions",
    "Previous year question papers Kerala",
    "Kerala model question papers",
    "Kerala exam answer keys",
    "Kerala school exam updates",
  ],
  alternates: {
    canonical: "https://examfocusplus.in/",
  },
  openGraph: {
    title: "Exam Focus Plus | Kerala School Study Materials",
    description:
      "Explore Kerala syllabus study materials, exam timetables, portions, question papers, answer keys and educational updates for SSLC, Plus One, Plus Two and Classes 5 to 9.",
    url: "https://examfocusplus.in/",
    siteName: "Exam Focus Plus",
    type: "website",
  },
};

const categories = [
  {
    title: "What's New",
    subtitle: "Latest Exam Updates & Notifications",
    href: "/latest-updates",
    icon: "🔔",
    color: "from-orange-500 to-amber-400",
  },
  {
    title: "Class 12",
    subtitle: "Plus Two Study Materials",
    href: "/plus-two",
    icon: "🎓",
    color: "from-blue-600 to-blue-400",
  },
  {
    title: "Class 11",
    subtitle: "Plus One Study Materials",
    href: "/plus-one",
    icon: "📘",
    color: "from-purple-600 to-purple-400",
  },
  {
    title: "SSLC",
    subtitle: "Class 10 Notes, Papers & Answers",
    href: "/sslc",
    icon: "📚",
    color: "from-emerald-600 to-green-400",
  },
  {
    title: "Class 9",
    subtitle: "Notes & Question Papers",
    href: "/class-9",
    icon: "📝",
    color: "from-pink-600 to-rose-400",
  },
  {
    title: "Class 8",
    subtitle: "Notes & Question Papers",
    href: "/class-8",
    icon: "📖",
    color: "from-cyan-600 to-sky-400",
  },
  {
    title: "Class 7",
    subtitle: "Notes & Question Papers",
    href: "/class-7",
    icon: "✏️",
    color: "from-indigo-600 to-indigo-400",
  },
  {
    title: "Class 6",
    subtitle: "Notes & Question Papers",
    href: "/class-6",
    icon: "📒",
    color: "from-teal-600 to-teal-400",
  },
  {
    title: "Class 5",
    subtitle: "Notes & Question Papers",
    href: "/class-5",
    icon: "📗",
    color: "from-red-600 to-orange-400",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-xl font-extrabold text-white">
              E
            </div>

            <div>
              <h1 className="text-lg font-extrabold tracking-tight text-blue-900 sm:text-xl">
                Exam Focus Plus
              </h1>
              <p className="text-xs text-slate-500">
                Learn • Practice • Succeed
              </p>
            </div>
          </Link>

          <a
            href="https://youtube.com/@examfocusplus-hg7hb?si=kPU2Qwy-Ind0u4UI"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-700"
          >
            ▶️ YouTube
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 pb-7 pt-8 sm:pb-10 sm:pt-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-indigo-700 px-5 py-8 text-white shadow-lg sm:px-10 sm:py-12">
          <p className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide">
            YOUR LEARNING PARTNER
          </p>

          <h2 className="max-w-2xl text-3xl font-extrabold leading-tight sm:text-5xl">
            Your Exams.
            <br />
            Your Preparation.
            <br />
            Your Success.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
            Kerala syllabus study materials, question papers, answer keys and
            the latest exam updates — all in one place.
          </p>

          <Link
            href="/latest-updates"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-900 transition hover:bg-blue-50"
          >
            Explore Latest Updates <span>→</span>
          </Link>
        </div>
      </section>

      {/* About Exam Focus Plus - Visible SEO Description */}
      <section className="mx-auto max-w-6xl px-4 pb-7">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="mb-3 text-lg font-extrabold text-slate-900">
            About Exam Focus Plus
          </h2>

          <p className="text-sm leading-6 text-slate-600">
            Exam Focus Plus is an educational platform created to support
            Kerala syllabus students in their learning and examination
            preparation. Students from SSLC, Plus One, Plus Two and Classes
            5 to 9 can explore useful study materials and educational
            resources through our website. We provide Christmas exam
            timetables, syllabus portions, previous year question papers,
            model question papers, answer keys, notes and the latest exam
            updates. Our resources are organised class-wise to help students
            find relevant materials easily. Students can use these resources
            to understand their syllabus, practise questions, revise important
            topics and plan their study schedules. We aim to make educational
            content accessible and support students throughout their exam
            preparation. Along with website resources, Exam Focus Plus also
            shares educational videos, revision sessions and exam preparation
            content through its YouTube channel. Explore our website to find
            useful learning materials and examination updates in one place.
          </p>
        </div>
      </section>

      {/* Class Categories */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="mb-6 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Choose Your Class
            </p>
            <h2 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Explore Study Materials
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={flex h-2 w-full bg-gradient-to-r ${category.color}}
              />

              <div className="p-4 sm:p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-2xl transition group-hover:scale-105 sm:h-14 sm:w-14 sm:text-3xl">
                  {category.icon}
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                  {category.title}
                </h3>

                <p className="mt-2 min-h-10 text-xs leading-5 text-slate-500 sm:text-sm">
                  {category.subtitle}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                  <span className="text-xs font-bold text-blue-700 sm:text-sm">
                    Explore
                  </span>
                  <span className="text-lg text-blue-700 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* YouTube Section */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-red-100 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-3xl">
              ▶️
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-red-600">
                Watch & Learn
              </p>

              <h2 className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">
                Exam Focus Plus on YouTube
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Watch educational videos, exam preparation classes and
                revision sessions for Kerala syllabus students.
              </p>
            </div>
          </div>

          <a
            href="https://youtube.com/@examfocusplus-hg7hb?si=kPU2Qwy-Ind0u4UI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Visit Channel <span>↗️</span>
          </a>
        </div>
      </section>
    </main>
  );
}