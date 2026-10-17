import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Exam Focus Plus",
  description:
    "Read the disclaimer for Exam Focus Plus regarding educational content, question papers, answer keys, external links, and exam updates.",
  alternates: {
    canonical: "https://examfocusplus.in/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6">
      <article className="mx-auto max-w-4xl rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-10">
        <header className="mb-8 border-b border-gray-200 pb-6">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-700">
            Exam Focus Plus
          </p>

          <h1 className="text-3xl font-extrabold text-gray-900">
            Disclaimer
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Last updated: October 17, 2026
          </p>
        </header>

        <div className="space-y-7 text-sm leading-7 text-gray-700 sm:text-base">
          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              1. General Information
            </h2>
            <p>
              Exam Focus Plus (https://examfocusplus.in) provides educational
              resources for students, including study notes, multiple-choice
              questions, question papers, answer keys, video lessons, and
              examination updates. The information is provided for general
              educational and informational purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              2. Accuracy of Information
            </h2>
            <p>
              We make reasonable efforts to keep the information on this
              website accurate and up to date. However, we do not guarantee
              that all content is complete, accurate, current, or free from
              errors. Students should verify important examination details
              with official announcements from the relevant authorities.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              3. Question Papers and Answer Keys
            </h2>
            <p>
              Question papers, answer keys, and other examination materials
              may be provided for educational and revision purposes. Unless
              explicitly stated and verified, materials on this website
              should not be assumed to be officially issued, approved, or
              endorsed by the Directorate of Higher Secondary Education
              (DHSE), Kerala, or any other examination authority.
            </p>
            <p className="mt-2">
              Students should consult official sources whenever available,
              particularly for examination dates, timetables, results, and
              final answers.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              4. No Guarantee of Results
            </h2>
            <p>
              Our study materials and educational resources are intended
              to support learning and exam preparation. We do not guarantee
              any particular marks, grades, ranks, or examination results.
              Individual outcomes depend on many factors, including
              preparation and performance.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              5. External Links
            </h2>
            <p>
              This website may link to third-party websites, educational
              platforms, or video services for additional information.
              We do not control or guarantee the accuracy, availability,
              or content of those external websites. Visiting external
              links is at your own discretion.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              6. Copyright and Ownership
            </h2>
            <p>
              Third-party names, logos, textbooks, question papers, and
              other materials remain the property of their respective
              owners. Their appearance on this website does not imply
              ownership or endorsement. If you believe content on this
              website infringes your rights, please contact the website
              administrator with the relevant details for review.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              7. Advertising
            </h2>
            <p>
              This website may display advertisements or use advertising
              services such as Google AdSense. Advertisements may be
              provided by third parties. Their appearance does not
              necessarily represent an endorsement by Exam Focus Plus.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              8. Changes to This Disclaimer
            </h2>
            <p>
              We may update this Disclaimer when necessary. Changes will
              be published on this page along with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              9. Contact
            </h2>
            <p>
              If you have questions or concerns about this Disclaimer or
              content published on this website, please contact the
              Exam Focus Plus website administrator through the contact
              details provided on our website, if available.
            </p>
          </section>
        </div>

        <footer className="mt-10 border-t border-gray-200 pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Exam Focus Plus. All rights reserved.
        </footer>
      </article>
    </main>
  );
}