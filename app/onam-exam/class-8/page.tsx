export const metadata = {
  title: "Class 8 Onam Exam Time Table 2026 Kerala",
  description:
    "Class 8 Onam Exam Time Table 2026 Kerala. Download exam schedule, question papers, answer keys and study materials.",
};

export default function Class8TimeTable() {
  const timetable = [
    {
      date: "13-08-2026",
      day: "Thursday",
      subject: "MALAYALAM 1",
      time: "1.30 PM - 3.15 PM",
    },
    {
      date: "14-08-2026",
      day: "Friday",
      subject: "ENGLISH",
      time: "2 PM - 3.45 PM",
    },
    {
      date: "17-08-2026",
      day: "Monday",
      subject: "SCIENCE",
      time: "10 AM - 12.15 PM",
    },
    {
      date: "17-08-2026",
      day: "Monday",
      subject: "HINDI",
      time: "1.30 PM - 3.15 PM",
    },
    {
      date: "18-08-2026",
      day: "Tuesday",
      subject: "MATHS",
      time: "1.30 PM - 3.45 PM",
    },
    {
      date: "19-08-2026",
      day: "Wednesday",
      subject: "SOCIAL",
      time: "10 AM - 11.45 AM",
    },
    {
      date: "19-08-2026",
      day: "Wednesday",
      subject: "ARTS",
      time: "1.30 PM - 3.30 PM",
    },
    {
      date: "20-08-2026",
      day: "Thursday",
      subject: "MALAYALAM 2",
      time: "1.30 PM - 3.15 PM",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Class 8 Onam Exam Time Table 2026 Kerala
      </h1>

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        {timetable.map((exam) => (
          <div
            key={exam.date + exam.subject}
            className="grid md:grid-cols-4 gap-4 p-6 border-b"
          >
            <h2 className="font-bold text-gray-900">{exam.date}</h2>
            <p className="text-gray-900">{exam.day}</p>
            <p className="font-semibold text-gray-900">{exam.subject}</p>
            <p className="text-gray-900">{exam.time}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/pdf/class-8-onam-timetable.pdf"
          download
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full hover:scale-105 transition"
        >
          Download PDF
        </a>
      </div>
    </main>
  );
}