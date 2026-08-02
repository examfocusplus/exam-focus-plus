import Link from "next/link";

export default function Class9() {
  const subjects = [
    "malayalam-1",
    "malayalam-2",
    "hindi",
    "english",
    "physics",
    "chemistry",
    "biology",
    "history",
    "geography",
    "mathematics",
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Class 9 Subjects
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {subjects.map((subject) => (
          <Link
            key={subject}
            href={`/class-9/${subject}`}
            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-900 capitalize">
              {subject.replace("-", " ")}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}