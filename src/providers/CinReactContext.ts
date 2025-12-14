import { createContext } from "react";
import { CinContextValueInterface } from "./interfaces/CinContextValueInterface";

export const CinReactContext = createContext<CinContextValueInterface | null>(
  null
);
