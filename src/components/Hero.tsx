// Key Features

// Hero Section Component
// Purpose: Capture attention immediately, state core value, and drive app downloads

"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const Hero = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        {t.hero.videoError}
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Text Content */}
        <div
          className={`md:w-1/2 text-center ${
            isRTL ? "md:text-right" : "md:text-left"
          }`}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {t.hero.headline}
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-200 mb-8 max-w-2xl ${
              isRTL ? "mx-auto md:mx-0" : "mx-auto md:mx-0"
            }`}
          >
            {t.hero.subheadline}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 ${
              isRTL
                ? "justify-center md:justify-start"
                : "justify-center md:justify-start"
            }`}
          >
            <a
              href="#download"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t.hero.downloadApp}
            </a>
            <a
              href="#join-driver"
              className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t.hero.joinDriver}
            </a>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative">
            <img
              src="/images/phone-mockup.png"
              alt={t.hero.phoneAlt}
              className="w-[280px] md:w-[320px] lg:w-[380px] drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -inset-4 bg-yellow-500 bg-opacity-20 rounded-3xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
