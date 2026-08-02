export default function LatestUpdatesPage() {
  const updates = [
    "New Video Classes Added",
    "New Study Notes Uploaded",
    "New MCQ Practice Sets Available",
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">

      <h1 className="text-5xl font-bold text-center mb-12">
        Latest Updates
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {updates.map((item) => (
          <div
            key={item}
            className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-bold">
              {item}
            </h2>

            <p className="mt-4 text-gray-600">
              Check the latest updates and learning materials.
            </p>
          </div>
        ))}
      </div>

    </main>
  );
}