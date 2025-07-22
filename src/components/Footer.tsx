"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white text-gray-900 py-16 relative overflow-hidden border-t border-gray-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 border border-yellow-500 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-yellow-500 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold">
                سما<span className="text-yellow-500">تاكسي</span>
              </span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              {t.footer.description}
            </p>
            <p className="text-yellow-500 font-semibold mb-8 text-xl">
              {t.footer.slogan}
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 space-x-reverse">
              <Link
                href="https://www.facebook.com/p/Sama-Taxi-61558944098623/"
                target="_blank"
                className="group"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 transform group-hover:scale-110 shadow-md">
                  <span className="sr-only">{t.footer.socialAlt.facebook}</span>
                  <FaFacebookF className="w-5 h-5 text-white" />
                </div>
              </Link>
              <Link
                href="https://x.com/smataxi?lang=ar"
                target="_blank"
                className="group"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 transform group-hover:scale-110 shadow-md">
                  <span className="sr-only">{t.footer.socialAlt.twitter}</span>
                  <FaTwitter className="w-5 h-5 text-white" />
                </div>
              </Link>
              <Link
                href="https://wa.me/+966509185515"
                target="_blank"
                className="group"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 transform group-hover:scale-110 shadow-md">
                  <span className="sr-only">WhatsApp</span>
                  <FaWhatsapp className="w-5 h-5 text-white" />
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-500">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-yellow-500 transition-colors duration-300 text-lg"
                >
                  {t.navbar.home}
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 hover:text-yellow-500 transition-colors duration-300 text-lg"
                >
                  {t.navbar.about}
                </Link>
              </li>
              <li>
                <Link
                  href="#download"
                  className="text-gray-600 hover:text-yellow-500 transition-colors duration-300 text-lg"
                >
                  {t.navbar.downloadApp}
                </Link>
              </li>
              <li>
                <Link
                  href="#join-driver"
                  className="text-gray-600 hover:text-yellow-500 transition-colors duration-300 text-lg"
                >
                  {t.navbar.joinDriver}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-500">
              {t.footer.legal}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-yellow-500 transition-colors duration-300 text-lg"
                >
                  {t.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link
                  href="/driver-conditions"
                  className="text-gray-600 hover:text-yellow-500 transition-colors duration-300 text-lg"
                >
                  شروط التسجيل كسائق
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-yellow-500 transition-colors duration-300 text-lg"
                >
                  {t.footer.termsOfService}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-lg">{t.footer.copyright}</p>
            <div className="mt-4 md:mt-0">
              <p className="text-yellow-500 font-semibold text-lg">
                {t.footer.slogan}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
