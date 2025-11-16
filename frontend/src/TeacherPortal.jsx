import React, { useState } from "react";
import {
  LayoutDashboard,
  CalendarCheck,
  MailOpen,
  User,
  LogOut,
  Clock,
  Users,
  AlertTriangle,
  ArrowDownWideNarrow,
  CheckCircle,
} from "lucide-react";

/* ---------------- MOCK DATA (Simulated DB) ---------------- */
const MOCK_TEACHER_INFO = {
  name: "Professor Alex Johnson",
  id: "TCH0045",
  email: "alex.johnson@edu.com",
  assignedClasses: ["MCA III A-304", "BCA I B-101"],
};

const MOCK_LEAVE_REQUESTS = [
  {
    id: 1,
    studentName: "Priya Sharma",
    class: "MCA III A-304",
    days: 3,
    date: "Nov 1 - Nov 3",
    reason: "Sickness",
    status: "Pending",
  },
  {
    id: 2,
    studentName: "John Doe",
    class: "BCA I B-101",
    days: 1,
    date: "Nov 5",
    reason: "Family Event",
    status: "Pending",
  },
];

const MOCK_CURRENT_SCHEDULE = {
  subject: "Cloud Computing",
  room: "A-201",
  time: "10:55 AM - 11:50 AM",
  classId: "MCA III A-304",
  isClassActive: true,
};

const MOCK_ATTENDANCE_SUMMARY = [
  { name: "Priya Sharma", monthlyPercentage: 92, totalAbsent: 2, isBelowThreshold: false },
  { name: "Suresh Patel", monthlyPercentage: 73, totalAbsent: 6, isBelowThreshold: true },
  { name: "Kiran Rao", monthlyPercentage: 78, totalAbsent: 5, isBelowThreshold: false },
  { name: "Amit Singh", monthlyPercentage: 68, totalAbsent: 8, isBelowThreshold: true },
];

/* ---------------- NAV STRUCTURE ---------------- */
const navItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    component: "Overview",
    description: "Your current class and essential alerts.",
  },
  {
    name: "Attendance History",
    icon: CalendarCheck,
    component: "AttendanceHistory",
    description: "View aggregate monthly attendance for all students.",
  },
  {
    name: "Absence Requests",
    icon: MailOpen,
    component: "AbsenceRequests",
    description: "Review and manage student leave requests.",
  },
  {
    name: "Account Details",
    icon: User,
    component: "AccountDetails",
    description: "View and update your personal and academic information.",
  },
];

/* ---------------- REUSABLE COMPONENTS ---------------- */
const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <p className="text-lg text-gray-800 font-semibold">{value}</p>
  </div>
);
// eslint-disable-next-line no-unused-vars
const ActionCard = ({ title, value, detail, Icon, color }) => (
  <div className={`p-5 rounded-xl border-l-4 shadow-md flex items-center justify-between ${color}`}>
    <div className="flex items-center">
      <Icon className="w-6 h-6 mr-3 flex-shrink-0" />
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-3xl font-bold mt-1">{value}</p>
        <p className="text-xs mt-1 opacity-90">{detail}</p>
      </div>
    </div>
    <ArrowDownWideNarrow className="w-5 h-5 opacity-70" />
  </div>
);

/* ---------------- MAIN SUBCOMPONENTS ---------------- */

