import React, { FC } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";

const TestimonialsPage: FC = () => {
  const testimonials = [
    {
      quote: "K&L's container service is night and day compared to our last vendor. They are always on time, which has completely eliminated our production bottlenecks.",
      name: "John D.",
      title: "Operations Manager",
      company: "Manufacturing Plant",
      rating: 5,
      date: "2 weeks ago",
    },
    {
      quote: "Their team is professional, their pricing is transparent, and they are a true partner in our demolition projects. Highly recommend.",
      name: "Sarah P.",
      title: "Project Lead",
      company: "Fritcher Construction",
      rating: 5,
      date: "1 month ago",
    },
    {
      quote: "Working with K&L has significantly increased our scrap revenue. Their guidance on sorting materials has been invaluable for our bottom line.",
      name: "Mike R.",
      title: "Facility Director",
      company: "Industrial Fabricator",
      rating: 5,
      date: "3 weeks ago",
    },
    {
      quote: "The quality of their service is outstanding. From the initial consultation to the final payout, everything was handled professionally and efficiently.",
      name: "David L.",
      title: "Plant Manager",
      company: "Metal Works Inc.",
      rating: 5,
      date: "6 weeks ago",
    },
    {
      quote: "We've been using K&L for over 5 years now. Their consistent service and fair pricing make them our go-to recycling partner.",
      name: "Jennifer K.",
      title: "Sustainability Manager",
      company: "Green Manufacturing Co.",
      rating: 5,
      date: "2 months ago",
    },
    {
      quote: "As a small business owner, I appreciate how K&L treats every customer equally. They made the process simple and the pricing was exactly as advertised.",
      name: "Carlos M.",
      title: "Owner",
      company: "Local Auto Shop",
      rating: 5,
      date: "1 week ago",
    },
    {
      quote: "Their environmental commitment is evident in everything they do. I appreciate being able to recycle responsibly while supporting the community.",
      name: "Rachel T.",
      title: "Environmental Coordinator",
      company: "City of Cypress Springs",
      rating: 5,
      date: "4 weeks ago",
    },
    {
      quote: "The customer service is exceptional. Any time I've had a question, they've been quick to respond and very knowledgeable.",
      name: "Mark S.",
      title: "Operations Director",
      company: "Regional Construction",
      rating: 5,
      date: "5 weeks ago",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Customers", icon: "👥" },
    { number: "4.9/5", label: "Average Rating", icon: "⭐" },
    { number: "56+", label: "Years Experience", icon: "🏆" },
    { number: "100%", label: "Satisfaction Rate", icon: "💯" },
  ];

  return (
    <Layout>
      <Head>
        <title>Customer Testimonials | K&L Recycling</title>
        <meta name="description" content="Read real customer testimonials and reviews about K&L Recycling's scrap metal services, pricing, and customer service in East Texas." />
        <link rel="canonical" href="https://www.klrecycling.com/testimonials" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-royal-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">What Our Customers Say</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">Real experiences from businesses and individuals who trust K&L Recycling for their scrap metal needs</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-black text-royal-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                  <span className="ml-2 text-sm text-gray-500">{testimonial.date}</span>
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-royal-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">{testimonial.name.charAt(0)}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.title}</div>
                    <div className="text-royal-blue-600 text-sm font-semibold">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Customers Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Why Customers Choose K&L</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">These are the qualities that make our customers come back time and again</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Reliability",
                description: "We show up when we say we will, providing consistent service you can depend on.",
                icon: "🕐",
              },
              {
                title: "Transparency",
                description: "No hidden fees, clear pricing, and honest communication about what to expect.",
                icon: "👀",
              },
              {
                title: "Expertise",
                description: "56 years of experience means we know scrap metal and how to maximize your returns.",
                icon: "🎯",
              },
            ].map((reason, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-5xl mb-6">{reason.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Join Our Happy Customers?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Experience the K&L difference for yourself. Contact us today for a free quote or consultation.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="/contact" className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg">
              Get Free Quote
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

export default TestimonialsPage;
