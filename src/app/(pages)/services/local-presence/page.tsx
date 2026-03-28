'use client';

import { MapPin, Building2, Star, Zap, Search, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LocalPresencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground text-justify">
      <main className="pt-20">
        <section className="py-24 px-5">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 max-w-7xl">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest text-justify">
                <MapPin className="w-3.5 h-3.5" />
                Local Authority
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-foreground text-justify">
                Be Found <span className="text-primary italic">Locally</span>
              </h1>
              <p className="text-lg text-muted leading-relaxed max-w-2xl text-justify">
                We make sure your business is the first one people see when they search in your area. 
                Our local visibility strategies focus on map rankings, review management, 
                and hyper-local content that drives foot traffic.
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Optimize My Presence
              </Link>
            </div>
            <div className="flex-1 w-full max-w-2xl">
                <Image
                  src="https://placehold.co/800x600/2563eb/white?text=Local+Business+Visibility" 
                  alt="Local Presence" 
                  width={400}
                  height={500}
                  className="w-full h-full object-cover" 
                />
            </div>
          </div>
        </section>

        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-5 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: Search, title: 'Local Search', desc: 'Ranking #1 for "near me" inquiries.' },
              { icon: Star, title: 'Reviews', desc: 'Building trust with authentic customer feedback.' },
              { icon: Building2, title: 'Directory Sync', desc: 'Ensuring consistent information across the web.' }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-card border border-border rounded-2xl">
                 <feature.icon className="w-10 h-10 text-primary mb-6" />
                 <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                 <p className="text-muted text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
