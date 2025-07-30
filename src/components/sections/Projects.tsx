import React from 'react';
import { Wrench, Github, ExternalLink } from 'lucide-react';
import { projects } from '../../data/portfolio';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const visibleSections = useScrollAnimation();
  const isVisible = visibleSections.has('projects');

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className={`py-12 px-4 sm:px-6 lg:px-8 bg-white transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Wrench className="h-6 w-6 text-blue-600 mr-3" aria-hidden="true" />
          <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold text-gray-900">
            Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-102 ${
                isVisible ? 'animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              role="article"
              aria-labelledby={`project-title-${project.id}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-36 object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
              </div>
              
              <div className="p-4">
                <h3 id={`project-title-${project.id}`} className="text-lg font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-3 py-1.5 rounded-md text-sm transition-colors duration-200"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="h-3 w-3 mr-1" aria-hidden="true" />
                    GitHub
                  </a>
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-sm transition-colors duration-200"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" aria-hidden="true" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;