"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { EMAIL, GITHUB_LINK, LINKDIN_LINK } from "@/helper/data";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= currentRole.length) {
        setDisplayText(currentRole.slice(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden duration-300"
      id="hero"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>

      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-lg sm:text-xl text-blue-300 font-medium">
              Hello, I'm
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Tushar Lokhande
              </span>
            </h1>
          </div>

          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-200">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences through
            clean code, innovative solutions, and cutting-edge technologies.
          </p>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href={LINKDIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="pt-12">
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="animate-bounce text-white/70 hover:text-white transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
