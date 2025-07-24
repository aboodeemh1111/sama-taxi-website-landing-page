"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

const Download = () => {
  const { t, isRTL } = useTranslation();

  return (
    <section
      className="relative py-24 px-6 bg-white border-b border-gray-100"
      id="download"
      aria-labelledby="download-title"
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Content Container */}
        <div className="text-center mb-12">
          <h2
            id="download-title"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {t.finalCTA.title}
          </h2>
          <p
            className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto"
            aria-describedby="download-title"
          >
            {t.finalCTA.subtitle}
          </p>
        </div>

        {/* QR Code */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <Image
              src="/images~/Sama App Download.png"
              alt={`${t.hero.phoneAlt} - رمز QR لتحميل التطبيق`}
              width={400}
              height={300}
              className="drop-shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-3xl"
              loading="lazy"
              sizes="(max-width: 768px) 300px, 400px"
              quality={85}
            />
            <div
              className="absolute -inset-4 bg-yellow-500 bg-opacity-20 rounded-3xl blur-xl -z-10"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Download Buttons */}
        <div
          className={`flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 ${
            isRTL ? "space-x-reverse" : ""
          }`}
          role="group"
          aria-label="روابط تحميل التطبيق"
        >
          <Link
            href="https://apps.apple.com/sa/app/sama-taxi-delivery/id1605081866?l=ar"
            target="_blank"
            rel="noopener noreferrer"
            className="group transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 rounded-2xl"
            aria-label={`${t.finalCTA.downloadIphone} - فتح في متجر التطبيقات`}
          >
            <div className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl p-3 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Image
                src="/images~/get_on_app_store.svg"
                alt={t.finalCTA.downloadIphone}
                width={180}
                height={60}
                className="h-14 w-auto"
                loading="lazy"
                quality={90}
              />
            </div>
          </Link>

          <Link
            href="https://play.google.com/store/apps/details?id=com.multibrains.taxi.passenger.samtaxisaudi&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="group transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 rounded-2xl"
            aria-label={`${t.finalCTA.downloadAndroid} - فتح في متجر Google Play`}
          >
            <div className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl p-3 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Image
                src="/images~/get_on_google_play.svg"
                alt={t.finalCTA.downloadAndroid}
                width={180}
                height={60}
                className="h-14 w-auto"
                loading="lazy"
                quality={90}
              />
            </div>
          </Link>
        </div>

        {/* Additional accessibility information */}
        <div className="text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            التطبيق متوفر مجاناً لأجهزة iOS و Android. يدعم التطبيق اللغتين
            العربية والإنجليزية.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Download;
