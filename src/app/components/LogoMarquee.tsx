// src/components/LogoMarquee.tsx
'use client';
import { useEffect, useRef } from 'react';

import Image from 'next/image';

const logos = [
  'https://res.cloudinary.com/dqjp2xwje/image/upload/v1774335820/company-website/bleytwgv8ljjco7ukgrl.png',
  'https://res.cloudinary.com/dqjp2xwje/image/upload/v1774335832/company-website/b2dlpc8gjb5qtpeb0t1m.png',
  // '/images/care.jfif',
  // '/images/fir.jfif',
];

const LogoMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate animation duration based on content width
    // We scroll by half of the total width (which contains multiple sets of logos)
    const totalWidth = track.scrollWidth;
    const trackWidth = totalWidth / 2;
    const duration = Math.max(20, Math.round(trackWidth / 50));

    // Apply values via CSS variables
    track.style.setProperty('--marquee-duration', `${duration}s`);
    track.style.setProperty('--marquee-end', `-${trackWidth}px`);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 pt-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50 dark:opacity-100" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center -mb-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">
            Trusted by Industry Leaders
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 transition-colors duration-300">
            Partnering with the world's most innovative companies
          </p>
        </div>

        {/* Marquee Container */}
        <div
          ref={marqueeRef}
          className="relative overflow-hidden group/marquee"
        >
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none transition-colors duration-300" />

          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none transition-colors duration-300" />

          {/* Track */}
          <div
            ref={trackRef}
            className="marquee-track flex gap-8 sm:gap-12 lg:gap-16 items-center -py-2 pt-6 px-4 hover:[animation-play-state:paused]"
          >
            {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((src, idx) => (
              <div
                key={idx}
                className="shrink-0 relative w-32 sm:w-40 h-16 sm:h-20 flex items-center justify-center  dark:opacity-70 transition-all duration-300 ease-out cursor-pointer"
              >
                <Image
                  src={src}
                  alt="Client logo"
                  fill
                  className="object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50 dark:opacity-100" />

      {/* Hover indicator */}
      <div className="text-center mt-6 opacity-0 group-hover/marquee:opacity-100 transition-opacity duration-300">
        <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">
          ↕ Pause on hover
        </p>
      </div>
    </section>
  );
};

export default LogoMarquee;
