import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
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
            Click on the project below to view source code and software repositories on GitHub.
          </p>
        </div>

        {/* Project Card Displaying ONLY "Dinesh's Projects" */}
        <div className="max-w-2xl mx-auto">
          {projectsData.map((project) => (
            <a
              key={project.id || project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:border-sky-500/60 hover:bg-sky-50/50 dark:hover:bg-slate-800 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    View all software projects on GitHub repository
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-400 group-hover:text-sky-500 transition-colors shrink-0">
                <span className="hidden sm:inline text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/80 px-3 py-1 rounded-full border border-sky-200 dark:border-sky-800">
                  GitHub Profile ↗
                </span>
                <ExternalLink className="w-5 h-5" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
