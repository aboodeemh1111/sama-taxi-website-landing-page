"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "how-it-works",
        "female-drivers",
        "join-driver",
        "download",
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
            <img
              src="/images~/Sama Taxi-04.svg"
              alt="شعار سما تاكسي"
              className="h-10 sm:h-12 w-auto flex-shrink-0"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6 xl:space-x-8 space-x-reverse">
              <button
                onClick={() => scrollToSection("home")}
                className={`nav-link px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 ${
                  activeSection === "home"
                    ? "active text-yellow-500"
                    : "text-gray-900 hover:text-yellow-500"
                }`}
              >
                الرئيسية
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`nav-link px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 ${
                  activeSection === "about"
                    ? "active text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                عن التطبيق
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className={`nav-link px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 ${
                  activeSection === "how-it-works"
                    ? "active text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                كيف يعمل
              </button>
              <button
                onClick={() => scrollToSection("female-drivers")}
                className={`nav-link px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 ${
                  activeSection === "female-drivers"
                    ? "active text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                السائقات
              </button>
              <button
                onClick={() => scrollToSection("join-driver")}
                className={`nav-link px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 ${
                  activeSection === "join-driver"
                    ? "active text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                انضم كسائق
              </button>
              <button
                onClick={() => scrollToSection("download")}
                className={`nav-link px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-colors duration-200 ${
                  activeSection === "download"
                    ? "active text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                حمل التطبيق
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("download")}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              حمل التطبيق
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-yellow-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">فتح قائمة التنقل</span>
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
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <button
            onClick={() => scrollToSection("home")}
            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-right transition-colors duration-200 ${
              activeSection === "home"
                ? "text-yellow-500 bg-yellow-50"
                : "text-gray-900 hover:text-yellow-500 hover:bg-gray-50"
            }`}
          >
            الرئيسية
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-right transition-colors duration-200 ${
              activeSection === "about"
                ? "text-yellow-500 bg-yellow-50"
                : "text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
            }`}
          >
            عن التطبيق
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-right transition-colors duration-200 ${
              activeSection === "how-it-works"
                ? "text-yellow-500 bg-yellow-50"
                : "text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
            }`}
          >
            كيف يعمل
          </button>
          <button
            onClick={() => scrollToSection("female-drivers")}
            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-right transition-colors duration-200 ${
              activeSection === "female-drivers"
                ? "text-yellow-500 bg-yellow-50"
                : "text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
            }`}
          >
            السائقات
          </button>
          <button
            onClick={() => scrollToSection("join-driver")}
            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-right transition-colors duration-200 ${
              activeSection === "join-driver"
                ? "text-yellow-500 bg-yellow-50"
                : "text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
            }`}
          >
            انضم كسائق
          </button>
          <button
            onClick={() => scrollToSection("download")}
            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-right transition-colors duration-200 ${
              activeSection === "download"
                ? "text-yellow-500 bg-yellow-50"
                : "text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
            }`}
          >
            حمل التطبيق
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
