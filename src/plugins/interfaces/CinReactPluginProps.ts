import type { Component, ReactNode } from "react";

export interface CinReactPluginProps {
  //   primeComponents?: any;
  translations?: Record<string, { [key: string]: string }>;
  //   fileDataProvider?: any;
  pageLayout?: Component;
  theme?: unknown;
  children: ReactNode;
}
