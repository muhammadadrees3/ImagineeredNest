'use client';

import { useEffect, useCallback, useState } from 'react';
import { 
  X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, 
  RotateCcw, Info, Maximize2, Minimize2 
} from 'lucide-react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  title: string;
}

const Lightbox = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
  title,
}: LightboxProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const prevImg = useCallback(() => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, setCurrentIndex]);

  const nextImg = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, setCurrentIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImg();
      if (e.key === 'ArrowRight') nextImg();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, prevImg, nextImg]);

  useEffect(() => {
    const container = document.getElementById('thumbnail-container');
    const activeThumb = document.getElementById(`thumb-${currentIndex}`);
    if (container && activeThumb) {
      activeThumb.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [currentIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center animate-in fade-in duration-500 backdrop-blur-xl"
      onClick={onClose}
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[25%] -left-[25%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[25%] -right-[25%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative w-full h-full flex flex-col p-4 md:p-6 lg:p-10" onClick={(e) => e.stopPropagation()}>
        
        {/* HEADER */}
        <div className="flex items-center justify-between w-full mb-4 md:mb-8 z-80">
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-lg md:text-2xl tracking-tight drop-shadow-md">
              {title}
            </h3>
            <p className="text-white/50 font-mono text-xs md:text-sm mt-1">
              IMAGE <span className="text-white">{currentIndex + 1}</span> / {images.length}
            </p>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className={`p-3 rounded-full border transition-all ${
                showDetails 
                ? 'bg-primary border-primary text-white' 
                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
              }`}
              title="Toggle Info"
            >
              <Info className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={onClose}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/50 transition-all active:scale-90"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* MAIN VIEWPORT */}
        <div className="relative flex-1 flex items-center justify-center min-h-0 w-full rounded-2xl md:rounded-[2rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-inner">
          
          <TransformWrapper
            key={currentIndex}
            initialScale={1}
            minScale={0.5}
            maxScale={5}
            centerOnInit={true}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                {/* FLOATING ZOOM CONTROLS */}
                <div className="absolute right-4 md:right-8 top-10 -translate-y-1/2 z-80 flex  gap-2 p-1.5 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 lg:opacity-100 transition-opacity">
                  <button onClick={() => zoomIn()} className="p-3 rounded-xl hover:bg-white/10 text-white/80 transition-colors"><ZoomIn className="w-5 h-5" /></button>
                  <button onClick={() => zoomOut()} className="p-3 rounded-xl hover:bg-white/10 text-white/80 transition-colors"><ZoomOut className="w-5 h-5" /></button>
                  <div className="h-px bg-white/10 mx-2" />
                  <button onClick={() => resetTransform()} className="p-3 rounded-xl hover:bg-white/10 text-white/80 transition-colors"><RotateCcw className="w-4 h-4" /></button>
                </div>

                <TransformComponent 
                  wrapperClass="!w-full !h-full" 
                  contentClass="!w-full !h-full flex items-center justify-center"
                >
                  <img
                    src={images[currentIndex]}
                    alt={`${title} - ${currentIndex + 1}`}
                    className="max-w-[95%] max-h-[95%] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out"
                    draggable="false"
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>

          {/* TESTIMONIAL OVERLAY (Responsive) */}
          <div className={`absolute bottom-6 left-6 right-6 md:right-auto md:max-w-md z-90 transition-all duration-500 ease-in-out ${
            showDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}>
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <p className="text-white text-sm md:text-base italic leading-relaxed mb-6">
                "I love how easy it is to manage my projects. The design is clean, intuitive, and extremely fast. ImagineeredNest truly knows how to blend aesthetics with high performance."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">
                  JP
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base leading-none">James Peterson</h4>
                  <p className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">Property Manager</p>
                </div>
              </div>
            </div>
          </div>

          {/* NAVIGATION ARROWS */}
          {images.length > 1 && (
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-6 pointer-events-none z-70">
              <button
                onClick={(e) => { e.stopPropagation(); prevImg(); }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/20 hover:bg-primary border border-white/10 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-90 backdrop-blur-sm pointer-events-auto"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImg(); }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/20 hover:bg-primary border border-white/10 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-90 backdrop-blur-sm pointer-events-auto"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>
          )}
        </div>

        {/* THUMBNAILS FOOTER */}
        <div className="mt-6 flex flex-col items-center gap-6 z-80">
          {images.length > 1 && (
            <div 
              id="thumbnail-container"
              className="flex overflow-x-auto gap-3 md:gap-4 py-2 px-4 no-scrollbar snap-x items-center justify-start max-w-full"
            >
              {images.map((img, i) => (
                <button
                  key={i}
                  id={`thumb-${i}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(i);
                  }}
                  className={`relative w-14 h-14 md:w-20 md:h-20 shrink-0 snap-center rounded-xl overflow-hidden transition-all duration-300 ${
                    i === currentIndex
                      ? 'ring-2 ring-primary ring-offset-4 ring-offset-black scale-110'
                      : 'opacity-40 hover:opacity-100 scale-95 hover:scale-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                  {i === currentIndex && (
                    <div className="absolute inset-0 bg-primary/10 animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          )}
          
          <div className="hidden md:flex items-center gap-4 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
            <span>Esc <span className="text-white/10 ml-1">to close</span></span>
            <div className="w-1 h-1 rounded-full bg-white/10" />
            <span>Arrows <span className="text-white/10 ml-1">to navigate</span></span>
            <div className="w-1 h-1 rounded-full bg-white/10" />
            <span>Pinch <span className="text-white/10 ml-1">to zoom</span></span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Lightbox;
// 'use client';

// import { useEffect, useCallback, useState } from 'react';
// import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, User } from 'lucide-react';
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// interface LightboxProps {
//   isOpen: boolean;
//   onClose: () => void;
//   images: string[];
//   currentIndex: number;
//   setCurrentIndex: (index: number) => void;
//   title: string;
// }

// const Lightbox = ({
//   isOpen,
//   onClose,
//   images,
//   currentIndex,
//   setCurrentIndex,
//   title,
// }: LightboxProps) => {
//   const [showTestimonial, setShowTestimonial] = useState(true);

//   const prevImg = useCallback(() => {
//     setCurrentIndex((currentIndex - 1 + images.length) % images.length);
//   }, [currentIndex, images.length, setCurrentIndex]);

//   const nextImg = useCallback(() => {
//     setCurrentIndex((currentIndex + 1) % images.length);
//   }, [currentIndex, images.length, setCurrentIndex]);

//   useEffect(() => {
//     if (!isOpen) return;

//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') onClose();
//       if (e.key === 'ArrowLeft') prevImg();
//       if (e.key === 'ArrowRight') nextImg();
//     };

//     document.body.style.overflow = 'hidden';
//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       document.body.style.overflow = '';
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [isOpen, onClose, prevImg, nextImg]);

//   useEffect(() => {
//     const container = document.getElementById('thumbnail-container');
//     const activeThumb = document.getElementById(`thumb-${currentIndex}`);
//     if (container && activeThumb) {
//       activeThumb.scrollIntoView({
//         behavior: 'smooth',
//         block: 'nearest',
//         inline: 'center'
//       });
//     }
//   }, [currentIndex]);

//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center animate-in fade-in duration-300 backdrop-blur-md"
//       onClick={onClose}
//     >
//       <div className="relative w-full h-full flex flex-col p-4 md:p-8" onClick={(e) => e.stopPropagation()}>
        
//         {/* TOP HEADER: LEFT TITLE/INDEX, RIGHT CLOSE */}
//         <div className="flex items-start justify-between w-full mb-6 relative z-[70]">
//           <div className="flex flex-col gap-1">
//             <h3 className="text-white font-bold text-xl md:text-3xl tracking-tight leading-none drop-shadow-md">{title}</h3>
//             <p className="text-white/40 font-mono text-sm md:text-base">
//               {currentIndex + 1} / {images.length}
//             </p>
//           </div>
//           <button
//             onClick={onClose}
//             className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-90 border border-white/10 shadow-2xl backdrop-blur-xl"
//             aria-label="Close lightbox"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* MAIN VIEWPORT: IMAGE + SIDEBARS */}
//         <div className="relative flex-1 flex flex-col items-center justify-center min-h-0 w-full group/lightbox overflow-hidden rounded-3xl bg-white/5 border border-white/10 shadow-2xl">
          
//           <TransformWrapper
//             key={currentIndex}
//             initialScale={1}
//             minScale={0.4}
//             maxScale={8}
//             centerOnInit={true}
//             wheel={{ step: 0.1, activationKeys: ["Control", "Meta"] }}
//             panning={{ excluded: ['input', 'button', 'no-pan'] }}
//           >
//             {({ zoomIn, zoomOut, resetTransform }) => (
//               <div className="relative w-full h-full flex items-center justify-center">
                
//                 {/* VERTICAL ZOOM CONTROLS (Right Sidebar - Positioned away from Nav Arrow) */}
//                 <div className="absolute right-4 md:right-6 bottom-20 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-[80] flex flex-col gap-3">
//                   <button onClick={() => zoomIn()} className="no-pan w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/70 hover:bg-black/90 flex items-center justify-center text-white backdrop-blur-md transition-all border border-white/20 hover:scale-110 active:scale-95 shadow-xl" title="Zoom In">
//                     <ZoomIn className="w-5 h-5 md:w-6 md:h-6 pointer-events-none" />
//                   </button>
//                   <button onClick={() => zoomOut()} className="no-pan w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/70 hover:bg-black/90 flex items-center justify-center text-white backdrop-blur-md transition-all border border-white/20 hover:scale-110 active:scale-95 shadow-xl" title="Zoom Out">
//                     <ZoomOut className="w-5 h-5 md:w-6 md:h-6 pointer-events-none" />
//                   </button>
//                   <button onClick={() => resetTransform()} className="no-pan w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/70 hover:bg-black/90 flex items-center justify-center text-white backdrop-blur-md transition-all border border-white/20 hover:scale-110 active:scale-95 shadow-xl" title="Reset Zoom">
//                     <RotateCcw className="w-4 h-4 md:w-5 md:h-5 pointer-events-none" />
//                   </button>
//                 </div>

//                 {/* TESTIMONIAL PANEL (Only on Desktop) */}
//                 <div className={`hidden xl:flex absolute left-10 top-1/2 -translate-y-1/2 z-[60] transition-all duration-500 ${showTestimonial ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
//                    <div className="w-[400px] bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-6 relative group/card border-l-8 border-primary overflow-hidden">
//                       <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform duration-700 group-hover/card:scale-150"></div>
                      
//                       <div className="relative z-10 font-medium text-gray-700 italic leading-relaxed">
//                         "I love how easy it is to manage my projects. The design is clean, intuitive, and extremely fast. ImagineeredNest truly knows how to blend aesthetics with high performance."
//                       </div>

//                       <div className="flex items-center gap-4 mt-2">
//                         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shadow-inner">
//                           JP
//                         </div>
//                         <div>
//                           <h4 className="font-bold text-gray-900 leading-none mb-1">James Peterson</h4>
//                           <p className="text-primary font-bold text-[10px] uppercase tracking-wider">Property Manager / Client</p>
//                         </div>
//                       </div>
//                    </div>
//                 </div>

//                 <div className="w-full h-full flex items-center justify-center p-4 md:p-12 overflow-hidden">
//                   <TransformComponent 
//                     wrapperClass="!w-full !h-full flex items-center justify-center" 
//                     contentClass="!w-full !h-full flex items-center justify-center"
//                   >
//                     <img
//                       src={images[currentIndex]}
//                       alt={`${title} - Image ${currentIndex + 1}`}
//                       className="max-w-full max-h-full object-contain origin-center cursor-grab active:cursor-grabbing transition-opacity duration-300 drop-shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
//                       draggable="false"
//                     />
//                   </TransformComponent>
//                 </div>
//               </div>
//             )}
//           </TransformWrapper>
          
//           {/* NAVIGATION ARROWS (Mirrored and properly layered) */}
//           {images.length > 1 && (
//             <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 pointer-events-none z-[90]">
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   prevImg();
//                 }}
//                 className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-90 shadow-2xl backdrop-blur-md pointer-events-auto"
//                 aria-label="Previous image"
//               >
//                 <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
//               </button>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   nextImg();
//                 }}
//                 className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-90 shadow-2xl backdrop-blur-md pointer-events-auto"
//                 aria-label="Next image"
//               >
//                 <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
//               </button>
//             </div>
//           )}
//         </div>

//         {/* BOTTOM SECTION: THUMBNAILS + HINTS */}
//         <div className="mt-8 flex flex-col items-center gap-6 relative z-[70]">
//           {images.length > 1 && (
//             <div 
//               id="thumbnail-container"
//               className="flex overflow-x-auto gap-3 md:gap-5 pb-4 scrollbar-hide snap-x items-center justify-start max-w-full px-6 shrink-0 no-pan"
//             >
//               {images.map((img, i) => (
//                 <button
//                   key={i}
//                   id={`thumb-${i}`}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setCurrentIndex(i);
//                   }}
//                   className={`w-16 h-16 md:w-20 md:h-20 shrink-0 snap-center rounded-xl overflow-hidden border-[3px] transition-all duration-300 shadow-xl ${
//                     i === currentIndex
//                       ? 'border-primary ring-4 ring-primary/20 scale-110'
//                       : 'border-white/10 opacity-40 hover:opacity-100 hover:scale-105'
//                   }`}
//                   aria-label={`View image ${i + 1}`}
//                 >
//                   <img src={img} alt="" className="w-full h-full object-cover" draggable="false" />
//                 </button>
//               ))}
//             </div>
//           )}
          
//           <div className="flex flex-col items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity">
//             <p className="text-center text-white text-[10px] md:text-xs font-black uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
//               <span className="text-primary">ESC</span> to close · <span className="text-primary">Scroll/Pinch</span> to zoom · <span className="text-primary">Drag</span> to pan
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Lightbox;
