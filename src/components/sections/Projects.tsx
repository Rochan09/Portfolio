import React from 'react';
import { Wrench, Github, ExternalLink } from 'lucide-react';
import { projects } from '../../data/portfolio';


const Projects: React.FC = () => {
  // const visibleSections = useScrollAnimation();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
    className="py-16 px-4 sm:px-6 lg:px-8 section-transition bg-gradient-to-br from-yellow-100 via-orange-50 to-pink-100"
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
              className="bg-white/60 backdrop-blur-md rounded-2xl border border-blue-200 shadow-xl hover:shadow-2xl hover:bg-white/80 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex flex-col"
              style={{ animationDelay: `${index * 200}ms` }}
              role="article"
              aria-labelledby={`project-title-${project.id}`}
            >
              <div className="relative overflow-hidden">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live demo of ${project.title}`}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-contain bg-white transition-transform duration-300 hover:scale-105 cursor-pointer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                  </a>
                ) : (
                  <>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-contain bg-white transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                  </>
                )}
              </div>
              
              <div className="p-4 flex-grow flex flex-col">
                <h3 id={`project-title-${project.id}`} className="text-lg font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-3 text-sm leading-relaxed flex-grow">
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
        
        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/Rochan09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-4 py-2 rounded-md text-base font-medium transition-colors duration-200"
            aria-label="View all projects on GitHub"
          >
            <Github className="h-5 w-5 mr-2" aria-hidden="true" />
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
