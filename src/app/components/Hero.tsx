"use client"
import { useState, useEffect } from 'react';
import VideoModal from './VideoModal';
import { useTheme } from '@/context/ThemeContext';
import { Code, Compass, Palette, Search, LineChart, Phone, Play } from 'lucide-react';
import { usePathname } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title1: string;
  title2: string;
  subtitle: string;
  image?: string;
  video?: string;
  imageHeight?: number;
  imageWidth?: number;
}

const Hero = ({title1,title2, subtitle, image,video,imageHeight,imageWidth}: HeroProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();

  const openWhatsApp = () => {
    window.open('https://wa.me/923480550152?text=Hello%2C%20I%27m%20interested%20in%20your%20services.', '_blank');
  };
  const scrollToSection = () => {
  const element = document.getElementById('contact-form');
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' // Aligns the top of the element to the top of the viewport
    });
  }
};

  return (
    <section className="pt-20 relative px-5 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 min-h-[90vh] w-full  py-10 md:py-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] -z-10 rounded-full"></div>
      
      <div className="flex-1 z-10 w-full" data-aos="fade-right">
        <h1 className={`text-[36px] sm:text-[42px] md:text-6xl ${theme === 'light' ? 'dark:text-slate-900 ' : 'text-white'} lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground`}>
          {title1} <br />
          <span className="text-primary relative inline-block">
            {title2}
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </span>
        </h1>
        <div className="text-lg md:text-xl my-8 text-foreground/70 max-w-xl leading-relaxed">
          {subtitle}
          <br />
          {/* {pathname === "/" && (
            <div className="flex flex-wrap gap-3 mt-6">
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-foreground font-semibold text-sm hover:bg-primary/20 transition-all cursor-default shadow-sm hover:scale-105">
              <Code className="w-4 h-4 text-primary" /> Development
            </span>
           
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-foreground font-semibold text-sm hover:bg-primary/20 transition-all cursor-default shadow-sm hover:scale-105">
              <Palette className="w-4 h-4 text-primary" /> Designing
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-foreground font-semibold text-sm hover:bg-primary/20 transition-all cursor-default shadow-sm hover:scale-105">
              <LineChart className="w-4 h-4 text-primary" /> Social Media Marketing
            </span>
          </div>
          )} */}
        </div>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={openWhatsApp} 
            className="group bg-primary text-white px-5 md:px-10 py-3 md:py-4 rounded-full font-bold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2"
            aria-label="Contact us on WhatsApp"
          >
            <Phone className="w-5 h-5" />
            WhatsApp
          </button>
          <Link href={"/contact/"}  onClick={scrollToSection} className="px-5 md:px-10 py-3 md:py-4 rounded-full font-bold border-2 border-primary text-primary hover:bg-primary/5 hover:-translate-y-1 transition-all flex items-center">
            Book a Call
          </Link>
        </div>
       
      </div>
      <div className="flex-1 relative z-10" data-aos="fade-left">
        {pathname === "/" ? (
        <div className="relative rounded-3xl overflow-hidden shadow-custom border border-border group cursor-pointer aspect-video md:aspect-auto" onClick={() => setModalOpen(true)}>
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse z-20 flex items-center justify-center">
               <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto" 
            onLoadedData={() => setIsVideoLoaded(true)}
            poster="https://res.cloudinary.com/dqjp2xwje/video/upload/v1774337489/company-website/images/video.jpg" 
            className={`w-full h-full object-cover transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src="https://res.cloudinary.com/dqjp2xwje/video/upload/v1774337489/company-website/images/video.mp4" type="video/mp4" />
          </video>
        </div>
          ): (
            <div className="relative overflow-hidden rounded-2xl w-full h-[400px]">
              {!isImageLoaded && (
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse z-20"></div>
              )}
              <Image 
                src={image!} 
                alt="Hero Image"  
                width={imageWidth || 800} 
                height={imageHeight || 400} 
                onLoadingComplete={() => setIsImageLoaded(true)}
                className={`object-cover rounded-2xl transition-opacity duration-700 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`} 
              />
            </div>
          )}
      </div>
      {pathname !== "/" && (
      <VideoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} videoSrc="https://res.cloudinary.com/dqjp2xwje/video/upload/v1774337489/company-website/images/video.mp4" />
      )}
    </section>
  );
};

export default Hero;