"use client";

import React, { useState,useEffect } from "react";
import {
  RiMenu3Line,
  RiCloseLine,
  RiBookLine,
  RiMoonLine,
  RiSunLine,
} from "react-icons/ri";
import { useTheme } from "next-themes"
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme,setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;

const isDark = theme === "dark";

const toggleTheme = () => {
  setTheme(isDark ? "light" : "dark");
};

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 z-50 w-full h-14 px-4 md:px-8 flex items-center justify-between shadow-md dark:bg-[#020617]">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">LMS</div>

        {/* ===== DESKTOP MENU ===== */}
        <ul className="hidden md:flex items-center gap-8 dark:text-gray-200">
          <Link href="/" className="hover:text-blue-600 cursor-pointer">Home</Link>
          <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <RiBookLine /> Courses
          </li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* ===== RIGHT SIDE ===== */}
        <div className="flex items-center gap-4">
          {/* Dark mode → DESKTOP ONLY */}
          <button
            onClick={toggleTheme}
            className="hidden md:block text-xl dark:text-gray-200"
          >
            {isDark ? <RiSunLine /> : <RiMoonLine />}
          </button>

          {/* Login → DESKTOP ONLY */}
          <Link href="/user/login" className="hidden md:block dark:text-gray-200 hover:text-blue-600">
            Login
          </Link>

          {/* Join → DESKTOP ONLY */}
          <Link href="/user" className="hidden md:block bg-blue-600 text-white px-4 py-1.5 rounded-md">
            Join now
          </Link>

          {/* Hamburger → MOBILE ONLY */}
          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-2xl dark:text-gray-200"
            >
              <RiMenu3Line />
            </button>
          )}
        </div>
      </nav>

      {/* ================= BACKDROP (MOBILE) ================= */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0  dark:bg-[#020617] z-40 md:hidden"
        />
      )}

      {/* ================= SIDEBAR (MOBILE) ================= */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[75%] max-w-xs
        dark:bg-[#020617]
        shadow-2xl z-999
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Sidebar header */}
        <div className="h-14 flex items-center justify-between px-4">
          <span className="font-semibold dark:text-gray-200">Menu</span>

          <button
            onClick={() => setOpen(false)}
            className="text-2xl dark:text-gray-200"
          >
            <RiCloseLine />
          </button>
        </div>

        {/* Sidebar links */}
        <ul className="flex flex-col gap-6 p-6 dark:text-gray-200">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-blue-600 cursor-pointer">
            Home
          </Link>
          <li
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 hover:text-blue-600 cursor-pointer"
          >
            <RiBookLine /> Courses
          </li>
          <li onClick={() => setOpen(false)} className="hover:text-blue-600 cursor-pointer">
            About
          </li>
          <li onClick={() => setOpen(false)} className="hover:text-blue-600 cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Mobile actions */}
       <div className="absolute bottom-6 left-0 w-full px-6 space-y-4">
  {/* Login */}
  <Link
    href="/user/login"
    className="
      block w-full text-center
      py-2
      rounded-md
      dark:text-gray-200
      hover:text-blue-600
      border border-transparent
    "
  >
    Login
  </Link>

  {/* Join now */}
  <Link
    href="/user"
    className="
      block w-full text-center
      bg-blue-600 text-white
      py-2
      rounded-md
      hover:bg-blue-700
    "
    onClick={()=> setOpen(false)}
  >
    Join now
  </Link>

  {/* Mobile dark toggle */}
  <button
    onClick={toggleTheme}
    className="flex items-center justify-center gap-2 w-full dark:text-gray-200"
  >
    {isDark ? <RiSunLine /> : <RiMoonLine />}
    <span>Toggle theme</span>
  </button>
</div>
      </aside>

      {/* Spacer for fixed navbar */}
      <div className="h-14" />
    </>
  );
}
