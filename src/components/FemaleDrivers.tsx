"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

function FemaleDrivers() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  return (
    <section
      id="female-drivers"
      className="relative py-24 px-6 bg-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-100/30 to-yellow-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-100/20 to-yellow-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            {t.femaleDrivers.title}
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.femaleDrivers.description1}
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.femaleDrivers.description2}
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Female Driver Image */}
          <div className="relative">
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-yellow-500/30 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* Image Container */}
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                <div className="aspect-square rounded-2xl overflow-hidden bg-black">
                  <Image
                    src="/female-drive.png"
                    alt={t.femaleDrivers.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-yellow-500 text-white px-6 py-3 rounded-full font-bold shadow-lg transform rotate-12">
                محترفة
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white border-2 border-yellow-200 px-6 py-3 rounded-full font-semibold text-yellow-600 shadow-lg transform -rotate-6">
                موثوقة
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                خدمة مخصصة
                <span className="text-yellow-500"> للسيدات والعائلات</span>
              </h3>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p className="relative pl-6">
                  <span className="absolute right-0 top-1 w-2 h-2 bg-yellow-500 rounded-full"></span>
                  تتمتع سائقات "سما تاكسي" بالموثوقية والاحترافية في كل جانب من
                  جوانب الخدمة، حيث تضمن للعميلات التنقل بأمان وراحة دون أي
                  مشكلات أو مضايقات.
                </p>

                <p className="relative pl-6">
                  <span className="absolute right-0 top-1 w-2 h-2 bg-yellow-500 rounded-full"></span>
                  تتميز سائقاتنا بالاهتمام بتوفير بيئة مريحة وودية للراكبات، مما
                  يجعل كل رحلة معهن تجربة ممتعة ومثالية.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "سائقات مدربات", subtitle: "ومعتمدات" },
                { title: "أمان وخصوصية", subtitle: "تامة" },
                { title: "خدمة على", subtitle: "مدار الساعة" },
                { title: "تجربة مريحة", subtitle: "وودية" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 hover:bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h4 className="font-bold text-gray-800 text-sm mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-gray-600">{feature.subtitle}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                href="#download"
                className="group inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>{t.femaleDrivers.requestRide}</span>
                <svg
                  className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform"
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
              </Link>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.femaleDrivers.title}
            </h3>
            <p className="text-xl text-gray-600">
              {t.femaleDrivers.description1}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-yellow-500/20 rounded-3xl blur-lg opacity-50"></div>
              <div className="relative bg-white rounded-3xl p-3 shadow-2xl">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/UFlF3Kz1t8g"
                    title={t.femaleDrivers.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-500/10 rounded-3xl blur-3xl"></div>

          <div className="relative bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 text-center shadow-lg">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.femaleDrivers.title}
              </h3>

              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                {t.femaleDrivers.description2}
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Link
                  href="#download"
                  className="group bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <span>{t.navbar.downloadApp}</span>
                  <svg
                    className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </Link>

                <Link
                  href="https://wa.me/+966509185515"
                  target="_blank"
                  className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <span>{t.femaleDrivers.requestRide}</span>
                  <svg
                    className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FemaleDrivers;
