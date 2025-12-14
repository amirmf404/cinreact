import type { RouteObject } from "react-router-dom";
import { getCinMetaData } from "cints-core";
import { createElement } from "react";
import _ from "lodash";

import {
  isCinRouterGroup,
  isRouteObject,
  isCinModelLike,
  resolveModel,
} from "./utils";
import { CinIndexPage, CinViewPage } from "../pages";
import { CinRouterBuilderPages, RouterBuilderItem } from "./CinRouterTypes";
import CinNotFoundPage from "../pages/CinNotFoundPage";

interface Options {
  routesItem: RouterBuilderItem[];
  pages?: CinRouterBuilderPages;
}

export function CinRouterBuilder(options: Options): RouteObject[] {
  const { routesItem, pages = {} } = options;

  const IndexPage = pages.IndexPage ?? CinIndexPage;
  const ViewPage = pages.ViewPage ?? CinViewPage;
  const NotFoundPage = pages.NotFoundPage ?? CinNotFoundPage;

  const routes = routesItem.flatMap((item): RouteObject[] => {
    if (isRouteObject(item)) {
      return [item];
    }

    if (isCinRouterGroup(item)) {
      return [
        {
          path: item.path,
          children: CinRouterBuilder({
            routesItem: item.children,
            pages,
          }),
        },
      ];
    }

    if (isCinModelLike(item)) {
      const model = resolveModel(item);
      const meta = getCinMetaData(model);
      const name = _.camelCase(meta.modelName);

      const route: RouteObject = {
        path: meta.path.toLowerCase(),
        element: createElement(IndexPage, { model }),
      };

      if (meta.viewPageOptions?.enable) {
        route.children = [
          {
            index: true,
            element: createElement(IndexPage, { model }),
          },
          {
            path: `:${name}id`,
            element: createElement(ViewPage, { model }),
          },
        ];
      }

      return [route];
    }

    return [];
  });

  routes.push({
    path: "*",
    element: createElement(NotFoundPage),
  });

  return routes;
}
