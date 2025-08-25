import React from 'react';
import Typewriter from '../ui/Typewriter';
const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Subtle geometric SVG background left side */}
      <svg className="absolute left-0 top-0 h-full w-1/2 opacity-10 -z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="200" fill="url(#paint0_radial)" />
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5fa6c9" />
            <stop offset="1" stopColor="#b3b29b" stopOpacity="0.2" />
          </radialGradient>
        </defs>
      </svg>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-black">
            Hello, I'm <span>Rochan Vardhan Boddepalli</span>
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-700 italic mb-6 font-light leading-relaxed max-w-xl">
            "Turning ideas into reality, one line of code at a time."
          </p>
          <h2 className="text-xl sm:text-2xl text-blue-700 font-semibold mb-10">
            <Typewriter />
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 items-center mb-6">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-xl font-semibold text-lg text-gray-900 bg-gray-200 border border-gray-400 shadow transition-all duration-200 hover:shadow-lg hover:bg-gray-300 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="9 7 15 3 15 8" />
              </svg>
              View my work
            </a>
          </div>
          {/* Social Icons Row */}
          <div className="flex gap-8 mt-2">
            <a href="https://github.com/Rochan09" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="transition-transform duration-300 hover:scale-110 hover:shadow-2xl rounded-full bg-white p-1 shadow-md">
              <svg className="w-10 h-10" fill="#181717" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/rochan-vardhan-boddepalli" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="transition-transform duration-300 hover:scale-110 hover:shadow-2xl rounded-lg bg-white p-1 shadow-md">
              <svg className="w-10 h-10" fill="url(#linkedin-gradient)" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="linkedin-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0077B5" />
                    <stop offset="100%" stopColor="#00A0DC" />
                  </linearGradient>
                </defs>
                <rect width="24" height="24" rx="4" fill="url(#linkedin-gradient)" />
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" fill="#fff"/>
              </svg>
            </a>
          </div>
        </div>
        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
            {/* Subtle background shapes */}
            <svg className="absolute -top-8 -left-8 w-44 h-44 opacity-30 z-0" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="100" fill="url(#circleGradient1)" />
              <defs>
                <radialGradient id="circleGradient1" cx="0" cy="0" r="1" gradientTransform="translate(100 100) scale(100)" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5fa6c9" />
                  <stop offset="1" stopColor="#b3b29b" stopOpacity="0.2" />
                </radialGradient>
              </defs>
            </svg>
            <svg className="absolute bottom-0 right-0 w-52 h-32 opacity-20 z-0" viewBox="0 0 300 120" fill="none">
              <path d="M0,60 Q75,0 150,60 T300,60 Q225,120 150,60 T0,60" fill="url(#waveGradient1)" />
              <defs>
                <linearGradient id="waveGradient1" x1="0" y1="60" x2="300" y2="60" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#b3b29b" />
                  <stop offset="1" stopColor="#5fa6c9" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
            <div className="relative w-full h-full flex items-center justify-center z-10">
              {/* Animated Glow */}
              <span className="absolute inset-0 rounded-full animate-glow bg-gradient-to-tr from-blue-400 via-indigo-300 to-purple-300 opacity-60 blur-2xl"></span>
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#5fa6c9] to-[#b3b29b] p-2 flex items-center justify-center border-8 border-white overflow-hidden shadow-lg relative">
                <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover object-center rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
