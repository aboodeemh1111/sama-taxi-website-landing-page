"use client";

import NextImage from "next/image";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const steps = [
    {
      title: "اختر نوع الخدمة",
      description: "حدد نوع الرحلة التي تريدها من الخيارات المتاحة",
      img: "/images~/custommer/اختيار_نوع_الخدمه.png",
      color: "from-blue-50 to-blue-100",
      accent: "text-blue-600",
    },
    {
      title: "حدد موقعك ووجهتك",
      description: "اختر نقطة الانطلاق والوجهة على الخريطة بسهولة",
      img: "/images~/custommer/التحديد_على_الخريطهط.png",
      color: "from-green-50 to-green-100",
      accent: "text-green-600",
    },
    {
      title: "تتبع رحلتك",
      description: "راقب موقع السائق وتقدم رحلتك في الوقت الفعلي",
      img: "/images~/custommer/الرحله_قيد_التقدم.png",
      color: "from-yellow-50 to-yellow-100",
      accent: "text-yellow-600",
    },
    {
      title: "اكتمال الرحلة والدفع",
      description: "استلم إيصال رحلتك وادفع بالطريقة المناسبة لك",
      img: "/images~/custommer/الايصال.png",
      color: "from-purple-50 to-purple-100",
      accent: "text-purple-600",
    },
    {
      title: "احفظ أماكنك المفضلة",
      description: "احفظ العناوين المهمة لسهولة الوصول إليها لاحقاً",
      img: "/images~/custommer/حفظ_الاماكن_المفضله_لديك.png",
      color: "from-orange-50 to-orange-100",
      accent: "text-orange-600",
    },
  ];

  const handleCardClick = (index: number) => {
    if (activeCard === index) {
      setActiveCard(null); // Close if already active
    } else {
      setActiveCard(index); // Open new card
    }
  };

  const getCardScale = (index: number) => {
    if (activeCard === index) {
      return "scale-125"; // Clicked state - biggest
    } else if (hoveredCard === index && activeCard !== index) {
      return "scale-110"; // Hover state - medium
    } else if (activeCard !== null && activeCard !== index) {
      return "scale-95 opacity-75"; // Other cards when one is active - smaller
    } else {
      return "scale-100"; // Normal state
    }
  };

  const getCardZIndex = (index: number) => {
    if (activeCard === index) {
      return "z-50"; // Highest z-index for active card
    } else if (hoveredCard === index) {
      return "z-20"; // Higher z-index for hovered card
    } else {
      return "z-10"; // Normal z-index
    }
  };

  return (
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
        </div>

        {/* Steps Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Step Card */}
              <div
                className={`
                  group bg-white rounded-2xl p-6 shadow-lg cursor-pointer
                  transition-all duration-500 ease-out transform-gpu
                  ${getCardScale(idx)}
                  ${getCardZIndex(idx)}
                  ${
                    activeCard === idx
                      ? "shadow-2xl ring-4 ring-yellow-400 ring-opacity-50"
                      : "hover:shadow-2xl"
                  }
                  ${
                    activeCard !== null && activeCard !== idx
                      ? ""
                      : "hover:-translate-y-3"
                  }
                `}
                onClick={() => handleCardClick(idx)}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Step Number */}
                <div
                  className={`
                  absolute -top-4 -right-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg
                  transition-all duration-300
                  ${
                    activeCard === idx
                      ? "bg-yellow-600 text-white scale-125"
                      : "bg-yellow-500 text-white"
                  }
                `}
                >
                  {idx + 1}
                </div>

                {/* Phone Screenshot */}
                <div
                  className={`relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br ${step.color} transition-all duration-300`}
                >
                  <NextImage
                    src={step.img}
                    alt={step.title}
                    width={250}
                    height={500}
                    className={`
                      w-full h-48 object-contain transition-all duration-500
                      ${
                        activeCard === idx
                          ? "scale-110"
                          : "group-hover:scale-105"
                      }
                    `}
                  />

                  {/* Overlay for active card */}
                  {activeCard === idx && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-100 transition-opacity duration-300"></div>
                  )}
                </div>

                {/* Step Content */}
                <h3
                  className={`
                  text-lg font-bold mb-2 transition-all duration-300
                  ${activeCard === idx ? `${step.accent} text-xl` : step.accent}
                `}
                >
                  {step.title}
                </h3>
                <p
                  className={`
                  text-gray-600 leading-relaxed transition-all duration-300
                  ${activeCard === idx ? "text-base" : "text-sm"}
                `}
                >
                  {step.description}
                </p>

                {/* Active indicator */}
                {activeCard === idx && (
                  <div className="mt-3 flex items-center justify-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  </div>
                )}

                {/* Click hint */}
                <div
                  className={`
                  absolute bottom-2 left-2 text-xs text-gray-400 transition-all duration-300
                  ${
                    hoveredCard === idx && activeCard !== idx
                      ? "opacity-100"
                      : "opacity-0"
                  }
                `}
                >
                  انقر للتكبير
                </div>
              </div>

              {/* Connecting Arrow */}
              {idx < steps.length - 1 && (
                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
                  <div
                    className={`
                    w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg
                    transition-all duration-300
                    ${activeCard !== null ? "scale-75 opacity-50" : ""}
                  `}
                  >
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
              <div
                className={`
                flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg
                transition-all duration-300
                ${
                  activeCard === idx
                    ? "bg-yellow-600 text-white scale-110"
                    : "bg-yellow-500 text-white"
                }
              `}
              >
                {idx + 1}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div
                  className={`
                    bg-white rounded-2xl p-6 shadow-lg cursor-pointer
                    transition-all duration-500 ease-out transform-gpu
                    ${getCardScale(idx)}
                    ${
                      activeCard === idx
                        ? "shadow-2xl ring-4 ring-yellow-400 ring-opacity-50"
                        : "hover:shadow-2xl"
                    }
                  `}
                  onClick={() => handleCardClick(idx)}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    {/* Text Content */}
                    <div className={`${isRTL ? "md:order-2" : "md:order-1"}`}>
                      <h3
                        className={`
                        font-bold mb-3 transition-all duration-300
                        ${
                          activeCard === idx
                            ? `${step.accent} text-2xl`
                            : `${step.accent} text-xl`
                        }
                      `}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`
                        text-gray-600 leading-relaxed transition-all duration-300
                        ${activeCard === idx ? "text-lg" : "text-base"}
                      `}
                      >
                        {step.description}
                      </p>

                      {/* Active indicator */}
                      {activeCard === idx && (
                        <div className="mt-3 flex items-center">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse ml-2"></div>
                          <span className="text-sm text-yellow-600 font-medium">
                            مُوسع للعرض
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Phone Screenshot */}
                    <div className={`${isRTL ? "md:order-1" : "md:order-2"}`}>
                      <div
                        className={`
                        relative overflow-hidden rounded-xl bg-gradient-to-br ${step.color} p-4
                        transition-all duration-300
                      `}
                      >
                        <NextImage
                          src={step.img}
                          alt={step.title}
                          width={200}
                          height={400}
                          className={`
                            w-full max-w-[200px] mx-auto h-auto object-contain
                            transition-all duration-500
                            ${activeCard === idx ? "scale-110" : ""}
                          `}
                        />

                        {/* Overlay for active card */}
                        {activeCard === idx && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-100"></div>
                        )}
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
          <div
            className={`
            inline-flex items-center bg-yellow-50 border border-yellow-200 rounded-full px-8 py-4 mb-6
            transition-all duration-300
            ${activeCard !== null ? "scale-95 opacity-75" : ""}
          `}
          >
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
              className={`
                inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl 
                transition-all duration-300 transform hover:scale-105
                ${activeCard !== null ? "scale-95 opacity-75" : ""}
              `}
            >
              حمل التطبيق مجاناً
            </a>
          </div>
        </div>

        {/* Instruction text */}
        {activeCard === null && (
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              مرر الماوس فوق البطاقات أو انقر عليها للتكبير
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorks;
