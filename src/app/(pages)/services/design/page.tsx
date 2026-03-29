'use client';

import { Layout, Users, Zap, ClipboardList } from 'lucide-react';
import Hero from '@/app/components/Hero';
import How_To_Work from '@/app/components/How_To_Work';
import Our_projects from '@/app/components/Our_projects';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web UX/UI' },
  { id: 'mobile', label: 'Mobile UX/UI' },
  { id: 'system', label: 'Desktop UX/UI' },
];

import { ALL_PROJECTS } from '@/app/data/portfolio_data';

const projects = ALL_PROJECTS.filter(p => p.serviceType === 'design');

const steps = [
  {
    icon: Users,
    title: "User Research",
    desc: "Analyzing user needs, behavior, and market insights."
  },
  {
    icon: ClipboardList,
    title: "Strategy & Wireframing",
    desc: "Planning user flows and creating product structure."
  },
  {
    icon: Layout,
    title: "UI Design & Prototyping",
    desc: "Designing intuitive interfaces and interactive prototypes."
  },
  {
    icon: Zap,
    title: "Testing & Optimization",
    desc: "Testing usability and refining the experience."
  }
];
export default function UIDesignPage() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-20">
        <Hero title1='Dynamic Creative ' title2='UI/UX Design' subtitle='We craft intuitive, engaging, and visually stunning digital experiences.' image="https://res.cloudinary.com/dqjp2xwje/image/upload/v1774336482/company-website/images/sample/design/ux1.jpg" />
        {/* Features */}
        <How_To_Work steps={steps} />
        {/* Portfolio Grid */}
        <Our_projects projects={projects} categories={categories} />
      </main>
    </div>
  );
}
