export interface PricingItem {
  name: string;
  price: number;
  unit: string;
}

export interface PricingData {
  [key: string]: PricingItem;
}

export type PricingApiResponse = PricingData | PricingItem;
