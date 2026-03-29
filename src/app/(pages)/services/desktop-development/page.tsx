'use client';
import Hero from '@/app/components/Hero';
import Our_projects from '@/app/components/Our_projects';
import How_To_Work from '@/app/components/How_To_Work';

const categories = [
  { id: 'all', label: 'All' },
  {id:"task_management",label:"Task Management"},
  { id: 'employee-time-tracking', label: 'Employee Time Tracking' },
  { id: 'language-learning', label: 'Language Learning' },
  { id: 'purchase-order-management', label: 'Purchase Order Management' },
  { id: 'material-design', label: 'Material Design' },
  { id: 'news', label: 'News' },
  { id: 'study-dashboard', label: 'Study Dashboard' },
  { id: 'video-call-ui', label: 'Video Call UI' },
  { id: 'invoicing', label: 'Invoicing' },
  { id: 'hr', label: 'HR' },
];
import { ALL_PROJECTS } from '@/app/data/portfolio_data';

const projects = ALL_PROJECTS.filter(p => p.serviceType === 'desktop');

export default function DesktopDevelopmentPage() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-20 md:pt-20">
        {/* Hero */}
        <Hero title1='Scalable  for' title2=' Desktop' subtitle='We create fast, stable, and scalable software for Windows, macOS, and Linux.' image="https://res.cloudinary.com/dqjp2xwje/image/upload/v1774336488/company-website/images/sample/desktop-development/dt1.jpg" />
        {/* Process */}
        <How_To_Work />
        {/* Our Recent Projects */}
        <Our_projects projects={projects} categories={categories} />
      </main>
    </div>
  );
}
