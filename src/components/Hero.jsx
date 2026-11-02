import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Code2, Database, Globe, Brain, Navigation, Terminal, MessageCircle, Rocket, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo, coreTech } from '../data/portfolioData';
import Tilt3D from './Tilt3D';

export default function Hero() {
  const techIcons = [Code2, Database, Globe, Brain];
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden z-10"
    >
      {/* Background Multi-Layer Cyber Glow Orbs & Dynamic 3D Parallax */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-gradient-to-tr from-sky-500/15 via-indigo-600/15 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 40}px), calc(-50% + ${mousePos.y * 40}px))`
        }}
      />
      <div
        className="absolute top-1/3 right-8 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`
        }}
      />
      <div
        className="absolute bottom-10 left-8 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Avatar Centerpiece - Normal clean effect on cursor hover, no colors/overlays on image */}
          <div className="relative mb-10 group cursor-pointer">
            {/* Outer Subtle Orbit Rings (Kept strictly in background z-0) */}
            <div className="absolute -inset-6 rounded-full border-2 border-sky-400/30 animate-[spin_20s_linear_infinite] pointer-events-none border-t-transparent border-b-transparent z-0 shadow-[0_0_20px_rgba(56,189,248,0.2)]" />
            <div className="absolute -inset-10 rounded-full border border-dashed border-purple-400/20 animate-[spin_30s_linear_infinite_reverse] pointer-events-none z-0" />
            <div className="absolute -inset-14 rounded-full border border-indigo-500/15 pointer-events-none opacity-50 hidden sm:block z-0" />

            {/* Glowing Backdrop Aura strictly behind the image */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-sky-500/20 via-indigo-500/15 to-purple-500/20 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none z-0" />
            
            {/* Profile Image Container - Normal clean hover effect, completely isolated so no colors ever overlay the image */}
            <div className="relative z-10 rounded-full p-1 bg-slate-900 border-2 border-slate-700/80 shadow-2xl transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-sky-500/50">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-44 h-44 sm:w-52 sm:h-52 rounded-full object-cover border-4 border-slate-950 shadow-inner block"
              />
            </div>

            {/* Cyber Status Pulse Beacon */}
            <span className="absolute bottom-3 right-3 w-7 h-7 bg-emerald-500 border-4 border-slate-950 rounded-full shadow-lg z-20 animate-pulse flex items-center justify-center">
              <span className="w-2.5 h-2.5 bg-white rounded-full" />
            </span>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 border border-sky-400/40 text-sky-300 text-xs font-extrabold tracking-wider uppercase mb-5 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
            </span>
            Available for Opportunities
          </div>

          {/* Main Name & Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.12]">
            Hi, I'm{' '}
            <span className="text-gradient-cyan drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
              {personalInfo.name}
            </span>
          </h1>

          {/* Role Sub-Badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-md shadow-sm">
            <Terminal className="w-4 h-4 text-sky-400" />
            <p className="text-base sm:text-lg font-bold text-slate-200">
              {personalInfo.title}
            </p>
          </div>

          {/* Short Bio */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* Email & Location Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 bg-slate-900/85 hover:bg-slate-800 px-4 py-2 rounded-2xl border border-slate-700/80 transition-all shadow-sm font-semibold text-slate-200 hover:border-sky-500/50"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              {personalInfo.email}
            </a>

            <span className="inline-flex items-center gap-2 bg-slate-900/85 px-4 py-2 rounded-2xl border border-slate-700/80 shadow-sm font-semibold text-slate-200">
              <MapPin className="w-4 h-4 text-sky-400" />
              {personalInfo.location}
            </span>
          </div>

          {/* Clickable Google Maps Location Link */}
          <div className="mt-3">
            <a
              href={personalInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4.5 py-1.5 text-xs font-bold rounded-xl bg-sky-500/15 text-sky-400 hover:bg-sky-500/25 border border-sky-500/40 transition-all hover:scale-105 shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5 text-sky-400" />
              <span>Location</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>

          {/* 3D Cyber CTA Buttons: "View Projects" & "Hire Me" */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="animate-sheen w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-extrabold rounded-2xl text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-600 hover:to-purple-700 shadow-[0_0_30px_rgba(14,165,233,0.35)] hover:shadow-[0_0_45px_rgba(14,165,233,0.55)] transition-all hover:scale-105 active:scale-95"
            >
              <Rocket className="w-5 h-5 text-white" />
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-extrabold rounded-2xl text-slate-100 bg-slate-900/85 hover:bg-slate-800 border border-sky-400/40 hover:border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.35)] transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-sky-400" />
              Hire Me
            </a>
          </div>

          {/* Social Quick Links: LinkedIn first, GitHub second, Email, Phone with WhatsApp */}
          <div className="mt-10 flex items-start justify-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3.5 rounded-2xl bg-slate-900/90 text-slate-300 hover:text-sky-400 hover:bg-slate-800 transition-all border border-slate-700/80 shadow-md hover:scale-110 hover:border-sky-500/50"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3.5 rounded-2xl bg-slate-900/90 text-slate-300 hover:text-sky-400 hover:bg-slate-800 transition-all border border-slate-700/80 shadow-md hover:scale-110 hover:border-sky-500/50"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-3.5 rounded-2xl bg-slate-900/90 text-slate-300 hover:text-sky-400 hover:bg-slate-800 transition-all border border-slate-700/80 shadow-md hover:scale-110 hover:border-sky-500/50"
            >
              <Mail className="w-5 h-5" />
            </a>
            <div className="flex flex-col items-center gap-1.5">
              <a
                href={`tel:${personalInfo.phone}`}
                aria-label="Call Phone"
                className="p-3.5 rounded-2xl bg-slate-900/90 text-slate-300 hover:text-emerald-400 hover:bg-slate-800 transition-all border border-slate-700/80 shadow-md hover:scale-110 hover:border-emerald-500/50"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white text-[11px] font-bold border border-emerald-400/30 transition-all hover:scale-105 shadow-sm"
              >
                <MessageCircle className="w-3 h-3" />
                Message ↗
              </a>
            </div>
          </div>

          {/* Core Tech Grid wrapped in Cyber 3D Modules */}
          <div className="mt-14 pt-8 border-t border-slate-800/80 w-full">
            <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-6">
              Core Tech & Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {coreTech.map((tech, idx) => {
                const IconComp = techIcons[idx] || Code2;
                return (
                  <Tilt3D key={idx} maxTilt={14} scale={1.04}>
                    <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-4 shadow-md backdrop-blur-md group hover:border-sky-500/60 transition-colors">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-500/25 group-hover:scale-110 transition-transform">
                        <IconComp className="w-5.5 h-5.5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-semibold">{tech.label}</p>
                        <p className="text-sm font-black text-white mt-0.5">{tech.value}</p>
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
