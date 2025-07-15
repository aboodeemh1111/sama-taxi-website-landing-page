"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, isRTL } = useLanguage();
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center min-w-0">
            <img
              src="/logo.png"
              alt={t.navbar.logoAlt}
              className="h-8 sm:h-10 w-auto flex-shrink-0"
            />
            <span
              className={`${
                isRTL ? "mr-2" : "ml-2"
              } text-lg sm:text-xl font-bold text-gray-900 truncate`}
            >
              سما<span className="text-yellow-500">تاكسي</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div
              className={`flex items-center space-x-6 xl:space-x-8 ${
                isRTL ? "space-x-reverse" : ""
              }`}
            >
              <a
                href="/"
                className="text-gray-900 hover:text-yellow-500 px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200"
              >
                {t.navbar.home}
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200"
              >
                {t.navbar.about}
              </a>
              <a
                href="#download"
                className="text-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200"
              >
                {t.navbar.downloadApp}
              </a>
              <a
                href="#join-driver"
                className="text-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200"
              >
                {t.navbar.joinDriver}
              </a>
            </div>
          </div>

          {/* Language Switcher & CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-yellow-500 transition-colors duration-200"
            >
              <span className={`${isRTL ? "ml-1" : "mr-1"}`}>🌐</span>
              {language === "ar" ? "English" : "العربية"}
            </button>

            {/* CTA Button */}
            <a
              href="#download"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 xl:px-6 py-2 rounded-full text-sm xl:text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              {t.navbar.downloadApp}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-label={t.navbar.toggleMenu}
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-3 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
          <a
            href="/"
            className="text-gray-900 hover:text-yellow-500 hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.navbar.home}
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-yellow-500 hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.navbar.about}
          </a>
          <a
            href="#download"
            className="text-gray-700 hover:text-yellow-500 hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.navbar.downloadApp}
          </a>
          <a
            href="#join-driver"
            className="text-gray-700 hover:text-yellow-500 hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.navbar.joinDriver}
          </a>

          {/* Mobile Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="w-full text-left text-gray-700 hover:text-yellow-500 hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200"
          >
            🌐 {language === "ar" ? "English" : "العربية"}
          </button>

          {/* Mobile CTA Button */}
          <div className="pt-4 pb-2 border-t border-gray-200 mt-4">
            <a
              href="#download"
              className="bg-yellow-500 hover:bg-yellow-600 text-white block mx-3 px-6 py-3 rounded-full text-base font-semibold text-center transition-colors duration-200 shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.navbar.downloadApp}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
