import React, { useState } from "react";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";

function Settings({ setAutoplay, setSounds }) {
  const [sounds, setLocalSounds] = useState(false);

  const handleAutoplayChange = () => {
    setAutoplay((prevAutoplay) => !prevAutoplay);
  };

  const handleSoundsChange = (event) => {
    setLocalSounds(event.target.checked);
    setSounds(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch onChange={handleAutoplayChange} />}
        label="Autoplay"
      />
      <FormControlLabel
        control={<Switch checked={sounds} onChange={handleSoundsChange} />}
        label="Sounds"
      />
    </FormGroup>
  );
}

export default Settings;
