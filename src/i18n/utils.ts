import { ui, defaultLang, showDefaultLang, routes } from "@/i18n/ui";

export function useTranslations(lang: string) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
