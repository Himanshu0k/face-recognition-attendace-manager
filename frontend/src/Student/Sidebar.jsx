import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  History,
  ClipboardEdit,
  UserCog,
  LogOut,
} from "lucide-react";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, handleLogout }) => {
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/student/dashboard" },
    { name: "Class Timetable", icon: Calendar, path: "/student/timetable" },
    { name: "Attendance History", icon: History, path: "/student/attendance-history" },
    { name: "Absence Request", icon: ClipboardEdit, path: "/student/absence-request" },
    { name: "Face ID Settings", icon: UserCog, path: "/student/face-id-settings" },
    { name: "My Account Details", icon: UserCog, path: "/student/account-details" },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 w-64 bg-white shadow-xl p-6 transition-transform duration-300 ease-in-out z-40 flex flex-col`}
    >
      <div className="mb-10 pt-4 pb-2 border-b border-gray-100">
        <h1 className="text-3xl font-extrabold tracking-tight text-indigo-700">
          FAX<span className="text-gray-900">I</span>.
        </h1>
        <p className="text-xs font-semibold text-gray-400 mt-1">Student Portal</p>
      </div>

      <nav className="flex-grow space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setIsSidebarOpen(false)}
            className={({ isActive }) =>
              `w-full flex items-center p-3 rounded-xl transition-all duration-300 transform ${
                isActive
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/50 scale-[1.02]"
                  : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-700 hover:translate-x-1"
              }`
            }
          >
            <item.icon className="w-6 h-6 mr-3 stroke-[1.5]" />
            <span className="font-semibold text-sm">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-8 pt-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="flex items-center p-3 w-full rounded-xl transition-all duration-300 text-red-500 hover:bg-red-50"
        >
          <LogOut className="w-6 h-6 mr-3" />
          <span className="font-semibold text-sm">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
