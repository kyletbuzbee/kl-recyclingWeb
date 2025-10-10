import React, { FC, useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { materialsCatalog, searchMaterials, getMaterialsByCategory, MaterialItem } from "@/data/materials-catalog";

const MaterialsGuide: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [environmentalWeight, setEnvironmentalWeight] = useState<number>(0);

  const categories = [
    { id: "all", name: "All Materials", icon: "📋" },
    { id: "ferrous", name: "Steel & Iron", icon: "🔧" },
    { id: "non-ferrous", name: "Copper & Brass", icon: "🥉" },
    { id: "electronic", name: "Electronics", icon: "🔌" },
    { id: "industrial", name: "Industrial", icon: "🏭" },
    { id: "household", name: "Household", icon: "🏠" },
  ];

  const filteredMaterials = useMemo(() => {
    if (selectedCategory === "all") {
      return searchQuery ? searchMaterials(searchQuery) : materialsCatalog.filter((m) => m.accepted);
    } else {
      const categoryMaterials = getMaterialsByCategory(selectedCategory);
      return searchQuery ? categoryMaterials.filter((m) => searchMaterials(searchQuery).some((s) => s.id === m.id)) : categoryMaterials;
    }
  }, [searchQuery, selectedCategory]);

  // Environmental Impact Calculator
  const environmentalImpact = useMemo(() => {
    if (!environmentalWeight || environmentalWeight <= 0) return null;

    // Average impact per pound of scrap metal vs virgin production
    const energySaved = environmentalWeight * 1.5; // kWh saved per pound
    const co2Reduced = environmentalWeight * 0.8; // pounds of CO2 avoided per pound
    const waterSaved = environmentalWeight * 3.2; // gallons saved per pound
    const landfillDiverted = environmentalWeight; // pounds diverted from landfill

    return {
      energySaved,
      co2Reduced,
      waterSaved,
      landfillDiverted,
      treesEquivalent: Math.round(landfillDiverted / 100), // Rough estimate: 100lbs ≈ 1 tree's yearly absorption
      carsOffRoad: Math.round(energySaved / 3000), // Average car consumes ~3000 kWh/year
    };
  }, [environmentalWeight]);

  const handleMaterialSelect = (material: MaterialItem) => {
    // In a real implementation, this might trigger a quote or contact flow
    console.log("Selected material:", material.name);
  };

  return (
    <Layout>
      <SEO title="Materials We Buy | K&L Recycling Pricing Guide" description="Search our comprehensive materials guide. See real-time pricing, accepted materials, and calculate your recycling environmental impact. East Texas." keywords="scrap metal prices, recycling materials, steel prices, copper prices, aluminum prices, environmental impact calculator" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-6xl font-black">Materials Guide</h1>
            </div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-green-100">Discover what we buy, current pricing, and the environmental impact of your recycling contribution.</p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative">
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search materials (e.g., 'copper wire', 'aluminum cans', 'steel beams')..." className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent pr-12" />
              <div className="absolute right-4 top-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${selectedCategory === category.id ? "bg-green-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700"}`}>
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact Calculator */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Environmental Impact Calculator</h2>
              <p className="text-xl text-gray-600">See the environmental difference your recycling makes in East Texas</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <label htmlFor="weight" className="block text-lg font-medium text-gray-700 mb-2">
                  How many pounds of scrap metal do you recycle?
                </label>
                <input type="number" id="weight" value={environmentalWeight || ""} onChange={(e) => setEnvironmentalWeight(parseInt(e.target.value) || 0)} placeholder="Enter weight in pounds..." className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" min="0" />
              </div>

              {environmentalImpact && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="text-xl font-bold text-green-900 mb-4">🌱 Environmental Savings</h3>
                    <ul className="space-y-3 text-green-800">
                      <li className="flex justify-between">
                        <span>Energy Saved:</span>
                        <span className="font-bold">{environmentalImpact.energySaved.toFixed(0)} kWh</span>
                      </li>
                      <li className="flex justify-between">
                        <span>CO₂ Reduced:</span>
                        <span className="font-bold">{environmentalImpact.co2Reduced.toFixed(0)} lbs</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Water Saved:</span>
                        <span className="font-bold">{environmentalImpact.waterSaved.toFixed(0)} gallons</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Landfill Diverted:</span>
                        <span className="font-bold">{environmentalImpact.landfillDiverted} lbs</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">🌍 Real World Impact</h3>
                    <ul className="space-y-3 text-blue-800">
                      <li className="flex justify-between">
                        <span>Cars off road annually:</span>
                        <span className="font-bold">~{environmentalImpact.carsOffRoad}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Trees equivalent:</span>
                        <span className="font-bold">~{environmentalImpact.treesEquivalent}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Energy for households:</span>
                        <span className="font-bold">~{Math.round(environmentalImpact.energySaved / 877)} homes</span>
                      </li>
                      <li className="text-sm text-blue-600 mt-4">*Based on EPA and industry recycling impact data</li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">{selectedCategory === "all" ? "All Accepted Materials" : `${categories.find((c) => c.id === selectedCategory)?.name} Materials`}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{filteredMaterials.length > 0 ? `Showing ${filteredMaterials.length} material${filteredMaterials.length === 1 ? "" : "s"} we accept and buy.` : "No materials found matching your criteria."}</p>
          </div>

          {filteredMaterials.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMaterials.map((material, index) => (
                <motion.div key={material.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group cursor-pointer" onClick={() => handleMaterialSelect(material)}>
                  <div className="relative h-48 overflow-hidden">
                    <Image src={material.image || "/assets/layout/hero-background.jpg"} alt={material.name} fill className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-4 right-4 bg-green-500 group-hover:bg-royal-blue-700 text-white px-3 py-1 rounded-full text-sm font-bold transition-colors duration-300">{material.price}</div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{material.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${material.category === "ferrous" ? "bg-blue-100 text-blue-800" : material.category === "non-ferrous" ? "bg-yellow-100 text-yellow-800" : material.category === "electronic" ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-800"}`}>{material.category}</span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{material.description}</p>

                    <div className="text-sm text-royal-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4 font-medium">Click to learn more →</div>

                    {material.requirements && material.requirements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Requirements:</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {material.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center">
                              <svg className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1">
                      {material.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No materials found</h3>
              <p className="text-gray-600">Try adjusting your search terms or browse all categories.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Show All Materials
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Access Tools */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Quick Access Tools</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Everything you need to get paid for your scrap metal quickly and easily</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">Material Pricing</h3>
              <p className="text-blue-100 text-sm">Real-time pricing for all accepted materials</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">Impact Calculator</h3>
              <p className="text-blue-100 text-sm">Calculate your environmental impact from recycling</p>
            </div>

            <a href="/locations" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">Find Locations</h3>
              <p className="text-blue-100 text-sm">Turn-by-turn directions to nearest K&L yard</p>
            </a>

            <a href="/schedule-pickup" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">Schedule Pickup</h3>
              <p className="text-blue-100 text-sm">Arrange container rental or service pickup</p>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Get Paid Cash?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Drop off your materials at any of our 7 locations across East Texas & Kansas, or request a container rental for on-site collection.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="/locations" className="px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Find a Location
            </a>
            <a href="/schedule-pickup" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-green-700 transition-colors">
              Schedule Container
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MaterialsGuide;
