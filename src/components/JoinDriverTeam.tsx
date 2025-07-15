"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const JoinDriverTeam = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  return (
    <section
      id="join-driver"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-yellow-500 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-yellow-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-yellow-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            {t.joinDriverTeam.title}
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            {t.joinDriverTeam.description1}
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            {t.joinDriverTeam.description2}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
          {/* Android Download */}
          <a
            href="#"
            className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503c-.2446-.1133-.5096-.2073-.7915-.2815-.6226-.1641-1.2895-.2815-1.9973-.2815s-1.3747.1174-1.9973.2815c-.2819.0742-.5469.1682-.7915.2815L8.6792 5.4647a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C7.5343 10.5616 6.0262 12.5527 6.0262 15.0411h11.9476c0-2.4884-1.5081-4.4795-3.9328-5.7216" />
              </svg>
            </div>
            {t.joinDriverTeam.downloadAndroid}
          </a>

          {/* iPhone Download */}
          <a
            href="#"
            className="group bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-yellow-500 bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:bg-opacity-20 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </div>
            {t.joinDriverTeam.downloadIphone}
          </a>

          {/* Learn More */}
          <a
            href="#"
            className="text-yellow-500 hover:text-yellow-400 font-semibold text-lg underline decoration-2 underline-offset-4 transition-colors duration-300"
          >
            {t.joinDriverTeam.learnMore}
          </a>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-yellow-500 mb-2">24/7</div>
            <div className="text-gray-400">دعم فني متواصل</div>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-yellow-500 mb-2">مرونة</div>
            <div className="text-gray-400">اختر أوقات عملك</div>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-yellow-500 mb-2">دخل</div>
            <div className="text-gray-400">أرباح مجزية</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinDriverTeam;
