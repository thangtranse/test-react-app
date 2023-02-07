import React from "react";
import { useScreenWidth } from "./useScreenWidth";

export default function withWidthScreenHook(Component) {
  return function (props) {
    const widthScreen = useScreenWidth();
    return <Component width={widthScreen} {...props} />;
  };
}
