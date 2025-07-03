import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function InfiniteCarousel({ icons, speed = 40 }) {
  // Duplicamos los iconos para el efecto infinito
  const iconList = [...icons, ...icons];
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear',
        },
      },
    });
  }, [controls, speed]);

  return (
    <div style={{ overflow: 'hidden', width: '100%', maxWidth: 900, margin: '0 auto', padding: '1.5rem 0' }}>
      <motion.div
        style={{ display: 'flex', width: 'fit-content' }}
        animate={controls}
      >
        {iconList.map((icon, i) => (
          <motion.div
            key={icon.label + i}
            whileHover={{ scale: 1.18, boxShadow: '0 6px 32px #1976d2' }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 120, cursor: 'pointer', margin: '0 2.2rem' }}
          >
            <img src={icon.src} alt={icon.alt} style={{ width: 68, height: 68, marginBottom: 12 }} />
            <span style={{ fontSize: 18, fontWeight: 500 }}>{icon.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 