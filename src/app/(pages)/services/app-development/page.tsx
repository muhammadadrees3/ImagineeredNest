'use client';

import { useState } from 'react';
import { Smartphone, Zap, Layout, AppWindow } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Lightbox from '@/app/components/Lightbox';
import How_To_Work from '@/app/components/How_To_Work';
import Hero from '@/app/components/Hero';
import Our_projects from '@/app/components/Our_projects';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'ios', label: 'iOS Apps' },
  { id: 'android', label: 'Android' },
  { id: 'cross', label: 'Cross-Platform' },
];

import { ALL_PROJECTS } from '@/app/data/portfolio_data';

const projects = ALL_PROJECTS.filter(p => p.serviceType === 'mobile');

export default function AppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="">
        {/* Hero */}
        <Hero
          title1="Native &"
          title2="Hybrid Apps"
          subtitle="We craft powerful mobile experiences for iOS, Android, and Cross Platform that are engineered for scale, speed, and seamless user interactions."
          image="https://res.cloudinary.com/dqjp2xwje/image/upload/v1774336463/company-website/images/sample/app-development/app1.jpg"
          video="/images/video.mp4"
        />
        {/* How to work */}
        <How_To_Work/>
        {/* ---- Our Projects ---- */}
        <Our_projects projects={projects} categories={categories} />
      </main>

    </div>
  );
}
