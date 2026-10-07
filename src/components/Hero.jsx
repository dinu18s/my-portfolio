import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Sparkles, Code2, Database, Globe, Brain, Navigation } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo, coreTech } from '../data/portfolioData';
import Tilt3D from './Tilt3D';

export default function Hero() {
  const techIcons = [Code2, Database, Globe, Brain];

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden z-10">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* 3D Floating Profile Photo Avatar with Animated Orbit Rings */}
          <div className="relative mb-8 group cursor-pointer" style={{ transformStyle: 'preserve-3d' }}>
            {/* Outer Rotating 3D Holographic Ring */}
            <div className="absolute -inset-4 rounded-full border border-sky-400/30 dark:border-sky-400/40 animate-[spin_12s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-7 rounded-full border border-dashed border-purple-400/20 dark:border-purple-400/30 animate-[spin_18s_linear_infinite_reverse] pointer-events-none" />

            {/* Glowing Backdrop */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
            
            <Tilt3D maxTilt={20} scale={1.05} className="rounded-full shadow-2xl">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-white dark:border-slate-900 shadow-2xl"
              />
            </Tilt3D>

            {/* Floating 3D Online Badge */}
            <span className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-500 border-4 border-white dark:border-slate-900 rounded-full shadow-lg z-20 animate-bounce" />
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 dark:bg-sky-950/70 border border-sky-300/60 dark:border-sky-700/60 text-sky-700 dark:text-sky-300 text-xs font-bold tracking-wide mb-6 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
            </span>
            Available for Opportunities
          </div>

          {/* Main Title with 3D Holographic Gradient */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
              {personalInfo.name}
            </span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-sky-500 inline-block animate-spin" />
            {personalInfo.title}
          </p>

          {/* Short Bio */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* Swapped Email & Location Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 bg-white/80 dark:bg-slate-800/80 hover:bg-sky-50 dark:hover:bg-slate-700 px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700/80 transition-all shadow-sm"
            >
              <Mail className="w-4 h-4 text-sky-500" />
              {personalInfo.email}
            </a>

            <span className="inline-flex items-center gap-1.5 bg-white/80 dark:bg-slate-800/80 px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-sm">
              <MapPin className="w-4 h-4 text-sky-500" />
              {personalInfo.location}
            </span>
          </div>

          {/* Clickable Google Maps Location Link */}
          <div className="mt-3">
            <a
              href={personalInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold rounded-xl bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 hover:bg-sky-500/20 dark:hover:bg-sky-500/30 border border-sky-300/60 dark:border-sky-700/60 transition-all hover:scale-105 shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Location</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>

          {/* CTA Button: "Projects" */}
          <div className="mt-8 flex items-center justify-center w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-2xl text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-600 hover:to-purple-700 shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all hover:scale-105 active:scale-95"
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
              className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700/80 shadow-md hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700/80 shadow-md hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700/80 shadow-md hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              aria-label="Call Phone"
              className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700/80 shadow-md hover:scale-110"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Core Tech Grid wrapped in 3D Interactive Tilt Cards */}
          <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800 w-full">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
              Core Tech & Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {coreTech.map((tech, idx) => {
                const IconComp = techIcons[idx] || Code2;
                return (
                  <Tilt3D key={idx} maxTilt={12} scale={1.03}>
                    <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-3.5 shadow-md backdrop-blur-md">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-500/20">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">{tech.label}</p>
                        <p className="text-sm font-extrabold text-slate-900 dark:text-white">{tech.value}</p>
                      </div>
                    </div>
                  </Tilt3D>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
