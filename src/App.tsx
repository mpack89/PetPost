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
import { useState } from "react";

function App() {
  const localStorageData = localStorage.getItem("UPDATE_PROFILE");
  useEffect(() => {
    if (!localStorageData)
      localStorage.setItem("UPDATE_PROFILE", JSON.stringify(data.profile));
  }, []);

  localStorage.setItem("PHOTO_DATA", JSON.stringify(photodata.photos));
  const [autoplay, setAutoplay] = useState(false);
  const [sounds, setSounds] = useState(false);

  return (
    <div>
      <Grid>
        <Nav setAutoplay={setAutoplay} setSounds={setSounds} />
      </Grid>
      <Grid>
        <Routes>
          <Route path="/Home" element={<Home sounds={sounds} />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Photo" element={<Photo sounds={sounds} />} />
          <Route
            path="/Video"
            element={<Video autoplay={autoplay} sounds={sounds} />}
          />
        </Routes>
      </Grid>
    </div>
  );
}

export default App;
