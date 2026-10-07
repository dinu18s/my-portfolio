import React from 'react';
import { ExternalLink, Sparkles, Rocket } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import Tilt3D from './Tilt3D';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Projects <span className="text-gradient-cyan">Showcase</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg">
            Click on any project below to launch the live application in a new tab.
          </p>
        </div>

        {/* 3D Cyber Project Cards */}
        <div className="max-w-xl mx-auto space-y-6">
          {projectsData.map((project) => (
            <Tilt3D key={project.id || project.name} maxTilt={14} scale={1.04} className="rounded-3xl shadow-lg">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-sheen group flex items-center justify-between p-6 rounded-3xl bg-white/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-md hover:shadow-2xl hover:border-sky-500/70 transition-all duration-300 backdrop-blur-md relative overflow-hidden"
              >
                {/* Glow Backdrop */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-bl-full pointer-events-none group-hover:bg-sky-500/20 transition-colors" />

                <div className="flex items-center gap-4 z-10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors flex items-center gap-2">
                      {project.name}
                      <Sparkles className="w-4 h-4 text-sky-400 opacity-80" />
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                      Click to launch live app
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 z-10 shrink-0">
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/80 px-3.5 py-1.5 rounded-full border border-sky-300 dark:border-sky-800 shadow-sm group-hover:bg-sky-500 group-hover:text-white transition-all">
                    Launch App ↗
                  </span>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-sky-500 transition-colors" />
                </div>
              </a>
            </Tilt3D>
          ))}
        </div>

      </div>
    </section>
  );
}
