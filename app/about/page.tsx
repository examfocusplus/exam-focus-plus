import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Exam Focus Plus",
  description:
    "Learn about Exam Focus Plus, an educational platform providing study materials, question papers, answer keys, MCQs, and exam updates for Kerala students.",
  alternates: {
    canonical: "https://examfocusplus.in/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <article className="mx-auto max-w-4xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
        <p className="mb-2 font-bold text-blue-700">
          Exam Focus Plus
        </p>

        <h1 className="mb-6 text-3xl font-extrabold text-gray-900">
          About Us
        </h1>

        <div className="space-y-5 leading-7 text-gray-700">
          <p>
            Welcome to Exam Focus Plus, an educational platform designed
            to help students prepare for their examinations with useful
            learning resources.
          </p>

          <h2 className="text-xl font-bold text-gray-900">
            What We Offer
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>Kerala syllabus study materials for Classes 5 to 12.</li>
            <li>Subject-wise question papers and answer keys.</li>
            <li>Chapter-wise revision materials and MCQs.</li>
            <li>Educational video lessons and exam preparation resources.</li>
            <li>Examination timetables and educational updates.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900">
            Our Goal
          </h2>

          <p>
            Our goal is to make educational resources easier for students
            to find and use. We aim to support independent learning and
            examination preparation through accessible online materials.
          </p>

          <p>
            Exam Focus Plus is an independent educational platform and is
            not an official website of the Kerala Government or DHSE Kerala.
          </p>
        </div>
      </article>
    </main>
  );
}