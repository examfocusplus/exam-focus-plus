import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Exam Focus Plus",
  description:
    "Read the Privacy Policy of Exam Focus Plus to understand how we handle information, cookies, advertising, and third-party services.",
  alternates: {
    canonical: "https://examfocusplus.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6">
      <article className="mx-auto max-w-4xl rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-10">
        <header className="mb-8 border-b border-gray-200 pb-6">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-700">
            Exam Focus Plus
          </p>

          <h1 className="text-3xl font-extrabold text-gray-900">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Last updated: October 17, 2026
          </p>
        </header>

        <div className="space-y-7 text-sm leading-7 text-gray-700 sm:text-base">
          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              1. Introduction
            </h2>
            <p>
              Welcome to Exam Focus Plus
              (https://examfocusplus.in). We provide educational resources
              for students, including study materials, question papers,
              answer keys, notes, MCQs, and examination updates.
              This Privacy Policy explains how information may be collected
              and used when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              2. Information We Collect
            </h2>
            <p>
              We do not ask visitors to provide personal information merely
              to browse our educational content. However, information may
              be collected when you voluntarily contact us or use features
              that request personal details.
            </p>
            <p className="mt-2">
              Our hosting provider and other services may process technical
              information, such as browser type, device information, IP
              address, and website usage data, for security and operational
              purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              3. Cookies and Similar Technologies
            </h2>
            <p>
              Cookies are small files stored on your device by websites
              or third-party services. They may be used to support website
              functionality, understand website traffic, and deliver
              advertising where applicable.
            </p>
            <p className="mt-2">
              You can manage or disable cookies through your browser
              settings. Some website features may not function as expected
              if certain cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              4. Google AdSense and Advertising
            </h2>
            <p>
              Exam Focus Plus may use Google AdSense or other advertising
              services to display advertisements. If advertising services
              are enabled, Google and its partners may use cookies or
              similar technologies to serve, measure, and personalise ads,
              subject to applicable settings and consent requirements.
            </p>
            <p className="mt-2">
              Visitors can learn about Google's advertising practices and
              manage available advertising preferences through Google's
              advertising settings and privacy resources.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              5. How We Use Information
            </h2>
            <p>Information may be used to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Maintain and improve our website.</li>
              <li>Understand website performance and usage.</li>
              <li>Respond to messages and enquiries.</li>
              <li>Protect the website against spam, abuse, and security threats.</li>
              <li>Support advertising services where enabled.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              6. Third-Party Links and Services
            </h2>
            <p>
              Our website may contain links to external websites, educational
              resources, video platforms, or downloadable files. These
              third-party services have their own privacy policies and
              practices. We are not responsible for the privacy practices
              of external websites.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              7. Children's Privacy
            </h2>
            <p>
              Our website provides educational resources that may be useful
              to school students. We do not knowingly seek to collect
              personal information from children unnecessarily. Parents
              or guardians who have concerns about information submitted
              through our website may contact us.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              8. Data Security
            </h2>
            <p>
              We take reasonable steps to protect information processed
              through our website. However, no method of transmission or
              electronic storage can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy when our website, services,
              or legal requirements change. Any updated version will be
              published on this page with a revised update date.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              10. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please
              contact the Exam Focus Plus website administrator through
              the contact details provided on our website, if available.
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