import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import { BRAND, getWhatsAppLink } from '../../data/brand';

interface FooterProps {
  onOpenWhatsApp?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-forest-950 text-stone-300 relative overflow-hidden border-t-4 border-emerald-800">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-900/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Left Column: Brand & Heritage */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1.5 shadow flex items-center justify-center">
                <img
                  src={BRAND.logoUrl}
                  alt={BRAND.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold tracking-wide text-white">
                  {BRAND.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-emerald-400">
                  Guruvayur, Kerala
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-stone-300">
              {BRAND.shortDescription}
            </p>

            <div className="flex items-start gap-2.5 text-xs text-stone-400 pt-1">
              <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{BRAND.fullAddress}</span>
            </div>

            {/* Digital Business Card Link */}
            <div className="pt-2">
              <a
                href={BRAND.vkardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-forest-900 hover:bg-forest-800 text-emerald-300 hover:text-white border border-emerald-700/50 text-xs font-medium transition-all duration-200 group"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform" />
                <span>View Digital Business Card</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Middle Column: Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-emerald-900/60 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-stone-300 hover:text-emerald-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-stone-300 hover:text-emerald-300 transition-colors">
                  Our Properties
                </Link>
              </li>
              <li>
                <Link to="/explore-guruvayur" className="text-stone-300 hover:text-emerald-300 transition-colors">
                  Explore Guruvayur
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-300 hover:text-emerald-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-stone-300 hover:text-emerald-300 transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-300 hover:text-emerald-300 transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Middle-Right: Stay Highlights */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-emerald-900/60 pb-2">
              Stay Highlights
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>North Nada Location</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Temple Darshan Ease</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Clean AC Rooms</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Family Friendly</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Traditional Living Hall</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Multi-Property Portfolio</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Direct Contact & Enquiries */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-emerald-900/60 pb-2">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-stone-400 font-medium">Call Us:</div>
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    <a href={`tel:${BRAND.phones[0]}`} className="hover:text-white transition-colors">
                      +91 {BRAND.phones[0]}
                    </a>
                    <a href={`tel:${BRAND.phones[1]}`} className="hover:text-white transition-colors">
                      +91 {BRAND.phones[1]}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-stone-400 font-medium">WhatsApp Enquiries:</div>
                  <div className="flex flex-col gap-1 mt-1">
                    {BRAND.whatsAppNumbers.map((wa) => (
                      <a
                        key={wa.number}
                        href={getWhatsAppLink(wa.number)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                      >
                        <span>{wa.label}:</span>
                        <span>{wa.display}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-stone-400 font-medium">Email:</div>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="hover:text-white transition-colors break-all mt-0.5 block"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="mt-12 pt-8 border-t border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {BRAND.copyrightYear} {BRAND.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-stone-200 transition-colors">
              About
            </Link>
            <span>•</span>
            <Link to="/properties" className="hover:text-stone-200 transition-colors">
              Properties
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-stone-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
