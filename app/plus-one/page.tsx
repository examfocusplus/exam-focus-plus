import Link from "next/link";

export default function PlusOne() {
  const subjects = [
    "Physics",
    "Chemistry",
    "Biology",
    "Mathematics",
    "English",
    "Malayalam",
    "Computer Science",
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Plus One Question Papers & Answer Key
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {subjects.map((subject) => (
          <Link
            key={subject}
            href={"/plus-one/" + subject.toLowerCase().replace(" ", "-")}
            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-900">
              {subject}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}