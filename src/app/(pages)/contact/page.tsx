'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, Send, CheckCircle, Clock } from 'lucide-react';
import Hero from '@/app/components/Hero';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface TouchedState {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [touched, setTouched] = useState<TouchedState>({ name: false, email: false, subject: false, message: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = {
    name: form.name.trim().length >= 2,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    subject: true,
    message: form.message.trim().length >= 10,
  };

  const isValid = validate.name && validate.email && validate.message;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBlur = (field: keyof TouchedState) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    if (!isValid) return;
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1800));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ name: '', email: '', subject: '', message: '' });
    setTouched({ name: false, email: false, subject: false, message: false });
    setSubmitted(false);
  };

  const contactDetails = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coming Soon to Your City',
      color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 348 0550152',
      color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@imagineerednest.com',
      color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    },
  ];

  const inputBase =
    'w-full bg-background border rounded-xl px-4 pt-6 pb-2 text-sm text-foreground outline-none transition-all duration-200 placeholder-transparent focus:ring-2 peer resize-none font-[inherit]';

  const fieldState = (key: keyof typeof validate) => {
    if (!touched[key]) return 'border-border focus:border-primary focus:ring-primary/20';
    if (validate[key]) return 'border-emerald-400 focus:border-emerald-500 focus:ring-emerald-400/20';
    return 'border-rose-400 focus:border-rose-400 focus:ring-rose-400/20';
  };

  const labelBase =
    'absolute left-4 text-muted pointer-events-none transition-all duration-200 ' +
    'text-sm top-4 peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-primary ' +
    'peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-semibold';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-20">

        {/* ── Hero ── */}
        {/* <section className="relative py-28 px-5 overflow-hidden text-center">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Mail className="w-3.5 h-3.5" />
              Get in Touch
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-6 bg-linear-to-r from-blue-600 via-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-200 bg-clip-text text-transparent">
              Let's Build<br />Something Great
            </h1>

            <p className="text-lg text-muted max-w-xl mx-auto leading-relaxed">
              Have a project in mind or just want to say hello? We'd love to hear from you. Drop us a message and we'll get back to you within 24 hours.
            </p>
          </div>
        </section> */}
        <Hero title1="Let's Build" title2='Something Great' subtitle="Have a project in mind or just want to say hello? We'd love to hear from you. Drop us a message and we'll get back to you within 24 hours." 
        image='https://res.cloudinary.com/dqjp2xwje/image/upload/v1774335819/company-website/ipfhbpibns3wtmnmlll5.png' 
        imageHeight={400} imageWidth={700} />
        {/* ── Main Grid ── */}
        <section id="contact-form" className="py-16 px-5 pb-24">
          <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* ── Form Column ── */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">Send a Message</h2>
                <p className="text-muted text-sm">We typically respond within one business day.</p>
              </div>

              {submitted ? (
                <div className="text-center p-12 bg-card rounded-2xl border border-emerald-200 dark:border-emerald-800/40 shadow-lg">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent!</h3>
                  <p className="text-muted mb-8 text-sm leading-relaxed max-w-sm mx-auto">
                    Thanks for reaching out. Our team will review your message and get back to you shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 border border-border rounded-xl text-sm font-semibold text-foreground hover:bg-card transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className='grid grid-cols-2  w-full gap-3'>
                  {/* Name */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur('name')}
                      className={`${inputBase} ${fieldState('name')}`}
                    />
                    <label htmlFor="name" className={labelBase}>Your Name</label>
                    {touched.name && !validate.name && (
                      <p className="mt-1.5 ml-1 text-xs text-rose-500">Please enter your full name</p>
                    )}
                    {touched.name && validate.name && (
                      <p className="mt-1.5 ml-1 text-xs text-emerald-500">Looks good!</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('email')}
                      className={`${inputBase} ${fieldState('email')}`}
                    />
                    <label htmlFor="email" className={labelBase}>Your Email</label>
                    {touched.email && !validate.email && (
                      <p className="mt-1.5 ml-1 text-xs text-rose-500">Please enter a valid email address</p>
                    )}
                    {touched.email && validate.email && (
                      <p className="mt-1.5 ml-1 text-xs text-emerald-500">Valid email ✓</p>
                    )}
                  </div>

                  </div>
                  {/* Subject */}
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={`${inputBase} border-border focus:border-primary focus:ring-2 focus:ring-primary/20`}
                    />
                    <label htmlFor="subject" className={labelBase}>Subject (optional)</label>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      placeholder="Your Message"
                      value={form.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur('message')}
                      maxLength={600}
                      className={`${inputBase} ${fieldState('message')}`}
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 top-4 text-sm text-muted pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-semibold"
                    >
                      Your Message
                    </label>
                    <div className="flex justify-between mt-1.5 px-1">
                      {touched.message && !validate.message ? (
                        <span className="text-xs text-rose-500">Please enter at least 10 characters</span>
                      ) : <span />}
                      <span className={`text-xs ml-auto ${form.message.length > 500 ? 'text-amber-500' : 'text-muted'}`}>
                        {form.message.length}/600
                      </span>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>

            {/* ── Info Column ── */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">Find Us Here</h2>
                <p className="text-muted text-sm">Or stop by whenever you're in the neighborhood.</p>
              </div>

              {/* Map */}
              <div className="relative rounded-2xl overflow-hidden mb-6 border border-border shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343003!2d-73.98510768458417!3d40.75889797932616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  loading="lazy"
                  title="Office Location"
                  className="w-full h-[280px] border-0 block"
                />
                {/* Overlay badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-card border border-border shadow-md px-3 py-1.5 rounded-lg text-xs font-semibold text-foreground">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" />
                  Times Square, NY
                </div>
              </div>

         
           


            </div>
          </div>
        </section>

      </main>
    </div>
  );
}