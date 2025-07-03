import { useEffect, useState } from 'react';
import NavbarToggle from './NavbarToggle.jsx';
import useThemeStore from '../store/useThemeStore.js';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

export default function Navbar() {
  const darkMode = useThemeStore((state) => state.darkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);
  const hydrated = useThemeStore((state) => state.hydrated);
  const hydrate = useThemeStore((state) => state.hydrate);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    if (hydrated) {
      if (darkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
  }, [darkMode, hydrated]);

  if (!hydrated) return null;

  return (
    <nav style={{ background: darkMode ? '#111' : '#fff', padding: '0.5rem 1.5rem', fontFamily: 'Segoe UI, Arial, sans-serif', boxShadow: darkMode ? '0 2px 8px #111' : '0 2px 8px #eee', position: 'sticky', top: 0, zIndex: 100 }}>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
        <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', listStyle: 'none', margin: 0, padding: 0, fontSize: '1.1rem' }}>
          <li><a href="/#home" style={{ color: darkMode ? '#fff' : '#222', textDecoration: 'none', fontWeight: 'bold' }}>Inicio</a></li>
          <li><a href="/#proyectos" style={{ color: darkMode ? '#fff' : '#222', textDecoration: 'none', fontWeight: 'bold' }}>Proyectos</a></li>
          <li><a href="/cv" style={{ color: darkMode ? '#fff' : '#222', textDecoration: 'none', fontWeight: 'bold' }}>CV</a></li>
          <li><a href="/#contacto" style={{ color: darkMode ? '#fff' : '#222', textDecoration: 'none', fontWeight: 'bold' }}>Contáctame</a></li>
          <li><NavbarToggle onToggle={toggleDarkMode} darkMode={darkMode} /></li>
        </ul>
      </Box>
      {/* Menú móvil */}
      <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#222', fontSize: '1.2rem' }}>Jean Pierre</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <NavbarToggle onToggle={toggleDarkMode} darkMode={darkMode} />
          <IconButton onClick={() => setOpen(true)} sx={{ color: darkMode ? '#fff' : '#222' }}>
            <MenuIcon />
          </IconButton>
        </div>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              backgroundColor: darkMode ? '#181818' : '#fff',
              color: darkMode ? '#fff' : '#222',
            }
          }}
        >
          <Box sx={{ width: 220, pt: 2 }} role="presentation" onClick={() => setOpen(false)}>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/#home">
                  <ListItemText primary="Inicio" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/#proyectos">
                  <ListItemText primary="Proyectos" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/cv">
                  <ListItemText primary="CV" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/#contacto">
                  <ListItemText primary="Contáctame" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
      <style>{`
        nav, ul, li, a { font-family: 'Segoe UI', Arial, sans-serif; }
        @media (max-width: 900px) {
          nav { padding: 0.5rem 0.5rem; }
        }
      `}</style>
    </nav>
  );
} 