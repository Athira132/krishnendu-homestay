import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Sparkles,
  ArrowRight,
  Home,
  Check,
  Eye,
  MessageCircle,
} from 'lucide-react';
import { BRAND } from '../data/brand';
import { GALLERY_ITEMS } from '../data/gallery';
import { SEOHead } from '../components/common/SEOHead';
import { SectionHeading } from '../components/common/SectionHeading';
import { LightboxModal } from '../components/common/LightboxModal';

interface AboutPageProps {
  onOpenWhatsApp?: (message?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenWhatsApp }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const glimpseImages = GALLERY_ITEMS.slice(0, 6);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-24 pb-20 bg-ivory min-h-screen">
      <SEOHead
        title="About Us | Peaceful Homestay & Hospitality in Guruvayur"
        description="Discover the story of Krishnendu Homestay in North Nada, Guruvayur. Providing pilgrims and visiting families with peaceful rooms, clean amenities, and warm Kerala hospitality."
        canonicalPath="/about"
      />

      {/* Hero Banner inspired directly by ref_about.png */}
      <div className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center bg-forest-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-about.png"
            alt="Krishnendu Homestay Villa and Surrounding Palms"
            className="w-full h-full object-cover object-right sm:object-center"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://i.ibb.co/WN1rnZWr/Chat-GPT-Image-Sep-17-2026-03-11-11-PM.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/75 to-transparent" />
          <div className="absolute inset-0 bg-forest-950/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-xs font-semibold tracking-wider text-emerald-300 uppercase mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>OUR STORY & VALUES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight">
              A Homely Retreat in Guruvayur
            </h1>

            <p className="text-lg sm:text-xl text-emerald-300 font-medium mb-6">
              Warm Hospitality. Peaceful Stays. Meaningful Journeys.
            </p>

            <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-xl">
              {BRAND.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Section: Our Story */}
      <section className="py-20 bg-white border-b border-[#EADBCE]/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full">
                OUR STORY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
                A Welcoming Accommodation in North Nada
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                KRISHNENDU HOMESTAY was established to offer pilgrims, devotees, and traveling families a genuine, peaceful stay in Guruvayur. We understand that a pilgrimage is a deeply personal and sacred journey — one where restful sleep, cleanliness, and gentle hospitality make all the difference.
              </p>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                Located in the quiet North Nada residential area, away from heavy temple town traffic yet within easy reach of the sacred shrines, our homestay provides a comfortable sanctuary. Guests can prepare peacefully for pre-dawn Nirmalya darshans and return to quiet rooms to reflect and recharge.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-[#EADBCE] shadow-lg aspect-[4/5] bg-stone-100 relative group">
                <img
                  src="/images/gallery/gal-6.jpg"
                  alt="Krishnendu Homestay Villa Exterior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-forest-950/85 backdrop-blur-sm text-white text-xs">
                  <div className="font-semibold">{BRAND.name}</div>
                  <div className="text-emerald-300 text-[11px]">{BRAND.locationName}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Our Hospitality */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#EADBCE]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="AUTHENTIC CARE"
            title="Our Hospitality Experience"
            subtitle="Thoughtful touches designed to make your pilgrimage smooth, comfortable, and memorable."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center mb-5">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-950 mb-3">
                A Peaceful Homely Ambiance
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Enjoy peaceful relaxation in our spacious living hall adorned with traditional carved Kerala pillars, comfortable sofa suites, and devotional decor.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-950 mb-3">
                Immaculate Hygiene Standards
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Spotlessly maintained bedrooms with fresh linens, sanitized attached bathrooms, and clean tiled floors guarantee a hygienic stay for families.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center mb-5">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-950 mb-3">
                Attentive Kerala Hospitality
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Warm and courteous support for darshan timings, temple dress code guidance, local taxi coordination, and flexible group enquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Why Stay With Us */}
      <section className="py-20 bg-ivory border-b border-[#EADBCE]/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CONFIRMED HIGHLIGHTS"
            title="Why Stay With Us?"
            subtitle="Every detail verified for your peace of mind."
          />

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EADBCE] shadow-sm space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-forest-950">
                  Peaceful Stay in Guruvayur
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  Located in a serene residential pocket in North Nada, offering tranquility without the noise of commercial hotel streets.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-forest-950">
                  Convenient Access to Places of Worship & Local Attractions
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  Easy connectivity to Guruvayur Sri Krishna Temple, Mammiyoor Mahadeva Temple, Parthasarathy Temple, and transit centers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-forest-950">
                  Comfortable Atmosphere for Families & Pilgrims
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  Spacious family bedroom setups, full teak headboards, attached western bathrooms, and an open living hall suitable for multi-generational families.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-forest-950">
                  Warm, Honest Hospitality
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  Direct communication with the host via phone and WhatsApp with no hidden middleman fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: A Glimpse of Our Stay */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="PHOTO ARCHIVE"
            title="A Glimpse of Our Stay"
            subtitle="Verified photographs of our property exterior, living hall, bedrooms, and amenities."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {glimpseImages.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 cursor-pointer shadow-sm"
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
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-3 text-center">
                  <Eye className="w-6 h-6 mb-1 text-emerald-300" />
                  <span className="text-xs font-semibold">{item.title}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-forest-900 hover:bg-forest-800 text-white text-sm font-semibold tracking-wide shadow-md transition-all"
            >
              <span>Discover Our Properties</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {onOpenWhatsApp && (
              <button
                type="button"
                onClick={() => onOpenWhatsApp('Namaste Krishnendu Homestay! I would like to enquire about staying with you.')}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold tracking-wide shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enquire on WhatsApp</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={glimpseImages}
        currentIndex={lightboxIndex}
        onSelectIndex={setLightboxIndex}
      />
    </div>
  );
};
