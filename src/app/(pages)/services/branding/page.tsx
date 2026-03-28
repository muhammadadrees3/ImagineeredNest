'use client';

import Hero from '@/app/components/Hero';
import How_To_Work from '@/app/components/How_To_Work';
import { Pen, Zap, Shield, Globe, Award, Users, ClipboardList, Layout } from 'lucide-react';
import Link from 'next/link';

export default function BrandingPage() {
  const steps = [
  {
    icon: Users,
    title: "Brand Research",
    desc: "Analyzing market trends, competitors, and audience perception."
  },
  {
    icon: ClipboardList,
    title: "Brand Strategy",
    desc: "Defining brand mission, positioning, and messaging."
  },
  {
    icon: Layout,
    title: "Visual Identity Design",
    desc: "Creating logo, colors, typography, and brand guidelines."
  },
  {
    icon: Zap,
    title: "Brand Growth",
    desc: "Maintaining consistency and strengthening brand presence."
  }
];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="">
        {/* Hero section */}
        <Hero title1='Build a legacy' title2='Brand' subtitle='We craft brand identities that resonate with your audience and establish authority.' image='https://res.cloudinary.com/dqjp2xwje/image/upload/v1774336481/company-website/images/sample/branding/hero.jpg'/>
        {/* Skills section */}
       <How_To_Work steps={steps} />
      </main>
    </div>
  );
  
}
