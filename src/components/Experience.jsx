import React from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Experience & <span className="text-sky-500">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg">
            My professional career path, software development experience, and academic background.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Bar */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-slate-200 dark:bg-slate-800" />
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isEducation = item.role.includes("Bachelor") || item.role.includes("Education");
              const Icon = isEducation ? GraduationCap : Briefcase;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Badge Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border-2 border-sky-500 text-sky-500 flex items-center justify-center shadow-lg shadow-sky-500/10 z-10">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content Box */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="bg-white dark:bg-slate-800/90 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md hover:border-sky-500/40 transition-all">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-sky-500" />
                          {item.location}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>

                      <h4 className="text-sm font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                        {item.company}
                      </h4>

                      <p className="text-slate-600 dark:text-slate-300 text-sm mt-3 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Accomplishment Bullet Points */}
                      <ul className="mt-4 space-y-2 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                        {item.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
