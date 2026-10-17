import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Exam Focus Plus",
  description:
    "Contact Exam Focus Plus regarding educational resources, corrections, feedback, and website-related enquiries.",
  alternates: {
    canonical: "https://examfocusplus.in/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <article className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
        <p className="mb-2 font-bold text-blue-700">
          Exam Focus Plus
        </p>

        <h1 className="mb-6 text-3xl font-extrabold text-gray-900">
          Contact Us
        </h1>

        <div className="space-y-5 leading-7 text-gray-700">
          <p>
            We welcome your questions, feedback, and suggestions regarding
            Exam Focus Plus and its educational resources.
          </p>

          <h2 className="text-xl font-bold text-gray-900">
            How Can We Help?
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>Report incorrect information or broken links.</li>
            <li>Request corrections to study materials.</li>
            <li>Share feedback about our website.</li>
            <li>Contact us about content ownership or copyright concerns.</li>
          </ul>

          <p>
            For enquiries, please contact us through our official
            communication channel provided on the Exam Focus Plus
            YouTube channel.
          </p>

          <p>
            When contacting us about a specific page, please include its
            URL and a brief description of your concern.
          </p>
        </div>
      </article>
    </main>
  );
}