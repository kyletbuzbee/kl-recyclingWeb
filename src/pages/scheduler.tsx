"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import dynamic from "next/dynamic";

const SchedulePickupWidget = dynamic(() => import("@/components/SchedulePickupWidget"));

// Advanced Scheduler Features Component
function SchedulerDashboard() {
  const [activeSection, setActiveSection] = useState<"pickup" | "quotes" | "tracking">("pickup");

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">📅 Smart Scheduling System</div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Schedule Your Scrap Pickup</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">Book your scrap metal pickup instantly with our intelligent scheduling system. Choose the best time for you and our team.</p>
      </motion.div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-2xl shadow-lg p-2 mb-8 flex flex-wrap justify-center">
        {[
          { id: "pickup", label: "Schedule Pickup", emoji: "📅" },
          { id: "quotes", label: "View Quotes", emoji: "💰" },
          { id: "tracking", label: "Track Pickups", emoji: "🚛" },
        ].map((tab) => (
          <button key={tab.id} onClick={() => setActiveSection(tab.id as any)} className={`flex-1 min-w-[150px] py-4 px-6 rounded-xl font-medium text-sm transition-all duration-300 ${activeSection === tab.id ? "bg-blue-600 text-white shadow-lg" : "text-gray-600 hover:bg-gray-50"}`}>
            <span className="mr-2">{tab.emoji}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      {activeSection === "pickup" && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-blue-900 mb-2">Fast Scheduling</h3>
              <p className="text-blue-700 text-sm">Book pickup within 48 hours. No waiting, no hassle.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-green-900 mb-2">Instant Payment</h3>
              <p className="text-green-700 text-sm">Get paid cash immediately upon pickup completion.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-purple-900 mb-2">Real-time Tracking</h3>
              <p className="text-purple-700 text-sm">Track your pickup status in real-time from booking to completion.</p>
            </motion.div>
          </div>

          {/* Scheduler Widget */}
          <SchedulePickupWidget />

          {/* Process Overview */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How the Process Works</h3>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Book Online",
                  desc: "Use our scheduler to pick your preferred date and time",
                  icon: "📝",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  step: "2",
                  title: "Confirm Details",
                  desc: "We'll call to confirm your pickup and provide estimated weight",
                  icon: "📞",
                  color: "from-green-500 to-green-600",
                },
                {
                  step: "3",
                  title: "Pickup Completion",
                  desc: "Our experienced team safely loads and weighs your scrap",
                  icon: "🚛",
                  color: "from-orange-500 to-orange-600",
                },
                {
                  step: "4",
                  title: "Instant Payment",
                  desc: "Get paid immediately based on weight and market rates",
                  icon: "💰",
                  color: "from-purple-500 to-purple-600",
                },
              ].map((item, index) => (
                <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="text-center relative">
                  {/* Connector Line */}
                  {index < 3 && <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform translate-x-6"></div>}

                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto -mt-10 mb-6`}>{item.step}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {activeSection === "quotes" && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center py-16">
            <div className="text-6xl mb-6">💰</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Quotes</h2>
            <p className="text-xl text-gray-600">Your previous quotes and estimates appear here for easy reference.</p>
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-12 border border-gray-200">
              <p className="text-gray-500 mb-6">No recent quotes found.</p>
              <button onClick={() => setActiveSection("pickup")} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300">
                Get Your First Quote
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {activeSection === "tracking" && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🚛</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pickup Tracking</h2>
            <p className="text-xl text-gray-600">Track the status of your scheduled pickups in real-time.</p>
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-12 border border-gray-200">
              <p className="text-gray-500 mb-6">No active pickups to track.</p>
              <button onClick={() => setActiveSection("pickup")} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300">
                Schedule Your First Pickup
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Emergency Contact */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }} className="mt-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">🚨 Emergency Pickup Needed?</h3>
        <p className="text-red-100 mb-6 max-w-2xl mx-auto">Large scrap accumulations or time-sensitive situations? We offer emergency pickup services to keep your operations running smoothly.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+18005338081" className="bg-white text-red-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2">
            <span>📞</span>
            <span>Call Emergency Line</span>
          </a>
          <a href="mailto:emergency@klrecycling.com" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center space-x-2">
            <span>✉️</span>
            <span>Send Emergency Email</span>
          </a>
        </div>
      </motion.div>

      {/* FAQs */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Scheduling FAQs</h3>

        <div className="space-y-6">
          {[
            {
              question: "How far in advance do I need to schedule pickup?",
              answer: "We recommend scheduling at least 24-48 hours in advance to ensure availability during your preferred time slot.",
            },
            {
              question: "What if I need to cancel or reschedule?",
              answer: "You can cancel or reschedule up to 4 hours before your pickup without penalty. Just call us or use our online portal.",
            },
            {
              question: "Do you provide containers for collection?",
              answer: "Yes! We offer roll-off containers from 10 to 40 yards in capacity. Free delivery and pickup within our service area.",
            },
            {
              question: "What's the minimum amount for pickup?",
              answer: "We accept everything from small loads to large industrial quantities. Even small amounts are welcome!",
            },
            {
              question: "Are there any materials you don't accept?",
              answer: "We accept most scrap metals but cannot take hazardous, radioactive, or contaminated materials. Contact us for specifics.",
            },
          ].map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 + index * 0.1 }} className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const SchedulerPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Schedule Pickup - K&L Recycling Services" description="Schedule your scrap metal pickup online. Choose your preferred date and time, provide details, and get instant confirmation. Emergency pickups available." keywords="schedule pickup, scrap metal pickup, roll-off container, industrial pickup, emergency pickup" />

      <div className="py-12 bg-gray-50 min-h-screen">
        <SchedulerDashboard />
      </div>
    </Layout>
  );
};

export default SchedulerPage;
