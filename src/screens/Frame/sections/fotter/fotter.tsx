import React from 'react';
import { Mail, Phone, Instagram, Facebook, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 w-full shadow-lg">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
        `}
      </style>
      <div className="max-w-6xl mx-auto animate-fadeIn">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">The Graphology Research Institute</h3>
            <p className="text-sm mb-4">Empowering lives through graphology since 2020.</p>
            <div className="flex items-center justify-center sm:justify-start mt-4 space-x-4">
              <a
                href="https://www.facebook.com/TheGraphologyResearchInstitute"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors duration-300 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors duration-300 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors duration-300 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start justify-center sm:justify-start">
                <Mail size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>tgri.india@gmail.com</span>
              </div>
              <div className="flex items-start justify-center sm:justify-start">
                <Phone size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>+91 9004510103</span>
              </div>
              <div className="flex items-start justify-center sm:justify-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span className="max-w-[250px] sm:max-w-none">
                  LJ Training Centre, 1st Floor, Ladiwale Joshi Compound, N C. Kelkar Marg, Mumbai, Maharashtra 400028
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          <p>© {currentYear} The Graphology Research Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;