import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Code2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2 text-xl font-bold text-white group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <Code2 className="w-5.5 h-5.5" />
              </div>
              <span className="font-semibold text-white">
                {personalInfo.name}
              </span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              {personalInfo.title} based in {personalInfo.location}. Specializing in Python, SQL, Web Fundamentals, and logical problem-solving.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-sky-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Summary Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-sky-400 transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-emerald-400 transition-colors">
                  +91 {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>

            {/* Social Links: Exchanged places - LinkedIn first, then GitHub */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
