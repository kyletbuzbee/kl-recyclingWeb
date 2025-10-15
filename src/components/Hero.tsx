"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TrustBuilder from "./TrustBuilder";

const Hero: FC = (): JSX.Element => {
  const headline = "50 Years of East Texas Recycling: Maximum Value, Minimum Hassle";
  const headlineWords = headline.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.5, // Wait for headline to finish
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 2, // Wait for sub-headline
      },
    },
  };

  const scrollVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 2.5,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image from layout_core_values.jpg */}
      <div className="absolute inset-0 z-0">
        <Image src="/assets/layout_core_values.jpg" alt="K&L Recycling core values - Honesty, Integrity, Respect, Excellence" fill priority quality={90} className="object-cover" style={{ objectPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-20 text-center max-w-6xl py-16">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          {/* Main Headline - WE PAY YOU CASH */}
          <motion.div variants={wordVariants} className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight mb-4 text-shadow-heavy text-white">WE PAY YOU CASH!</h1>
          </motion.div>

          {/* 50 Years Experience Badge */}
          <motion.div variants={textVariants} className="mb-8">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black text-2xl md:text-3xl px-8 py-4 rounded-full shadow-2xl">50 YEARS OF EXPERIENCE</div>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={textVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
              {[
                { name: "HONESTY", color: "from-green-500 to-emerald-600" },
                { name: "INTEGRITY", color: "from-blue-500 to-cyan-600" },
                { name: "RESPECT", color: "from-purple-500 to-indigo-600" },
                { name: "EXCELLENCE", color: "from-red-500 to-pink-600" },
              ].map((value, index) => (
                <motion.div key={value.name} initial={{ scale: 0, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 2 + index * 0.1, type: "spring", stiffness: 200 }} className={`bg-gradient-to-r ${value.color} text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg transform hover:scale-105 transition-transform`}>
                  {value.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sub Tagline */}
          <motion.p variants={textVariants} className="text-lg md:text-xl mb-8 max-w-4xl mx-auto font-medium text-white text-shadow-medium italic">
            Your trusted partner in scrap management, mobile processing, and oilfield demolition services
          </motion.p>

          {/* Description */}
          <motion.p variants={textVariants} className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto font-light text-white text-shadow-medium">
            East Texas' most trusted scrap metal recycling company since 1956. We turn your scrap into cash with fair pricing and honest service.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="tel:+18005338081" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl hover:scale-105">
                💰 Call Now (800) 533-8081
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl hover:scale-105">
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>

          {/* TrustBuilder Component */}
          <div className="mt-12">
            <TrustBuilder />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial="hidden" animate="visible" variants={scrollVariants} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-white/80 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default React.memo(Hero);
