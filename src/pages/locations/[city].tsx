// src/pages/locations/[city].tsx
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Link from "next/link";
import MapComponent from "@/components/Map";
import { locationsData, type LocationData } from "@/data/locations";

interface IParams extends ParsedUrlQuery {
  city: string;
}

interface CityPageProps {
  location: LocationData;
  citySlug: string;
}

// Local pricing data for each location
const getLocalPricing = (citySlug: string) => {
  const pricingData: Record<string, any> = {
    "kl-tyler": {
      copper: "$3.50-$4.50/lb",
      aluminum: "$0.60-$1.20/lb",
      steel: "$0.08-$0.15/lb",
    },
    "houston-county": {
      copper: "$3.55-$4.55/lb",
      aluminum: "$0.62-$1.22/lb",
      steel: "$0.09-$0.16/lb",
    },
    mineola: {
      copper: "$3.45-$4.45/lb",
      aluminum: "$0.58-$1.18/lb",
      steel: "$0.07-$0.14/lb",
    },
    // Add more locations as needed
  };
  return (
    pricingData[citySlug] || {
      copper: "$3.50-$4.50/lb",
      aluminum: "$0.60-$1.20/lb",
      steel: "$0.08-$0.15/lb",
    }
  );
};

// Generate LocalBusiness schema for location
const generateLocalBusinessSchema = (location: LocationData, citySlug: string) => {
  const pricing = getLocalPricing(citySlug);
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: location.city,
    description: `Professional scrap metal recycling services in ${location.city}. We provide fair prices and reliable service.`,
    url: `https://www.klrecycling.com/locations/${citySlug}`,
    telephone: location.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.contact.address.split(",")[0].trim(),
      addressLocality: location.city,
      addressRegion: "TX",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    openingHours: location.hours,
    priceRange: "$",
    paymentAccepted: "Cash, Check",
    currenciesAccepted: "USD",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Copper Recycling",
          description: "Cash for scrap copper",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: pricing.copper,
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aluminum Recycling",
          description: "Cash for scrap aluminum",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: pricing.aluminum,
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Steel Recycling",
          description: "Cash for scrap steel",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: pricing.steel,
          priceCurrency: "USD",
        },
      },
    ],
  };
};

