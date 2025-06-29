import { SKILLS } from "@/helper/data";
import React from "react";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use
            to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
