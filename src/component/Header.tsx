"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ui/ThemeToggle";
import { cn } from "@/utils";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleDownloadResume = () => {
    try {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.setAttribute("download", "Tushar_Lokhande_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {}
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            className={cn(
              "text-2xl font-bold ",
              !isScrolled ? "text-white" : "text-slate-800 dark:text-white"
            )}
            onClick={() => scrollToSection("#hero")}
          >
            <span className="text-blue-600 cursor-pointer">Tushar</span>{" "}
            Lokhande
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  " hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium",
                  !isScrolled
                    ? "text-slate-300"
                    : "text-slate-700 dark:text-slate-300"
                )}
              >
                {item.name}
              </button>
            ))}
            <ThemeToggle />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
              onClick={handleDownloadResume}
            >
              <Download size={16} />
              Resume
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 dark:text-slate-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-800 rounded-lg shadow-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "block px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 w-full text-left"
                  )}
                >
                  {item.name}
                </button>
              ))}
              <button
                className="w-full bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 justify-center mt-2"
                onClick={handleDownloadResume}
              >
                <Download size={16} />
                Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
