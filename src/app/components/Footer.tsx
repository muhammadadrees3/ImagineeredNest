'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Facebook, Instagram, PhoneCall, Phone, Mail } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="border-t border-border  pt-20 pb-10 px-5 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className={ `flex flex-col gap-6  rounded-xl p-4 ${theme == 'dark' ? 'bg-transparent' : 'bg-blue-600'}`}>
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-14 w-14">
              <Image 
                src="https://res.cloudinary.com/dqjp2xwje/image/upload/v1774336406/company-website/images/logo.png" 
                alt="Imagineerednest" 
                fill
                className="object-contain drop-shadow-sm group-hover:scale-110 transition" 
              />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Imagineerednest</span>
          </Link>
          <p className="text-white leading-relaxed text-justify ">
            Two brothers building software, design, and courses quality work, honest pricing, and hands‑on mentorship.
          </p>
          <div className="flex w-full justify-between items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300">
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300">
              <Facebook className="w-5 h-5" aria-hidden="true" />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300">
              <Instagram className="w-5 h-5" aria-hidden="true" />
            </a>
            <a href="https://wa.me/923347257621" aria-label="WhatsApp" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300">
              <PhoneCall className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-foreground font-bold text-lg mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full"></span>
            Quick Links
          </h4>
          <div className="flex flex-col gap-3">
            <Link href="/" className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all">Home</Link>
            <Link href="/about" className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all">About Us</Link>
            <Link href="/portfolio" className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all">Portfolio</Link>
            {/* <Link href="/courses" className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all">Our Courses</Link> */}
            <Link href="/contact" className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all">Contact Us</Link>
          </div>
        </div>

        {/* Services Dropdown - Simplified for footer */}
        <div>
          <h4 className="text-foreground font-bold text-lg mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full"></span>
            Our Expertise
          </h4>
          <div className="flex flex-col gap-3">
            <Link href="/services/web-development" className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all">Web Development</Link>
            <Link href="/services/app-development" className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all">App Development</Link>
            <Link href="/services/graphic-design" className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all">Graphic Design</Link>
            {/* Coming soon */}
            {/* <Link href="/services/seo" className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all">SEO Optimization</Link> */}
            {/* <Link href="/services/digital-marketing" className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all">Digital Marketing</Link> */}
            {/* <Link href="/services/google-maps" className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all">Google Maps SEO</Link> */}
          </div>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-foreground font-bold text-lg mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full"></span>
            Get In Touch
          </h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted/10 text-primary border border-border group-hover:bg-primary group-hover:text-white transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className={`text-xs ${theme == 'dark' ? 'text-white' : 'text-muted'}`}>Call us at</p>
                <p className="text-foreground font-semibold">+92 334 7257621</p>
              </div>
            </div>
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 flex p-3 items-center justify-center rounded-xl bg-muted/10 text-primary border border-border group-hover:bg-primary group-hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className={`text-xs ${theme == 'dark' ? 'text-white' : 'text-muted'}`}>Email support</p>
                <a href="mailto:adreesservicesproviders@gmail.com" className="text-foreground font-semibold">adreesservicesproviders@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-border">
        <p className="text-muted text-sm tracking-wide">
          &copy; {new Date().getFullYear()} <span className="text-primary font-bold">Imagineerednest</span>. Crafted with passion by the Zeeshan Brothers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
