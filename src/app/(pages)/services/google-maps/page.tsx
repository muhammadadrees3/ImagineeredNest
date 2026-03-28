'use client';

import { MapPin, Globe, Zap, Search, Layout, Smartphone } from 'lucide-react';
import Link from 'next/link';
import ImageWithLoader from '@/app/components/ImageWithLoader';

export default function GoogleMapsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground text-justify">
      <main className="pt-20 text-justify">
        <section className="py-24 px-5">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 max-w-7xl">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest text-justify">
                <Globe className="w-3.5 h-3.5" />
                Google Business
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-foreground text-justify">
                Google <span className="text-primary italic">Maps</span> Experts
              </h1>
              <p className="text-lg text-muted leading-relaxed max-w-2xl text-justify">
                We specialize in optimizing Google Business Profiles to ensure maximum visibility 
                on Google Maps. From photo optimization to strategic posting, we help 
                you dominate your local map pack.
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Setup My Listing
              </Link>
            </div>
            <div className="flex-1 w-full max-w-2xl text-justify">
                <ImageWithLoader 
                  src="https://placehold.co/800x600/2563eb/white?text=Google+Maps+Listing+Results" 
                  alt="Google Maps" 
                  usePlainImg={true}
                  containerClassName="rounded-2xl shadow-2xl border border-border overflow-hidden"
                  className="w-full h-full object-cover" 
                />
            </div>
          </div>
        </section>

        <section className="py-24 bg-card shadow-sm border-t border-border">
          <div className="container mx-auto px-5 max-w-4xl text-center">
             <h2 className="text-2xl font-bold mb-8">What We Offer</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
               {['Profile Setup', 'Maps Ranking', 'Review Replies', 'GMB Posts', 'Insights Analysis', 'Local Citations'].map((item, idx) => (
                 <div key={idx} className="p-4 rounded-xl border border-border text-sm font-medium hover:bg-primary/5 hover:border-primary/30 transition-all cursor-default text-justify">
                   {item}
                 </div>
               ))}
             </div>
          </div>
        </section>
      </main>
    </div>
  );
}
