"use client";

import Link from "next/link";
import React from "react";
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

const UserComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  dark:bg-[#020617]">
      <div className="w-full max-w-md rounded-2xl shadow-xl  dark:bg-[#020617] border border-gray-200 dark:border-gray-800 p-8">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold  dark:text-gray-100">
            Join as
          </h2>
          <p className="mt-2  dark:text-gray-400">
            Choose how you want to continue
          </p>
        </div>

        {/* Options */}
        <div className="space-y-5">
          {/* Student */}
          <Link href="/user/registration"
            className="
              w-full flex items-center gap-4 p-5
              border  dark:border-gray-700
              rounded-xl
              hover:border-blue-600  dark:hover:bg-blue-900/20
              transition
            "
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30">
              <FaUserGraduate className="text-blue-600 text-xl" />
            </div>

            <div className="text-left">
              <p className="text-lg font-semibold  dark:text-gray-100">
                Student
              </p>
              <p className="text-sm  dark:text-gray-400">
                Learn new skills and access courses
              </p>
            </div>
          </Link>

          {/* Teacher */}
          <Link href="/user/registration"
            className="
              w-full flex items-center gap-4 p-5
              border border-gray-200 dark:border-gray-700
              rounded-xl
              hover:border-indigo-600  dark:hover:bg-indigo-900/20
              transition
            "
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
              <FaChalkboardTeacher className="text-indigo-600 text-xl" />
            </div>

            <div className="text-left">
              <p className="text-lg font-semibold dark:text-gray-100">
                Teacher
              </p>
              <p className="text-sm  dark:text-gray-100">
                Create courses and teach students
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
