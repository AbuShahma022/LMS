import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-blue-50 via-white to-purple-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 overflow-hidden isolation-isolate">
      
      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 lg:w-1/2 z-20 text-center md:text-left">
        <p className="text-purple-600 font-bold mb-4 uppercase tracking-wide text-sm md:text-base">
          Discover your journey
        </p>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl  font-extrabold text-gray-900 leading-tight mb-6 relative z-30">
          Unlock <span className="relative inline-block">
            4500+
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-[slideBar_4s_ease-in-out_infinite]"></span>
          </span> Courses <br />
          with World-Class <br />
          Instructors
        </h1>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 max-w-md mx-auto md:mx-0 relative z-30">
          Learn from top-rated mentors and join thousands of students worldwide. Your next step starts here.
        </p>

        <button className="bg-purple-600 text-white px-5 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-2xl hover:-translate-y-1 active:scale-95 relative z-30">
          Explore Courses
        </button>
      </div>

      {/* RIGHT CONTENT (hidden on small screens, visible from md and up) */}
      <div className="hidden md:flex w-full lg:w-1/2 relative mt-10 md:mt-0 justify-center z-20">
        <div className="relative">
          {/* Demo Image */}
          <img 
            src="/heroRight.png" 
            alt="Student with laptop" 
            className="rounded-full w-[280px] h-[300px] md:w-[350px] md:h-[380px] lg:w-[420px] lg:h-[460px] object-cover ring-4 ring-purple-100 shadow-xl z-10"
          />

          {/* Floating Card: Student Enrollment */}
          <div className="absolute top-16 -right-12 md:top-20 md:-right-16 backdrop-blur-md bg-white/70 p-3 md:p-4 rounded-xl shadow-lg flex flex-col items-center max-w-[180px] md:max-w-[220px] animate-[floatCard_6s_ease-in-out_infinite] border border-white/40 z-30">
            <div className="flex -space-x-2 md:-space-x-3 mb-2 md:mb-3 relative z-40">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-5 h-5 md:w-8 md:h-8 rounded-full border-2 border-white bg-gray-300 overflow-hidden"
                >
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                </div>
              ))}
              <div className="w-5 h-5 md:w-8 md:h-8 rounded-full border-2 border-white bg-orange-500 flex items-center justify-center text-white text-[8px] md:text-[10px] font-bold">
                +
              </div>
            </div>
            <p className="text-[10px] md:text-[13px] text-gray-700 text-center leading-tight relative z-40">
              <span className="text-purple-600 font-bold">21,500+</span> students enrolled worldwide
            </p>
          </div>

          {/* Floating Card: Top Rated Instructors */}
          <div className="absolute bottom-6 md:bottom-10 -left-10 md:-left-16 backdrop-blur-md bg-white/70 p-3 md:p-5 rounded-2xl shadow-lg flex flex-col items-center animate-[bounceSlow_5s_ease-in-out_infinite] border border-white/40 z-30">
            <div className="flex space-x-1 mb-1 md:mb-2 relative z-40">
              {[1, 2, 3].map((s) => (
                <span key={s} className="text-yellow-400 text-lg md:text-xl">★</span>
              ))}
            </div>
            <p className="font-bold text-gray-800 text-xs md:text-sm relative z-40">Top Rated</p>
            <p className="font-bold text-gray-800 text-xs md:text-sm relative z-40">Instructors</p>
          </div>
        </div>

        {/* Decorative Gradient Circles */}
        <div className="absolute -top-8 -left-8 w-20 h-20 md:w-40 md:h-40 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-30 blur-2xl z-0"></div>
        <div className="absolute -bottom-8 -right-8 w-16 h-16 md:w-32 md:h-32 bg-gradient-to-r from-yellow-200 to-orange-300 rounded-full opacity-30 blur-2xl z-0"></div>
      </div>

      {/* Custom Keyframes */}
      <style>
        {`
          @keyframes floatCard {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          @keyframes bounceSlow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes slideBar {
            0%, 100% { transform: scaleX(0); opacity: 0; }
            50% { transform: scaleX(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
