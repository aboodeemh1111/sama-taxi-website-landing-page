"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const JoinDriverTeam = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  return (
    <section className="relative py-24 px-6 bg-gray-50">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Content Container */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.joinDriverTeam.title}
          </h2>
          <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
            {t.joinDriverTeam.description1}
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.joinDriverTeam.description2}
          </p>
        </div>

        {/* Captain Image */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <Image
              src="/images~/Sama Captains.png"
              alt={t.joinDriverTeam.title}
              width={400}
              height={300}
              className="drop-shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-3xl"
            />
            <div className="absolute -inset-4 bg-yellow-500 bg-opacity-20 rounded-3xl blur-xl -z-10"></div>
          </div>
        </div>

        {/* Driver App Showcase Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              كيف يعمل تطبيق كابتن سما؟
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              تطبيق سهل ومتطور لإدارة رحلاتك وأرباحك
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Trip Details Feature */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <Image
                  src="/images~/تفاصيل_الطلب_قبل_القبول.png"
                  alt="تفاصيل الرحلة قبل القبول"
                  width={300}
                  height={600}
                  className="w-full h-64 object-contain bg-gradient-to-br from-yellow-50 to-yellow-100 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                تفاصيل الرحلة قبل القبول
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                شاهد جميع تفاصيل الرحلة والأجرة قبل الموافقة
              </p>
            </div>

            {/* Service Control Feature */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <Image
                  src="/images~/التحكم_بالقنوات.png"
                  alt="تحكم في خدماتك"
                  width={300}
                  height={600}
                  className="w-full h-64 object-contain bg-gradient-to-br from-blue-50 to-blue-100 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                تحكم في خدماتك
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                فعّل أو أوقف الخدمات حسب رغبتك
              </p>
            </div>

            {/* Recent Trips Feature */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <Image
                  src="/images~/اخر_الرحلات.png"
                  alt="آخر الرحلات"
                  width={300}
                  height={600}
                  className="w-full h-64 object-contain bg-gradient-to-br from-green-50 to-green-100 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                آخر الرحلات
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                تتبع رحلاتك وأرباحك اليومية
              </p>
            </div>

            {/* Payment History Feature */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <Image
                  src="/images~/سجل_المدفوعات.png"
                  alt="سجل المدفوعات"
                  width={300}
                  height={600}
                  className="w-full h-64 object-contain bg-gradient-to-br from-purple-50 to-purple-100 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                سجل المدفوعات
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                راجع تاريخ مدفوعاتك وأرباحك
              </p>
            </div>

            {/* Main App Feature - Spans 2 columns on larger screens */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <Image
                  src="/images~/سما_يوصلك_و_يوصلك.png"
                  alt="سما يوصلك ويوصلك"
                  width={300}
                  height={600}
                  className="w-full h-64 object-contain bg-gradient-to-br from-orange-50 to-orange-100 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                سما يوصلك ويوصلك
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                واجهة بسيطة وسهلة الاستخدام
              </p>
            </div>
          </div>

          {/* Showcase CTA */}
          <div className="text-center">
            <div className="inline-flex items-center bg-yellow-50 border border-yellow-200 rounded-full px-6 py-3 mb-6">
              <svg
                className="w-5 h-5 text-yellow-500 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-yellow-700 font-medium">
                تطبيق مجاني وسهل الاستخدام
              </span>
            </div>
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
            <div className="bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-3 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Image
                src="/images~/get_on_app_store.svg"
                alt={t.joinDriverTeam.downloadIphone}
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
            <div className="bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-3 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Image
                src="/images~/get_on_google_play.svg"
                alt={t.joinDriverTeam.downloadAndroid}
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </div>
          </Link>
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <Link
            href="/driver-conditions"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {t.joinDriverTeam.learnMore}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinDriverTeam;
