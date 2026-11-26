import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Navigation, 
  MessageCircle, 
  GraduationCap, 
  AlertCircle, 
  RefreshCw, 
  Loader2 
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, WhatsApp } from './Icons';
import { personalInfo } from '../data/portfolioData';
import Tilt3D from './Tilt3D';

// EmailJS Environment Configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_6i7sm3t';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'zrOszJycTGmNSPJAy';
const EMAILJS_OWNER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID || 'template_pke3xg8';
const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || '';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Form field validation logic
  const validateField = (name, value) => {
    const trimmed = (value || '').trim();
    switch (name) {
      case 'name':
        if (!trimmed) return 'Please enter your name.';
        if (trimmed.length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!trimmed) return 'Please enter your email address.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
          return 'Please enter a valid email address (e.g. name@example.com).';
        }
        return '';
      case 'subject':
        if (!trimmed) return 'Please enter a subject.';
        if (trimmed.length < 2) return 'Subject must be at least 2 characters.';
        return '';
      case 'message':
        if (!trimmed) return 'Please enter your message.';
        if (trimmed.length < 5) return 'Message must be at least 5 characters.';
        return '';
      default:
        return '';
    }
  };

  const validateAll = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    // Mark all as touched
    setTouched({ name: true, email: true, subject: true, message: true });

    if (!validateAll()) {
      return;
    }

    if (status === 'sending') return;

    setStatus('sending');
    setErrorMessage('');

    // Check if EmailJS credentials are configured
    const isConfigured = Boolean(
      EMAILJS_SERVICE_ID &&
      EMAILJS_PUBLIC_KEY &&
      EMAILJS_OWNER_TEMPLATE_ID &&
      !EMAILJS_SERVICE_ID.includes('your_') &&
      !EMAILJS_PUBLIC_KEY.includes('your_')
    );

    const submissionTime = new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata'
    });

    // 1. Parameters for Portfolio Owner (mattadinesh018@gmail.com)
    const ownerParams = {
      to_name: personalInfo.name,
      to_email: personalInfo.email,
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      reply_to: formData.email.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      submission_date: submissionTime,
      date_time: submissionTime
    };

    // 2. Parameters for Visitor Confirmation Auto-Reply
    const visitorParams = {
      to_name: formData.name.trim(),
      to_email: formData.email.trim(),
      from_name: personalInfo.name,
      from_email: personalInfo.email,
      subject: `Confirmation: ${formData.subject.trim()}`,
      original_subject: formData.subject.trim(),
      original_message: formData.message.trim(),
      message: formData.message.trim(),
      submission_date: submissionTime,
      date_time: submissionTime
    };

    try {
      if (!isConfigured) {
        // Helpful diagnostic message if user hasn't added dashboard credentials yet
        throw new Error(
          "EmailJS credentials not detected. Please add your VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_PUBLIC_KEY, and VITE_EMAILJS_OWNER_TEMPLATE_ID to .env or GitHub Secrets."
        );
      }

      // Send Email 1 to Owner (Primary requirement A)
      const sendOwnerPromise = emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_OWNER_TEMPLATE_ID,
        ownerParams,
        EMAILJS_PUBLIC_KEY
      );

      // Send Email 2 to Visitor (Automatic Confirmation requirement B)
      const sendVisitorPromise = EMAILJS_AUTOREPLY_TEMPLATE_ID && !EMAILJS_AUTOREPLY_TEMPLATE_ID.includes('your_')
        ? emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_AUTOREPLY_TEMPLATE_ID,
            visitorParams,
            EMAILJS_PUBLIC_KEY
          )
        : Promise.resolve();

      await Promise.all([sendOwnerPromise, sendVisitorPromise]);

      setStatus('success');
      // Clear form fields only after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
      setTouched({});
    } catch (err) {
      console.error('EmailJS transmission error:', err);
      setStatus('error');
      setErrorMessage(
        err?.text || 
        err?.message || 
        `Transmission error. Please try again or reach out directly at ${personalInfo.email}.`
      );
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
                <div>
                  <h3 className="text-2xl font-black text-white flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-sky-400" />
                    Direct Contact
                  </h3>
                  
                  {/* Role Badge in Contact Section */}
                  <div className="mt-3.5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold">
                    <GraduationCap className="w-4 h-4 text-sky-400" />
                    <span>Role: Student at NIAT</span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mt-3">
                    Student at NIAT. Reach out to me via email or phone for internships, software developer opportunities, and technical collaborations.
                  </p>
                </div>

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

                  {/* Phone Card */}
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-400/20 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          Phone Number
                        </p>
                        <span className="text-xs font-bold text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
                          Call ↗
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                        +91 {personalInfo.phone}
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp Card directly under Phone Number */}
                  <a
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-400/20 group-hover:scale-110 transition-transform">
                      <WhatsApp className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          WhatsApp
                        </p>
                        <span className="text-xs font-bold text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
                          Chat ↗
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                        +91 {personalInfo.phone}
                      </p>
                    </div>
                  </a>

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

                {/* Success Notification Alert */}
                {status === 'success' && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-start gap-3 animate-in fade-in duration-300 shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-emerald-200">
                        Message sent successfully! Check your email for confirmation.
                      </p>
                      <p className="text-xs text-emerald-300/80 mt-1">
                        Thank you for reaching out! A confirmation copy has been sent to your email, and I will respond to you soon.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Notification Alert with Retry Option */}
                {status === 'error' && (
                  <div className="mb-6 p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in duration-300 shadow-lg shadow-rose-500/10">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
                      <div>
                        <p className="text-sm font-bold text-rose-200">
                          Transmission Error
                        </p>
                        <p className="text-xs text-rose-300/80 mt-0.5">
                          {errorMessage}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={status === 'sending'}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-xs font-bold text-white transition-all shrink-0 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Retry
                    </button>
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border ${
                          errors.name && touched.name 
                            ? 'border-rose-500/80 focus:ring-rose-500' 
                            : 'border-slate-800 focus:ring-sky-500'
                        } text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all text-sm`}
                      />
                      {errors.name && touched.name && (
                        <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. john@example.com"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border ${
                          errors.email && touched.email 
                            ? 'border-rose-500/80 focus:ring-rose-500' 
                            : 'border-slate-800 focus:ring-sky-500'
                        } text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all text-sm`}
                      />
                      {errors.email && touched.email && (
                        <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Job Opportunity / Technical Discussion"
                      className={`w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border ${
                        errors.subject && touched.subject 
                          ? 'border-rose-500/80 focus:ring-rose-500' 
                          : 'border-slate-800 focus:ring-sky-500'
                      } text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all text-sm`}
                    />
                    {errors.subject && touched.subject && (
                      <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Write your message here..."
                      className={`w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border ${
                        errors.message && touched.message 
                          ? 'border-rose-500/80 focus:ring-rose-500' 
                          : 'border-slate-800 focus:ring-sky-500'
                      } text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all text-sm resize-none`}
                    />
                    {errors.message && touched.message && (
                      <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Send Message Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-white font-extrabold bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-600 hover:to-purple-700 shadow-xl shadow-sky-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
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
