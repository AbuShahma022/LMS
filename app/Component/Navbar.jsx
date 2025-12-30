"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  RiMenu3Line,
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
      <nav className="hidden md:flex w-full h-16 dark:bg-[#020617]   dark:border-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between">
          <div className="text-xl font-bold text-blue-600">LMS</div>

          <ul className="flex items-center gap-8  dark:text-gray-200">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 flex items-center gap-1 cursor-pointer">
              <RiBookLine /> Courses
            </li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-xl  dark:text-gray-200"
            >
              {isDark ? <RiSunLine /> : <RiMoonLine />}
            </button>

            <Link href="/user/login">
              <button className=" dark:text-gray-200 hover:text-blue-600">
                Sign in
              </button>
            </Link>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Join
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
