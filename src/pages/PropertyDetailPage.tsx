import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  MapPin,
  Check,
  ArrowRight,
  Info,
  Phone,
  Eye,
  Clock,
  Compass,
  ExternalLink,
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

  const propertySeoData = {
    'krishnendu-homestay': {
      title: 'KRISHNENDU HOMESTAY | Peaceful Homestay in North Nada, Guruvayur',
      description:
        'Book your peaceful stay at KRISHNENDU HOMESTAY in North Nada, Guruvayur. Clean AC rooms, traditional Kerala hospitality, and convenient temple darshan access.',
      keywords:
        'Guruvayur homestay, Homestay in Guruvayur, North Nada homestay, Stay near Guruvayur Temple, Rooms in Guruvayur, Krishnendu Homestay',
      address: 'North Nada, Guruvayur, Thrissur District, Kerala 680101',
    },
    'krishnendhu-residency': {
      title: 'Krishnendhu Residency | Rooms & Stay in South Nada, Guruvayur',
      description:
        'Stay at Krishnendhu Residency on Edappully Road, South Nada, Guruvayur. Comfortable rooms, peaceful pilgrimage environment, and easy temple access.',
      keywords:
        'Rooms in Guruvayur, Guruvayur accommodation, Krishnendhu Residency Guruvayur, South Nada stay, Edappully Road accommodation',
      address: 'Edappully Road, South Nada, Guruvayur, Thrissur District, Kerala 680101',
    },
    'sivaranjini-tourist-home': {
      title: 'Sivaranjini Tourist Home | Guruvayur Accommodation in East Nada',
      description:
        'Convenient accommodation in East Nada, Guruvayur at Sivaranjini Tourist Home. Located on Rugmini Reagency Road near transit hubs and temple entrance.',
      keywords:
        'Guruvayur tourist home, Guruvayur accommodation, East Nada stay, Sivaranjini Tourist Home, Rugmini Reagency Road Guruvayur',
      address: 'Rugmini Reagency Road, East Nada, Guruvayur, Thrissur District, Kerala 680101',
    },
  }[property.id] || {
    title: `${property.name} | Accommodation in Guruvayur`,
    description: `${property.name} in Guruvayur, Kerala. ${property.shortDescription}`,
    keywords: 'Guruvayur homestay, Guruvayur accommodation, Stay near Guruvayur Temple',
    address: `${property.location}, Guruvayur, Kerala`,
  };

  const propertyStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: property.name,
    description: property.shortDescription,
    image: property.heroImage,
    telephone: BRAND.phones.map((p) => `+91${p}`),
    address: {
      '@type': 'PostalAddress',
      streetAddress: propertySeoData.address,
      addressLocality: 'Guruvayur',
      addressRegion: 'Kerala',
      postalCode: '680101',
      addressCountry: 'IN',
    },
  };

  return (
    <div className="pt-20 pb-20 bg-ivory min-h-screen">
      <SEOHead
        title={propertySeoData.title}
        description={propertySeoData.description}
        keywords={propertySeoData.keywords}
        canonicalPath={`/properties/${property.slug}`}
        ogImage={property.heroImage}
        structuredData={propertyStructuredData}
      />

      {/* Compact Photographic Hero Banner */}
      <div className="relative h-[32vh] sm:h-[40vh] flex items-end bg-forest-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={property.heroImage}
            alt={`${property.name} Exterior View in Guruvayur`}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://i.ibb.co/RGGM36Cm/905c3c9d-34ba-4172-96bd-c13d6149d598-1.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-black/20" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        {/* Breadcrumbs & Property Header Section Below Hero */}
        <div className="mb-8 pb-6 border-b border-stone-200">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-stone-500 mb-3">
            <Link to="/" className="hover:text-forest-800 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-forest-800 transition-colors">Our Properties</Link>
            <span>/</span>
            <span className="text-forest-900 font-semibold">{property.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              {property.logoImage && (
                <div className="mb-3.5">
                  <img
                    src={property.logoImage}
                    alt={`${property.name} Dedicated Logo`}
                    className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm"
                  />
                </div>
              )}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-700 text-white shadow-sm">
                  {property.statusBadge || 'Direct Booking Available'}
                </span>
                <span className="px-3 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                  {property.tagLine}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 tracking-tight mb-2">
                {property.name}
              </h1>

              <div className="flex flex-wrap items-center gap-2 text-stone-600 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-medium text-forest-900">{property.location}</span>
                </div>
                <span className="opacity-40 hidden sm:inline">•</span>
                <span className="text-emerald-800 font-medium">{property.landmark}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={property.googleMapsUrl || BRAND.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-stone-300 hover:border-emerald-600 bg-white text-forest-900 text-xs font-semibold transition-all shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview & Description */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EADBCE] shadow-sm">
              <h2 className="text-2xl font-bold text-forest-950 mb-4 pb-2 border-b border-stone-100">
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
                  <h2 className="text-2xl font-bold text-forest-950">
                    Property Photo Gallery
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Showing {propertyGallery.length} verified photos. Click on any image to enlarge.
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
            {property.confirmedAmenities && property.confirmedAmenities.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EADBCE] shadow-sm">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
                    VERIFIED COMFORTS
                  </span>
                  <h2 className="text-2xl font-bold text-forest-950 mt-2">
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
            )}

            {/* Available Room Types */}
            {property.roomTypes && property.roomTypes.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EADBCE] shadow-sm">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full">
                    ROOM CONFIGURATIONS
                  </span>
                  <h2 className="text-2xl font-bold text-forest-950 mt-2">
                    Available Room Options
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Room tariffs and exact configurations are confirmed upon WhatsApp enquiry.
                  </p>
                </div>

                <div className="space-y-4">
                  {property.roomTypes.map((room, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl border border-stone-200 bg-white hover:border-emerald-300 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-forest-950">
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
            )}

            {/* Location & Directions */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EADBCE] shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
                  LOCATION & MAP
                </span>
                <h2 className="text-2xl font-bold text-forest-950 mt-2">
                  Address & Location Details
                </h2>
                <p className="text-xs text-stone-500 mt-1">
                  Convenient proximity to Guruvayur Sri Krishna Temple and local transit.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 mb-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-forest-950">{property.name}</h3>
                    <p className="text-xs sm:text-sm text-stone-700">{property.location}</p>
                    <p className="text-xs text-emerald-800 font-medium">{property.landmark}</p>
                    <p className="text-xs text-stone-500 pt-1">{property.locationNote}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center justify-between">
                  <span className="text-xs text-stone-500">Need navigation assistance?</span>
                  <a
                    href={property.googleMapsUrl || BRAND.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-forest-50 border border-forest-200/60 text-xs text-forest-900 leading-relaxed flex items-start gap-3">
                <Info className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Devotee Notice: </span>
                  Road distances and walking times may vary during festival days and Ekadasi celebrations. Our caretaker is available on phone and WhatsApp to assist you with live arrival directions.
                </div>
              </div>
            </div>

            {/* Nearby Attractions with Walking & Driving Times */}
            {property.nearbyAttractions && property.nearbyAttractions.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EADBCE] shadow-sm">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
                    TEMPLE & TRANSIT ACCESS
                  </span>
                  <h2 className="text-2xl font-bold text-forest-950 mt-2">
                    Nearby Attractions & Landmarks
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Approximate walking and driving distances from {property.name}.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {property.nearbyAttractions.map((attr, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center flex-shrink-0">
                          <Compass className="w-4 h-4 text-emerald-700" />
                        </div>
                        <div>
                          <h3 className="text-xs sm:text-sm font-semibold text-forest-950">
                            {attr.name}
                          </h3>
                          <p className="text-[11px] text-stone-500">{attr.distance}</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-full whitespace-nowrap flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-700" />
                        <span>{attr.travelTime}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: WhatsApp Enquiry Form */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-28">
              <WhatsAppEnquiryForm initialPropertySlug={property.slug} />

              <div className="mt-6 bg-forest-900 text-white rounded-3xl p-6 shadow-md border border-emerald-800">
                <h3 className="text-lg font-bold mb-2">
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

        {/* Other Properties Under Krishnendu Brand */}
        {otherProperties.length > 0 && (
          <div className="mt-20 pt-12 border-t border-stone-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-forest-950">
                  Other Properties Under Krishnendu Brand
                </h3>
                <p className="text-xs sm:text-sm text-stone-500">
                  Explore other stay choices in our collection
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherProperties.map((other) => (
                <div
                  key={other.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#EADBCE] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[16/10] relative overflow-hidden bg-stone-100">
                      <img
                        src={other.heroImage}
                        alt={other.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-forest-900/90 text-white">
                        {other.tagLine}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-1 text-xs font-medium text-emerald-800 mb-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{other.location}</span>
                      </div>
                      <h4 className="text-xl font-bold text-forest-950 mb-2">
                        {other.name}
                      </h4>
                      <p className="text-xs text-stone-600 line-clamp-2">
                        {other.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
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