// 1️⃣ Overview
const Overview = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-extrabold text-gray-800">Today's Focus</h2>

    {/* Current Class */}
    <div className="p-8 bg-indigo-600 rounded-xl text-white shadow-2xl flex justify-between items-center transition-all">
      <div className="flex items-center">
        <Clock className="w-8 h-8 mr-4" />
        <div>
          <p className="text-sm opacity-80">Current Class</p>
          <h3 className="text-3xl font-bold mt-1">{MOCK_CURRENT_SCHEDULE.subject}</h3>
          <p className="text-md mt-2">
            <span className="font-semibold">{MOCK_CURRENT_SCHEDULE.classId}</span> in Room{" "}
            <span className="font-semibold">{MOCK_CURRENT_SCHEDULE.room}</span> (
            {MOCK_CURRENT_SCHEDULE.time})
          </p>
        </div>
      </div>

      {MOCK_CURRENT_SCHEDULE.isClassActive ? (
        <button className="flex items-center px-6 py-3 bg-cyan-400 text-indigo-900 font-bold rounded-lg shadow-lg hover:bg-cyan-300 transition-transform transform hover:scale-[1.03]">
          <Users className="w-5 h-5 mr-2" /> Start Live Attendance
        </button>
      ) : (
        <span className="px-4 py-2 bg-indigo-700 rounded-lg text-sm font-semibold opacity-90">
          Class Ended
        </span>
      )}
    </div>

    {/* Action Alerts */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ActionCard
        title="Pending Leave Requests"
        value={MOCK_LEAVE_REQUESTS.length}
        detail="Students awaiting your approval."
        Icon={MailOpen}
        color="bg-amber-100 border-amber-500 text-amber-800"
      />
      <ActionCard
        title="Attendance Below 75%"
        value={MOCK_ATTENDANCE_SUMMARY.filter((s) => s.isBelowThreshold).length}
        detail="Students requiring administrative action."
        Icon={AlertTriangle}
        color="bg-red-100 border-red-500 text-red-800"
      />
    </div>
  </div>
);

// 2️⃣ Attendance History
const AttendanceHistory = () => {
  const [selectedMonth, setSelectedMonth] = useState("November 2025");
  const lowAttendanceStudents = MOCK_ATTENDANCE_SUMMARY.filter((s) => s.monthlyPercentage < 75);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-800">Monthly Attendance History</h2>
      <p className="text-gray-600">
        Review aggregated attendance percentage for all students. The mandatory threshold is{" "}
        <strong>75%</strong>.
      </p>

      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700">Select Month:</label>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="mt-1 block w-1/3 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option>November 2025</option>
          <option>October 2025</option>
          <option>September 2025</option>
        </select>
      </div>

      <div className="p-4 bg-white rounded-xl shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student Name
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Monthly %
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Absent
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {MOCK_ATTENDANCE_SUMMARY.map((student, index) => (
              <tr key={index} className={student.isBelowThreshold ? "bg-red-50" : ""}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {student.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                  <span
                    className={`font-bold ${
                      student.isBelowThreshold ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {student.monthlyPercentage}%
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                  {student.totalAbsent}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                  {student.isBelowThreshold ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      <AlertTriangle className="w-3 h-3 mr-1" /> Below Threshold
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <CheckCircle className="w-3 h-3 mr-1" /> Satisfactory
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {lowAttendanceStudents.length > 0 && (
        <div className="p-4 border-l-4 border-red-500 bg-red-50 text-red-700 rounded-lg flex items-center">
          <AlertTriangle className="w-5 h-5 mr-3 flex-shrink-0" />
          <p className="text-sm font-medium">
            Action Required: {lowAttendanceStudents.length} students are below 75% attendance for{" "}
            {selectedMonth}.
          </p>
        </div>
      )}
    </div>
  );
};

// 3️⃣ Absence Requests
const AbsenceRequests = () => {
  const [requests, setRequests] = useState(MOCK_LEAVE_REQUESTS);

  const handleAction = (id, newStatus) => {
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r)));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-800">Student Absence Requests</h2>
      <p className="text-gray-600">
        Review and approve or deny student leave requests. Approved requests will mark attendance as
        <strong> Excused Absence</strong>.
      </p>

      <div className="space-y-4">
        {requests.map((req) => (
          <div
            key={req.id}
            className="p-5 bg-white rounded-xl shadow-md border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {req.studentName} ({req.class})
              </p>
              <p className="text-sm text-gray-500 mt-1">
                <span className="font-medium text-indigo-600">{req.days} day(s)</span> starting {req.date}
              </p>
              <p className="text-xs text-gray-500 italic mt-1">Reason: {req.reason}</p>
            </div>

            <div className="mt-3 sm:mt-0 flex space-x-2">
              {req.status === "Pending" ? (
                <>
                  <button
                    onClick={() => handleAction(req.id, "Approved")}
                    className="px-4 py-2 text-sm font-semibold rounded-lg bg-green-500 text-white hover:bg-green-600"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleAction(req.id, "Denied")}
                    className="px-4 py-2 text-sm font-semibold rounded-lg bg-red-500 text-white hover:bg-red-600"
                  >
                    Deny
                  </button>
                </>
              ) : (
                <span
                  className={`px-4 py-2 text-sm font-semibold rounded-lg ${
                    req.status === "Approved" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {req.status}
                </span>
              )}
            </div>
          </div>
        ))}

        {requests.length === 0 && (
          <p className="text-center text-gray-500 p-8 bg-gray-50 rounded-lg">No pending absence requests.</p>
        )}
      </div>
    </div>
  );
};

