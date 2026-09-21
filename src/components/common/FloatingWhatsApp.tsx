import React from 'react';
import { MessageCircle, X, Send, PhoneCall } from 'lucide-react';
import { BRAND, getWhatsAppLink } from '../../data/brand';

interface FloatingWhatsAppProps {
  isOpen?: boolean;
  onClose?: () => void;
  defaultMessage?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  isOpen: externalIsOpen,
  onClose: externalOnClose,
  defaultMessage,
}) => {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const isOpen = externalIsOpen || internalOpen;

  const handleToggle = () => {
    if (isOpen) {
      handleClose();
    } else {
      setInternalOpen(true);
    }
  };

  const handleClose = () => {
    setInternalOpen(false);
    if (externalOnClose) {
      externalOnClose();
    }
  };

  const messageToSend =
    defaultMessage ||
    `Namaste Krishnendu Homestay! I would like to enquire about room availability and stay options in Guruvayur.`;

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      {/* WhatsApp Modal Popover */}
      {isOpen && (
        <>
          {/* Backdrop for tapping outside on mobile */}
          <div
            className="fixed inset-0 bg-black/20 z-40 sm:hidden"
            onClick={handleClose}
          />

          <div className="absolute bottom-16 sm:bottom-20 right-0 w-[calc(100vw-2rem)] max-w-[330px] sm:max-w-[350px] bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200 z-50">
            {/* Header */}
            <div className="bg-emerald-700 text-white px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm">Chat with Us on WhatsApp</h4>
                  <p className="text-[10px] sm:text-[11px] text-emerald-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    Usually responds quickly
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body with contact options */}
            <div className="p-3.5 sm:p-4 bg-stone-50 space-y-3">
              <p className="text-xs text-stone-600">
                Select which WhatsApp line you would like to connect with:
              </p>

              <div className="space-y-2">
                {BRAND.whatsAppNumbers.map((wa) => (
                  <a
                    key={wa.number}
                    href={getWhatsAppLink(wa.number, messageToSend)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setInternalOpen(false)}
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white hover:bg-emerald-50 border border-stone-200 hover:border-emerald-300 shadow-sm transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 group-hover:bg-emerald-600 text-emerald-700 group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-charcoal-900 group-hover:text-emerald-900">
                          {wa.label}
                        </div>
                        <div className="text-[11px] sm:text-xs text-stone-500 font-mono">
                          {wa.display}
                        </div>
                      </div>
                    </div>
                    <div className="text-emerald-700 group-hover:translate-x-1 transition-transform flex-shrink-0">
                      <Send className="w-4 h-4" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Call Alternative */}
              <div className="pt-2 border-t border-stone-200/80">
                <div className="text-[11px] text-stone-500 text-center mb-1.5">
                  Prefer calling us directly?
                </div>
                <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs font-medium text-forest-800">
                  <a href={`tel:${BRAND.phones[0]}`} className="hover:underline flex items-center gap-1">
                    <PhoneCall className="w-3 h-3" />
                    <span>{BRAND.phones[0]}</span>
                  </a>
                  <span>|</span>
                  <a href={`tel:${BRAND.phones[1]}`} className="hover:underline flex items-center gap-1">
                    <PhoneCall className="w-3 h-3" />
                    <span>{BRAND.phones[1]}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Floating Trigger Button (Circular Icon Only, No Text, No Number) */}
      <button
        type="button"
        onClick={handleToggle}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 group border-2 border-white focus:outline-none cursor-pointer"
        aria-label="WhatsApp Contact Options"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};
