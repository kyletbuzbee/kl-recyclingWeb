import type { NextApiRequest, NextApiResponse } from "next";
import type { PricingApiResponse } from "../../types";
import { RateLimiterMemory } from "rate-limiter-flexible";
import axios from "axios";

// Real pricing API configuration
const METAL_PRICING_API_URL = process.env.METAL_PRICING_API_URL || "https://api.metalpriceapi.com/v1/latest";
const METAL_PRICING_API_KEY = process.env.METAL_PRICING_API_KEY;

// Mock pricing data with more realistic prices and changes
const mockPricingData = {
  copper: {
    name: "Copper",
    price: 3.75,
    change: "+0.05",
    unit: "per lb",
  },
  aluminum: {
    name: "Aluminum",
    price: 0.85,
    change: "-0.02",
    unit: "per lb",
  },
  brass: {
    name: "Brass",
    price: 2.45,
    change: "+0.08",
    unit: "per lb",
  },
  "stainless-steel": {
    name: "Stainless Steel",
    price: 0.35,
    change: "-0.02",
    unit: "per lb",
  },
  steel: {
    name: "Steel",
    price: 0.12,
    change: "+0.01",
    unit: "per lb",
  },
};

// Cache for API responses
const cache = new Map();
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

// Function to fetch pricing data from external API or use cache
async function fetchPricingData() {
  const cacheKey = "metal-pricing";
  const now = Date.now();

  // Check cache first
  if (cache.has(cacheKey)) {
    const cached = cache.get(cacheKey);
    if (now - cached.timestamp < CACHE_DURATION) {
      return cached.data;
    }
  }

  // Try external API if configured
  if (METAL_PRICING_API_URL && METAL_PRICING_API_KEY) {
    try {
      const response = await axios.get(METAL_PRICING_API_URL, {
        params: { api_key: METAL_PRICING_API_KEY, currency: "USD" },
        timeout: 5000,
      });

      // Transform external API response to our format
      const apiData = response.data;
      const pricingData = {
        copper: {
          name: "Copper",
          price: apiData.rates?.CU || 3.75,
          change: "+0.05", // Would need historical comparison
          unit: "per lb",
        },
        aluminum: {
          name: "Aluminum",
          price: apiData.rates?.AL || 0.85,
          change: "-0.02",
          unit: "per lb",
        },
        brass: {
          name: "Brass",
          price: apiData.rates?.PB || 2.45, // Using lead as proxy
          change: "+0.08",
          unit: "per lb",
        },
        "stainless-steel": {
          name: "Stainless Steel",
          price: apiData.rates?.NI || 0.35, // Using nickel as proxy
          change: "-0.02",
          unit: "per lb",
        },
        steel: {
          name: "Steel",
          price: apiData.rates?.FE || 0.12, // Using iron as proxy
          change: "+0.01",
          unit: "per lb",
        },
        last_updated: new Date().toISOString(),
      };

      // Cache the result
      cache.set(cacheKey, { data: pricingData, timestamp: now });
      return pricingData;
    } catch (error) {
      console.warn("External pricing API failed, using mock data:", (error as any).message);
    }
  }

  // Fallback to mock data with last_updated timestamp
  const pricingData = {
    ...mockPricingData,
    steel: mockPricingData.steel,
    last_updated: new Date().toISOString(),
  };

  // Cache mock data too
  cache.set(cacheKey, { data: pricingData, timestamp: now });
  return pricingData;
}

const rateLimiter = new RateLimiterMemory({
  points: 100, // 100 requests
  duration: 60 * 15, // per 15 minutes
});

type ErrorResponse = {
  message: string;
};

function isValidMaterial(material: string | string[] | undefined): material is keyof typeof mockPricingData {
  return typeof material === "string" && material in mockPricingData;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<PricingApiResponse | ErrorResponse>) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (process.env.ENABLE_PRICING_RATE_LIMIT === "true") {
    try {
      await rateLimiter.consume(req.socket.remoteAddress || "unknown");
    } catch (error) {
      return res.status(429).json({ message: "Too many requests" });
    }
  }

  try {
    const pricingData = await fetchPricingData();
    const { material } = req.query;

    if (isValidMaterial(material)) {
      res.status(200).json(pricingData[material]);
    } else {
      res.status(200).json(pricingData);
    }
  } catch (error) {
    console.error("Pricing API error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
