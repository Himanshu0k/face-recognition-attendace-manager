import React, { useState } from "react";
import { ArrowLeft, UserPlus } from "lucide-react";

/* ==================== AUTH DOODLE ==================== */
const AuthDoodle = ({ view }) => {
  const isLogin = view === "login";
  const bodyColor = isLogin ? "#4A6CF7" : "#2C4DC2"; // soft/dark blue variants
  const accentColor = "#FFFFFF";

  return (
    <svg
      viewBox="0 0 150 150"
      className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="transition-transform duration-500 ease-out group-hover:scale-[1.05] group-hover:rotate-1 animate-float">
        <rect
          x="30"
          y="70"
          width="90"
          height="50"
          fill={bodyColor}
          rx="15"
          className="shadow-xl transition-all duration-300"
        />
        {isLogin ? (
          <g>
            <path
              d="M 50 70 A 25 25 0 0 1 100 70"
              fill="none"
              stroke={accentColor}
              strokeWidth="10"
              className="transition-all duration-300 group-hover:translate-y-[-5px]"
            />
            <g className="transition-transform duration-500 group-hover:rotate-6 origin-[75px_95px]">
              <circle cx="75" cy="95" r="4" fill={accentColor} />
              <rect x="73" y="98" width="4" height="10" fill={accentColor} />
            </g>
          </g>
        ) : (
          <g>
            <circle
              cx="75"
              cy="60"
              r="20"
              fill={bodyColor}
              stroke={accentColor}
              strokeWidth="5"
            />
            <path d="M 50 120 C 50 100, 100 100, 100 120 Z" fill={bodyColor} />
            <g className="text-white transform translate-x-[-10px] translate-y-[-10px] opacity-90 transition-opacity duration-300 group-hover:opacity-100">
              <UserPlus
                size={35}
                x="60"
                y="50"
                stroke={accentColor}
                strokeWidth={2.5}
              />
            </g>
          </g>
        )}
      </g>
      <style jsx="true">{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </svg>
  );
};

/* ==================== INFO PANEL ==================== */
const InfoPanel = ({ view }) => {
  const isLogin = view === "login";

  const content = isLogin
    ? {
        title: "Welcome Back!",
        subtitle: "Sign in to access your dashboard.",
      }
    : {
        title: "Join Us Today",
        subtitle: "Create an account to start your journey.",
      };

  return (
    <div
      className={`p-8 text-white flex flex-col justify-center items-center h-full w-full relative overflow-hidden transition-all duration-700 ${
        isLogin
          ? "bg-gradient-to-br from-[#ECF1FD] to-[#4A6CF7]"
          : "bg-gradient-to-br from-[#2C4DC2] to-[#142D9A]"
      }`}
    >
      <div className="z-10 text-center px-4">
        <AuthDoodle view={view} />
        <h3 className="text-3xl font-extrabold mb-2 text-center">
          {content.title}
        </h3>
        <p className="text-center mb-4 opacity-90 text-lg">
          {content.subtitle}
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-10"></div>
    </div>
  );
};

/* ==================== FORM PANEL ==================== */
const FormPanel = ({ view, setView, handleFormSubmit }) => {
  const isLogin = view === "login";
  const isSignup = view === "signup";
  const isForgotPassword = view === "forgotPassword";

  const inputClass =
    "mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none transition-all";

  const renderLoginForm = () => (
    <form className="space-y-6" onSubmit={handleFormSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          ID / Username
        </label>
        <input
          type="text"
          required
          className={`${inputClass} focus:ring-[#4A6CF7] focus:border-[#4A6CF7]`}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          required
          className={`${inputClass} focus:ring-[#4A6CF7] focus:border-[#4A6CF7]`}
        />
      </div>
      <div className="flex items-center justify-end text-sm">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setView("forgotPassword");
          }}
          className="font-medium text-[#2C4DC2] hover:text-[#142D9A]"
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-lg shadow-md text-lg font-semibold text-white bg-gradient-to-r from-[#4A6CF7] to-[#2C4DC2] hover:from-[#2C4DC2] hover:to-[#4A6CF7] transition-all transform hover:scale-[1.02]"
      >
        Sign In
      </button>
    </form>
  );

  const renderSignupForm = () => (
    <form className="space-y-6" onSubmit={handleFormSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          required
          className={`${inputClass} focus:ring-[#2C4DC2] focus:border-[#2C4DC2]`}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          required
          className={`${inputClass} focus:ring-[#2C4DC2] focus:border-[#2C4DC2]`}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          required
          className={`${inputClass} focus:ring-[#2C4DC2] focus:border-[#2C4DC2]`}
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-lg shadow-md text-lg font-semibold text-white bg-gradient-to-r from-[#2C4DC2] to-[#142D9A] hover:from-[#142D9A] hover:to-[#2C4DC2] transition-all transform hover:scale-[1.02]"
      >
        Create Account
      </button>
    </form>
  );

  const renderForgotPasswordForm = () => (
    <form className="space-y-6" onSubmit={handleFormSubmit}>
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
        Reset Password
      </h2>
      <p className="text-sm text-gray-500 mb-6 text-center">
        Enter your username or email to receive a reset link.
      </p>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          ID / Email
        </label>
        <input
          type="text"
          required
          className={`${inputClass} focus:ring-[#4A6CF7] focus:border-[#4A6CF7]`}
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-lg shadow-md text-lg font-semibold text-white bg-[#2C4DC2] hover:bg-[#142D9A] transition-all transform hover:scale-[1.02]"
      >
        Send Reset Link
      </button>
      <div className="mt-4 text-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setView("login");
          }}
          className="font-medium text-sm text-[#2C4DC2] hover:text-[#142D9A] flex items-center justify-center"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Login
        </a>
      </div>
    </form>
  );

  return (
    <div className="p-8 sm:p-12 w-full h-full flex flex-col justify-center">
      {!isForgotPassword && (
        <div className="flex justify-center mb-8 border-b border-gray-200">
          <button
            onClick={() => setView("login")}
            className={`px-4 py-3 text-lg font-bold flex-1 transition-all duration-300 ${
              isLogin
                ? "text-[#4A6CF7] border-b-2 border-[#4A6CF7]"
                : "text-gray-500 hover:text-[#2C4DC2] border-b-2 border-transparent"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setView("signup")}
            className={`px-4 py-3 text-lg font-bold flex-1 transition-all duration-300 ${
              isSignup
                ? "text-[#2C4DC2] border-b-2 border-[#2C4DC2]"
                : "text-gray-500 hover:text-[#2C4DC2] border-b-2 border-transparent"
            }`}
          >
            Sign Up
          </button>
        </div>
      )}

      <div className="flex-grow transition-opacity duration-500">
        {isLogin && renderLoginForm()}
        {isSignup && renderSignupForm()}
        {isForgotPassword && renderForgotPasswordForm()}
      </div>

      {!isForgotPassword && (
        <p className="mt-4 text-center text-xs text-gray-400">
          By submitting, you agree to our Terms of Service.
        </p>
      )}
    </div>
  );
};

/* ==================== MAIN COMPONENT ==================== */
const TeacherLogin = () => {
  const [view, setView] = useState("login");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`${view} attempted.`);
    if (view === "signup") setView("login");
  };

  return (
    <div className="min-h-screen bg-[#ECF1FD] flex flex-col items-center justify-center p-4 sm:p-8 font-[Inter]">
      <div className="group w-full max-w-4xl shadow-2xl rounded-xl bg-white min-h-[500px] max-h-[600px] overflow-hidden">
        <div
          className={`flex h-full transition-all duration-700 ${
            view === "login" ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div className="w-full md:w-1/2 bg-white z-20">
            <FormPanel
              view={view}
              setView={setView}
              handleFormSubmit={handleFormSubmit}
            />
          </div>
          <div className="hidden md:block md:w-1/2">
            <InfoPanel view={view} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
