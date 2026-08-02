import Link from "next/link";

export default function OnamExam() {
  const classes = [
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Plus One",
    "Plus Two",
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Onam Exam Time Table
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {classes.map((item) => (
          <Link
            key={item}
            href={
              "/onam-exam/" +
              item.toLowerCase().replace(" ", "-")
            }
            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-900">
              {item}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}