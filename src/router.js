import { createBrowserRouter } from "react-router-dom";

import BasicLayout from "./layouts/basicLayout";

import Home from "./pages/Home";
import OrialTest from "./pages/OrialTest";

import MUIPage from "./pages/mui";
import StyleCustomPage from "./pages/mui/StyleCustom";

import Hook from "./pages/reacts/Hook";
import Redux from "./pages/reacts/Redux";

export default createBrowserRouter([
  {
    path: "/",
    name: "Trang chủ",
    element: <BasicLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/orial-test",
    name: "Orial Test",
    element: <BasicLayout />,
    children: [
      {
        path: "",
        element: <OrialTest />,
      },
    ],
  },
  {
    path: "/react",
    name: "React",
    element: <BasicLayout />,
    children: [
      {
        path: "",
        element: <></>,
      },
      {
        path: "hook",
        name: "Hook",
        element: <Hook />,
      },
      {
        path: "redux",
        name: "Redux",
        element: <Redux />,
      },
    ],
  },
  {
    path: "/mui",
    name: "Material UI",
    element: <BasicLayout />,
    children: [
      {
        path: "",
        element: <MUIPage />,
      },
      {
        path: "style",
        name: "Custom Style",
        element: <StyleCustomPage />,
      },
    ],
  },
]);
