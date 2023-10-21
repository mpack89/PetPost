import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Friend from "./components/Friend";
import Messages from "./components/Messages";
import Photo from "./components/Photo";
import Profile from "./components/Profilepage/Profile";
import Video from "./components/Video";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import data from "./components/Profilepage/data.json";

function App() {
  const localStorageData = localStorage.getItem("UPDATE_PROFILE");
  useEffect(() => {
    if (!localStorageData)
      localStorage.setItem("UPDATE_PROFILE", JSON.stringify(data.profile));
  }, []);

  return (
    <div>
      <Grid>
        <Nav />
      </Grid>
      <Grid>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Photo" element={<Photo />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/Friend" element={<Friend />} />
        </Routes>
      </Grid>
    </div>
  );
}

export default App;
