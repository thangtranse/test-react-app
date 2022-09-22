import { Outlet } from "react-router-dom";

function BasicLayout({ child }) {
  return (
    <>
      demo git cli
      <Outlet />
    </>
  );
}

export default BasicLayout;
