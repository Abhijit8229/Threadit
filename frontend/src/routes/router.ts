import { createBrowserRouter } from "react-router";
import App from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
]);
export default router;