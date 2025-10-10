import React, { FC, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

// Image insertion for Contact page - K&L Recycling locations and customer service
const ContactForm = dynamic(() => import("@/components/ContactForm/ContactForm").then((mod) => mod.ContactForm));
import dynamic from "next/dynamic";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";

const DynamicMap = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
      <p>Loading map...</p>
    </div>
  ),
});

const locations = [
  {
    id: "kl-tyler",
    name: "K&L Recycling",
    address: "4134 Chandler Highway, Tyler, TX 75702",
    phone: "(800) 533-8081",
    hours: "Mon-Fri: 7AM-5PM, Sat: 8AM-3PM",
    services: ["Public Drop-off", "Industrial Pickup"],
    coordinates: { lat: 32.3879, lng: -95.3344 },
    isMain: true,
  },
  {
    id: "houston-county",
    name: "Houston County Scrap",
    address: "403 South 2nd Street, Crockett, TX 75835",
    phone: "(800) 533-8081",
    hours: "Mon-Fri: 7AM-5PM, Sat: 8AM-3PM",
    services: ["Public Drop-off", "Roll-off Containers"],
    coordinates: { lat: 31.3143, lng: -95.4572 },
    isMain: false,
  },
  {
    id: "mineola",
    name: "Mineola Iron & Metal",
    address: "2590 Highway 80 West, Mineola, TX 75773",
    phone: "(800) 533-8081",
    hours: "Mon-Fri: 7AM-5PM, Sat: 8AM-3PM",
    services: ["Public Drop-off", "Industrial Pickup"],
    coordinates: { lat: 32.6515, lng: -95.5233 },
    isMain: false,
  },
  {
    id: "anderson-county",
    name: "Anderson County Scrap",
    address: "4340 State Highway 19, Palestine, TX 75801",
    phone: "(800) 533-8081",
    hours: "Mon-Fri: 7AM-5PM, Sat: 8AM-3PM",
    services: ["Public Drop-off", "Demolition Services"],
    coordinates: { lat: 31.8118, lng: -95.6483 },
    isMain: false,
  },
  {
    id: "nacogdoches",
    name: "Nacogdoches Recycling Center",
    address: "2508 Woden Road, Nacogdoches, TX 75961",
    phone: "(800) 533-8081",
    hours: "Mon-Fri: 7AM-5PM, Sat: 8AM-3PM",
    services: ["Public Drop-off", "Roll-off Containers"],
    coordinates: { lat: 31.5718, lng: -94.6293 },
    isMain: false,
  },
  {
    id: "premier",
    name: "Premier Recyclers",
    address: "1953 Highway 190 West, Jasper, TX 75951",
    phone: "(800) 533-8081",
    hours: "Mon-Fri: 7AM-5PM, Sat: 8AM-3PM",
    services: ["Public Drop-off", "Car Crushing"],
    coordinates: { lat: 30.9185, lng: -94.0252 },
    isMain: false,
  },
  {
    id: "jacksonville",
    name: "Jacksonville Iron & Metal",
    address: "599 CR 1520, Jacksonville, TX 75766",
    phone: "(800) 533-8081",
    hours: "Mon-Fri: 7AM-5PM, Sat: 8AM-3PM",
    services: ["Public Drop-off", "Industrial Pickup"],
    coordinates: { lat: 31.9963, lng: -95.2533 },
    isMain: false,
  },
  {
    id: "acme",
    name: "Acme Scrap",
    address: "700 Frey Street, Great Bend, KS 67530",
    phone: "(800) 533-8081",
    hours: "Mon-Fri: 7AM-5PM, Sat: 8AM-3PM",
    services: ["Public Drop-off", "Car Crushing"],
    coordinates: { lat: 38.3606, lng: -98.7745 },
    isMain: false,
  },
  {
    id: "madfos",
    name: "Madfos Metals",
    address: "10757 Highway 271, Tyler, TX 75708",
    phone: "(800) 533-8081",
    hours: "Mon-Fri: 7AM-5PM, Sat: 8AM-3PM",
    services: ["Public Drop-off", "Industrial Pickup"],
    coordinates: { lat: 32.4639, lng: -95.2119 },
    isMain: false,
  },
];

type Location = (typeof locations)[0];

