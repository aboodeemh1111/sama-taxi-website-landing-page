"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "./LanguageContext";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};