const CityPage: NextPage<CityPageProps> = ({ location, citySlug }) => {
  if (!location) {
    return (
      <div>
        {" "}
        {/* This div will be replaced by Layout when needed, but for test */}
        Location not found.
      </div>
    );
  }
  const localPricing = getLocalPricing(citySlug as string);
  const localBusinessSchema = generateLocalBusinessSchema(location, citySlug as string);

  return (
    <Layout>
      <SEO title={`Scrap Metal Recycling in ${location.city} | Fair Prices Since 1956`} description={`Professional scrap metal recycling services in ${location.city}, TX. Current pricing: Copper ${localPricing.copper}, Aluminum ${localPricing.aluminum}, Steel ${localPricing.steel}. Schedule pickup today.`} keywords={`scrap metal recycling ${location.city}, scrap yard ${location.city}, metal recycling near me, scrap prices ${location.city}`} twitterCard="summary_large_image" structuredData={localBusinessSchema} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 to-electric-blue-900 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <svg className="w-12 h-12 mr-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">Scrap Metal Recycling in {location.city}</h1>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            {location.summary
              .replace("As the Rose Capital of America, Tyler is a growing economic hub in East Texas.", `Premier scrap metal recycling services for ${location.city} residents and businesses since 1956.`)
              .replace("Located in the heart of the Davy Crockett National Forest area, Crockett is a community rich in Texas history.", `Serving ${location.city} and surrounding communities with reliable scrap metal recycling and expert metal recovery services.`)
              .replace("Mineola, a historic railroad town, is known for its vibrant downtown and strong community spirit.", `${location.city} residents trust us for fair prices and expert guidance on all scrap metal recycling needs.`)
              .replace("Palestine is a city with deep roots in railroad history and a diverse industrial base.", `Your trusted ${location.city} scrap metal partner with 68+ years of serving East Texas communities with integrity and fair pricing.`)
              .replace("As the oldest town in Texas and home to Stephen F. Austin State University, Nacogdoches has a unique blend of history and forward-thinking.", `${location.city} students and residents rely on our certified recycling services for all their scrap metal processing needs.`)
              .replace("Nestled in the piney woods of East Texas near the Angelina National Forest, Jasper is a hub for the timber and manufacturing industries.", `Serving ${location.city}'s industrial and residential communities with comprehensive scrap metal recycling solutions.`)
              .replace("Known as the 'Tomato Capital of the World,' Jacksonville has a rich agricultural and industrial heritage.", `${location.city} families and businesses choose us for consistent, fair-priced scrap metal recycling services.`)
              .replace("Serving the northern Tyler area and surrounding communities, Madfos Metals provides specialized recycling services.", `North Tyler and surrounding communities rely on our specialized recycling services and fair market pricing.`)
              .replace("Placeholder summary for Acme Scrap in Great Bend, KS. Describe the services and benefits for this location.", `Great Bend, Kansas residents and agricultural businesses benefit from our comprehensive scrap metal recycling expertise supplied with regional market knowledge and fair pricing.`)}
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/schedule-pickup" className="bg-white text-royal-blue-600 font-bold py-4 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Schedule Pickup
            </Link>
            <a href={location.contact.phoneHref} className="border-2 border-white text-white font-bold py-4 px-6 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-all duration-300 text-lg flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              Call {location.contact.phone}
            </a>
            <a href={`https://maps.google.com/?q=${encodeURIComponent(location.contact.address)}`} target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white font-bold py-4 px-6 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-all duration-300 text-lg flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Local Pricing Snippets */}
      <section className="py-20 bg-royal-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-royal-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">Current Local Pricing in {location.city}</h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Market-based pricing updated daily. Contact us for current rates and to discuss your specific material.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                material: "Copper",
                price: localPricing.copper,
                icon: (
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-inner">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
                    </svg>
                  </div>
                ),
                description: "Clean copper wire and tubing",
                color: "border-orange-200 bg-orange-50 hover:border-orange-300",
              },
              {
                material: "Aluminum",
                price: localPricing.aluminum,
                icon: (
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center shadow-inner">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                ),
                description: "Aluminum cans and scrap",
                color: "border-gray-200 bg-gray-50 hover:border-gray-300",
              },
              {
                material: "Steel",
                price: localPricing.steel,
                icon: (
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center shadow-inner">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                ),
                description: "Heavy steel and iron",
                color: "border-gray-300 bg-gray-50 hover:border-gray-400",
              },
            ].map((item, index) => (
              <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border-2 ${item.color} transform hover:-translate-y-1`}>
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{item.material}</h3>
                <div className="text-3xl md:text-4xl font-black text-royal-blue-600 mb-4">{item.price}</div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L5.082-2.5C4.312-1.667 5.274 0 6.814 0z"></path>
              </svg>
              <p className="text-sm md:text-base text-gray-500">Prices subject to market fluctuations and material quality</p>
            </div>
            <Link href="/pricing" className="inline-flex items-center bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H9z"></path>
              </svg>
              View Full Pricing Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Interactive Map Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 border-t border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-electric-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">Find Our Location</h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Navigate to our {location.city} recycling facility with precision. Our interactive Google Maps integration provides real-time directions and location details for seamless access to our professional recycling services.</p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-all duration-500">
              <div className="p-8 bg-gradient-to-r from-royal-blue-50 via-blue-50 to-electric-blue-50 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                    <h3 className="text-xl font-bold text-gray-900 flex items-center">
                      {location.city} Recycling Facility
                      <span className="ml-3 text-sm font-medium text-royal-blue-600 bg-white px-3 py-1 rounded-full border border-royal-blue-200">Google Maps Enabled</span>
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Real-time Navigation</p>
                    <p className="text-xs text-gray-400">Interactive & Responsive</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <MapComponent
                  locations={[
                    {
                      city: location.city,
                      slug: citySlug,
                      address: location.contact.address,
                      lat: location.coordinates.lat,
                      lng: location.coordinates.lng,
                      phone: location.contact.phone,
                    },
                  ]}
                  selectedIndex={0}
                />
                <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Our Location</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Zoom and pan to explore</p>
                </div>
              </div>
            </div>

            {/* Map Interaction Tips */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-sm text-gray-600">Search nearby</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 0L9 7l6-3z" />
                  </svg>
                  <span className="text-sm text-gray-600">Get directions</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-gray-600">View on mobile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">Location Information & Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to know about recycling at our {location.city} facility</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Why Recycle Section */}
            <div className="bg-gradient-to-br from-royal-blue-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-royal-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-royal-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Why Recycle Here?</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-8">{location.benefits}</p>
              <Link href="/schedule-pickup" className="inline-flex items-center bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Schedule Pickup
              </Link>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Contact Info</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-royal-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Address</p>
                    <p className="text-gray-700 leading-relaxed">{location.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-royal-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <a href={location.contact.phoneHref} className="text-royal-blue-600 hover:text-royal-blue-700 font-semibold transition-colors">
                      {location.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-royal-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Hours</p>
                    <p className="text-gray-700 leading-relaxed">{location.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services & Materials */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Services</h3>
              </div>

              <p className="font-semibold text-gray-900 mb-4">Accepted Materials:</p>
              <ul className="space-y-3">
                {location.materials.map((material: string, index: number) => (
                  <li key={material} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{material}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-green-200">
                <p className="text-sm text-gray-600 leading-relaxed">All services are available for both drop-off and scheduled pickup. Contact us to discuss your specific recycling needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(locationsData).map((city) => ({
    params: { city },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<CityPageProps, IParams> = async ({ params }) => {
  const city = params?.city;
  if (!city || !locationsData[city as keyof typeof locationsData]) {
    return { notFound: true };
  }
  return {
    props: {
      location: locationsData[city as keyof typeof locationsData],
      citySlug: city,
    },
  };
};

export default CityPage;
