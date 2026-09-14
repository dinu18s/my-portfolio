import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
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
            Click on the project below to open the application in a new tab.
          </p>
        </div>

        {/* Project Displaying ONLY "ChatZPT" */}
        <div className="max-w-xl mx-auto">
          {projectsData.map((project) => (
            <a
              key={project.id || project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:border-sky-500/60 hover:bg-sky-50/50 dark:hover:bg-slate-800 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-sky-500 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                  {project.name}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-slate-400 group-hover:text-sky-500 transition-colors shrink-0">
                <ExternalLink className="w-5 h-5" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
