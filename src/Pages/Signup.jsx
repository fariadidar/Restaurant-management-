import React from "react";
import { Link } from "react-router-dom"; // if using React Router

export default function Signup() {
  return (
    <div
      className="bg-cover bg-center min-h-screen relative"
      style={{
        backgroundImage: "url('https://i.ibb.co/0vWj5gp/background.jpg')",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-60 w-full h-full absolute inset-0 z-0"></div>

      {/* Signup Container */}
      <div className="flex items-center justify-center min-h-screen relative z-10">
        <div className="bg-black bg-opacity-70 p-10 rounded-xl w-full max-w-md text-white shadow-xl text-center">
          {/* Title */}
          <h1
            className="text-2xl font-bold mb-1"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Flavours By Sahiba
          </h1>

          {/* Form */}
          <form className="space-y-6 text-left">
            {/* First Name */}
            <div className="relative mt-4 mb-4">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-0 py-3 text-white placeholder-transparent focus:border-[#153906] focus:outline-none"
                autoComplete="off"
              />
              <label
                htmlFor="firstName"
                className="absolute top-0 left-0 text-sm text-gray-300 transition-all duration-200 ease-in-out transform -translate-y-1/2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-[#153906]"
              >
                First Name
              </label>
            </div>

            {/* Last Name */}
            <div className="relative mt-4">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-0 py-3 text-white placeholder-transparent focus:border-[#153906] focus:outline-none"
                autoComplete="off"
              />
              <label
                htmlFor="lastName"
                className="absolute top-0 left-0 text-sm text-gray-300 transition-all duration-200 ease-in-out transform -translate-y-1/2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-[#153906]"
              >
                Last Name
              </label>
            </div>

            {/* Email */}
            <div className="relative mt-4">
              <input
                type="email"
                id="signupEmail"
                name="email"
                placeholder="Email"
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-0 py-3 text-white placeholder-transparent focus:border-[#153906] focus:outline-none"
                autoComplete="off"
              />
              <label
                htmlFor="signupEmail"
                className="absolute top-0 left-0 text-sm text-gray-300 transition-all duration-200 ease-in-out transform -translate-y-1/2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-[#153906]"
              >
                Email
              </label>
            </div>

            {/* Password */}
            <div className="relative mt-4">
              <input
                type="password"
                id="signupPassword"
                name="password"
                placeholder="Enter your password"
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-0 py-3 text-white placeholder-transparent focus:border-[#153906] focus:outline-none"
                autoComplete="off"
              />
              <label
                htmlFor="signupPassword"
                className="absolute top-0 left-0 text-sm text-gray-300 transition-all duration-200 ease-in-out transform -translate-y-1/2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-[#153906]"
              >
                Enter your password
              </label>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center text-sm text-gray-300 mt-4">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms">
                I agree to the{" "}
                <a
                  href="#"
                  className="underline text-blue-400 hover:text-blue-500"
                >
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full flex justify-center items-center py-2 px-4 bg-white/10 text-white rounded-lg border border-white/20 hover:bg-[#153906] font-semibold transition duration-300"
            >
              Create Account
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center justify-center my-6">
            <div className="border-t border-gray-500 w-1/3"></div>
            <span className="px-3 text-xs text-gray-400">OR</span>
            <div className="border-t border-gray-500 w-1/3"></div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            {/* Google */}
            <button className="flex justify-center items-center py-2 px-4 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors duration-300">
              <img
                className="max-w-[25px]"
                src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                alt="Google"
              />
            </button>

            {/* Apple */}
            <button className="flex justify-center items-center py-2 px-4 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors duration-300">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
          </div>

          {/* Login Redirect */}
          <p className="text-sm text-center text-gray-400 mt-6">
            Already have an account?{" "}
            {/* Use React Router Link for SPA navigation */}
            <Link to="/login" className="text-blue-400 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
