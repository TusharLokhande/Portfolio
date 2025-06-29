import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { EMAIL, GITHUB_LINK, LINKDIN_LINK } from "@/helper/data";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      href: GITHUB_LINK,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: LINKDIN_LINK,
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      href: `mailto:${EMAIL}`,
    },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-2xl font-bold">
              <span className="text-blue-400">Tushar</span>Lokhande
            </h3>
            <p className="text-slate-400 mt-2">
              Building digital experiences that matter
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110 group"
                aria-label={link.name}
              >
                <div className="text-slate-400 group-hover:text-white transition-colors duration-300">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8 text-sm">
            <a
              href="#about"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-slate-800 w-full">
            <p className="text-slate-400 flex items-center justify-center gap-2">
              © {currentYear} Tushar Lokhande. Made with
              <Heart size={16} className="text-red-500 fill-current" />
              and lots of coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
