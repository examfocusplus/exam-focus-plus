import Link from "next/link";

export default function Class6() {
  const subjects = [
    { name: "Malayalam 1", href: "/class-6/malayalam-1" },
    { name: "Malayalam 2", href: "/class-6/malayalam-2" },
    { name: "Hindi", href: "/class-6/hindi" },
    { name: "English", href: "/class-6/english" },
    { name: "Science", href: "/class-6/science" },
    { name: "Social Science", href: "/class-6/social" },
    { name: "Maths", href: "/class-6/maths" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">

      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Class 6 Subjects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {subjects.map((subject) => (
          <Link
            key={subject.name}
            href={subject.href}
            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-1 transition"
          >
            <h2 className="text-2xl font-bold text-gray-900">
              {subject.name}
            </h2>

            <p className="mt-3 text-gray-600">
              Chapter wise revision
            </p>
          </Link>
        ))}

      </div>

    </main>
  );
}