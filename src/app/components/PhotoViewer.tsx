import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { createPortal } from 'react-dom';

export type PhotoViewerImage = {
  src: string;
  alt: string;
};

type PhotoViewerProps = {
  images: PhotoViewerImage[];
  initialIndex: number;
  onClose: () => void;
};

export function PhotoViewer({ images, initialIndex, onClose }: PhotoViewerProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const hasMultipleImages = images.length > 1;

  const showPrevious = () => setActiveIndex((index) => (index - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % images.length);

  useEffect(() => {
    setActiveIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (hasMultipleImages && event.key === 'ArrowLeft') showPrevious();
      if (hasMultipleImages && event.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hasMultipleImages, onClose]);

  if (!images.length) return null;
  const activeImage = images[activeIndex];

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#17242a]/95 p-5 sm:p-10"
      role="dialog"
      aria-modal="true"
      aria-label="Просмотр фотографии"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button type="button" onClick={onClose} aria-label="Закрыть просмотрщик" className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-white/25 bg-black/20 text-white transition-colors hover:bg-white hover:text-[#50626C] sm:right-7 sm:top-7">
        <X size={24} />
      </button>

      {hasMultipleImages && (
        <button type="button" onClick={showPrevious} aria-label="Предыдущая фотография" className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 bg-black/20 text-white transition-colors hover:bg-white hover:text-[#50626C] sm:left-7 sm:h-12 sm:w-12">
          <ChevronLeft size={25} />
        </button>
      )}

      <figure className="flex max-h-full max-w-full flex-col items-center">
        <img src={activeImage.src} alt={activeImage.alt} className="max-h-[calc(100vh-8rem)] max-w-full object-contain shadow-2xl" />
        <figcaption className="mt-4 text-center text-sm text-white/70">{activeImage.alt}</figcaption>
      </figure>

      {hasMultipleImages && (
        <button type="button" onClick={showNext} aria-label="Следующая фотография" className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 bg-black/20 text-white transition-colors hover:bg-white hover:text-[#50626C] sm:right-7 sm:h-12 sm:w-12">
          <ChevronRight size={25} />
        </button>
      )}
    </div>,
    document.body,
  );
}
