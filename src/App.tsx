import { Routes, Route } from "react-router-dom";
import Homes from "./components/Homes";
import Nav from "./components/Nav";
import Friend from "./components/Friend";
import Messages from "./components/Messages";
import Photo from "./components/Photo";
import Profile from "./components/Profile";
import Video from "./components/Video";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/Homes" element={<Homes />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/Photo" element={<Photo />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Friend" element={<Friend />} />
      </Routes>
    </div>
  );
}

export default App;
