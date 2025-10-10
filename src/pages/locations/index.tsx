// src/pages/locations/index.tsx
import React, { useState, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { locationsData } from "@/data/locations";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <div role="status" className="w-full h-full bg-gray-200 flex items-center justify-center" aria-live="polite">
      <p className="text-sm text-gray-700">Loading map...</p>
    </div>
  ),
});

// Transform locationsData object into array with expected interface
const transformLocationsData = (data: typeof locationsData): Location[] => {
  return Object.entries(data).map(([slug, location]) => ({
    city: location.city,
    slug,
    address: location.contact.address,
    lat: 32.3513, // Default center - could be enhanced with actual coordinates
    lng: -95.3011,
    phone: location.contact.phone,
    hours: location.hours,
  }));
};

type Location = {
  city: string;
  slug: string;
  address: string;
  lat: number;
  lng: number;
  phone?: string;
  hours?: string;
};

const LocationsPage: React.FC = () => {
  const locations: Location[] = transformLocationsData(locationsData);
  const first = locations.length > 0 ? locations[0] : null;

  // Track which location is selected so we can update map center or focus
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  function handleSelect(index: number) {
    setSelectedIndex(index);
    // move focus to map for keyboard users when a location is selected
    if (mapContainerRef.current) {
      mapContainerRef.current.focus();
    }
  }

  return (
    <Layout>
      <SEO title="Our Locations" description="Find K&L Recycling facilities across East Texas. We serve Tyler, Longview, and surrounding areas." />

      <main>
        <section aria-labelledby="locations-heading" className="py-20 text-center">
          <div className="container mx-auto px-6">
            <h1 id="locations-heading" className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Our Locations
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">Serving industrial, commercial, and individual clients across East Texas.</p>

            {locations.length === 0 ? (
              <div role="status" className="text-gray-700">
                <p>No locations available right now. Please check back later.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {locations.map((loc, idx) => (
                  <article key={loc.city} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-royal-blue-200" aria-labelledby={`loc-${loc.slug}-title`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h2 id={`loc-${loc.slug}-title`} className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          {loc.city}
                        </h2>
                        <div className="flex items-start space-y-3 space-x-0 flex-col">
                          <div className="flex items-start space-x-2">
                            <svg className="w-5 h-5 text-royal-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <p className="text-gray-700 leading-relaxed">{loc.address}</p>
                          </div>
                          {loc.phone && (
                            <div className="flex items-center space-x-2">
                              <svg className="w-5 h-5 text-royal-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                              </svg>
                              <a href={`tel:${loc.phone.replace(/\D/g, "")}`} className="text-gray-700 hover:text-royal-blue-600 transition-colors">
                                {loc.phone}
                              </a>
                            </div>
                          )}
                          {loc.hours && (
                            <div className="flex items-start space-x-2">
                              <svg className="w-5 h-5 text-royal-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              <p className="text-gray-700 leading-relaxed">{loc.hours}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <button type="button" onClick={() => handleSelect(idx)} className="inline-flex items-center justify-center px-4 py-3 rounded-lg bg-royal-blue-600 hover:bg-royal-blue-700 text-white text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-royal-blue-400 focus:ring-offset-2" aria-pressed={selectedIndex === idx ? "true" : "false"} aria-label={`Center map on ${loc.city}`}>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 9V9"></path>
                        </svg>
                        Center on map
                      </button>

                      <Link href={`/locations/${loc.slug}`} className="inline-flex items-center justify-center px-4 py-3 rounded-lg border-2 border-royal-blue-600 text-royal-blue-600 hover:bg-royal-blue-50 text-sm font-semibold transition-colors">
                        View details
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section aria-label="Locations map" className="w-full h-[500px] px-6 pb-12">
          <div ref={mapContainerRef} tabIndex={-1} className="w-full h-full rounded-lg overflow-hidden shadow-md" aria-live="polite" aria-atomic="true">
            {first ? (
              <Map locations={locations} selectedIndex={selectedIndex} />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <p className="text-gray-600">Map is unavailable</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default LocationsPage;
