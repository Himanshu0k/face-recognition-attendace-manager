import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import StudentLogin from "./Login/StudentLogin";
import TeacherLogin from "./Login/TeacherLogin";
import AdminLogin from "./Login/AdminLogin";

/* ------- student ------- */
import Sidebar from "./Student/Sidebar";
import Dashboard from "./Student/Dashboard";
import Timetable from "./Student/Timetable";
import AttendanceHistory from "./Student/AttendanceHistory";
import AbsenceRequest from "./Student/AbsenceRequest";
import FaceIdSettings from "./Student/FaceIdSettings";
import AccountDetails from "./Student/AccountDetails";
import TeacherPortal from "./TeacherPortal";

/* -------- teacher -------- */
import TeacherSidebar from "./Teacher/TeacherSidebar";
import TeacherDashboard from "./Teacher/TeacherDashboard";

/* ---------------- DOODLES ---------------- */
const StudentDoodle = () => (
  <svg viewBox="0 0 150 150" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1">
      <circle cx="70" cy="50" r="20" fill="#26A69A" />
      <rect x="50" y="70" width="40" height="60" fill="#4DB6AC" rx="5" />
      <path
        d="M 90 20 Q 110 5 130 20 L 130 50 Q 110 50 90 40 Z"
        fill="#FFFFFF"
        stroke="#607D8B"
        strokeWidth="3"
        className="transition-all duration-500 group-hover:stroke-[#37474F] group-hover:fill-green-50"
      />
      <text x="105" y="40" fontSize="30" fill="#607D8B" fontWeight="bold">
        ?
      </text>
    </g>
  </svg>
);

const TeacherDoodle = () => (
  <svg viewBox="0 0 150 150" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(0, 5)">
      <rect
        x="15"
        y="30"
        width="100"
        height="70"
        rx="5"
        fill="#FFFFFF"
        stroke="#673AB7"
        strokeWidth="4"
      />
      <line x1="30" y1="50" x2="100" y2="50" stroke="#B39DDB" strokeWidth="4" strokeLinecap="round" />
      <line x1="30" y1="65" x2="80" y2="65" stroke="#B39DDB" strokeWidth="4" strokeLinecap="round" />
      <circle cx="125" cy="95" r="15" fill="#673AB7" />
      <rect x="115" y="110" width="20" height="40" fill="#5E35B1" rx="5" />
      <line
        x1="110"
        y1="120"
        x2="60"
        y2="70"
        stroke="#FFC107"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

const AdminDoodle = () => (
  <svg viewBox="0 0 150 150" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(0, 5)">
      <circle cx="50" cy="60" r="20" fill="#F4511E" />
      <rect x="30" y="80" width="40" height="50" fill="#E64A19" rx="5" />
      <rect
        x="80"
        y="30"
        width="40"
        height="70"
        fill="#FFFFFF"
        stroke="#424242"
        strokeWidth="3"
        rx="5"
      />
      <rect x="85" y="40" width="30" height="5" fill="#9E9E9E" />
      <rect x="85" y="50" width="20" height="5" fill="#9E9E9E" />
    </g>
  </svg>
);

/* ---------------- ROLE CARD ---------------- */
const RoleCard = ({ role, Doodle, onClick }) => {
  const colorMap = {
    Student: {
      base: "bg-green-100/50 text-green-800",
      hover: "group-hover:bg-green-200/70",
      ring: "hover:ring-green-400",
    },
    Teacher: {
      base: "bg-indigo-100/50 text-indigo-800",
      hover: "group-hover:bg-indigo-200/70",
      ring: "hover:ring-indigo-400",
    },
    Admin: {
      base: "bg-amber-100/50 text-amber-800",
      hover: "group-hover:bg-amber-200/70",
      ring: "hover:ring-amber-400",
    },
  };

  const colors = colorMap[role];

  return (
    <div
      onClick={() => onClick(role)}
      className={`group w-full p-4 lg:p-6 rounded-xl shadow-xl transition-all duration-500 ease-in-out transform hover:scale-[1.03] cursor-pointer ring-2 ring-transparent ${colors.ring} ${colors.base} ${colors.hover}`}
    >
      <div className="h-32 flex items-center justify-center">{Doodle && <Doodle />}</div>
      <h3 className="mt-6 text-xl md:text-2xl font-extrabold tracking-tight text-gray-900 text-center">
        Login as {role}
      </h3>
    </div>
  );
};

/* ---------------- HOME PAGE ---------------- */
const Home = () => {
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    if (role === "Student") navigate("/student-login");
    else if (role === "Teacher") navigate("/teacher-login");
    else if (role === "Admin") navigate("/admin-login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-8 font-inter">
      <nav className="fixed top-0 left-0 right-0 p-4 md:p-6 bg-white shadow-sm z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-indigo-700">
            FAX<span className="text-gray-900">I</span>.
          </h1>
          <div className="flex space-x-4">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600">
              About
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl w-full pt-20 pb-10">
        <header className="mb-15 text-center">
          <h2 className="text-8xl font-black text-gray-900">
            PROXY <span className="text-indigo-600">CARETAKER</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 font-medium">
            Your secure face recognition attendance management system.
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RoleCard role="Student" Doodle={StudentDoodle} onClick={handleRoleClick} />
          <RoleCard role="Teacher" Doodle={TeacherDoodle} onClick={handleRoleClick} />
          <RoleCard role="Admin" Doodle={AdminDoodle} onClick={handleRoleClick} />
        </main>
      </div>
    </div>
  );
};

/* ---------------- APP ROUTES ---------------- */
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Student Portal Layout (with sidebar) */}
        <Route
          path="/student/*"
          element={
            <div className="flex min-h-screen bg-white">
              {/* Sidebar */}
              <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                handleLogout={handleLogout}
              />

              {/* Main content area */}
              <div className="flex-1 p-8 overflow-y-auto">
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="timetable" element={<Timetable />} />
                  <Route path="attendance-history" element={<AttendanceHistory />} />
                  <Route path="absence-request" element={<AbsenceRequest />} />
                  <Route path="face-id-settings" element={<FaceIdSettings />} />
                  <Route path="account-details" element={<AccountDetails />} />
                </Routes>
              </div>
            </div>
          }
        />
        {/* Student Portal Layout (with sidebar) */}
        <Route
          path="/teacher/*"
          element={
            <div className="flex min-h-screen bg-white">
              {/* Sidebar */}
              <TeacherSidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                handleLogout={handleLogout}
              />

              {/* Main content area */}
              <div className="flex-1 p-8 overflow-y-auto">
                <Routes>
                  <Route path="dashboard" element={<TeacherDashboard />} />
                  <Route path="timetable" element={<Timetable />} />
                  <Route path="attendance-history" element={<AttendanceHistory />} />
                  <Route path="absence-request" element={<AbsenceRequest />} />
                  <Route path="face-id-settings" element={<FaceIdSettings />} />
                  <Route path="account-details" element={<AccountDetails />} />
                </Routes>
              </div>
            </div>
          }
        />
        <Route path="/teacher" element={<TeacherPortal />} />
      </Routes>
    </Router>
  );
};

export default App;
