import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
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
      if (window.scrollY > 30) {
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
    { name: 'Discover Guruvayur', path: '/discover-guruvayur' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navBackgroundClass = isScrolled
    ? 'bg-forest-950/75 backdrop-blur-md text-white transition-all duration-300'
    : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white transition-all duration-300';

  const linkClass = (path: string) => {
    const active = isActive(path);
    return active
      ? 'text-emerald-300 font-semibold border-b-2 border-emerald-300 pb-1 drop-shadow-sm'
      : 'text-white/90 hover:text-white transition-colors duration-200 drop-shadow-sm';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${navBackgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo on the left - Links to Home, No text beside it */}
          <Link
            to="/"
            className="flex items-center group focus:outline-none py-2"
            title="Krishnendu Homestay"
          >
            <img
              src={BRAND.logoUrl}
              alt={BRAND.name}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </Link>

          {/* Desktop Navigation - Page Names Only */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-wider font-medium py-1 ${linkClass(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Trigger - Hamburger Menu Only */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-forest-950/95 backdrop-blur-xl text-white border-b border-emerald-900/40 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="px-5 pt-4 pb-7 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-emerald-900/40 text-emerald-300 font-semibold'
                    : 'text-stone-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </div>
              </Link>
            ))}

            <div className="pt-4 border-t border-emerald-900/40">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp?.();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-sm font-semibold text-white transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
