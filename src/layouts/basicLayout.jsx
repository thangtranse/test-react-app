import { Outlet } from "react-router-dom";

function BasicLayout({ child }) {
  return (
    <>
      <Outlet />
    </>
  );
}

export default BasicLayout;
