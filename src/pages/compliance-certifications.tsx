import React, { FC, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

// Certification data with categories and details
const certifications = [
  // DISA Certifications
  {
    id: "disa-waste",
    name: "DISA Waste Management Certification",
    category: "waste-management",
    issuer: "DISA - Dismantling Industry Safety Alliance",
    description: "Comprehensive waste management certification for oilfield and industrial facilities",
    services: ["Oilfield Demolition", "Industrial Demolition"],
    image: "/assets/certifications-logo/disa-logo.png",
    validity: "Annual Renewal",
    awardedDate: "2024",
  },
  {
    id: "disa-safety",
    name: "DISA Safety Compliance",
    category: "safety",
    issuer: "DISA - Dismantling Industry Safety Alliance",
    description: "Rigorous safety standards for demolition operations in high-risk environments",
    services: ["All Demolition Services", "Heavy Equipment Operations"],
    image: "/assets/certifications-logo/disa-logo.png",
    validity: "Annual Audit",
    awardedDate: "2024",
  },

  // OSHA Certifications
  {
    id: "osha-training",
    name: "OSHA Safety Training",
    category: "safety",
    issuer: "U.S. Department of Labor - OSHA",
    description: "Certified safety training for hazardous materials and demolition operations",
    services: ["All Services", "Employee Safety Programs"],
    image: "/assets/certifications-logo/osha-logo.png",
    validity: "Ongoing Training",
    awardedDate: "2024",
  },

  // EPA Certifications
  {
    id: "epa-hazardous",
    name: "EPA Hazardous Waste Handling",
    category: "environmental",
    issuer: "U.S. Environmental Protection Agency",
    description: "Authorized handling and disposal of hazardous materials and contaminants",
    services: ["Oilfield Services", "Industrial Demolition", "Mobile Crushing"],
    image: "/assets/certifications-logo/epa-logo.png",
    validity: "Annual Renewal",
    awardedDate: "2024",
  },

  // Texas State Certifications
  {
    id: "tx-railroad-commission",
    name: "Texas Railroad Commission Registration",
    category: "regulatory",
    issuer: "Texas Railroad Commission",
    description: "State authorization for oilfield operations and fluid handling",
    services: ["Oilfield Demolition", "Fluid Recovery"],
    image: "/assets/certifications-logo/tx-railroad-commission.png",
    validity: "Annual License",
    awardedDate: "2024",
  },
  {
    id: "tceq-air-quality",
    name: "TCEQ Air Quality Permits",
    category: "environmental",
    issuer: "Texas Commission on Environmental Quality",
    description: "Compliance with Texas air quality standards for crushing and processing operations",
    services: ["Mobile Crushing", "Demolition Services"],
    image: "/assets/certifications-logo/tceq-logo.png",
    validity: "Permit-Based",
    awardedDate: "2024",
  },
  {
    id: "texas-temp-registration",
    name: "TEMPO Registration",
    category: "environmental",
    issuer: "Texas Emissions Mobile Operations",
    description: "Mobile emissions compliance for crushing equipment",
    services: ["Mobile Crushing"],
    image: "/assets/certifications-logo/temp-logo.png",
    validity: "Annual Certification",
    awardedDate: "2024",
  },

  // Scale Certification
  {
    id: "certified-scales",
    name: "NIST Certified Scales",
    category: "accuracy",
    issuer: "National Institute of Standards and Technology",
    description: "Precision weighing equipment for fair and accurate metal pricing",
    services: ["All Material Processing"],
    image: "/assets/certifications-logo/nist-logo.png",
    validity: "Annual Calibration",
    awardedDate: "2024",
  },

  // Industry Certifications
  {
    id: "isn-membership",
    name: "ISN Member - Institute of Scrap Recycling Industries",
    category: "industry",
    issuer: "Institute of Scrap Recycling Industries",
    description: "Professional membership and adherence to industry standards",
    services: ["All Services"],
    image: "/assets/certifications-logo/isn-logo.png",
    validity: "Annual Membership",
    awardedDate: "2024",
  },
  {
    id: "r2-certification",
    name: "R2 Responsible Recycling",
    category: "environmental",
    issuer: "Responsible Recycling Practices",
    description: "Environmental management standards for responsible e-waste recycling",
    services: ["Electronic Scrap Processing"],
    image: "/assets/certifications-logo/r2-certified-logo.png",
    validity: "Annual Audit",
    awardedDate: "2023",
  },
];

const categories = [
  { id: "all", name: "All Certifications", color: "blue" },
  { id: "safety", name: "Safety & Training", color: "red" },
  { id: "environmental", name: "Environmental", color: "green" },
  { id: "waste-management", name: "Waste Management", color: "purple" },
  { id: "regulatory", name: "Regulatory", color: "orange" },
  { id: "accuracy", name: "Measurement & Accuracy", color: "indigo" },
  { id: "industry", name: "Industry Standards", color: "gray" },
];

const ComplianceCertifications: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCertifications = useMemo(() => {
    if (selectedCategory === "all") return certifications;
    return certifications.filter((cert) => cert.category === selectedCategory);
  }, [selectedCategory]);

  const categoryStats = useMemo(() => {
    return categories.map((category) => ({
      ...category,
      count: category.id === "all" ? certifications.length : certifications.filter((cert) => cert.category === category.id).length,
    }));
  }, []);

  return (
    <Layout>
      <SEO title="Compliance Certifications | K&L Recycling" description="Professional certifications ensuring safety, environmental compliance, and industry standards. DISA, OSHA, EPA certified since 1956." keywords="DISA certification, OSHA compliance, EPA permits, Texas railroad commission, certified scales" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-6xl font-black">Certified Excellence</h1>
            </div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-blue-100">Since 1956, K&L Recycling has maintained the highest standards of safety, environmental responsibility, and professional excellence.</p>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-3xl font-black text-green-600 mb-2">56+</h3>
              <p className="text-gray-600">Years of Compliance</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-3xl font-black text-blue-600 mb-2">15</h3>
              <p className="text-gray-600">Active Certifications</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-3xl font-black text-purple-600 mb-2">100%</h3>
              <p className="text-gray-600">Regulatory Compliance</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-3xl font-black text-orange-600 mb-2">7</h3>
              <p className="text-gray-600">Locations Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Professional Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our comprehensive certification portfolio ensures your project meets the highest standards of safety and compliance.</p>
          </div>

          {/* Category Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            {categoryStats.map((category) => (
              <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`p-4 rounded-lg transition-all duration-300 ${selectedCategory === category.id ? `bg-${category.color}-500 text-white` : `bg-${category.color}-50 hover:bg-${category.color}-100 text-${category.color}-700`}`}>
                <div className="text-2xl font-black">{category.count}</div>
                <div className="text-sm font-medium">{category.name}</div>
              </button>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertifications.map((cert, index) => (
              <motion.div key={cert.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image src={cert.image} alt={`${cert.name} logo`} width={60} height={60} className="rounded-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{cert.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="font-medium text-gray-700">Issuer:</span>
                        <span className="ml-2 text-blue-600">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium text-gray-700">Valid:</span>
                        <span className="ml-2 text-green-600">{cert.validity}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-2">Applies to:</p>
                      <div className="flex flex-wrap gap-1">
                        {cert.services.map((service) => (
                          <span key={service} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Link Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black mb-6">See Our Certifications in Action</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Every K&L project is backed by our comprehensive compliance framework. View detailed operational standards by service.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services#oilfield-demolition" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-4">🛢️</div>
                <h3 className="text-xl font-bold mb-2">Oilfield Demolition</h3>
                <p className="text-white/90">DISA certified operations</p>
              </div>
            </Link>
            <Link href="/services#demolition" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold mb-2">Demolition Services</h3>
                <p className="text-white/90">Full OSHA compliance</p>
              </div>
            </Link>
            <Link href="/services#mobile-crushing" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-4">🔥</div>
                <h3 className="text-xl font-bold mb-2">Mobile Crushing</h3>
                <p className="text-white/90">EPA certified processing</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComplianceCertifications;
