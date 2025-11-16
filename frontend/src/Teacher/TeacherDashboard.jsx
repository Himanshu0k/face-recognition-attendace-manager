import React from "react";
import { Users, CalendarClock, AlertTriangle, Clock, Zap } from "lucide-react";

const TeacherDashboard = () => {
  const currentClass = {
    course: "Data Structures",
    semester: "5th Sem",
    section: "B",
    time: "10:00 AM - 11:00 AM",
    room: "Room 204",
  };

  const lowAttendanceStudents = [
    { name: "Rahul Sharma", percent: 68 },
    { name: "Aditi Verma", percent: 72 },
    { name: "Karan Singh", percent: 64 },
  ];

  const absenceRequests = [
    { name: "Priya Mehta", date: "14 Nov 2025", reason: "Medical leave" },
    { name: "Aman Gupta", date: "15 Nov 2025", reason: "Family function" },
  ];

  const handleStartRecognition = () => {
    console.log("Redirect to face recognition attendance page");
  };

  return (
    <div className="p-8 space-y-10">
      {/* ---------------------- WELCOME BANNER ---------------------- */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-extrabold">Welcome Back, Teacher!</h2>
        <p className="text-white/80 mt-2 text-lg">
          Manage attendance and student records efficiently.
        </p>
      </div>

      {/* ---------------------- KEY METRICS ---------------------- */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Class Overview
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* Total Students */}
          <div className="bg-indigo-50 p-6 rounded-xl shadow-sm border border-indigo-100">
            <p className="text-sm text-gray-600">Total Students</p>
            <h2 className="text-3xl font-bold text-indigo-900 mt-2">60</h2>
          </div>

          {/* Low Attendance */}
          <div className="bg-red-50 p-6 rounded-xl shadow-sm border border-red-100">
            <p className="text-sm text-red-600">Below 75% Attendance</p>
            <h2 className="text-3xl font-bold text-red-700 mt-2">
              {lowAttendanceStudents.length} Students
            </h2>
          </div>

          {/* Pending Requests */}
          <div className="bg-yellow-50 p-6 rounded-xl shadow-sm border border-yellow-100">
            <p className="text-sm text-yellow-600">Pending Absence Requests</p>
            <h2 className="text-3xl font-bold text-yellow-700 mt-2">
              {absenceRequests.length} Requests
            </h2>
          </div>
        </div>
      </div>

      {/* ---------------------- TODAY'S CLASS ---------------------- */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Today's Class
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          {/* CURRENT CLASS CARD */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center mb-3">
              <CalendarClock className="text-indigo-500 mr-2" />
              <h4 className="text-lg font-semibold text-gray-900">
                Current Class
              </h4>
            </div>

            <div className="border-t border-gray-200 my-3"></div>

            <h2 className="text-2xl font-bold text-indigo-700 mb-2">
              {currentClass.course}
            </h2>

            <p className="text-sm text-gray-700">
              <span className="font-semibold text-gray-800">Semester:</span>{" "}
              {currentClass.semester}
            </p>

            <p className="text-sm text-gray-700">
              <span className="font-semibold text-gray-800">Section:</span>{" "}
              {currentClass.section}
            </p>

            <p className="text-sm text-gray-700">
              <span className="font-semibold text-gray-800">Time:</span>{" "}
              {currentClass.time}
            </p>

            <p className="text-sm text-gray-700 mb-4">
              <span className="font-semibold text-gray-800">Room:</span>{" "}
              {currentClass.room}
            </p>

            <button
              onClick={handleStartRecognition}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-all"
            >
              Take Attendance (Face Recognition)
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">
              Starts live face scanning for the class.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
