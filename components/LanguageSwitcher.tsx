"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="px-3 py-1 rounded-full border border-stone-300 text-stone-600 text-sm hover:bg-stone-100 transition-colors"
      aria-label="Switch language"
    >
      {language === "es" ? "EN" : "ES"}
    </button>
  );
}
