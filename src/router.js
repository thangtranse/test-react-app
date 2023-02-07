// REACT
import React from "react";
import { createBrowserRouter } from "react-router-dom";
// COMPONENT
import BasicLayout from "./layouts/basicLayout";
import Home from "./pages/Home";
import MUIPage from "./pages/mui";
import StyleCustomPage from "./pages/mui/StyleCustom";
import OrialTest from "./pages/OrialTest";
import ReactPage from "./pages/reacts";
import CustomHookPage from "./pages/reacts/CustomHook";
import HOCPage from "./pages/reacts/HOC";
import Hook from "./pages/reacts/Hook";
import Memo from "./pages/reacts/Memo";
import Redux from "./pages/reacts/Redux";
import StatePropPage from "./pages/reacts/StateProp";
import CallBack from "./pages/reacts/UseCallBack";
import UseContextPage from "./pages/reacts/UseContext";
import UseMemoPage from "./pages/reacts/UseMemo";
import UseReducer from "./pages/reacts/UseReducer";

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
        element: <ReactPage />,
      },
      {
        path: "state-prop",
        name: "State and Prop",
        element: <StatePropPage />,
      },
      {
        path: "h-o-c",
        name: "React Higher Order Component (HOC)",
        element: <HOCPage />,
      },
      {
        path: "custom-hook",
        name: "Custom Hook",
        element: <CustomHookPage />,
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
        name: "memo (HOC)",
        element: <Memo />,
      },
      {
        path: "useMemo",
        name: "useMemo (Hook)",
        element: <UseMemoPage />,
      },
      {
        path: "useCallBack",
        name: "useCallBack",
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
