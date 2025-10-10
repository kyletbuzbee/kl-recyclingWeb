import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface BannerItem {
  text: string;
  icon: string;
  type: "service" | "certification";
}

const bannerItems: BannerItem[] = [
  {
    text: "Scrap Metal Recycling Services",
    icon: "♻️",
    type: "service",
  },
  {
    text: "R2 Certified Recycling",
    icon: "🎖️",
    type: "certification",
  },
  {
    text: "Roller Container Services",
    icon: "🚛",
    type: "service",
  },
  {
    text: "ISN Compliant Operations",
    icon: "🛡️",
    type: "certification",
  },
  {
    text: "Mobile Demolition Services",
    icon: "🏗️",
    type: "service",
  },
  {
    text: "68+ Years of Experience",
    icon: "🏆",
    type: "service",
  },
  {
    text: "Live Market Pricing",
    icon: "💰",
    type: "service",
  },
  {
    text: "Fast Pickup Scheduling",
    icon: "⚡",
    type: "service",
  },
  {
    text: "ISN Safety Standards",
    icon: "🔒",
    type: "certification",
  },
];

const AnimatedBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerItems.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentItem = bannerItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-royal-blue-600 via-electric-blue-600 to-royal-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="flex items-center justify-center">
          {/* Animated Content - Now Full Width */}
          <div className="flex-1 max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div key={currentIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="text-center">
                <div className="flex items-center justify-center space-x-4 mb-2">
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, duration: 0.3 }} className="text-4xl">
                    {currentItem.icon}
                  </motion.span>
                  <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.4 }} className="text-2xl md:text-3xl font-bold">
                    {currentItem.text}
                  </motion.h2>
                </div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.3 }} className="text-lg opacity-90">
                  {currentItem.type === "service" ? "Professional Service • East Texas & Kansas" : "Industry Certification • Trusted Standards"}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {bannerItems.map((_, index) => (
            <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"}`} aria-label={`Go to slide ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 opacity-20">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="w-8 h-8 border-2 border-white rounded-full" />
      </div>
      <div className="absolute bottom-4 left-4 opacity-20">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} className="w-6 h-6 bg-white rounded-full" />
      </div>
    </div>
  );
};

export default AnimatedBanner;
