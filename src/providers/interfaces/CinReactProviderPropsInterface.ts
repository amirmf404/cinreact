import type { APIOptions } from "primereact/api";
import type { Component, ReactNode } from "react";

export interface CinReactProviderPropsInterface {
  children?: ReactNode;

  theme?: unknown;
  primeReactConfig?: Partial<APIOptions>;

  translateMessages?: {
    fa?: Record<string, string>;
    en?: Record<string, string>;
  };

  pageLayout?: React.ComponentType;
  fileDataProvider?: ReactNode;
}
