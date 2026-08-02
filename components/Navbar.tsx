import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Exam Focus Plus
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </Link>

          <Link
            href="/sslc"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            SSLC
          </Link>

          <Link
            href="/plus-one"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Plus One
          </Link>

          <Link
            href="/plus-two"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Plus Two
          </Link>
        </nav>
      </div>
    </header>
  );
}