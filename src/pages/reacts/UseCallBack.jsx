import React from "react";
import {
  CountComponent,
  CountComponentUseCallback,
} from "../../components/callback/count";
import {
  CompareUseCallBackAndUseMemo,
  ExampleUseCallBackAndUseMemo,
} from "../../components/react";

function CallBack() {
  return (
    <>
      <CountComponent />
      <CountComponentUseCallback />

      <CompareUseCallBackAndUseMemo />
      <ExampleUseCallBackAndUseMemo />
    </>
  );
}

export default CallBack;
