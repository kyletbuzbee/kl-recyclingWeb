import React, { FC } from "react";
import Link from "next/link";
import FacebookIcon from "./FacebookIcon";
import LinkedInIcon from "./LinkedInIcon";

const Footer: FC = () => {
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || "#";
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || "#";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold">K&L Recycling</h3>
            <p className="mt-2 text-gray-400">Your trusted partner in responsible metal recycling.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/services" className="hover:text-royal-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/materials" className="hover:text-royal-blue-400">
                  Materials Accepted
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-royal-blue-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-2 text-gray-400">
              123 Industrial Park Rd
              <br />
              Tyler, TX 75701
            </p>
            <p className="mt-2 text-gray-400">(903) 592-6299</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2" aria-label="Social Media">
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="K&L Recycling on Facebook">
                <FacebookIcon className="h-6 w-6 hover:text-royal-blue-400" />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="K&L Recycling on LinkedIn">
                <LinkedInIcon className="h-6 w-6 hover:text-royal-blue-400" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} K&L Recycling. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
