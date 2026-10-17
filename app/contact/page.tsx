import Link from "next/link";

export default function ContactPage() {
  const email = "deside.destination.tk23@gmail.com";

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Exam Focus Plus
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Contact Us
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            If you have any questions, suggestions, or concerns regarding
            Exam Focus Plus, feel free to contact us using the email address
            below.
          </p>

          <div className="mt-8 rounded-2xl bg-blue-50 p-5 sm:p-6">
            <h2 className="text-lg font-bold text-slate-900">
              Email Us
            </h2>

            <p className="mt-2 break-all text-blue-800">
              <a
                href={`mailto:${email}`}
                className="font-semibold underline decoration-blue-300 underline-offset-4 hover:text-blue-600"
              >
                {email}
              </a>
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Click the email address above to send us a message.
            </p>
          </div>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            We appreciate your feedback and will do our best to respond to
            your enquiries.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}