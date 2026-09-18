import React from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { BRAND, getWhatsAppLink } from '../data/brand';
import { SEOHead } from '../components/common/SEOHead';
import { WhatsAppEnquiryForm } from '../components/contact/WhatsAppEnquiryForm';
import { SectionHeading } from '../components/common/SectionHeading';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-ivory min-h-screen">
      <SEOHead
        title="Contact & Location | Plan Your Stay"
        description="Get in touch with Krishnendu Homestay in Guruvayur, Kerala. Direct contact numbers, WhatsApp chat, location map, and online enquiry form."
      />

      {/* Hero Header */}
      <div className="bg-forest-950 text-white py-16 px-4 sm:px-6 lg:px-8 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/hero-guruvayur.png"
            alt="Guruvayur Homestay Surroundings"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-xs font-semibold tracking-wider text-emerald-300 uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>DIRECT CONNECTIVITY</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Let's Plan Your Stay
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed">
            Have questions about your visit to Guruvayur? Get in touch with us.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EADBCE] shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-forest-950 pb-3 border-b border-stone-100">
                Contact Information
              </h2>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-charcoal-700">
                    Phone Inquiries (Direct Call)
                  </div>
                  <div className="flex flex-col gap-1 text-sm font-semibold text-forest-900">
                    <a href={`tel:${BRAND.phones[0]}`} className="hover:text-emerald-700 transition-colors">
                      +91 {BRAND.phones[0]}
                    </a>
                    <a href={`tel:${BRAND.phones[1]}`} className="hover:text-emerald-700 transition-colors">
                      +91 {BRAND.phones[1]}
                    </a>
                  </div>
                  <p className="text-xs text-stone-500">
                    Available for room availability checks & arrival guidance.
                  </p>
                </div>
              </div>

              {/* WhatsApp Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div className="space-y-1.5 w-full">
                  <div className="text-xs font-bold uppercase tracking-wider text-charcoal-700">
                    WhatsApp Chat Lines
                  </div>
                  <div className="space-y-2 pt-1">
                    {BRAND.whatsAppNumbers.map((wa) => (
                      <a
                        key={wa.number}
                        href={getWhatsAppLink(wa.number)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 hover:bg-emerald-50 border border-stone-200 hover:border-emerald-300 text-xs font-medium text-charcoal-800 transition-colors group"
                      >
                        <span className="font-semibold">{wa.label}: {wa.display}</span>
                        <span className="text-emerald-700 group-hover:underline flex items-center gap-1">
                          <span>Chat</span>
                          <ExternalLink className="w-3 h-3" />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-charcoal-700">
                    Email
                  </div>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-sm font-semibold text-forest-900 hover:text-emerald-700 transition-colors break-all block"
                  >
                    {BRAND.email}
                  </a>
                  <p className="text-xs text-stone-500">
                    For detailed enquiries, travel receipts, and special arrangements.
                  </p>
                </div>
              </div>

              {/* Location Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-charcoal-700">
                    Property Location
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-800 font-medium leading-relaxed">
                    {BRAND.fullAddress}
                  </p>
                  <p className="text-xs text-stone-500">
                    Located in peaceful North Nada, Guruvayur.
                  </p>
                </div>
              </div>

              {/* Digital Business Card (VKard) */}
              <div className="pt-4 border-t border-stone-100">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-forest-900 to-forest-950 text-white shadow-md">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>DIGITAL BUSINESS CARD</span>
                  </div>
                  <h4 className="font-serif text-base font-bold mb-1">
                    Save Our Contacts (VKard)
                  </h4>
                  <p className="text-xs text-stone-300 mb-3 leading-relaxed">
                    Access our official VKard digital profile to save contact numbers directly to your phone contacts.
                  </p>
                  <a
                    href={BRAND.vkardUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold tracking-wide transition-all shadow-sm"
                  >
                    <span>Open VKard Digital Card</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Enquiry Form */}
          <div className="lg:col-span-7">
            <WhatsAppEnquiryForm />
          </div>
        </div>

        {/* Embedded Google Map Section */}
        <div className="mt-16">
          <SectionHeading
            eyebrow="MAP VIEW"
            title="Location & Surroundings"
            subtitle="Find our location in North Nada, Guruvayur with easy access to temple entrances."
          />

          <div className="bg-white rounded-3xl overflow-hidden border border-[#EADBCE] shadow-lg p-3 sm:p-4">
            <div className="w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden">
              <iframe
                title="Krishnendu Homestay Location Map"
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
            <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>North Nada, Guruvayur, Kerala, India</span>
              </div>
              <a
                href="https://maps.google.com/?q=North+Nada+Guruvayur+Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-800 hover:text-emerald-600 flex items-center gap-1"
              >
                <span>Open in Google Maps Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
