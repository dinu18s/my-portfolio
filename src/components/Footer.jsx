import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Code2, MessageCircle } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <Code2 className="w-5.5 h-5.5" />
              </div>
              <span className="font-semibold text-slate-900 dark:text-white">
                {personalInfo.name}
              </span>
            </a>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
              {personalInfo.title} based in {personalInfo.location}. Specializing in Python, SQL, Web Fundamentals, and logical problem-solving.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Summary Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    +91 {personalInfo.phone}
                  </a>
                </div>
                <div className="ml-6">
                  <a
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white text-[11px] font-bold border border-emerald-500/30 transition-all hover:scale-105"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp Chat ↗</span>
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-500 dark:text-purple-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors border border-slate-200 dark:border-slate-800 shadow-sm cursor-pointer ml-2 flex items-center gap-1.5 font-bold"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
