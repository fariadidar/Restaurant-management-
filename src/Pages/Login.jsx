import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
  <div
  className="bg-cover bg-center min-h-screen relative"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80')",
    fontFamily: "Arial, sans-serif",
  }}
>


      {/* Overlay */}
      <div className="bg-black bg-opacity-60 w-full h-full absolute inset-0 z-0"></div>

      {/* Login Container */}
      <div className="flex items-center justify-center min-h-screen relative z-10">
        <div className="bg-black bg-opacity-70 p-10 rounded-xl w-full max-w-md text-white shadow-xl text-center">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-1">
            <span style={{ fontFamily: "'Pacifico', cursive" }}>
              Flavours By Sahiba
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm mb-6 text-gray-300">
            Fill out the form below to login
          </p>

          {/* Form */}
          <form className="space-y-4 text-left">
            {/* Email */}
            <div className="relative mt-6">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="peer mt-1 w-full border-b-2 border-gray-300 bg-transparent px-0 py-1 text-white placeholder-transparent focus:border-[#153906] focus:outline-none"
                autoComplete="off"
              />
              <label
                htmlFor="email"
                className="absolute top-0 left-0 text-sm text-gray-300 transition-all duration-200 ease-in-out transform -translate-y-1/2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-[#153906]"
              >
                Email Address
              </label>
            </div>

            {/* Password */}
            <div className="relative mt-6">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="peer mt-1 w-full border-b-2 border-gray-300 bg-transparent px-0 py-1 text-white placeholder-transparent focus:border-[#153906] focus:outline-none"
                autoComplete="off"
              />
              <label
                htmlFor="password"
                className="absolute top-0 left-0 text-sm text-gray-300 transition-all duration-200 ease-in-out transform -translate-y-1/2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-[#153906]"
              >
                Password
              </label>
            </div>

            <div className="flex items-center text-sm text-gray-300">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember">Remember Me</label>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center py-2 px-4 bg-white/10 text-white rounded-lg border border-white/20 hover:bg-[#153906] font-semibold transition duration-300"
            >
              Login
            </button>

            <div className="text-center mt-2">
              <a href="#" className="text-sm text-gray-300 hover:text-white">
                Forgot Password?
              </a>
            </div>
          </form>

          {/* OR Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="border-t border-gray-500 w-1/3"></div>
            <span className="px-3 text-xs text-gray-400">OR LOGIN WITH</span>
            <div className="border-t border-gray-500 w-1/3"></div>
          </div>

          {/* Social Buttons */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {/* Facebook */}
            <button className="flex justify-center items-center py-2 px-4 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors duration-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>

            {/* Google */}
            <button className="flex justify-center items-center py-2 px-4 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors duration-300">
              <img
                className="max-w-[25px]"
                src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                alt="Google"
              />
            </button>
          </div>

          <p className="text-sm text-center text-gray-500 mt-6">
  Don't have an account?{" "}
  <Link to="/signup" className="text-blue-500 hover:underline">
    Sign Up
  </Link>
</p>
        </div>
      </div>
    </div>
  );
}

export default Login;