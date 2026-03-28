'use client';

import { useState } from 'react';
import { Palette, PenTool, Sparkles, Box, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Lightbox from '@/app/components/Lightbox';
import Hero from '@/app/components/Hero';
import How_To_Work from '@/app/components/How_To_Work';
import Our_projects from '@/app/components/Our_projects';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'banner_design', label: 'Banner Designing' },
  { id: 'book_cover_design', label: 'Book Cover Designing' },
  { id: 'brochure_design', label: 'Brochure Designing' },
  { id: 'card_design', label: 'Card Design' },
  { id: 'logo_design', label: 'Logo Designing' },
  { id: 'magazine_design', label: 'Magazine Design' },
  { id: 'packaging_design', label: 'Packaging Design' },
  { id: 'poster_design', label: 'Poster Designing' },
  { id: 'standee_design', label: 'Standee Design' },
  { id: 'thumbnail_design', label: 'Thumbnail Design' },
  { id: 'tshirt_design', label: 'T-Shirt Design' },
];

import { ALL_PROJECTS } from '@/app/data/portfolio_data';

const projects = ALL_PROJECTS.filter(p =>
  p.serviceType === 'graphic' &&
  categories.some(cat => cat.id === p.category)
);

export default function GraphicDesignPage() {



  const steps = [
    { icon: Box, title: 'Brand Assets', desc: 'Logos, icons & mark systems' },
    { icon: PenTool, title: 'Illustration', desc: 'Custom vectors & characters' },
    { icon: Sparkles, title: 'Motion', desc: 'Animated banners & reels' },
    { icon: Zap, title: 'Print', desc: 'Brochures, posters & packaging' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="">
        {/* Hero */}
        <Hero title1='Creative Graphic' title2='Design' imageWidth={600} subtitle='We create striking visuals that showcase and elevate your brand.' image="https://res.cloudinary.com/dqjp2xwje/image/upload/v1774336506/company-website/images/sample/graphic-design/designe.jpg" />
        {/* Skills */}
        <How_To_Work steps={steps} />
        {/* Our work */}
        <Our_projects projects={projects} categories={categories} />
      </main>
    </div>
  );
}
