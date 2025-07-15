// How It Works Component
// Purpose: Guide users through the app's core functionality

"use client";

import { useTranslation } from "@/hooks/useTranslation";

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          {t.howItWorks.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              {t.howItWorks.step1.title}
            </h3>
            <p className="text-base text-gray-600">
              {t.howItWorks.step1.description}
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              {t.howItWorks.step2.title}
            </h3>
            <p className="text-base text-gray-600">
              {t.howItWorks.step2.description}
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              {t.howItWorks.step3.title}
            </h3>
            <p className="text-base text-gray-600">
              {t.howItWorks.step3.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
