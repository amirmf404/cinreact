import { CinModel, getCinMetaData } from "cints-core";
import { RouterBuilderItemType } from "../router/types/RouterBuilderItemType";
import { CinRouterGroupInterface } from "../router/interfaces/CinRouterGroupInterface";

export function isCinRouterGroup(
  value: RouterBuilderItemType
): value is CinRouterGroupInterface {
  return (
    typeof value === "object" &&
    value !== null &&
    "label" in value &&
    "icon" in value &&
    "children" in value
  );
}

export function isCinModel(value: RouterBuilderItemType): value is CinModel {
  try {
    return (
      typeof value === "object" && getCinMetaData(value as CinModel) != null
    );
  } catch {
    return false;
  }
}
