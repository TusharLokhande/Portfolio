"use client";

import React from "react";
import { Calendar, MapPin, ExternalLink, Award } from "lucide-react";
import { EXPERIENCE_DATA } from "@/helper/data";

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            My professional journey building impactful solutions and leading
            development teams
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((exp, index) => (
              <div key={index} className="relative md:ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-800 shadow-lg hidden md:block"></div>

                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                            {exp.position}
                          </h3>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                            {exp.type}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 flex items-center gap-2"
                          >
                            {exp.company}
                            {exp.companyUrl !== "#" && (
                              <ExternalLink size={16} />
                            )}
                          </a>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-600 dark:text-slate-400">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h4 className="font-semibold text-slate-800 dark:text-white">
                          Key Achievements
                        </h4>
                      </div>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-3 text-slate-600 dark:text-slate-300"
                          >
                            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how my experience can contribute to your next
              project
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