// 4️⃣ Account Details
const AccountDetails = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-extrabold text-gray-800">My Account Details</h2>
    <p className="text-gray-600">View your assigned details and manage credentials.</p>

    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-center mb-6 border-b pb-4">
        <div className="w-16 h-16 rounded-full bg-indigo-200 flex items-center justify-center text-3xl font-bold text-indigo-800 mr-4">
          {MOCK_TEACHER_INFO.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{MOCK_TEACHER_INFO.name}</h3>
          <p className="text-md text-gray-500">{MOCK_TEACHER_INFO.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
        <DetailItem label="Employee ID" value={MOCK_TEACHER_INFO.id} />
        <DetailItem label="Assigned Classes" value={MOCK_TEACHER_INFO.assignedClasses.join(", ")} />
        <DetailItem label="Role" value="Teacher / Faculty" />
        <DetailItem label="System Access" value="Full (Teacher Level)" />
      </div>

      <div className="mt-8 pt-4 border-t">
        <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 text-white hover:bg-indigo-600">
          Update Password
        </button>
      </div>
    </div>
  </div>
);

/* ---------------- MAIN TEACHER PORTAL ---------------- */
const TeacherPortal = () => {
  const [activeComponent, setActiveComponent] = useState(navItems[0].component);

  const componentMap = {
    Overview,
    AttendanceHistory,
    AbsenceRequests,
    AccountDetails,
  };

  const ActiveContent = componentMap[activeComponent] || (() => <div />); // safe fallback
  const activeItem = navItems.find((i) => i.component === activeComponent) || navItems[0];

  const handleLogout = () => {
    // Replace with your actual logout logic
    alert("Logged out! (Placeholder)");
  };

  return (
    <div className="flex h-screen bg-gray-50 font-[Inter] antialiased">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 shadow-xl">
        <div className="p-6 text-2xl font-extrabold text-indigo-600 border-b border-gray-100">
          <span className="text-cyan-500">Edu</span>FR-Portal
        </div>

        <nav className="flex-grow p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveComponent(item.component)}
              className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 text-left ${
                activeComponent === item.component
                  ? "bg-indigo-50 text-indigo-700 font-semibold shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              }`}
            >
              <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center text-sm mb-3">
            <div className="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center font-bold text-indigo-800 mr-3">
              {MOCK_TEACHER_INFO.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                {MOCK_TEACHER_INFO.name.split(" ").slice(-1)[0]}
              </p>
              <p className="text-xs text-gray-500">Faculty</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center p-2 mt-2 rounded-lg text-sm text-red-600 bg-red-50 hover:bg-red-100"
          >
            <LogOut className="w-4 h-4 mr-2" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="mb-8 border-b pb-4">
          <h1 className="text-3xl font-extrabold text-gray-800">{activeItem.name}</h1>
          <p className="text-md text-gray-500 mt-1">{activeItem.description}</p>
        </div>

        <div className="min-h-[70vh]">
          <ActiveContent />
        </div>
      </main>
    </div>
  );
};

export default TeacherPortal;
