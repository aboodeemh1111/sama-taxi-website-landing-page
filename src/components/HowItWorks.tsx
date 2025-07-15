// How It Works Component
// Purpose: Guide users through the app's core functionality

"use client";

import { useTranslation } from "@/hooks/useTranslation";

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.howItWorks.title}
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connection Lines for Desktop */}
          <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-full">
            <div className="flex justify-between items-center px-32">
              <div className="w-32 h-0.5 bg-yellow-300"></div>
              <div className="w-32 h-0.5 bg-yellow-300"></div>
            </div>
          </div>

          {/* Step 1 */}
          <div className="text-center relative">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl relative z-10">
              <span className="text-3xl font-bold text-white">1</span>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t.howItWorks.step1.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.howItWorks.step1.description}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center relative">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl relative z-10">
              <span className="text-3xl font-bold text-white">2</span>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t.howItWorks.step2.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.howItWorks.step2.description}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center relative">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl relative z-10">
              <span className="text-3xl font-bold text-white">3</span>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t.howItWorks.step3.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.howItWorks.step3.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
