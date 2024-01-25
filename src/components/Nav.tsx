import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import {
  PlayCircle,
  CameraAlt,
  AccountCircle,
  Home,
} from "@mui/icons-material";
import { useState } from "react";

function Nav() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [page, setPage] = useState("");

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                component={NavLink}
                to="/Photo"
              >
                <CameraAlt />
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
                  style={({ isActive }) => ({
                    color: isActive ? "grey" : "black",
                  })}
                >
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                </NavLink>
                <NavLink
                  to="/Profile"
                  style={({ isActive }) => ({
                    color: isActive ? "grey" : "black",
                  })}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </NavLink>
                <NavLink
                  to="/Photo"
                  style={({ isActive }) => ({
                    color: isActive ? "grey" : "black",
                  })}
                >
                  <MenuItem onClick={handleClose}>Photos</MenuItem>
                </NavLink>
                <NavLink
                  to="/Video"
                  style={({ isActive }) => ({
                    color: isActive ? "grey" : "black",
                  })}
                >
                  <MenuItem onClick={handleClose}>Videos</MenuItem>
                </NavLink>
              </Menu>
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
