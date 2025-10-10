import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import dynamic from "next/dynamic";
import Link from "next/link";

// Image insertion for Home page - K&L Recycling services and facilities

import { SERVICES_DATA } from "@/data/services";
import AnimatedBanner from "@/components/AnimatedBanner";
import TrustBuilder from "@/components/TrustBuilder";

const Hero = dynamic(() => import("@/components/Hero"));
const TrustBadges = dynamic(() => import("@/components/TrustBadges").then((mod) => mod.TrustBadges));
const Testimonials = dynamic(() => import("@/components/Testimonials"));

const HomePage: FC = (): JSX.Element => {
  return (
    <Layout>
      {/* Animated Banner */}
      <AnimatedBanner />

      <SEO
        title="East Texas Scrap Metal Recycling - Fair Pricing Since 1956"
        description="Leading East Texas scrap metal recycling company in Tyler TX since 1956. Industrial recycling services, roll-off container rental, bulk material handling. Call for free quotes."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "K&L Recycling",
          description: "East Texas scrap metal recycling company providing industrial recycling services, roll-off container rental, and fair pricing for all types of scrap metal.",
          url: "https://www.klrecycling.com",
          logo: "https://www.klrecycling.com/assets/certifications-logo/logo.png",
          foundingDate: "1956",
          address: {
            "@type": "PostalAddress",
            addressRegion: "TX",
            addressCountry: "US",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-903-581-0010",
            contactType: "customer service",
          },
          sameAs: ["https://www.facebook.com/KLRecycling", "https://www.linkedin.com/company/k-l-recycling"],
        }}
      />
      <Hero />

      {/* Trust Builder - Enhanced CTA with Trust Signals and Animated Metrics */}
      <TrustBuilder />



      {/* Who We Serve - Customer Segmentation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Different customers, tailored solutions. We understand each segment's unique needs and provide the right service approach.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-8 rounded-2xl shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-600 rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Homeowners & Public</h3>
                  <p className="text-sm md:text-base text-green-700 font-semibold">Residential Drop-Off Services</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">Perfect for homeowners, renters, and small property owners. Drop off your scrap metal at our convenient locations and get paid cash immediately.</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-green-700">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cash paid same-day for all scrap metals
                </div>
                <div className="flex items-center text-sm text-green-700">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No appointment necessary - stop by anytime
                </div>
                <div className="flex items-center text-sm text-green-700">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Friendly expert help identifying your materials
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/locations" className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                  Find Your Nearest Location
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
                <Link href="/materials-guide" className="inline-flex items-center justify-center border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                  View Materials We Buy
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4v3h1v-3m0 3h3m-3 0h1"></path>
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Contractors & Trades</h3>
                  <p className="text-sm md:text-base text-blue-700 font-semibold">Demolition & Construction Services</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">From construction sites to renovation projects. We provide the containers, equipment, and expertise to maximize scrap recovery and minimize landfill waste.</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-blue-700">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Roll-off containers from 10-40 yards
                </div>
                <div className="flex items-center text-sm text-blue-700">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Full-service demolition & metal recovery
                </div>
                <div className="flex items-center text-sm text-blue-700">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Certified crews & complete permitting
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/services#demolition" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                  Schedule Demolition Service
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </Link>
                <Link href="/services#roll-off" className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                  View Container Options
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 md:p-8 rounded-2xl shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600 rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4v3h1v-3m0 3h3m-3 0h1"></path>
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Industrial & Manufacturing</h3>
                  <p className="text-sm md:text-base text-purple-700 font-semibold">Bulk Scrap Metal Management</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">Large-scale operations need efficient, integrated solutions. We provide dedicated account management, custom containers, and enterprise-level service agreements.</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-purple-700">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom freight-hauling gondolas
                </div>
                <div className="flex items-center text-sm text-purple-700">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mobile car crushing at your facility
                </div>
                <div className="flex items-center text-sm text-purple-700">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dedicated account management & reporting
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/services#industrial" className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                  Industrial Scrap Solutions
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
                <Link href="/services#mobile-crushing" className="inline-flex items-center justify-center border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                  Mobile Processing Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Materials We Buy - Visual Gallery */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-royal-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">Materials We Buy</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We purchase all types of scrap metal from homeowners, contractors, and industries. Bring us your materials and get paid cash immediately.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                name: "Copper Wire & Pipe",
                image: "/assets/non-ferrous/copper_1.jpg",
                description: "Clean copper materials",
              },
              {
                name: "Aluminum Cans & Siding",
                image: "/assets/non-ferrous/aluminum_cast.jpg",
                description: "All aluminum forms accepted",
              },
              {
                name: "Steel & Iron",
                image: "/assets/ferrous/long_iron.jpg",
                description: "Structural steel and iron",
              },
              {
                name: "Brass & Bronze",
                image: "/assets/non-ferrous/brass.jpg",
                description: "Decorative and plumbing fixtures",
              },
              {
                name: "Stainless Steel",
                image: "/assets/non-ferrous/stainlesssteel.jpg",
                description: "Cooking equipment and appliances",
              },
              {
                name: "Electric Motors",
                image: "/assets/non-ferrous/electric_motors.jpg",
                description: "Copper windings recovered",
              },
              {
                name: "Lead & Batteries",
                image: "/assets/ferrous/vehicles_accept_large.jpg",
                description: "Properly drained only",
              },
              {
                name: "Demolition Scrap",
                image: "/assets/services/project-planning-scrap.jpg",
                description: "Construction and building materials",
              },
            ].map((material, index) => (
              <motion.div key={material.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image src={material.image} alt={`${material.name} - scrap metal we purchase`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-royal-blue-600 transition-colors duration-300">{material.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{material.description}</p>

                  {/* Subtle call-to-action hint */}
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center text-xs text-royal-blue-600 font-medium">Click to learn more →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L5.082-2.5C4.312-1.667 5.274 0 6.814 0z"></path>
                </svg>
                <span className="text-yellow-800 font-semibold">Important Note</span>
              </div>
              <p className="text-yellow-700 text-sm leading-relaxed">Prices fluctuate daily based on market conditions. Certain materials require special handling. Your final payment is based on weight and metal content. Contact us for the most current rates.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/materials" className="inline-flex items-center bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
                View Complete Materials List
              </Link>
              <Link href="/locations" className="inline-flex items-center border-2 border-gray-600 text-gray-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-xl transition-all duration-300">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Find Your Nearest Location
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Operational Services */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Operational Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Professional mobile demolition and car crushing services with complete permit handling</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[SERVICES_DATA.industrial, SERVICES_DATA["mobile-crushing"]].map((service, index) => (
              <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">OPERATIONAL SERVICE</div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {service.operationalDetails && (
                      <>
                        {service.operationalDetails.crewSize && (
                          <div className="text-center">
                            <div className="text-2xl mb-1">👥</div>
                            <div className="text-sm font-semibold text-gray-900">Crew Size</div>
                            <div className="text-xs text-gray-600">{service.operationalDetails.crewSize}</div>
                          </div>
                        )}
                        {service.operationalDetails.equipment && service.operationalDetails.equipment.length > 0 && (
                          <div className="text-center">
                            <div className="text-2xl mb-1">🔧</div>
                            <div className="text-sm font-semibold text-gray-900">Equipment</div>
                            <div className="text-xs text-gray-600">{service.operationalDetails.equipment.length} items</div>
                          </div>
                        )}
                        {service.operationalDetails.permits && service.operationalDetails.permits.length > 0 && (
                          <div className="text-center">
                            <div className="text-2xl mb-1">📋</div>
                            <div className="text-sm font-semibold text-gray-900">Permits</div>
                            <div className="text-xs text-gray-600">All handled</div>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={`/services/${service.id}`}
                      className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-3 px-6 rounded-lg text-center hover:shadow-lg transition-all duration-300"
                      onClick={() => {
                        if (typeof window !== "undefined" && window.gtag) {
                          window.gtag("event", "click", {
                            event_category: "cta",
                            event_label: `homepage_operational_${service.id}_learn_more`,
                            value: 1,
                          });
                        }
                      }}
                    >
                      Learn More
                    </Link>
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="flex-1 border-2 border-orange-600 text-orange-600 font-bold py-3 px-6 rounded-lg text-center hover:bg-orange-50 transition-all duration-300"
                      onClick={() => {
                        if (typeof window !== "undefined" && window.gtag) {
                          window.gtag("event", "click", {
                            event_category: "cta",
                            event_label: `homepage_operational_${service.id}_${service.id === "demolition" ? "schedule" : "book"}`,
                            value: 1,
                          });
                        }
                      }}
                    >
                      Schedule Services
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 text-gray-800 mb-4">
        <div className="container mx-auto px-6">
          {/* Services Hero Image */}
          <div className="mb-16" data-aos="fade-up">
            <Image src="/assets/services/roll-off-container-options.jpg" alt="K&L Recycling comprehensive scrap metal services" className="w-full max-w-6xl mx-auto rounded-2xl shadow-2xl" width={1200} height={800} priority />
          </div>

          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Recycling Services</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">We make recycling simple, fair, and beneficial for our clients and our community. From industrial services to public drop-offs, we're here to help.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.values(SERVICES_DATA)
                .slice(0, 6)
                .map((service, index) => (
                  <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 relative" whileHover={{ scale: 1.02 }}>
                    {/* Hover Effect Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-royal-blue-50 to-electric-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 p-8">
                      {/* Animated Icon */}
                      <motion.div whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }} transition={{ duration: 0.3 }} className="text-5xl mb-6 text-royal-blue-600 group-hover:text-electric-blue-600 transition-colors duration-300">
                        {service.icon}
                      </motion.div>

                      {/* Title with hover effect */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-royal-blue-800 transition-colors duration-300">{service.title}</h3>

                      {/* Description with better animation */}
                      <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{service.description}</p>

                      {/* Enhanced CTA Button */}
                      <Link href={`/services#${service.id}`} className="inline-flex items-center space-x-2 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 group-hover:shadow-xl">
                        <span>Learn More</span>
                        <motion.span className="text-lg" whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                          →
                        </motion.span>
                      </Link>

                      {/* Subtle accent line */}
                      <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-royal-blue-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-electric-blue-400 to-royal-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-3xl"></div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section - Quantifiable Results */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Proven Results for Industrial Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real success stories with measurable impact on our clients' operations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                company: "Fritcher Construction",
                result: "+23% Scrap Revenue",
                description: "Optimized metal recovery process increased revenue by 23% while reducing waste management costs",
                industry: "Demolition & Construction",
                impact: "revenue",
                color: "from-green-500 to-emerald-600",
              },
              {
                company: "Johnson Manufacturing",
                result: "15% Cost Reduction",
                description: "Streamlined scrap management reduced operational costs by 15% and improved workplace safety",
                industry: "Industrial Manufacturing",
                impact: "efficiency",
                color: "from-blue-500 to-cyan-600",
              },
              {
                company: "Texas Fabricators",
                result: "40% Faster Processing",
                description: "Container service optimization reduced processing time by 40% and increased production capacity",
                industry: "Metal Fabrication",
                impact: "speed",
                color: "from-purple-500 to-pink-600",
              },
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${story.color} rounded-xl flex items-center justify-center`}>
                      <span className="text-white font-bold text-xl">{story.impact === "revenue" ? "💰" : story.impact === "efficiency" ? "⚡" : "🚀"}</span>
                    </div>
                    <span className="text-xs bg-royal-blue-100 text-royal-blue-700 px-3 py-1 rounded-full font-semibold">{story.industry}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.company}</h3>

                  <div className="mb-4">
                    <div className={`inline-block bg-gradient-to-r ${story.color} text-white font-bold text-lg px-4 py-2 rounded-xl`}>{story.result}</div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <TrustBadges />
    </Layout>
  );
};

export default HomePage;
