import React, { useState } from 'react';
import { Camera, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';
import { SEOHead } from '../components/common/SEOHead';
import { LightboxModal } from '../components/common/LightboxModal';
import type { GalleryItem } from '../types';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    { key: 'all', label: 'All Photos', count: GALLERY_ITEMS.length },
    {
      key: 'exterior',
      label: 'Exterior & Entrance',
      count: GALLERY_ITEMS.filter((i) => i.category === 'exterior').length,
    },
    {
      key: 'living',
      label: 'Living Hall & Lounge',
      count: GALLERY_ITEMS.filter((i) => i.category === 'living').length,
    },
    {
      key: 'rooms',
      label: 'Rooms & Bedding',
      count: GALLERY_ITEMS.filter((i) => i.category === 'rooms').length,
    },
    {
      key: 'bathrooms',
      label: 'Bathrooms & Amenities',
      count: GALLERY_ITEMS.filter((i) => i.category === 'bathrooms').length,
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((i) => i.id === item.id);
    setLightboxIndex(idx !== -1 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-24 pb-20 bg-ivory min-h-screen">
      <SEOHead
        title="Photo Gallery | Homestay Rooms & Facilities in Guruvayur"
        description="Browse authentic photographs of Krishnendu Homestay in Guruvayur: bedroom accommodations, spacious living hall, clean modern bathrooms, and gated grounds."
        canonicalPath="/gallery"
      />

      {/* Page Header */}
      <div className="bg-forest-950 text-white py-16 px-4 sm:px-6 lg:px-8 mb-12 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-xs font-semibold tracking-wider text-emerald-300 uppercase mb-4">
            <Camera className="w-3.5 h-3.5 text-gold-400" />
            <span>VISUAL PORTFOLIO</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Property Photo Gallery — Guruvayur
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed">
            Take a visual tour through KRISHNENDU HOMESTAY. Browse authentic images of our property grounds, living hall, guest bedrooms, and clean amenities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-forest-900 text-white shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat.key ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-500'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Editorial Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="bg-white rounded-3xl overflow-hidden border border-[#EADBCE] shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    if (item.fallbackSrc) {
                      (e.target as HTMLImageElement).src = item.fallbackSrc;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-md">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md inline-block mb-1.5">
                  {item.category}
                </span>
                <h3 className="font-serif text-base font-bold text-forest-950 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-500 line-clamp-2">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onSelectIndex={setLightboxIndex}
      />
    </div>
  );
};
