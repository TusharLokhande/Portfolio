import React from "react";
import { ABOUT_HIGHLIGHTS } from "@/helper/data";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm a passionate software developer with over 3 years of
                experience building digital products that solve real-world
                problems. My journey began with a curiosity for how systems work
                — and turned into a deep commitment to crafting clean,
                efficient, and impactful software.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I specialize in full-stack development, with strong experience
                in modern JavaScript frameworks, cloud platforms, REST APIs, and
                database design. I enjoy turning complex requirements into
                elegant solutions and believe in writing clean, maintainable,
                and testable code.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Outside of work, I’m always learning — exploring DevOps
                practices, containerization, and scalable architecture patterns.
                I enjoy contributing to open-source projects, helping others in
                the community, and sharing what I learn through blogs and
                conversations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {ABOUT_HIGHLIGHTS.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
