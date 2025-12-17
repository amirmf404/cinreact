import { createBrowserRouter } from "react-router";
import { UserModel } from "./models/UserModel";
import { CinRouterBuilder } from "cinreact";

function routerBuilder() {
  const applicationRoutes = [
    UserModel,

    // { label: "test ", Component: testCom, path: "test" },
    // { index: true, Component: App, path: "/" },
  ];

  const routes = createBrowserRouter(
    CinRouterBuilder({
      routesItem: applicationRoutes,
      basePath: "/",
    })
  );

  console.log(JSON.stringify(routes, null, 2));

  return { routes };
}

const { routes } = routerBuilder();

export { routes };
