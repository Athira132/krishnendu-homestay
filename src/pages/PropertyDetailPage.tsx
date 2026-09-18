import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  MapPin,
  Check,
  ArrowRight,
  Info,
  Phone,
  Eye,
} from 'lucide-react';
import { PROPERTIES } from '../data/properties';
import { BRAND } from '../data/brand';
import { SEOHead } from '../components/common/SEOHead';
import { LightboxModal } from '../components/common/LightboxModal';
import { WhatsAppEnquiryForm } from '../components/contact/WhatsAppEnquiryForm';
import { GALLERY_ITEMS } from '../data/gallery';
import type { GalleryItem } from '../types';

interface PropertyDetailPageProps {
  onOpenWhatsApp?: (message?: string) => void;
}

export const PropertyDetailPage: React.FC<PropertyDetailPageProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const property = PROPERTIES.find((p) => p.slug === slug);

  if (!property) {
    return <Navigate to="/properties" replace />;
  }

  // Get typed gallery items for this property
  const propertyGallery: GalleryItem[] =
    property.id === 'krishnendu-homestay'
      ? GALLERY_ITEMS
      : property.galleryImages.map((src, i) => ({
          id: `prop-${i}`,
          src,
          fallbackSrc: src,
          alt: `${property.name} Photo ${i + 1}`,
          title: `${property.name} View`,
          category: 'exterior' as const,
        }));

  const otherProperties = PROPERTIES.filter((p) => p.id !== property.id);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-20 pb-20 bg-ivory min-h-screen">
      <SEOHead
        title={property.name}
        description={`${property.name} in Guruvayur, Kerala. ${property.shortDescription}`}
      />

      {/* Property Hero Banner */}
      <div className="relative min-h-[50vh] sm:min-h-[60vh] flex items-end pb-12 pt-20 bg-forest-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={property.heroImage}
            alt={property.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://i.ibb.co/RGGM36Cm/905c3c9d-34ba-4172-96bd-c13d6149d598-1.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-700 text-white shadow">
                {property.statusBadge}
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-md text-stone-200">
                {property.tagLine}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-3">
              {property.name}
            </h1>

            <div className="flex items-center gap-2 text-stone-300 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{property.location}</span>
              <span className="opacity-40">•</span>
              <span className="text-emerald-300">{property.landmark}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview & Description */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EADBCE] shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-forest-950 mb-4 pb-2 border-b border-stone-100">
                About the Property
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                {property.fullDescription.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Highlights Checkmark Grid */}
              <div className="mt-8 pt-6 border-t border-stone-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-3">
                  Key Stay Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-charcoal-700">
                  {property.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo Gallery Grid with Lightbox */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EADBCE] shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-forest-950">
                    Property Photo Gallery
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Click on any image to view in high resolution
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openLightbox(0)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-600 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Lightbox</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {propertyGallery.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(index)}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 cursor-pointer border border-stone-200"
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
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Confirmed Amenities */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EADBCE] shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
                  VERIFIED COMFORTS
                </span>
                <h2 className="font-serif text-2xl font-bold text-forest-950 mt-2">
                  Confirmed Amenities & Facilities
                </h2>
                <p className="text-xs text-stone-500 mt-1">
                  We show only verified amenities available at our homestay.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.confirmedAmenities.map((amenity, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-forest-950">
                        {amenity.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                        {amenity.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Room Types (Editable Placeholders) */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EADBCE] shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full">
                  ROOM CONFIGURATIONS
                </span>
                <h2 className="font-serif text-2xl font-bold text-forest-950 mt-2">
                  Available Room Options
                </h2>
                <p className="text-xs text-stone-500 mt-1">
                  Room tariffs and exact configurations will be confirmed upon WhatsApp enquiry.
                </p>
              </div>

              <div className="space-y-4">
                {property.roomTypes.map((room, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl border border-stone-200 bg-white hover:border-emerald-300 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h3 className="font-serif text-lg font-bold text-forest-950">
                        {room.name}
                      </h3>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 text-stone-700 w-fit">
                        {room.capacity}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3">
                      {room.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-stone-100 text-xs text-stone-500">
                      <span>Bed Configuration: <strong>{room.bedType}</strong></span>
                      <span className="text-emerald-700 font-medium italic">{room.statusNote}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Directions Note */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EADBCE] shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-forest-950 mb-4">
                Location & Accessibility
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                {property.locationNote}
              </p>
              <div className="p-4 rounded-2xl bg-forest-50 border border-forest-200/60 text-xs text-forest-900 leading-relaxed flex items-start gap-3">
                <Info className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Devotee Notice: </span>
                  Road distances and driving time may vary during temple festival seasons and Ekadasi celebrations. Our caretaker is happy to assist you with directions upon your arrival in Guruvayur.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Enquiry Form */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-28">
              <WhatsAppEnquiryForm initialPropertySlug={property.slug} />

              <div className="mt-6 bg-forest-900 text-white rounded-3xl p-6 shadow-md border border-emerald-800">
                <h3 className="font-serif text-lg font-bold mb-2">
                  Need Immediate Assistance?
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed mb-4">
                  Speak directly with our homestay host for immediate availability checks, arrival directions, or darshan guidance.
                </p>

                <div className="space-y-2.5 text-xs">
                  <a
                    href={`tel:${BRAND.phones[0]}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-forest-800/80 hover:bg-forest-800 border border-emerald-700/50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <span>Line 1: +91 {BRAND.phones[0]}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-300">Call Now</span>
                  </a>

                  <a
                    href={`tel:${BRAND.phones[1]}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-forest-800/80 hover:bg-forest-800 border border-emerald-700/50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <span>Line 2: +91 {BRAND.phones[1]}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-300">Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Properties You May Like */}
        {otherProperties.length > 0 && (
          <div className="mt-20 pt-12 border-t border-stone-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-forest-950">
                  Other Properties You May Like
                </h3>
                <p className="text-xs sm:text-sm text-stone-500">
                  Explore other stays in our collection
                </p>
              </div>
              <Link
                to="/properties"
                className="text-xs font-semibold text-emerald-800 hover:text-emerald-600 flex items-center gap-1"
              >
                <span>All Properties</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProperties.map((other) => (
                <div
                  key={other.id}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-video relative overflow-hidden bg-stone-100">
                      <img
                        src={other.heroImage}
                        alt={other.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-stone-800 text-white">
                        {other.statusBadge}
                      </span>
                    </div>
                    <div className="p-5">
                      <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
                        {other.location}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-forest-950 mb-2">
                        {other.name}
                      </h4>
                      <p className="text-xs text-stone-600 line-clamp-2">
                        {other.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      to={`/properties/${other.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-800 hover:text-forest-600"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={propertyGallery}
        currentIndex={lightboxIndex}
        onSelectIndex={setLightboxIndex}
      />
    </div>
  );
};
