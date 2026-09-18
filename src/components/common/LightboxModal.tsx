import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../../types';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryItem[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onSelectIndex,
}) => {
  const handlePrev = useCallback(() => {
    onSelectIndex((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    onSelectIndex((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onSelectIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity">
      {/* Top action bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
        <div className="text-xs sm:text-sm font-medium tracking-wider text-stone-300">
          {currentIndex + 1} / {images.length}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev / Next controls */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all z-10 cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all z-10 cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Center Image and caption */}
      <div className="max-w-5xl max-h-[85vh] p-4 flex flex-col items-center justify-center">
        <div className="relative max-h-[75vh] flex items-center justify-center">
          <img
            src={currentItem.src}
            alt={currentItem.alt}
            className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl transition-transform duration-200"
            onError={(e) => {
              if (currentItem.fallbackSrc) {
                (e.target as HTMLImageElement).src = currentItem.fallbackSrc;
              }
            }}
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center text-stone-200 max-w-xl">
          <h4 className="font-serif text-base sm:text-lg font-semibold text-white">
            {currentItem.title}
          </h4>
          <p className="text-xs text-stone-400 mt-1">
            {currentItem.alt}
          </p>
        </div>
      </div>
    </div>
  );
};
