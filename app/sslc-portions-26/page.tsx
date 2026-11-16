import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "SSLC Christmas Exam Portions 2026 PDF – Class 10 All Subjects | Exam Focus Plus",
  description:
    "Download Kerala SSLC Christmas Exam 2026 portions PDF for Malayalam, English, Hindi, Maths, Physics, Chemistry, Biology and Social Science.",
  keywords: [
    "SSLC Christmas Exam 2026",
    "SSLC Christmas Exam Portions 2026",
    "SSLC Portions PDF",
    "Class 10 Christmas Exam Portions",
    "Kerala SSLC Portions",
    "SSLC Malayalam Portions",
    "SSLC English Portions",
    "SSLC Hindi Portions",
    "SSLC Maths Portions",
    "SSLC Physics Portions",
    "SSLC Chemistry Portions",
    "SSLC Biology Portions",
    "SSLC Social Science Portions",
    "Class 10 Study Materials",
    "Kerala Class 10 Exam Preparation",
    "Exam Focus Plus",
  ],
  alternates: {
    canonical: "/sslc-portions-26",
  },
  openGraph: {
    title: "SSLC Christmas Exam Portions 2026 PDF",
    description:
      "Download SSLC Class 10 Christmas examination portions PDFs for all available subjects.",
    url: "https://examfocusplus.in/sslc-portions-26",
    siteName: "Exam Focus Plus",
    type: "website",
  },
};

const subjects = [
  {
    name: "Malayalam",
    file: "malayalam-10.pdf",
    icon: "📖",
    color: "bg-orange-50",
  },
  {
    name: "English",
    file: "english-10.pdf",
    icon: "🔤",
    color: "bg-blue-50",
  },
  {
    name: "Hindi",
    file: "hindi-10.pdf",
    icon: "📝",
    color: "bg-purple-50",
  },
  {
    name: "Mathematics",
    file: "maths-10.pdf",
    icon: "📐",
    color: "bg-cyan-50",
  },
  {
    name: "Chemistry",
    file: "chemistry-10.pdf",
    icon: "🧪",
    color: "bg-green-50",
  },
  {
    name: "Physics",
    file: "physics-10.pdf",
    icon: "⚛️",
    color: "bg-indigo-50",
  },
  {
    name: "Biology",
    file: "biology-10.pdf",
    icon: "🧬",
    color: "bg-emerald-50",
  },
  {
    name: "Social Science",
    file: "social-10.pdf",
    icon: "🌍",
    color: "bg-amber-50",
  },
];

export default function SSLCPortionsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <section className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-green-800 via-green-700 to-emerald-900 px-5 py-10 text-center text-white shadow-lg sm:px-10 sm:py-14">
          <div className="mb-3 text-5xl">📚</div>

          <p className="mb-2 text-sm font-bold tracking-widest text-green-200">
            EXAM FOCUS PLUS
          </p>

          <h1 className="text-3xl font-extrabold sm:text-4xl">
            SSLC Christmas Exam Portions 2026
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-green-100 sm:text-base">
            Download subject-wise SSLC Class 10 Christmas
            examination portions PDFs. Access all available
            subject materials in one place.
          </p>
        </section>

        <section className="mb-8">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Subject-wise Portions PDF
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Select your subject to view or download the PDF.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => {
              const pdfPath =
                "/pdf/portions/" + subject.file;

              return (
                <div
                  key={subject.name}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={
                        "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl " +
                        subject.color
                      }
                    >
                      <span className="text-3xl">
                        {subject.icon}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {subject.name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        SSLC Class 10
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <a
                      href={pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-green-700 px-3 py-3 text-sm font-bold text-white transition hover:bg-green-800"
                    >
                      <span>👁️</span>
                      View PDF
                    </a>

                    <a
                      href={pdfPath}
                      download={subject.file}
                      className="flex items-center justify-center gap-2 rounded-xl border border-green-700 bg-white px-3 py-3 text-sm font-bold text-green-700 transition hover:bg-green-50"
                    >
                      <span>⬇️</span>
                      Download
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">ℹ️</span>

            <div>
              <h2 className="font-bold text-gray-900">
                Important Information
              </h2>

              <p className="mt-2 text-sm leading-7 text-gray-700">
                Students can view the portions PDF online or
                download it for offline study. Please check the
                relevant subject PDF before starting your
                examination preparation.
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap justify-center gap-3 pb-6">
          <Link
            href="/sslc"
            className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            ← Back to SSLC
          </Link>

          <Link
            href="/"
            className="rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Home
          </Link>
        </div>

      </div>
    </main>
  );
}