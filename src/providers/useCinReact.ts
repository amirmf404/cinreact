import { useContext } from "react";
import { CinReactContext } from "./CinReactContext";

export function useCinReact() {
  const ctx = useContext(CinReactContext);
  if (!ctx) {
    throw new Error("useCin must be used inside CinProvider");
  }
  return ctx;
}
