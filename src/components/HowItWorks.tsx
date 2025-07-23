"use client";

import NextImage from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const steps = [
    {
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
      img: "/images~/iphone_mockup.svg",
    },
    {
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
      img: "/images~/iphone_mockup.svg",
    },
    {
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
      img: "/images~/iphone_mockup.svg",
    },
  ];
  return (
    <section
      id="how-it-works"
      className="py-16 bg-gray-50 w-full flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-10 text-center">
        {t.howItWorks.title}
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl rtl">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <div className="bg-white rounded-3xl shadow-lg p-4 mb-6 flex items-center justify-center">
              <NextImage
                src={step.img}
                alt={step.title}
                width={180}
                height={360}
                className="w-40 h-80 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
