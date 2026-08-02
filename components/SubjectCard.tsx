import Link from "next/link";
import { LucideIcon } from "lucide-react";

type SubjectCardProps = {
  title: string;
  href: string;
  icon: LucideIcon;
  color: string;
};

export default function SubjectCard({
  title,
  href,
  icon: Icon,
  color,
}: SubjectCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-3xl border border-gray-200 shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <div
        className={
          "w-20 h-20 rounded-full flex items-center justify-center mb-6 " +
          color
        }
      >
        <Icon size={40} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
        {title}
      </h2>

      <p className="mt-3 text-gray-500">
        Chapter Wise Revision
      </p>
    </Link>
  );
}