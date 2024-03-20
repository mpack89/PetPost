import React, { useState } from 'react';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';

  function Settings({ setAutoplay }) {
    const [sounds, setSounds] = useState(false);
  
    const handleAutoplayChange = () => {
      setAutoplay((prevAutoplay) => !prevAutoplay);
    };
  
    const handleSoundsChange = () => {
      setSounds(!sounds);
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
