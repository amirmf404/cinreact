import { createBrowserRouter } from "react-router";
import { UserModel } from "./models/UserModel";
import { CinRouterBuilder } from "cinreact";
import testCom from "./components/test";
import PageNotFound from "./components/PageNotFound";
import App from "./App";

function routerBuilder() {
  const applicationRoutes = [
    UserModel,

    // { label: "test ", Component: testCom, path: "test" },
    // { index: true, Component: App, path: "/" },
  ];

  const routes = createBrowserRouter(
    CinRouterBuilder({
      routesItem: applicationRoutes,
    })
  );

  console.log(JSON.stringify(routes, null, 2));

  return { routes };
}

const { routes } = routerBuilder();

export { routes };
