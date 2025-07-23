"use client";

import { ar } from "@/translations/ar";
import { en } from "@/translations/en";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

const translations = {
  ar,
  en,
};

export const useTranslation = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const context = useContext(LanguageContext);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // During SSR and initial hydration, always use Arabic to prevent mismatches
  const currentLanguage = isHydrated && context ? context.language : "ar";
  const isRTL = isHydrated && context ? context.isRTL : true;

  return {
    t: translations[currentLanguage],
    language: currentLanguage,
    isRTL,
    setLanguage: context?.setLanguage || (() => {}),
  };
};
