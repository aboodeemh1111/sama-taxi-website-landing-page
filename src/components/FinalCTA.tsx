// Final Call to Action Component
// Purpose: Reiterate the main call to action before the footer

"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const FinalCTA = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  return (
    <section
      id="download"
      className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 py-20 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t.finalCTA.title}
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
              {t.finalCTA.subtitle}
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            {/* Android Download */}
            <a
              href="#"
              className="group bg-black hover:bg-gray-800 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4 min-w-[280px]"
            >
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503c-.2446-.1133-.5096-.2073-.7915-.2815-.6226-.1641-1.2895-.2815-1.9973-.2815s-1.3747.1174-1.9973.2815c-.2819.0742-.5469.1682-.7915.2815L8.6792 5.4647a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C7.5343 10.5616 6.0262 12.5527 6.0262 15.0411h11.9476c0-2.4884-1.5081-4.4795-3.9328-5.7216" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-300">متوفر على</div>
                <div className="text-lg font-bold">
                  {t.finalCTA.downloadAndroid}
                </div>
              </div>
            </a>

            {/* iPhone Download */}
            <a
              href="#"
              className="group bg-white hover:bg-gray-100 text-gray-900 px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4 min-w-[280px]"
            >
              <div className="w-10 h-10 bg-gray-900 bg-opacity-10 rounded-xl flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500">متوفر على</div>
                <div className="text-lg font-bold">
                  {t.finalCTA.downloadIphone}
                </div>
              </div>
            </a>
          </div>

          {/* App Screenshot */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-white bg-opacity-30 rounded-3xl blur-2xl group-hover:bg-opacity-40 transition-all duration-300"></div>
              <img
                src="/images/phone-mockup.png"
                alt={t.hero.phoneAlt}
                className="relative w-[300px] md:w-[400px] drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
