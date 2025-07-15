// Footer Component
// Purpose: Legal information, contact, social media, navigation

"use client";

import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                سما<span className="text-yellow-500">تاكسي</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">{t.footer.description}</p>
            <p className="text-yellow-500 font-semibold mb-4">
              {t.footer.slogan}
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <span className="sr-only">{t.footer.socialAlt.facebook}</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <span className="sr-only">{t.footer.socialAlt.twitter}</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <span className="sr-only">{t.footer.socialAlt.instagram}</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348zM12.017 7.956c-2.209 0-4.031 1.822-4.031 4.031 0 2.209 1.822 4.031 4.031 4.031 2.209 0 4.031-1.822 4.031-4.031 0-2.209-1.822-4.031-4.031-4.031z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  {t.navbar.home}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  {t.navbar.about}
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  {t.navbar.downloadApp}
                </a>
              </li>
              <li>
                <a
                  href="#join-driver"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  {t.navbar.joinDriver}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  {t.footer.privacyPolicy}
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  {t.footer.termsOfService}
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  {t.footer.careers}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
