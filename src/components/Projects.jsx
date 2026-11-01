import React from 'react';
import { ExternalLink, Sparkles, Rocket, Layers } from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/portfolioData';
import Tilt3D from './Tilt3D';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950/70 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            Interactive 3D Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Projects <span className="text-gradient-cyan">Showcase</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
          <p className="mt-4 text-slate-300 text-lg">
            Explore live deployed applications featuring responsive UI, real-time feedback, and interactive architectures.
          </p>
        </div>

        {/* 3D Cyber Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectsData.map((project, idx) => (
            <Tilt3D key={project.id || project.name} maxTilt={12} scale={1.03} className="rounded-3xl shadow-2xl h-full">
              <div className="glass-panel p-7 rounded-3xl border border-slate-700/80 shadow-2xl hover:border-sky-500/60 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full group">
                
                {/* Ambient Corner Glow */}
                <div className={`absolute top-0 right-0 w-44 h-44 rounded-bl-full pointer-events-none transition-opacity duration-500 ${
                  idx % 3 === 0
                    ? 'bg-sky-500/15 group-hover:bg-sky-500/25'
                    : idx % 3 === 1
                    ? 'bg-purple-600/15 group-hover:bg-purple-600/25'
                    : 'bg-emerald-500/15 group-hover:bg-emerald-500/25'
                }`} />

                <div>
                  {/* Top Header with Icon & Live Badge */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="flex items-center gap-3.5">
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform">
                        <Rocket className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white group-hover:text-sky-400 transition-colors flex items-center gap-2">
                          {project.name}
                          <Sparkles className="w-4 h-4 text-sky-400 opacity-80" />
                        </h3>
                        <p className="text-xs text-slate-400 font-medium mt-0.5">
                          {project.tagline || 'Interactive Web Application'}
                        </p>
                      </div>
                    </div>

                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>

                  {/* Project Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-900/90 text-sky-300 border border-slate-700/80 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-3 pt-5 border-t border-slate-800 relative z-10">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-sheen flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-md shadow-sky-500/25 hover:scale-[1.03] active:scale-95 transition-all"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="p-3 rounded-2xl bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/50 shadow-sm hover:scale-110 active:scale-95 transition-all"
                      title="View GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>

              </div>
            </Tilt3D>
          ))}
        </div>

      </div>
    </section>
  );
}
