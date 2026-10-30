import React, { useState, useEffect, useRef } from 'react';
import { Code2, Server, Wrench, Layout, Database, GitBranch, HardDrive, Terminal, Globe, Brain, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import Tilt3D from './Tilt3D';

const iconMap = {
  Code2,
  Layout,
  Database,
  Server,
  GitBranch,
  HardDrive,
  Terminal,
  Globe,
  Brain
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof IntersectionObserver !== 'undefined' && sectionRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(sectionRef.current);
      const timer = setTimeout(() => setInView(true), 600);
      return () => {
        observer.disconnect();
        clearTimeout(timer);
      };
    } else {
      setInView(true);
    }
  }, []);

  const categories = [
    { key: 'all', label: 'All Skills' },
    { key: 'languages', label: 'Languages' },
    { key: 'frameworks', label: 'Frameworks & Web' },
    { key: 'tools', label: 'Tools & Databases' },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'languages') return [{ category: 'Languages', items: skillsData.languages, icon: Code2 }];
    if (activeTab === 'frameworks') return [{ category: 'Frameworks & Web', items: skillsData.frameworks, icon: Server }];
    if (activeTab === 'tools') return [{ category: 'Tools & Databases', items: skillsData.tools, icon: Wrench }];

    return [
      { category: 'Languages', items: skillsData.languages, icon: Code2 },
      { category: 'Frameworks & Web', items: skillsData.frameworks, icon: Server },
      { category: 'Tools & Databases', items: skillsData.tools, icon: Wrench },
    ];
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills & <span className="text-sky-500">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg">
            My technical competencies grouped into programming languages, web fundamentals, and development tools.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                activeTab === cat.key
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 scale-105'
                  : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 backdrop-blur-md'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Categories Grid */}
        <div className="space-y-12">
          {getFilteredSkills().map((group, groupIdx) => {
            const GroupIcon = group.icon;
            return (
              <div key={groupIdx} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center">
                    <GroupIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {group.items.map((skill, idx) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <Tilt3D key={idx} maxTilt={10} scale={1.02} className="rounded-2xl shadow-sm">
                        <div className="bg-white/90 dark:bg-slate-800/90 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md hover:border-sky-500/40 transition-all group backdrop-blur-md">
                          <div className="flex items-center justify-between mb-3 gap-2">
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 text-sky-500 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-sky-500 group-hover:to-indigo-600 group-hover:text-white transition-all">
                                <IconComponent className="w-5 h-5" />
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                                    {skill.name}
                                  </h4>
                                  <span
                                    className={`text-xs font-bold px-2 py-0.5 rounded-full border transition-colors ${
                                      skill.level === 100
                                        ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-800'
                                        : 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/80 border-sky-200 dark:border-sky-800'
                                    }`}
                                  >
                                    {skill.level}%
                                  </span>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                  {skill.description}
                                </p>
                              </div>
                            </div>
                            {skill.level === 100 && (
                              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1 shrink-0">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                <span className="hidden sm:inline">Completed</span>
                              </span>
                            )}
                          </div>

                          {/* Progress Bar */}
                          <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-full h-2.5 overflow-hidden mt-4">
                            <div
                              key={`${activeTab}-${skill.name}`}
                              role="progressbar"
                              aria-valuenow={skill.level}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              aria-label={`${skill.name} proficiency: ${skill.level}%`}
                              className={`h-2.5 rounded-full ${inView ? 'animate-skill-progress' : ''} transition-all duration-1000 ease-out ${
                                skill.level === 100
                                  ? 'bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500 shadow-sm shadow-emerald-500/20'
                                  : 'bg-gradient-to-r from-sky-500 to-indigo-600'
                              }`}
                              style={{
                                width: `${skill.level}%`,
                                '--target-width': `${skill.level}%`
                              }}
                            />
                          </div>
                        </div>
                      </Tilt3D>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
