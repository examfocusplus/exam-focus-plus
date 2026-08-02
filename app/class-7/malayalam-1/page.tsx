import Link from "next/link";

export default function Malayalam1() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">

      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Class 7 മലയാളം 1
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <Link
          href="#"
          className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-gray-900">
            Chapter 1
          </h2>
          <p className="mt-3 text-gray-600">
            Video Class & Revision
          </p>
        </Link>

        <Link
          href="#"
          className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-gray-900">
            Chapter 2
          </h2>
          <p className="mt-3 text-gray-600">
            Video Class & Revision
          </p>
        </Link>

        <Link
          href="#"
          className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-gray-900">
            Chapter 3
          </h2>
          <p className="mt-3 text-gray-600">
            Video Class & Revision
          </p>
        </Link>

      </div>

    </main>
  );
}