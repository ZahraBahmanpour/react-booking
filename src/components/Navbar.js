import { AppBar, Box, IconButton, Toolbar, Tooltip } from "@mui/material";
import { IoIosBed } from "react-icons/io";
import { TbPlaneInflight } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#003580" }}>
        <Toolbar>
          <NavLink
            to="/stays"
            style={({ isActive }) =>
              isActive ? { color: "#febb02" } : { color: "white" }
            }
          >
            <Tooltip title="Stays">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <IoIosBed />
              </IconButton>
            </Tooltip>
          </NavLink>
          <NavLink
            to="/flights"
            style={({ isActive }) =>
              isActive ? { color: "#febb02" } : { color: "white" }
            }
          >
            <Tooltip title="Flights">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <TbPlaneInflight />
              </IconButton>
            </Tooltip>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
