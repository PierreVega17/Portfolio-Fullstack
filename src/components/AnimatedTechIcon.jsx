import { motion } from 'framer-motion';

export default function AnimatedTechIcon({ src, alt, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ scale: 1.15, boxShadow: '0 4px 24px #1976d2' }}
      transition={{ duration: 0.5, type: 'spring' }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 100, cursor: 'pointer' }}
    >
      <img src={src} alt={alt} style={{ width: 48, height: 48, marginBottom: 8 }} />
      <span>{label}</span>
    </motion.div>
  );
} 