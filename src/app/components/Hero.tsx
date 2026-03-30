"use client"
import { useState, useEffect, useRef } from 'react';
import VideoModal from './VideoModal';
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
  videospeed?: number;
}

const Hero = ({ title1, title2, subtitle, image, video, imageHeight, imageWidth, videospeed = 1 }: HeroProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const pathname = usePathname();

  const openWhatsApp = () => {
    window.open('https://wa.me/923480550152?text=Hello%2C%20I%27m%20interested%20in%20your%20services.', '_blank');
  };
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsVideoLoaded(true);
    }
  }, []);

  const scrollToSection = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Aligns the top of the element to the top of the viewport
      });
    }
  };
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = videospeed;
    }
  }, [videospeed]);

  return (
    <section className=" relative px-5  md:px-10 flex flex-col md:flex-row items-center justify-between gap-12  w-full  py-10 md:py-20 overflow-hidden">
      {/* Background Decorative Element */}

      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] -z-10 rounded-full"></div>

      <div className="flex-1 z-10 w-full" data-aos="fade-right">
        <h1 className="main-heading">
          {title1} <br />
          <span className="text-primary relative inline-block">
            {title2}
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </span>
        </h1>
        <div className="header-description">
          {subtitle}
          <br />

        </div>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={openWhatsApp}
            className="group bg-blue-900 text-white px-5 md:px-10 py-3 md:py-4 rounded-full font-bold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2"
            aria-label="Contact us on WhatsApp"
          >
            <Phone className="w-5 h-5" />
            WhatsApp
          </button>
          <Link href={"/contact/"} onClick={scrollToSection} className="px-5 md:px-10 py-3 md:py-4 rounded-full font-bold border-2 border-blue-900 text-blue-900 hover:bg-primary/5 hover:-translate-y-1 transition-all flex items-center">
            Contact Us
          </Link>
        </div>

      </div>
      <div className="flex-1 relative z-10" data-aos="fade-left">
        {pathname === "/" ? (
          <div className="relative rounded-3xl overflow-hidden shadow-custom border border-border group cursor-pointer aspect-video md:aspect-auto" onClick={() => setModalOpen(true)}>

            <video
              key={video || "/images/video.webm"}
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onLoadedData={() => setIsVideoLoaded(true)}
              className={`w-full h-fit md:h-[500px] object-cover transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <source src={video || "/images/video.mp4"} type="video/mp4" />
            </video>
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-2xl w-full md:h-[400px]">
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-slate-200 animate-pulse z-20"></div>
            )}
            <Image
              src={image!}
              alt="Hero Image"
              width={imageWidth || 800}
              height={imageHeight || 400}
              onLoadingComplete={() => setIsImageLoaded(true)}
              className={`object-contain object-bottom rounded-2xl transition-opacity duration-700 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        )}
      </div>
      {pathname !== "/" && (
        <VideoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} videoSrc={video || "/images/video.mp4"} />
      )}
    </section>
  );
};

export default Hero;