import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isOpen && !isLoaded) {
      // Load the Bot Libre iframe when chat is opened
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isLoaded]);

  return (
    <>
      {/* Chat Button */}
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="sticky bottom-6 right-6 z-50 ml-auto" style={{ position: "fixed", right: "1.5rem", bottom: "1.5rem" }}>
        <button onClick={() => setIsOpen(!isOpen)} className="bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 hover:from-royal-blue-700 hover:to-electric-blue-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110" aria-label="Open chat">
          <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"} />
            </svg>
          </motion.div>
        </button>

        {/* Pulsing ring around button when closed */}
        {!isOpen && (
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-royal-blue-400 rounded-full"
          />
        )}
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setIsOpen(false)} />

            {/* Chat Container */}
            <motion.div initial={{ opacity: 0, scale: 0.8, y: 100 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 100 }} transition={{ duration: 0.3 }} className="fixed bottom-24 right-6 w-96 h-[500px] max-w-[calc(100vw-3rem)] z-50 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Header */}
              <div className="bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">🤖</div>
                    <div>
                      <h3 className="font-semibold">K&L Recycling Assistant</h3>
                      <p className="text-xs opacity-90">Ask me about our services!</p>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors" aria-label="Close chat">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Chat Content */}
              <div className="h-full">
                {isLoaded ? (
                  <iframe ref={iframeRef} src="https://www.botlibre.com/chat?id=46896305&embedded=true&chatLog=false&prompt=false&menubar=false" width="100%" height="100%" frameBorder="0" allow="microphone" className="w-full h-full" title="K&L Recycling Chatbot" />
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-8 h-8 border-2 border-royal-blue-600 border-t-transparent rounded-full mx-auto mb-4"
                      />
                      <p className="text-gray-600">Loading chat...</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
