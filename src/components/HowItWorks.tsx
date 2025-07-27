"use client";

import NextImage from "next/image";
import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const HowItWorks = () => {
  const { t, isRTL } = useTranslation();
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const steps = [
    {
      title: t.howItWorks.steps[0].title,
      description: t.howItWorks.steps[0].description,
      detailedDescription: t.howItWorks.steps[0].detailedDescription,
      img: "/images~/custommer/اختيار_نوع_الخدمه.png",
      color: "from-blue-50 to-blue-100",
      accent: "text-blue-600",
    },
    {
      title: t.howItWorks.steps[1].title,
      description: t.howItWorks.steps[1].description,
      detailedDescription: t.howItWorks.steps[1].detailedDescription,
      img: "/images~/custommer/التحديد_على_الخريطهط.png",
      color: "from-green-50 to-green-100",
      accent: "text-green-600",
    },
    {
      title: t.howItWorks.steps[2].title,
      description: t.howItWorks.steps[2].description,
      detailedDescription: t.howItWorks.steps[2].detailedDescription,
      img: "/images~/custommer/الرحله_قيد_التقدم.png",
      color: "from-yellow-50 to-yellow-100",
      accent: "text-yellow-600",
    },
    {
      title: t.howItWorks.steps[3].title,
      description: t.howItWorks.steps[3].description,
      detailedDescription: t.howItWorks.steps[3].detailedDescription,
      img: "/images~/custommer/الايصال.png",
      color: "from-purple-50 to-purple-100",
      accent: "text-purple-600",
    },
    {
      title: t.howItWorks.steps[4].title,
      description: t.howItWorks.steps[4].description,
      detailedDescription: t.howItWorks.steps[4].detailedDescription,
      img: "/images~/custommer/حفظ_الاماكن_المفضله_لديك.png",
      color: "from-orange-50 to-orange-100",
      accent: "text-orange-600",
    },
  ];

  // Close modal with ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeCard !== null) {
        setActiveCard(null);
      }
    };

    if (activeCard !== null) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [activeCard]);

  const handleCardClick = (index: number) => {
    setActiveCard(index);
  };

  const handleModalClose = () => {
    setActiveCard(null);
  };

  const handlePreviousCard = () => {
    if (activeCard !== null) {
      setActiveCard(activeCard > 0 ? activeCard - 1 : steps.length - 1);
    }
  };

  const handleNextCard = () => {
    if (activeCard !== null) {
      setActiveCard(activeCard < steps.length - 1 ? activeCard + 1 : 0);
    }
  };

  const getCardScale = (index: number) => {
    if (hoveredCard === index && activeCard === null) {
      return "scale-105"; // Hover state
    } else {
      return "scale-100"; // Normal state
    }
  };

  return (
    <>
      <section
        id="how-it-works"
        className="py-20 bg-gradient-to-br from-gray-50 to-white w-full"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.howItWorks.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.howItWorks.subtitle}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              {t.howItWorks.clickToEnlarge}
            </p>
          </div>

          {/* Steps Grid - Desktop - First Row (3 columns) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-8">
            {steps.slice(0, 3).map((step, idx) => (
              <div key={idx} className="relative">
                {/* Step Card */}
                <div
                  className={`
                    group bg-white rounded-2xl p-6 shadow-lg cursor-pointer
                    transition-all duration-300 ease-out transform-gpu
                    ${getCardScale(idx)}
                    hover:shadow-2xl hover:-translate-y-3
                  `}
                  onClick={() => handleCardClick(idx)}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {idx + 1}
                  </div>

                  {/* Phone Screenshot */}
                  <div
                    className={`relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br ${step.color} group-hover:shadow-lg transition-all duration-300`}
                  >
                    <NextImage
                      src={step.img}
                      alt={step.title}
                      width={250}
                      height={500}
                      className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Click overlay hint */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-3">
                        <svg
                          className="w-6 h-6 text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <h3 className={`text-lg font-bold mb-2 ${step.accent}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Click hint */}
                  <div className="mt-3 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    👆 {t.common.clickToEnlarge}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Steps Grid - Desktop - Second Row (2 columns) */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {steps.slice(3).map((step, idx) => (
              <div key={idx + 3} className="relative">
                {/* Step Card */}
                <div
                  className={`
                    group bg-white rounded-2xl p-6 shadow-lg cursor-pointer
                    transition-all duration-300 ease-out transform-gpu
                    ${getCardScale(idx + 3)}
                    hover:shadow-2xl hover:-translate-y-3
                  `}
                  onClick={() => handleCardClick(idx + 3)}
                  onMouseEnter={() => setHoveredCard(idx + 3)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {idx + 4}
                  </div>

                  {/* Phone Screenshot */}
                  <div
                    className={`relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br ${step.color} group-hover:shadow-lg transition-all duration-300`}
                  >
                    <NextImage
                      src={step.img}
                      alt={step.title}
                      width={250}
                      height={500}
                      className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Click overlay hint */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-3">
                        <svg
                          className="w-6 h-6 text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <h3 className={`text-lg font-bold mb-2 ${step.accent}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Click hint */}
                  <div className="mt-3 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    👆 {t.common.clickToEnlarge}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Steps List - Mobile & Tablet */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`flex items-start ${
                  isRTL ? "space-x-6 space-x-reverse" : "space-x-6"
                }`}
              >
                {/* Step Number */}
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {idx + 1}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div
                    className={`
                      bg-white rounded-2xl p-6 shadow-lg cursor-pointer
                      transition-all duration-300 ease-out transform-gpu
                      ${getCardScale(idx)}
                      hover:shadow-2xl
                    `}
                    onClick={() => handleCardClick(idx)}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      {/* Text Content */}
                      <div className={`${isRTL ? "md:order-2" : "md:order-1"}`}>
                        <h3 className={`text-xl font-bold mb-3 ${step.accent}`}>
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          {step.description}
                        </p>
                        <p className="text-xs text-gray-400">
                          👆 {t.common.clickToEnlarge}
                        </p>
                      </div>

                      {/* Phone Screenshot */}
                      <div className={`${isRTL ? "md:order-1" : "md:order-2"}`}>
                        <div
                          className={`
                          relative overflow-hidden rounded-xl bg-gradient-to-br ${step.color} p-4
                          hover:shadow-lg transition-all duration-300
                        `}
                        >
                          <NextImage
                            src={step.img}
                            alt={step.title}
                            width={200}
                            height={400}
                            className="w-full max-w-[200px] mx-auto h-auto object-contain hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center bg-yellow-50 border border-yellow-200 rounded-full px-8 py-4 mb-6">
              <svg
                className={`w-6 h-6 text-yellow-500 ${isRTL ? "ml-3" : "mr-3"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-yellow-700 font-semibold text-lg">
                {t.howItWorks.ctaText}
              </span>
            </div>

            <div>
              <a
                href="#download"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {t.howItWorks.downloadFree}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Popup Overlay */}
      {activeCard !== null && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300"
            onClick={handleModalClose}
          />

          {/* Modal Content - STANDARDIZED DIMENSIONS */}
          <div className="relative z-10 w-full max-w-5xl h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={handleModalClose}
              className={`absolute top-4 ${
                isRTL ? "right-4" : "left-4"
              } z-20 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePreviousCard}
              className={`absolute top-1/2 ${
                isRTL ? "right-4" : "left-4"
              } transform -translate-y-1/2 z-20 w-12 h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isRTL ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
                />
              </svg>
            </button>

            <button
              onClick={handleNextCard}
              className={`absolute top-1/2 ${
                isRTL ? "left-4" : "right-4"
              } transform -translate-y-1/2 z-20 w-12 h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                />
              </svg>
            </button>

            {/* Modal Body - FIXED HEIGHT AND LAYOUT */}
            <div
              className={`flex ${
                isRTL ? "flex-row-reverse" : "flex-row"
              } h-full`}
            >
              {/* Image Section - STANDARDIZED */}
              <div className="w-1/2 h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
                <div className="relative w-full h-full flex items-center justify-center">
                  <NextImage
                    src={steps[activeCard].img}
                    alt={steps[activeCard].title}
                    width={350}
                    height={700}
                    className="max-w-[350px] max-h-[70vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Content Section - STANDARDIZED */}
              <div
                className={`w-1/2 h-full p-8 overflow-y-auto ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {/* Step Number Badge */}
                <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <span className={isRTL ? "ml-2" : "mr-2"}>
                    {t.joinDriverTeam.modal.featureLabel}
                  </span>
                  <span>{activeCard + 1}</span>
                  <span className={isRTL ? "mr-2" : "ml-2"}>
                    {t.common.next} {steps.length}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className={`text-3xl font-bold mb-4 ${steps[activeCard].accent}`}
                >
                  {steps[activeCard].title}
                </h2>

                {/* Description */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {steps[activeCard].description}
                </p>

                {/* Detailed Description */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {t.joinDriverTeam.modal.moreDetails}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {steps[activeCard].detailedDescription}
                  </p>
                </div>

                {/* Navigation Dots */}
                <div
                  className={`flex justify-center ${
                    isRTL ? "space-x-2 space-x-reverse" : "space-x-2"
                  } mb-6`}
                >
                  {steps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCard(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        idx === activeCard
                          ? "bg-yellow-500 scale-125"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={() => handleNextCard()}
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
                  >
                    {activeCard < steps.length - 1
                      ? t.joinDriverTeam.modal.nextFeature
                      : t.joinDriverTeam.modal.backToStart}
                  </button>
                  <button
                    onClick={handleModalClose}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-all duration-200"
                  >
                    {t.joinDriverTeam.modal.close}
                  </button>
                </div>

                {/* Keyboard Hint */}
                <p className="text-center text-sm text-gray-400 mt-4">
                  {t.joinDriverTeam.modal.useArrowsHint}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HowItWorks;
