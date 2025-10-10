import React, { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";

const PricingPage: FC = () => {
  const materialsList = [
    {
      material: "Copper",
      image: "/assets/non-ferrous/copper_1.jpg",
      examples: "Clean copper wire, pipes, electrical components",
    },
    {
      material: "Aluminum",
      image: "/assets/non-ferrous/aluminum.png",
      examples: "Cans, siding, extrusions, wheels",
    },
    {
      material: "Steel",
      image: "/assets/ferrous/long_iron.jpg",
      examples: "Structural steel, sheet metal, equipment",
    },
    {
      material: "Brass",
      image: "/assets/non-ferrous/brass.jpg",
      examples: "Fittings, valves, decorative items",
    },
    {
      material: "Stainless Steel",
      image: "/assets/non-ferrous/stainlesssteel.jpg",
      examples: "Appliances, industrial equipment, pipes",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Scrap Metal Prices | Call for Rates | K&L Recycling East Texas</title>
        <meta name="description" content="Call your local K&L Recycling yard for today's scrap metal prices. Competitive rates for copper, aluminum, steel, and more across 56+ locations in East Texas." />
        <link rel="canonical" href="https://www.klrecycling.com/pricing" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-royal-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">Call Your Local Yard for Best Pricing</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">Our 56+ locations across East Texas provide competitive, market-based pricing for all scrap metal types</p>
            <div className="bg-yellow-400/20 border border-yellow-400/30 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-yellow-200 font-semibold">📞 Call (713) 555-0123 or visit your local yard today for current pricing on copper, aluminum, steel, brass, and more!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials We Accept */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Materials We Purchase</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Bring any of these materials to your local K&L Recycling yard for cash payment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {materialsList.map((item, index) => (
              <div key={item.material} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay={index * 100}>
                {/* Material Image */}
                <div className="relative h-32 overflow-hidden">
                  <Image src={item.image} alt={item.material} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-white font-bold text-sm bg-black/50 px-2 py-1 rounded">{item.material}</span>
                  </div>
                </div>

                {/* Material Information */}
                <div className="p-6">
                  <div className="text-sm text-gray-600 leading-relaxed">{item.examples}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Call for Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Why Call for Pricing?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our expert staff provides personalized service with the best rates available</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg" data-aos="fade-up">
              <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl text-white">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Market-Based Pricing</h3>
              <p className="text-gray-600">We track global metal markets to offer competitive rates that fluctuate with market conditions.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl text-white">🏢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">56+ Locations</h3>
              <p className="text-gray-600">Convenient locations across East Texas - visit any yard or call to speak with our knowledgeable staff.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl text-white">⭐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Assessment</h3>
              <p className="text-gray-600">Our trained metallurgists inspect your materials and provide accurate grading for maximum value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Simple Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Four easy steps to get paid for your scrap metal</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Call or Visit",
                description: "Contact your local yard or bring your materials for a free, no-obligation assessment",
                icon: "📞",
              },
              {
                step: "2",
                title: "Get Quoted",
                description: "Speak with our experts about current pricing for your specific materials",
                icon: "💬",
              },
              {
                step: "3",
                title: "Weigh & Grade",
                description: "We'll weigh your load and grade your materials for accurate pricing",
                icon: "⚖️",
              },
              {
                step: "4",
                title: "Cash Payment",
                description: "Receive immediate payment at our cashier window",
                icon: "💰",
              },
            ].map((step, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-20 h-20 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">{step.icon}</div>
                <div className="text-sm text-royal-blue-600 font-bold mb-2">Step {step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-royal-blue-50 to-electric-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Pricing?</h3>
              <p className="text-gray-600 mb-6">Our knowledgeable staff is ready to help. Contact any location for current pricing on your materials.</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="tel:+17135550123" className="bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300">
                  Call (713) 555-0123
                </a>
                <a href="/locations" className="border-2 border-royal-blue-600 text-royal-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-royal-blue-50 transition-all duration-300">
                  Find a Location
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Get Paid? Let's Get Started!</h2>
          <p className="text-xl text-blue-100 mb-8">Visit your local K&L Recycling yard today or call for the best scrap metal prices in East Texas</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="tel:+17135550123" className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg">
              Call for Pricing
            </a>
            <a href="/locations" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-colors text-lg">
              Find Locations
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;
