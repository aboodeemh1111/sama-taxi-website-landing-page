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
      <main   className="max-w-4xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            شروط وأحكام التسجيل كسائق في سما تاكسي
            </h1>
        <h2>
          شروط التسجيل
        </h2>
        <h2 className="text-lg text-gray-700 mb-4"> الهويه</h2>
        <h3 className="text-lg text-gray-700 mb-4 ">
          ان يكون المسجل سعودي الجنسيه
        </h3>
        <h2 className="text-lg text-gray-700 mb-4">
          ان تكو ن الهويه ساريه المفعوله
        </h2>
        <h3 className="text-lg text-gray-700 mb-4">

          ان يكون السائق لديه شهاده خلو سوابق ساريه المفعول
          </h3>
          
        
        <h2 className="text-lg text-gray-700 mb-4">
          ا
        

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
