import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Star, Zap, Globe, ShoppingBag, Palette, Code2, Layers, BarChart3, ChevronDown } from 'lucide-react';
import Our_projects from '@/app/components/Our_projects';
import { ALL_PROJECTS, CATEGORIES } from '@/app/data/portfolio_data';
import RecentProjects from '@/app/components/RecentProjects/RecentProjects';
export const metadata: Metadata = {
  title: 'Portfolio | Adrees Services',
  description: 'Explore our portfolio of personal builds, concept designs, and early freelance work. Real ideas, real execution.',
};


export default function PortfolioPage() {

  const recentProjects = [
    {
      imageLink: "https://res.cloudinary.com/dqjp2xwje/image/upload/v1774336446/company-website/images/recentprojects/otp_varification_project/landing_page.png",
      title: "Architecting the OTP Infrastructure",
      description: "A full-stack real-time OTP verification system for secure user authentication.",
      techStack: ["Next.js", "Django", "PostgreSQL", "Tailwind"],
      liveDemo: "#",
      stats: [["1000+", "Requests(per day)"], ["100ms", "Response Time(per request)"]] as [string, string][]
    },
    {
      imageLink: "https://res.cloudinary.com/dqjp2xwje/image/upload/v1774336444/company-website/images/recentprojects/herd_erp_project/landig_page.png",
      title: "Herd ERP System",
      description: "A comprehensive ERP system for herd management, designed to streamline operations and improve efficiency.",
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
      liveDemo: "#",
      stats: [["100+", "Herds(managed)"], ["100ms", "Response Time(per request)"]] as [string, string][]
    },
    {
      imageLink: "https://res.cloudinary.com/dqjp2xwje/image/upload/v1774336433/company-website/images/recentprojects/crop_erp_project/landing_page.png",
      title: "Crop ERP System",
      description: "A comprehensive ERP system for crop management, designed to streamline operations and improve efficiency.",
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
      liveDemo: "#",
      stats: [["100+", "Crops(managed)"], ["100ms", "Response Time(per request)"]] as [string, string][]
    },
  
  ];
  return (
    <main className="overflow-x-hidden mt-10">



      {/* ──────────────────────────────────────
          3. MAIN PORTFOLIO GALLERY
      ────────────────────────────────────── */}
      <section id="projects" className="scroll-mt-20">
        {/* Top label + disclaimer above the component */}
        <div className="container mx-auto max-w-7xl px-4 pt-32  pb-10 text-center">
          <p className="text-4xl font-bold uppercase tracking-[0.2em] text-primary mb-2">
            End-to-End Solutions
          </p>
       
        </div>
     
        {recentProjects.map((project, index)=>(<RecentProjects key={index} imageLink={project.imageLink} title={project.title} description={project.description} techStack={project.techStack} liveDemo={project.liveDemo} stats={project.stats} />))}
        {/* The original component — untouched */}
        <Our_projects projects={ALL_PROJECTS} categories={CATEGORIES} />
      </section>

   
      {/* ──────────────────────────────────────
          5. FINAL CTA
      ────────────────────────────────────── */}
      <section className="relative  px-4 overflow-hidden">

        {/* Background accent */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px]" />
        </div>

        <div className="container mx-auto max-w-3xl text-center mt-5">
        
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1] mb-6">
            Ready to bring your{' '}
            <span className="bg-gradient-to-r from-primary via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              idea to life?
            </span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-lg mx-auto mb-10">
            We're actively looking for our first real client projects. You get a
            passionate team, honest communication, and startup-speed execution.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-200 mb-14"
          >
            Let's Build Together
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          
        </div>
      </section>

    </main>
  );
}




