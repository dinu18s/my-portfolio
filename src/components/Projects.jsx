import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import Tilt3D from './Tilt3D';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Projects <span className="text-sky-500">Showcase</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg">
            Click on any project below to open the application in a new tab.
          </p>
        </div>

        {/* 3D Project Cards */}
        <div className="max-w-xl mx-auto space-y-5">
          {projectsData.map((project) => (
            <Tilt3D key={project.id || project.name} maxTilt={12} scale={1.03} className="rounded-2xl shadow-md">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-2xl hover:border-sky-500/60 hover:bg-sky-50/50 dark:hover:bg-slate-800 transition-all duration-300 backdrop-blur-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5 text-white animate-pulse" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    {project.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-slate-400 group-hover:text-sky-500 transition-colors shrink-0">
                  <span className="hidden sm:inline text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/80 px-3 py-1 rounded-full border border-sky-200 dark:border-sky-800">
                    Launch App ↗
                  </span>
                  <ExternalLink className="w-5 h-5" />
                </div>
              </a>
            </Tilt3D>
          ))}
        </div>

      </div>
    </section>
  );
}
