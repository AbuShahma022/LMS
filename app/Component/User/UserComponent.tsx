"use client";  // ✅ Add this line at the very top

import React, { useState } from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaTimes } from "react-icons/fa";

const UserComponent = () => {
  const [showCard, setShowCard] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {showCard && (
        <div className="w-full max-w-md border border-gray-200 rounded-xl shadow-lg p-8 text-center space-y-6 relative">
          {/* Close Icon */}
          <button
            onClick={() => setShowCard(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition cursor-pointer"
          >
            <FaTimes className="text-xl" />
          </button>

          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Join as</h2>

          <div className="flex flex-col gap-6">
            {/* Student Option */}
            <button className="flex items-center justify-center gap-3 px-6 py-4 border border-gray-300 rounded-lg hover:shadow-md transition cursor-pointer">
              <FaUserGraduate className="text-blue-600 text-2xl" />
              <span className="text-lg font-semibold text-gray-700">Student</span>
            </button>

            {/* Teacher Option */}
            <button className="flex items-center justify-center gap-3 px-6 py-4 border border-gray-300 rounded-lg hover:shadow-md transition cursor-pointer">
              <FaChalkboardTeacher className="text-indigo-600 text-2xl" />
              <span className="text-lg font-semibold text-gray-700">Teacher</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserComponent;
