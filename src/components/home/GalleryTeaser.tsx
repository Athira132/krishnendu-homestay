import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/gallery';
import { SectionHeading } from '../common/SectionHeading';
import { LightboxModal } from '../common/LightboxModal';

export const GalleryTeaser: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Take top 6 photos for home preview
  const teaserImages = GALLERY_ITEMS.slice(0, 6);

  const openPhoto = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-20 bg-[#FAF7F2] border-t border-[#EADBCE]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PHOTO GLIMPSE"
          title="A Glimpse of Krishnendu Homestay"
          subtitle="Explore authentic photographs of our villa exterior, spacious living hall, clean air-conditioned bedrooms, and amenities."
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {teaserImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openPhoto(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm cursor-pointer border border-stone-200 bg-stone-100"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  if (item.fallbackSrc) {
                    (e.target as HTMLImageElement).src = item.fallbackSrc;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs font-semibold text-white">
                  {item.title}
                </span>
                <span className="text-[11px] text-emerald-300 flex items-center gap-1 mt-0.5">
                  <Eye className="w-3 h-3" />
                  <span>Click to view full photo</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-forest-900 hover:bg-forest-800 text-white text-sm font-semibold tracking-wide shadow-md transition-all"
          >
            <Camera className="w-4 h-4" />
            <span>View All {GALLERY_ITEMS.length} Property Photographs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={teaserImages}
        currentIndex={currentIndex}
        onSelectIndex={setCurrentIndex}
      />
    </section>
  );
};
