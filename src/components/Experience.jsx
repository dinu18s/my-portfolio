import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  Clock, 
  Globe, 
  Building2, 
  Terminal, 
  Server, 
  BarChart3, 
  Cpu, 
  Zap, 
  FileText, 
  CheckCircle2, 
  Sparkles,
  Award
} from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';
import Tilt3D from './Tilt3D';

const areaIconMap = {
  "Python Programming": Terminal,
  "Backend Development": Server,
  "Data Analysis": BarChart3,
  "API Integration": Cpu,
  "Automation": Zap,
  "Technical Documentation": FileText
};

export default function Experience() {
  const intern = experienceData[0];

  return (
    <section id="experience" className="py-24 bg-slate-950/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Career & Education
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Experience & <span className="text-gradient-cyan">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Professional software development internship and educational background in Computer Science & Artificial Intelligence.
          </p>
        </div>

        {/* SECTION 1: PROFESSIONAL EXPERIENCE */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-sky-500/25">
              <Briefcase className="w-5.5 h-5.5" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Professional Experience
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Industry internship & practical technical development
              </p>
            </div>
          </div>

          {intern && (
            <Tilt3D maxTilt={6} scale={1.01} className="rounded-3xl shadow-2xl">
              <div className="glass-panel p-7 sm:p-10 md:p-12 rounded-3xl border border-slate-700/80 shadow-2xl hover:border-sky-500/50 transition-all duration-300 relative overflow-hidden backdrop-blur-xl group">
                
                {/* Ambient Dynamic Glows */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-sky-500/15 via-indigo-600/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-sky-500/25 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-600/10 to-transparent rounded-tr-full pointer-events-none" />

                {/* Top Info Bar */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-8 border-b border-slate-800/80 relative z-10">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-400 text-xs font-bold uppercase tracking-wider">
                      <Terminal className="w-3.5 h-3.5" />
                      Software Engineering Internship
                    </div>
                    
                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight group-hover:text-sky-300 transition-colors">
                      {intern.role}
                    </h4>

                    <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-sky-400">
                      <Building2 className="w-5 h-5 text-sky-400 shrink-0" />
                      <span>{intern.organization}</span>
                    </div>
                  </div>

                  {/* Badges / Metrics */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 self-start">
                    {/* Ongoing Status */}
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-extrabold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 shadow-sm shadow-emerald-500/20">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      {intern.status}
                    </span>

                    {/* Duration */}
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold text-sky-300 bg-sky-500/10 border border-sky-500/25">
                      <Clock className="w-4 h-4 text-sky-400" />
                      {intern.duration}
                    </span>

                    {/* Work Mode */}
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/25">
                      <Globe className="w-4 h-4 text-indigo-400" />
                      {intern.workMode}
                    </span>

                    {/* Year */}
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold text-purple-300 bg-purple-500/10 border border-purple-500/25">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      {intern.year}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="py-7 relative z-10">
                  <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-4xl">
                    {intern.description}
                  </p>
                </div>

                {/* Areas of Work / Skill Badges */}
                <div className="pt-6 border-t border-slate-800/80 relative z-10">
                  <h5 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    Areas of Work
                  </h5>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {intern.areasOfWork.map((areaName, idx) => {
                      const IconComponent = areaIconMap[areaName] || Terminal;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-900 transition-all duration-200 group/badge shadow-sm"
                        >
                          <div className="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-400/20 text-sky-400 flex items-center justify-center shrink-0 group-hover/badge:scale-110 group-hover/badge:bg-sky-500/25 transition-all">
                            <IconComponent className="w-4.5 h-4.5" />
                          </div>
                          <span className="text-sm font-bold text-slate-200 group-hover/badge:text-white transition-colors">
                            {areaName}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </Tilt3D>
          )}
        </div>

        {/* SECTION 2: EDUCATION */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <GraduationCap className="w-5.5 h-5.5" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Education
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Academic qualifications in reverse chronological order
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {educationData.map((edu, idx) => {
              const isBTech = edu.isPursuing;

              return (
                <Tilt3D key={edu.id || idx} maxTilt={10} scale={1.02} className="rounded-3xl shadow-xl h-full">
                  <div
                    className={`glass-panel p-7 rounded-3xl border ${
                      isBTech 
                        ? 'border-sky-500/50 shadow-[0_0_25px_rgba(56,189,248,0.12)] hover:border-sky-400' 
                        : 'border-slate-700/80 hover:border-sky-500/50'
                    } transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full group backdrop-blur-xl`}
                  >
                    {/* Ambient Glow */}
                    <div 
                      className={`absolute top-0 right-0 w-36 h-36 rounded-bl-full pointer-events-none transition-opacity duration-300 ${
                        isBTech ? 'bg-sky-500/15 group-hover:bg-sky-500/25' : 'bg-indigo-500/10 group-hover:bg-indigo-500/20'
                      }`} 
                    />

                    <div>
                      {/* Top Row: Icon & Status Badge */}
                      <div className="flex items-start justify-between gap-3 mb-6 relative z-10">
                        <div className={`w-12 h-12 rounded-2xl ${
                          isBTech 
                            ? 'bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/30' 
                            : 'bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                        } flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                          <GraduationCap className="w-6 h-6" />
                        </div>

                        {isBTech ? (
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 shadow-sm shadow-emerald-500/20">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            Currently Pursuing
                          </span>
                        ) : (
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-sky-400 bg-sky-500/15 border border-sky-500/30">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Completed
                          </span>
                        )}
                      </div>

                      {/* Degree / Certificate Title */}
                      <h4 className="text-lg sm:text-xl font-black text-white group-hover:text-sky-400 transition-colors leading-snug mb-2 relative z-10">
                        {edu.degree}
                      </h4>

                      {/* Institution Name */}
                      <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-4 relative z-10">
                        <Building2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{edu.institution}</span>
                      </div>

                      {/* Academic Year Duration */}
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-400 relative z-10">
                        <Calendar className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    {/* Footer Row: Status / Score Highlight */}
                    <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between relative z-10">
                      <span className="text-xs text-slate-400 font-medium">
                        {isBTech ? "Academic Status" : "Academic Score"}
                      </span>

                      {isBTech ? (
                        <span className="px-3 py-1.5 rounded-xl bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-extrabold tracking-wide">
                          {edu.status}
                        </span>
                      ) : (
                        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                          <Award className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-sm font-black tracking-wide">{edu.score}</span>
                        </div>
                      )}
                    </div>

                  </div>
                </Tilt3D>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
