import React, { useEffect } from "react";
import Link from "next/link";
import { Service } from "@/types";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      {/* Enhanced Backdrop with Animation */}
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity duration-500" onClick={onClose}>
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-royal-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-electric-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>

        {/* Additional floating elements */}
        <div className="absolute top-1/6 right-1/6 w-48 h-48 bg-green-500 rounded-full mix-blend-soft-light filter blur-2xl opacity-20 animate-float animation-delay-4000"></div>
        <div className="absolute bottom-1/6 left-1/6 w-32 h-32 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-2xl opacity-25 animate-float animation-delay-1000"></div>

        {/* Particle system */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-float opacity-40 particle-float"></div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal Panel */}
      <div className="relative bg-white rounded-3xl max-w-4xl w-full mx-auto max-h-[90vh] overflow-hidden transform transition-all duration-500 scale-95 hover:scale-100 shadow-2xl service-modal-panel border border-gray-200" onClick={(e) => e.stopPropagation()}>
        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 p-1">
          <div className="bg-white rounded-t-2xl p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1">
                <h3 id="modal-title" className="text-4xl font-black text-gray-900 mb-3 leading-tight">
                  {service.title}
                </h3>
                <div className="w-20 h-1.5 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 rounded-full"></div>
              </div>
              <button onClick={onClose} aria-label="Close modal" className="flex-shrink-0 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-90 group ml-6">
                <svg className="w-6 h-6 text-gray-500 group-hover:text-gray-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Content Area */}
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          {/* Security: In a real app with CMS, sanitize HTML content */}
          <div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: service.content }} />
        </div>

        {/* Enhanced CTA Section */}
        <div className="border-t border-gray-200 bg-gray-50 p-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-royal-blue-600 to-electric-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Ready to get started?</p>
                <p className="text-sm text-gray-600">Get your custom quote today</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <button onClick={onClose} className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-xl hover:bg-gray-300 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
                Close
              </button>
              <Link href="/contact#quote-tool" onClick={onClose} className="px-8 py-3 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white font-semibold rounded-xl hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg flex items-center group">
                Get a Quote
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-royal-blue-500/10 to-electric-blue-500/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-royal-blue-500/10 to-electric-blue-500/10 rounded-full translate-y-12 -translate-x-12"></div>
      </div>
    </div>
  );
};

export default React.memo(ServiceModal);
