import { useMemo } from "react";
import { CinReactContext } from "./CinReactContext";
import { I18nextProvider } from "react-i18next";
import { PrimeReactProvider } from "primereact/api";
import defaultMessages from "../i18n/messages";
import { createI18nInstance } from "../i18n/createI18nInstance";
import type { CinReactProviderPropsInterface } from "./interfaces/CinReactProviderPropsInterface";
import { RouterProvider } from "react-router";

export function CinReactProvider({
  // children,
  translateMessages,
  primeReactConfig,
  pageLayout,
}: // fileDataProvider,
CinReactProviderPropsInterface) {
  console.log("init app");

  const messages = useMemo(
    () => ({
      fa: { ...defaultMessages.fa, ...(translateMessages?.fa ?? {}) },
      en: { ...defaultMessages.en, ...(translateMessages?.en ?? {}) },
    }),
    [translateMessages]
  );

  const i18n = useMemo(() => createI18nInstance(messages), [messages]);

  return (
    <CinReactContext.Provider value={{ pageLayout }}>
      <PrimeReactProvider value={primeReactConfig}>
        <I18nextProvider i18n={i18n}>
          {/* {fileDataProvider} */}
        </I18nextProvider>
      </PrimeReactProvider>
    </CinReactContext.Provider>
  );
}
