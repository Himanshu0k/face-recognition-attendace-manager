import React from "react";
import SecurityDoodle from "./SecurityDoodle";

const AdminLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Admin login submitted");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 font-inter">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-xl p-8 border border-gray-100 group hover:shadow-indigo-300/50 transition-all duration-500">
        <header className="text-center mb-6">
          <SecurityDoodle />
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900">Admin Login</h2>
          <p className="text-sm text-gray-500">Enter your username and password.</p>
        </header>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
