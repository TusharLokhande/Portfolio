"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { CONTACT_INFO } from "@/helper/data";
import InputForm from "./ui/InputForm";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work
            together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                I'm always excited to discuss new opportunities, innovative
                projects, or just chat about technology. Feel free to reach out
                through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {CONTACT_INFO.map((item, index) => (
                <a
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-md dark:hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-blue-600 dark:text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-4">Ready to Start?</h4>
              <p className="mb-6">
                I typically respond within 24 hours. Let's schedule a call to
                discuss your project requirements.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                Schedule a Call
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Your message has been sent successfully. I'll get back to you
                  soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Full Name
                    </label>
                    <InputForm
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Email Address
                    </label>
                    <InputForm
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Subject
                  </label>
                  <InputForm
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
