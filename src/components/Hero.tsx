"use client";

import { useTranslation } from "@/hooks/useTranslation";
import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";

const iphone16 = "/images~/IPhone16.png";

const Hero = () => {
  const { t, isRTL } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  // Smooth scroll function similar to Navbar
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
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {
        setShowFallback(true);
      });
    };

    const handleCanPlay = () => {
      setVideoLoaded(true);
      video.play().catch((error) => {
        console.log("Video autoplay failed:", error);
        setShowFallback(true);
      });
    };

    const handleError = () => {
      setShowFallback(true);
    };

    const handleLoadedData = () => {
      setVideoLoaded(true);
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);
    video.addEventListener("loadeddata", handleLoadedData);

    // Fallback timeout
    const fallbackTimer = setTimeout(() => {
      if (!videoLoaded) {
        setShowFallback(true);
      }
    }, 5000);

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
      video.removeEventListener("loadeddata", handleLoadedData);
      clearTimeout(fallbackTimer);
    };
  }, [videoLoaded]);

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label={t.hero.headline}
    >
      <NextImage
        src="/images~/hero-image.png"
        alt="Hero-Image"
        className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-1000 opacity-100"
        width={1920}
        height={1080}
        priority
      />

      {/* Fallback gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 z-0"
        aria-hidden="true"
      />

      {/* Glass Overlay */}
      <div
        className="absolute inset-0 bg-white/20 backdrop-blur-sm z-20 border-white/20"
        aria-hidden="true"
      ></div>

      <div
        className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-[2px] z-20"
        aria-hidden="true"
      ></div>

      {/* Hero Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Text Content */}
        <div
          className={`md:w-1/2 text-center ${
            isRTL ? "md:text-right" : "md:text-left"
          }`}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            {t.hero.headline}
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-100 mb-8 max-w-2xl drop-shadow-md ${
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
            <button
              onClick={() => scrollToSection("download")}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50"
              aria-label={`${t.hero.downloadApp} - ${t.hero.subheadline}`}
            >
              {t.hero.downloadApp}
            </button>
            <button
              onClick={() => scrollToSection("join-driver-team")}
              className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
              aria-label={`${t.hero.joinDriver} - انضم إلى فريق السائقين`}
            >
              {t.hero.joinDriver}
            </button>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div
            className="relative"
            role="img"
            aria-label="تطبيق سما تاكسي على الهاتف المحمول"
          >
            <NextImage
              src={iphone16}
              alt={t.hero.phoneAlt}
              className="w-[280px] md:w-[420px] lg:w-[480px] drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              width={320}
              height={640}
              priority
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 420px, 480px"
              quality={90}
            />
            <div
              className="absolute -inset-4 bg-yellow-500 bg-opacity-20 rounded-3xl blur-xl -z-10"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce p-2 rounded-full hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label="انتقل إلى القسم التالي"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            className="mx-auto text-white"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="img"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
