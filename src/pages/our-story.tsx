import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Testimonials from "@/components/Testimonials";

const OurStory: FC = () => {
  const timelineEvents = [
    {
      year: "1956",
      title: "Humble Beginnings",
      description: "The Wells family opens its first scrap metal recycling yard in East Texas, driven by a commitment to community and fair business practices.",
      image: "/assets/layout/hero-background.jpg",
      quote: "We started with nothing but a strong work ethic and a promise to treat people right.",
    },
    {
      year: "1970s",
      title: "Family Legacy Continues",
      description: "Under young leadership, K&L expands operations while maintaining the same family values that built the business.",
      image: "/assets/layout/hero-background.jpg",
      quote: "It's not just about scrap metal - it's about building lives and communities.",
    },
    {
      year: "1990s",
      title: "Industrial Scale Operations",
      description: "K&L pioneers mobile crushing technology and expands into industrial demolition services, becoming East Texas's trusted partner for large-scale operations.",
      image: "/assets/layout/hero-background.jpg",
      quote: "We invest in our people and our equipment so we can serve our customers better.",
    },
    {
      year: "2010s",
      title: "Sustainability Leadership",
      description: "Embracing advanced recycling technologies and environmental certifications, K&L becomes a regional leader in sustainable scrap metal processing.",
      image: "/assets/layout/hero-background.jpg",
      quote: "Every piece of metal we recycle is a step toward a cleaner tomorrow.",
    },
    {
      year: "2024",
      title: "56 Years Strong",
      description: "Three generations continue the legacy of excellence, community service, and fair dealing that started in 1956.",
      image: "/assets/layout/hero-background.jpg",
      quote: "We're not just in the recycling business - we're in the relationship business.",
    },
  ];

  const values = [
    {
      icon: "🤝",
      title: "Family Values",
      description: "Fifty-six years of treating customers like family, with honesty, integrity, and respect for every person who walks through our doors.",
    },
    {
      icon: "🌱",
      title: "Community Commitment",
      description: "Every month we donate a portion of our proceeds to support East Texas families and causes, because thriving communities mean thriving businesses.",
    },
    {
      icon: "⚖️",
      title: "Fair Dealing",
      description: "Get what your scrap is really worth. No hidden fees, no lowball offers, no runaround. Just fair market prices and straightforward transactions.",
    },
    {
      icon: "👥",
      title: "Local Expertise",
      description: "East Texas born and raised. We know the area, understand the people, and speak the language. You're not just a customer - you're a neighbor.",
    },
    {
      icon: "🔒",
      title: "Trust & Reliability",
      description: "When we give our word, it's as solid as steel. Same-day payments, on-time deliveries, and consistent service you can depend on.",
    },
    {
      icon: "♻️",
      title: "Environmental Responsibility",
      description: "Responsible recycling means reduced landfill waste, lower energy consumption, and a healthier planet - benefits we proudly share with our community.",
    },
  ];

  const teamMembers = [
    {
      name: "Andy Wells",
      title: "Owner & President",
      role: "Committed owner and leader dedicated to building lasting relationships and maintaining our family's legacy of fair dealing and community service.",
      image: "/assets/layout/hero-background.jpg",
      quote: "Our business has always been about people first, building trust one customer at a time.",
    },
    {
      name: "Kyle Buzbee",
      title: "Marketing Director",
      role: "Marketing specialist focused on connecting the community with reliable recycling services and maintaining strong brand presence across East Texas.",
      image: "/assets/layout/hero-background.jpg",
      quote: "Marketing done right means sharing our story authentically while building genuine relationships.",
    },
    {
      name: "Senior Leadership & Field Operations",
      title: "Experienced Team",
      role: "Combined team with 56+ years of recycling expertise, from leadership to our certified, safety-trained field professionals.",
      image: "/assets/layout/hero-background.jpg",
      quote: "Together we turn what others see as waste into opportunity for our community.",
    },
  ];

  return (
    <Layout>
      <SEO title="Our Story | Family Legacy Since 1956" description="56 years of family-operated recycling excellence. Learn about the Buzbee family commitment to East Texas communities, fair dealing, and environmental responsibility." keywords="recycling history, family business, East Texas, Buzbee family, community values, fair prices" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012 2v1.45M20 21V11a2 2 0 00-2-2h-6a2 2 0 00-2 2v10M14 21v-4a2 2 0 012-2h6a2 2 0 012 2v4" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-6xl font-black">Our Family Story</h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">56 years of treating East Texas families right, with fair prices and genuine care</p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
              <div className="text-sm text-white/80 mb-2">Since our founding in</div>
              <div className="text-4xl font-black text-yellow-400">1956</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">56 Years of Family Commitment</h2>
            <p className="text-xl text-gray-600">Three generations of Buzbees building relationships and recycling dreams</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

            {timelineEvents.map((event, index) => (
              <motion.div key={event.year} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-black text-lg mr-4">{event.year}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-900 font-medium italic">"{event.quote}"</p>
                      <p className="text-blue-600 text-sm mt-1">- The Buzbee Family</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Our Family Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do, passed down through generations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Meet Our Family</h2>
            <p className="text-xl text-gray-600">The dedicated team continuing a legacy of excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div key={member.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-4">{member.title}</p>
                <p className="text-gray-600 mb-6">{member.role}</p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-gray-900 font-medium italic">"{member.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose K&L Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Why East Texas Chooses K&L</h2>
            <p className="text-xl max-w-3xl mx-auto">It's not just about recycling - it's about relationships built on trust, fairness, and community values that span generations.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "56", suffix: "+", label: "Years of Trust", icon: "🕒" },
              { number: "7", label: "Locations Serving You", icon: "📍" },
              { number: "100%", label: "Fair Market Prices", icon: "💰" },
              { number: "56", suffix: "K+", label: "Tons Processed Annually", icon: "⚡" },
            ].map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-black text-green-200 mb-2">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Experience Our Family Values Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Bring your scrap metal to any K&L location and see why East Texas has trusted us for 56 years. Fair prices, friendly service, and genuine care - just like family should be.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="/contact" className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
              Contact Us Today
            </a>
            <a href="/locations" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors">
              Find a Location
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurStory;
