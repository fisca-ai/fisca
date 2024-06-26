import { ui, defaultLang, showDefaultLang, routes } from "@/i18n/ui";

export function useTranslations(lang: string) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: string) {
  return function translatePath(path: string, l: string = lang) {
    const pathName = path.replace(/\//g, "");
    const hasTranslation =
      defaultLang !== l &&
      routes[l] !== undefined &&
      routes[l][pathName] !== undefined;
    const translatedPath = hasTranslation ? "/" + routes[l][pathName] : path;

    return !showDefaultLang && l === defaultLang
      ? translatedPath
      : translatedPath == "/"
        ? `/${l}`
        : `/${l}${translatedPath}`;
  };
}
