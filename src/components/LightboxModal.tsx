import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Tag, Calendar } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const currentIndex = items.findIndex(i => i.id === item.id);
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onNavigate(prevIndex);
      }
      if (e.key === 'ArrowRight') {
        const currentIndex = items.findIndex(i => i.id === item.id);
        const nextIndex = (currentIndex + 1) % items.length;
        onNavigate(nextIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex(i => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prevIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(nextIndex);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        id="lightbox-close-btn"
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        aria-label="Close Preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        id="lightbox-prev-btn"
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        id="lightbox-next-btn"
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Container */}
      <div 
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Image */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] max-h-[60vh] overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-contain max-h-[60vh]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption & Category Metadata */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white space-y-2 border-t border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {item.category}
              </span>
              {item.location && (
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  {item.location}
                </span>
              )}
            </div>
            
            <span className="text-xs text-slate-400">
              {currentIndex + 1} of {items.length}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white">
            {item.title}
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {item.description}
          </p>

          {/* Mobile Prev / Next Controls */}
          <div className="flex sm:hidden justify-between pt-3 border-t border-slate-800">
            <button
              onClick={handlePrev}
              className="px-4 py-1.5 rounded-lg bg-slate-800 text-white text-xs font-medium flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-1.5 rounded-lg bg-slate-800 text-white text-xs font-medium flex items-center gap-1"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
