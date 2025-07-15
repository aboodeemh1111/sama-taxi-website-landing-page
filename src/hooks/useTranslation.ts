import { useLanguage } from "@/contexts/LanguageContext";
import { ar } from "@/translations/ar";
import { en } from "@/translations/en";

const translations = {
  ar,
  en,
};

export const useTranslation = () => {
  const { language } = useLanguage();

  return {
    t: translations[language],
    language,
  };
};
