"use client";

import React, { useState } from "react";
import {
  RiCloseLine,
  RiBookLine,
  RiMoonLine,
  RiSunLine,
} from "react-icons/ri";
import { useTheme } from "../Component/Context/ThemeContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="hidden md:flex w-full h-16 dark:bg-[#020617] shadow-md">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between">
          <div className="text-xl font-bold text-blue-600">LMS</div>

          <ul className="flex items-center gap-8 dark:text-gray-200">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 flex items-center gap-1 cursor-pointer">
              <RiBookLine /> Courses
            </li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="text-xl dark:text-gray-200">
              {isDark ? <RiSunLine /> : <RiMoonLine />}
            </button>

            <button className="dark:text-gray-200 hover:text-blue-600">
              Sign in
            </button>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Join
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE / MEDIUM NAVBAR ================= */}
      <nav className="md:hidden w-full h-16 flex items-center justify-between px-4 shadow-md dark:bg-[#020617]">
        <div className="text-xl font-bold text-blue-600">LMS</div>

        {/* CUSTOM HAMBURGER BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="group flex flex-col gap-1.5 cursor-pointer"
        >
          {/* First line (big - fixed) */}
          <span className="h-0.5 w-7 bg-black dark:bg-white"></span>

          {/* Middle line (small → big, RIGHT to LEFT) */}
          <span
            className="
              h-0.5 w-4 self-end
              bg-black dark:bg-white
              transition-all duration-300
              group-hover:w-7
            "
          ></span>

          {/* Last line (big - fixed) */}
          <span className="h-0.5 w-7 bg-black dark:bg-white"></span>
        </button>
      </nav>

      {/* ================= SLIDE MENU ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-w-sm 
        bg-white dark:bg-[#020617] shadow-lg z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
          <h2 className="text-lg font-semibold dark:text-gray-200">Menu</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-2xl dark:text-gray-200 cursor-pointer"
          >
            <RiCloseLine />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 p-6 dark:text-gray-200">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
            <RiBookLine /> Courses
          </li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* Bottom Actions */}
        <div className="absolute bottom-6 left-0 w-full px-6 flex items-center justify-between">
          <button onClick={toggleTheme} className="text-xl dark:text-gray-200">
            {isDark ? <RiSunLine /> : <RiMoonLine />}
          </button>

          <button className="text-blue-600 cursor-pointer">Sign in</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
