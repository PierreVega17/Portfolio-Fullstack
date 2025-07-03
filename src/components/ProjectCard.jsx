import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import useThemeStore from '../store/useThemeStore.js';

export default function ProjectCard({ proyecto }) {
  const darkMode = useThemeStore((state) => state.darkMode);
  return (
    <Card sx={{ width: '100%', maxWidth: 700, m: '0 auto 2rem auto', boxShadow: 4, background: darkMode ? '#232323' : '#fff', color: darkMode ? '#f2f2f2' : '#222' }}>
      <CardActionArea href={proyecto.link} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'stretch' }}>
        <CardMedia
          component="img"
          sx={{ width: { xs: '100%', sm: 220 }, height: 200, objectFit: 'cover', borderRadius: { sm: '4px 0 0 4px', xs: '4px 4px 0 0' } }}
          image={proyecto.imagen}
          alt={proyecto.nombre}
        />
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: darkMode ? '#fff' : '#222' }}>
              {proyecto.nombre}
            </Typography>
            <Typography variant="body2" color={darkMode ? 'grey.400' : 'text.secondary'}>
              {proyecto.descripcion}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap' }}>
              {proyecto.tecnologias.map((tec) => (
                <Chip key={tec} label={tec} size="small" sx={{ bgcolor: darkMode ? '#444' : '#e0e0e0', color: darkMode ? '#fff' : '#222' }} />
              ))}
            </Stack>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
} 