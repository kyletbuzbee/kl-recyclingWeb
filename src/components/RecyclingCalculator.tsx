import React, { useState } from "react";

const RecyclingCalculator = () => {
  const [weight, setWeight] = useState(0);
  const [metalType, setMetalType] = useState("steel");
  const [result, setResult] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const metalTypes = [
    {
      value: "steel",
      label: "Steel",
      icon: "🔩",
      color: "from-gray-600 to-gray-800",
      co2Factor: 1.5,
    },
    {
      value: "aluminum",
      label: "Aluminum",
      icon: "🥤",
      color: "from-gray-400 to-gray-600",
      co2Factor: 8,
    },
    {
      value: "copper",
      label: "Copper",
      icon: "🔌",
      color: "from-orange-500 to-red-500",
      co2Factor: 4,
    },
    {
      value: "brass",
      label: "Brass",
      icon: "🎺",
      color: "from-yellow-500 to-yellow-600",
      co2Factor: 3,
    },
  ];

  const calculateImpact = async () => {
    setIsCalculating(true);

    // Simulate calculation delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const selectedMetal = metalTypes.find((m) => m.value === metalType);
    const co2Savings = weight * (selectedMetal?.co2Factor || 1.5);
    const treesSaved = Math.round(co2Savings / 22); // Approximate trees saved

    setResult(`Recycling ${weight} kg of ${metalType} saves approximately ${co2Savings.toFixed(1)} kg of CO2 emissions and ${treesSaved} trees!`);
    setIsCalculating(false);
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up">
      {/* Header */}
      <div className="bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 p-6 text-white">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <span className="text-2xl">♻️</span>
          </div>
          <h3 className="text-2xl font-bold">Recycling Impact Calculator</h3>
        </div>
        <p className="text-blue-100">See how your recycling makes a difference</p>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Metal Type Selection */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">Select Metal Type:</label>
          <div className="grid grid-cols-2 gap-3">
            {metalTypes.map((metal) => (
              <button key={metal.value} onClick={() => setMetalType(metal.value)} className={`p-4 rounded-xl border-2 transition-all duration-300 ${metalType === metal.value ? `border-royal-blue-500 bg-gradient-to-r ${metal.color} text-white shadow-lg transform scale-105` : "border-gray-200 hover:border-royal-blue-300 hover:bg-royal-blue-50"}`}>
                <div className="text-center">
                  <div className="text-2xl mb-2">{metal.icon}</div>
                  <div className="font-semibold text-sm">{metal.label}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Weight Input */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">Weight (kg):</label>
          <div className="relative">
            <input type="number" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value) || 0)} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-royal-blue-500 focus:ring-2 focus:ring-royal-blue-200 transition-all duration-300 text-lg font-semibold" placeholder="Enter weight in kg" />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-semibold">kg</div>
          </div>
        </div>

        {/* Calculate Button */}
        <button onClick={calculateImpact} disabled={weight <= 0 || isCalculating} className="w-full bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2">
          {isCalculating ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Calculating...</span>
            </>
          ) : (
            <>
              <span>Calculate Impact</span>
              <span className="text-xl">🚀</span>
            </>
          )}
        </button>

        {/* Result */}
        {result && (
          <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 animate-fade-in-up">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-green-800 mb-2">Environmental Impact</h4>
                <p className="text-green-700 font-semibold">{result}</p>
              </div>
            </div>
          </div>
        )}

        {/* Fun Facts */}
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
          <h4 className="font-semibold text-gray-800 mb-2 text-sm">💡 Did you know?</h4>
          <p className="text-gray-600 text-sm">Recycling one aluminum can saves enough energy to power a TV for 3 hours!</p>
        </div>
      </div>
    </div>
  );
};

export default RecyclingCalculator;
