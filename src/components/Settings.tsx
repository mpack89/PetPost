import React, { useState } from 'react';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';

function Settings() {
  const [autoplay, setAutoplay] = useState(false);
  const [sounds, setSounds] = useState(false);

  const handleAutoplayChange = () => {
    setAutoplay(!autoplay);
  };

  const handleSoundsChange = () => {
    setSounds(!sounds);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={autoplay} onChange={handleAutoplayChange} />}
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
