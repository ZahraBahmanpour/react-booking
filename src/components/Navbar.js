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
import { UseAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user, signOut } = UseAuthContext();

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

  const handleSignout = () => {
    signOut();
    handleCloseUserMenu();
  };

  const handleFavorites = () => {
    navigate("/");
    handleCloseUserMenu();
  };
  console.log(user);
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
          {user && user.userInfo ? (
            <Tooltip title={user.userInfo.displayName}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.userInfo.displayName}>
                  {user.userInfo.displayName && user.userInfo.displayName[0]}
                </Avatar>
              </IconButton>
            </Tooltip>
          ) : (
            <Button color="inherit" onClick={handleSignin}>
              Sign In
            </Button>
          )}
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
            <MenuItem key={"favorites"}>
              <Typography textAlign="center" onClick={handleFavorites}>
                Favorites
              </Typography>
            </MenuItem>
            <MenuItem key={"signout"} onClick={handleSignout}>
              <Typography textAlign="center">Sign Out</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
