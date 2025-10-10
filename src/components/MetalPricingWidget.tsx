import { useState, useEffect } from "react";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

interface PricingData {
  copper: { name: string; price: number; change: string; unit: string };
  aluminum: { name: string; price: number; change: string; unit: string };
  brass: { name: string; price: number; change: string; unit: string };
  "stainless-steel": {
    name: string;
    price: number;
    change: string;
    unit: string;
  };
  steel: { name: string; price: number; change: string; unit: string };
  last_updated: string;
}

export default function MetalPricingWidget() {
  const [pricingData, setPricingData] = useState<PricingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchPricing = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/pricing");
      if (!response.ok) {
        throw new Error("Failed to fetch pricing data");
      }
      const data = await response.json();
      setPricingData(data);
      setLastUpdated(new Date(data.last_updated || Date.now()));
    } catch (err) {
      console.error("Error fetching pricing:", err);
      setError("Failed to load pricing data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPricing();

    // Update pricing every 15 minutes
    const interval = setInterval(fetchPricing, 15 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (loading && !pricingData) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error && !pricingData) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!pricingData) return null;

  const getChangeColor = (change: string) => {
    const value = parseFloat(change);
    return value >= 0 ? "text-green-600" : "text-red-600";
  };

  const getChangeIcon = (change: string) => {
    const value = parseFloat(change);
    return value >= 0 ? <FiTrendingUp className="w-4 h-4" /> : <FiTrendingDown className="w-4 h-4" />;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Metal Prices</h3>
        <div className="text-xs text-gray-500">{lastUpdated && `Updated ${lastUpdated.toLocaleTimeString()}`}</div>
      </div>

      <div className="space-y-3">
        {Object.entries(pricingData)
          .filter(([key]) => key !== "last_updated")
          .map(([key, material]) => (
            <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <div className="flex-1">
                <div className="font-medium text-gray-900">{material.name}</div>
                <div className="text-sm text-gray-500">{material.unit}</div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-gray-900">${material.price.toFixed(2)}</span>
                <div className={`flex items-center space-x-1 ${getChangeColor(material.change)}`}>
                  {getChangeIcon(material.change)}
                  <span className="text-sm font-medium">{material.change}</span>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center">Prices are indicative and subject to change. Contact us for current rates.</p>
      </div>
    </div>
  );
}
