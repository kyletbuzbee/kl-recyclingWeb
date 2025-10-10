import React, { FC } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";

const PortalPage: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Client Portal | K&L Recycling</title>
        <meta name="description" content="Access your K&L Recycling account, view past transactions, schedule pickups, and track container deliveries." />
        <link rel="canonical" href="https://www.klrecycling.com/portal" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-royal-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">Client Portal</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">Access your account, view transactions, and manage your services</p>
          </div>
        </div>
      </section>

      {/* Portal Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Portal Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Manage your account and services through our secure client portal</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Transaction History",
                description: "View past transactions, payments, and weigh ticket details",
                icon: "📋",
                color: "from-blue-500 to-cyan-600",
              },
              {
                title: "Schedule Services",
                description: "Request container delivery, arrange pickups, and schedule regular service",
                icon: "📅",
                color: "from-green-500 to-emerald-600",
              },
              {
                title: "Track Containers",
                description: "Monitor container status and delivery schedules in real-time",
                icon: "🚛",
                color: "from-purple-500 to-indigo-600",
              },
              {
                title: "Document Access",
                description: "Download weigh tickets, certificates, and account statements",
                icon: "📄",
                color: "from-orange-500 to-red-600",
              },
              {
                title: "Price Alerts",
                description: "Get notified about material price changes and market updates",
                icon: "💰",
                color: "from-teal-500 to-blue-600",
              },
              {
                title: "Support Tickets",
                description: "Submit service requests and track resolution status",
                icon: "🎫",
                color: "from-pink-500 to-rose-600",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-3xl mx-auto mb-6`}>{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-12">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Portal Launching Soon!</h2>
              <p className="text-xl text-gray-600 mb-8">We're working hard to bring you the most comprehensive client portal experience. Sign up below to be notified when it launches and get early access.</p>

              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <input type="email" placeholder="Enter your email address" className="px-6 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-royal-blue-500 focus:border-transparent text-lg" />
                <button className="bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300 text-lg">Notify Me</button>
              </div>

              <p className="text-sm text-gray-500">
                Already have an account with us?{" "}
                <Link href="/contact" className="text-royal-blue-600 font-semibold hover:underline">
                  Contact us
                </Link>{" "}
                for portal beta access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manual Login Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Current Account Access</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our team can help you access your account information and services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transaction History</h3>
              <p className="text-gray-600 mb-6">Need to view past transactions? Our team can help you access your account details.</p>
              <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 inline-block">
                Request Access
              </Link>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule Services</h3>
              <p className="text-gray-600 mb-6">Need to schedule pickup or delivery? Contact our team for immediate assistance.</p>
              <a href="tel:+17135550123" className="bg-gradient-to-r from-teal-600 to-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 inline-block">
                Call Now: (713) 555-0123
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortalPage;
