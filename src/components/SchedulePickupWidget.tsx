"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiCalendar, FiClock, FiMapPin, FiTruck } from "react-icons/fi";

const SchedulePickupWidget = () => {
  const [formData, setFormData] = useState({
    materialType: "",
    weight: "",
    pickupDate: "",
    pickupTime: "",
    address: "",
    name: "",
    phone: "",
    email: "",
  });
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const materials = [
    { id: "construction", name: "Construction Scrap", emoji: "🏗️" },
    { id: "household", name: "Household Items", emoji: "🏠" },
    { id: "industrial", name: "Industrial Waste", emoji: "🏭" },
    { id: "vehicles", name: "Vehicle Parts", emoji: "🚗" },
    { id: "electronics", name: "Electronics", emoji: "💻" },
    { id: "other", name: "Other Scrap", emoji: "📦" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 1 && (!formData.materialType || !formData.weight)) return;
    if (step === 2 && (!formData.pickupDate || !formData.pickupTime)) return;
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (!formData.address || !formData.name || !formData.phone) return;

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 border border-green-200 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl text-white">✅</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Pickup Scheduled!</h3>
        <p className="text-green-700 mb-4">We'll call you within 24 hours to confirm your pickup details.</p>
        <div className="bg-white/60 rounded-lg p-4 text-left">
          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <strong>Date:</strong> {new Date(formData.pickupDate).toLocaleDateString()}
            </p>
            <p>
              <strong>Time:</strong> {formData.pickupTime}
            </p>
            <p>
              <strong>Contact:</strong> {formData.name}
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4">Confirmation details will be sent to {formData.email}</p>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-6 border border-blue-200 hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
          <span className="text-2xl">📅</span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Schedule Pickup</h3>
          <p className="text-sm text-gray-600">
            Step {step} of 3: {step === 1 ? "Materials" : step === 2 ? "Schedule" : "Details"}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex space-x-2">
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className={`h-2 flex-1 rounded-full ${step >= stepNum ? "bg-blue-500" : "bg-gray-200"}`} />
          ))}
        </div>
      </div>

      {/* Step 1: Material Selection */}
      {step === 1 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">What type of scrap do you have?</label>
            <div className="grid grid-cols-2 gap-3">
              {materials.map((material) => (
                <button
                  key={material.id}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      materialType: material.id,
                    }))
                  }
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${formData.materialType === material.id ? "border-blue-500 bg-blue-50 shadow-md" : "border-gray-200 hover:border-blue-300 hover:bg-blue-25"}`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{material.emoji}</div>
                    <div className="text-sm font-semibold">{material.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Approximate Weight (tons)</label>
            <div className="relative">
              <input type="number" value={formData.weight} onChange={(e) => handleInputChange("weight", e.target.value)} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" placeholder="e.g. 2.5" step="0.1" min="0" />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-semibold">tons</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Step 2: Date/Time Selection */}
      {step === 2 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Preferred Pickup Date</label>
            <div className="relative">
              <input type="date" value={formData.pickupDate} onChange={(e) => handleInputChange("pickupDate", e.target.value)} min={new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split("T")[0]} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" />
              <FiCalendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Preferred Time Frame</label>
            <div className="relative">
              <select value={formData.pickupTime} onChange={(e) => handleInputChange("pickupTime", e.target.value)} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 appearance-none">
                <option value="">Select time preference</option>
                <option value="8:00 AM - 12:00 PM">Morning (8AM - 12PM)</option>
                <option value="12:00 PM - 5:00 PM">Afternoon (12PM - 5PM)</option>
                <option value="Flexible">Flexible timing</option>
              </select>
              <FiClock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </motion.div>
      )}

      {/* Step 3: Contact Details */}
      {step === 3 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Pickup Address</label>
            <div className="relative">
              <input type="text" value={formData.address} onChange={(e) => handleInputChange("address", e.target.value)} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" placeholder="Full address for pickup location" />
              <FiMapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name</label>
              <input type="text" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" placeholder="Your full name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number</label>
              <input type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" placeholder="(903) 555-0123" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address</label>
            <input type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" placeholder="your.email@example.com" />
          </div>
        </motion.div>
      )}

      {/* Navigation Buttons */}
      <div className="flex space-x-3 mt-6">
        {step > 1 && (
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handlePrev} className="flex-1 border-2 border-gray-300 text-gray-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
            Back
          </motion.button>
        )}

        {step < 3 ? (
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleNext} disabled={(step === 1 && (!formData.materialType || !formData.weight)) || (step === 2 && (!formData.pickupDate || !formData.pickupTime))} className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
            <span>Next</span>
            <span>→</span>
          </motion.button>
        ) : (
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleSubmit} disabled={!formData.address || !formData.name || !formData.phone} className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Scheduling...</span>
              </>
            ) : (
              <>
                <FiTruck className="w-4 h-4" />
                <span>Schedule Pickup</span>
              </>
            )}
          </motion.button>
        )}
      </div>

      {/* Disclaimer */}
      <div className="mt-4 p-3 bg-white/60 rounded-lg">
        <p className="text-xs text-gray-600 text-center leading-relaxed">All pickups are scheduled within 48 hours. We may call to confirm details and assess exact weight for accurate pricing.</p>
      </div>
    </motion.div>
  );
};

export default SchedulePickupWidget;
