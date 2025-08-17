import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const About: React.FC = () => {
  const visibleSections = useScrollAnimation();
  const isVisible = visibleSections.has('about-section');

  return (
    <section
      id="about-section"
      className={`relative py-8 px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
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
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            About Me
          </h2>
          {/* Removed typewriter effect here as requested */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Hi! I'm <span className="font-semibold text-blue-700">Rochan Vardhan Boddepalli</span>, a passionate and motivated Full-Stack Web Developer with hands-on experience in building modern web applications using React, Node.js, MongoDB, and Google Cloud tools. I thrive in dynamic environments where I can solve real-world problems through code and continuous learning.
            </p>
            
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Currently pursuing my B.Tech in Information Technology at <span className="font-semibold text-blue-700">GMR Institute of Technology</span>, I've completed multiple internships where I developed secure, scalable, and user-friendly applications. I'm always eager to explore new technologies, collaborate with innovative teams, and deliver impactful digital solutions.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Beyond coding, I enjoy working on projects that challenge my problem-solving skills and allow me to blend creativity with functionality. <span className="font-semibold text-blue-700">Let's build something awesome together!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 