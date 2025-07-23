"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t } = useTranslation();
  const { language, setLanguage, isRTL } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "how-it-works",
        "female-drivers",
        "download",
        "join-driver-team",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center min-w-0">
            <button onClick={() => scrollToSection("home")}>
              <img
                src="/images~/Sama Taxi-04.svg"
                alt={t.navbar.logoAlt}
                className="h-10 sm:h-12 w-auto flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div
              className={`flex items-center space-x-6 xl:space-x-8 ${
                isRTL ? "space-x-reverse" : ""
              }`}
            >
              <button
                onClick={() => scrollToSection("home")}
                className={`nav-link px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 ${
                  activeSection === "home"
                    ? "active text-yellow-500"
                    : "text-gray-900 hover:text-yellow-500"
                }`}
              >
                {t.navbar.home}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`nav-link px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 ${
                  activeSection === "about"
                    ? "active text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                {t.navbar.about}
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className={`nav-link px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 ${
                  activeSection === "how-it-works"
                    ? "active text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                {t.navbar.howItWorks}
              </button>
              <button
                onClick={() => scrollToSection("female-drivers")}
                className={`nav-link px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 ${
                  activeSection === "female-drivers"
                    ? "active text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                {t.navbar.femaleDrivers}
              </button>
              <button
                onClick={() => scrollToSection("join-driver-team")}
                className={`nav-link px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 ${
                  activeSection === "join-driver-team"
                    ? "active text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                {t.navbar.joinDriver}
              </button>
              <button
                onClick={() => scrollToSection("download")}
                className={`nav-link px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 ${
                  activeSection === "download"
                    ? "active text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                {t.navbar.downloadApp}
              </button>
            </div>
          </div>

          {/* Language Toggle and Download Button */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-yellow-500 hover:bg-gray-100 transition-colors duration-200"
              title={t.navbar.languageToggle}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span className="text-xs font-bold uppercase">
                {language === "ar" ? "EN" : "ع"}
              </span>
            </button>

            <button
              onClick={() => scrollToSection("download")}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 transform hover:scale-105"
            >
              {t.navbar.downloadApp}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-yellow-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">{t.navbar.toggleMenu}</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
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
              ) : (
                <svg
                  className="block h-6 w-6"
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <button
            onClick={() => scrollToSection("home")}
            className={`block px-3 py-2 rounded-md text-base font-medium w-full ${
              isRTL ? "text-right" : "text-left"
            } transition-colors duration-200 ${
              activeSection === "home"
                ? "text-yellow-500 bg-yellow-50"
                : "text-gray-900 hover:text-yellow-500 hover:bg-gray-50"
            }`}
          >
            {t.navbar.home}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`block px-3 py-2 rounded-md text-base font-medium w-full ${
              isRTL ? "text-right" : "text-left"
            } transition-colors duration-200 ${
              activeSection === "about"
                ? "text-yellow-500 bg-yellow-50"
                : "text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
            }`}
          >
            {t.navbar.about}
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className={`block px-3 py-2 rounded-md text-base font-medium w-full ${
              isRTL ? "text-right" : "text-left"
            } transition-colors duration-200 ${
              activeSection === "how-it-works"
                ? "text-yellow-500 bg-yellow-50"
                : "text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
            }`}
          >
            {t.navbar.howItWorks}
          </button>
          <button
            onClick={() => scrollToSection("female-drivers")}
            className={`block px-3 py-2 rounded-md text-base font-medium w-full ${
              isRTL ? "text-right" : "text-left"
            } transition-colors duration-200 ${
              activeSection === "female-drivers"
                ? "text-yellow-500 bg-yellow-50"
                : "text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
            }`}
          >
            {t.navbar.femaleDrivers}
          </button>
          <button
            onClick={() => scrollToSection("join-driver-team")}
            className={`block px-3 py-2 rounded-md text-base font-medium w-full ${
              isRTL ? "text-right" : "text-left"
            } transition-colors duration-200 ${
              activeSection === "join-driver-team"
                ? "text-yellow-500 bg-yellow-50"
                : "text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
            }`}
          >
            {t.navbar.joinDriver}
          </button>
          <button
            onClick={() => scrollToSection("download")}
            className={`block px-3 py-2 rounded-md text-base font-medium w-full ${
              isRTL ? "text-right" : "text-left"
            } transition-colors duration-200 ${
              activeSection === "download"
                ? "text-yellow-500 bg-yellow-50"
                : "text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
            }`}
          >
            {t.navbar.downloadApp}
          </button>

          {/* Mobile Language Toggle */}
          <div className="px-3 py-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-yellow-500 hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span>{t.navbar.languageToggle}</span>
              <span className="text-xs font-bold uppercase ml-auto">
                {language === "ar" ? "EN" : "ع"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
