"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

const Download = () => {
  const { t, isRTL } = useTranslation();

  return (
    <section className="relative py-24 px-6 bg-white border-b border-gray-100">
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Content Container */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.finalCTA.title}
          </h2>
          <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
            {t.finalCTA.subtitle}
          </p>
        </div>

        {/* Qr Code*/}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <Image
              src="/images~/Sama App Download.png"
              alt={t.hero.phoneAlt}
              width={400}
              height={300}
              className="drop-shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-3xl"
            />
            <div className="absolute -inset-4 bg-yellow-500 bg-opacity-20 rounded-3xl blur-xl -z-10"></div>
          </div>
        </div>

        {/* Download Buttons */}
        <div
          className={`flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 ${
            isRTL ? "space-x-reverse" : ""
          }`}
        >
          <Link
            href="#"
            className="group transform hover:scale-105 transition-all duration-300"
          >
            <div className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl p-3 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Image
                src="/images~/get_on_app_store.svg"
                alt={t.finalCTA.downloadIphone}
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </div>
          </Link>

          <Link
            href="#"
            className="group transform hover:scale-105 transition-all duration-300"
          >
            <div className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl p-3 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Image
                src="/images~/get_on_google_play.svg"
                alt={t.finalCTA.downloadAndroid}
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </div>
          </Link>
        </div>

        {/* Learn More Button */}
      </div>
    </section>
  );
};

export default Download;
