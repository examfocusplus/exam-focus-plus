import Link from "next/link";

type Props = {
  title: string;
  href: string;
};

export default function ClassCard({ title, href }: Props) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="text-5xl mb-4">📚</div>

      <h3 className="text-2xl font-bold group-hover:text-blue-700">
        {title}
      </h3>

      <p className="mt-3 text-gray-500">
        Notes • Videos • MCQ • PDFs
      </p>
    </Link>
  );
}