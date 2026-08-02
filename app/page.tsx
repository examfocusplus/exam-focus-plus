import Link from "next/link";

const classes = [
  { name: "Class 5", href: "/class-5" },
  { name: "Class 6", href: "/class-6" },
  { name: "Class 7", href: "/class-7" },
  { name: "Class 8", href: "/class-8" },
  { name: "Class 9", href: "/class-9" },
  { name: "Class 10", href: "/sslc" },
  { name: "Plus One", href: "/plus-one" },
  { name: "Plus Two", href: "/plus-two" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <section className="py-16 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Exam Focus Plus
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Kerala School Chapter Wise Revision
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                {item.name}
              </h2>

              <p className="mt-3 text-gray-500">
                Open Subjects →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Onam Exam Floating Button */}
      <Link
        href="/onam-exam"
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-5 py-4 rounded-l-2xl shadow-xl hover:scale-105 transition-all duration-300 z-50"
      >
        <div className="text-center">
          <p className="text-lg font-bold">
            Onam Exam
          </p>
          <p className="text-sm">
            Time Table
          </p>
        </div>
      </Link>
    </main>
  );
}