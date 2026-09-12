import React from 'react';
import { User, Code2, Database, Globe, Brain, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    { title: "Python Development", desc: "Core Python programming, data manipulation, and software fundamentals." },
    { title: "SQL Database Management", desc: "Relational database querying, structured data management, and schema design." },
    { title: "Web Fundamentals", desc: "Solid understanding of HTML, CSS, DOM layout, and web standards." },
    { title: "Logical Reasoning & Aptitude", desc: "Analytical problem solving, algorithm design, and mathematical reasoning." },
  ];

  const stats = [
    { label: "Programming Language", value: "Python", icon: Code2 },
    { label: "Database", value: "SQL", icon: Database },
    { label: "Web Fundamentals", value: "HTML & CSS", icon: Globe },
    { label: "Core Competency", value: "Aptitude & Logic", icon: Brain },
  ];

  return (
    <section id="about" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About <span className="text-sky-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg">
            Software Developer specializing in Python, SQL databases, Web Fundamentals, and logical reasoning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-800/80 p-8 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-bl-full pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <User className="w-6 h-6 text-sky-500" />
                Software & Python Developer
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {personalInfo.bio}
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                I focus on writing structured Python scripts, executing SQL queries, building web pages using standard HTML and CSS, and applying strong analytical skills to solve software engineering challenges.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/60">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Core Tech Highlights Grid (percentages removed) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex items-center gap-4 hover:border-sky-500/50 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform border border-sky-200 dark:border-sky-800">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                      {stat.value}
                    </p>
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
