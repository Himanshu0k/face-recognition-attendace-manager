import React from "react";
import { BookOpenText, Beaker, CupSoda, User } from "lucide-react";

const Timetable = () => {
  const times = [
    "8:30 - 9:25",
    "9:30 - 10:25",
    "10:25 - 10:55",
    "10:55 - 11:50",
    "11:55 - 12:50",
    "12:50 - 1:05",
    "1:05 - 2:00",
    "2:05 - 3:00",
  ];

  const timetable = {
    Monday: [
      { subject: "CC / Ebusi", type: "theory" },
      { subject: "CC / Ebusi", type: "theory" },
      { subject: "Break", type: "break" },
      { subject: "AIML", type: "theory" },
      { subject: "CSCL", type: "theory" },
      { subject: "Break", type: "break" },
      { subject: "DAA", type: "theory" },
    ],
    Tuesday: [
      { subject: "CC / Ebusi", type: "theory" },
      { subject: "CC / Ebusi", type: "theory" },
      { subject: "Break", type: "break" },
      { subject: "DAA", type: "theory" },
      { subject: "MP - III", type: "theory" },
      { subject: "Break", type: "break" },
      { subject: "AI / DAA", type: "practical" },
      { subject: "AI / DAA", type: "practical" },
    ],
    Wednesday: [
      { subject: "IOT SQM", type: "theory" },
      { subject: "IOT SQM", type: "theory" },
      { subject: "Break", type: "break" },
      { subject: "AIML", type: "theory" },
      { subject: "PP - III", type: "theory" },
      { subject: "Break", type: "break" },
      { subject: "IOT / SQM", type: "practical" },
      { subject: "IOT / SQM", type: "practical" },
    ],
    Thursday: [
      { subject: "IOT SQM", type: "theory" },
      { subject: "IOT SQM", type: "theory" },
      { subject: "Break", type: "break" },
      { subject: "CSCL", type: "theory" },
      { subject: "CSCL", type: "theory" },
      { subject: "Break", type: "break" },
      { subject: "DAA", type: "theory" },
      { subject: "EM", type: "theory" },
    ],
    Friday: [
      { subject: "CC ", type: "practical" },
      { subject: "CC ", type: "practical" },
      { subject: "Break", type: "break" },
      { subject: "AIML", type: "theory" },
      { subject: "DAA", type: "practical" },
      { subject: "Break", type: "break" },
      { subject: "AIML", type: "theory" },
      { subject: "CSCL", type: "theory" },
    ],
    Saturday: [
      { subject: "IOT / SQM", type: "practical" },
      { subject: "IOT / SQM", type: "practical" },
      { subject: "Break", type: "break" },
      { subject: "DAA / AIML", type: "practical" },
      { subject: "DAA / AIML", type: "practical" },
      { subject: "Break", type: "break" },
      { subject: "CC / Ebusi ", type: "practical" },
      { subject: "CC / Ebusi", type: "practical" },
    ],
  };

  // Subject-wise teacher mapping
  const teachers = {
    "AIML": "Dr. Aakansha Upadhyay",
    "DAA": "Dr. Chetna",
    "CSCL": "Dr. Latika",
    "MP - III": "Mr. Sanjive",
    "PP - III": "Mr. Sanjive",
    "SQM": "Mr. Sanjive",
    "EM": "Dr. Bharti",
    "CC": "Dr. Majot",
    "Ebusi": "Dr. Deepti Khanna"
  };

  const getIcon = (type) => {
    switch (type) {
      case "theory":
        return <BookOpenText className="inline text-blue-500" size={18} />;
      case "practical":
        return <Beaker className="inline text-red-500" size={18} />;
      case "break":
        return <CupSoda className="inline text-amber-500" size={18} />;
      default:
        return null;
    }
  };

  const getBgColor = (type) => {
    switch (type) {
      case "theory":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "practical":
        return "bg-red-50 text-red-700 border-red-200";
      case "break":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "";
    }
  };

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="p-8">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
        Weekly Timetable
      </h2>

      {/* Timetable Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md">
        <table className="min-w-full border-collapse text-center">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-500 to-red-500 text-white">
              <th className="py-4 px-8 text-left text-lg font-semibold">Day</th>
              {times.map((time, i) => (
                <th key={i} className="py-3 px-4 font-semibold">
                  {time}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Object.entries(timetable).map(([day, subjects], idx) => (
              <tr
                key={idx}
                className={`border-b border-gray-200 transition-all ${
                  today === day
                    ? "bg-gradient-to-r from-red-50 to-indigo-50 shadow-sm"
                    : idx % 2 === 0
                    ? "bg-white"
                    : "bg-gray-50"
                }`}
              >
                <td
                  className={`py-5 px-8 font-bold text-gray-800 text-left border-r border-gray-200 ${
                    today === day ? "text-indigo-600" : ""
                  }`}
                >
                  {day}
                </td>

                {subjects.map((cls, i) => (
                  <td
                    key={i}
                    className={`py-5 px-3 border-r border-gray-200 rounded-md ${getBgColor(
                      cls.type
                    )} hover:shadow-md transition-all duration-200`}
                  >
                    <div className="flex flex-col items-center justify-center gap-1">
                      {getIcon(cls.type)}
                      <span className="text-sm font-medium">{cls.subject}</span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend
      <p className="text-sm text-gray-500 mt-4 mb-8">
        🔴 Practical | 📘 Theory | 🥤 Break
      </p> */}

      {/* Teacher Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <User className="text-indigo-500" /> Subject-wise Teachers
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(teachers).map(([subject, teacher], idx) => (
            <div
              key={idx}
              className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all bg-gray-50"
            >
              <p className="font-semibold text-gray-800 text-lg">{subject}</p>
              <p className="text-gray-600 text-sm mt-1">👨‍🏫 {teacher}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timetable;
