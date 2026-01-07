"use client";

import React from "react";
import {
  ArrowUp,
  Facebook,
  GraduationCap,
  Headphones,
  Instagram,
  Linkedin,
  Send,
  Twitter,
} from "lucide-react";

const linkColumns = [
  {
    title: "Online Platform",
    links: [
      "Proper Guidelines",
      "Digital Library",
      "Compare Us",
      "Become Instructor",
      "Build Career",
    ],
  },
  {
    title: "Browse Courses",
    links: [
      "Development",
      "Business",
      "Health and Fitness",
      "Life Styles",
      "Photography",
    ],
  },
  {
    title: "Insight Community",
    links: [
      "Global Partners",
      "Forum",
      "Help and Support",
      "Community",
      "Documentation",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#0c1018] text-gray-300">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20 text-blue-500">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="text-2xl font-semibold text-white">Eduman</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Great lesson ideas and lesson plans for ESL teachers! Educators
              can customize lessons as best plans to knowledge.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-200 transition hover:bg-blue-600 hover:text-white"
                  aria-label={label}
                  type="button"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {linkColumns.map((col) => (
                <div key={col.title} className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    {col.title}
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-400">
                    {col.links.map((item) => (
                      <li
                        key={item}
                        className="transition hover:text-white hover:underline"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/5 pt-10 lg:grid-cols-[1fr_auto_auto] lg:items-center">
          <div className="text-sm text-gray-400">
            © Copyrighted and Designed by .....
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20 text-blue-500">
              <Headphones className="h-6 w-6" />
            </div>
            <div className="leading-tight">
              <p className="text-sm text-gray-400">
                Have a question? Call us 24/7
              </p>
              <p className="text-lg font-semibold text-white">
                (987) 547587587
              </p>
            </div>
          </div>

          <form className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <div className="relative w-full sm:w-72">
              <input
                id="footer-email"
                type="email"
                placeholder="Enter Email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              />
              <Send className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Subscribe
              <ArrowUp className="h-4 w-4 rotate-45" />
            </button>
          </form>
        </div>
      </div>

      <button
        type="button"
        className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/40 transition hover:bg-blue-500"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
