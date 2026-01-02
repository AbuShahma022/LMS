"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

type Errors = Partial<Record<keyof FormData, string>>;

const inputClass =
  "w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-[#020617] text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-transparent dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600";

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.terms) newErrors.terms = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen  dark:bg-[#0f172a] flex items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 px-6 md:px-20 gap-10">
        {/* LEFT */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center items-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold  dark:text-white">
            Sign up
          </h2>

          <img
            src="/sign-up-message.png"
            alt="message"
            className="w-32 md:w-45 animate-bounce"
            style={{ animationDuration: "4s" }}
          />

          <img
            src="/sign-up.png"
            alt="signup"
            className="w-48 md:w-72 animate-pulse"
          />
        </div>

        {/* RIGHT */}
        <div className="col-span-1 md:col-span-7 flex justify-center items-center">
          <form className="w-full max-w-md space-y-6">
            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  className={inputClass}
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>

              <div>
                <input
                  className={inputClass}
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                className={inputClass}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Username */}
            <div>
              <input
                className={inputClass}
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
            </div>

            {/* Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className={inputClass}
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />

              <input
                className={inputClass}
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
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

            {/* Submit */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition">
              Register now
            </button>

            {/* Login */}
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Log in
              </a>
            </p>

            {/* Social */}
            <div className="text-center space-y-3">
              <p className="text-sm text-gray-400">Or Sign-in with</p>
              <div className="flex justify-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 border dark:border-gray-700 rounded-md hover:border-blue-600 dark:hover:bg-gray-800 transition">
                  <FaGoogle className="text-red-500" />
                  Google
                </button>

               
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationComponent;
