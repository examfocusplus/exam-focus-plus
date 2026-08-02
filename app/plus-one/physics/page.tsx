import Link from "next/link";

export default function Physics() {
  const papers = [
    "2026 Model Question Paper",
    "2025 Previous Year Question Paper",
    "2024 Previous Year Question Paper",
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Plus One Physics
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {papers.map((paper) => (
          <div
            key={paper}
            className="bg-white rounded-3xl shadow-lg p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              {paper}
            </h2>

            <div className="flex flex-col gap-3">
              <Link
                href="/plus-one/physics/question-paper"
                className="bg-gray-900 text-white px-6 py-3 rounded-full"
              >
                View Question Paper
              </Link>

              <Link
                href="/plus-one/physics/answer-key"
                className="bg-gray-900 text-white px-6 py-3 rounded-full"
              >
                View Answer Key
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}