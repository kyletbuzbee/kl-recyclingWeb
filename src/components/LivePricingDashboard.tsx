"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiTrendingUp, FiTrendingDown, FiRefreshCw } from "react-icons/fi";

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

const LivePricingDashboard = () => {
  const [pricingData, setPricingData] = useState<PricingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPricing = async (isManualRefresh = false) => {
    try {
      if (isManualRefresh) setRefreshing(true);
      setLoading(isManualRefresh ? false : true);

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
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchPricing();

    // Update pricing every 5 minutes for better visibility
    const interval = setInterval(fetchPricing, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const getChangeColor = (change: string) => {
    const value = parseFloat(change);
    return value >= 0 ? "text-green-600" : "text-red-600";
  };

  const getChangeIcon = (change: string) => {
    const value = parseFloat(change);
    return value >= 0 ? <FiTrendingUp className="w-4 h-4" /> : <FiTrendingDown className="w-4 h-4" />;
  };

  const formatPrice = (price: number, material: string) => {
    if (material.toLowerCase().includes("copper") || material.toLowerCase().includes("brass")) {
      return `$${(price / 100).toFixed(2)}/lb`; // Copper and brass are priced per pound
    } else {
      return `$${price.toFixed(2)}/lb`; // Others per pound
    }
  };

  if (loading && !pricingData) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-xl p-8 border border-slate-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Live Market Prices</h3>
              <p className="text-sm text-gray-600">Real-time metal pricing</p>
            </div>
          </div>
          <button disabled className="p-2 text-gray-400 rounded-lg">
            <FiRefreshCw className="w-5 h-5 animate-spin" />
          </button>
        </div>
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  if (error && !pricingData) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl shadow-xl p-8 border border-red-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              <span className="text-2xl">⚠️</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Market Prices Unavailable</h3>
              <p className="text-sm text-red-600">Real-time pricing currently unavailable</p>
            </div>
          </div>
          <button onClick={() => fetchPricing(true)} disabled={refreshing} className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors disabled:opacity-50">
            <FiRefreshCw className={`w-5 h-5 ${refreshing ? "animate-spin" : ""}`} />
          </button>
        </div>
        <p className="text-red-700 mb-4">{error}</p>
        <div className="bg-white/50 rounded-lg p-4 border border-dashed border-red-300">
          <p className="text-sm text-red-600 text-center">Contact us directly for current market rates at (903) 581-0010</p>
        </div>
      </motion.div>
    );
  }

  if (!pricingData) return null;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-xl p-8 border border-emerald-200 hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
            <span className="text-2xl">📊</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Live Market Prices</h3>
            <p className="text-sm text-gray-600">Updated in real-time</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {lastUpdated && <span className="text-xs text-gray-500 bg-white/70 px-3 py-1 rounded-full">{lastUpdated.toLocaleTimeString()}</span>}
          <button onClick={() => fetchPricing(true)} disabled={refreshing} className="p-2 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors disabled:opacity-50">
            <FiRefreshCw className={`w-5 h-5 ${refreshing ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {/* Price Grid */}
      <div className="grid grid-cols-1 gap-4">
        {Object.entries(pricingData)
          .filter(([key]) => key !== "last_updated")
          .map(([key, material]) => (
            <motion.div key={key} whileHover={{ scale: 1.02 }} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{material.name.substring(0, 1)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{material.name}</div>
                    <div className="text-xs text-gray-500">{material.unit}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">{formatPrice(material.price, key)}</div>
                  <div className={`flex items-center justify-end space-x-1 text-sm mt-1 ${getChangeColor(material.change)}`}>
                    {getChangeIcon(material.change)}
                    <span className="font-medium">{material.change}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-6 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-4">
        <div className="text-center text-white">
          <p className="text-sm opacity-90 mb-2">Want the best price for your scrap?</p>
          <a href="/quote" className="inline-flex items-center px-4 py-2 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm">
            Get Instant Quote →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default LivePricingDashboard;
