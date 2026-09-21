import React from 'react';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  Compass,
  ArrowRight,
  MessageCircle,
  Train,
  Bus,
  Sparkles,
  Info,
  MapPin,
} from 'lucide-react';
import { ATTRACTIONS, TRANSIT_HUBS } from '../data/attractions';
import { SEOHead } from '../components/common/SEOHead';
import { SectionHeading } from '../components/common/SectionHeading';

interface ExploreGuruvayurPageProps {
  onOpenWhatsApp: (message?: string) => void;
}

export const ExploreGuruvayurPage: React.FC<ExploreGuruvayurPageProps> = ({
  onOpenWhatsApp,
}) => {
  return (
    <div className="pt-20 pb-20 bg-ivory min-h-screen">
      <SEOHead
        title="Discover Guruvayur | Sacred Temples, Attractions & Travel Guide"
        description="Plan your temple pilgrimage in Guruvayur: Guruvayur Sri Krishna Temple darshan, Mammiyoor Mahadeva Temple, Punnathur Kotta elephant sanctuary, and nearby travel attractions."
        canonicalPath="/discover-guruvayur"
      />

      {/* Destination Hero Banner */}
      <div className="relative min-h-[46vh] sm:min-h-[54vh] flex items-center justify-center bg-forest-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-guruvayur.png"
            alt="Guruvayur Temple Surroundings in Kerala"
            className="w-full h-full object-cover scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://i.ibb.co/c5GtCws/Gemini-Generated-Image-g7ts4fg7ts4fg7ts.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-12 sm:pb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-xs font-semibold tracking-wider text-emerald-200 uppercase mb-4 backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-gold-400" />
            <span>PILGRIMAGE & TRAVEL GUIDE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 drop-shadow-md">
            Discover Sacred Guruvayur
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore sacred temples, cultural landmarks, and memorable experiences during your stay at Krishnendu Homestay.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#attractions-grid"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm tracking-wide shadow-lg transition-all"
            >
              <span>Explore Nearby Attractions</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              to="/properties"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-sm tracking-wide backdrop-blur-md border border-white/25 transition-all"
            >
              <span>Explore Properties</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Section: The Sacred Heart of Guruvayur */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#EADBCE]/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EADBCE] shadow-sm">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE DIVINE ABODE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 mb-6 leading-tight">
              The Sacred Heart of Guruvayur
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
              <p>
                Guruvayur, affectionately hailed as <em>Bhuloka Vaikuntha</em> (Lord Vishnu’s earthly abode), is an ancient spiritual sanctuary nestled in the Thrissur district of Kerala. For centuries, pilgrims from across India and the globe have gathered here to experience the divine presence of Lord Guruvayurappan.
              </p>
              <p>
                The town pulsates with timeless devotional rhythms: from the pre-dawn <em>Nirmalya Darshanam</em> illuminated by oil lamps, to the resplendent caparisoned elephant processions (Seveli) and resonant Melam drumbeats. The air carries the fragrance of sandalwood paste, sacred basil (Thulasi), and fresh jasmine garlands.
              </p>
              <p>
                Staying at <strong>KRISHNENDU HOMESTAY</strong> in North Nada places you just moments away from the temple periphery while offering a quiet, restful sanctuary to retreat to after soulful darshans and rituals.
              </p>
            </div>

            {/* Respectful Pilgrim Etiquette Notice */}
            <div className="mt-8 p-5 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600 space-y-2">
              <div className="flex items-center gap-2 font-bold text-charcoal-800 uppercase tracking-wider">
                <Info className="w-4 h-4 text-emerald-700" />
                <span>Temple Visit & Dress Code Guidelines:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>Men wear traditional Mundu (dhoti) without shirts; Angavastram or upper cloth is draped on shoulders.</li>
                <li>Women wear Saris, Set Mundu, or traditional Indian attire. Western apparel is not permitted inside the inner sanctum.</li>
                <li>Mobile phones, cameras, leather items, and electronic gadgets are strictly prohibited inside the main shrine.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Temples & Sacred Places Nearby */}
      <section id="attractions-grid" className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="DESTINATION GUIDE"
            title="Temples & Sacred Places Nearby"
            subtitle="Discover Guruvayur’s sacred landmarks and local attractions during your stay."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ATTRACTIONS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#EADBCE] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-forest-950/80 text-white backdrop-blur-sm">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6">
                    {item.subtitle && (
                      <span className="text-xs font-semibold text-emerald-800 tracking-wide block mb-1">
                        {item.subtitle}
                      </span>
                    )}

                    <h3 className="font-serif text-xl font-bold text-forest-950 mb-2">
                      {item.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                      {item.shortDescription}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-stone-100 mb-4">
                      {item.keyFeatures.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/60 text-xs text-stone-500 flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                      <span className="font-medium text-forest-900">Distance to be confirmed</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={item.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-forest-800 hover:text-white text-charcoal-800 text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-2"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Getting Here (Transit Hubs) */}
      <section className="py-20 bg-[#FAF7F2] border-t border-[#EADBCE]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="TRANSIT & CONNECTIVITY"
            title="Getting Here: Arriving in Guruvayur"
            subtitle="Accessible transit connections by train, state RTC bus, and local private buses."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRANSIT_HUBS.map((hub) => (
              <div
                key={hub.id}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center mb-4">
                    {hub.type === 'railway' && <Train className="w-5 h-5" />}
                    {hub.type === 'bus' && <Bus className="w-5 h-5" />}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-forest-950 mb-2">
                    {hub.name}
                  </h3>

                  <div className="text-xs text-emerald-800 font-semibold mb-2">
                    Distance to be confirmed
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {hub.tips}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100">
                  <a
                    href={hub.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-800 hover:text-forest-600"
                  >
                    <span>View on Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Interactive Google Map */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="LOCATION PIN"
            title="Interactive Guruvayur Map"
            subtitle="Explore our homestay neighborhood in North Nada and surrounding landmarks."
          />

          <div className="bg-white rounded-3xl overflow-hidden border border-[#EADBCE] shadow-lg p-3 sm:p-4">
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden">
              <iframe
                title="Guruvayur North Nada Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15682.593452264585!2d76.03503525!3d10.59610255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7947192f153a5%3A0xb3e6a9f4cbe45803!2sNorth%20Nada%2C%20Guruvayur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>
                  Map centered on North Nada, Guruvayur. Specific driving route assistance provided by host upon confirmation.
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=North+Nada+Guruvayur+Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-emerald-800 hover:text-emerald-600 whitespace-nowrap"
              >
                <span>Open in Full Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Plan Your Guruvayur Visit (Travel Prompts & CTA) */}
      <section className="py-16 bg-forest-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Plan Your Guruvayur Pilgrimage
          </h2>
          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            Visiting the sacred temple? Exploring Mammiyoor and Chavakkad? Arriving by train or bus? Get in touch with us on WhatsApp for friendly stay assistance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() =>
                onOpenWhatsApp(
                  'Namaste Krishnendu Homestay! I am planning a visit to Guruvayur and would like travel & stay guidance.'
                )
              }
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm tracking-wide shadow-lg transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Enquire About Your Stay</span>
            </button>
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-sm tracking-wide border border-white/20 transition-all"
            >
              <span>Explore Our Rooms</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
