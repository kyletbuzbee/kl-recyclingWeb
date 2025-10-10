import React, { FC, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";

interface Location {
  id: string;
  name: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  address: string;
  image: string;
  services: string[];
  coordinates: { lat: number; lng: number };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

// Mock location data - replace with real location data
const LOCATIONS: Location[] = [
  {
    id: "tyler",
    name: "K&L Recycling - Tyler",
    city: "Tyler",
    state: "TX",
    zip: "75702",
    phone: "(903) 555-0101",
    address: "1234 Industrial Blvd, Tyler, TX 75702",
    image: "/assets/locations/tyler_yard.png",
    services: ["ferrous", "non-ferrous", "containers", "demolition"],
    coordinates: { lat: 32.3513, lng: -95.3011 },
    hours: {
      weekdays: "7:00 AM - 5:00 PM",
      saturday: "8:00 AM - 12:00 PM",
      sunday: "Closed",
    },
  },
  {
    id: "nacogdoches",
    name: "K&L Recycling - Nacogdoches",
    city: "Nacogdoches",
    state: "TX",
    zip: "75961",
    phone: "(936) 555-0202",
    address: "5678 Commerce St, Nacogdoches, TX 75961",
    image: "/assets/locations/nacogdoches_yard.png",
    services: ["ferrous", "non-ferrous", "containers"],
    coordinates: { lat: 31.6035, lng: -94.6555 },
    hours: {
      weekdays: "7:00 AM - 5:00 PM",
      saturday: "8:00 AM - 12:00 PM",
      sunday: "Closed",
    },
  },
  {
    id: "palestine",
    name: "K&L Recycling - Palestine",
    city: "Palestine",
    state: "TX",
    zip: "75801",
    phone: "(903) 555-0303",
    address: "9012 Main St, Palestine, TX 75801",
    image: "/assets/locations/palestine_yard.png",
    services: ["ferrous", "containers", "public-drop"],
    coordinates: { lat: 31.7621, lng: -95.6308 },
    hours: {
      weekdays: "7:00 AM - 5:00 PM",
      saturday: "8:00 AM - 12:00 PM",
      sunday: "Closed",
    },
  },
  {
    id: "mineola",
    name: "K&L Recycling - Mineola",
    city: "Mineola",
    state: "TX",
    zip: "75773",
    phone: "(903) 555-0404",
    address: "3456 Oak St, Mineola, TX 75773",
    image: "/assets/locations/mineola_yard.png",
    services: ["ferrous", "containers"],
    coordinates: { lat: 32.6635, lng: -95.4886 },
    hours: {
      weekdays: "7:00 AM - 5:00 PM",
      saturday: "8:00 AM - 12:00 PM",
      sunday: "Closed",
    },
  },
  {
    id: "madisonville",
    name: "K&L Recycling - Madisonville",
    city: "Madisonville",
    state: "TX",
    zip: "77864",
    phone: "(936) 555-0505",
    address: "7890 Pine Rd, Madisonville, TX 77864",
    image: "/assets/locations/madfos_yard.png",
    services: ["ferrous", "non-ferrous", "containers"],
    coordinates: { lat: 30.9602, lng: -95.9128 },
    hours: {
      weekdays: "7:00 AM - 5:00 PM",
      saturday: "8:00 AM - 12:00 PM",
      sunday: "Closed",
    },
  },
  {
    id: "jasper",
    name: "K&L Recycling - Jasper",
    city: "Jasper",
    state: "TX",
    zip: "75951",
    phone: "(409) 555-0606",
    address: "1234 Elm St, Jasper, TX 75951",
    image: "/assets/locations/jasper_yard.png",
    services: ["ferrous", "containers"],
    coordinates: { lat: 30.9204, lng: -94.0121 },
    hours: {
      weekdays: "7:00 AM - 5:00 PM",
      saturday: "8:00 AM - 12:00 PM",
      sunday: "Closed",
    },
  },
  {
    id: "crockett",
    name: "K&L Recycling - Crockett",
    city: "Crockett",
    state: "TX",
    zip: "75835",
    phone: "(936) 555-0707",
    address: "5678 Cedar Ln, Crockett, TX 75835",
    image: "/assets/locations/crockett_yard.png",
    services: ["ferrous", "containers", "public-drop"],
    coordinates: { lat: 31.3185, lng: -95.4569 },
    hours: {
      weekdays: "7:00 AM - 5:00 PM",
      saturday: "8:00 AM - 12:00 PM",
      sunday: "Closed",
    },
  },
  {
    id: "kansas",
    name: "K&L Recycling - Kansas City",
    city: "Kansas City",
    state: "KS",
    zip: "66111",
    phone: "(913) 555-0808",
    address: "9012 Industrial Dr, Kansas City, KS 66111",
    image: "/assets/locations/kansas_yard.jpg",
    services: ["ferrous", "non-ferrous", "containers", "mobile-crushing"],
    coordinates: { lat: 39.0997, lng: -94.5786 },
    hours: {
      weekdays: "7:00 AM - 5:00 PM",
      saturday: "8:00 AM - 12:00 PM",
      sunday: "Closed",
    },
  },
  {
    id: "madisonville-main",
    name: "K&L Recycling - Madisonville Main Yard",
    city: "Madisonville",
    state: "TX",
    zip: "77864",
    phone: "(936) 555-0909",
    address: "3456 Oak Ridge Rd, Madisonville, TX 77864",
    image: "/assets/locations/madfos_main_yard.png",
    services: ["ferrous", "non-ferrous", "containers", "demolition"],
    coordinates: { lat: 30.9602, lng: -95.9128 },
    hours: {
      weekdays: "7:00 AM - 5:00 PM",
      saturday: "8:00 AM - 12:00 PM",
      sunday: "Closed",
    },
  },
];

const LocationFinder: FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [filterService, setFilterService] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const serviceIcons = {
    ferrous: "🔩",
    "non-ferrous": "🥉",
    containers: "📦",
    demolition: "🏗️",
    "mobile-crushing": "🔥",
    "public-drop": "🏭",
  };

  const serviceLabels = {
    ferrous: "Ferrous Metals",
    "non-ferrous": "Non-Ferrous Metals",
    containers: "Roll-off Containers",
    demolition: "Demolition Services",
    "mobile-crushing": "Mobile Crushing",
    "public-drop": "Public Drop-off",
  };

  const filteredLocations = LOCATIONS.filter((location) => {
    const matchesService = filterService === "all" || location.services.includes(filterService);

    const matchesSearch = !searchQuery || location.city.toLowerCase().includes(searchQuery.toLowerCase()) || location.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesService && matchesSearch;
  });

  const getDirections = (location: Location) => {
    const destination = `${location.address}`;
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
  };

  return (
    <Layout>
      <Head>
        <title>Location Finder | K&L Recycling</title>
        <meta name="description" content="Find K&L Recycling locations throughout East Texas and Kansas. Get turn-by-turn directions and check services available at each yard." />
        <link rel="canonical" href="https://www.klrecycling.com/locations" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-royal-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Find Your Nearest Location</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">9 locations across Texas and Kansas. Get turn-by-turn directions and check which services are available at each facility.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <button
              onClick={() => {
                alert("Use GPS: Click 'Get Directions' on any location to get turn-by-turn navigation from your current location!\n\nGPS must be enabled in your browser for best results.");
              }}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-colors text-lg"
            >
              📍 Enable GPS Directions
            </button>
            <a href="tel:+18005338081" className="border-2 border-white text-white hover:bg-white hover:text-royal-blue-600 font-bold py-4 px-8 rounded-xl transition-colors text-lg">
              📞 Call Toll-Free: (800) 533-8081
            </a>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Search */}
              <div className="relative">
                <input type="text" placeholder="Search by city or location name..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg" />
                <div className="absolute right-4 top-4">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Service Filter */}
              <div>
                <select value={filterService} onChange={(e) => setFilterService(e.target.value)} className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg bg-white">
                  <option value="all">All Services</option>
                  <option value="ferrous">🔩 Ferrous Metals</option>
                  <option value="non-ferrous">🥉 Non-Ferrous Metals</option>
                  <option value="containers">📦 Roll-off Containers</option>
                  <option value="demolition">🏗️ Demolition Services</option>
                  <option value="mobile-crushing">🔥 Mobile Crushing</option>
                  <option value="public-drop">🏭 Public Drop-off</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              {filteredLocations.length} Location{filteredLocations.length !== 1 ? "s" : ""} Found
            </h2>
            <p className="text-xl text-gray-600">Click on any location to see details and get directions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredLocations.map((location, index) => (
              <div key={location.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay={index * 100}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image src={location.image} alt={location.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">{location.state === "TX" ? "Texas" : "Kansas"}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{location.name}</h3>

                  <div className="flex items-center text-gray-600 mb-3">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {location.address}
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${location.phone}`} className="hover:text-royal-blue-600 transition-colors">
                      {location.phone}
                    </a>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Services Available:</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service) => (
                        <span key={service} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          <span className="mr-1">{serviceIcons[service as keyof typeof serviceIcons]}</span>
                          {serviceLabels[service as keyof typeof serviceLabels]}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="mb-6 bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Hours:</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>
                        <strong>Mon-Fri:</strong> {location.hours.weekdays}
                      </div>
                      <div>
                        <strong>Saturday:</strong> {location.hours.saturday}
                      </div>
                      <div>
                        <strong>Sunday:</strong> {location.hours.sunday}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <button onClick={() => setSelectedLocation(location)} className="flex-1 bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center">
                      View Details
                    </button>
                    <a href={getDirections(location)} target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center inline-block">
                      📍 Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Visit?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">All our locations are open 7 days a week with convenient hours. Call ahead during peak times for faster service.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="/contact" className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg">
              Call for Hours: (800) 533-8081
            </a>
            <a href="/schedule-pickup" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-colors text-lg">
              Schedule Service Online
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LocationFinder;
