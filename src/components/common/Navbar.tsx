import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND } from '../../data/brand';

interface NavbarProps {
  onOpenWhatsApp?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsApp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Properties', path: '/properties' },
    {
      name: 'Discover Guruvayur',
      subtitle: 'Sacred Places & Local Experiences',
      path: '/discover-guruvayur',
    },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isHeroPage =
    location.pathname === '/' ||
    location.pathname === '/about' ||
    location.pathname === '/discover-guruvayur' ||
    location.pathname === '/explore-guruvayur';

  const navBackgroundClass = !isScrolled && isHeroPage
    ? 'bg-gradient-to-b from-black/70 via-black/40 to-transparent text-white'
    : 'bg-[#FDFBF7]/95 backdrop-blur-md text-charcoal-900 shadow-md border-b border-[#EADBCE]/50';

  const linkClass = (path: string) => {
    const active = isActive(path);
    if (!isScrolled && isHeroPage) {
      return active
        ? 'text-emerald-300 font-semibold border-b-2 border-emerald-300 pb-1'
        : 'text-white/90 hover:text-white transition-colors duration-200';
    }
    return active
      ? 'text-forest-800 font-semibold border-b-2 border-forest-800 pb-1'
      : 'text-charcoal-700 hover:text-forest-800 transition-colors duration-200';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group focus:outline-none" title={BRAND.name}>
            <img
              src={BRAND.logoUrl}
              alt={BRAND.name}
              className="h-11 sm:h-13 md:h-15 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="hidden xl:flex flex-col">
              <span className={`font-serif text-base lg:text-lg font-bold tracking-wide transition-colors ${!isScrolled && isHeroPage ? 'text-white' : 'text-forest-900'}`}>
                {BRAND.name}
              </span>
              <span className={`text-[10px] uppercase tracking-widest font-medium ${!isScrolled && isHeroPage ? 'text-emerald-200' : 'text-forest-700'}`}>
                Guruvayur, Kerala
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`text-sm tracking-wider font-medium flex flex-col py-1 ${linkClass(link.path)}`}
                >
                  <span>{link.name}</span>
                  {link.subtitle && (
                    <span className="text-[10px] opacity-75 font-normal tracking-tight hidden group-hover:inline transition-opacity duration-150">
                      {link.subtitle}
                    </span>
                  )}
                </Link>
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${BRAND.phones[0]}`}
              className={`p-2 rounded-full transition-colors ${
                !isScrolled && isHeroPage
                  ? 'bg-white/15 hover:bg-white/25 text-white'
                  : 'bg-forest-50 hover:bg-forest-100 text-forest-800'
              }`}
              title={`Call ${BRAND.phones[0]}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onOpenWhatsApp}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-sm transition-all duration-300 cursor-pointer ${
                !isScrolled && isHeroPage
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/30 hover:shadow-md'
                  : 'bg-forest-800 hover:bg-forest-700 text-white shadow-forest-900/20 hover:shadow-md'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire Now</span>
            </button>
          </div>

          <div className="flex lg:hidden items-center space-x-2">
            <button
              type="button"
              onClick={onOpenWhatsApp}
              className="p-2 rounded-full bg-emerald-600 text-white cursor-pointer"
              aria-label="Enquire on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-lg transition-colors focus:outline-none cursor-pointer ${
                !isScrolled && isHeroPage ? 'text-white hover:bg-white/10' : 'text-charcoal-900 hover:bg-black/5'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] text-charcoal-900 border-b border-[#EADBCE] shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="px-5 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-forest-100/70 text-forest-900 font-semibold'
                    : 'text-charcoal-700 hover:bg-forest-50 hover:text-forest-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </div>
                {link.subtitle && (
                  <span className="block text-xs text-charcoal-500 font-normal mt-0.5">
                    {link.subtitle}
                  </span>
                )}
              </Link>
            ))}

            <div className="pt-4 border-t border-[#EADBCE]/60 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-500 px-3">
                Quick Enquiries & Contact
              </div>
              <div className="grid grid-cols-2 gap-2 px-1">
                <a
                  href={`tel:${BRAND.phones[0]}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-stone-100 hover:bg-stone-200 rounded-lg text-xs font-medium text-charcoal-800"
                >
                  <Phone className="w-3.5 h-3.5 text-forest-700" />
                  <span>Call Us</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenWhatsApp?.();
                  }}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-forest-800 hover:bg-forest-700 rounded-lg text-xs font-medium text-white cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
