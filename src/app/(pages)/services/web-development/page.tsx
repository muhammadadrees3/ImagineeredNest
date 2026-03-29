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
    <div className="min-h-screen mt-20 bg-background text-foreground">
      <main className="">
        {/* --- Hero Section --- */}
        <Hero title1="We Build Modern" title2=' Websites' subtitle="We build high quality, user focused websites, from simple pages to complex web applications." image="https://res.cloudinary.com/dqjp2xwje/image/upload/v1774336752/company-website/images/sample/web-development/hero.jpg" />

        {/* --- How We Work Section --- */}
        <How_To_Work/>

        <Our_projects projects={projects} categories={categories} />

        {/* --- CTA Section --- */}
        <section className="mt-10 py-24 px-5">
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