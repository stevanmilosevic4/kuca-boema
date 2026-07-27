"use client";

import { useEffect } from "react";

// Statički export ima jedan root layout (lang="sr"); na EN/RU stranicama
// ovim postavljamo ispravan jezik dokumenta posle hidratacije.
export default function SetLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = "sr";
    };
  }, [lang]);

  return null;
}
