"use client"
import { ArrowRight, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';

/* ─── Skeleton Card ──────────────────────────────────────────────── */
function SkeletonCard() {
  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/40 bg-muted animate-pulse">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

/* ─── Project Card ───────────────────────────────────────────────── */
interface ProjectCardProps {
  proj: any;
  index: number;
  onOpen: (image: string, extras: string[], alt: string) => void;
}

const ProjectCard = React.memo(({ proj, index, onOpen }: ProjectCardProps) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delay = `${(index % 6) * 70}ms`;

  return (
    <div
      ref={ref}
      onClick={() => onOpen(proj.image, proj.extraImages ?? [], proj.alt)}
      style={{ transitionDelay: delay }}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-border shadow-sm aspect-[4/3] transition-all duration-700 ease-out will-change-transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} hover:-translate-y-1 hover:shadow-xl hover:border-primary/40`}
    >
      
      {/* skeleton shown until image loads */}
      {!loaded && (
        <div className="absolute inset-0 bg-muted animate-pulse z-10">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>
      )}

      {/*
        KEY FIX: use Next.js Image with `fill` prop.
        The parent div must be `position: relative` (it is via Tailwind's `relative`)
        and have an explicit size — we give it via `aspect-[4/3]`.
        `object-cover` makes the image fill every pixel without distortion.
      */}
      <Image
        src={proj.image}
        alt={proj.alt}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
        className={`object-cover transition-all duration-700 ease-out group-hover:scale-[1.06] ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />

      {/* permanent bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-20" />

      {/* hover overlay */}
      <div className="absolute inset-0 z-30 flex flex-col justify-end p-4 md:p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="self-start mb-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary/20 border border-primary/40 text-primary translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-[30ms]">
          {proj.tag ?? proj.category}
        </span>

        <p className="text-white font-semibold text-sm md:text-base leading-snug translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-[50ms]">
          {proj.alt}
        </p>

        <div className="mt-1.5 flex items-center gap-1.5 text-white/60 text-xs font-semibold uppercase tracking-wider translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-[70ms]">
          View project <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
});
ProjectCard.displayName = 'ProjectCard';

/* ─── Main Component ─────────────────────────────────────────────── */
export default function Our_projects({
  projects,
  categories,
}: {
  projects: any[];
  categories: any[];
}) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(12);
  const [transitioning, setTransitioning] = useState(false);
  const [lb, setLb] = useState({ isOpen: false, images: [] as string[], index: 0, title: '' });
  const scrollRef = useRef<HTMLDivElement>(null);

  const categoryCounts = useMemo(() => {
    const map: Record<string, number> = { all: projects.length };
    projects.forEach(p => {
      const key = p.serviceType ?? p.category;
      if (key) map[key] = (map[key] ?? 0) + 1;
    });
    return map;
  }, [projects]);

  const filteredProjects = useMemo(() =>
    activeFilter === 'all'
      ? projects
      : projects.filter(p => p.serviceType === activeFilter || p.category === activeFilter),
    [projects, activeFilter]
  );

  const handleFilter = useCallback((id: string) => {
    if (id === activeFilter) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveFilter(id);
      setVisibleCount(12);
      setTransitioning(false);
    }, 180);
  }, [activeFilter]);

  const scroll = useCallback((dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -220 : 220, behavior: 'smooth' });
  }, []);

  const openLightbox = useCallback((image: string, extras: string[], alt: string) => {
    setLb({ isOpen: true, images: [image, ...extras], index: 0, title: alt });
  }, []);

  const visibleProjects = useMemo(
    () => filteredProjects.slice(0, visibleCount),
    [filteredProjects, visibleCount]
  );

  return (
    <>
      <style>{`
        @keyframes shimmer { to { transform: translateX(300%); } }
      `}</style>

      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4">

          {/* Headline */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" /> Portfolio
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-5">Our Projects</h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              A showcase of our work across digital strategy, product engineering, and design systems.
            </p>
          </div>

          {/* Filter bar */}
          <div className="relative mb-12 flex items-center">
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 z-20 md:hidden p-2 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-lg active:scale-95 transition-transform"
              aria-label="Scroll filters left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto w-full gap-2.5 scrollbar-hide snap-x scroll-smooth px-10 md:px-0 md:flex-wrap md:justify-center pb-2 md:pb-0"
            >
              {categories.map(cat => {
                const isActive = activeFilter === cat.id;
                const count = categoryCounts[cat.id] ?? 0;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleFilter(cat.id)}
                    aria-pressed={isActive}
                    className={`shrink-0 snap-center flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${isActive ? 'bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/25' : 'bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'}`}
                  >
                    {cat.label}
                    <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-black ${isActive ? 'bg-white/20 text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => scroll('right')}
              className="absolute right-0 z-20 md:hidden p-2 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-lg active:scale-95 transition-transform"
              aria-label="Scroll filters right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none md:hidden" />
            <div className="absolute left-0 top-0 bottom-2 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none md:hidden" />
          </div>

          {/* Results meta */}
          <p className={`mb-5 text-muted-foreground text-sm transition-opacity duration-200 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
            Showing{' '}
            <span className="text-foreground font-semibold">{Math.min(visibleCount, filteredProjects.length)}</span>
            {' '}of{' '}
            <span className="text-foreground font-semibold">{filteredProjects.length}</span> projects
          </p>

          {/* Grid — 2 cols mobile, 3 cols md, 4 cols xl */}
          <div className={`grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 transition-all duration-200 ${transitioning ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'}`}>
            {transitioning
              ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={`sk-${i}`} />)
              : visibleProjects.map((proj, i) => (
                  <ProjectCard key={proj.id} proj={proj} index={i} onOpen={openLightbox} />
                ))
            }
          </div>

          {/* Empty state */}
          {!transitioning && filteredProjects.length === 0 && (
            <div className="py-24 text-center border-2 border-dashed border-border rounded-3xl">
              <p className="text-4xl mb-4">🗂️</p>
              <p className="text-muted-foreground text-lg font-medium">No projects in this category yet.</p>
              <button
                onClick={() => handleFilter('all')}
                className="mt-5 px-6 py-2.5 rounded-full border border-primary/40 text-primary text-sm font-semibold hover:bg-primary/10 transition-colors"
              >
                View all projects
              </button>
            </div>
          )}

          {/* Load more */}
          {!transitioning && visibleCount < filteredProjects.length && (
            <div className="mt-12 flex flex-col items-center gap-2">
              <button
                onClick={() => setVisibleCount(prev => prev + 12)}
                className="group px-10 py-3.5 rounded-full font-semibold text-sm border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-primary/25 flex items-center gap-2"
              >
                Load more
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <p className="text-muted-foreground text-xs">
                {filteredProjects.length - visibleCount} more to explore
              </p>
            </div>
          )}

        </div>
      </section>

      <Lightbox
        isOpen={lb.isOpen}
        onClose={() => setLb(prev => ({ ...prev, isOpen: false }))}
        images={lb.images}
        currentIndex={lb.index}
        setCurrentIndex={(index) => setLb(prev => ({ ...prev, index }))}
        title={lb.title}
      />
    </>
  );
}
// "use client"
// import { ArrowRight, ChevronLeft, ChevronRight, Images } from 'lucide-react';
// import React from 'react'
// import { useState, useRef } from 'react';
// import Lightbox from './Lightbox';
// import Image from 'next/image';

// function Our_projects({projects, categories}: {projects: any[], categories: any[]}) {
  
//       const [activeFilter, setActiveFilter] = useState('all');
//       const [visibleCount, setVisibleCount] = useState(12);
//       const [lb, setLb] = useState({ isOpen: false, images: [] as string[], index: 0, title: '' });
//       const scrollContainerRef = useRef<HTMLDivElement>(null);
    
//       const scroll = (direction: 'left' | 'right') => {
//         if (scrollContainerRef.current) {
//           const scrollAmount = 200;
//           scrollContainerRef.current.scrollBy({
//             left: direction === 'left' ? -scrollAmount : scrollAmount,
//             behavior: 'smooth'
//           });
//         }
//       };
    
//     const filteredProjects = activeFilter === 'all'
//     ? projects
//     : projects.filter(p => p.serviceType === activeFilter || p.category === activeFilter);

//   const openLightbox = (image: string, extras: string[], alt: string) => {
//     setLb({
//       isOpen: true,
//       images: [image, ...extras],
//       index: 0,
//       title: alt
//     });
//   };

//   return (
//     <>
//      <section className="py-24">
//           <div className="container mx-auto max-w-7xl ">
//             <div className="text-center max-w-2xl mx-auto mb-16">
//               <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Projects</h2>
//               <p className="text-muted">A showcase of our work across digital strategy, product engineering, and design systems.</p>
//             </div>

//             {/* Filters Slider for Mobile / Center Grid for Desktop */}
//             <div className="relative mb-12  group/slider flex items-center w-full scrollbar-hide">
//               {/* Desktop/Mobile Navigation Arrows (Visible only when needed/hovered) */}
//               <button 
//                 onClick={() => scroll('left')}
//                 className="absolute left-0 z-20 p-2 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-lg md:hidden flex items-center justify-center transition-all active:scale-95"
//                 aria-label="Scroll left"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>

//               {/* Scroll Container - Fixed clipping issue */}
//               <div 
//                 ref={scrollContainerRef}
//                 className="flex overflow-x-auto w-full gap-3 scrollbar-hide snap-x scroll-smooth px-12 md:px-0 md:flex-wrap md:justify-center pb-4 md:pb-0"
//               >
//                 {categories.map(cat => (
//                   <button
//                     key={cat.id}
//                     onClick={() => {
//                       setActiveFilter(cat.id);
//                       setVisibleCount(12);
//                     }}
//                     aria-label={`Filter by ${cat.label}`}
//                     className={`shrink-0 snap-center px-6 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${activeFilter === cat.id
//                         ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30'
//                         : 'bg-card border-border hover:border-primary/50 text-muted hover:text-foreground'
//                       }`}
//                   >
//                     {cat.label}
//                   </button>
//                 ))}
//               </div>

//               <button 
//                 onClick={() => scroll('right')}
//                 className="absolute right-0 z-20 p-2 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-lg md:hidden flex items-center justify-center transition-all active:scale-95"
//                 aria-label="Scroll right"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>

//               {/* Subtle gradient to indicate scrollability on mobile - Adjusted width to match padding */}
//               <div className="absolute right-0 top-0 bottom-4 w-12 bg-linear-to-l from-background via-background/60 to-transparent pointer-events-none md:hidden"></div>
//               <div className="absolute left-0 top-0 bottom-4 w-12 bg-linear-to-r from-background via-background/60 to-transparent pointer-events-none md:hidden"></div>
//             </div>

//             {/* Grid */}
//             <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in px-3 duration-500">
//               {filteredProjects.slice(0, visibleCount).map(proj => (
//                 <div
//                   key={proj.id}
//                   onClick={() => openLightbox(proj.image, proj.extraImages, proj.alt)}
//                   className="relative group aspect-square rounded-2xl overflow-hidden cursor-pointer border border-border shadow-sm"
//                 >
//                   <Image
//                   src={proj.image}
//                   alt={proj.alt}
//                   width={500}
//                   height={500}
//                   className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
//                     <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{proj.alt}</p>
//                     <div className="mt-2 flex items-center text-primary-foreground/80 text-xs font-semibold uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
//                     {proj.tag || proj.category} <ArrowRight className="w-3 h-3 ml-2" />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {filteredProjects.length === 0 && (
//               <div className="py-20 text-center border-2 border-dashed border-border rounded-3xl">
//                 <p className="text-muted text-lg">No projects found in this category yet.</p>
//               </div>
//             )}

//             {visibleCount < filteredProjects.length && (
//               <div className="mt-12 flex justify-center">
//                 <button
//                   onClick={() => setVisibleCount(prev => prev + 16)}
//                   className="px-8 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all shadow-lg flex items-center justify-center gap-2"
//                 >
//                   View More <ChevronRight className="w-5 h-5" />
//                 </button>
//               </div>
//             )}
//           </div>
//         </section>
//          <Lightbox 
//         isOpen={lb.isOpen}
//         onClose={() => setLb(prev => ({ ...prev, isOpen: false }))}
//         images={lb.images}
//         currentIndex={lb.index}
//         setCurrentIndex={(index) => setLb(prev => ({ ...prev, index }))}
//         title={lb.title}
//       />
//     </>
//   )
// }

// export default Our_projects