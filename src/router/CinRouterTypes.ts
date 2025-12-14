import type { RouteObject } from "react-router-dom";
import type { CinModel } from "cints-core";
import type { ComponentType } from "react";

export interface CinRouterGroup {
  path: string;
  children: RouterBuilderItem[];
}

export type CinModelLike = CinModel | (() => CinModel) | (new () => CinModel);

export type RouterBuilderItem = CinModelLike | CinRouterGroup | RouteObject;

export interface CinRouterBuilderPages {
  IndexPage?: ComponentType<{ model: CinModel }>;
  ViewPage?: ComponentType<{ model: CinModel }>;
  NotFoundPage?: ComponentType;
}
