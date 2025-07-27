"use client";

import Link from "next/link";
import NextImage from "next/image";
import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const JoinDriverTeam = () => {
  const { t, isRTL } = useTranslation();
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const driverFeatures = [
    {
      title: t.joinDriverTeam.features.tripDetails.title,
      description: t.joinDriverTeam.features.tripDetails.description,
      detailedDescription:
        t.joinDriverTeam.features.tripDetails.detailedDescription,
      img: "/images~/تفاصيل_الطلب_قبل_القبول.png",
      color: "from-yellow-50 to-yellow-100",
      accent: "text-yellow-600",
    },
    {
      title: t.joinDriverTeam.features.serviceControl.title,
      description: t.joinDriverTeam.features.serviceControl.description,
      detailedDescription:
        t.joinDriverTeam.features.serviceControl.detailedDescription,
      img: "/images~/التحكم_بالقنوات.png",
      color: "from-blue-50 to-blue-100",
      accent: "text-blue-600",
    },
    {
      title: t.joinDriverTeam.features.recentTrips.title,
      description: t.joinDriverTeam.features.recentTrips.description,
      detailedDescription:
        t.joinDriverTeam.features.recentTrips.detailedDescription,
      img: "/images~/اخر_الرحلات.png",
      color: "from-green-50 to-green-100",
      accent: "text-green-600",
    },
    {
      title: t.joinDriverTeam.features.paymentHistory.title,
      description: t.joinDriverTeam.features.paymentHistory.description,
      detailedDescription:
        t.joinDriverTeam.features.paymentHistory.detailedDescription,
      img: "/images~/سجل_المدفوعات.png",
      color: "from-purple-50 to-purple-100",
      accent: "text-purple-600",
    },
    {
      title: t.joinDriverTeam.features.mainApp.title,
      description: t.joinDriverTeam.features.mainApp.description,
      detailedDescription:
        t.joinDriverTeam.features.mainApp.detailedDescription,
      img: "/images~/سما_يوصلك_و_يوصلك.png",
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
      setActiveCard(
        activeCard > 0 ? activeCard - 1 : driverFeatures.length - 1
      );
    }
  };

  const handleNextCard = () => {
    if (activeCard !== null) {
      setActiveCard(
        activeCard < driverFeatures.length - 1 ? activeCard + 1 : 0
      );
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
      <section className="relative py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header Content */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.joinDriverTeam.title}
            </h2>
            <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
              {t.joinDriverTeam.description1}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.joinDriverTeam.description2}
            </p>
          </div>

          {/* Captain Image */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              <NextImage
                src="/images~/Sama Captains.png"
                alt={t.joinDriverTeam.title}
                width={400}
                height={300}
                className="drop-shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-3xl"
              />
              <div className="absolute -inset-4 bg-yellow-500 bg-opacity-20 rounded-3xl blur-xl -z-10"></div>
            </div>
          </div>

          {/* Driver App Showcase Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.joinDriverTeam.appShowcaseTitle}
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
                {t.joinDriverTeam.appShowcaseSubtitle}
              </p>
              <p className="text-sm text-gray-500">
                {t.joinDriverTeam.modal.clickToEnlarge}
              </p>
            </div>

            {/* Interactive Features Grid - Desktop */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
              {driverFeatures.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="relative">
                  {/* Feature Card */}
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
                    {/* Feature Number */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {idx + 1}
                    </div>

                    {/* Phone Screenshot */}
                    <div
                      className={`relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br ${feature.color} group-hover:shadow-lg transition-all duration-300`}
                    >
                      <NextImage
                        src={feature.img}
                        alt={feature.title}
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

                    {/* Feature Content */}
                    <h4 className={`text-lg font-bold mb-2 ${feature.accent}`}>
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Click hint */}
                    <div className="mt-3 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      👆 {t.joinDriverTeam.modal.clickToEnlarge}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - Desktop */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              {driverFeatures.slice(3).map((feature, idx) => (
                <div key={idx + 3} className="relative">
                  {/* Feature Card */}
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
                    {/* Feature Number */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {idx + 4}
                    </div>

                    {/* Phone Screenshot */}
                    <div
                      className={`relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br ${feature.color} group-hover:shadow-lg transition-all duration-300`}
                    >
                      <NextImage
                        src={feature.img}
                        alt={feature.title}
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

                    {/* Feature Content */}
                    <h4 className={`text-lg font-bold mb-2 ${feature.accent}`}>
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Click hint */}
                    <div className="mt-3 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      👆 {t.joinDriverTeam.modal.clickToEnlarge}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features List - Mobile & Tablet */}
            <div className="lg:hidden space-y-8 mb-12">
              {driverFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-6 space-x-reverse"
                >
                  {/* Feature Number */}
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
                        <div
                          className={`${isRTL ? "md:order-2" : "md:order-1"}`}
                        >
                          <h4
                            className={`text-xl font-bold mb-3 ${feature.accent}`}
                          >
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed mb-3">
                            {feature.description}
                          </p>
                          <p className="text-xs text-gray-400">
                            👆 {t.joinDriverTeam.modal.clickToEnlarge}
                          </p>
                        </div>

                        {/* Phone Screenshot */}
                        <div
                          className={`${isRTL ? "md:order-1" : "md:order-2"}`}
                        >
                          <div
                            className={`
                            relative overflow-hidden rounded-xl bg-gradient-to-br ${feature.color} p-4
                            hover:shadow-lg transition-all duration-300
                          `}
                          >
                            <NextImage
                              src={feature.img}
                              alt={feature.title}
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

            {/* Showcase CTA */}
            <div className="text-center">
              <div className="inline-flex items-center bg-yellow-50 border border-yellow-200 rounded-full px-6 py-3 mb-6">
                <svg
                  className="w-5 h-5 text-yellow-500 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-yellow-700 font-medium">
                  {t.joinDriverTeam.modal.freeeasy}
                </span>
              </div>
            </div>
          </div>

          {/* Download Buttons */}
          <div
            className={`flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 ${
              isRTL ? "space-x-reverse" : ""
            }`}
          >
            <Link
              href="https://apps.apple.com/us/app/sama-driver/id1605081599"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-3 transition-all duration-300 shadow-lg hover:shadow-xl">
                <NextImage
                  src="/images~/get_on_app_store.svg"
                  alt={t.joinDriverTeam.downloadIphone}
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                />
              </div>
            </Link>

            <Link
              href="https://play.google.com/store/apps/details?id=com.multibrains.taxi.driver.samtaxisaudi&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-3 transition-all duration-300 shadow-lg hover:shadow-xl">
                <NextImage
                  src="/images~/get_on_google_play.svg"
                  alt={t.joinDriverTeam.downloadAndroid}
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                />
              </div>
            </Link>
          </div>

          {/* Learn More Button */}
          <div className="text-center">
            <Link
              href="/driver-conditions"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t.joinDriverTeam.learnMore}
            </Link>
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
                    src={driverFeatures[activeCard].img}
                    alt={driverFeatures[activeCard].title}
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
                {/* Feature Number Badge */}
                <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <span className={isRTL ? "ml-2" : "mr-2"}>
                    {t.joinDriverTeam.modal.featureLabel}
                  </span>
                  <span>{activeCard + 1}</span>
                  <span className={isRTL ? "mr-2" : "ml-2"}>
                    من {driverFeatures.length}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className={`text-3xl font-bold mb-4 ${driverFeatures[activeCard].accent}`}
                >
                  {driverFeatures[activeCard].title}
                </h2>

                {/* Description */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {driverFeatures[activeCard].description}
                </p>

                {/* Detailed Description */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {t.joinDriverTeam.modal.moreDetails}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {driverFeatures[activeCard].detailedDescription}
                  </p>
                </div>

                {/* Benefits List */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                    {t.joinDriverTeam.modal.keyBenefits}
                  </h3>
                  <ul className="text-yellow-700 space-y-2">
                    {activeCard === 0 && (
                      <>
                        <li className="flex items-center">
                          <span className={isRTL ? "ml-2" : "mr-2"}>✓</span>{" "}
                          رؤية تفاصيل كاملة عن الرحلة
                        </li>
                        <li className="flex items-center">
                          <span className={isRTL ? "ml-2" : "mr-2"}>✓</span>{" "}
                          معرفة الأجرة المتوقعة مسبقاً
                        </li>
                        <li className="flex items-center">
                          <span className={isRTL ? "ml-2" : "mr-2"}>✓</span>{" "}
                          اتخاذ قرار مدروس
                        </li>
                      </>
                    )}
                    {activeCard === 1 && (
                      <>
                        <li className="flex items-center">
                          <span className={isRTL ? "ml-2" : "mr-2"}>✓</span>{" "}
                          مرونة في اختيار نوع الخدمة
                        </li>
                        <li className="flex items-center">
                          <span className={isRTL ? "ml-2" : "mr-2"}>✓</span>{" "}
                          تحكم كامل في أوقات العمل
                        </li>
                        <li className="flex items-center">
                          <span className={isRTL ? "ml-2" : "mr-2"}>✓</span>{" "}
                          تحسين الأرباح
                        </li>
                      </>
                    )}
                    {activeCard === 2 && (
                      <>
                        <li className="flex items-center">
                          <span className={isRTL ? "ml-2" : "mr-2"}>✓</span>{" "}
                          مراجعة سجل الرحلات السابقة
                        </li>
                        <li className="flex items-center">
                          <span className={isRTL ? "ml-2" : "mr-2"}>✓</span>{" "}
                          تتبع الأرباح اليومية
                        </li>
                        <li className="flex items-center">
                          <span className={isRTL ? "ml-2" : "mr-2"}>✓</span>{" "}
                          تحليل الأداء
                        </li>
                      </>
                    )}
                    {activeCard === 3 && (
                      <>
                        <li className="flex items-center">
                          <span className={isRTL ? "ml-2" : "mr-2"}>✓</span> سجل
                          مفصل للمدفوعات
                        </li>
                        <li className="flex items-center">
                          <span className={isRTL ? "ml-2" : "mr-2"}>✓</span>{" "}
                          إدارة مالية أفضل
                        </li>
                        <li className="flex items-center">
                          <span className={isRTL ? "ml-2" : "mr-2"}>✓</span>{" "}
                          تتبع الأرباح بدقة
                        </li>
                      </>
                    )}
                    {activeCard === 4 && (
                      <>
                        <li className="flex items-center">
                          <span className={isRTL ? "ml-2" : "mr-2"}>✓</span>{" "}
                          واجهة بسيطة وسهلة
                        </li>
                        <li className="flex items-center">
                          <span className={isRTL ? "ml-2" : "mr-2"}>✓</span>{" "}
                          سرعة في الاستخدام
                        </li>
                        <li className="flex items-center">
                          <span className={isRTL ? "ml-2" : "mr-2"}>✓</span>{" "}
                          تجربة مستخدم مثالية
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                {/* Navigation Dots */}
                <div
                  className={`flex justify-center ${
                    isRTL ? "space-x-2 space-x-reverse" : "space-x-2"
                  } mb-6`}
                >
                  {driverFeatures.map((_, idx) => (
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
                    {activeCard < driverFeatures.length - 1
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

export default JoinDriverTeam;
