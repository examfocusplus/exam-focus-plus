import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-3xl font-bold">
          Exam Focus Plus
        </h2>

        <p className="mt-3 text-gray-300">
          Kerala Chapter Wise Revision Platform
        </p>

        <nav
          aria-label="Footer navigation"
          className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm"
        >
          <Link
            href="/about"
            className="text-gray-300 transition hover:text-white"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="text-gray-300 transition hover:text-white"
          >
            Contact Us
          </Link>

          <Link
            href="/privacy-policy"
            className="text-gray-300 transition hover:text-white"
          >
            Privacy Policy
          </Link>

          <Link
            href="/disclaimer"
            className="text-gray-300 transition hover:text-white"
          >
            Disclaimer
          </Link>
        </nav>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Exam Focus Plus. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}