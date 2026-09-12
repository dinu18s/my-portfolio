import React from 'react';
import { ExternalLink, FolderGit2, Clock, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Projects <span className="text-sky-500">Showcase</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg">
            Click on any project name below to view the source code and live project in a new tab.
          </p>
        </div>

        {/* Dynamic Project List displaying ONLY Project Name */}
        {projectsData && projectsData.length > 0 ? (
          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4">
            {projectsData.map((project) => (
              <a
                key={project.id || project.name}
                href={project.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:border-sky-500/60 hover:bg-sky-50/50 dark:hover:bg-slate-800 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <div>
                    {/* ONLY Project Name is displayed */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                      {project.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400 group-hover:text-sky-500 transition-colors shrink-0">
                  <span className="hidden sm:inline text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/80 px-3 py-1 rounded-full border border-sky-200 dark:border-sky-800">
                    Open Project ↗
                  </span>
                  <ExternalLink className="w-5 h-5" />
                </div>
              </a>
            ))}
          </div>
        ) : (
          /* Empty State when no projects uploaded */
          <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-10 text-center shadow-sm space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center mx-auto border border-sky-500/20">
              <FolderGit2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              No Projects Uploaded Yet
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
              When projects are added, only the project names will be listed here, which dynamically redirect to the live project/repository in a new tab upon clicking.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
