import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, MessageCircle, Sparkles, Check, Clock } from 'lucide-react';
import { PROPERTIES } from '../../data/properties';
import { getWhatsAppLink } from '../../data/brand';
import { SectionHeading } from '../common/SectionHeading';

interface PropertyShowcaseProps {
  onOpenWhatsApp?: (message?: string) => void;
}

export const PropertyShowcase: React.FC<PropertyShowcaseProps> = ({ onOpenWhatsApp }) => {
  const mainProperty = PROPERTIES.find((p) => p.id === 'krishnendu-homestay') || PROPERTIES[0];
  const upcomingProperties = PROPERTIES.filter((p) => p.id !== 'krishnendu-homestay');

  return (
    <section className="py-20 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="ACCOMMODATION PORTFOLIO"
          title="Find Your Perfect Stay"
          subtitle="Discover comfortable stays and warm hospitality in Guruvayur."
        />

        {/* Featured Main Property Card (Large Editorial Format) */}
        <div className="mb-16 bg-white rounded-3xl shadow-xl shadow-stone-200/60 border border-[#EADBCE] overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left/Top: Image Showcase */}
            <div className="lg:col-span-7 relative group overflow-hidden min-h-[340px] lg:min-h-[460px]">
              <img
                src={mainProperty.heroImage}
                alt={mainProperty.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://i.ibb.co/RGGM36Cm/905c3c9d-34ba-4172-96bd-c13d6149d598-1.jpg';
                }}
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-900 text-white shadow-md">
                  Featured Property
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-600 text-white shadow-md">
                  {mainProperty.statusBadge}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-forest-950/80 backdrop-blur-md text-white text-xs sm:text-sm flex items-center justify-between border border-white/10">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="font-medium">{mainProperty.location}</span>
                </div>
                <span className="text-emerald-300 text-xs hidden sm:inline">
                  North Nada Vicinity
                </span>
              </div>
            </div>

            {/* Right/Bottom: Property Details & Actions */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-white">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Main Property</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                  {mainProperty.name}
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed">
                  {mainProperty.shortDescription}
                </p>

                {/* Key Highlights bullet list */}
                <div className="pt-2 border-t border-stone-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2.5">
                    Property Highlights
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-600">
                    {mainProperty.highlights.slice(0, 4).map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 mt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to={`/properties/${mainProperty.slug}`}
                  className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-sm font-semibold tracking-wide transition-colors shadow-sm"
                >
                  <span>View Property</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppLink(
                    undefined,
                    `Namaste Krishnendu Homestay! I would like to enquire about staying at ${mainProperty.name} in Guruvayur.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold tracking-wide transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Property Showcase Grid: Upcoming Properties */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-200">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                Additional Properties Under Krishnendu Brand
              </h3>
              <p className="text-xs sm:text-sm text-stone-500">
                Expanding comfortable accommodation choices across Guruvayur
              </p>
            </div>
            <Link
              to="/properties"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-600 transition-colors"
            >
              <span>View All Properties</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {upcomingProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-white rounded-2xl border border-dashed border-[#D4A373] p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="relative rounded-xl overflow-hidden mb-4 bg-stone-100 aspect-video">
                    <img
                      src={prop.heroImage}
                      alt={prop.name}
                      className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-stone-800/90 text-stone-100 backdrop-blur-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{prop.statusBadge}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{prop.location}</span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-forest-900 mb-2">
                    {prop.name}
                  </h4>

                  <p className="text-xs text-stone-500 leading-relaxed line-clamp-3">
                    {prop.shortDescription}
                  </p>

                  <div className="mt-3 p-2 rounded-lg bg-stone-50 text-[11px] text-stone-500 italic border border-stone-200/60">
                    Awaiting property photos, room configurations, and official launch details.
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <Link
                    to={`/properties/${prop.slug}`}
                    className="text-xs font-semibold text-forest-800 hover:text-forest-600 flex items-center gap-1"
                  >
                    <span>Preview Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      onOpenWhatsApp?.(
                        `Namaste! I would like early information regarding ${prop.name} in Guruvayur.`
                      )
                    }
                    className="text-xs font-medium text-[#25D366] hover:underline flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Enquire</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Properties Bottom Callout */}
        <div className="text-center pt-4">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-forest-900 hover:bg-forest-800 text-white text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg"
          >
            <span>View All Properties & Stays</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
