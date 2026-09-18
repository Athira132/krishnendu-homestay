import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Compass } from 'lucide-react';
import { ATTRACTIONS } from '../../data/attractions';
import { SectionHeading } from '../common/SectionHeading';

export const GuruvayurTeaser: React.FC = () => {
  const topAttractions = ATTRACTIONS.slice(0, 3);

  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SACRED DESTINATION"
          title="Explore Sacred Guruvayur & Beyond"
          subtitle="Discover venerated temples, spiritual traditions, and coastal serenity around our homestay."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {topAttractions.map((attraction) => (
            <div
              key={attraction.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-stone-200 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-forest-950/80 text-white backdrop-blur-sm">
                    {attraction.category}
                  </div>
                </div>

                <div className="p-6">
                  {attraction.subtitle && (
                    <span className="text-xs font-medium text-emerald-700 tracking-wide block mb-1">
                      {attraction.subtitle}
                    </span>
                  )}
                  <h3 className="font-serif text-xl font-bold text-forest-950 mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                    {attraction.shortDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-stone-500">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">{attraction.approxDriveTime || 'Short drive'}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <Link
                  to="/explore-guruvayur"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-800 hover:text-forest-600 transition-colors"
                >
                  <span>Explore Destination Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/explore-guruvayur"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-forest-800 hover:bg-forest-700 text-white text-sm font-semibold tracking-wide shadow-md transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>Discover All Temples & Attractions</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
