// src/router/utils.ts
import { getCinMetaData, type CinModel } from "cints-core";
import {
  CinModelLike,
  CinRouterGroup,
  RouterBuilderItem,
} from "./CinRouterTypes";

export function isCinRouterGroup(
  value: RouterBuilderItem
): value is CinRouterGroup {
  return (
    typeof value === "object" &&
    value !== null &&
    "path" in value &&
    "children" in value
  );
}

export function isRouteObject(
  value: RouterBuilderItem
): value is import("react-router-dom").RouteObject {
  return (
    typeof value === "object" &&
    value !== null &&
    ("element" in value || "index" in value)
  );
}

export function resolveModel(item: CinModelLike): CinModel {
  if (typeof item === "function") {
    // class
    if (/^class\s/.test(item.toString())) {
      return new (item as new () => CinModel)();
    }
    // factory
    return (item as () => CinModel)();
  }
  return item;
}

export function isCinModelLike(value: unknown): value is CinModelLike {
  try {
    const model =
      typeof value === "function" ? resolveModel(value as any) : value;
    return getCinMetaData(model as CinModel) !== undefined;
  } catch {
    return false;
  }
}
