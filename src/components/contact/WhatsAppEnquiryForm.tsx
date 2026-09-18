import React, { useState } from 'react';
import { AlertCircle, MessageCircle, Users, Home } from 'lucide-react';
import { PROPERTIES } from '../../data/properties';
import { BRAND, getWhatsAppLink } from '../../data/brand';

interface WhatsAppEnquiryFormProps {
  initialPropertySlug?: string;
}

export const WhatsAppEnquiryForm: React.FC<WhatsAppEnquiryFormProps> = ({
  initialPropertySlug,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertySlug, setPropertySlug] = useState(
    initialPropertySlug || PROPERTIES[0].slug
  );
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [message, setMessage] = useState('');
  const [selectedWhatsAppNumber, setSelectedWhatsAppNumber] = useState(
    BRAND.whatsAppNumbers[0].number
  );

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isRedirecting, setIsRedirecting] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    }

    if (!phone.trim()) {
      errs.phone = 'Please provide your contact phone number.';
    } else if (!/^[0-9+ -]{8,15}$/.test(phone.trim())) {
      errs.phone = 'Please enter a valid contact number.';
    }

    if (!checkInDate) {
      errs.checkInDate = 'Please select your preferred check-in date.';
    }

    if (!checkOutDate) {
      errs.checkOutDate = 'Please select your preferred check-out date.';
    } else if (checkInDate && checkOutDate < checkInDate) {
      errs.checkOutDate = 'Check-out date cannot be earlier than check-in date.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const selectedProperty =
      PROPERTIES.find((p) => p.slug === propertySlug)?.name ||
      'KRISHNENDU HOMESTAY';

    // Construct clean, formatted prefilled message for WhatsApp
    const enquiryText = [
      `*Krishnendu Homestay Stay Enquiry*`,
      `---------------------------------`,
      `*Guest Name:* ${fullName.trim()}`,
      `*Phone:* ${phone.trim()}`,
      email.trim() ? `*Email:* ${email.trim()}` : null,
      `*Preferred Property:* ${selectedProperty}`,
      `*Check-in Date:* ${checkInDate}`,
      `*Check-out Date:* ${checkOutDate}`,
      `*Number of Guests:* ${guests}`,
      message.trim() ? `*Additional Message:* ${message.trim()}` : null,
      `---------------------------------`,
      `_Sent via Krishnendu Homestay Website_`,
    ]
      .filter(Boolean)
      .join('\n');

    setIsRedirecting(true);

    const waUrl = getWhatsAppLink(selectedWhatsAppNumber, enquiryText);

    setTimeout(() => {
      window.open(waUrl, '_blank');
      setIsRedirecting(false);
    }, 400);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-stone-200/70 border border-[#EADBCE] p-6 sm:p-10">
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full">
          DIRECT ENQUIRY FLOW
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mt-3">
          Plan Your Stay with Us
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1.5">
          Submit your stay details below. Your prefilled booking enquiry will open directly in WhatsApp for prompt personal assistance.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name & Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Ramesh Kumar"
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
                errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-stone-300 focus:border-emerald-600'
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 flex-shrink-0" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
              Phone / Mobile Number *
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +91 94479 95083"
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
                errors.phone ? 'border-red-400 bg-red-50/20' : 'border-stone-300 focus:border-emerald-600'
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 flex-shrink-0" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Email (Optional) & Preferred Property */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
              Email Address <span className="text-stone-400 normal-case font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. yourname@example.com"
              className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
              Preferred Property *
            </label>
            <div className="relative">
              <select
                value={propertySlug}
                onChange={(e) => setPropertySlug(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm bg-white focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 appearance-none"
              >
                {PROPERTIES.map((prop) => (
                  <option key={prop.slug} value={prop.slug}>
                    {prop.name} {prop.isComingSoon ? '(Coming Soon)' : ''}
                  </option>
                ))}
              </select>
              <Home className="w-4 h-4 text-stone-400 absolute right-4 top-3.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Check-in, Check-out & Guests */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
              Check-in Date *
            </label>
            <div className="relative">
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
                  errors.checkInDate ? 'border-red-400 bg-red-50/20' : 'border-stone-300 focus:border-emerald-600'
                }`}
              />
            </div>
            {errors.checkInDate && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 flex-shrink-0" />
                <span>{errors.checkInDate}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
              Check-out Date *
            </label>
            <div className="relative">
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
                  errors.checkOutDate ? 'border-red-400 bg-red-50/20' : 'border-stone-300 focus:border-emerald-600'
                }`}
              />
            </div>
            {errors.checkOutDate && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 flex-shrink-0" />
                <span>{errors.checkOutDate}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
              Number of Guests
            </label>
            <div className="relative">
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm bg-white focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 appearance-none"
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests (Couple / Pair)</option>
                <option value="3 Guests">3 Guests</option>
                <option value="4 Guests">4 Guests (Family Room)</option>
                <option value="5-8 Guests">5–8 Guests (Large Family)</option>
                <option value="9+ Guests Group">9+ Guests (Group / Full Villa)</option>
              </select>
              <Users className="w-4 h-4 text-stone-400 absolute right-4 top-3.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Message / Special Needs */}
        <div>
          <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
            Special Requests or Questions <span className="text-stone-400 normal-case font-normal">(Optional)</span>
          </label>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="e.g. Arriving early morning for temple darshan, requiring parking space, elderly guest assistance, etc."
            className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>

        {/* Select WhatsApp line */}
        <div className="pt-2">
          <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-2">
            Send To WhatsApp Line:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BRAND.whatsAppNumbers.map((wa) => (
              <label
                key={wa.number}
                className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  selectedWhatsAppNumber === wa.number
                    ? 'border-emerald-600 bg-emerald-50/50 text-forest-900 font-medium'
                    : 'border-stone-200 hover:border-stone-300 text-stone-600'
                }`}
              >
                <input
                  type="radio"
                  name="whatsappNumber"
                  value={wa.number}
                  checked={selectedWhatsAppNumber === wa.number}
                  onChange={() => setSelectedWhatsAppNumber(wa.number)}
                  className="text-emerald-600 focus:ring-emerald-500"
                />
                <div className="text-xs">
                  <div className="font-semibold">{wa.label}</div>
                  <div className="font-mono text-stone-500">{wa.display}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Honest Transparency Note */}
        <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
          <span className="font-semibold">Booking Process Note: </span>
          Clicking the button below prepares your enquiry and opens WhatsApp. Your reservation is confirmed once you communicate directly with our team.
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isRedirecting}
          className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-base tracking-wide shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>{isRedirecting ? 'Opening WhatsApp...' : 'Send Enquiry on WhatsApp'}</span>
        </button>
      </form>
    </div>
  );
};
