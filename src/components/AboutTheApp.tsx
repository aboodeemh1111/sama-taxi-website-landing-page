"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

const AboutTheApp = () => {
  const { t, isRTL } = useTranslation();
  return (
    <section id="about" className="relative py-24 px-6 bg-white">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Content Container */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                {t.features.title}
              </h2>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-xl font-medium text-gray-800">
                  {t.features.feature1.description}
                </p>

                <p>{t.features.feature2.description}</p>

                <p>{t.features.feature3.description}</p>

                <p className="font-medium text-gray-800">
                  {t.features.feature4.description}
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-yellow-500 rounded-full p-2 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {t.features.feature4.title}
                  </h3>
                  <p className="text-gray-600">
                    {t.features.feature4.description}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-yellow-500 rounded-full p-2 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {t.features.feature3.title}
                  </h3>
                  <p className="text-gray-600">
                    {t.features.feature3.description}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-yellow-500 rounded-full p-2 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {t.features.feature1.title}
                  </h3>
                  <p className="text-gray-600">
                    {t.features.feature1.description}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-yellow-500 rounded-full p-2 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {t.features.feature2.title}
                  </h3>
                  <p className="text-gray-600">
                    {t.features.feature2.description}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Link
                href="#download"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {t.navbar.downloadApp}
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative">
                <Image
                  src="/images~/IPhone16.png"
                  alt={t.hero.phoneAlt}
                  width={400}
                  height={500}
                  className="drop-shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-3xl"
                />
                <div className="absolute -inset-4 bg-yellow-500 bg-opacity-20 rounded-3xl blur-xl -z-10"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    {t.features.feature4.title}
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-white rounded-2xl shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-xs">{t.features.feature4.title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTheApp;
