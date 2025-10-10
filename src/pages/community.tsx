import React, { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { communityEvents, sponsorTiers, volunteerOpportunities } from "@/data/community";

const Community: FC = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  return (
    <Layout>
      <SEO title="Community & Sponsorship | K&L Recycling" description="Since 1956, K&L Recycling has been a proud supporter of East Texas communities. Learn about our sponsorships, community partnerships, and ways to get involved." keywords="community sponsorship, East Texas charity, recycling community, K&L recycling donations, local partnerships" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-6xl font-black">Community Impact</h1>
            </div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-blue-100">Since 1956, K&L Recycling has been investing in East Texas communities. Our "Family First" commitment goes beyond business - it's about building a legacy of community support.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-4xl font-black text-purple-600 mb-2">$25K+</h3>
              <p className="text-gray-600">Annual Community Investment</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-4xl font-black text-blue-600 mb-2">7</h3>
              <p className="text-gray-600">Active Sponsorships</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-4xl font-black text-green-600 mb-2">500+</h3>
              <p className="text-gray-600">Volunteers Engaged</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-4xl font-black text-orange-600 mb-2">56</h3>
              <p className="text-gray-600">Years of Giving Back</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Sponsorships */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Current Community Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We're proud to support these vital East Texas organizations through donations, sponsorships, and volunteer support.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityEvents.map((event, index) => (
              <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full capitalize">{event.type.replace("-", " ")}</span>
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${event.partnershipLevel === "platinum" ? "bg-yellow-100 text-yellow-800" : event.partnershipLevel === "gold" ? "bg-orange-100 text-orange-800" : "bg-gray-100 text-gray-800"}`}>{event.partnershipLevel}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      {event.impact}
                    </div>
                    {event.contactPerson && (
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {event.contactPerson}
                      </div>
                    )}
                  </div>

                  {event.testimonial && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-900 text-sm italic">"{event.testimonial}"</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Sponsorship Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Partner with K&L Recycling and join our community of supporters making a real difference in East Texas.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {sponsorTiers.map((tier) => (
              <motion.div key={tier.level} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${selectedTier === tier.level ? `border-${tier.level === "platinum" ? "yellow" : tier.level === "gold" ? "orange" : "gray"}-500 bg-${tier.level === "platinum" ? "yellow" : tier.level === "gold" ? "orange" : "gray"}-50` : `border-${tier.level === "platinum" ? "yellow" : tier.level === "gold" ? "orange" : "gray"}-200 hover:border-${tier.level === "platinum" ? "yellow" : tier.level === "gold" ? "orange" : "gray"}-300`}`} onClick={() => setSelectedTier(selectedTier === tier.level ? null : tier.level)}>
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${tier.level === "platinum" ? "bg-yellow-100 text-yellow-600" : tier.level === "gold" ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-600"}`}>
                    <span className="text-2xl">{tier.level === "platinum" ? "🏆" : tier.level === "gold" ? "🥇" : "🤝"}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 capitalize mb-1">{tier.level}</h3>
                  <p className="text-sm text-gray-600 mb-2">{tier.commitment}</p>
                  {tier.cost && <p className="font-bold text-green-600">{tier.cost}</p>}
                </div>
              </motion.div>
            ))}
          </div>

          {selectedTier && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="bg-white p-8 rounded-2xl shadow-lg">
              {(() => {
                const tier = sponsorTiers.find((t) => t.level === selectedTier);
                return tier ? (
                  <>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 capitalize mb-4">{tier.level} Sponsorship Benefits</h3>
                      <ul className="space-y-2 mb-6">
                        {tier.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Example Partners:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tier.examples.map((example) => (
                          <span key={example} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-center">
                      <button className="px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors">Inquire About {tier.level} Partnership</button>
                    </div>
                  </>
                ) : null;
              })()}
            </motion.div>
          )}
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Get Involved With K&L</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Join our team of dedicated volunteers making a positive impact in East Texas communities.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 * 0.1 }} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-gray-100">
              <div className="relative mb-4">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <Image src="/assets/community_grace_community_school.jpg" alt="Grace Community School education partnership" fill className="object-cover" />
                </div>
              </div>
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Education Partnerships</h3>
                <p className="text-gray-600 text-sm">Supporting local schools and education initiatives through donations and volunteer programs.</p>
              </div>
            </motion.div>
            {volunteerOpportunities.slice(0, 2).map((opportunity, index) => (
              <motion.div key={index + 1} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: (index + 1) * 0.1 }} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{opportunity.title}</h3>
                  <p className="text-gray-600 text-sm">{opportunity.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>Commitment: {opportunity.commitment}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>Frequency: {opportunity.frequency}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {opportunity.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">Learn More & Sign Up</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Initiatives */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-6">"Family First" Community Program</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Every month, K&L donates a portion of recycling proceeds to support local families and community needs.</p>
            <div className="mb-8">
              <Image src="/assets/community_donations_charity.jpg" alt="Community donations and charity support" width={600} height={300} className="rounded-2xl mx-auto shadow-2xl" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Food Bank Support", amount: "$2,500", period: "Monthly", icon: "🥫" },
              { name: "East Texas Children's Fund", amount: "$1,200", period: "Monthly", icon: "👶" },
              { name: "Grace Community Church", amount: "$800", period: "Monthly", icon: "⛪" },
              { name: "School Tuition Assistance", amount: "$1,800", period: "Monthly", icon: "📚" },
            ].map((donation, index) => (
              <motion.div key={donation.name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl mb-4">{donation.icon}</div>
                <h3 className="text-lg font-bold mb-2">{donation.name}</h3>
                <p className="text-green-200 text-lg font-bold">{donation.amount}</p>
                <p className="text-white/80 text-sm">{donation.period}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl mb-6">Want to support these initiatives too? Bring your scrap metal to any K&L location and help us give back to the community.</p>
            <button className="px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition-colors">Find Your Nearest Location</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Community;
