import Link from "next/link";

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
      <section className="px-4 pb-8 pt-10 sm:pb-12 sm:pt-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-indigo-700 px-5 py-10 text-white shadow-lg sm:px-10 sm:py-14">
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
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-900 transition hover:bg-blue-50"
          >
            Explore Latest Updates <span>→</span>
          </Link>
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

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="text-center sm:text-left">
              <h2 className="font-extrabold text-blue-900">
                Exam Focus Plus
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                A learning platform for Kerala syllabus students.
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-xs font-medium text-slate-600">
              <Link className="hover:text-blue-700" href="/about">
                About Us
              </Link>

              <Link className="hover:text-blue-700" href="/contact">
                Contact Us
              </Link>

              <Link className="hover:text-blue-700" href="/privacy-policy">
                Privacy Policy
              </Link>

              <Link className="hover:text-blue-700" href="/disclaimer">
                Disclaimer
              </Link>
            </nav>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-5 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Exam Focus Plus. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}