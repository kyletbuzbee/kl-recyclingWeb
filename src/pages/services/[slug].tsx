import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import dynamic from "next/dynamic";
import { SERVICES_DATA } from "@/data/services";
import { Service } from "@/types/index";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface ServiceDetailProps {
  service: Service;
  slug: string;
}

const InteractiveContainerModel = dynamic(() => import("../../components/InteractiveContainerModel"), { ssr: false });

const ServiceDetail: NextPage<ServiceDetailProps> = ({ service, slug }) => {
  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-black text-gray-900 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
            <Link href="/services" className="bg-royal-blue-600 text-white px-6 py-3 rounded-lg hover:bg-royal-blue-700 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title={`${service.title} | K&L Recycling Services`} description={service.description} keywords={service.title.toLowerCase().replace(/\s+/g, ", ").replace("&", "and")} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 to-electric-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="text-5xl mb-4">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">{service.description}</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href={`/contact?service=${slug}`}
              className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg"
              onClick={() => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "click", {
                    event_category: "cta",
                    event_label: `service_${slug}_hero_book`,
                    value: 1,
                  });
                }
              }}
            >
              {service.id === "demolition" ? "Schedule Demolition" : service.id === "mobile-crushing" ? "Book Mobile Service" : "Get Free Quote"}
            </Link>
            <Link href="/locations" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-colors text-lg">
              Find Location
            </Link>
          </div>
        </div>
      </section>

      {/* Service Funnel Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* 1. What is the service? */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <Image src={service.image} alt={service.title} width={600} height={400} className="rounded-lg shadow-lg" />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-royal-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is {service.title}?</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.details.map((detail: string, index: number) => (
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

            {/* 2. Who is it for? */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">Who is {service.title.toLowerCase()} for?</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.id === "industrial" && (
                  <>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 bg-royal-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4v3h1v-3m0 3h3m-3 0h1"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Manufacturing Companies</h3>
                      <p className="text-gray-600 text-sm">Turn production waste into revenue streams with dedicated pickup schedules.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Construction Firms</h3>
                      <p className="text-gray-600 text-sm">Structural steel, rebar, and metal framework recycling with on-site service.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Power & Utilities</h3>
                      <p className="text-gray-600 text-sm">Copper wire, transformers, and electrical component recovery.</p>
                    </div>
                  </>
                )}
                {service.id === "demolition" && (
                  <>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4v3h1v-3m0 3h3m-3 0h1"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Contractors</h3>
                      <p className="text-gray-600 text-sm">Commercial demolition companies maximizing scrap value from projects.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Property Owners</h3>
                      <p className="text-gray-600 text-sm">Building renovations and teardown projects with metal recovery needs.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Local Governments</h3>
                      <p className="text-gray-600 text-sm">Municipal projects with environmental compliance and scrap value optimization.</p>
                    </div>
                  </>
                )}
                {service.id === "roll-off" && (
                  <>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Construction Sites</h3>
                      <p className="text-gray-600 text-sm">Ongoing scrap accumulation from construction and renovation projects.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Manufacturing Plants</h3>
                      <p className="text-gray-600 text-sm">Industrial operations with continuous scrap generation needs.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Cleanout Projects</h3>
                      <p className="text-gray-600 text-sm">Large residential or commercial cleanups generating significant scrap volume.</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* 3. How does it work? */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">How does {service.title.toLowerCase()} work?</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {(service.id === "industrial"
                  ? [
                      {
                        step: "1",
                        title: "Schedule Assessment",
                        desc: "We evaluate your scrap generation patterns and production schedule.",
                      },
                      {
                        step: "2",
                        title: "Custom Container Setup",
                        desc: "Place appropriately-sized containers in optimal locations for your workflow.",
                      },
                      {
                        step: "3",
                        title: "Regularized Pickup",
                        desc: "Scheduled collections that align with your production cycles.",
                      },
                      {
                        step: "4",
                        title: "Detailed Reporting",
                        desc: "Clear documentation of weights, values, and environmental impact.",
                      },
                    ]
                  : service.id === "demolition"
                    ? [
                        {
                          step: "1",
                          title: "Pre-Demolition Assessment",
                          desc: "Site walkthrough to identify structural metals and plan recovery process.",
                        },
                        {
                          step: "2",
                          title: "Safety Setup & Permits",
                          desc: "Establish safe work zones and complete all required regulatory compliance.",
                        },
                        {
                          step: "3",
                          title: "Coordinated Extraction",
                          desc: "Remove and sort metals as demolition progresses, working alongside your crew.",
                        },
                        {
                          step: "4",
                          title: "Environmental Cleanup",
                          desc: "Ensure proper handling and disposal of non-metallic materials.",
                        },
                      ]
                    : service.id === "roll-off"
                      ? [
                          {
                            step: "1",
                            title: "Size Selection",
                            desc: "Choose the right container size (10-40 yards) for your project needs.",
                          },
                          {
                            step: "2",
                            title: "Delivery & Placement",
                            desc: "We deliver and position containers where you need them, when convenient.",
                          },
                          {
                            step: "3",
                            title: "Fill & Manage",
                            desc: "Load scrap as generated - we can provide guidance on optimal loading.",
                          },
                          {
                            step: "4",
                            title: "Pickup & Payment",
                            desc: "Scheduled or on-call removal with immediate cash payment for your scrap.",
                          },
                        ]
                      : []
                ).map((step, index) => (
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

            {/* 4. Why choose us? */}
            <div className="bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white rounded-2xl p-8 md:p-12 mb-20">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-bold text-lg">4</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white">Why choose K&L for {service.title.toLowerCase()}?</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-6 text-white">Our Advantages:</h3>
                  <div className="space-y-4">
                    {service.benefits &&
                      service.benefits.map((benefit: string, index: number) => (
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
                  <h3 className="text-xl font-bold mb-6 text-white">Family-Owned Since 1956:</h3>
                  <div className="space-y-4 text-blue-100">
                    {service.id === "industrial" ? (
                      <>
                        <p className="leading-relaxed">68+ years of understanding East Texas manufacturing. We speak your language and value your time.</p>
                        <p className="leading-relaxed">Dedicated account management ensures consistent service, not transaction-based relationships.</p>
                        <p className="leading-relaxed">Fair prices based on market rates, not corporate profit margins.</p>
                      </>
                    ) : service.id === "demolition" ? (
                      <>
                        <p className="leading-relaxed">Experience with thousands of demolition projects across East Texas.</p>
                        <p className="leading-relaxed">Complete permitting and compliance handling saves you time and headaches.</p>
                        <p className="leading-relaxed">Equipment and expertise to handle any size demolition safely and efficiently.</p>
                      </>
                    ) : service.id === "roll-off" ? (
                      <>
                        <p className="leading-relaxed">Largest fleet in East Texas means containers when and where you need them.</p>
                        <p className="leading-relaxed">Available 7 days a week with emergency service options.</p>
                        <p className="leading-relaxed">Transparent pricing - know what you'll pay upfront, no surprises.</p>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            {/* 5. What's the next step? */}
            <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">Ready to get started with {service.title.toLowerCase()}?</h2>
              </div>

              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">{service.id === "industrial" ? "Transform your industrial waste into revenue. Contact us today for a free assessment and custom service plan." : service.id === "demolition" ? "Maximize scrap recovery from your next project. Schedule a free site assessment and permit consultation." : service.id === "roll-off" ? "Get the right container for your project. Free delivery assessment and no-obligation quote." : "Contact us to discuss your specific recycling needs."}</p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/contact?service=${slug}`} className="inline-flex items-center bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  {service.id === "demolition" ? "Schedule Free Site Assessment" : service.id === "mobile-crushing" ? "Book Mobile Service Consultation" : "Get Free Quote"}
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

      {/* Operational Details */}
      {service.operationalDetails && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Operational Details</h2>
                <p className="text-lg text-gray-600">Professional service with complete compliance and safety standards</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {service.operationalDetails.crewSize && (
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Crew Size</h3>
                    <p className="text-gray-600">{service.operationalDetails.crewSize}</p>
                  </div>
                )}

                {service.operationalDetails.equipment && service.operationalDetails.equipment.length > 0 && (
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Equipment</h3>
                    <ul className="text-gray-600 space-y-1">
                      {service.operationalDetails.equipment.slice(0, 3).map((item: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-royal-blue-600 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                      {service.operationalDetails.equipment.length > 3 && <li className="text-sm text-gray-500">+{service.operationalDetails.equipment.length - 3} more items</li>}
                    </ul>
                  </div>
                )}

                {service.operationalDetails.notes && (
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Important Notes</h3>
                    <p className="text-gray-600 text-sm">{service.operationalDetails.notes}</p>
                  </div>
                )}
              </div>

              {service.operationalDetails.permits && service.operationalDetails.permits.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Required Permits & Compliance</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.operationalDetails.permits.map((permit: string, index: number) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center">
                          <span className="text-royal-blue-600 mr-3">✓</span>
                          <span className="text-gray-700 text-sm">{permit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Available Locations */}
      {service.availableLocations && service.availableLocations.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Available Locations</h2>
              <p className="text-lg text-gray-600 mb-8">Find a location near you that offers {service.title.toLowerCase()}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.availableLocations.map((locationId: string, index: number) => (
                  <Link key={index} href={`/locations/${locationId}`} className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors">
                    <span className="text-royal-blue-600 font-semibold hover:underline capitalize">{locationId.replace("-", " ")}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/locations" className="inline-block bg-royal-blue-600 text-white px-8 py-3 rounded-lg hover:bg-royal-blue-700 transition-colors">
                  View All Locations
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Service Content */}
      {service.content && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: service.content }} />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">Contact us today for a free consultation and quote for {service.title.toLowerCase()}.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href={`/contact?service=${slug}`}
              className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg"
              onClick={() => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "click", {
                    event_category: "cta",
                    event_label: `service_${slug}_footer_book`,
                    value: 1,
                  });
                }
              }}
            >
              {service.id === "demolition" ? "Schedule Demolition" : service.id === "mobile-crushing" ? "Book Mobile Service" : "Get Free Quote"}
            </Link>
            <a
              href="tel:+18005338081"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-colors text-lg"
              onClick={() => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "click", {
                    event_category: "cta",
                    event_label: `service_${slug}_phone_call`,
                    value: 1,
                  });
                }
              }}
            >
              Call (800) 533-8081
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(SERVICES_DATA)
    .filter((slug) => slug !== "mobile-crushing") // Exclude mobile-crushing as it has its own page
    .map((slug) => ({
      params: { slug },
    }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ServiceDetailProps, IParams> = async ({ params }) => {
  const slug = params?.slug;
  if (!slug || !SERVICES_DATA[slug]) {
    return { notFound: true };
  }
  return {
    props: {
      service: SERVICES_DATA[slug],
      slug,
    },
  };
};

export default ServiceDetail;
