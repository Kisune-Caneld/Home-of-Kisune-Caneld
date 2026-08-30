export const locales = ["vn", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "vn";

export const dictionaries = {
  vn: () => import("@/messages/vn.json").then((m) => m.default),
  en: () => import("@/messages/en.json").then((m) => m.default),
};

export const hasLocale = (locale: string): locale is Locale =>
  locales.includes(locale as Locale);

export const getDictionary = async (locale: Locale) => {
  switch (locale) {
    case "en":
      return dictionaries.en();
    case "vn":
    default:
      return dictionaries.vn();
  }
};
