'use client';

import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
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
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="relative max-w-6xl w-full h-full flex flex-col pt-4" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between mb-4 px-2 shrink-0">
          <div>
            <h3 className="text-white font-bold text-xl">{title}</h3>
            <p className="text-white/50 text-sm">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="relative flex-1 rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-xl flex group/lightbox">
          <TransformWrapper
            key={currentIndex}
            initialScale={1}
            minScale={0.5}
            maxScale={8}
            centerOnInit={false}
            wheel={{ step: 0.1, activationKeys: ["Control", "Meta"] }}
            panning={{ excluded: ['input', 'button', '.no-pan'] }}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                {/* Zoom Controls Overlay */}
                <div className="absolute top-4 right-4 z-[60] flex flex-col gap-2 opacity-0 group-hover/lightbox:opacity-100 transition-opacity duration-300">
                  <button onClick={() => zoomIn()} className="no-pan w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white backdrop-blur-md transition-all border border-white/10 hover:scale-110 active:scale-95" title="Zoom In">
                    <ZoomIn className="w-5 h-5 pointer-events-none" />
                  </button>
                  <button onClick={() => zoomOut()} className="no-pan w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white backdrop-blur-md transition-all border border-white/10 hover:scale-110 active:scale-95" title="Zoom Out">
                    <ZoomOut className="w-5 h-5 pointer-events-none" />
                  </button>
                  <button onClick={() => resetTransform()} className="no-pan w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white backdrop-blur-md transition-all border border-white/10 hover:scale-110 active:scale-95" title="Reset Zoom">
                    <RotateCcw className="w-4 h-4 pointer-events-none" />
                  </button>
                </div>
                
                {/* Scrollable Container for the Transformed Content */}
                <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth custom-scrollbar">
                  <TransformComponent 
                    wrapperClass="!w-full !min-h-full flex flex-col" 
                    contentClass="!w-full flex-1 flex flex-col"
                  >
                    <img
                      src={images[currentIndex]}
                      alt={`${title} - Image ${currentIndex + 1}`}
                      className="w-full h-auto object-cover origin-top cursor-grab active:cursor-grabbing transition-opacity duration-300"
                      draggable="false"
                    />
                  </TransformComponent>
                </div>
              </>
            )}
          </TransformWrapper>
          
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImg();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-90"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImg();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-90"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div 
            id="thumbnail-container"
            className="flex overflow-x-auto gap-4 mt-6 pb-2 scrollbar-hide snap-x items-center justify-start max-w-full px-4 shrink-0"
          >
            {images.map((img, i) => (
              <button
                key={i}
                id={`thumb-${i}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                className={`w-16 h-16 shrink-0 snap-center rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  i === currentIndex
                    ? 'border-primary ring-2 ring-primary/30 scale-110'
                    : 'border-white/20 opacity-60 hover:opacity-100 hover:scale-105'
                }`}
                aria-label={`View image ${i + 1}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" draggable="false" />
              </button>
            ))}
          </div>
        )}
        
        <p className="text-center text-white/30 text-xs mt-3 mb-4 font-medium shrink-0">
          Press <span className="text-white/50">ESC</span> to close · <span className="text-white/50">Scroll/Pinch</span> to zoom · <span className="text-white/50">Drag</span> to pan
        </p>
      </div>
    </div>
  );
};

export default Lightbox;
