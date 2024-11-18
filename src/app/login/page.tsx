import Navbar from "@/components/Navbar";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex  flex-col h-screen">
      <Navbar />
      <div className="flex flex-col h-screen items-center justify-center bg-slate-50">
        {/* Container Form */}
        <div className="flex flex-col bg-blue-200 h-auto w-1/2 rounded-lg shadow-black shadow-xl p-10 space-y-6">
          {/* Judul */}
          <h1 className="font-semibold text-4xl text-center">Login Section</h1>

          {/* Form */}
          <form className="flex flex-col space-y-4">
            {/* Input Email */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Input Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Button Login */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          {/* Link ke Register */}
          <p className="text-center">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
