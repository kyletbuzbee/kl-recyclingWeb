import { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";
import dynamic from "next/dynamic";

const AnimatedCounter = dynamic(() => import("../components/AnimatedCounter"));

type TimelineEntry = {
  year: string;
  title: string;
  description: string;
  image?: string;
  stats?: { label: string; value: string; unit: string }[];
};

// Image insertion for About page - K&L Recycling history and leadership

const AboutPage: FC = () => {
  return (
    <Layout>
      <Head>
        <title>About Us | K&L Recycling</title>
        <meta name="description" content="Learn about K&L Recycling's over 50 year history of providing reliable and professional scrap metal recycling services." />
      </Head>
      <div className="animate-fade-in">
        {/* Trust-Building Hero Section - Reduced Height */}
        <section className="bg-gradient-to-br from-royal-blue-900 to-electric-blue-900 text-white py-16 relative">
          <div className="container mx-auto px-6 text-center">
            <motion.h1 initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-4xl md:text-6xl lg:text-7xl font-black mb-8">
              East Texas' Trusted Scrap Metal Leader
            </motion.h1>

            {/* Extended Scrolling Banner Text */}
            <div className="w-full overflow-hidden">
              <div className="flex">
                <motion.div
                  className="flex-shrink-0 text-xl md:text-2xl lg:text-3xl text-blue-100 leading-relaxed whitespace-nowrap font-bold"
                  animate={{
                    x: [1920, -4000],
                    color: ["#dbeafe", "#fbbf24", "#dbeafe"],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "reset",
                      duration: 56,
                      ease: "linear",
                    },
                    color: {
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    },
                  }}
                >
                  Family-Owned Since 1956 • 8 Locations Across Texas & Kansas • 56+ Years of Fair Pricing • ISN Certified • R2 Responsible Recycling • Award-Winning Safety Standards • East Texas' Most Trusted • Industry Leaders Since 1956 • Customer Satisfaction Guaranteed • Local Community Proud • Toll-Free: 800-533-8081 • Same-Day Service Available • Competitive Rates • Expert Metal Sorting • Compliant with EPA Standards • Community Investment • Future-Focused Recycling Innovation • Certified Professional Staff • State-of-the-Art Equipment • Rigorous Safety Protocols • Environmental Stewardship • Sustainable Business Practices • Customer-Centric Approach • 24/7 Recycling Solutions • Trusted by East Texas Businesses • Quality Metal Recovery • Fair Market Pricing Guarantee • R2 Responsible
                  Recycling Certified • ISN Industry Safety Standards • Award-Winning Service Excellence • Generations of Family Ownership • Local East Texas Heritage • Kansas Service Expansion • Professional Customer Service • Advanced Recycling Technology • Metal Recovery Experts • Scrap Metal Processors • Environmentally Conscious Operations • Community-Focused Business Model •
                </motion.div>
              </div>
            </div>

            {/* Trust Stats Bar */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-black text-orange-300 mb-2">56+</div>
                <div className="text-sm md:text-base font-semibold">Years of Service</div>
                <div className="text-xs text-blue-200 mt-1">Reliable Since 1956</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-black text-green-300 mb-2">♥</div>
                <div className="text-sm md:text-base font-semibold">Family Values</div>
                <div className="text-xs text-blue-200 mt-1">Rooted in Community</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-black text-purple-300 mb-2">9</div>
                <div className="text-sm md:text-base font-semibold">Locations</div>
                <div className="text-xs text-blue-200 mt-1">Across TX & KS</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-black text-red-300 mb-2">100%</div>
                <div className="text-sm md:text-base font-semibold">Family Owned</div>
                <div className="text-xs text-blue-200 mt-1">Local Community Focus</div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Funnel Structure */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* 1. What is K&L Recycling? */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <Image src="/assets/equipment/project-planning-scrap.jpg" alt="K&L Recycling yard and operations" width={600} height={400} className="rounded-lg shadow-lg" />
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-royal-blue-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is K&L Recycling?</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">K&L Recycling is East Texas' premier scrap metal recycling company with over 68 years of experience providing fair pricing, reliable service, and environmental stewardship. We serve homeowners, contractors, manufacturers, and industrial operations across Texas and Kansas.</p>
                  <div className="space-y-3">
                    {["Family-owned since 1956 with local values", "8 locations across Texas and Kansas", "ISN certified safety standards", "REMA responsible recycling certification"].map((detail, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-royal-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-gray-700 leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2. Who is K&L Recycling for? */}
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
                <div className="flex items-center mb-8">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900">Who is K&L Recycling for?</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="w-12 h-12 bg-royal-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Homeowners</h3>
                    <p className="text-gray-600 text-sm">Residential customers bringing household scrap and appliances</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4v3h1v-3m0 3h3m-3 0h1"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Contractors</h3>
                    <p className="text-gray-600 text-sm">Construction and demolition companies needing waste management</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4v3h1v-3m0 3h3m-3 0h1"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Manufacturers</h3>
                    <p className="text-gray-600 text-sm">Industrial operations with ongoing scrap generation needs</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Communities</h3>
                    <p className="text-gray-600 text-sm">Local organizations and municipalities with recycling initiatives</p>
                  </div>
                </div>
              </div>

              {/* 3. How does K&L Recycling work? */}
              <div className="mb-20">
                <div className="flex items-center mb-8">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900">How does K&L Recycling work?</h2>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    {
                      step: "1",
                      title: "Collection",
                      desc: "We collect scrap metals from homes, businesses, and industrial facilities across our service area.",
                    },
                    {
                      step: "2",
                      title: "Processing",
                      desc: "Materials are sorted, processed, and prepared according to industry standards at our facilities.",
                    },
                    {
                      step: "3",
                      title: "Recycling",
                      desc: "Processed metals are recycled into new products, reducing environmental impact and conserving resources.",
                    },
                    {
                      step: "4",
                      title: "Payment",
                      desc: "Customers receive fair market-based compensation for their recyclable materials.",
                    },
                  ].map((step, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                      <div className="w-12 h-12 bg-royal-blue-600 rounded-full flex items-center justify-center mb-4">
                        <span className="text-white font-bold text-lg">{step.step}</span>
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Why choose K&L Recycling? */}
              <div className="bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white rounded-2xl p-8 md:p-12 mb-20">
                <div className="flex items-center mb-8">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-black font-bold text-lg">4</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white">Why choose K&L Recycling?</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-6 text-white">Our Advantages:</h3>
                    <div className="space-y-4">
                      {["68+ years of family-owned operation", "Fair market-based pricing guaranteed", "8 locations for convenient service", "R2 and ISN certified operations", "Local community investment", "Zero landfill waste commitment"].map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span className="text-blue-100 leading-relaxed font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-6 text-white">Our Commitment to Fair Pricing:</h3>
                    <div className="space-y-4 text-blue-100">
                      <p className="leading-relaxed">We monitor global metal markets daily and pass savings directly to our customers - not corporate profit margins.</p>
                      <p className="leading-relaxed">Our family-owned status means we value long-term relationships over transaction-based business.</p>
                      <p className="leading-relaxed">Local ownership and decision-making ensures responsive service and competitive pricing.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Get started with K&L Recycling */}
              <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900">Ready to experience fair recycling?</h2>
                </div>

                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers who trust K&L Recycling for reliable service and fair pricing. We're here to make recycling simple and beneficial.</p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/contact" className="inline-flex items-center bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 9.574 4 8s3 3.582 9 8z"></path>
                    </svg>
                    Contact Us Today
                  </Link>
                  <a href="tel:+18005338081" className="inline-flex items-center border-2 border-gray-600 text-gray-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-xl transition-all duration-300">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    Call (800) 533-8081
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section: Inside Our Family Business */}
        <section className="py-16 bg-gradient-to-r from-slate-900 to-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">🎥 Family Documentary</div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Inside Our Family Business</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">Take a journey through 68+ years of family tradition, innovation, and community commitment.</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video controls preload="metadata" poster="/assets/layout/hero-background.jpg" className="w-full aspect-video">
                  <source src="/videos/KLhistory.mp4" type="video/mp4" />
                  Your browser does not support video playback.
                </video>

                {/* Video overlay info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-white/90">Discover the story behind East Texas' oldest family-owned scrap recycling business</p>
                </div>
              </motion.div>

              {/* Video testimonials preview */}
              <div className="mt-8 grid md:grid-cols-3 gap-4">
                {[
                  {
                    quote: "Family values drive everything we do",
                    author: "Andy Wells",
                  },
                  {
                    quote: "Innovation hasn't stopped since 1956",
                    author: "Mark Wells",
                  },
                  {
                    quote: "Community is our greatest achievement",
                    author: "Sarah Johnson",
                  },
                ].map((testimonial, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="text-3xl text-orange-400 mb-2">"</div>
                    <p className="text-white/90 italic mb-3">{testimonial.quote}</p>
                    <p className="text-orange-300 font-medium">- {testimonial.author}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Timeline: 68 Years of Innovation */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">📈 68 Years of Innovation</div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Journey Through Time</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">From a single truck in 1956 to 9 locations across Texas and Kansas. Click through our interactive timeline.</p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Timeline Container */}
              <div className="relative">
                {/* Main timeline line */}
                <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600"></div>

                {[
                  {
                    year: "1956",
                    title: "Foundation & Beginning",
                    description: "Started with a single truck and a vision to serve East Texas businesses with honest, reliable scrap metal recycling.",
                    icon: "🚚",
                    side: "left",
                    stats: [
                      { label: "First Location", value: "Tyler, TX", unit: "" },
                      { label: "Equipment", value: "1 Truck", unit: "" },
                      {
                        label: "Mission",
                        value: "Community Service",
                        unit: "",
                      },
                    ],
                  },
                  {
                    year: "1975",
                    title: "Expansion & Growth",
                    description: "Aquired additional facilities and expanded service area to include construction and industrial clients.",
                    icon: "🏗️",
                    side: "right",
                    stats: [
                      { label: "New Locations", value: "4 Yards", unit: "" },
                      { label: "Service Expansion", value: "Complete", unit: "" },
                      { label: "Client Base", value: "Growing", unit: "" },
                    ],
                  },
                  {
                    year: "1995",
                    title: "Technology & Efficiency",
                    description: "Invested in modern processing equipment and computerized weighing systems for better accuracy and speed.",
                    icon: "⚙️",
                    side: "left",
                    stats: [
                      {
                        label: "Equipment Upgrade",
                        value: "Complete",
                        unit: "",
                      },
                      { label: "Precision Systems", value: "Installed", unit: "" },
                      { label: "Efficiency Gains", value: "Significant", unit: "" },
                    ],
                  },
                  {
                    year: "2010",
                    title: "Kansas Expansion",
                    description: "Opened first Kansas location and invested in mobile crushing and demolition services across both states.",
                    icon: "🌽",
                    side: "right",
                    stats: [
                      { label: "Kansas Locations", value: "3 Yards", unit: "" },
                      { label: "Service States", value: "2 States", unit: "" },
                      { label: "Mobile Services", value: "Active", unit: "" },
                    ],
                  },
                  {
                    year: "2020",
                    title: "Digital Transformation",
                    description: "Launched online scheduling, real-time pricing, and mobile app for customer convenience.",
                    icon: "📱",
                    side: "left",
                    stats: [
                      { label: "Online Quotes", value: "24/7", unit: "" },
                      { label: "Mobile App", value: "Launched", unit: "" },
                      {
                        label: "Digital Customers",
                        value: "50%",
                        unit: "of total",
                      },
                    ],
                  },
                  {
                    year: "2025",
                    title: "AI-Powered Future",
                    description: "Pioneering AI-based market analysis, environmental impact tracking, and automated pricing systems.",
                    icon: "🤖",
                    side: "right",
                    stats: [
                      { label: "AI Tools", value: "Active", unit: "" },
                      {
                        label: "Market Intelligence",
                        value: "Real-time",
                        unit: "",
                      },
                      { label: "Innovation", value: "Continuous", unit: "" },
                    ],
                  },
                ].map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{
                      opacity: 0,
                      x: milestone.side === "left" ? -50 : 50,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className={`relative mb-16 ${milestone.side === "left" ? "pr-1/2" : "pl-1/2 pl-8"}`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute top-6 ${milestone.side === "left" ? "right-0 translate-x-2.5" : "left-0 -translate-x-2.5"} w-6 h-6 bg-${milestone.side === "left" ? "blue" : "indigo"}-600 rounded-full border-4 border-white shadow-lg`}></div>

                    {/* Content card */}
                    <div className={`${milestone.side === "left" ? "mr-8" : "ml-8"} bg-white rounded-2xl shadow-xl p-6 border border-gray-200`}>
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-4">{milestone.icon}</div>
                        <div>
                          <div className="text-3xl font-black text-gray-900">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-gray-800">{milestone.title}</h3>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">{milestone.description}</p>

                      {/* Stats grid */}
                      <div className="grid grid-cols-3 gap-4">
                        {milestone.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="text-center">
                            <div className="text-lg font-bold text-indigo-600">{stat.value}</div>
                            <div className="text-xs text-gray-500">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Facility Tour */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-slate-900 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">🏭 Virtual Tour</div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">Explore Our Facilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Take an immersive virtual tour of our state-of-the-art recycling facilities.</p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Tour navigation */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {[
                  {
                    name: "Scrap Yard Overview",
                    icon: "🏞️",
                    description: "50-acre processing area",
                  },
                  {
                    name: "Processing Equipment",
                    icon: "⚙️",
                    description: "Modern crushing & sorting",
                  },
                  {
                    name: "Safety Systems",
                    icon: "🛡️",
                    description: "OSHA compliant facilities",
                  },
                  {
                    name: "Innovation Lab",
                    icon: "🔬",
                    description: "Future recycling tech",
                  },
                ].map((area, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.05 }} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 ${index === 0 ? "ring-2 ring-purple-400" : "hover:bg-white/20"}`}>
                    <div className="text-4xl mb-3">{area.icon}</div>
                    <h3 className="font-bold text-white mb-2">{area.name}</h3>
                    <p className="text-gray-300 text-sm">{area.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Main tour display */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Scrap Processing Yard</h3>
                  <p className="text-gray-300">Our main Tyler, TX facility features state-of-the-art equipment and comprehensive scrap metal processing capabilities</p>
                </div>

                {/* Interactive 360° preview placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-slate-800 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                  {/* Placeholder for 360° tour */}
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">360°</div>
                    <p className="text-xl font-semibold mb-2">Virtual Tour Coming Soon</p>
                    <p className="text-gray-300">Interactive 360° facility exploration</p>
                  </div>

                  {/* Preview images or video thumbnails */}
                  <div className="absolute inset-0 opacity-30">
                    <Image src="/assets/services/Construction.jpg" alt="Facility preview" fill className="object-cover" />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/20 rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">Technology</h4>
                    <p className="text-gray-300 text-sm">Advanced sorting and processing equipment</p>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">Safety</h4>
                    <p className="text-gray-300 text-sm">Full OSHA and ISN compliance across all facilities</p>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">Service</h4>
                    <p className="text-gray-300 text-sm">Comprehensive recycling services and expertise</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <Image src="/images/project-planning-scrap.jpg" alt="K&L Recycling yard" className="rounded-lg shadow-2xl" width={1200} height={800} />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl font-black text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-700 mt-4">With over 50 years of experience, K&L Recycling started with a single truck and a simple promise: to provide honest, reliable service to the businesses of East Texas. That promise remains the bedrock of our company today.</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-8">Our Mission</h3>
              <p className="text-lg text-gray-700 mt-2">To provide the safest, most efficient, and most profitable scrap management solutions for our industrial partners.</p>
            </div>
          </div>
        </section>

        {/* Community & Environment Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">Local Community & Environmental Leadership</h2>
              </div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">More than just business - we're committed to making East Texas and Kansas better places to live and work.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Community Giving</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">We donate hundreds of thousands of pounds of materials annually to local organizations and support community programs across Texas and Kansas.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Local schools and universities
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Disaster relief efforts
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Youth sports programs
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Environmental Impact</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">Every ton of metal we recycle saves up to 2.5 tons of CO2 emissions and conserves essential natural resources for future generations.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    R2 Certified recycling standards
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    EPA compliant operations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Zero-landfill waste management
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Safety First</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">ISN (Institute of Scrap Recycling Industries) compliant operations ensure the highest safety standards for employees, customers, and communities.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    OSHA training & compliance
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Emergency response certified
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Community safety partnerships
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* New: Leadership/Team Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black text-center text-gray-900 mb-12" data-aos="fade-up">
              Our Leadership Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Mark Wells",
                  title: "Co-Owner & President",
                  bio: "67+ years in recycling, Mark co-founded K&L in 1956 and continues to drive the company's vision and community leadership.",
                  image: "/assets/services/Construction.jpg",
                },
                {
                  name: "Andy Wells",
                  title: "Co-Owner & Vice President",
                  bio: "With 30 years in the industry, Andy co-owns K&L and oversees strategic operations, technology, and customer service excellence.",
                  image: "/images/roll-off-container.jpg",
                },
                {
                  name: "Corey Crow",
                  title: "CEO",
                  bio: "Corey serves as Chief Executive Officer, managing overall company operations across our 9 locations with focus on growth and efficiency.",
                  image: "/images/vehicles_accepted.jpg",
                },
              ].map((leader, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                  <Image src={leader.image} alt={leader.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" width={128} height={128} />
                  <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                  <p className="text-gray-600 mb-2">{leader.title}</p>
                  <p className="text-gray-700 text-sm">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New: Awards and Certifications Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-black text-gray-900 mb-12" data-aos="fade-up">
              Awards and Certifications
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  name: "R2 Certified",
                  description: "Responsible Recycling certification for electronics and metals.",
                  image: "/images/r2-certified-logo.png",
                },
                {
                  name: "ISN Compliant",
                  description: "Industry-leading safety and compliance standards.",
                  image: "/images/isn-logo.png",
                },
                {
                  name: "East Texas Business Award",
                  description: "Recognized for outstanding community contributions in 2024.",
                  image: "/images/r2-certified-logo.png",
                },
              ].map((award, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                  <Image src={award.image} alt={award.name} className="h-20 mx-auto mb-4" width={120} height={80} />
                  <h3 className="text-xl font-bold text-gray-900">{award.name}</h3>
                  <p className="text-gray-600 text-sm">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Family First Community Program */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">🤝 Family First Program</div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Community & Sponsorships</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Since 1956, we've made East Texas our home. Through the Family First program, we're giving back to the communities that built us.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Supporting Our Neighbors</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">⚾</div>
                      <h4 className="text-xl font-bold text-gray-900">Little League Sponsorship</h4>
                    </div>
                    <p className="text-gray-600">Proud sponsor of East Texas youth sports leagues, providing equipment and support for over 1,200 children.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">🏫</div>
                      <h4 className="text-xl font-bold text-gray-900">School Recycling Drives</h4>
                    </div>
                    <p className="text-gray-600">Partnered with 48 local schools for recycling education programs. K&L matches 50% of proceeds from school drives.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">🎗️</div>
                      <h4 className="text-xl font-bold text-gray-900">Charity Fundraisers</h4>
                    </div>
                    <p className="text-gray-600">Annual charity fundraisers raising over $150,000 for local organizations providing disaster relief and emergency support.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Community Impact Since 1956</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Local Organizations Supported</span>
                    <span className="font-bold text-emerald-600">95+</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">School Partnerships</span>
                    <span className="font-bold text-emerald-600">48</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Youth Athletes Sponsored</span>
                    <span className="font-bold text-emerald-600">1,200+</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Fundraising Dollars Matched</span>
                    <span className="font-bold text-emerald-600">$500K</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-gray-700">Community Events Sponsored</span>
                    <span className="font-bold text-emerald-600">250+</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-emerald-800 text-sm italic">"When people see K&L supporting our schools and sports teams, they know we're invested in East Texas for the long haul."</p>
                  <p className="text-emerald-900 text-xs mt-2 font-medium">- Mark Wells, Co-Owner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
      </div>
    </Layout>
  );
};

export default AboutPage;
