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
  { id: 'plant_care_app_design', label: 'Plant care app design' },
  { id: 'e_learning_ui_design', label: 'E learning app design' },
  { id: 'social_media_app_design', label: 'Social media app design' },
  // { id: 'fitness_app_ui_design', label: 'Fitness app UI design' },
  { id: 'support_app_ui_design', label: 'Support app design' },
  { id: 'grocery_delivery_app', label: 'Grocery delivery app design' },
  { id: 'weather_app_ui_design', label: 'Weather app design' },
  { id: 'cooking_app_design', label: 'Cooking app design' },
  { id: 'travel_app_design', label: 'Travel app design' },
  { id: 'e_commerce_app_design', label: 'E-commerce app design' },
  { id: 'table_booking_app_design', label: 'Table booking app design' },


];

import { ALL_PROJECTS } from '@/app/data/portfolio_data';

const projects = ALL_PROJECTS.filter(p => p.serviceType === 'mobile');

export default function AppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-20">
        {/* Hero */}
        <Hero
          title1="Native & Hybrid"
          title2=" Apps"
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
