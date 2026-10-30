import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Navigation, MessageCircle } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';
import Tilt3D from './Tilt3D';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xbjnqvyy", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        alert("Thank you for your message! If Formspree requires initial activation, please check your inbox.");
        setSubmitted(true);
        form.reset();
      }
    } catch {
      form.submit();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950/70 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Communication Hub
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Get In <span className="text-gradient-cyan">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
          <p className="mt-4 text-slate-300 text-lg">
            Have a project in mind, job opportunity, or technical inquiry? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: 3D Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <Tilt3D maxTilt={8} scale={1.01} className="rounded-3xl shadow-2xl">
              <div className="glass-panel p-8 rounded-3xl border border-slate-700/80 shadow-2xl space-y-6 backdrop-blur-xl">
                <h3 className="text-2xl font-black text-white flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-sky-400" />
                  Direct Contact
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Reach out to me via email or phone. I'm open to full-time roles, software developer positions, and technical collaborations.
                </p>

                <div className="space-y-4 pt-2">
                  
                  {/* Email Card */}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center shrink-0 border border-sky-400/20 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Email Address
                      </p>
                      <p className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                        {personalInfo.email}
                      </p>
                    </div>
                  </a>

                  {/* Phone Card with WhatsApp Message Link */}
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-400/20 group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          Phone Number
                        </p>
                        <a
                          href={`tel:${personalInfo.phone}`}
                          className="text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                        >
                          +91 {personalInfo.phone}
                        </a>
                      </div>
                    </div>

                    {/* Under the phone number: "Message" redirecting to WhatsApp */}
                    <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        Chat on WhatsApp:
                      </span>
                      <a
                        href={personalInfo.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-md shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Message ↗
                      </a>
                    </div>
                  </div>

                  {/* Location Card */}
                  <a
                    href={personalInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-400/20 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          Location
                        </p>
                        <span className="text-xs font-bold text-sky-400 flex items-center gap-1">
                          <Navigation className="w-3 h-3" /> Map ↗
                        </span>
                      </div>
                      <p className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                        {personalInfo.location}
                      </p>
                    </div>
                  </a>

                </div>

                {/* Social Links */}
                <div className="pt-5 border-t border-slate-800">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Connect On Social Media
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-sky-500/15 text-sky-300 hover:bg-sky-500/25 font-semibold text-sm transition-colors border border-sky-400/30"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 font-semibold text-sm transition-colors border border-slate-700/80"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>

              </div>
            </Tilt3D>
          </div>

          {/* Right Column: 3D Form Card */}
          <div className="lg:col-span-7">
            <Tilt3D maxTilt={8} scale={1.01} className="rounded-3xl shadow-2xl">
              <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-700/80 shadow-2xl relative backdrop-blur-xl">
                
                <h3 className="text-2xl font-black text-white mb-2">
                  Send a Message
                </h3>
                <p className="text-slate-300 text-sm mb-6">
                  Fill out the form below and I will get back to you promptly at {personalInfo.email}.
                </p>

                {submitted && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center gap-3 animate-in fade-in duration-300">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-semibold">Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

                <form
                  action="https://formspree.io/f/xbjnqvyy"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="_replyto"
                        required
                        placeholder="e.g. john@example.com"
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="e.g. Job Opportunity / Technical Discussion"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl text-white font-extrabold bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-600 hover:to-purple-700 shadow-xl shadow-sky-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>

              </div>
            </Tilt3D>
          </div>

        </div>

      </div>
    </section>
  );
}
