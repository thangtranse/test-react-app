import { Outlet } from "react-router-dom";
import MenuComponent from "../components/menu";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import RouterMenu from "../router";

function BasicLayout() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} lg={3}>
          <Paper style={{ position: "fixed", width: "25%" }}>
            <MenuComponent data={RouterMenu.routes} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={9} lg={9}>
          <div style={{ margin: 30, padding: 30, border: "1px solid pink" }}>
            <Outlet />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default BasicLayout;
