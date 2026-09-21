import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, MessageCircle, Check } from 'lucide-react';
import { PROPERTIES } from '../../data/properties';
import { getWhatsAppLink } from '../../data/brand';
import { SectionHeading } from '../common/SectionHeading';

interface PropertyShowcaseProps {
  onOpenWhatsApp?: (message?: string) => void;
}

export const PropertyShowcase: React.FC<PropertyShowcaseProps> = ({ onOpenWhatsApp }) => {
  return (
    <section className="py-20 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="OUR PROPERTIES"
          title="Find Your Perfect Stay"
          subtitle="Explore our three comfortable properties located across North, South, and East Nada in Guruvayur."
        />

        {/* Clean 3-Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {PROPERTIES.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#EADBCE] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Property Photo */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
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
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-forest-900/90 backdrop-blur-sm text-white shadow-sm">
                      {property.tagLine}
                    </span>
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-6 sm:p-7">
                  {/* Location / Nada */}
                  <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-800 mb-2">
                    <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{property.location}</span>
                  </div>

                  {/* Property Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-forest-950 mb-3 group-hover:text-emerald-800 transition-colors">
                    {property.name}
                  </h3>

                  {/* Brief Description */}
                  <p className="text-sm text-stone-600 leading-relaxed mb-5 line-clamp-3">
                    {property.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="pt-4 border-t border-stone-100">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal-600 mb-2.5">
                      Highlights
                    </h4>
                    <ul className="space-y-2 text-xs text-stone-700">
                      {property.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-7 pt-0 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to={`/properties/${property.slug}`}
                  className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors shadow-sm"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    onOpenWhatsApp
                      ? onOpenWhatsApp(
                          `Namaste! I would like to enquire about room availability at ${property.name} in Guruvayur.`
                        )
                      : window.open(
                          getWhatsAppLink(
                            undefined,
                            `Namaste! I would like to enquire about room availability at ${property.name} in Guruvayur.`
                          ),
                          '_blank'
                        )
                  }
                  className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Enquire</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Properties Bottom Callout */}
        <div className="text-center pt-4">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-forest-900 hover:bg-forest-800 text-white text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg"
          >
            <span>Explore All 3 Properties</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
