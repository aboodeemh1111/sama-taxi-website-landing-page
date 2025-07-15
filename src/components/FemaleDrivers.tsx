"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const FemaleDrivers = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className={`lg:w-1/2 ${isRTL ? "text-right" : "text-left"}`}>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                {t.femaleDrivers.title}
              </h2>
              <div className="w-24 h-1 bg-yellow-500 rounded-full"></div>
            </div>

            <div className="space-y-6 mb-10">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.femaleDrivers.description1}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                {t.femaleDrivers.description2}
              </p>
            </div>

            <a
              href="#download"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              {t.femaleDrivers.requestRide}
            </a>
          </div>

          {/* Visual Content */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-96 h-96 bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full"></div>
                  <div className="absolute top-1/2 right-8 w-12 h-12 bg-white rounded-full"></div>
                </div>

                {/* Main Icon */}
                <div className="relative z-10">
                  <svg
                    className="w-32 h-32 text-yellow-700"
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
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-500 rounded-full shadow-lg animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-yellow-600 rounded-full shadow-lg animate-pulse delay-75"></div>
              <div className="absolute top-1/2 -left-12 w-6 h-6 bg-yellow-400 rounded-full shadow-lg animate-pulse delay-150"></div>
              <div className="absolute bottom-1/4 -right-8 w-4 h-4 bg-yellow-300 rounded-full shadow-lg animate-pulse delay-300"></div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FemaleDrivers;
