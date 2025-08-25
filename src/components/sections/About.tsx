import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const About: React.FC = () => {
  const visibleSections = useScrollAnimation();
  const isVisible = visibleSections.has('about-section');

  return (
    <section
      id="about-section"
      className={`relative py-8 px-4 sm:px-6 lg:px-8 section-transition${isVisible ? ' visible' : ''} bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100`}
    >
      {/* Subtle geometric SVG background right side */}
      <svg className="absolute right-0 top-0 h-full w-1/2 opacity-10 -z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="200" fill="url(#paint1_radial)" />
        <defs>
          <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#b3b29b" />
            <stop offset="1" stopColor="#5fa6c9" stopOpacity="0.2" />
          </radialGradient>
        </defs>
      </svg>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left: About Me Text Only */}
          <div className="flex-1">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-white/20 w-full">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-lg md:text-xl mb-6 leading-relaxed">
                  I’m <span className="font-semibold text-blue-700">Rochan Vardhan Boddepalli</span> — a creative full-stack developer passionate about building clean, interactive, and responsive web apps. I love exploring new tech, solving real-world problems, and collaborating with others to deliver impactful solutions.
                </p>
                <p className="text-lg md:text-xl mb-6 leading-relaxed">
                  I’m currently pursuing my B.Tech in Information Technology at <span className="font-semibold text-blue-700">GMR Institute of Technology</span>. I’ve interned at top companies, contributed to open-source, and enjoy learning on platforms like LeetCode and GitHub.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  Outside of coding, I enjoy working on creative side projects, attending tech meetups, and sharing knowledge with the community. <span className="font-semibold text-blue-700">Let’s connect and create something amazing!🚀</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Two Cards */}
          <div className="flex flex-col gap-6 w-full md:w-80">
            {/* Card 1: Profile Info */}
            <div className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-start border border-blue-100">
              <div className="text-xl font-bold text-gray-900 mb-2">Rochan Vardhan Boddepalli</div>
              <div className="text-gray-700 flex items-center mb-1">
                <span className="material-icons text-blue-600 mr-2">📩</span>
                <a href="mailto:rochanvardhan2004@gmail.com" className="text-black-700 hover:underline">rochanvardhan2004@gmail.com</a>
              </div>
              <div className="text-gray-700 flex items-center mb-1">
                <span className="material-icons text-blue-600 mr-2">🏫</span>
                B.Tech – Information Technology
              </div>
              <div className="text-gray-700 flex items-center">
                <span className="material-icons text-blue-600 mr-2">📍</span>
                Rajam, Andhra Pradesh
              </div>
            </div>
            {/* Card 2: Resume Download (Simple) */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start border">
              <div className="text-lg font-bold text-gray-900 mb-4">Resume</div>
              <div className="flex flex-col gap-2 w-full">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 rounded-md border border-blue-500 text-blue-700 font-semibold text-center hover:bg-blue-50 transition-colors"
                >
                  🧾View Resume
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="w-full px-4 py-2 rounded-md border border-purple-500 text-purple-700 font-semibold text-center hover:bg-purple-50 transition-colors"
                >
                  📥Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 