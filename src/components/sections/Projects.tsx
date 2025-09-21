import React from 'react';
import { Wrench, Github, ExternalLink } from 'lucide-react';
import { projects } from '../../data/portfolio';


const Projects: React.FC = () => {
  // const visibleSections = useScrollAnimation();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
    className="py-20 px-4 sm:px-6 lg:px-8 section-transition bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Wrench className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 transition-colors duration-300" aria-hidden="true" />
          <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/70 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.01] flex flex-col overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
              role="article"
              aria-labelledby={`project-title-${project.id}`}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
              
              <div className="relative overflow-hidden rounded-t-2xl">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live demo of ${project.title}`}
                    className="block relative overflow-hidden"
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-40 object-cover transition-all duration-700 group-hover:scale-110 cursor-pointer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <ExternalLink className="h-5 w-5 text-gray-900 dark:text-white" />
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="block relative overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-40 object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                )}
              </div>
              
              <div className="p-4 flex-grow flex flex-col relative">
                <h3 id={`project-title-${project.id}`} className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed flex-grow transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-800 dark:text-purple-300 text-xs font-medium px-2 py-1 rounded-full border border-purple-200/50 dark:border-purple-700/50 hover:shadow-md transition-all duration-300"
                        style={{ animationDelay: `${(index * 150) + (techIndex * 50)}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 dark:from-gray-700 dark:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 text-white px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="h-3 w-3 mr-1.5" aria-hidden="true" />
                    GitHub
                  </a>
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-700 dark:to-blue-700 dark:hover:from-purple-800 dark:hover:to-blue-800 text-white px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink className="h-3 w-3 mr-1.5" aria-hidden="true" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/Rochan09"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 dark:from-gray-600 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl dark:hover:shadow-gray-900/50 transform hover:-translate-y-1 hover:scale-105"
            aria-label="View all projects on GitHub"
          >
            <Github className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
            View More Projects
            <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
