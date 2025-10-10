import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navigation";

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = (href: string) => {
    setActiveDropdown(href);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" aria-label="K&L Recycling Home" className="flex-shrink-0">
            <Image src="/assets/certifications-logo/logo.png" alt="K&L Recycling Logo" width={120} height={40} priority className="hover:scale-105 transition-transform duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden md:block relative">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.href} className="relative" onMouseEnter={() => handleMouseEnter(link.href)} onMouseLeave={handleMouseLeave}>
                  {link.dropdown ? (
                    <>
                      <Link href={link.href} className="nav-link text-slate-gray-700 hover:text-royal-blue-700 font-medium text-lg flex items-center space-x-1">
                        <span>{link.label}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      <AnimatePresence>
                        {activeDropdown === link.href && (
                          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border border-gray-200 py-2 z-50">
                            {link.dropdown.map((item) => (
                              <Link key={item.href} href={item.href} className="block px-4 py-3 text-sm text-slate-gray-700 hover:bg-royal-blue-50 hover:text-royal-blue-700 transition-colors">
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={link.href} className="nav-link text-slate-gray-700 hover:text-royal-blue-700 font-medium text-lg">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+19035926299" className="text-royal-blue-600 hover:text-royal-blue-700 font-semibold transition-colors flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(903) 592-6299</span>
            </a>
            <Link href="/schedule-pickup" className="bg-royal-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-royal-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Schedule Pickup
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors" aria-label="Toggle mobile menu" aria-expanded={isMobileMenuOpen ? true : false}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden overflow-hidden bg-white border-t border-gray-200">
              <nav aria-label="Mobile Navigation" className="py-4">
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-slate-gray-700 hover:bg-royal-blue-50 hover:text-royal-blue-700 transition-colors font-medium">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li className="px-4 py-2">
                    <a href="tel:+19035926299" className="flex items-center space-x-3 text-royal-blue-600 font-semibold py-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>(903) 592-6299</span>
                    </a>
                  </li>
                  <li className="px-4 pb-2">
                    <Link href="/schedule-pickup" onClick={() => setIsMobileMenuOpen(false)} className="block bg-royal-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-royal-blue-700 transition-colors">
                      Schedule Pickup
                    </Link>
                  </li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default React.memo(Header);
