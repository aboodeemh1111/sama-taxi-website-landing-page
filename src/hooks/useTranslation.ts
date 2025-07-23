import { useLanguage } from "@/contexts/LanguageContext";
import { ar } from "@/translations/ar";
import { en } from "@/translations/en";
import { useEffect, useState } from "react";

const translations = {
  ar,
  en,
};

export const useTranslation = () => {
  const { language } = useLanguage();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // During SSR and initial hydration, always use Arabic to prevent mismatches
  const currentLanguage = isHydrated ? language : "ar";

  return {
    t: translations[currentLanguage],
    language: currentLanguage,
  };
};
