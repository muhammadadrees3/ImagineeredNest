'use client';
import Hero from '@/app/components/Hero';
import Our_projects from '@/app/components/Our_projects';
import How_To_Work from '@/app/components/How_To_Work';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'windows', label: 'Windows' },
  { id: 'mac', label: 'macOS' },
  { id: 'cross', label: 'Cross-Platform' },
];

import { ALL_PROJECTS } from '@/app/data/portfolio_data';

const projects = ALL_PROJECTS.filter(p => p.serviceType === 'desktop');

export default function DesktopDevelopmentPage() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="">
        {/* Hero */}
        <Hero title1='Powerful Desktop' title2='Solutions' subtitle='We create fast, stable, and scalable software for Windows, macOS, and Linux.' image="https://res.cloudinary.com/dqjp2xwje/image/upload/v1774336488/company-website/images/sample/desktop-development/dt1.jpg" />
        {/* Process */}
        <How_To_Work />
        {/* Our Recent Projects */}
        <Our_projects projects={projects} categories={categories} />
      </main>
    </div>
  );
}
