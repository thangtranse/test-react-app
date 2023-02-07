import React, { memo } from "react";

function ButtonComponent({ onClickCount, children }) {
  console.log("ButtonComponent Re-render");
  return <button onClick={onClickCount}>{children}</button>;
}

export default memo(ButtonComponent);
