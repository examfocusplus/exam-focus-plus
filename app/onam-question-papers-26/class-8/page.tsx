import Link from "next/link";

const subjects = [
  "Malayalam I",
  "Malayalam II",
  "English",
  "Hindi",
  "Maths",
  "Physics",
  "Chemistry",
  "Biology",
  "Social Science",
];

export default function Class8Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-2 text-white">
        Class 8 Onam Exam Question Papers & Answer Keys 2026
      </h1>

      <p className="text-center text-gray-300 mb-8">
        Download Class 8 Onam Exam 2026 Question Papers and Answer Keys.
      </p>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4 text-left">Subject</th>
              <th className="p-4 text-center">Question Paper</th>
              <th className="p-4 text-center">Answer Key</th>
            </tr>
          </thead>

          <tbody>
            {subjects.map((subject) => (
              <tr key={subject} className="border-b">
                <td className="p-4 text-black font-medium">{subject}</td>

                <td className="p-4 text-center">
                  <Link
                    href="#"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    View PDF
                  </Link>
                </td>

                <td className="p-4 text-center">
                  <Link
                    href="#"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  >
                    View PDF
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}