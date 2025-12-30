"use client";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";
import Link from "next/link";

// Declare the dotlottie-wc web component type
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-wc": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          autoplay?: boolean;
          loop?: boolean;
        },
        HTMLElement
      >;
    }
  }
}

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 overflow-x-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl mx-auto">
        {/*Animation section*/}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          {React.createElement("dotlottie-wc", {
            src: "https://lottie.host/b69c9314-b55b-452b-9774-68ca8f67ca37/RtsmeVKrx3.lottie",
            style: { width: "100%", maxWidth: "500px", height: "500px" },
            autoplay: true,
            loop: true,
          })}
        </div>

        {/*Form section*/}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md">
            {/* Title */}
            <h2 className="text-4xl font-bold text-center text-blue-500 mb-4">
              Sign In
            </h2>
            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-md bg-white  text-black-900 dark:text-black-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    className="w-full p-3 border border-gray-300 rounded-md bg-white text-black-900 dark:text-black-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer"
                >
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer transition-colors"
              >
                Log In
              </button>
            </form>

            {/* Forgot password and Register */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 mt-4">
              <Link
                href="#"
                className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 whitespace-nowrap"
              >
                Forgot Password?
              </Link>

              <div className="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?{" "}
                <Link
                  href="#"
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  Register
                </Link>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Or Sign-in with
              </p>
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
            </div>

            {/* Google Login */}
            <div className="mt-4">
              <button className="w-full p-3 bg-white dark:bg-gray-800 text-black dark:text-gray-100 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors border border-gray-300 dark:border-gray-600 flex items-center justify-center gap-2">
                <SiGoogle className="text-lg" />
                <span>Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
