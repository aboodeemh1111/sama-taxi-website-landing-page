"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, language, setLanguage, isRTL } = useTranslation();

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

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, sectionId: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToSection(sectionId);
    }
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

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center min-w-0">
            <button
              onClick={() => scrollToSection("home")}
              onKeyDown={(e) => handleKeyDown(e, "home")}
              className="focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 rounded-lg"
              aria-label={`${t.navbar.logoAlt} - العودة إلى الصفحة الرئيسية`}
            >
              <Image
                src="/images~/Sama Taxi-04.svg"
                alt={t.navbar.logoAlt}
                width={48}
                height={48}
                className="h-10 sm:h-12 w-auto flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                priority
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div
              className={`flex items-center space-x-6 xl:space-x-8 ${
                isRTL ? "space-x-reverse" : ""
              }`}
              role="menubar"
            >
              <button
                onClick={() => scrollToSection("home")}
                onKeyDown={(e) => handleKeyDown(e, "home")}
                className={`nav-link px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ${
                  activeSection === "home"
                    ? "active text-yellow-500"
                    : "text-gray-900 hover:text-yellow-500"
                }`}
                role="menuitem"
                aria-current={activeSection === "home" ? "page" : undefined}
              >
                {t.navbar.home}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                onKeyDown={(e) => handleKeyDown(e, "about")}
                className={`nav-link px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ${
                  activeSection === "about"
                    ? "active text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
                role="menuitem"
                aria-current={activeSection === "about" ? "page" : undefined}
              >
                {t.navbar.about}
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                onKeyDown={(e) => handleKeyDown(e, "how-it-works")}
                className={`nav-link px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ${
                  activeSection === "how-it-works"
                    ? "active text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
                role="menuitem"
                aria-current={
                  activeSection === "how-it-works" ? "page" : undefined
                }
              >
                {t.navbar.howItWorks}
              </button>
              <button
                onClick={() => scrollToSection("female-drivers")}
                onKeyDown={(e) => handleKeyDown(e, "female-drivers")}
                className={`nav-link px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ${
                  activeSection === "female-drivers"
                    ? "active text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
                role="menuitem"
                aria-current={
                  activeSection === "female-drivers" ? "page" : undefined
                }
              >
                {t.navbar.femaleDrivers}
              </button>
              <button
                onClick={() => scrollToSection("join-driver-team")}
                onKeyDown={(e) => handleKeyDown(e, "join-driver-team")}
                className={`nav-link px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ${
                  activeSection === "join-driver-team"
                    ? "active text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
                role="menuitem"
                aria-current={
                  activeSection === "join-driver-team" ? "page" : undefined
                }
              >
                {t.navbar.joinDriver}
              </button>
              <button
                onClick={() => scrollToSection("download")}
                onKeyDown={(e) => handleKeyDown(e, "download")}
                className={`nav-link px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ${
                  activeSection === "download"
                    ? "active text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
                role="menuitem"
                aria-current={activeSection === "download" ? "page" : undefined}
              >
                {t.navbar.downloadApp}
              </button>
            </div>
          </div>

          {/* Language Toggle and Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`px-3 py-2 text-sm font-medium text-gray-700 hover:text-yellow-500 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ${
                isRTL ? "ml-2" : "mr-2"
              }`}
              aria-label={`${t.navbar.languageToggle}: ${
                language === "ar" ? "العربية" : "English"
              }`}
            >
              {language === "ar" ? "EN" : "العربية"}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={t.navbar.toggleMenu}
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
                    strokeWidth={2}
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
                    strokeWidth={2}
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
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="mobile-menu-button"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <button
            onClick={() => scrollToSection("home")}
            onKeyDown={(e) => handleKeyDown(e, "home")}
            className={`block px-3 py-2 rounded-md text-base font-medium w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ${
              isRTL ? "text-right" : "text-left"
            } transition-colors duration-200 ${
              activeSection === "home"
                ? "text-yellow-500 bg-yellow-50"
                : "text-gray-900 hover:text-yellow-500 hover:bg-gray-50"
            }`}
            role="menuitem"
            aria-current={activeSection === "home" ? "page" : undefined}
          >
            {t.navbar.home}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            onKeyDown={(e) => handleKeyDown(e, "about")}
            className={`block px-3 py-2 rounded-md text-base font-medium w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ${
              isRTL ? "text-right" : "text-left"
            } transition-colors duration-200 ${
              activeSection === "about"
                ? "text-yellow-500 bg-yellow-50"
                : "text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
            }`}
            role="menuitem"
            aria-current={activeSection === "about" ? "page" : undefined}
          >
            {t.navbar.about}
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            onKeyDown={(e) => handleKeyDown(e, "how-it-works")}
            className={`block px-3 py-2 rounded-md text-base font-medium w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ${
              isRTL ? "text-right" : "text-left"
            } transition-colors duration-200 ${
              activeSection === "how-it-works"
                ? "text-yellow-500 bg-yellow-50"
                : "text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
            }`}
            role="menuitem"
            aria-current={activeSection === "how-it-works" ? "page" : undefined}
          >
            {t.navbar.howItWorks}
          </button>
          <button
            onClick={() => scrollToSection("female-drivers")}
            onKeyDown={(e) => handleKeyDown(e, "female-drivers")}
            className={`block px-3 py-2 rounded-md text-base font-medium w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ${
              isRTL ? "text-right" : "text-left"
            } transition-colors duration-200 ${
              activeSection === "female-drivers"
                ? "text-yellow-500 bg-yellow-50"
                : "text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
            }`}
            role="menuitem"
            aria-current={
              activeSection === "female-drivers" ? "page" : undefined
            }
          >
            {t.navbar.femaleDrivers}
          </button>
          <button
            onClick={() => scrollToSection("join-driver-team")}
            onKeyDown={(e) => handleKeyDown(e, "join-driver-team")}
            className={`block px-3 py-2 rounded-md text-base font-medium w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ${
              isRTL ? "text-right" : "text-left"
            } transition-colors duration-200 ${
              activeSection === "join-driver-team"
                ? "text-yellow-500 bg-yellow-50"
                : "text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
            }`}
            role="menuitem"
            aria-current={
              activeSection === "join-driver-team" ? "page" : undefined
            }
          >
            {t.navbar.joinDriver}
          </button>
          <button
            onClick={() => scrollToSection("download")}
            onKeyDown={(e) => handleKeyDown(e, "download")}
            className={`block px-3 py-2 rounded-md text-base font-medium w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ${
              isRTL ? "text-right" : "text-left"
            } transition-colors duration-200 ${
              activeSection === "download"
                ? "text-yellow-500 bg-yellow-50"
                : "text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
            }`}
            role="menuitem"
            aria-current={activeSection === "download" ? "page" : undefined}
          >
            {t.navbar.downloadApp}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
