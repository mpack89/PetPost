import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Friend from "./Friend";
import Messages from "./Messages";
import Photo from "./Photo";
import Profile from "./Profile";
import Video from "./Video";
import Homes from "./Homes";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {
  Message,
  People,
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            paddingRight={50}
          >
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
                onClick={() => setPage("Photos")}
              >
                <CameraAlt />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={() => setPage("Videos")}
              >
                <PlayCircle />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={() => setPage("Messages")}
              >
                <Message />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={() => setPage("Friends")}
              >
                <People />
              </IconButton>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={() => setPage("Profile")}
              >
                <AccountCircle />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={() => setPage("Home")}
              >
                <Home />
              </IconButton>
              <BrowserRouter>
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
                    to="/Homes"
                    style={({ isActive }) => ({
                      color: isActive ? "grey" : "black",
                    })}
                  >
                    <MenuItem>Home</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/Profile"
                    style={({ isActive }) => ({
                      color: isActive ? "grey" : "black",
                    })}
                  >
                    <MenuItem>Profile</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/Messages"
                    style={({ isActive }) => ({
                      color: isActive ? "grey" : "black",
                    })}
                  >
                    <MenuItem>Messages</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/Photo"
                    style={({ isActive }) => ({
                      color: isActive ? "grey" : "black",
                    })}
                  >
                    <MenuItem>Photos</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/Video"
                    style={({ isActive }) => ({
                      color: isActive ? "grey" : "black",
                    })}
                  >
                    <MenuItem>Videos</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/Friend"
                    style={({ isActive }) => ({
                      color: isActive ? "grey" : "black",
                    })}
                  >
                    <MenuItem>Friends</MenuItem>
                  </NavLink>
                </Menu>

                <Routes>
                  <Route path="/Homes" element={<Homes />} />
                  <Route path="/Profile" element={<Profile />} />
                  <Route path="/Messages" element={<Messages />} />
                  <Route path="/Photo" element={<Photo />} />
                  <Route path="/Video" element={<Video />} />
                  <Route path="/Friend" element={<Friend />} />
                </Routes>
              </BrowserRouter>
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
