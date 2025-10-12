import React, { FC, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import dynamic from "next/dynamic";

const ServiceModal = dynamic(() => import("@/components/ServiceModal"));
const InteractiveContainerModel = dynamic(() => import("@/components/InteractiveContainerModel"));
import { SERVICES_DATA } from "@/data/services";

const ServicesPage: FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const serviceCategories = [
    {
      title: "Mobile Car Crushing & On-Site Processing",
      description: "High-volume, on-location car crushing services using specialized mobile equipment",
      services: ["mobile-crushing"],
      color: "from-royal-blue-600 to-electric-blue-600",
    },
    {
      title: "Roll-Off Container Services",
      description: "Flexible container rentals for scrap metal, demolition debris, and industrial waste",
      services: ["roll-off"],
      color: "from-green-600 to-emerald-600",
    },
    {
      title: "Oilfield & Gas Demolition",
      description: "Specialized demolition and equipment recovery services for oilfield operations",
      services: ["oilfield-demolition"],
      color: "from-orange-600 to-red-600",
    },
    {
      title: "Public Services & Community Recycling",
      description: "Support for municipalities, neighborhoods, and public organizations",
      services: ["public-services"],
      color: "from-purple-600 to-pink-600",
    },
  ];

  const skipToServices = () => {
    const servicesSection = document.getElementById("services-heading");
    if (servicesSection) {
      servicesSection.focus();
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      <Head>
        <title>Services - Scrap Metal Recycling Solutions | K&L Recycling</title>
        <meta name="description" content="Professional scrap metal recycling services including industrial pickup, demolition services, roll-off containers, and public drop-off. Competitive pricing and reliable service." />
        <link rel="canonical" href="https://www.klrecycling.com/services" />
      </Head>

      {/* Skip Links for Accessibility */}
      <div className="sr-only">
        <a href="#services-heading" onClick={skipToServices} className="skip-link focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-royal-blue-600 text-white px-4 py-2 rounded-md z-50 focus:ring-2 focus:ring-white focus:ring-offset-2">
          Skip to Services
        </a>
        <a href="#main-content" className="skip-link focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:translate-y-12 bg-royal-blue-600 text-white px-4 py-2 rounded-md z-50 focus:ring-2 focus:ring-white focus:ring-offset-2">
          Skip to Main Content
        </a>
      </div>

      {/* Hero Section */}
      <section id="main-content" className="bg-gradient-to-br from-gray-900 to-royal-blue-900 text-white py-32" role="banner" aria-labelledby="hero-title">
        <div className="container mx-auto px-6 text-center">
          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            Industrial Scrap Management Solutions
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 max-w-5xl mx-auto mb-12 leading-relaxed font-light">Professional-grade recycling services designed for manufacturing, demolition, and industrial operations across Texas and Kansas</p>

          {/* Enhanced CTA Buttons with better sizing and contrast */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
            <Link href="/contact#quote-tool" className="bg-white text-royal-blue-600 font-bold py-5 px-10 rounded-2xl hover:bg-gray-50 transition-all duration-300 text-xl min-h-[56px] min-w-[180px] flex items-center justify-center focus:ring-4 focus:ring-white focus:ring-offset-4 focus:ring-offset-royal-blue-900 shadow-2xl hover:shadow-white/25 hover:scale-105" aria-label="Get a free quote for our recycling services">
              Get Free Quote
            </Link>
            <Link href="/locations" className="border-3 border-white text-white font-bold py-5 px-10 rounded-2xl hover:bg-white hover:text-royal-blue-600 transition-all duration-300 text-xl min-h-[56px] min-w-[180px] flex items-center justify-center focus:ring-4 focus:ring-white focus:ring-offset-4 focus:ring-offset-royal-blue-900 shadow-2xl hover:scale-105" aria-label="Find our recycling locations near you">
              Find Location
            </Link>
          </div>

          {/* Trust indicators with better accessibility */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto" role="list" aria-label="Trust indicators">
            <div className="text-center" role="listitem">
              <div className="text-2xl font-bold text-white mb-1">68+</div>
              <div className="text-blue-200 text-sm font-medium">Years of Service</div>
            </div>
            <div className="text-center" role="listitem">
              <div className="text-2xl font-bold text-white mb-1">9</div>
              <div className="text-blue-200 text-sm font-medium">Locations</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1" role="listitem">
              <div className="text-2xl font-bold text-white mb-1">500K+</div>
              <div className="text-blue-200 text-sm font-medium">Tons Processed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-32 bg-white" aria-labelledby="categories-heading">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 id="categories-heading" className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Choose the service category that best fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" role="list" aria-label="Service categories">
            {serviceCategories.map((category, index) => (
              <article key={index} className="service-card p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg`}>
                  <span className="text-white text-3xl" role="presentation">
                    {index === 0 ? "🔥" : index === 1 ? "📦" : index === 2 ? "🛢️" : "🧑‍�"}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center leading-tight">{category.title}</h3>
                <p className="text-gray-600 text-center mb-8 leading-relaxed">{category.description}</p>

                {/* Category-specific images with improved alt text */}
                {index === 0 && (
                  <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                    <Image src="/assets/car_crushing_kl_services.jpg" alt="Industrial scrap metal processing - heavy machinery and professional equipment at K&L Recycling facility" width={400} height={200} className="object-cover w-full hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px" />
                  </div>
                )}
                {index === 1 && (
                  <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                    <Image src="/assets/demolition_cleanup.jpg" alt="Demolition site cleanup - construction debris and metal recovery services" width={400} height={200} className="object-cover w-full hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px" />
                  </div>
                )}
                {index === 2 && (
                  <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                    <Image src="/assets/equipment/in-action.png" alt="Public recycling center - accessible facility for individual and small business scrap metal recycling" width={400} height={200} className="object-cover w-full hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px" />
                  </div>
                )}

                {/* Improved service listing */}
                <div className="space-y-3" role="list" aria-label={`Services in ${category.title}`}>
                  {category.services.map((serviceId) => {
                    const service = SERVICES_DATA[serviceId];
                    return (
                      <div key={serviceId} className="flex items-start space-x-3" role="listitem">
                        <div className="w-3 h-3 bg-royal-blue-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span className="text-gray-700 leading-relaxed">{service.title}</span>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-gray-50" aria-labelledby="services-heading">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 id="services-heading" className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Detailed Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Click on any service to learn more about our offerings and pricing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" role="list" aria-label="Available services">
            {Object.entries(SERVICES_DATA).map(([id, service], index) => (
              <article
                key={id}
                className="service-card overflow-hidden cursor-pointer focus-within:ring-4 focus-within:ring-royal-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-white bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
                onClick={() => setSelectedService(id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedService(id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Learn more about ${service.title}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image src={service.image} alt={`${service.title} - Professional scrap metal recycling service`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={index < 3} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4" aria-hidden="true">
                    <span className="text-3xl" role="presentation">
                      {service.icon}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4" aria-hidden="true">
                    <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-royal-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Key Benefits:</h4>
                    <ul className="space-y-2" aria-label="Service benefits">
                      {service.benefits?.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-royal-blue-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                          <span className="text-sm text-gray-600 leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-royal-blue-600 font-semibold hover:text-royal-blue-700 transition-colors duration-300 flex items-center space-x-2" aria-hidden="true">
                      <span>Learn More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Interactive</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Accessibility Helper */}
          <div className="sr-only" id="services-description">
            Navigate through our services using Tab key. Press Enter or Space to open service details. Use Escape to close.
          </div>
        </div>
      </section>

      {/* 3D Container Model - Roll-off Services */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Interactive Container Visualization</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore our roll-off container sizes with this interactive 3D model. Switch between sizes to see capacity and dimensions.</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <InteractiveContainerModel initialSize="40-yard" />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Size Selection</h3>
              <p className="text-gray-600 text-sm">Choose the perfect container size for your project needs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visual Comparison</h3>
              <p className="text-gray-600 text-sm">See actual dimensions and capacity differences between sizes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Smart Scheduling</h3>
              <p className="text-gray-600 text-sm">Use scheduling tools that adapt to your timeline and needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/contact#quote-tool" className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg">
              Get Free Quote
            </Link>
            <Link href="/locations" className="border-2 border-blue-500 text-blue-500 font-bold py-4 px-8 rounded-xl hover:bg-blue-500 hover:text-white transition-colors text-lg">
              Find Location
            </Link>
          </div>
        </div>
      </section>

      {selectedService && <ServiceModal isOpen={!!selectedService} onClose={() => setSelectedService(null)} service={SERVICES_DATA[selectedService]} />}
    </Layout>
  );
};

export default ServicesPage;
