import React, { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OperationDetails {
  permits: string[];
  crewSize: string;
  equipment: string[];
  notes: string;
}

interface OperationalDetailsTabsProps {
  details: OperationDetails;
  isExpanded?: boolean;
}

const OperationalDetailsTabs: FC<OperationalDetailsTabsProps> = ({ details, isExpanded = false }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [expanded, setExpanded] = useState(isExpanded);

  const tabs = [
    {
      id: "permits",
      title: "Permits & Compliance",
      icon: "🛡️",
      content: details.permits,
      badge: "Certified",
    },
    {
      id: "team",
      title: "Team Composition",
      icon: "👥",
      content: [details.crewSize],
      badge: "Experienced",
    },
    {
      id: "equipment",
      title: "Equipment & Resources",
      icon: "🚛",
      content: details.equipment,
      badge: "Industrial Grade",
    },
    {
      id: "safety",
      title: "Safety & Notes",
      icon: "⚠️",
      content: [details.notes],
      badge: "OSHA Compliant",
    },
  ];

  const tabVariants = {
    inactive: { backgroundColor: "#f3f4f6", color: "#6b7280" },
    active: { backgroundColor: "#1e40af", color: "#ffffff" },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const accordionVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: "auto", opacity: 1 },
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Accordion Header */}
      <button onClick={() => setExpanded(!expanded)} className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-bold text-gray-900">Operational Details & Compliance</h3>
            <p className="text-sm text-gray-600">Professional standards and certifications</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">DISA Certified</span>
          <motion.svg animate={{ rotate: expanded ? 180 : 0 }} className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </div>
      </button>

      {/* Accordion Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div initial="collapsed" animate="expanded" exit="collapsed" variants={accordionVariants} transition={{ duration: 0.3 }} className="overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200 bg-gray-50">
              <div className="flex overflow-x-auto">
                {tabs.map((tab, index) => (
                  <motion.button key={tab.id} onClick={() => setActiveTab(index)} className={`flex-1 min-w-0 px-4 py-3 text-sm font-medium text-center whitespace-nowrap border-b-2 transition-all duration-200 ${activeTab === index ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`} variants={tabVariants} animate={activeTab === index ? "active" : "inactive"}>
                    <div className="flex flex-col items-center space-y-1">
                      <span className="text-lg">{tab.icon}</span>
                      <span className="text-xs">{tab.title}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial="hidden" animate="visible" exit="hidden" variants={contentVariants} transition={{ duration: 0.2 }}>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-lg">{tabs[activeTab].icon}</span>
                    <h4 className="text-xl font-bold text-gray-900">{tabs[activeTab].title}</h4>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{tabs[activeTab].badge}</span>
                  </div>

                  <div className="prose prose-gray max-w-none">
                    {Array.isArray(tabs[activeTab].content) ? (
                      <ul className="space-y-2">
                        {tabs[activeTab].content.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700 leading-relaxed">{tabs[activeTab].content}</p>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OperationalDetailsTabs;
