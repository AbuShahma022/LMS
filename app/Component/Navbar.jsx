"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  RiMenu3Line,
  RiCloseLine,
  RiBookLine,
  RiMoonLine,
  RiSunLine,
} from "react-icons/ri";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 z-50 w-full h-14 shadow-md bg-background/80 backdrop-blur">
        <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            LMS
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
              <RiBookLine /> Courses
            </li>
            <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="text-xl"
              aria-label="Toggle theme"
            >
              {isDark ? <RiSunLine /> : <RiMoonLine />}
            </button>

            <Link href="/user/login" className="hidden md:block hover:text-blue-600">
              Login
            </Link>

            <Link
              href="/user"
              className="hidden md:block bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700"
            >
              Join now
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-2xl"
            >
              <RiMenu3Line />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= BACKDROP ================= */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-background
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-14 px-4 flex items-center justify-between border-b">
          <span className="font-semibold">Menu</span>
          <button onClick={() => setOpen(false)} className="text-2xl">
            <RiCloseLine />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6">
          <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li className="flex items-center gap-2 cursor-pointer">
            <RiBookLine /> Courses
          </li>
          <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>

        <div className="absolute bottom-6 left-0 w-full px-6 space-y-4">
          <Link
            href="/user/login"
            onClick={() => setOpen(false)}
            className="block text-center py-2 border rounded-md"
          >
            Login
          </Link>

          <Link
            href="/user"
            onClick={() => setOpen(false)}
            className="block text-center py-2 bg-blue-600 text-white rounded-md"
          >
            Join now
          </Link>

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex items-center justify-center gap-2 w-full"
          >
            {isDark ? <RiSunLine /> : <RiMoonLine />}
            Toggle theme
          </button>
        </div>
      </aside>

      {/* Spacer */}
      <div className="h-14" />
    </>
  );
}
