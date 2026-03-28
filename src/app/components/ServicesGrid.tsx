"use client";
import Link from 'next/link';
import { Code, Palette, LineChart, Map, Megaphone, ArrowRight, PenTool } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
const services = [
  { icon: Palette, title: 'Graphic Design ', desc: 'We build high quality, user focused websites, from simple pages to complex web applications.', link: '/services/graphic-design' },
  // { icon: PenTool, title: 'Branding', desc: 'We craft brand identities that resonate with your audience and establish authority.', link: '/services/branding' },
  { icon: Code, title: 'Web Development', desc: 'We build high quality, user focused websites, from simple pages to complex web applications.', link: '/services/web-development' },
  { icon: Code, title: 'App Development', desc: 'We craft powerful mobile experiences for iOS, Android, and Cross Platform that are engineered for scale, speed, and seamless user interactions.', link: '/services/app-development' },
  // { icon: LineChart, title: 'SEO & Content Marketing', desc: 'Boost organic rankings and engage customers.', link: '/services/seo' },
  // { icon: Map, title: 'Google Maps Listing', desc: 'Get your business on Google Maps and attract local customers.', link: '/services/google-maps' },
  // { icon: Megaphone, title: 'Digital Marketing', desc: 'Social media campaigns, PPC ads, email marketing.', link: '/services/digital-marketing' },
];

const ServicesGrid = () => {
  const { theme } = useTheme();
  return (
    <section id="services" className="py-20 px-5">
      <h2 className={`${theme == 'dark' ? 'section-title-in-dark' : 'section-title-in-light'}`}>Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="group bg-card border border-border rounded-3xl p-8 hover:shadow-custom hover:-translate-y-2 transition-all duration-300" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary transition-colors duration-300">
                <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">{service.desc}</p>
              <Link href={service.link} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all underline underline-offset-4">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesGrid;
