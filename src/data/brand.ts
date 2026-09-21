import type { BrandConfig } from '../types';

export const BRAND: BrandConfig = {
  name: 'KRISHNENDU HOMESTAY',
  tagLine: 'Your Peaceful Stay in Sacred Guruvayur',
  shortDescription:
    'Experience a peaceful and comfortable stay near the sacred Guruvayur Temple. Enjoy warm hospitality, clean rooms, and a homely atmosphere for a memorable visit.',
  fullDescription:
    'Located in peaceful North Nada, Guruvayur, KRISHNENDU HOMESTAY offers devotees, families, and travelers a welcoming retreat combining traditional Kerala hospitality with spotless modern comforts.',
  locationName: 'North Nada, Guruvayur',
  fullAddress: 'North Nada, Guruvayur, Thrissur District, Kerala 680101, India',
  phones: ['9447995083', '9744971680'],
  whatsAppNumbers: [
    {
      number: '919447995083',
      label: 'WhatsApp 1',
      display: '+91 94479 95083',
    },
    {
      number: '919744971680',
      label: 'WhatsApp 2',
      display: '+91 97449 71680',
    },
  ],
  email: 'Krishnendhuhomestay@gmail.com',
  vkardUrl: 'https://www.vkard.pro/krishnendu-homestay',
  googleMapsUrl: 'https://maps.google.com/?q=North+Nada+Guruvayur+Kerala',
  logoUrl: '/images/logo-main.png',
  copyrightYear: 2026,
};

export const getWhatsAppLink = (
  number: string = BRAND.whatsAppNumbers[0].number,
  customMessage?: string
): string => {
  const defaultMsg = `Namaste Krishnendu Homestay! I would like to enquire about room availability and stay options in Guruvayur.`;
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${number}?text=${text}`;
};
