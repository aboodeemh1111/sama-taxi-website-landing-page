"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function DriverConditionsPage() {
  const { t, isRTL } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <Image
                  src="/images~/Sama Taxi-04.svg"
                  alt={t.navbar.logoAlt}
                  width={70}
                  height={70}
                  className="h-14 w-auto transition-transform group-hover:scale-105"
                />
              </Link>
            </div>
            <Link
              href="/"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t.driverConditions.backToHome}
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Header Section */}
        <header className={`${isRTL ? "text-right" : "text-center"} mb-16`}>
          <div className="inline-block p-4 bg-yellow-100 rounded-full mb-6">
            <svg
              className="w-12 h-12 text-yellow-600"
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
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t.driverConditions.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.driverConditions.subtitle}
          </p>
        </header>

        {/* Conditions Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Identity Requirements Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div
              className={`flex items-center mb-6 ${
                isRTL ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`p-3 bg-blue-100 rounded-full ${
                  isRTL ? "ml-4" : "mr-4"
                }`}
              >
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V4a2 2 0 114 0v2m-4 0a2 2 0 104 0m-4 0v2m0 0h4"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {t.driverConditions.identityRequirements.title}
              </h2>
            </div>
            <ul className={`space-y-4 ${isRTL ? "text-right" : "text-left"}`}>
              {t.driverConditions.identityRequirements.items.map(
                (item, index) => (
                  <li
                    key={index}
                    className={`flex items-start text-lg text-gray-700 hover:text-blue-600 transition-colors cursor-pointer group ${
                      isRTL ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 bg-blue-500 rounded-full mt-3 group-hover:bg-blue-600 ${
                        isRTL ? "mr-3" : "ml-3"
                      }`}
                    ></div>
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Vehicle Requirements Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div
              className={`flex items-center mb-6 ${
                isRTL ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`p-3 bg-green-100 rounded-full ${
                  isRTL ? "ml-4" : "mr-4"
                }`}
              >
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {t.driverConditions.vehicleRequirements.title}
              </h2>
            </div>
            <ul className={`space-y-4 ${isRTL ? "text-right" : "text-left"}`}>
              {t.driverConditions.vehicleRequirements.items.map(
                (item, index) => (
                  <li
                    key={index}
                    className={`flex items-start text-lg text-gray-700 hover:text-green-600 transition-colors cursor-pointer group ${
                      isRTL ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 bg-green-500 rounded-full mt-3 group-hover:bg-green-600 ${
                        isRTL ? "mr-3" : "ml-3"
                      }`}
                    ></div>
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-8">
          <div
            className={`flex items-start ${
              isRTL ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`p-2 bg-yellow-100 rounded-full flex-shrink-0 ${
                isRTL ? "mr-4" : "ml-4"
              }`}
            >
              <svg
                className="w-6 h-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.732 15.5C3.962 16.333 4.924 18 6.464 18z"
                />
              </svg>
            </div>
            <div className={isRTL ? "text-right" : "text-left"}>
              <h3 className="text-2xl font-bold text-yellow-800 mb-3">
                {t.driverConditions.importantNotice.title}
              </h3>
              <p className="text-lg text-yellow-700 leading-relaxed">
                {t.driverConditions.importantNotice.content}
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className={`inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group ${
              isRTL ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <svg
              className={`w-6 h-6 transition-transform group-hover:-translate-x-1 ${
                isRTL ? "mr-3" : "ml-3"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isRTL ? "M9 5l7 7-7 7" : "M10 19l-7-7m0 0l7-7m-7 7h18"}
              />
            </svg>
            {t.driverConditions.backToHome}
          </Link>
        </div>
      </main>
    </div>
  );
}
