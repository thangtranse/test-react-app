import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";
import * as React from "react";
import { Link as RouterLink } from "react-router-dom";

const ListItemLink = React.memo((props) => {
  console.log("render-component-ListItemLink");
  const { to, open, name, ...other } = props;
  let icon = null;
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />;
  }
  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={name} />
        {icon}
      </ListItem>
    </li>
  );
});

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const LoopRenderListMenu = React.memo(({ data }) => {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  if (data.children && data.children.length > 1) {
    return (
      <>
        <ListItemLink
          to={data.path}
          name={data.name}
          open={open}
          onClick={handleClick}
        />
        <Collapse component="li" in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {data.children.map((x, i) => {
              let path = data.path + `/` + x.path;
              return (
                <LoopRenderListMenu
                  key={`list-children-${i}`}
                  data={{ ...x, path: path }}
                />
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }
  if (data.path && data.name)
    return <ListItemLink to={data.path} name={data.name} />;
});

LoopRenderListMenu.propTypes = {
  data: PropTypes.object.isRequired,
};

function Menu({ data }) {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        mt: 1,
      }}
      component="nav"
      aria-label="menu folders"
    >
      <List>
        {data.map((x, i) => (
          <LoopRenderListMenu key={`list-children-${i}`} data={x} />
        ))}
      </List>
    </Box>
  );
}

export default React.memo(Menu);
