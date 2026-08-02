export default function QuestionPaper() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Plus One Physics Question Paper
      </h1>

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8 text-center">
        
        <div className="h-96 bg-gray-200 rounded-2xl flex items-center justify-center mb-6">
          <p className="text-gray-600 text-xl">
            Question Paper Preview
          </p>
        </div>

        <a
          href="/pdf/physics-question-paper.pdf"
          download
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full"
        >
          Download Question Paper
        </a>

      </div>
    </main>
  );
}