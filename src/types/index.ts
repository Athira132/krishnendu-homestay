export interface Property {
  id: string;
  slug: string;
  name: string;
  tagLine: string;
  location: string;
  landmark: string;
  shortDescription: string;
  fullDescription: string[];
  heroImage: string;
  galleryImages: string[];
  isFeatured: boolean;
  isComingSoon: boolean;
  statusBadge: string;
  highlights: string[];
  confirmedAmenities: {
    icon: string;
    title: string;
    description: string;
  }[];
  roomTypes: {
    name: string;
    description: string;
    capacity: string;
    bedType: string;
    statusNote: string;
  }[];
  guidelines: string[];
  locationNote: string;
}

export interface Attraction {
  id: string;
  name: string;
  subtitle?: string;
  category: 'temple' | 'beach' | 'culture' | 'transit';
  image: string;
  shortDescription: string;
  fullDescription: string;
  distanceNotice: string;
  approxDriveTime?: string;
  googleMapsUrl: string;
  keyFeatures: string[];
}

export interface GalleryItem {
  id: string;
  src: string;
  fallbackSrc?: string;
  alt: string;
  title: string;
  category: 'exterior' | 'living' | 'rooms' | 'bathrooms';
  featuredOnHome?: boolean;
}

export interface TransitHub {
  id: string;
  name: string;
  type: 'railway' | 'bus' | 'airport';
  image: string;
  distanceNotice: string;
  approxTravelTime: string;
  directionsUrl: string;
  tips: string;
}

export interface BrandConfig {
  name: string;
  tagLine: string;
  shortDescription: string;
  fullDescription: string;
  locationName: string;
  fullAddress: string;
  phones: string[];
  whatsAppNumbers: {
    number: string;
    label: string;
    display: string;
  }[];
  email: string;
  vkardUrl: string;
  logoUrl: string;
  copyrightYear: number;
}
