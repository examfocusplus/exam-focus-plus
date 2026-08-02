import Link from "next/link";

export default function Class5() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">

      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Class 5 Subjects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <Link
          href="/class-5/malayalam"
          className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-gray-900">
            മലയാളം
          </h2>
          <p className="mt-3 text-gray-600">
            Chapter wise revision
          </p>
        </Link>


        <Link
          href="/class-5/english"
          className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-gray-900">
            English
          </h2>
          <p className="mt-3 text-gray-600">
            Chapter wise revision
          </p>
        </Link>


        <Link
          href="/class-5/maths"
          className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-gray-900">
            Maths
          </h2>
          <p className="mt-3 text-gray-600">
            Chapter wise revision
          </p>
        </Link>


        <Link
          href="/class-5/science"
          className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-gray-900">
            Science
          </h2>
          <p className="mt-3 text-gray-600">
            Chapter wise revision
          </p>
        </Link>


        <Link
          href="/class-5/social"
          className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-gray-900">
            Social Science
          </h2>
          <p className="mt-3 text-gray-600">
            Chapter wise revision
          </p>
        </Link>

      </div>

    </main>
  );
}