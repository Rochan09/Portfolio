import React from 'react';
import { FileText, Download } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Resume: React.FC = () => {
  const visibleSections = useScrollAnimation();
  const isVisible = visibleSections.has('resume');

  return (
    <section
      id="resume"
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-12">
          <FileText className="h-8 w-8 text-blue-600 mr-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Resume
          </h2>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;