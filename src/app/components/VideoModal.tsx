// src/components/VideoModal.tsx
'use client';
import { useEffect, useRef } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

const VideoModal = ({ isOpen, onClose, videoSrc }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-[2000] flex items-center justify-center" onClick={onClose}>
      <div className="relative w-[90%] max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <video ref={videoRef} controls className="w-full h-auto rounded-lg">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <button onClick={onClose} className="absolute -top-10 right-0 text-white text-4xl font-bold hover:text-primary transition">
          &times;
        </button>
      </div>
    </div>
  );
};

export default VideoModal;