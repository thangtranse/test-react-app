import { createBrowserRouter } from "react-router-dom";

import BasicLayout from "./layouts/basicLayout";

import Home from "./pages/Home";
import OrialTest from "./pages/OrialTest";

import MUIPage from "./pages/mui";
import StyleCustomPage from "./pages/mui/StyleCustom";

import Hook from "./pages/reacts/Hook";
import StatePropPage from "./pages/reacts/StateProp";
import Redux from "./pages/reacts/Redux";
import Memo from "./pages/reacts/Memo";
import UseReducer from "./pages/reacts/UseReducer";
import CallBack from "./pages/reacts/CallBack";
import UseContextPage from "./pages/reacts/UseContext";

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
        path: "state-prop",
        name: "State and Prop",
        element: <StatePropPage />,
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
      {
        path: "memo",
        name: "Memo",
        element: <Memo />,
      },
      {
        path: "callBack",
        name: "CallBack",
        element: <CallBack />,
      },
      {
        path: "useReducer",
        name: "useReducer()",
        element: <UseReducer />,
      },
      {
        path: "useContext",
        name: "useContext()",
        element: <UseContextPage />,
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
