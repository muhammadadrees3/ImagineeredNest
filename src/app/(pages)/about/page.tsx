'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Owners from '@/app/components/Owners';
import Link from 'next/link';
import { ArrowRight, Zap, Target, Eye, Code, Users, Lightbulb, Sparkles, Rocket, ChevronDown } from 'lucide-react';
import Counter from '@/app/components/Counter';
import Loading from '../loading';
import Image from 'next/image';

export default function About() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init({ duration: 800, once: true, offset: 100 });
    }
  }, []);

  return (
    <div className="min-h-screen mt-10 w-full overflow-hidden bg-background text-foreground selection:bg-blue-500/30">
      <style>{`
        .text-gradient {
          background: linear-gradient(to right, #2563eb, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .light .glass-card {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>

      <main className="relative">
        {/* --- NEW HERO SECTION: DUAL IMAGE BOX LAYOUT --- */}
        <section className="relative pt-32 pb-20 px-5">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

              {/* Left Image Box */}
              <div className="w-full lg:w-1/3 order-2 lg:order-1" data-aos="fade-right">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl group-hover:bg-blue-500/30 transition-all"></div>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
                    <Image
                      src="https://res.cloudinary.com/dqjp2xwje/image/upload/v1774336423/company-website/images/muhammad_zeeshan.jpg"
                      alt="Muhammad Zeeshan"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover scale-150 group-hover:scale-140"
                    />
                  </div>
                  {/* Founder Label */}
                  <div className="mt-6 text-center lg:text-left pl-4 border-l-2 border-blue-600">
                    <h3 className="text-xl font-black uppercase tracking-tighter">Muhammad Zeeshan</h3>
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest">Founder & CEO</p>

                  </div>
                </div>
              </div>

              {/* Center Content Box */}
              <div className="w-full lg:w-2/5 text-center order-1 lg:order-2" data-aos="zoom-in">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 mb-6">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                    Leadership Vision
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[0.9] uppercase">
                  Meet Our <br />
                  <span className="text-gradient">Founders.</span>
                </h1>

                <p className="text-lg text-muted-foreground  leading-relaxed mb-8">
                  <span className="text-gradient font-bold">Imagineerednest</span> started as a dream of two brothers to provide top tier software services remotely. Today, we serve clients worldwide and are planning our physical software house to foster collaboration and innovation. We believe in quality, transparency, and continuous learning.                </p>

                {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 uppercase tracking-widest text-xs">
                    Get in Touch <ArrowRight className="w-4 h-4" />
                  </Link>
                </div> */}
              </div>

              {/* Right Image Box */}
              <div className="w-full lg:w-1/3 order-3" data-aos="fade-left">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-purple-500/20 rounded-3xl blur-2xl group-hover:bg-purple-500/30 transition-all"></div>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
                    <Image
                      src="https://res.cloudinary.com/dqjp2xwje/image/upload/v1774336417/company-website/images/muhammad_adrees.jpg"
                      alt="Muhammad Adrees"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover transition-all duration-700 scale-200 group-hover:scale-[2.1]"
                    />
                  </div>
                  {/* Founder Label */}
                  <div className="mt-6 text-center lg:text-right pr-4 border-r-2 border-purple-600">
                    <h3 className="text-xl font-black uppercase tracking-tighter">Muhammad Adrees</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">Founder & CTO</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Decorative Background Scroll Indicator */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
            <ChevronDown className="w-8 h-8" />
          </div>
        </section>

        {/* --- STATS BAR --- */}
        <div className="py-12 border-y border-border bg-card/30 backdrop-blur-sm">
          <Counter />
        </div>

        {/* --- BENTO JOURNEY SECTION --- */}
        <section id="journey" className="py-24 px-5">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 p-12 rounded-[2.5rem] bg-slate-900 border border-border relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <h2 className="text-4xl text-white font-bold mb-8">From a Vision to a Global Nest</h2>
                <div className="space-y-6 text-white text-lg leading-relaxed">
                  <p>
                    Imagineerednest was born from a simple question: <span className="text-primary font-bold underline decoration-blue-500/30 underline-offset-4">"Why choose between beauty and performance?"</span>
                  </p>
                  <p>
                    Started by two brothers with a passion for code and design, we've transformed into a specialized software house that treats every line of code like a piece of art.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 rounded-[2.5rem] overflow-hidden border border-border shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-all duration-700"
                  alt="Tech workspace"
                />
              </div>

              <div className="lg:col-span-6 md:p-10 rounded-[2.5rem] glass-card hover:border-blue-500/50 transition-colors duration-500">
                <div className="flex items-center gap-5 mb-6">
                  <div className="p-4 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-500/20"><Zap /></div>
                  <h3 className="text-3xl font-bold">The Mission</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  To help businesses grow by providing digital tools that solve real problems and create measurable success through precision engineering.
                </p>
              </div>

              <div className="lg:col-span-6 md:p-10 rounded-[2.5rem] glass-card hover:border-purple-500/50 transition-colors duration-500">
                <div className="flex items-center gap-5 mb-6">
                  <div className="p-4 bg-purple-600 rounded-2xl text-white shadow-lg shadow-purple-500/20"><Eye /></div>
                  <h3 className="text-3xl font-bold">The Vision</h3>
                </div>
                <p className="text-muted-foreground text-lg">To become the global gold standard where every complex "imagination" finds its perfect, high performance technical "nest".</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- VALUES GRID --- */}
        <section className="py-24 px-1  md:px-5 bg-secondary/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black mb-4">Our Core Principles</h2>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
              {[
                {
                  title: 'New Ideas',
                  icon: Lightbulb,
                  color: 'text-blue-500',
                  desc: 'We use modern technology and creative thinking to build smart solutions for the future.'
                },
                {
                  title: 'Accuracy',
                  icon: Target,
                  color: 'text-purple-500',
                  desc: 'We focus on clean code, strong architecture, and well designed interfaces in every project.'
                },
                {
                  title: 'Honesty',
                  icon: Users,
                  color: 'text-pink-500',
                  desc: 'We build trust through clear communication, transparency, and ethical work.'
                },
                {
                  title: 'Speed & Efficiency',
                  icon: Code,
                  color: 'text-emerald-500',
                  desc: 'We create fast, scalable software that runs smoothly and supports business growth.'
                },
              ].map((val, i) => (
                <div key={i} className="flex flex-col items-center group text-center" data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className={`mb-8 p-6 rounded-3xl bg-background border border-border shadow-xl group-hover:-translate-y-3 transition-all duration-500 ${val.color}`}>
                    <val.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-black mb-3">{val.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FOUNDERS SECTION --- */}
        {/* <div id="founders" className="scroll-mt-20 py-10">
          <Owners />
        </div> */}


      </main>
    </div>
  );
}