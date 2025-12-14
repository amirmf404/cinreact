import i18next, { type i18n } from "i18next";
import { initReactI18next } from "react-i18next";

export function createI18nInstance(messages: {
  en: Record<string, string>;
  fa: Record<string, string>;
}): i18n {
  const instance = i18next.createInstance();

  instance.use(initReactI18next).init({
    resources: messages,
    lng: "fa",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

  return instance;
}
