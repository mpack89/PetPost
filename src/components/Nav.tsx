import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ImageIcon from "@mui/icons-material/Image";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from "react-router-dom";
import { PlayCircle, AccountCircle, Home } from "@mui/icons-material";
import { useState } from "react";
import Settings from "./Settings";

function Nav({ setAutoplay, setSounds }) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [settingsAnchorEl, setSettingsAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [page, setPage] = useState("");

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSettingsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSettingsAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 0 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pet Post
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="settings"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleSettingsMenu}
              >
                <SettingsIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <NavLink
                  to="/Home"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                </NavLink>
                <NavLink
                  to="/Profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </NavLink>
                <NavLink
                  to="/Photo"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem onClick={handleClose}>Photos</MenuItem>
                </NavLink>
                <NavLink
                  to="/Video"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem onClick={handleClose}>Videos</MenuItem>
                </NavLink>
              </Menu>
              <Menu
                id="settings-menu"
                anchorEl={settingsAnchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(settingsAnchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Settings setAutoplay={setAutoplay} setSounds={setSounds} />
                </MenuItem>
              </Menu>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                component={NavLink}
                to="/Photo"
              >
                <ImageIcon />
              </IconButton>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                component={NavLink}
                to="/Video"
              >
                <PlayCircle />
              </IconButton>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                component={NavLink}
                to="/Profile"
              >
                <AccountCircle />
              </IconButton>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                component={NavLink}
                to="/Home"
              >
                <Home />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Typography
        variant="h6"
        component="div"
        paddingRight={10}
        textAlign={"center"}
      >
        {page}
      </Typography>
    </Box>
  );
}

export default Nav;
