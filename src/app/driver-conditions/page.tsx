"use client";

import Link from "next/link";
import Image from "next/image";

export default function DriverConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images~/Sama Taxi-04.svg"
                  alt="شعار سما تاكسي"
                  width={60}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <Link
              href="/"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            شروط وأحكام التسجيل كسائق في سما تاكسي
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            انضم إلى عائلة سما تاكسي واستمتع بفرص عمل مرنة ودخل مجزٍ. يرجى قراءة
            الشروط والأحكام التالية بعناية قبل التسجيل.
          </p>
        </div>

        {/* Conditions Content */}
        <div className="space-y-8">
          {/* Personal Requirements */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ml-4">
                ١
              </span>
              المتطلبات الشخصية
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>
                  أن يكون السائق سعودي الجنسية أو مقيم نظامي في المملكة العربية
                  السعودية
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>أن لا يقل العمر عن 21 سنة ولا يزيد عن 60 سنة</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>حسن السير والسلوك وعدم وجود سوابق جنائية</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>إجادة القراءة والكتابة باللغة العربية</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>اللياقة الصحية والطبية للقيادة</span>
              </li>
            </ul>
          </section>

          {/* License Requirements */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ml-4">
                ٢
              </span>
              متطلبات الرخصة
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>رخصة قيادة سارية المفعول لمدة لا تقل عن سنتين</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>عدم وجود مخالفات مرورية خطيرة في السنتين الأخيرتين</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>الحصول على رخصة نقل الركاب من الهيئة العامة للنقل</span>
              </li>
            </ul>
          </section>

          {/* Vehicle Requirements */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ml-4">
                ٣
              </span>
              متطلبات المركبة
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>أن لا يزيد عمر المركبة عن 10 سنوات</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>وجود تأمين شامل ساري المفعول</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>استمارة المركبة سارية المفعول وباسم السائق</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>فحص دوري ساري المفعول</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>نظافة المركبة من الداخل والخارج</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>عدم وجود أضرار ظاهرية أو عيوب فنية</span>
              </li>
            </ul>
          </section>

          {/* Documents Required */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ml-4">
                ٤
              </span>
              المستندات المطلوبة
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>صورة من الهوية الوطنية أو الإقامة</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>صورة من رخصة القيادة</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>صورة من استمارة المركبة</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>صورة من وثيقة التأمين الشامل</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>شهادة الفحص الدوري</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>صورة شخصية حديثة</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>رخصة نقل الركاب من هيئة النقل</span>
              </li>
            </ul>
          </section>

          {/* Service Standards */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ml-4">
                ٥
              </span>
              معايير الخدمة
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>الالتزام بقواعد المرور وأنظمة السلامة</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>التعامل بأدب واحترام مع العملاء</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>الوصول لموقع العميل في الوقت المحدد</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>الحفاظ على نظافة المركبة دائماً</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>عدم التدخين أثناء الخدمة</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>الالتزام بالمظهر اللائق والنظيف</span>
              </li>
            </ul>
          </section>

          {/* Financial Terms */}
          <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ml-4">
                ٦
              </span>
              الشروط المالية
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>عمولة سما تاكسي: 20% من قيمة الرحلة</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>دفع الأرباح أسبوعياً لحساب السائق المصرفي</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>لا توجد رسوم تسجيل أو رسوم خفية</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 ml-3 mt-1">•</span>
                <span>السائق مسؤول عن تكاليف الوقود والصيانة</span>
              </li>
            </ul>
          </section>

          {/* Contact Info */}
          <section className="bg-gray-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-6">
              هل أنت مستعد للانضمام لعائلة سما تاكسي؟
            </h2>
            <p className="text-gray-300 mb-8">
              حمّل تطبيق الكابتن وابدأ رحلة الكسب معنا اليوم
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="#"
                className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                حمل تطبيق الكابتن - أندرويد
              </Link>
              <Link
                href="#"
                className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                حمل تطبيق الكابتن - آيفون
              </Link>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
          >
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </main>
    </div>
  );
}
