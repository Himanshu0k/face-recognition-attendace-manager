import React, { useState } from "react";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Student/Dashboard"; // Dashboard import

/* ==================== INFO PANEL (GIF) ==================== */
const InfoPanel = ({ view }) => {
  const isLogin = view === "login";

  const content = isLogin
    ? {
        title: "Welcome Back!",
        subtitle: "Sign in to access your dashboard.",
        gradient: "from-[#EAF2FF] to-[#80ABFE]",
        gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2VzM2pxankyaTZqdmhwMHhvbTRsY2oyemw2MHNnczNvaDFtcW9qaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TPJnC36kY11vc05p7V/giphy.gif",
      }
    : {
        title: "Join Us Today",
        subtitle: "Create an account to start your journey.",
        gradient: "from-[#FAD0C4] to-[#E48989]",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGY1NnJrbnV1cWlvNDV4OGdtcHZrZWd0eHN5eGMzMTI3ZWc1Ymd0ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HEvV7Ueu7L13OYx3oL/giphy.gif",
      };

  return (
    <div
      className={`p-8 text-white flex flex-col justify-center items-center h-full w-full relative overflow-hidden transition-all duration-700 bg-gradient-to-br ${content.gradient}`}
    >
      <img
        src={content.gif}
        alt="Panel Animation"
        className="w-56 h-56 object-contain rounded-xl shadow-xl mb-6"
      />
      <div className="z-10 text-center px-4">
        <h3 className="text-3xl font-extrabold mb-2 text-white drop-shadow-md">
          {content.title}
        </h3>
        <p className="text-center mb-4 opacity-90 text-lg text-white">
          {content.subtitle}
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-10"></div>
    </div>
  );
};

/* ==================== FORM PANEL ==================== */
const FormPanel = ({
  view,
  setView,
  handleFormSubmit,
  formData,
  setFormData,
  isLoading,
}) => {
  const isLogin = view === "login";
  const isSignup = view === "signup";
  const isForgotPassword = view === "forgotPassword";

  const inputClass =
    "mt-1 block w-full px-4 py-3 border border-[#BFD4FF] rounded-lg shadow-sm bg-[#F5F8FF] focus:outline-none focus:ring-2 focus:ring-[#80ABFE] focus:border-[#80ABFE] transition-all";

  const signupInputClass =
    "mt-1 block w-full px-4 py-3 border border-[#F3B1B1] rounded-lg shadow-sm bg-[#FFF5F5] focus:outline-none focus:ring-2 focus:ring-[#E48989] focus:border-[#E48989] transition-all";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderLoginForm = () => (
    <form className="space-y-6" onSubmit={(e) => handleFormSubmit(e, "login")}>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          name="username"
          required
          value={formData.username || ""}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          required
          value={formData.password || ""}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <div className="flex items-center justify-end text-sm">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setView("forgotPassword");
          }}
          className="font-medium text-[#80ABFE] hover:text-[#5C8EF7]"
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 rounded-lg shadow-md text-lg font-semibold text-white bg-gradient-to-r from-[#80ABFE] to-[#5C8EF7] hover:from-[#5C8EF7] hover:to-[#80ABFE] transition-all transform hover:scale-[1.02]"
      >
        {isLoading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );

  const renderSignupForm = () => (
    <form className="space-y-6" onSubmit={(e) => handleFormSubmit(e, "signup")}>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          name="username"
          required
          value={formData.username || ""}
          onChange={handleChange}
          className={signupInputClass}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email || ""}
          onChange={handleChange}
          className={signupInputClass}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          required
          value={formData.password || ""}
          onChange={handleChange}
          className={signupInputClass}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 rounded-lg shadow-md text-lg font-semibold text-white bg-gradient-to-r from-[#FAD0C4] to-[#E48989] hover:from-[#E48989] hover:to-[#FAD0C4] transition-all transform hover:scale-[1.02]"
      >
        {isLoading ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );

  const renderForgotPasswordForm = () => (
    <form
      className="space-y-6"
      onSubmit={(e) => handleFormSubmit(e, "forgotPassword")}
    >
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
          name="email"
          required
          value={formData.email || ""}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 rounded-lg shadow-md text-lg font-semibold text-white bg-[#80ABFE] hover:bg-[#5C8EF7] transition-all transform hover:scale-[1.02]"
      >
        {isLoading ? "Sending..." : "Send Reset Link"}
      </button>
      <div className="mt-4 text-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setView("login");
          }}
          className="font-medium text-sm text-[#80ABFE] hover:text-[#5C8EF7] flex items-center justify-center"
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
                ? "text-[#5C8EF7] border-b-2 border-[#5C8EF7]"
                : "text-gray-500 hover:text-[#80ABFE] border-b-2 border-transparent"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setView("signup")}
            className={`px-4 py-3 text-lg font-bold flex-1 transition-all duration-300 ${
              isSignup
                ? "text-[#E48989] border-b-2 border-[#E48989]"
                : "text-gray-500 hover:text-[#E48989] border-b-2 border-transparent"
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
const StudentLogin = () => {
  const [view, setView] = useState("login");
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e, action) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (action === "signup") {
        // Signup and auto-login
        await axios.post("http://localhost:8081/api/auth/signup", formData);

        const loginResponse = await axios.post(
          "http://localhost:8081/api/auth/login",
          {
            username: formData.username,
            password: formData.password,
          }
        );

        localStorage.setItem("token", loginResponse.data.token);
        alert("Signup successful! Redirecting to dashboard...");
        navigate("../Student/Dashboard");
      } else if (action === "login") {
        const response = await axios.post(
          "http://localhost:8081/api/auth/login",
          formData
        );
        localStorage.setItem("token", response.data.token);
        alert("Login successful!");
        navigate("../Student/Dashboard");
      } else if (action === "forgotPassword") {
        await axios.post("http://localhost:8081/api/auth/forgot-password", {
          email: formData.email,
        });
        alert("Password reset link sent!");
        setView("login");
      }

      setFormData({});
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EAF2FF] flex flex-col items-center justify-center p-4 sm:p-8 font-[Inter]">
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
              formData={formData}
              setFormData={setFormData}
              isLoading={isLoading}
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

export default StudentLogin;
