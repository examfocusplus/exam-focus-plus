import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-6xl font-bold">
          Exam Focus Plus
        </h1>

        <p className="mt-6 text-2xl">
          Kerala State Syllabus Learning Platform
        </p>

        <input
          type="text"
          placeholder="Search Notes, Chapters, Videos..."
          className="mt-10 w-full max-w-2xl p-5 rounded-xl text-black"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          <Link href="/classes">
            <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition">
              <h2 className="text-4xl font-bold">5-12</h2>
              <p>Classes</p>
            </div>
          </Link>

          <Link href="/video-classes">
            <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition">
              <h2 className="text-4xl font-bold">500+</h2>
              <p>Video Classes</p>
            </div>
          </Link>

          <Link href="/mcqs">
            <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition">
              <h2 className="text-4xl font-bold">1000+</h2>
              <p>MCQs</p>
            </div>
          </Link>

          <Link href="/study-notes">
            <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition">
              <h2 className="text-4xl font-bold">PDF</h2>
              <p>Study Notes</p>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}