const ContactPage: FC = () => {
  const [activeTab, setActiveTab] = useState("quote");
  const [activeMarker, setActiveMarker] = useState<Location | null>(null);

  const handleMarkerClick = (marker: Location) => {
    setActiveMarker(marker);
  };

  const contactMethods = [
    {
      id: "quote",
      title: "Get Quote",
      description: "Request a personalized quote for your recycling needs",
      icon: "💰",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: "call",
      title: "Call Now",
      description: "Speak directly with our recycling experts",
      icon: "📞",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: "visit",
      title: "Visit Us",
      description: "Find the nearest K&L Recycling location",
      icon: "📍",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: "email",
      title: "Email Us",
      description: "Send us your questions and requirements",
      icon: "✉️",
      color: "from-orange-500 to-red-600",
    },
  ];

  const trustIndicators = [
    {
      icon: "🏆",
      title: "68+ Years",
      description: "Industry Experience",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: "♻️",
      title: "10,000+ Tons",
      description: "Recycled Annually",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: "🏢",
      title: "500+ Partners",
      description: "Trusted Businesses",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: "✅",
      title: "100% Compliant",
      description: "EPA Standards",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: "⭐",
      title: "4.9/5 Rating",
      description: "Customer Satisfaction",
      color: "from-yellow-400 to-amber-500",
    },
    {
      icon: "🚚",
      title: "24/7 Service",
      description: "Emergency Pickup",
      color: "from-red-400 to-pink-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Johnson Manufacturing",
      content: "K&L Recycling has been our trusted partner for over 10 years. Their service is reliable, pricing is fair, and they always deliver on time.",
      rating: 5,
      image: "/images/testimonial-1.jpg",
    },
    {
      name: "Mike Rodriguez",
      company: "Rodriguez Construction",
      content: "The demolition services are outstanding. They recovered more metal than we expected and the process was seamless from start to finish.",
      rating: 5,
      image: "/images/testimonial-2.jpg",
    },
    {
      name: "Lisa Chen",
      company: "Chen Industries",
      content: "Professional, efficient, and environmentally responsible. K&L Recycling helps us meet our sustainability goals while generating revenue.",
      rating: 5,
      image: "/images/testimonial-3.jpg",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Contact K&L Recycling - Get Quote, Find Locations | Texas & Kansas</title>
        <meta name="description" content="Contact K&L Recycling for scrap metal services. Get free quotes, find locations, or call our experts. Serving Texas and Kansas since 1956." />
        <link rel="canonical" href="https://www.klrecycling.com/contact" />
      </Head>

      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-royal-blue-900 to-electric-blue-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-electric-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-royal-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up">Let&apos;s Get Started</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Ready to turn your scrap metal into cash? Contact our experts for personalized service and competitive pricing.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a href="tel:+19035926299" className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
              📞 Call (903) 592-6299
            </a>
            <Link href="#quote-tool" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-all duration-300 transform hover:scale-105">
              💰 Get Free Quote
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/80 text-sm font-medium">Scroll to Explore</span>
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Service Excellence Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div data-aos="fade-right">
              <Image src="/assets/services/roll-off-container.jpg" alt="K&L Recycling customer service and facility" className="rounded-lg shadow-2xl" width={1200} height={800} priority />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Exceptional Customer Service</h2>
              <p className="text-lg text-gray-700 mb-6">Our experienced team is dedicated to providing personalized service and expert guidance for all your recycling needs. From small drop-offs to large industrial contracts, we treat every customer with the same level of professionalism and care.</p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-lg">✓</span>
                  </div>
                  <span className="text-gray-700">Expert Consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-lg">✓</span>
                  </div>
                  <span className="text-gray-700">Fast Response Times</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-lg">✓</span>
                  </div>
                  <span className="text-gray-700">Transparent Pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-600">Why thousands of businesses choose K&L Recycling</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center group cursor-pointer" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className={`w-16 h-16 bg-gradient-to-r ${indicator.color} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl">{indicator.icon}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{indicator.title}</h3>
                <p className="text-sm text-gray-600">{indicator.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">How Can We Help You?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the most convenient way to get in touch with our recycling experts</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {contactMethods.map((method) => (
              <button key={method.id} onClick={() => setActiveTab(method.id)} className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${activeTab === method.id ? `bg-gradient-to-r ${method.color} text-white shadow-lg` : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"}`}>
                <span className="text-2xl mr-3">{method.icon}</span>
                {method.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === "quote" && (
              <div className="bg-white rounded-2xl shadow-xl p-8" id="quote-tool">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
                  <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you within 24 hours</p>
                </div>
                <ContactForm />
              </div>
            )}

            {activeTab === "call" && (
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">📞</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Our Experts</h3>
                <p className="text-gray-600 mb-8">Speak directly with our recycling specialists for immediate assistance</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div className="bg-gradient-to-r from-royal-blue-50 to-electric-blue-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Main Office</h4>
                    <a href="tel:+19035926299" className="text-2xl font-bold text-royal-blue-600 hover:text-royal-blue-700">
                      (903) 592-6299
                    </a>
                    <p className="text-sm text-gray-600 mt-2">Mon-Fri: 7AM-5PM</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Emergency Line</h4>
                    <a href="tel:+17135550124" className="text-2xl font-bold text-green-600 hover:text-green-700">
                      (713) 555-0124
                    </a>
                    <p className="text-sm text-gray-600 mt-2">24/7 Service</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "visit" && (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">📍</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Visit Our Locations</h3>
                  <p className="text-gray-600">Find the nearest K&L Recycling facility to you</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {locations.map((location, index) => (
                    <div key={index} className={`border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${location.isMain ? "border-royal-blue-500 bg-royal-blue-50" : "border-gray-200"}`}>
                      {location.isMain && <div className="bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">Main Facility</div>}
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{location.name}</h4>
                      <p className="text-gray-600 mb-2">{location.address}</p>
                      <a href={`tel:${location.phone}`} className="text-royal-blue-600 font-semibold hover:text-royal-blue-700">
                        {location.phone}
                      </a>
                      <p className="text-sm text-gray-500 mt-2">{location.hours}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Link href="/locations" className="bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300">
                    View All Locations
                  </Link>
                </div>
              </div>
            )}

            {activeTab === "email" && (
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">✉️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Send Us an Email</h3>
                <p className="text-gray-600 mb-8">We&apos;ll respond to your inquiry within 24 hours</p>

                <div className="max-w-md mx-auto space-y-4">
                  <a href="mailto:dispatch@kl-recycling.com" className="block bg-gradient-to-r from-royal-blue-50 to-electric-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <h4 className="font-bold text-gray-900 mb-1">General Inquiries</h4>
                    <p className="text-royal-blue-600 font-semibold">dispatch@kl-recycling.com</p>
                  </a>
                  <a href="mailto:dispatch@kl-recycling.com" className="block bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <h4 className="font-bold text-gray-900 mb-1">Quote Requests</h4>
                    <p className="text-green-600 font-semibold">dispatch@kl-recycling.com</p>
                  </a>
                  <a href="mailto:dispatch@kl-recycling.com" className="block bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <h4 className="font-bold text-gray-900 mb-1">Customer Support</h4>
                    <p className="text-orange-600 font-semibold">dispatch@kl-recycling.com</p>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Don&apos;t just take our word for it - hear from our satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Find Us on the Map</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Locate the nearest K&L Recycling facility to your location</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <DynamicMap />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Join thousands of satisfied customers who trust K&L Recycling for their scrap metal needs</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="tel:+19035926299" className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Call Now
            </a>
            <Link href="#quote-tool" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-all duration-300 transform hover:scale-105">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Map: FC<{
  locations: Location[];
  activeMarker: Location | null;
  onMarkerClick: (marker: Location) => void;
  onCloseClick: () => void;
}> = ({ locations, activeMarker, onMarkerClick, onCloseClick }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 33.5,
    lng: -96.0,
  };

  if (!isLoaded)
    return (
      <div style={mapContainerStyle} className="flex items-center justify-center bg-gray-200">
        <p>Loading Map...</p>
      </div>
    );

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={6}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      {locations.map((loc) => (
        <Marker
          key={loc.id}
          position={loc.coordinates}
          onClick={() => onMarkerClick(loc)}
          icon={{
            path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
            fillColor: loc.isMain ? "#1d4ed8" : "#0ea5e9",
            fillOpacity: 1,
            strokeWeight: 0,
            rotation: 0,
            scale: 1.5,
            anchor: new google.maps.Point(12, 24),
          }}
        />
      ))}

      {activeMarker && (
        <InfoWindow position={activeMarker.coordinates} onCloseClick={onCloseClick}>
          <div className="p-2 max-w-xs">
            <h4 className="font-bold text-md mb-1">{activeMarker.name}</h4>
            <p className="text-sm text-gray-600">{activeMarker.address}</p>
            <a href={`https://www.google.com/maps/dir/?api=1&destination=${activeMarker.coordinates.lat},${activeMarker.coordinates.lng}`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-royal-blue-600 hover:underline mt-2 inline-block">
              Get Directions
            </a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default ContactPage;
