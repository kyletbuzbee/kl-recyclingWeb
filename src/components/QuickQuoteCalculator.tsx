"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiDollarSign, FiTruck } from "react-icons/fi";

const QuickQuoteCalculator = () => {
  const [weight, setWeight] = useState<number>(0);
  const [materialType, setMaterialType] = useState<string>("steel");
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<{
    estimatedValue: number;
    materialPrice: number;
    weight: number;
    type: string;
  } | null>(null);

  const materials = [
    { id: "steel", name: "Steel/Iron", basePrice: 0.12, unit: "lb" },
    { id: "aluminum", name: "Aluminum", basePrice: 0.75, unit: "lb" },
    { id: "copper", name: "Copper Wire", basePrice: 3.5, unit: "lb" },
    { id: "brass", name: "Brass", basePrice: 1.8, unit: "lb" },
    { id: "stainless", name: "Stainless Steel", basePrice: 0.25, unit: "lb" },
  ];

  const calculateQuote = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const selectedMaterial = materials.find((m) => m.id === materialType);
    if (!selectedMaterial) return;

    // Add some market variation (±10%)
    const marketVariation = 0.9 + Math.random() * 0.2;
    const adjustedPrice = selectedMaterial.basePrice * marketVariation;
    const estimatedValue = weight * adjustedPrice;

    setQuote({
      estimatedValue,
      materialPrice: adjustedPrice,
      weight,
      type: selectedMaterial.name,
    });

    setLoading(false);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl shadow-xl p-6 border border-emerald-200 hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
          <span className="text-2xl">🧮</span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Quick Quote Calculator</h3>
          <p className="text-sm text-gray-600">Get instant pricing estimate</p>
        </div>
      </div>

      {/* Material Selection */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-3">Material Type</label>
        <div className="grid grid-cols-2 gap-2">
          {materials.map((material) => (
            <button key={material.id} onClick={() => setMaterialType(material.id)} className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm ${materialType === material.id ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-md" : "border-gray-200 hover:border-emerald-300 hover:bg-emerald-25"}`}>
              <div className="font-semibold">{material.name}</div>
              <div className="text-xs opacity-75">
                ~{formatCurrency(material.basePrice)}/{material.unit}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Weight Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">Approximate Weight (pounds)</label>
        <div className="relative">
          <input type="number" value={weight || ""} onChange={(e) => setWeight(parseFloat(e.target.value) || 0)} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 text-lg font-semibold" placeholder="Enter weight" min="0" />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-semibold">lbs</div>
        </div>
      </div>

      {/* Calculate Button */}
      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={calculateQuote} disabled={weight <= 0 || loading} className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2">
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Calculating...</span>
          </>
        ) : (
          <>
            <FiDollarSign className="w-5 h-5" />
            <span>Get Quote Estimate</span>
          </>
        )}
      </motion.button>

      {/* Quote Result */}
      {quote && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-6 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200">
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-emerald-600 mb-1">{formatCurrency(quote.estimatedValue)}</div>
            <div className="text-sm text-gray-600">Estimated Value</div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center mb-4">
            <div className="bg-emerald-50 rounded-lg p-3">
              <div className="text-lg font-bold text-emerald-700">{quote.weight} lbs</div>
              <div className="text-xs text-emerald-600">Total Weight</div>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3">
              <div className="text-lg font-bold text-emerald-700">{formatCurrency(quote.materialPrice)}/lb</div>
              <div className="text-xs text-emerald-600">Per Pound Rate</div>
            </div>
          </div>

          <div className="text-xs text-gray-500 text-center mb-4">*Prices are estimates and subject to quality inspection</div>

          <div className="flex flex-col space-y-3">
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300" onClick={() => window.open("/quote", "_blank")}>
              Get Accurate Quote
            </motion.button>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full border-2 border-emerald-600 text-emerald-600 font-semibold py-3 px-4 rounded-lg hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center space-x-2" onClick={() => window.open("/schedule-pickup", "_blank")}>
              <FiTruck className="w-4 h-4" />
              <span>Schedule Pickup</span>
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Disclaimer */}
      <div className="mt-6 p-4 bg-white/60 rounded-lg">
        <p className="text-xs text-gray-600 text-center leading-relaxed">This calculator provides approximate values for estimation purposes only. Final prices depend on material quality, market conditions, and thorough inspection.</p>
      </div>
    </motion.div>
  );
};

export default QuickQuoteCalculator;
