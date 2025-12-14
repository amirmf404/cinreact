import { CinModel } from "cints-core";
import { RouteObject } from "react-router";
import { CinRouterGroupInterface } from "../interfaces/CinRouterGroupInterface";

export type RouterBuilderItemType =
  | CinModel
  | RouteObject
  | CinRouterGroupInterface
  | (() => CinModel);
