"use client";

import { useTranslation } from "@/hooks/useTranslation";
import NextImage from "next/image";
import { useEffect, useRef } from "react";

const iphone16 = "/images~/IPhone16.png";

const Hero = () => {
  const { t, isRTL } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      video.currentTime = 0;
      video.play();
    };

    const handleCanPlay = () => {
      video.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload"
        suppressHydrationWarning
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        {t.hero.videoError}
      </video>

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-10 border-white/20"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-[2px] z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between w-full">
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
            <a
              href="#download"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t.hero.downloadApp}
            </a>
            <a
              href="#join-driver"
              className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t.hero.joinDriver}
            </a>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative">
            <NextImage
              src={iphone16}
              alt="iphone16"
              className="w-[280px] md:w-[420px] lg:w-[480px] drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              width={320}
              height={640}
            />
            <div className="absolute -inset-4 bg-yellow-500 bg-opacity-20 rounded-3xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            className="mx-auto"
            viewBox="0 0 24 24"
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
