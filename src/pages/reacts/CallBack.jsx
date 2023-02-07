import React from "react";
import {
  CountComponent,
  CountComponentUseCallback,
} from "../../components/callback/count";

function CallBack() {
  return (
    <>
      <CountComponent />
      <CountComponentUseCallback />
    </>
  );
}

export default CallBack;
