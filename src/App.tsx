import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { DiscoverGuruvayurPage } from './pages/DiscoverGuruvayurPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top helper on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
};

export function App() {
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [customWhatsAppMsg, setCustomWhatsAppMsg] = useState<string | undefined>(undefined);

  const handleOpenWhatsApp = (message?: string) => {
    setCustomWhatsAppMsg(message);
    setWhatsAppModalOpen(true);
  };

  const handleCloseWhatsApp = () => {
    setWhatsAppModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-ivory text-charcoal-900 font-sans selection:bg-emerald-800 selection:text-white">
        {/* Global Navigation Header */}
        <Navbar onOpenWhatsApp={() => handleOpenWhatsApp()} />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenWhatsApp={handleOpenWhatsApp} />}
            />
            <Route
              path="/properties"
              element={<PropertiesPage onOpenWhatsApp={handleOpenWhatsApp} />}
            />
            <Route
              path="/properties/:slug"
              element={<PropertyDetailPage onOpenWhatsApp={handleOpenWhatsApp} />}
            />
            <Route
              path="/discover-guruvayur"
              element={<DiscoverGuruvayurPage onOpenWhatsApp={handleOpenWhatsApp} />}
            />
            <Route
              path="/explore-guruvayur"
              element={<DiscoverGuruvayurPage onOpenWhatsApp={handleOpenWhatsApp} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenWhatsApp={handleOpenWhatsApp} />}
            />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenWhatsApp={() => handleOpenWhatsApp()} />

        {/* Global Floating WhatsApp Contact Popover */}
        <FloatingWhatsApp
          isOpen={whatsAppModalOpen}
          onClose={handleCloseWhatsApp}
          defaultMessage={customWhatsAppMsg}
        />
      </div>
    </Router>
  );
}

export default App;
