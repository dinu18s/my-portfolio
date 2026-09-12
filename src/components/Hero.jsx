import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Sparkles, Code2, Database, Globe, Brain, Navigation } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo, coreTech } from '../data/portfolioData';

export default function Hero() {
  const techIcons = [Code2, Database, Globe, Brain];

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Profile Photo Avatar */}
          <div className="relative mb-6 group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 blur opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse" />
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-white dark:border-slate-900 shadow-2xl"
            />
            {/* Online Indicator Badge */}
            <span className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-500 border-3 border-white dark:border-slate-900 rounded-full shadow-md" />
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-semibold tracking-wide mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Available for Opportunities
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-sky-500 inline-block" />
            {personalInfo.title}
          </p>

          {/* Short Bio */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* Swapped Email & Location Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {/* 1. Email first */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4 text-sky-500" />
              {personalInfo.email}
            </a>

            {/* 2. Medchal Location second */}
            <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
              <MapPin className="w-4 h-4 text-sky-500" />
              {personalInfo.location}
            </span>
          </div>

          {/* Directly underneath both: Clickable Google Maps Location Link */}
          <div className="mt-3">
            <a
              href={personalInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold rounded-lg bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 hover:bg-sky-500/20 dark:hover:bg-sky-500/30 border border-sky-300/60 dark:border-sky-700/60 transition-all hover:scale-105 shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Location</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>

          {/* CTA Button: "Projects" only */}
          <div className="mt-8 flex items-center justify-center w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-xl text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Projects
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Social Quick Links: LinkedIn first, GitHub second */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              aria-label="Call Phone"
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Core Tech Grid */}
          <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800 w-full">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Core Tech & Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
              {coreTech.map((tech, idx) => {
                const IconComp = techIcons[idx] || Code2;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0">
                      <IconComp className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">{tech.label}</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{tech.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
