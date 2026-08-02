export default function LatestUpdates() {
  const updates = [
    "📢 Class 10 First Term Question Paper Added",
    "📘 Plus One Chemistry Notes Updated",
    "🎥 Class 8 Maths Chapter 3 Video Uploaded",
    "✅ SSLC Answer Key Published",
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Latest Updates
      </h2>

      <div className="space-y-5">
        {updates.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}