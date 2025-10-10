import React, { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import RecyclingCalculator from "@/components/RecyclingCalculator"; // New engagement component
import Image from "next/image";

const SustainabilityPage: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Sustainability | K&L Recycling</title>
        <meta name="description" content="Our commitment to environmental stewardship and sustainable recycling practices." />
      </Head>

      {/* Sustainability Funnel Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* 1. What is recycling/sustainability? */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <Image src="/assets/services/demolition-safety.png" alt="Environmental recycling and sustainability at K&L" width={600} height={400} className="rounded-lg shadow-lg" />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-royal-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is Recycling & Sustainability?</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">Recycling at K&L means more than just processing scrap metal - it's our comprehensive approach to environmental stewardship that reduces waste, conserves natural resources, and minimizes environmental impact while creating economic value.</p>
                <div className="space-y-3">
                  {["Responsible recycling practices that meet R2 standards", "Zero-landfill commitment for metal waste", "Environmental compliance through ISN and EPA standards", "Community environmental education and support"].map((detail, index) => (
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

            {/* 2. Who benefits from sustainability? */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">Who benefits from our sustainability efforts?</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-royal-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m-9 9a9 9 0 019-9"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">The Environment</h3>
                  <p className="text-gray-600 text-sm">Reduced CO2 emissions, conserved natural resources, and minimized landfill waste</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4v3h1v-3m0 3h3m-3 0h1"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Local Communities</h3>
                  <p className="text-gray-600 text-sm">Safer environments, educational programs, and community support initiatives</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4v3h1v-3m0 3h3m-3 0h1"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Our Customers</h3>
                  <p className="text-gray-600 text-sm">Reliable recycling partner, fair pricing, and proper environmental compliance</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Future Generations</h3>
                  <p className="text-gray-600 text-sm">Preserved natural resources and cleaner air and water for our children</p>
                </div>
              </div>
            </div>

            {/* 3. How we implement sustainability? */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">How we implement sustainability?</h2>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "Certified Processes",
                    desc: "Following R2 and ISN certified processes for responsible recycling.",
                  },
                  {
                    step: "2",
                    title: "Environmental Compliance",
                    desc: "Maintaining EPA compliance and reducing environmental impact.",
                  },
                  {
                    step: "3",
                    title: "Resource Conservation",
                    desc: "Conserving natural resources through recycling instead of mining.",
                  },
                  {
                    step: "4",
                    title: "Community Education",
                    desc: "Educating communities about recycling benefits and best practices.",
                  },
                ].map((step, index) => (
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

            {/* 4. Why choose sustainable practices? */}
            <div className="bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white rounded-2xl p-8 md:p-12 mb-20">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-bold text-lg">4</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white">Why choose sustainable recycling?</h2>
              </div>

              <div className="mb-8">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <Image src="/assets/scrap_goals.jpg" alt="Achieving environmental goals through recycling" fill className="object-cover" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-6 text-white">Environmental Benefits:</h3>
                  <div className="space-y-4">
                    {["Reduces CO2 emissions by up to 2.5 tons per ton of metal recycled", "Conserves natural resources and reduces mining impact", "Prevents landfill waste and groundwater contamination", "Supports circular economy principles", "Creates jobs in the recycling industry"].map((benefit, index) => (
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
                  <h3 className="text-xl font-bold mb-6 text-white">K&L's Commitment:</h3>
                  <div className="space-y-4 text-blue-100">
                    <p className="leading-relaxed">Every ton of metal we recycle eliminates the need for mining, smelting, and transportation from virgin sources.</p>
                    <p className="leading-relaxed">Our zero-landfill metal waste policy ensures nothing goes to waste that could be reused.</p>
                    <p className="leading-relaxed">Community education programs teach the next generation about environmental stewardship.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Get involved with sustainability */}
            <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">Ready to make a sustainable impact?</h2>
              </div>

              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Partner with K&L Recycling for environmentally responsible scrap metal management that benefits your business and the planet. Let's create a sustainable future together.</p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 9.574 4 8s3 3.582 9 8z"></path>
                  </svg>
                  Start Sustainable Partnership
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-delay="100">
            <h2 className="text-3xl font-black text-gray-900">Our Certifications</h2>
            <p className="text-lg text-gray-700 mt-4">We adhere to the highest industry standards for safety and environmental responsibility. Our certifications from R2 and ISN are a testament to our rigorous processes.</p>
            <div className="flex space-x-8 mt-8">
              <Image src="/assets/certifications-logo/r2-certified-logo.png" alt="R2 Certified - Responsible Recycling certification" className="h-20 w-auto animate-zoom-in" width={120} height={80} />
              <Image src="/assets/certifications-logo/isn-logo.png" alt="ISN Compliant - Industry safety standards" className="h-20 w-auto animate-zoom-in" width={120} height={80} />
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="200">
            <Image src="/assets/services/demolition-safety.png" alt="K&L Recycling sustainable practices and environmental stewardship" width={600} height={400} className="rounded-lg shadow-xl animate-fade-slide" />
          </div>
        </div>
      </section>

      {/* Enhanced Community Section with Imagery and Animations */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-12" data-aos="fade-up">
            Community Engagement
          </h2>
          <p className="text-center text-lg text-gray-700 mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We actively participate in local initiatives to promote recycling and sustainability.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay={0}>
              <Image src="/assets/services/Construction.jpg" alt="Construction site recycling and sustainability" width={400} height={300} className="rounded-md mb-4 animate-zoom-in" />
              <h3 className="text-2xl font-bold text-green-600 mb-2">Recycling Drives</h3>
              <p className="text-gray-600">Hosting annual events for community metal collection.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay={200}>
              <Image src="/assets/did_you_know_steel.jpg" alt="Educational content about steel and recycling benefits" width={400} height={300} className="rounded-md mb-4 animate-zoom-in" />
              <h3 className="text-2xl font-bold text-green-600 mb-2">Educational Workshops</h3>
              <p className="text-gray-600">Partnering with schools to teach recycling benefits.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay={400}>
              <Image src="/assets/community_donations_charity.jpg" alt="Community partnerships and charity collaborations" width={400} height={300} className="rounded-md mb-4 animate-zoom-in" />
              <h3 className="text-2xl font-bold text-green-600 mb-2">Local Partnerships</h3>
              <p className="text-gray-600">Collaborating with charities for eco-friendly projects.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SustainabilityPage;
