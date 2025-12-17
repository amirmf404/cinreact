import { CinModel, getCinMetaData, isFunction } from "cints-core";
import { CinRouterGroup, RouterBuilderItem } from "./CinRouterTypes";
import { isCinModel } from "../utils";
import _ from "lodash";
import { CinIndexPage, CinViewPage } from "../pages";
import { isCinRouterGroup } from "./utils";
import { RouteObject } from "react-router";
import { ComponentType } from "react";

type RouteWithMeta = RouteObject & {
  name: string;
  label?: string;
  icon?: string;
};

export function CinRouterBuilder(options: {
  routesItem: RouterBuilderItem[];
  parentModel?: CinModel | typeof isFunction;
  basePath?: string;
}): RouteWithMeta[] {
  return options.routesItem.flatMap(
    (item: RouterBuilderItem): RouteWithMeta[] => {
      if (isCinModel(item) || isFunction(item)) {
        const isItemFunctionType = isFunction(item) ? true : false;

        const {
          modelName,
          customComponent,
          path: modelPath,
          icon: modelIcon,
          children,
          viewPageOptions,
        } = getCinMetaData(
          isFunction(item) ? (item as () => CinModel)() : item
        );

        let name = _.camelCase(modelName);
        if (options.parentModel) {
          const { modelName: parentModelName } = getCinMetaData(
            options.parentModel
          );

          name += parentModelName;
        }
        const path = (options.basePath ?? "") + modelPath.toLocaleLowerCase()!;

        const label = name;
        const icon = modelIcon ?? "";

        const props = {
          parentModel: options.parentModel,
          model: isItemFunctionType ? (item as () => CinModel)() : item,
        };

        const indexPageComponent = customComponent?.component ?? CinIndexPage;

        const indexPageProps = {
          ...(customComponent?.props ?? []),
          ...props,
        };
        const indexRoute = {
          path,
          name,
          label,
          icon,
          component: indexPageComponent,
          props: indexPageProps,
        };

        if (viewPageOptions.enable) {
          const viewPageComponent =
            viewPageOptions?.customComponent?.component ?? CinViewPage;

          // const viewPageProps = {
          //   ...viewPageOptions?.customComponent?.props,
          //   ...props,
          // };

          return [
            indexRoute,
            { 
              path: `${path}/:${name}id`,
              name: `${name}-id`,
              label,
              Component: viewPageComponent as ComponentType,
              // props: viewPageProps,
            },
            ...(children
              ? CinRouterBuilder({
                  routesItem: children,
                  parentModel: isItemFunctionType
                    ? (item as () => CinModel)()
                    : item,
                  basePath: `${path}/:${name}id/`,
                })
              : []),
          ];
        } else {
          return [indexRoute];
        }
      } else if (isCinRouterGroup(item)) {
        return [
          {
            path: `${options.basePath}${(item as CinRouterGroup)?.path}`,
            name: (item as CinRouterGroup)?.label,
            label: (item as CinRouterGroup)?.label,
            children: CinRouterBuilder({
              routesItem: (item as CinRouterGroup).children,
              // parentModel: item,
              basePath: "",
            }),
          },
        ];
      } else {
        return [item];
      }
    }
  );
}
