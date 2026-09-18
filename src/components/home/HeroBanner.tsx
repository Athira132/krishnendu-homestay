import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, MapPin, Sparkles } from 'lucide-react';

interface HeroBannerProps {
  onOpenWhatsApp?: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenWhatsApp }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-forest-950 text-white">
      {/* Background Image with Dark Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-guruvayur.png"
          alt="Guruvayur Temple Surroundings at Golden Hour"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://i.ibb.co/c5GtCws/Gemini-Generated-Image-g7ts4fg7ts4fg7ts.png';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/40" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-32">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-widest uppercase text-emerald-200 mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>WELCOME TO KRISHNENDU HOMESTAY</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6 max-w-4xl mx-auto drop-shadow-md">
          Your Peaceful Stay in Sacred Guruvayur
        </h1>

        <p className="text-base sm:text-xl text-stone-200/95 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Experience a peaceful and comfortable stay near the sacred Guruvayur Temple.
          Enjoy warm hospitality, clean rooms, and a homely atmosphere for a memorable visit.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-xl mx-auto">
          <Link
            to="/properties"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base tracking-wide shadow-lg shadow-emerald-900/40 hover:shadow-xl hover:shadow-emerald-700/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Explore Our Properties</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/explore-guruvayur"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-sm sm:text-base tracking-wide backdrop-blur-md border border-white/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <MapPin className="w-4 h-4 text-emerald-300" />
            <span>Plan Your Guruvayur Visit</span>
          </Link>

          <button
            type="button"
            onClick={onOpenWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm sm:text-base tracking-wide shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp Us</span>
          </button>
        </div>

        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-xs sm:text-sm text-stone-200">
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>North Nada Guruvayur</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Near Sri Krishna Temple</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Clean AC Rooms</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Homely & Peaceful</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 sm:h-16 text-ivory fill-current"
        >
          <path d="M0,0 C150,90 400,120 600,120 C800,120 1050,90 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};
