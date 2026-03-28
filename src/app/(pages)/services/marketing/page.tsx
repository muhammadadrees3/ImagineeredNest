'use client';

import { Megaphone, Users, Share2, Zap, BarChart, Heart } from 'lucide-react';
import Link from 'next/link';
import ImageWithLoader from '@/app/components/ImageWithLoader';

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground text-justify">
      <main className="pt-20">
        <section className="py-24 px-5">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 max-w-7xl">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest text-justify">
                <Megaphone className="w-3.5 h-3.5" />
                Digital Growth
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-foreground text-justify">
                Scale Your <span className="text-primary italic">Revenue</span>
              </h1>
              <p className="text-lg text-muted leading-relaxed max-w-2xl text-justify">
                We don't just run ads — we build growth engines. From precision-targeted 
                campaigns to viral content strategy, we leverage data to maximize your ROI 
                and scale your customer base.
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Get Growth Plan
              </Link>
            </div>
            <div className="flex-1 w-full max-w-2xl text-justify">
                <ImageWithLoader 
                  src="https://placehold.co/800x600/2563eb/white?text=Digital+Marketing+Impact" 
                  alt="Marketing" 
                  usePlainImg={true}
                  containerClassName="rounded-2xl shadow-2xl border border-border overflow-hidden"
                  className="w-full h-full object-cover" 
                />
            </div>
          </div>
        </section>

        <section className="py-24 bg-card/20 border-y border-border">
          <div className="container mx-auto px-5 max-w-7xl flex flex-wrap justify-between gap-12">
            {[
              { icon: Share2, label: 'Social Media' },
              { icon: BarChart, label: 'Analytics' },
              { icon: Users, label: 'Community' },
              { icon: Heart, label: 'Engagement' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
