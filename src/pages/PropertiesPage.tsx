import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROPERTIES } from '../data/properties';
import { SEOHead } from '../components/common/SEOHead';

interface PropertiesPageProps {
  onOpenWhatsApp: (message?: string) => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = () => {
  return (
    <div className="pt-24 pb-20 bg-ivory min-h-screen">
      <SEOHead
        title="Our Properties & Stays"
        description="Explore comfortable stays and homestay accommodations in Guruvayur under the Krishnendu brand."
      />

      {/* Page Header */}
      <div className="bg-forest-950 text-white py-14 sm:py-16 px-4 sm:px-6 lg:px-8 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/hero-about.png"
            alt="Krishnendu Homestay"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Our Properties
          </h1>
          <p className="text-base sm:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed font-normal">
            Find a comfortable place to stay in Guruvayur and discover our growing collection of properties.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#EADBCE] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={property.heroImage}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://i.ibb.co/RGGM36Cm/905c3c9d-34ba-4172-96bd-c13d6149d598-1.jpg';
                    }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 mb-2">
                    {property.name}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">
                    {property.shortDescription}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/properties/${property.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white text-sm font-semibold tracking-wide transition-colors"
                >
                  <span>View Property</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
