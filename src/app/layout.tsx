import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/contexts/Providers";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// Enhanced viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "سما تاكسي - تطبيق التاكسي الموثوق في السعودية",
    template: "%s | سما تاكسي",
  },
  description:
    "رحلتك الموثوقة، بلمسة واحدة فقط. احجز رحلات سريعة وآمنة ومريحة في جميع أنحاء المملكة العربية السعودية.",
  keywords: [
    "تاكسي",
    "توصيل",
    "السعودية",
    "سما تاكسي",
    "نقل",
    "رحلات",
    "تطبيق توصيل",
    "Sama Taxi",
    "Saudi Arabia",
    "taxi app",
    "ride sharing",
  ],
  authors: [{ name: "Sama Taxi" }],
  creator: "Sama Taxi",
  publisher: "Sama Taxi",
  applicationName: "Sama Taxi",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sama-taxi.vercel.app",
    languages: {
      "ar-SA": "https://sama-taxi.vercel.app",
      "en-US": "https://sama-taxi.vercel.app",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    url: "https://sama-taxi.vercel.app",
    siteName: "Sama Taxi",
    title: "سما تاكسي - تطبيق التاكسي الموثوق في السعودية",
    description:
      "رحلتك الموثوقة، بلمسة واحدة فقط. احجز رحلات سريعة وآمنة ومريحة في جميع أنحاء المملكة العربية السعودية.",
    images: [
      {
        url: "/images~/Sama Taxi-05.svg",
        width: 1200,
        height: 630,
        alt: "Sama Taxi Logo",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "سما تاكسي - تطبيق التاكسي الموثوق في السعودية",
    description:
      "رحلتك الموثوقة، بلمسة واحدة فقط. احجز رحلات سريعة وآمنة ومريحة في جميع أنحاء المملكة العربية السعودية.",
    images: ["/images~/Sama Taxi-05.svg"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: [
      {
        url: "/images~/Sama Taxi-05.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: "/images~/Sama Taxi-05.svg",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/manifest.json",
  category: "transportation",
};

// Structured Data JSON-LD
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sama-taxi.vercel.app/#organization",
      name: "Sama Taxi",
      url: "https://sama-taxi.vercel.app",
      logo: {
        "@type": "ImageObject",
        url: "https://sama-taxi.vercel.app/images~/Sama Taxi-05.svg",
        width: 512,
        height: 512,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        areaServed: "SA",
        availableLanguage: ["Arabic", "English"],
      },
      areaServed: {
        "@type": "Country",
        name: "Saudi Arabia",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://sama-taxi.vercel.app/#website",
      url: "https://sama-taxi.vercel.app",
      name: "Sama Taxi",
      description:
        "رحلتك الموثوقة، بلمسة واحدة فقط. احجز رحلات سريعة وآمنة ومريحة في جميع أنحاء المملكة العربية السعودية.",
      publisher: {
        "@id": "https://sama-taxi.vercel.app/#organization",
      },
      inLanguage: ["ar-SA", "en-US"],
    },
    {
      "@type": "MobileApplication",
      name: "Sama Taxi",
      operatingSystem: ["iOS", "Android"],
      applicationCategory: "Transportation",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "SAR",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.5",
        ratingCount: "1000",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://apps.apple.com" />
        <link rel="dns-prefetch" href="https://play.google.com" />
        <meta name="msapplication-TileColor" content="#fbbf24" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {/* Skip link for accessibility */}
        <a href="#main-content" className="skip-link">
          انتقل إلى المحتوى الرئيسي
        </a>

        <Providers>
          <main id="main-content" role="main">
            {children}
          </main>
        </Providers>

        {/* Service Worker Registration */}
        <Script
          id="sw-registration"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />

        {/* Performance monitoring */}
        <Script
          id="performance-monitor"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('PerformanceObserver' in window) {
                // Monitor LCP
                new PerformanceObserver((entryList) => {
                  for (const entry of entryList.getEntries()) {
                    console.log('LCP candidate:', entry.startTime);
                  }
                }).observe({entryTypes: ['largest-contentful-paint']});

                // Monitor FID
                new PerformanceObserver((entryList) => {
                  for (const entry of entryList.getEntries()) {
                    console.log('FID:', entry.processingStart - entry.startTime);
                  }
                }).observe({entryTypes: ['first-input']});

                // Monitor CLS
                let clsValue = 0;
                new PerformanceObserver((entryList) => {
                  for (const entry of entryList.getEntries()) {
                    if (!entry.hadRecentInput) {
                      clsValue += entry.value;
                    }
                  }
                  console.log('Current CLS value:', clsValue);
                }).observe({entryTypes: ['layout-shift']});
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
