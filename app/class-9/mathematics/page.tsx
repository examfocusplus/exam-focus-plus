export default function Mathematics() {
  const chapters = [
    "Chapter 1",
    "Chapter 2",
    "Chapter 3",
    "Chapter 4",
    "Chapter 5",
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Class 9 Mathematics
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {chapters.map((chapter) => (
          <div
            key={chapter}
            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-900">
              {chapter}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}