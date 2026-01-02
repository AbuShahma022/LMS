"use client"; // ✅ Required for using React hooks in Next.js App Router

import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

// Define the shape of form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

// Define the shape of error messages
type Errors = Partial<Record<keyof FormData, string>>;

const RegistrationComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState<Errors>({});

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validation logic
  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.terms) newErrors.terms = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // TODO: send data to backend here
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 px-6 md:px-20 gap-10">
        {/* ===== Left Side ===== */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center items-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Sign up</h2>
          <img
            src="sign-up-message.png"
            alt="message"
            className="w-32 md:w-45 animate-bounce"
            style={{ animationDuration: "4s" }}
          />
          <img
            src="sign-up.png"
            alt="signup"
            className="w-48 md:w-72 animate-pulse"
          />
        </div>

        {/* ===== Right Side ===== */}
        <div className="col-span-1 md:col-span-7 flex justify-center items-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="input"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="input"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Username */}
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="input"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
            </div>

            {/* Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="input"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="accent-blue-600"
              />
              <span>
                Accept the terms and{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </span>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm">{errors.terms}</p>
            )}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
            >
              Register now
            </button>

            {/* Login */}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Log in
              </a>
            </p>

            {/* Social Login */}
            <div className="text-center space-y-3">
              <p className="text-sm text-gray-400">Or Sign-in with</p>
              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100 transition"
                >
                  <FaGoogle className="text-red-500" />
                  <span className="text-sm">Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100 transition"
                >
                  <FaFacebookF className="text-blue-600" />
                  <span className="text-sm">Facebook</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Tailwind reusable input style */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 0.75rem 1rem;
            border-radius: 0.375rem;
            background-color: #f3f4f6;
            outline: none;
          }
          .input:focus {
            ring: 2;
            ring-color: #3b82f6;
          }
        `}
      </style>
    </div>
  );
};

export default RegistrationComponent;
