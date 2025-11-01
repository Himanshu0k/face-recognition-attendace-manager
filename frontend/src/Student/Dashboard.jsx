import React from "react";
import { Eye, ClipboardEdit, Zap, Clock, CheckCircle, MapPin } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-8 space-y-8">
      {/* WELCOME BANNER */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-extrabold">Welcome Back, Alex!</h2>
        <p className="text-white/80 mt-2 text-lg">
          Your attendance matters. Stay on track!
        </p>
      </div>

      {/* ATTENDANCE METRICS */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Attendance Key Metrics
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Attendance Rate */}
          <div className="bg-indigo-50 p-6 rounded-xl shadow-sm border border-indigo-100">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Overall Attendance (Target: 75%)
              </p>
              <Eye className="text-indigo-400" />
            </div>
            <h2 className="text-3xl font-bold text-indigo-900 mt-2">85.0%</h2>
          </div>

          {/* Absent Days */}
          <div className="bg-red-50 p-6 rounded-xl shadow-sm border border-red-100">
            <div className="flex justify-between items-center">
              <p className="text-sm text-red-600">Absent Days This Month</p>
              <ClipboardEdit className="text-red-400" />
            </div>
            <h2 className="text-3xl font-bold text-red-700 mt-2">4 Days</h2>
          </div>

          {/* Absences Allowed */}
          <div className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-100">
            <div className="flex justify-between items-center">
              <p className="text-sm text-green-600">Absences Allowed (Max)</p>
              <Zap className="text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-green-700 mt-2">13 Classes</h2>
          </div>
        </div>
      </div>

      {/* TODAY'S ATTENDANCE */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Today's Attendance
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* CURRENT CLASS CARD */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center mb-3">
              <Clock className="text-indigo-500 mr-2" />
              <h4 className="text-lg font-semibold text-gray-900">
                Current Class
              </h4>
            </div>

            <div className="border-t border-gray-200 my-3"></div>

            <h2 className="text-2xl font-bold text-indigo-700 mb-2">
              Differential Equations (MTH 301)
            </h2>

            <p className="text-sm text-gray-700">
              <span className="font-semibold text-gray-800">Time:</span> 10:00 AM – 11:30 AM
            </p>
            <p className="text-sm text-gray-700 mb-4">
              <span className="font-semibold text-gray-800">Location:</span> Building A, Room 305
            </p>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-all">
              Mark Attendance (Face ID + Location Required)
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">
              Submission requires physical presence and successful Face ID match.
            </p>
          </div>

          {/* TODAY'S ACTIVITY CARD */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center mb-3">
              <Clock className="text-indigo-500 mr-2" />
              <h4 className="text-lg font-semibold text-gray-900">
                Today's Activity
              </h4>
            </div>

            <div className="border-t border-gray-200 my-3"></div>

            {/* Activity List */}
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <div>
                  <p className="text-gray-800 font-semibold">Calculus I</p>
                  <p className="text-sm text-gray-500">8:00 AM</p>
                </div>
                <span className="text-green-600 font-medium">Present</span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <div>
                  <p className="text-gray-800 font-semibold">Intro to History</p>
                  <p className="text-sm text-gray-500">11:00 AM</p>
                </div>
                <span className="text-yellow-600 font-medium">Late</span>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-800 font-semibold">Computer Science</p>
                  <p className="text-sm text-gray-500">2:00 PM</p>
                </div>
                <span className="text-gray-600 font-medium">Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
