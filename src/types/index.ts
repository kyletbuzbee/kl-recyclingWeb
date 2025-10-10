// Global type definitions for K&L Recycling website

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string[];
  content: string;
  benefits?: string[];
  icon: string;
  operationalDetails?: {
    permits?: string[];
    crewSize?: string;
    equipment?: string[];
    notes?: string;
  };
  availableLocations?: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company?: string;
  rating?: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  image: string;
  content: string;
  tags?: string[];
}

export interface Material {
  name: string;
  category: "ferrous" | "non-ferrous";
  image: string;
  description: string;
  priceRange?: string;
  accepted: boolean;
}

export interface MaterialDetail {
  slug: string;
  name: string;
  category: "ferrous" | "non-ferrous";
  image: string;
  description: string;
  longDescription: string;
  grades: {
    name: string;
    description: string;
    priceRange: string;
    marketValue: number;
  }[];
  preparationTips: string[];
  commonSources: string[];
  currentPrice: {
    value: number;
    unit: string;
    lastUpdated: string;
  };
  seoKeywords: string[];
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email?: string;
  hours?: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface FormData {
  service: string;
  details: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  timeline?: string;
}

export interface ContactFormData extends FormData {
  message?: string;
  preferredContact?: "email" | "phone";
}

export interface QuoteFormData extends FormData {
  materialType?: string;
  estimatedVolume?: string;
  location?: string;
}

export interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: "Full-Time" | "Part-Time" | "Contract";
  department: string;
  description: string;
  requirements: string[];
  benefits?: string[];
  posted: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: "summary" | "summary_large_image";
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PricingItem {
  name: string;
  price: number;
  unit: string;
}

export type PricingData = Record<string, PricingItem>;
export type PricingApiResponse = PricingData | PricingItem;
