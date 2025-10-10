import React, { FC, useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

interface TrustMetric {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon: string;
  color: string;
}

const TrustBuilder: FC = (): JSX.Element => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();
  const elementRef = useRef<HTMLDivElement>(null);

  const trustworthinessData = {
    years: 56,
    since: "Serving Texas since",
    year: "1969",
    certified: "CERTIFIED SCALES",
    locations: 9,
    locationsText: "Locations across East Texas & Kansas",
  };

  const trustMetrics: TrustMetric[] = [
    {
      value: 98,
      label: "Customer Satisfaction",
      suffix: "%",
      icon: "😊",
      color: "green",
    },
    {
      value: trustworthinessData.years,
      label: "Years of Excellence",
      icon: "🏛️",
      color: "blue",
    },
    {
      value: 9,
      label: "Locations Celebrating Service",
      suffix: "",
      icon: "📍",
      color: "purple",
    },
  ];

  const communityDonations = ["Food bank", "Cans for Kids", "Grace Community Church", "Andy's Elementary", "Grace Community School"];

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          controls.start("visible");
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasAnimated, controls]);

  const CounterAnimation = ({ metric, index }: { metric: TrustMetric; index: number }) => {
    const [count, setCount] = useState(0);
    const [hasCounted, setHasCounted] = useState(false);

    useEffect(() => {
      if (hasAnimated && !hasCounted) {
        setHasCounted(true);
        const duration = 2000;
        const startTime = Date.now();

        const updateCounter = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / duration, 1);

          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.floor(startValue + (metric.value - startValue) * easeOutQuart);

          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };

        const startValue = 0;
        requestAnimationFrame(updateCounter);
      }
    }, [hasCounted, metric.value]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.2 + index * 0.1 },
          },
        }}
        className={`${metric.color === "green" ? "bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200" : metric.color === "blue" ? "bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200" : "bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200"} p-6 rounded-2xl hover:shadow-xl transition-all duration-300`}
      >
        <div className="text-3xl mb-2">{metric.icon}</div>
        <div className={`${metric.color === "green" ? "text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600" : metric.color === "blue" ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600" : "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"} text-4xl font-black mb-1`}>
          {metric.prefix}
          {hasCounted ? count : "0"}
          {metric.suffix}
        </div>
        <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
      </motion.div>
    );
  };

  return (
    <section ref={elementRef} className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        {/* Main CTA Section with Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 },
            },
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Get Paid Cash Today for Your Scrap Metal</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">We buy all types of scrap metal and pay you cash immediately at our convenient locations.</p>

          {/* Primary and Secondary CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/quote" className="inline-flex items-center justify-center px-12 py-4 text-xl font-bold rounded-xl transition-all duration-300 bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-xl hover:shadow-2xl hover:scale-105">
                💰 Get Paid Cash Today
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/services#industrial" className="inline-flex items-center justify-center px-12 py-4 text-xl font-bold rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-white/20">
                📦 Schedule Container Service
              </Link>
            </motion.div>
          </div>

          {/* Trust Signals Bar */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-700">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-lg">Family-Owned Since {trustworthinessData.year}</span>
              </div>

              <div className="hidden md:block w-px h-8 bg-gray-300"></div>

              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-bold text-lg text-blue-700">{trustworthinessData.certified}</span>
              </div>

              <div className="hidden md:block w-px h-8 bg-gray-300"></div>

              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-lg">
                  {trustworthinessData.locations} {trustworthinessData.locationsText}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.6 },
            },
          }}
          className="max-w-6xl mx-auto mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Trusted by Industry Leaders</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Why thousands of businesses choose K&L Recycling</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                value: 500,
                label: "Partners",
                description: "Trusted Businesses",
                icon: "🏢",
                suffix: "+",
                color: "blue",
              },
              {
                value: 100,
                label: "Compliant",
                description: "EPA Standards",
                icon: "✅",
                suffix: "%",
                color: "green",
              },
              {
                value: 4.9,
                label: "Rating",
                description: "Customer Satisfaction",
                icon: "⭐",
                suffix: "/5",
                color: "yellow",
              },
              {
                value: "24/7",
                label: "Service",
                description: "Emergency Pickup",
                icon: "🚚",
                suffix: "",
                color: "purple",
              },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.6, delay: 0.8 + index * 0.1 },
                  },
                }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3">{metric.icon}</div>
                <div className={`text-3xl font-black mb-1 ${metric.color === "blue" ? "text-blue-600" : metric.color === "green" ? "text-green-600" : metric.color === "yellow" ? "text-yellow-500" : "text-purple-600"}`}>
                  {metric.value}
                  {metric.suffix}
                </div>
                <div className="text-lg font-bold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBuilder;
