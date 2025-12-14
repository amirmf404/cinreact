import { RouterBuilderItemType } from "../types/RouterBuilderItemType";

export interface CinRouterGroupInterface {
  path: string;
  label: string;
  children: RouterBuilderItemType[];
  icon?: string;
}
