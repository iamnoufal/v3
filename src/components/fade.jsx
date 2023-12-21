import { motion } from "framer-motion";

export default function Fade({ children }) {
  return (
    <motion.div
      initial={{ y: 70, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
}
