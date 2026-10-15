import Link from "next/link";

const classes = [
  { name: "Class 5", href: "/onam-question-papers-26/class-5" },
  { name: "Class 6", href: "/onam-question-papers-26/class-6" },
  { name: "Class 7", href: "/onam-question-papers-26/class-7" },
  { name: "Class 8", href: "/onam-question-papers-26/class-8" },
  { name: "Class 9", href: "/onam-question-papers-26/class-9" },
  { name: "SSLC (Class 10)", href: "/onam-question-papers-26/sslc" },
  { name: "Plus One", href: "/onam-question-papers-26/plus-one" },
  { name: "Plus Two", href: "/onam-question-papers-26/plus-two" },
];

export default function OnamQuestionPapersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-2 text-white">
        Onam Exam Question Papers 2026
      </h1>

      <p className="text-center text-gray-300 mb-8">
        Select your class to view question papers.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {classes.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <h2 className="text-lg font-bold text-black">
              {item.name}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}