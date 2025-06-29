import React, { useMemo } from "react";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { PROJECTS } from "@/helper/data";

const Projects: React.FC = () => {
  const featuredProjects = useMemo(() => {
    return PROJECTS.filter((project) => project.featured);
  }, []);
  const otherProjects = useMemo(() => {
    return PROJECTS.filter((project) => !project.featured);
  }, []);
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise across
            different technologies and industries
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Calendar size={16} />
                    {project.date}
                  </div>

                  <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    className="flex gap-4 pt-4"
                    hidden={project.type === "private"}
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <Calendar size={16} />
                    {project.date}
                  </div>

                  <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                    {project.title}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div
                    className="flex gap-3"
                    hidden={project.type === "private"}
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
