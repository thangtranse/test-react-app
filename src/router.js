import { createBrowserRouter } from "react-router-dom";

import BasicLayout from "./layouts/basicLayout";

import Home from "./pages/Home";
import OrialTest from "./pages/OrialTest";

import Hook from "./pages/reacts/Hook";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/orial-test",
    element: <OrialTest />,
  },
  {
    path: "/react",
    element: <BasicLayout />,
    children: [
      {
        path: "",
        element: <Hook />,
      },
    ],
  },
]);
