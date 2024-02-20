import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Photo from "./components/Photopage/Photo";
import Profile from "./components/Profilepage/Profile";
import { Video } from "./components/Video";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import data from "./components/Profilepage/data.json";
import photodata from "./components/photodata.json";

function App() {
  const localStorageData = localStorage.getItem("UPDATE_PROFILE");
  useEffect(() => {
    if (!localStorageData)
      localStorage.setItem("UPDATE_PROFILE", JSON.stringify(data.profile));
  }, []);

  const photoStorageData = localStorage.getItem("PHOTO_DATA");
  useEffect(() => {
    if (!photoStorageData)
      localStorage.setItem("PHOTO_DATA", JSON.stringify(photodata.photos));
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
          <Route path="/Photo" element={<Photo />} />
          <Route path="/Video" element={<Video />} />
        </Routes>
      </Grid>
    </div>
  );
}

export default App;
