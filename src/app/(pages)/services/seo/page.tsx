'use client';

import Hero from '@/app/components/Hero';
import How_To_Work from '@/app/components/How_To_Work';
import { Search, Zap, Users, ClipboardList, Layout } from 'lucide-react';
import Link from 'next/link';

export default function SEOPage() {
  const steps = [
  {
    icon: Users,
    title: "Keyword & Market Research",
    desc: "Finding high value keywords and analyzing competitors."
  },
  {
    icon: ClipboardList,
    title: "SEO Planning",
    desc: "Creating a clear strategy for content and ranking."
  },
  {
    icon: Layout,
    title: "On-Page & Technical SEO",
    desc: "Optimizing content, speed, and website structure."
  },
  {
    icon: Zap,
    title: "Monitoring & Optimization",
    desc: "Tracking performance and improving SEO results."
  }
];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-20">
        <Hero
        title1="Advanced SEO "
        title2='Strategies'
        subtitle="We help your website rank higher on Google by improving technical SEO, choosing the right keywords, and building quality backlinks for steady growth"
        image="https://res.cloudinary.com/dqjp2xwje/image/upload/v1774336538/company-website/images/sample/seo/hero.jpg"
        />
        {/* <section className="py-24 px-5">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 max-w-7xl">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest text-justify">
                <Search className="w-3.5 h-3.5" />
                SEO Search Mastery
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-foreground text-justify">
                Rank <span className="text-primary italic">#1</span> Today
              </h1>
              <p className="text-lg text-muted leading-relaxed max-w-2xl text-justify">
                Dominate search results with our technical SEO and content strategies. 
                We focus on high-intent keywords, technical performance, and authority-building 
                backlinks to drive consistent organic growth.
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Audit My Website
              </Link>
            </div>
            <div className="flex-1 w-full max-w-2xl">
               <img src="https://placehold.co/800x600/2563eb/white?text=SEO+Optimization+Chart" alt="SEO" className="rounded-2xl shadow-2xl border border-border" />
            </div>
          </div>
        </section> */}

        <How_To_Work
        steps={steps}
        />
        {/* <section className="py-24 bg-card/30">
          <div className="container mx-auto px-5 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-justify">
               {[
                 { icon: Zap, title: 'Technical SEO', desc: 'Core web vitals and fast performance.' },
                 { icon: TrendingUp, title: 'Keyword Data', desc: 'Analyzing intent to capture the right traffic.' },
                 { icon: Link2, title: 'Authority', desc: 'Building trust through premium backlink profiles.' }
               ].map((item, idx) => (
                 <div key={idx} className="p-8 border border-border rounded-2xl bg-card hover:border-primary/50 transition-colors">
                    <item.icon className="w-10 h-10 text-primary mb-6" />
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
