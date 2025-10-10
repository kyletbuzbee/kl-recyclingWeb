import React, { FC, useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";

const FAQPage: FC = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const faqCategories = [
    {
      title: "Pricing & Payments",
      icon: "💰",
      questions: [
        {
          question: "Do I need an appointment to drop off scrap metal?",
          answer: "We're open Monday through Friday 7AM-5PM, Saturdays 8AM-12PM. We're closed on Sundays and major holidays.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We pay cash immediately upon completion of the transaction. You'll receive your payment through our cashier window right after your weight ticket is processed and approved.",
        },
        {
          question: "Can I get a price quote before coming in?",
          answer: "For small loads, we recommend bringing your materials so our experts can provide an accurate assessment. For large industrial loads, you can contact our sales team for volume pricing quotes.",
        },
        {
          question: "Are there minimum load requirements?",
          answer: "We accept all quantities, from small household items to large industrial loads. However, pricing may vary based on volume, and we may offer volume discounts for larger quantities.",
        },
      ],
    },
    {
      title: "Accepted Materials",
      icon: "🔧",
      questions: [
        {
          question: "What materials do you buy?",
          answer: "We purchase ferrous metals (steel, iron) and non-ferrous metals (copper, aluminum, brass, stainless steel). We also accept vehicles, industrial equipment, and certain electronics. See our materials page for a complete list.",
        },
        {
          question: "Do you buy cars for scrap?",
          answer: "Yes, we accept vehicles for scrap metal recycling. You'll need to bring the title for the vehicle. Fluids must be drained before you arrive.",
        },
        {
          question: "What can't you take?",
          answer: "We cannot accept hazardous materials, sealed containers with unknown contents, explosives, radioactive materials, certain electronics, and municipal waste. See our materials page for a complete list of prohibited items.",
        },
        {
          question: "Do I need to separate my materials?",
          answer: "While separation is helpful and can increase your payout, our team can help sort materials on-site. However, we recommend basic separation (ferrous from non-ferrous) to maximize your return.",
        },
      ],
    },
    {
      title: "Container & Pickup Services",
      icon: "🚛",
      questions: [
        {
          question: "How do roll-off containers work?",
          answer: "We deliver a container to your site for you to fill. When you're ready, we pick it up, process the materials, and provide payment. There's no obligation to fill it within a certain timeframe.",
        },
        {
          question: "What sizes of containers do you offer?",
          answer: "We offer multiple sizes: 20-yard, 30-yard, and 40-yard containers. The size recommendation depends on your project scope and frequency of disposal needs.",
        },
        {
          question: "Is there a delivery fee?",
          answer: "Container delivery and initial placement are included at no charge. However, there may be transportation costs if the container needs to be moved during your project.",
        },
        {
          question: "How long can I keep a container?",
          answer: "There are no time restrictions on container placement. Keep it as long as your project requires, and call us when you're ready for pickup.",
        },
      ],
    },
    {
      title: "Safety & Regulations",
      icon: "🛡️",
      questions: [
        {
          question: "What safety measures do you have?",
          answer: "We are ISN compliant and follow strict safety protocols. Our facility includes safety training, protective equipment, and emergency response procedures. We also maintain R2 certification for responsible recycling.",
        },
        {
          question: "Do I need any special preparation?",
          answer: "Remove any hazardous materials, drain fluids from vehicles and equipment, and ensure containers are open and accessible. Our team will guide you through any specific requirements.",
        },
        {
          question: "What environmental standards do you follow?",
          answer: "We are committed to environmentally responsible recycling. We follow EPA guidelines, maintain R2 certification, and ensure proper disposal of materials that can't be recycled.",
        },
      ],
    },
    {
      title: "Business & Operations",
      icon: "🏢",
      questions: [
        {
          question: "What are your business hours?",
          answer: "We're open Monday through Friday 7AM-5PM, Saturdays 8AM-12PM. We're closed on Sundays and major holidays.",
        },
        {
          question: "Do you serve residential customers?",
          answer: "Yes, we welcome residential customers for smaller loads. However, our services are optimized for industrial, commercial, and municipal customers who generate larger volumes.",
        },
        {
          question: "Can I get a tour of your facility?",
          answer: "We offer facility tours by appointment for potential large-volume customers and educational groups. Contact our sales team to arrange a visit.",
        },
        {
          question: "How long have you been in business?",
          answer: "K&L Recycling has been serving East Texas for over 68 years, established in 1956. We've built our reputation on fair pricing, reliable service, and community commitment.",
        },
      ],
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Frequently Asked Questions | K&L Recycling</title>
        <meta name="description" content="Get answers to common questions about scrap metal recycling, pricing, materials, and our services at K&L Recycling in East Texas." />
        <link rel="canonical" href="https://www.klrecycling.com/faq" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-royal-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">Everything you need to know about our scrap metal recycling services</p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.title} className="bg-gray-50 rounded-2xl p-8" data-aos="fade-up" data-aos-delay={categoryIndex * 100}>
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{category.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-b border-gray-200 last:border-b-0">
                      <button onClick={() => toggleSection(`${categoryIndex}-${faqIndex}`)} className="w-full text-left py-4 px-6 bg-white rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-royal-blue-500">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                          <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-transform ${openSections[`${categoryIndex}-${faqIndex}`] ? "rotate-180" : ""}`}>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </button>

                      {openSections[`${categoryIndex}-${faqIndex}`] && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Our expert team is here to help. Contact us for personalized assistance with your recycling needs.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="/contact" className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg">
              Get In Touch
            </a>
            <a href="tel:+17135550123" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-colors text-lg">
              Call (713) 555-0123
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
