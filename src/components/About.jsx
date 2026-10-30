import React from 'react';
import { User, Code2, Database, Globe, Brain, CheckCircle2, Cpu, Terminal, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import Tilt3D from './Tilt3D';

export default function About() {
  const highlights = [
    { title: "Python Development", desc: "Core Python programming, data manipulation, algorithm design, and software fundamentals." },
    { title: "SQL Database Management", desc: "Relational database querying, structured data management, and schema design." },
    { title: "Web Development (100%)", desc: "Full-stack web fundamentals, responsive CSS layouts, and modern web application development." },
    { title: "Logical Reasoning & Aptitude", desc: "Analytical problem solving, algorithm design, and mathematical reasoning." },
  ];

  const stats = [
    { label: "Programming Language", value: "Python", icon: Code2, accent: "from-sky-500 to-indigo-600" },
    { label: "Database", value: "SQL", icon: Database, accent: "from-indigo-500 to-purple-600" },
    { label: "Web Development", value: "100% Mastered", icon: Globe, accent: "from-emerald-500 to-cyan-500" },
    { label: "Core Competency", value: "Aptitude & Logic", icon: Brain, accent: "from-purple-500 to-pink-600" },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950/60 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Holographic Profile
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
          <p className="mt-4 text-slate-300 text-lg">
            Software Developer specializing in Python, SQL databases, Web Development, and computational problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: 3D Holographic Bio Card */}
          <div className="lg:col-span-7 space-y-6">
            <Tilt3D maxTilt={8} scale={1.01} className="rounded-3xl shadow-2xl">
              <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-700/80 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                {/* Ambient Cyber Light Cone */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-sky-500/15 via-purple-600/10 to-transparent rounded-bl-full pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* HUD Header */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-sky-500/15 border border-sky-400/30 text-sky-400 flex items-center justify-center shadow-lg shadow-sky-500/20">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">
                        Software & Python Developer
                      </h3>
                      <p className="text-xs text-sky-400 font-semibold tracking-wide flex items-center gap-1.5 mt-0.5">
                        <Cpu className="w-3.5 h-3.5" />
                        Verified Engineering Profile
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Available
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed text-base">
                  {personalInfo.bio}
                </p>

                <p className="text-slate-300 leading-relaxed text-base mt-4">
                  I focus on writing structured Python scripts, executing optimized SQL queries, building responsive web applications, and applying strong analytical problem-solving skills to complex computational challenges.
                </p>

                {/* Technical Highlights Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 transition-all hover:bg-slate-900 group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </Tilt3D>
          </div>

          {/* Right Column: Interactive 3D Terminal & Stats Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* 3D Cyber Terminal HUD */}
            <Tilt3D maxTilt={10} scale={1.02} className="rounded-2xl shadow-xl">
              <div className="glass-panel p-5 rounded-2xl border border-slate-700/80 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-[11px] text-slate-400 ml-2">dinesh_profile.py</span>
                  </div>
                  <Terminal className="w-4 h-4 text-sky-400" />
                </div>
                <div className="space-y-1.5 leading-relaxed text-slate-300">
                  <p><span className="text-purple-400">developer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-sky-400">"name"</span>: <span className="text-amber-300">"Matta Dinesh"</span>,</p>
                  <p className="pl-4"><span className="text-sky-400">"role"</span>: <span className="text-amber-300">"Software / Python Developer"</span>,</p>
                  <p className="pl-4"><span className="text-sky-400">"core_stack"</span>: [<span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"SQL"</span>, <span className="text-emerald-400">"Web Dev 100%"</span>],</p>
                  <p className="pl-4"><span className="text-sky-400">"status"</span>: <span className="text-emerald-400">"Ready for Opportunities"</span></p>
                  <p>&#125;</p>
                </div>
              </div>
            </Tilt3D>

            {/* 3D Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <Tilt3D key={idx} maxTilt={12} scale={1.03} className="rounded-2xl shadow-md">
                    <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-4 hover:border-sky-500/50 transition-colors group">
                      <div className={`w-13 h-13 rounded-2xl bg-gradient-to-tr ${stat.accent} text-white flex items-center justify-center shrink-0 shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          {stat.label}
                        </p>
                        <p className="text-base font-extrabold text-white mt-0.5 group-hover:text-sky-400 transition-colors">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  </Tilt3D>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
