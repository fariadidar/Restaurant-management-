import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../Components/Shared/Navbar'

function Login() {
  return (
   <section>
   <div>
       <Navbar></Navbar>
   </div>
  
  <div
  className="bg-cover bg-center min-h-screen relative pt-16 pb-8"
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
                className="peer mt-1 w-full border-b-2 border-gray-300 bg-transparent px-0 py-3 text-white placeholder-transparent focus:border-[#153906] focus:outline-none"
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
                className="peer mt-1 w-full border-b-2 border-gray-300 bg-transparent px-0 py-3 text-white placeholder-transparent focus:border-[#153906] focus:outline-none"
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

     <footer className="bg-[#0f1311] text-white text-center py-10 px-4">
        <div className="space-y-2 text-sm leading-relaxed font-light">
          <p>Sanmer Elvera</p>
          <p>SS Khaled Road,<br /> Chattogram 4203</p>
          <p className="mt-2">+880987644433</p>
          <p className="text-[#d6b179]">Reservations</p>
          <p className="mt-2">Open: 12:30 pm – 12:00 am</p>
        </div>

        <div className="flex justify-center items-center space-x-4 mt-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-black hover:bg-[#d6b179] transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22,12A10,10,0,1,0,10.9,21.95V14.89H8v-3H10.9V9.11c0-2.86,1.7-4.44,4.3-4.44a17.52,17.52,0,0,1,2.54.22V7.9H16.71c-1.24,0-1.63.77-1.63,1.56v1.43h2.78l-.44,3H15.08v7.06A10,10,0,0,0,22,12Z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-black hover:bg-[#d6b179] transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M7,2A5,5,0,0,0,2,7V17a5,5,0,0,0,5,5H17a5,5,0,0,0,5-5V7a5,5,0,0,0-5-5ZM12,17a5,5,0,1,1,5-5A5,5,0,0,1,12,17Zm6-9a1.25,1.25,0,1,1-1.25-1.25A1.25,1.25,0,0,1,18,8Z" />
            </svg>
          </a>
        </div>

        <p className="text-xs mt-6">Copyright © 2024 Flavours by Sahiba. All Rights Reserved</p>
      </footer>
    </section>
  );
}

export default Login;