import React, { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { serviceForms, universalContactQuestions } from "@/data/forms";
import { SERVICES_DATA } from "@/data/services";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  [key: string]: any;
}

const INITIAL_DATA: FormData = {};

const SchedulePickupPage: FC = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [selectedService, setSelectedService] = useState<string>("");
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const steps = [
    { id: "service", title: "Service Selection", description: "Choose your service type" },
    { id: "details", title: "Service Details", description: "Specific requirements" },
    { id: "contact", title: "Contact & Schedule", description: "Get your pickup scheduled" },
  ];

  const availableServices = ["roll-off", "demolition", "mobile-crushing"];

  const handleInputChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFileChange = (field: string, files: FileList | null) => {
    if (files && files[0]) {
      setFormData({ ...formData, [field]: files[0] });
    }
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setFormData({ ...formData, serviceType: serviceId });
    setCurrentStep(1);
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

  const handleSubmit = async () => {
    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch("/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("There was an issue scheduling your service. Please try again later.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError((err as Error).message);
    }
  };

  const selectedServiceConfig = selectedService ? serviceForms[selectedService] : null;
  const serviceDetails = selectedService ? SERVICES_DATA[selectedService] : null;

  const renderServiceSelection = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Service</h3>
        <p className="text-gray-600">Select the service that best fits your needs for scheduling a pickup.</p>
      </div>

      <div className="grid gap-4">
        {availableServices.map((serviceId) => {
          const config = serviceForms[serviceId];
          return (
            <motion.button key={serviceId} onClick={() => handleServiceSelect(serviceId)} className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${selectedService === serviceId ? "border-green-500 bg-green-50 shadow-lg" : "border-gray-200 hover:border-blue-300 hover:shadow-md"}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <div className="flex items-start space-x-4">
                <div className="text-3xl flex-shrink-0">{config.icon}</div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{config.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{config.description}</p>
                  {selectedService === serviceId && (
                    <div className="flex items-center text-green-600 text-sm font-medium">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Selected
                    </div>
                  )}
                </div>
              </div>
            </motion.button>
          );
        })}
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
                <select value={formData[question.id] || ""} onChange={(e) => handleInputChange(question.id, e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required={question.required}>
                  <option value="">Select an option...</option>
                  {question.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}

              {question.type === "number" && <input type="number" value={formData[question.id] || ""} onChange={(e) => handleInputChange(question.id, parseInt(e.target.value))} placeholder={question.placeholder} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" min={question.validation?.min} required={question.required} />}

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

              {question.type === "checkbox" && (
                <div className="space-y-2">
                  {question.options?.map((option) => (
                    <label key={option.value} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name={question.id}
                        value={option.value}
                        checked={formData[question.id]?.includes(option.value)}
                        onChange={(e) => {
                          const current = formData[question.id] || [];
                          const updated = current.includes(option.value) ? current.filter((val: string) => val !== option.value) : [...current, option.value];
                          handleInputChange(question.id, updated);
                        }}
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              )}

              {question.type === "textarea" && <textarea value={formData[question.id] || ""} onChange={(e) => handleInputChange(question.id, e.target.value)} placeholder={question.placeholder} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" rows={3} required={question.required} />}

              {question.type === "file" && (
                <div className="space-y-2">
                  <input type="file" onChange={(e) => handleFileChange(question.id, e.target.files)} accept="image/*" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required={question.required} />
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
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information & Scheduling</h3>
        <p className="text-gray-600">We'll get back to you within 24 hours to schedule your service.</p>
      </div>

      <div className="space-y-4">
        {universalContactQuestions.map((question) => (
          <div key={question.id} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {question.label}
              {question.required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {question.type === "text" && <input type="text" value={formData[question.id] || ""} onChange={(e) => handleInputChange(question.id, e.target.value)} placeholder={question.placeholder} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required={question.required} />}

            {question.type === "textarea" && <textarea value={formData[question.id] || ""} onChange={(e) => handleInputChange(question.id, e.target.value)} placeholder={question.placeholder} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" rows={3} required={question.required} />}
          </div>
        ))}
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <p className="text-green-800 text-sm">
          🛡️ <strong>Privacy Protected:</strong> We only collect information needed to schedule your service. Your data is secure and never shared with third parties.
        </p>
      </div>
    </div>
  );

  if (status === "success") {
    return (
      <Layout>
        <SEO title="Pickup Scheduled - K&L Recycling" description="Your scrap metal pickup has been scheduled successfully." />
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Pickup Scheduled!</h1>
              <p className="text-lg text-gray-600 mb-8">Thank you for choosing K&L Recycling. We'll contact you within 24 hours to confirm your pickup details.</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">What happens next?</h3>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>• We'll review your service request</li>
                  <li>• Confirm availability and scheduling</li>
                  <li>• Contact you to coordinate pickup details</li>
                  <li>• Process your materials upon pickup</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title="Professional Industrial Services" description="Schedule industrial waste management, demolition, and bulk container services for contractors and manufacturers." />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-royal-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Industrial Waste Solutions</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">Professional industrial services for contractors, manufacturers, and demolition operations - bulk containers, demolition cleanup, and specialized processing.</p>
        </div>
      </section>

      {/* Service Funnel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center space-x-4">
                {steps.map((step, index) => (
                  <React.Fragment key={step.id}>
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${index <= currentStep ? "bg-green-600 text-white" : "bg-gray-300 text-gray-600"}`}>
                        {index < currentStep ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          index + 1
                        )}
                      </div>
                      <div className="ml-3">
                        <span className={`text-sm font-medium ${index <= currentStep ? "text-green-600" : "text-gray-500"}`}>{step.title}</span>
                        <p className="text-xs text-gray-500">{step.description}</p>
                      </div>
                    </div>
                    {index < steps.length - 1 && <div className={`flex-1 h-px ${index < currentStep ? "bg-green-600" : "bg-gray-300"}`} />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Content */}
            <motion.div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
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

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                <button onClick={prevStep} disabled={currentStep === 0} className={`px-6 py-3 text-sm font-medium rounded-lg transition-colors ${currentStep === 0 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"}`}>
                  Previous
                </button>

                <div className="flex items-center space-x-3">
                  {currentStep === steps.length - 1 ? (
                    <button onClick={handleSubmit} disabled={status === "submitting"} className="px-8 py-3 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                      {status === "submitting" ? "Submitting..." : "Schedule Service"}
                    </button>
                  ) : (
                    <button onClick={nextStep} className="px-8 py-3 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors">
                      Next Step
                    </button>
                  )}
                </div>
              </div>

              {status === "error" && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <p className="text-red-800 font-medium">Submission Error</p>
                  </div>
                  <p className="mt-2 text-red-700 text-sm">{error}</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SchedulePickupPage;
