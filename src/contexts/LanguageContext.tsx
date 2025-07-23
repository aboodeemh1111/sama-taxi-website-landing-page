"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("ar");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Only run on client side after hydration
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage && (savedLanguage === "ar" || savedLanguage === "en")) {
        setLanguage(savedLanguage);
      }
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    // Save language to localStorage and update document
    if (typeof window !== "undefined" && isInitialized) {
      localStorage.setItem("language", language);
      document.documentElement.lang = language;
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }
  }, [language, isInitialized]);

  const setLanguageHandler = (lang: Language) => {
    setLanguage(lang);
  };

  const isRTL = language === "ar";

  // Prevent hydration mismatch by always providing the same initial state
  // and only allowing language changes after hydration
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: isInitialized ? setLanguageHandler : () => {},
        isRTL,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
