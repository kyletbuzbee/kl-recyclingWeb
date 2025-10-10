"use client";

import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero: FC = (): JSX.Element => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline preload="metadata" className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`} onLoadedData={() => setIsVideoLoaded(true)} poster="/assets/layout/hero-background.jpg">
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {!isVideoLoaded && (
          <motion.div
            variants={{
              visible: {
                scale: 1.1,
                x: 30,
                transition: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 20,
                  ease: "easeInOut",
                },
              },
            }}
            animate="visible"
            className="absolute inset-0"
          >
            <Image src="/assets/layout/hero-background.jpg" alt="K&L Recycling East Texas industrial recycling facility" fill priority quality={90} className="object-cover" />
          </motion.div>
        )}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-20 text-center max-w-6xl">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6 text-shadow-heavy text-white">
            {headlineWords.map((word, index) => (
              <motion.span key={index} variants={wordVariants} className="inline-block mr-3">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p variants={textVariants} className="text-lg md:text-xl lg:text-2xl mt-6 max-w-4xl mx-auto font-light text-white text-shadow-medium">
            Your trusted partner in large-scale industrial scrap management, mobile processing, and demolition services.
          </motion.p>

          <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="tel:+18005338081" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl hover:scale-105">
                💰 Get Paid Cash Today (800) 533-8081
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/materials-guide" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-2 border-white/20 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl hover:scale-105">
                � Roll-Off Services Scheduling
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.5 }} className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-white/90">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-lg">Serving Texas since 1956</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-bold text-lg">Certified Scales</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-lg">8 Locations across Texas & Kansas</span>
              </div>
            </div>
          </motion.div>
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
