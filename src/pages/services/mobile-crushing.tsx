import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { SERVICES_DATA } from "@/data/services";

// Process steps component
const ProcessSteps = () => {
  const steps = [
    {
      step: "01",
      title: "Project Planning & Scheduling",
      description: "We assess your vehicle inventory and coordinate our mobile unit arrival to minimize operational disruption.",
    },
    {
      step: "02",
      title: "Site Preparation & Safety Setup",
      description: "Our team establishes a secure processing zone with OSHA-compliant safety protocols and containment systems.",
    },
    {
      step: "03",
      title: "Vehicle Processing & Payment",
      description: "Each vehicle is drained, crushed, weighed, and you receive immediate cash payment on-site.",
    },
    {
      step: "04",
      title: "Eco-Friendly Cleanup",
      description: "All fluids and materials are handled according to EPA guidelines, leaving your site clean and compliant.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Our Streamlined Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">From assessment to payment - our process ensures maximum value and compliance</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-royal-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">{step.step}</div>
                {index < steps.length - 1 && <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-royal-blue-200 -ml-8"></div>}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Safety checklist component
const SafetyChecklist = () => {
  const safetyItems = ["OSHA-compliant safety protocols", "Spill containment systems for all fluids", "Fire extinguishers and emergency equipment", "Safety vests and hard hats for all personnel", "Traffic control for entry/exit points", "Environmental monitoring and compliance checks", "Emergency response plan established", "Equipment inspection before operation"];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Comprehensive Safety Checklist</h2>
          <p className="text-lg text-gray-600">Your safety and environmental compliance are our top priorities</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {safetyItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm">✓</span>
              </div>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials component
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "K&L's mobile crushing service was a game-changer for our dealership. We processed 50+ trade-ins in one day and got paid immediately. Their team was professional, safe, and efficient.",
      author: "Mike Johnson",
      company: "Lone Star Auto Sales, Tyler TX",
      rating: 5,
    },
    {
      quote: "We've used K&L mobile crushing for our salvage yard for over 5 years. They handle all the permits and environmental compliance, and their cash-on-site payment means we can reinvest in our business immediately.",
      author: "Sarah Rodriguez",
      company: "East Texas Salvage, Jacksonville TX",
      rating: 5,
    },
    {
      quote: "The mobile crushing service saved us thousands in transportation costs. Their team arrived on time, worked safely, and left our facility cleaner than they found it. Highly recommended.",
      author: "David Chen",
      company: "Metro Auto Group, Houston TX",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">Trusted by auto dealerships and salvage yards across Texas</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4 leading-relaxed">"{testimonial.quote}"</blockquote>
              <div className="border-t pt-4">
                <cite className="text-royal-blue-600 font-semibold">{testimonial.author}</cite>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ component
const FAQSection = () => {
  const faqs = [
    {
      question: "What types of vehicles do you crush?",
      answer: "We process passenger cars, trucks, SUVs, vans, and light commercial vehicles. Our industrial-grade equipment can handle vehicles from running condition to complete rust buckets.",
    },
    {
      question: "How quickly can you schedule service?",
      answer: "We typically schedule mobile crushing within 1-2 weeks, though rush service is available for urgent situations. Contact us for current availability.",
    },
    {
      question: "What happens to the fluids and non-metallic parts?",
      answer: "All fluids (oil, antifreeze, brake fluid, etc.) are captured in our contained drainage system and disposed of according to EPA regulations. Plastic, rubber, and glass components are separated for proper recycling.",
    },
    {
      question: "Do you provide documentation for each vehicle?",
      answer: "Yes, each vehicle receives detailed processing documentation including weight tickets, payment receipts, and environmental compliance certificates.",
    },
    {
      question: "What are your payment terms?",
      answer: "We pay cash on-site immediately after each vehicle is processed and weighed. Payments are based on current market values for scrap metal content.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about mobile crushing service</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-6 last:border-b-0">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Q: {faq.question}</h3>
              <p className="text-gray-600">A: {faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Permits section
const PermitsSection = () => {
  const permits = [
    {
      name: "EPA Mobile Processing Permits",
      description: "Comprehensive environmental compliance",
      icon: "🌱",
    },
    {
      name: "TEMPO Air Quality Permits",
      description: "Texas environmental protection",
      icon: "💨",
    },
    {
      name: "Texas Railroad Commission Registration",
      description: "For fluid handling operations",
      icon: "🚂",
    },
    {
      name: "Local County Permits",
      description: "Site-specific operational clearance",
      icon: "🏛️",
    },
    {
      name: "OSHA Safety Compliance",
      description: "Certified workplace standards",
      icon: "⚠️",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Permits & Regulatory Compliance</h2>
          <p className="text-lg text-gray-600">All necessary permits and compliance handled by our expert team</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {permits.map((permit, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">{permit.icon}</div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{permit.name}</h3>
              <p className="text-xs text-gray-600">{permit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MobileCrushingPage: React.FC = () => {
  const service = SERVICES_DATA["mobile-crushing"];

  return (
    <Layout>
      <SEO title="Mobile Car Crushing & On-Site Processing Service | Cash Paid On-Site" description={`Professional mobile car crushing service across TX, OK, LA, NM, KS, and AR. Cash paid immediately on-site. Fully insured, EPA-compliant. Free 2-week quote. Call (800) 533-8081.`} keywords="mobile car crushing, on-site auto crushing, mobile scrap processing, vehicle crushing service, Texas car crushing, cash paid on-site" twitterCard="summary_large_image" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 to-electric-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6">Mobile Car Crushing & On-Site Processing</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">Cash paid on-site · Insured crews · EPA-compliant disposal</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/contact" className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg">
              Book Mobile Service
            </Link>
            <a href="tel:+18005338081" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-colors text-lg">
              Call (800) 533-8081
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="text-lg mb-2">Serving: TX, OK, LA, NM, KS, and AR</p>
            <p className="text-sm">Professional mobile crushing since 1956</p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Industrial-Grade Processing at Your Location</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">Since 1956, K&L Recycling has pioneered mobile scrap metal processing, bringing industrial-grade car crushing equipment directly to your location. Eliminate transportation costs, delays, and hassle with our fully-mobile service.</p>
                <div className="space-y-4">
                  {service.details.map((detail: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-royal-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Image src={service.image} alt="K&L Recycling mobile car crushing equipment processing vehicles on-site" width={600} height={400} className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* Safety Checklist */}
      <SafetyChecklist />

      {/* Permits Section */}
      <PermitsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Book Mobile Crushing Service?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">Turn your automotive inventory into immediate cash flow with our professional mobile crushing service.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/contact" className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg">
              Book Mobile Service Today
            </Link>
            <Link href="/pricing" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-colors text-lg">
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <p className="text-blue-100">
              Learn more about our{" "}
              <Link href="/locations" className="underline hover:no-underline">
                service areas
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MobileCrushingPage;
