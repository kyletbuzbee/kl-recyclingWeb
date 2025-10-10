"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import dynamic from "next/dynamic";

// Advanced Environmental Impact Calculator Component
function EnvironmentalImpactCalculator() {
  const [inputs, setInputs] = useState({
    materialType: "",
    amount: "",
    timeFrame: "year",
    location: "",
  });

  const [results, setResults] = useState<{
    co2Savings: number;
    treesEquivalent: number;
    energySavings: number;
    waterSavings: number;
    landfillReduction: number;
  } | null>(null);

  const [loading, setLoading] = useState(false);

  // Impact factors per material type (per ton)
  const impactFactors = {
    steel: {
      co2Savings: 2.7, // tons CO2 per ton recycled
      treesEquivalent: 55, // trees saved per ton
      energySavings: 14000, // BTU per ton
      waterSavings: 2500, // gallons per ton
      landfillReduction: 0.95, // 95% landfill reduction
    },
    aluminum: {
      co2Savings: 8.0,
      treesEquivalent: 170,
      energySavings: 180000,
      waterSavings: 12000,
      landfillReduction: 0.98,
    },
    copper: {
      co2Savings: 4.5,
      treesEquivalent: 95,
      energySavings: 50000,
      waterSavings: 6000,
      landfillReduction: 0.96,
    },
    brass: {
      co2Savings: 3.5,
      treesEquivalent: 75,
      energySavings: 35000,
      waterSavings: 4000,
      landfillReduction: 0.94,
    },
    plastics: {
      co2Savings: 5.2,
      treesEquivalent: 110,
      energySavings: 25000,
      waterSavings: 1500,
      landfillReduction: 0.9,
    },
  };

  const calculateImpact = async () => {
    if (!inputs.materialType || !inputs.amount) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate calculation

    const factor = impactFactors[inputs.materialType as keyof typeof impactFactors];
    const amount = parseFloat(inputs.amount);

    // Adjust for timeframe
    let multiplier = 1;
    if (inputs.timeFrame === "month") multiplier = 1 / 12;
    if (inputs.timeFrame === "week") multiplier = 1 / 52;
    if (inputs.timeFrame === "day") multiplier = 1 / 365;

    setResults({
      co2Savings: factor.co2Savings * amount * multiplier,
      treesEquivalent: Math.round(factor.treesEquivalent * amount * multiplier),
      energySavings: factor.energySavings * amount * multiplier,
      waterSavings: Math.round(factor.waterSavings * amount * multiplier),
      landfillReduction: factor.landfillReduction,
    });

    setLoading(false);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(num);
  };

  const impactStats = [
    {
      icon: "🌳",
      label: "Trees Saved",
      value: results?.treesEquivalent || 0,
      unit: "trees",
    },
    {
      icon: "💨",
      label: "CO₂ Reduced",
      value: results?.co2Savings || 0,
      unit: "tons",
    },
    {
      icon: "⚡",
      label: "Energy Saved",
      value: results?.energySavings || 0,
      unit: "BTU",
    },
    {
      icon: "💧",
      label: "Water Conserved",
      value: results?.waterSavings || 0,
      unit: "gal",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">🌱 Environmental Impact Calculator</div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">See Your Recycling Impact</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Calculate the environmental benefits of recycling scrap metal. See how much CO₂, energy, and resources you're saving.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Input Section */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Environmental Impact</h2>

          <div className="space-y-6">
            {/* Material Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Material Type</label>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(impactFactors).map(([key, factor]) => (
                  <button key={key} onClick={() => setInputs((prev) => ({ ...prev, materialType: key }))} className={`p-4 rounded-xl border-2 transition-all duration-200 ${inputs.materialType === key ? "border-green-500 bg-green-50 shadow-md" : "border-gray-200 hover:border-green-300 hover:bg-green-25"}`}>
                    <div className="text-center">
                      <div className="text-lg mb-1 capitalize">{key}</div>
                      <div className="text-xs text-gray-600">{formatNumber(factor.co2Savings)} tons CO₂/ton</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Amount Recycled</label>
              <div className="relative">
                <input type="number" value={inputs.amount} onChange={(e) => setInputs((prev) => ({ ...prev, amount: e.target.value }))} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300" placeholder="Enter amount in tons" step="0.1" min="0" />
                <select
                  value={inputs.timeFrame}
                  onChange={(e) =>
                    setInputs((prev) => ({
                      ...prev,
                      timeFrame: e.target.value,
                    }))
                  }
                  className="absolute right-2 top-2 bottom-2 px-3 bg-gray-50 border-l border-gray-200 rounded-r-xl text-sm"
                >
                  <option value="day">per day</option>
                  <option value="week">per week</option>
                  <option value="month">per month</option>
                  <option value="year">per year</option>
                </select>
              </div>
            </div>

            {/* Location (optional) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Location (Optional - affects regional impact)</label>
              <select value={inputs.location} onChange={(e) => setInputs((prev) => ({ ...prev, location: e.target.value }))} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300">
                <option value="">Select region...</option>
                <option value="southeast">Southeast US</option>
                <option value="southwest">Southwest US</option>
                <option value="northeast">Northeast US</option>
                <option value="midwest">Midwest US</option>
                <option value="west">West Coast</option>
              </select>
            </div>

            {/* Calculate Button */}
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={calculateImpact} disabled={!inputs.materialType || !inputs.amount || loading} className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Calculating Impact...</span>
                </div>
              ) : (
                "Calculate Environmental Impact"
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="space-y-6">
          {/* Impact Stats */}
          {results && !loading && (
            <div className="grid grid-cols-2 gap-4">
              {impactStats.map((stat, index) => (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + index * 0.1 }} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200 text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-green-700 mb-1">{stat.unit === "gal" || stat.unit === "trees" || stat.unit === "BTU" ? formatNumber(stat.value) : stat.value.toFixed(1)}</div>
                  <div className="text-sm text-green-600 font-medium">{stat.label}</div>
                  <div className="text-xs text-green-500 mt-1">≈ {stat.unit} saved</div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Results Explanation */}
          {results && !loading && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What This Means</h3>

              <div className="prose prose-sm text-gray-700 space-y-4">
                <p>
                  Your recycling efforts are preventing <strong>{formatNumber(results.co2Savings)} tons</strong> of CO₂ emissions, equivalent to taking <strong>{results.treesEquivalent} cars</strong> off the road for an entire year!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-700">{results.energySavings.toLocaleString()} BTU</div>
                    <div className="text-sm text-blue-600">Electricity saved - enough to power homes for weeks</div>
                  </div>

                  <div className="p-4 bg-cyan-50 rounded-lg">
                    <div className="text-lg font-bold text-cyan-700">{results.waterSavings.toLocaleString()} gallons</div>
                    <div className="text-sm text-cyan-600">Fresh water conserved - drinking water supply for communities</div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                  <strong>Note:</strong> Calculations are based on industry averages and material composition. Actual environmental impact may vary based on material quality and processing methods.
                </p>
              </div>
            </motion.div>
          )}

          {/* Fun Facts */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
            <h4 className="font-bold text-gray-900 mb-3">💡 Environmental Impact Facts</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• Recycling 1 ton of aluminum saves the energy equivalent of 35 barrels of oil</p>
              <p>• Recycling steel saves 75% of the energy required to make steel from raw materials</p>
              <p>• The scrap recycling industry conserves enough energy to power NYC for over a month</p>
              <p>• Every ton of recycled material keeps 2.8 cubic yards from landfills</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Quick Calculator CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }} className="mt-16 text-center">
        <div className="bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Recycling?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of customers who trust K&L Recycling to handle their scrap metal responsibly and turn waste into environmental benefits.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#pricing-dashboard" className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Instant Quote
            </a>
            <a href="#schedule-pickup" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-all duration-300">
              Schedule Roll Off Service
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const CalculatorPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"environmental" | "pricing">("environmental");

  return (
    <Layout>
      <SEO title="Environmental Impact Calculator - K&L Recycling" description="Calculate the environmental impact of recycling scrap metal. See CO2 savings, trees planted, energy conserved, and landfill reduction from your recycling efforts." keywords="environmental impact calculator, recycling calculator, CO2 savings, scrap metal recycling, environmental savings" />

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex space-x-8">
            <button onClick={() => setActiveTab("environmental")} className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${activeTab === "environmental" ? "border-green-500 text-green-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}>
              🌱 Environmental Impact Calculator
            </button>
            <button onClick={() => setActiveTab("pricing")} className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${activeTab === "pricing" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}>
              💰 Quick Quote Calculator
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 bg-gray-50 min-h-screen">
        {activeTab === "environmental" ? (
          <EnvironmentalImpactCalculator />
        ) : (
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
              <h1 className="text-4xl font-black text-gray-900 mb-4">Pricing Information Coming Soon</h1>
              <p className="text-xl text-gray-600">Metal pricing updates will be available here shortly. Contact us directly for current rates.</p>
            </motion.div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pricing Calculator Temporarily Unavailable</h3>
              <p className="text-gray-600 mb-6">We are updating our pricing tools to provide better accuracy. For immediate pricing information, please call us directly.</p>
              <a href="tel:(903) 592-6299" className="bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors">
                Call for Current Pricing
              </a>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CalculatorPage;
