import React, { useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2, Award, Sparkles, BookOpen } from 'lucide-react';
import { experienceData, educationData, certificationsData } from '../data/portfolioData';
import Tilt3D from './Tilt3D';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-24 bg-slate-950/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Milestones & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Experience, Education & <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
          <p className="mt-4 text-slate-300 text-lg">
            My academic journey at IARE, technical software experience, and professional certifications.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <button
            onClick={() => setActiveTab('experience')}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
              activeTab === 'experience'
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 scale-105'
                : 'glass-panel text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            Education & Career Path
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
              activeTab === 'certifications'
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 scale-105'
                : 'glass-panel text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800'
            }`}
          >
            <Award className="w-4 h-4" />
            Certifications (4)
          </button>
        </div>

        {activeTab === 'experience' ? (
          /* 3D Timeline Container */
          <div className="max-w-4xl mx-auto relative">
            
            {/* Glowing Vertical Timeline Conduit */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-purple-600 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-purple-600 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />

            <div className="space-y-12">
              {/* Combine Education & Experience chronologically */}
              {[
                {
                  id: 'edu-1',
                  role: educationData[0].degree,
                  company: educationData[0].institution,
                  period: educationData[0].period,
                  location: educationData[0].location,
                  description: educationData[0].description,
                  highlights: educationData[0].highlights,
                  isEducation: true
                },
                ...experienceData
              ].map((item, idx) => {
                const isEven = idx % 2 === 0;
                const Icon = item.isEducation || item.role.includes("B.Tech") ? GraduationCap : Briefcase;

                return (
                  <div
                    key={item.id}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    
                    {/* Glowing Timeline Node */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-slate-900 border-2 border-sky-400 text-sky-400 flex items-center justify-center shadow-lg shadow-sky-500/30 z-20">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* 3D Glassmorphism Card */}
                    <div className="ml-16 md:ml-0 md:w-1/2 md:px-8 w-full">
                      <Tilt3D maxTilt={10} scale={1.02} className="rounded-3xl shadow-xl">
                        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-xl hover:border-sky-500/50 transition-all group backdrop-blur-xl">
                          
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-sky-500/15 text-sky-400 border border-sky-500/30">
                              <Calendar className="w-3.5 h-3.5" />
                              {item.period}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                              <MapPin className="w-3.5 h-3.5 text-sky-400" />
                              {item.location}
                            </span>
                          </div>

                          <h3 className="text-xl font-black text-white group-hover:text-sky-400 transition-colors">
                            {item.role}
                          </h3>

                          <h4 className="text-sm font-bold text-sky-400 mt-0.5">
                            {item.company}
                          </h4>

                          <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                            {item.description}
                          </p>

                          {/* Accomplishment Bullet Points */}
                          {item.highlights && (
                            <ul className="mt-4 space-y-2 pt-4 border-t border-slate-800">
                              {item.highlights.map((h, hIdx) => (
                                <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                        </div>
                      </Tilt3D>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        ) : (
          /* 3D Certifications Showcase Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {certificationsData.map((cert) => (
              <Tilt3D key={cert.id} maxTilt={12} scale={1.03} className="rounded-3xl shadow-xl h-full">
                <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-xl hover:border-sky-500/50 transition-all flex flex-col justify-between h-full group backdrop-blur-xl">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-sky-500/25 group-hover:scale-110 transition-transform">
                        <Award className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30">
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-white group-hover:text-sky-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-bold text-sky-400 mt-0.5">
                      {cert.issuer} • <span className="text-slate-400 font-normal">{cert.category}</span>
                    </p>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-3">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
                      <BookOpen className="w-3.5 h-3.5" /> Verified Credential
                    </span>
                    <span className="text-emerald-400 font-bold">100% Validated</span>
                  </div>
                </div>
              </Tilt3D>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
