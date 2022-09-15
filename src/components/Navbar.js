import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { IoIosBed } from "react-icons/io";
import { TbPlaneInflight } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";

const settings = ["Saved", "Logout"];

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignin = () => {
    navigate("/signin");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#003580" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
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
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Button color="inherit" onClick={handleSignin}>
            Sign In
          </Button>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
