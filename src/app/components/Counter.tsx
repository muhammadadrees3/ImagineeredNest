// src/components/Counter.tsx
"use client"
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Code, Users, Lightbulb } from 'lucide-react';

const stats = [
  { number: '5', label: 'Projects Delivered', icon: Code, suffix: '+' },
  { number: '10', label: 'Client Satisfaction', icon: Users, suffix: '+' },
  { number: '4', label: 'Years Experience', icon: Lightbulb, suffix: '+' },
];

function Counter() {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  const animateCount = useCallback(() => {
    const targetNumbers = stats.map(stat => parseInt(stat.number));
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: easeOutQuad
      const easedProgress = progress * (2 - progress);

      const nextCounts = targetNumbers.map(target => 
        Math.floor(target * easedProgress)
      );

      setCounts(nextCounts);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        setCounts(targetNumbers);
      }
    };

    animationRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    animateCount();
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [hasStarted, animateCount]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasStarted]);

  return (
    <section ref={sectionRef} className="py-16 px-5 bg-linear-to-r from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className={`text-center text-white group ${hasStarted ? 'animate-fade-in-up' : 'opacity-0'}`} 
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-lg group-hover:bg-white/30 transition-all duration-300" />
                    <Icon className="w-12 h-12 opacity-90 relative z-10" />
                  </div>
                </div>

                <div className="text-5xl md:text-6xl font-bold mb-3 [font-variant-numeric:tabular-nums] pulse-glow">
                  {counts[idx]}{stat.suffix}
                </div>

                <div className="text-blue-100 text-lg font-medium tracking-wide">
                  {stat.label}
                </div>

                <div className="mt-6 h-1 bg-white/30 rounded-full overflow-hidden group-hover:bg-white/50 transition-all duration-300">
                  <div className="h-full bg-white rounded-full w-0 group-hover:w-full transition-all duration-[1.5s]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Counter
