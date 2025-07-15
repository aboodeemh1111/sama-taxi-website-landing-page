"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const FemaleDrivers = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className={`lg:w-1/2 ${isRTL ? "text-right" : "text-left"}`}>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              {t.femaleDrivers.title}
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t.femaleDrivers.description1}
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t.femaleDrivers.description2}
            </p>

            <a
              href="#download"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t.femaleDrivers.requestRide}
            </a>
          </div>

          {/* Image/Visual Content */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Placeholder for female driver image */}
              <div className="w-80 h-80 bg-yellow-200 rounded-full flex items-center justify-center shadow-2xl">
                <svg
                  className="w-32 h-32 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-600 rounded-full"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-yellow-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FemaleDrivers;
