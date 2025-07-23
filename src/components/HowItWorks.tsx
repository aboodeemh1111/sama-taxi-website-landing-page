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
      title: "اختر نوع الخدمة",
      description: "حدد نوع الرحلة التي تريدها من الخيارات المتاحة",
      detailedDescription:
        "من الشاشة الرئيسية، يمكنك اختيار نوع الخدمة المناسبة لك. تطبيق سما يوفر خيارات متعددة لتلبية احتياجاتك المختلفة من الرحلات.",
      img: "/images~/custommer/اختيار_نوع_الخدمه.png",
      color: "from-blue-50 to-blue-100",
      accent: "text-blue-600",
    },
    {
      title: "حدد موقعك ووجهتك",
      description: "اختر نقطة الانطلاق والوجهة على الخريطة بسهولة",
      detailedDescription:
        "استخدم الخريطة التفاعلية لتحديد موقعك الحالي ووجهتك بدقة. يمكنك البحث عن العناوين أو النقر مباشرة على الخريطة لاختيار المكان.",
      img: "/images~/custommer/التحديد_على_الخريطهط.png",
      color: "from-green-50 to-green-100",
      accent: "text-green-600",
    },
    {
      title: "تتبع رحلتك",
      description: "راقب موقع السائق وتقدم رحلتك في الوقت الفعلي",
      detailedDescription:
        "شاهد موقع السائق مباشرة على الخريطة، وتابع تقدم رحلتك خطوة بخطوة. ستحصل على تحديثات فورية حول وقت الوصول المتوقع.",
      img: "/images~/custommer/الرحله_قيد_التقدم.png",
      color: "from-yellow-50 to-yellow-100",
      accent: "text-yellow-600",
    },
    {
      title: "اكتمال الرحلة والدفع",
      description: "استلم إيصال رحلتك وادفع بالطريقة المناسبة لك",
      detailedDescription:
        "بعد انتهاء الرحلة، ستحصل على إيصال مفصل يحتوي على كافة تفاصيل الرحلة والتكلفة. يمكنك الدفع بالطريقة التي تفضلها.",
      img: "/images~/custommer/الايصال.png",
      color: "from-purple-50 to-purple-100",
      accent: "text-purple-600",
    },
    {
      title: "احفظ أماكنك المفضلة",
      description: "احفظ العناوين المهمة لسهولة الوصول إليها لاحقاً",
      detailedDescription:
        "أضف الأماكن التي تزورها بانتظام إلى قائمة المفضلة لسهولة الوصول السريع إليها في المرات القادمة. وفر وقتك واحجز بنقرة واحدة.",
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
              كيف يعمل تطبيق سما تاكسي؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              رحلتك في 5 خطوات بسيطة - من الطلب إلى الوصول
            </p>
            <p className="text-sm text-gray-500 mt-2">
              انقر على أي بطاقة لمشاهدة التفاصيل بحجم أكبر
            </p>
          </div>

          {/* Steps Grid - Desktop */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-8 mb-16">
            {steps.map((step, idx) => (
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
                    👆 انقر للتكبير
                  </div>
                </div>

                {/* Connecting Arrow */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Steps List - Mobile & Tablet */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-6 space-x-reverse"
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
                          👆 انقر للتكبير والمشاهدة التفصيلية
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
                className="w-6 h-6 text-yellow-500 ml-3"
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
                بسيط وسريع وآمن - جربه الآن!
              </span>
            </div>

            <div>
              <a
                href="#download"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                حمل التطبيق مجاناً
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Popup Overlay */}
      {activeCard !== null && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300"
            onClick={handleModalClose}
          />

          {/* Modal Content */}
          <div className="relative z-10 max-w-4xl max-h-[90vh] mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={handleModalClose}
              className="absolute top-4 left-4 z-20 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
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
              className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 w-12 h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNextCard}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 w-12 h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Modal Body */}
            <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
              {/* Image Section */}
              <div className="md:w-1/2 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
                <div className="relative max-w-full max-h-full">
                  <NextImage
                    src={steps[activeCard].img}
                    alt={steps[activeCard].title}
                    width={400}
                    height={800}
                    className="max-w-full max-h-[60vh] md:max-h-[80vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-8 overflow-y-auto">
                {/* Step Number Badge */}
                <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <span className="ml-2">خطوة</span>
                  <span>{activeCard + 1}</span>
                  <span className="mr-2">من {steps.length}</span>
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
                    تفاصيل أكثر:
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {steps[activeCard].detailedDescription}
                  </p>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-2 space-x-reverse mb-6">
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
                      ? "الخطوة التالية"
                      : "العودة للبداية"}
                  </button>
                  <button
                    onClick={handleModalClose}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-all duration-200"
                  >
                    إغلاق
                  </button>
                </div>

                {/* Keyboard Hint */}
                <p className="text-center text-sm text-gray-400 mt-4">
                  استخدم الأسهم للتنقل أو اضغط ESC للإغلاق
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
