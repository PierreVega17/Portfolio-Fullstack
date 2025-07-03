import React from 'react';
import Switch from '@mui/material/Switch';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Stack from '@mui/material/Stack';

export default function NavbarToggle({ onToggle, darkMode }) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Brightness7Icon style={{ color: darkMode ? '#888' : '#fbc02d' }} />
      <Switch
        checked={darkMode}
        onChange={onToggle}
        color="default"
        inputProps={{ 'aria-label': 'toggle dark mode' }}
      />
      <DarkModeIcon style={{ color: darkMode ? '#90caf9' : '#888' }} />
    </Stack>
  );
} 