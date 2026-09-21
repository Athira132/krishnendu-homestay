import React from 'react';
import { HeroBanner } from '../components/home/HeroBanner';
import { HighlightsSection } from '../components/home/HighlightsSection';
import { PropertyShowcase } from '../components/home/PropertyShowcase';
import { GuruvayurTeaser } from '../components/home/GuruvayurTeaser';
import { GalleryTeaser } from '../components/home/GalleryTeaser';
import { SEOHead } from '../components/common/SEOHead';
import { BRAND } from '../data/brand';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';

interface HomePageProps {
  onOpenWhatsApp: (message?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenWhatsApp }) => {
  return (
    <>
      <SEOHead
        title="Guruvayur Homestay | Rooms & Peaceful Accommodation Near Guruvayur Temple"
        description="Looking for a peaceful homestay in Guruvayur? Krishnendu Homestay offers clean AC rooms, family accommodation, and warm Kerala hospitality near sacred Guruvayur Temple."
        canonicalPath="/"
      />

      {/* Hero Banner with Guruvayur scenic visuals */}
      <HeroBanner onOpenWhatsApp={() => onOpenWhatsApp()} />

      {/* Property Showcase (Main Krishnendu Homestay + Upcoming Properties) */}
      <PropertyShowcase onOpenWhatsApp={onOpenWhatsApp} />

      {/* Highlights & Hospitality Values */}
      <HighlightsSection />

      {/* Explore Guruvayur Teaser */}
      <GuruvayurTeaser />

      {/* Verified Photo Gallery Mosaic */}
      <GalleryTeaser />

      {/* Direct Contact & Planning CTA Banner */}
      <section className="py-16 bg-forest-900 text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-xs font-semibold tracking-wider text-emerald-300 uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>PLANNING YOUR GURUVAYUR DARSHAN?</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            We are Here to Welcome You
          </h2>

          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether arriving with family for temple darshan or seeking a tranquil retreat in North Nada, our team is ready to assist you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenWhatsApp('Namaste Krishnendu Homestay! I would like to plan a stay for our temple visit.')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm tracking-wide shadow-lg transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </button>

            <a
              href={`tel:${BRAND.phones[0]}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-wide border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 {BRAND.phones[0]}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
