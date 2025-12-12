import { Component, createContext, useContext } from "react";
import type { CinReactPluginProps } from "./interfaces/CinReactPluginProps";
import i18next, { i18n as i18nType } from "i18next";

const CinReactPluginContext = createContext<{
  i18n: i18nType | null;
  theme: unknown;
  pageLayout: Component | null;
}>({
  i18n: null,
  theme: null,
  pageLayout: null,
});

export function CinReactPlugin({
  primeComponents,
  translations,
  fileDataProvider,
  pageLayout,
  theme,
  children,
}): CinReactPluginProps {
  const i18n = i18next.createInstance(); // Create an i18n instance
  i18n.init({
    lng: "fa",
    fallbackLng: "en",
    resources: {
      fa: {
        /*TODO  ...translations */
      },
      en: {
        /*TODO ...translations */
      },
      ...translations,
    },
  });

  return (
    <CinReactPluginContext.Provider value={{ i18n, theme, pageLayout }}>
      {children}
    </CinReactPluginContext.Provider>
  );
}

export const useCinReactPlugin = () => {
  return useContext(CinReactPluginContext);
};
