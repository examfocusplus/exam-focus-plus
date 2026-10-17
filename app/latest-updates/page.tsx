import Link from "next/link";

export default function LatestUpdatesPage() {
  const updates = [
    {
      title: "Plus One Improvement Exam 2026",
      description:
        "Plus One Improvement Exam 2026 question papers and answer keys.",
      href: "/plus-one-improvement-26",
      label: "Question Papers & Answer Keys",
      featured: true,
    },
    {
      title: "New Video Classes Added",
      description:
        "Watch the latest video classes and improve your exam preparation.",
      href: "https://youtube.com/@examfocusplus-hg7hb?si=kPU2Qwy-Ind0u4UI",
      label: "Watch Videos",
      featured: false,
    },
    {
      title: "New Study Notes Uploaded",
      description:
        "Explore study notes to help you prepare for your examinations.",
      href: "/study-notes",
      label: "Study Notes",
      featured: false,
    },
    {
      title: "New MCQ Practice Sets Available",
      description:
        "Practise multiple-choice questions and test your knowledge.",
      href: "/mcqs",
      label: "Practise MCQs",
      featured: false,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">
            Exam Focus Plus
          </p>

          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-5xl">
            Latest Updates
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Get the latest exam notifications, question papers, answer keys
            and study materials in one place.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {updates.map((item) => (
            <article
              key={item.title}
              className={`flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7 ${
                item.featured
                  ? "border-blue-300 ring-1 ring-blue-100"
                  : "border-slate-200"
              }`}
            >
              {item.featured && (
                <span className="mb-4 w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                  Latest Update
                </span>
              )}

              <h2 className="text-xl font-extrabold leading-snug text-slate-900">
                {item.title}
              </h2>

              <p className="mt-3 flex-grow text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              {item.href.startsWith("https://") ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
                >
                  {item.label} <span>↗️</span>
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
                >
                  {item.label} <span>→</span>
                </Link>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}