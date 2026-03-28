'use client';

import { useState, useRef } from 'react';
import {
  Lightbulb, ClipboardList, PencilRuler, Code,
  ArrowRight, ChevronLeft, ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import Lightbox from '@/app/components/Lightbox';
import How_To_Work from '@/app/components/How_To_Work';
import Hero from '@/app/components/Hero';
import Our_projects from '@/app/components/Our_projects';

// --- Data Definitions ---

import { ALL_PROJECTS } from '@/app/data/portfolio_data';

// --- Data Definitions ---

const categories = [
  { id: 'all', label: 'All' },
  { id: 'food', label: 'Food' },
  { id: 'ecommerce', label: 'E‑commerce' },
  { id: 'agriculture', label: 'Agriculture' },
  { id: 'health', label: 'Health' },
  { id: 'education', label: 'Education' },
  { id: 'real-estate', label: 'Real Estate' },
];

const projects = ALL_PROJECTS.filter(p => p.serviceType === 'web');



export default function page() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lb, setLb] = useState({ isOpen: false, images: [] as string[], index: 0, title: '' });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const openLightbox = (image: string, extras: string[], alt: string) => {
    setLb({
      isOpen: true,
      images: [image, ...extras],
      index: 0,
      title: alt
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="">
        {/* --- Hero Section --- */}
        <Hero title1="We Build " title2='Modern Solutions' subtitle="We build high quality, user focused websites, from simple pages to complex web applications." image="https://res.cloudinary.com/dqjp2xwje/image/upload/v1774336752/company-website/images/sample/web-development/hero.jpg" />

        {/* --- How We Work Section --- */}
        <How_To_Work/>

       {/* --- Recent Work Section --- */}
        {/* <section className="py-24">
          <div className="container mx-auto max-w-7xl px-5">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Recent Projects</h2>
              <p className="text-muted">A showcase of our work across digital strategy, product engineering, and design systems.</p>
            </div>

            <div className="relative mb-12 group/slider flex items-center w-full scrollbar-hide">
              <button 
                onClick={() => scroll('left')}
                className="absolute left-0 z-20 p-2 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-lg md:hidden flex items-center justify-center transition-all active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto w-full gap-3 scrollbar-hide snap-x scroll-smooth px-12 md:px-0 md:flex-wrap md:justify-center pb-4 md:pb-0"
              >
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    aria-label={`Filter by ${cat.label}`}
                    className={`flex-shrink-0 snap-center px-6 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${activeFilter === cat.id
                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30'
                        : 'bg-card border-border hover:border-primary/50 text-muted hover:text-foreground'
                      }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => scroll('right')}
                className="absolute right-0 z-20 p-2 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-lg md:hidden flex items-center justify-center transition-all active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute right-0 top-0 bottom-4 w-12 bg-linear-to-l from-background via-background/60 to-transparent pointer-events-none md:hidden"></div>
              <div className="absolute left-0 top-0 bottom-4 w-12 bg-linear-to-r from-background via-background/60 to-transparent pointer-events-none md:hidden"></div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-500">
              {filteredProjects.map(proj => (
                <div
                  key={proj.id}
                  onClick={() => openLightbox(proj.image, proj.extraImages, proj.alt)}
                  className="relative group aspect-square rounded-2xl overflow-hidden cursor-pointer border border-border shadow-sm"
                >
                  <img src={proj.image} alt={proj.alt} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{proj.alt}</p>
                    <div className="mt-2 flex items-center text-primary-foreground/80 text-xs font-semibold uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      Explore Case Study <ArrowRight className="w-3 h-3 ml-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="py-20 text-center border-2 border-dashed border-border rounded-3xl">
                <p className="text-muted text-lg">No projects found in this category yet.</p>
              </div>
            )}
          </div>
        </section> */}

        <Our_projects projects={projects} categories={categories} />

        {/* --- CTA Section --- */}
        <section className="py-24 px-5">
          <div className="container mx-auto max-w-5xl rounded-3xl bg-linear-to-br from-blue-600 to-blue-800 p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to build something amazing?</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Join 200+ businesses that trust us with their digital transformation.
                Get a free strategy session with our senior engineers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-10 py-5 bg-white text-primary font-bold rounded-xl shadow-xl hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300">
                  Book a Consult
                </Link>
                <Link href="/portfolio" className="px-10 py-5 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                  View Full Portfolio
                </Link>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
          </div>
        </section>

      </main>

      <Lightbox
        isOpen={lb.isOpen}
        onClose={() => setLb(prev => ({ ...prev, isOpen: false }))}
        images={lb.images}
        currentIndex={lb.index}
        setCurrentIndex={(index) => setLb(prev => ({ ...prev, index }))}
        title={lb.title}
      />
    </div>
  );
}