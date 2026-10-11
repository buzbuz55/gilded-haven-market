import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { setTranslateCookie, loadTranslator } from "@/components/LanguageSwitcher";

export const PAGE_LANGS = ["es", "fr", "ar", "zh-CN", "hi"];

// Every page also lives at /es/..., /fr/... etc. and opens in that language.
const LangGate = ({ lang }: { lang: string }) => {
  useEffect(() => {
    if (localStorage.getItem("luxe-lang") !== lang || !document.cookie.includes(`googtrans=/en/${lang}`)) {
      localStorage.setItem("luxe-lang", lang);
      setTranslateCookie(lang);
      window.location.reload();
      return;
    }
    loadTranslator();
  }, [lang]);
  return <Outlet />;
};
export default LangGate;
