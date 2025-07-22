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
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Content Container */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            انضم إلى عائلة سما تاكسي: ابدأ رحلة الكسب معنا!
          </h2>
          <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
            هل أنت سائق أو سائقة تبحث عن فرص مرنة ودخل مجزٍ؟ انضم إلى شبكة كباتن
            سما تاكسي المتنامية وكن جزءاً من مستقبل النقل في المملكة.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            نحن ندعمك بالكامل: من تطبيق سهل الاستخدام للكباتن إلى دعم فني
            متواصل. ابدأ قيادتك معنا اليوم!
          </p>
        </div>

        {/* Captain Image */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <Image
              src="/images~/Sama Captains.png"
              alt="كباتن سما تاكسي"
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
            <div className="bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-3 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Image
                src="/images~/get_on_app_store.svg"
                alt="حمل تطبيق الكابتن للايفون"
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
                alt="حمل تطبيق الكابتن للاندرويد"
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
            شروط التسجيل كسائق
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinDriverTeam;
