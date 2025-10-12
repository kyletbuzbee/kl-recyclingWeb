import React, { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { serviceForms, universalContactQuestions, ServiceFormConfig } from "@/data/forms";
import { SERVICES_DATA } from "@/data/services";

interface FormData {
  serviceType?: string;
  [key: string]: any;
}

interface QuoteFunnelProps {
  onClose?: () => void;
  initialService?: string;
}

const QuoteFunnel: FC<QuoteFunnelProps> = ({ onClose, initialService }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [selectedService, setSelectedService] = useState<string>(initialService || "");

  const steps = [
    { id: "service", title: "Service Selection", description: "Choose your service" },
    { id: "details", title: "Service Details", description: "Specific requirements" },
    { id: "contact", title: "Contact Information", description: "Get your quote" },
  ];

  // Update form data when service selection changes
  useEffect(() => {
    if (selectedService) {
      setFormData({ ...formData, serviceType: selectedService });
      setCurrentStep(1); // Move to details step
    }
  }, [selectedService, formData]);

  const handleInputChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
    // In a real implementation, this would send data to an API
    alert("Quote request submitted! We'll get back to you within 24 hours.");
    onClose?.();
  };

  const selectedServiceConfig = selectedService ? serviceForms[selectedService] : null;
  const serviceDetails = selectedService ? SERVICES_DATA[selectedService] : null;

  const renderServiceSelection = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">What can we help you with?</h3>
        <p className="text-gray-600">Select a service to see specific requirements and get an accurate quote.</p>
      </div>

      <div className="grid gap-4">
        {Object.entries(serviceForms).map(([id, config]) => (
          <motion.button key={id} onClick={() => handleServiceSelect(id)} className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${selectedService === id ? "border-blue-500 bg-blue-50 shadow-lg" : "border-gray-200 hover:border-blue-300 hover:shadow-md"}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <div className="flex items-start space-x-4">
              <div className="text-3xl flex-shrink-0">{config.icon}</div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-1">{config.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{config.description}</p>
                {selectedService === id && (
                  <div className="flex items-center text-blue-600 text-sm font-medium">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Selected
                  </div>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );

  const renderServiceDetails = () => {
    if (!selectedServiceConfig || !serviceDetails) return null;

    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">{serviceDetails.icon}</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedServiceConfig.name}</h3>
          <p className="text-gray-600">{selectedServiceConfig.description}</p>
        </div>

        {/* Service details preview */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h4 className="font-bold text-blue-900 mb-2">About this service:</h4>
          <p className="text-blue-800 text-sm">{serviceDetails.description}</p>
        </div>

        {/* Dynamic questions */}
        <div className="space-y-4">
          {selectedServiceConfig.questions.map((question) => (
            <div key={question.id} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {question.label}
                {question.required && <span className="text-red-500 ml-1">*</span>}
              </label>

              {question.type === "select" && (
                <select value={formData[question.id] || ""} onChange={(e) => handleInputChange(question.id, e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required={question.required}>
                  <option value="">Select an option...</option>
                  {question.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}

              {question.type === "number" && <input type="number" value={formData[question.id] || ""} onChange={(e) => handleInputChange(question.id, parseInt(e.target.value))} placeholder={question.placeholder} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" min={question.validation?.min} required={question.required} />}

              {question.type === "radio" && (
                <div className="space-y-2">
                  {question.options?.map((option) => (
                    <label key={option.value} className="flex items-center space-x-2">
                      <input type="radio" name={question.id} value={option.value} checked={formData[question.id] === option.value} onChange={(e) => handleInputChange(question.id, e.target.value)} required={question.required} />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              )}

              {question.type === "textarea" && <textarea value={formData[question.id] || ""} onChange={(e) => handleInputChange(question.id, e.target.value)} placeholder={question.placeholder} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows={3} required={question.required} />}

              {question.type === "file" && (
                <div className="space-y-2">
                  <input type="file" onChange={(e) => handleInputChange(question.id, e.target.files?.[0])} accept="image/*" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required={question.required} />
                  <p className="text-xs text-gray-500">{question.validation?.message}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderContactStep = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
        <p className="text-gray-600">We'll get back to you within 24 hours with your personalized quote.</p>
      </div>

      <div className="space-y-4">
        {universalContactQuestions.map((question) => (
          <div key={question.id} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {question.label}
              {question.required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {question.type === "text" && <input type="text" value={formData[question.id] || ""} onChange={(e) => handleInputChange(question.id, e.target.value)} placeholder={question.placeholder} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required={question.required} />}

            {question.type === "textarea" && <textarea value={formData[question.id] || ""} onChange={(e) => handleInputChange(question.id, e.target.value)} placeholder={question.placeholder} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows={3} required={question.required} />}
          </div>
        ))}
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-blue-800 text-sm">
          🛡️ <strong>Privacy Protected:</strong> We only collect information needed to provide your quote. Your data is secure and never shared with third parties.
        </p>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Get a Free Quote</h2>
          {onClose && (
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${index <= currentStep ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"}`}>
                    {index < currentStep ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${index <= currentStep ? "text-blue-600" : "text-gray-500"}`}>{step.title}</span>
                </div>
                {index < steps.length - 1 && <div className={`flex-1 h-px ${index < currentStep ? "bg-blue-600" : "bg-gray-300"}`} />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div key="service" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                {renderServiceSelection()}
              </motion.div>
            )}
            {currentStep === 1 && (
              <motion.div key="details" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                {renderServiceDetails()}
              </motion.div>
            )}
            {currentStep === 2 && (
              <motion.div key="contact" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                {renderContactStep()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center">
            <button onClick={prevStep} disabled={currentStep === 0} className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors ${currentStep === 0 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"}`}>
              Previous
            </button>

            <div className="flex items-center space-x-2">
              {currentStep === steps.length - 1 ? (
                <button onClick={handleSubmit} className="px-8 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Submit Quote Request
                </button>
              ) : (
                <button onClick={nextStep} className="px-8 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Next Step
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteFunnel;
