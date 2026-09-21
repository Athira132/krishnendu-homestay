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
  const isOpen = Boolean(externalIsOpen);

  const handleClose = () => {
    if (externalOnClose) {
      externalOnClose();
    }
  };

  const messageToSend =
    defaultMessage ||
    `Namaste Krishnendu Homestay! I would like to enquire about room availability and stay options in Guruvayur.`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Modal Popover */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[320px] sm:w-[350px] bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-emerald-700 text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Chat with Us on WhatsApp</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
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
          <div className="p-4 bg-stone-50 space-y-3">
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
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-emerald-50 border border-stone-200 hover:border-emerald-300 shadow-sm transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 group-hover:bg-emerald-600 text-emerald-700 group-hover:text-white flex items-center justify-center transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-charcoal-900 group-hover:text-emerald-900">
                        {wa.label}
                      </div>
                      <div className="text-xs text-stone-500 font-mono">
                        {wa.display}
                      </div>
                    </div>
                  </div>
                  <div className="text-emerald-700 group-hover:translate-x-1 transition-transform">
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
              <div className="flex items-center justify-center gap-4 text-xs font-medium text-forest-800">
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
      )}

      {/* Main Floating Trigger Button (Round, Icon Only) */}
      <button
        type="button"
        onClick={() =>
          window.open(
            getWhatsAppLink(BRAND.whatsAppNumbers[0].number, messageToSend),
            '_blank'
          )
        }
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group border-2 border-white focus:outline-none cursor-pointer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp (+91 94479 95083)"
      >
        <MessageCircle className="w-7 h-7 fill-current group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};
