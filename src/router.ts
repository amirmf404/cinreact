import { createBrowserRouter } from "react-router";
import CinIndexPage from "./pages/CinIndexPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: CinIndexPage,
  },
]);

export default router;
