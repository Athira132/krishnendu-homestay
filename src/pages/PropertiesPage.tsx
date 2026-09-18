import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, MessageCircle, Check, Sparkles } from 'lucide-react';
import { PROPERTIES } from '../data/properties';
import { SEOHead } from '../components/common/SEOHead';

interface PropertiesPageProps {
  onOpenWhatsApp: (message?: string) => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({ onOpenWhatsApp }) => {
  const [filter, setFilter] = useState<'all' | 'ready' | 'upcoming'>('all');

  const filteredProperties = PROPERTIES.filter((p) => {
    if (filter === 'ready') return !p.isComingSoon;
    if (filter === 'upcoming') return p.isComingSoon;
    return true;
  });

  return (
    <div className="pt-24 pb-20 bg-ivory min-h-screen">
      <SEOHead
        title="Our Properties & Stays"
        description="Explore comfortable stays and homestay accommodations in Guruvayur under the Krishnendu brand. Browse photos, amenities, and enquire via WhatsApp."
      />

      {/* Page Header */}
      <div className="bg-forest-950 text-white py-16 px-4 sm:px-6 lg:px-8 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/hero-about.png"
            alt="Krishnendu Homestay"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-xs font-semibold tracking-wider text-emerald-300 uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>COLLECTION OF STAYS</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Explore Our Stays
          </h1>
          <p className="text-base sm:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed">
            Find a comfortable place to stay in Guruvayur and discover our growing collection of properties.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-forest-900 text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            All Properties ({PROPERTIES.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('ready')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
              filter === 'ready'
                ? 'bg-forest-900 text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            Ready for Enquiries
          </button>
          <button
            type="button"
            onClick={() => setFilter('upcoming')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
              filter === 'upcoming'
                ? 'bg-forest-900 text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            Coming Soon ({PROPERTIES.filter((p) => p.isComingSoon).length})
          </button>
        </div>

        {/* Properties Listing Cards */}
        <div className="space-y-12">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className={`bg-white rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 ${
                property.isComingSoon ? 'border-dashed border-stone-300' : 'border-[#EADBCE]'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Image Column */}
                <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden group">
                  <img
                    src={property.heroImage}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://i.ibb.co/RGGM36Cm/905c3c9d-34ba-4172-96bd-c13d6149d598-1.jpg';
                    }}
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span
                      className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        property.isComingSoon
                          ? 'bg-stone-800 text-stone-100'
                          : 'bg-emerald-700 text-white'
                      }`}
                    >
                      {property.statusBadge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-forest-950/80 backdrop-blur-md text-white text-xs flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                        {property.tagLine}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mt-1">
                        {property.name}
                      </h2>
                    </div>

                    <p className="text-stone-600 text-sm leading-relaxed">
                      {property.shortDescription}
                    </p>

                    {/* Highlights */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-600">
                        {property.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                              <Check className="w-2 h-2 stroke-[3]" />
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {property.isComingSoon && (
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-500 italic">
                        Notice: This property card is a placeholder awaiting confirmed layout, amenities, and room pricing details.
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-8 mt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      to={`/properties/${property.slug}`}
                      className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors"
                    >
                      <span>View Property Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        onOpenWhatsApp(
                          `Namaste! I would like to enquire about ${property.name} in Guruvayur.`
                        )
                      }
                      className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Enquire on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
