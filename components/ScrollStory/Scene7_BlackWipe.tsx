"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface Scene7Props {
  scrollYProgress: MotionValue<number>;
}

export default function Scene7_BlackWipe({ scrollYProgress }: Scene7Props) {
  // Wipe from right to left
  const wipeX = useTransform(scrollYProgress, [0.79, 0.84], ["100%", "0%"]);
  const sceneOpacity = useTransform(scrollYProgress, [0.79, 0.8], [0, 1]);

  return (
    <motion.div
      className="absolute inset-0 bg-black"
      style={{
        x: wipeX,
        opacity: sceneOpacity,
        zIndex: 95,
      }}
    >
      {/* Subtle edge glow effect during wipe */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-blue-500/30 to-transparent" />
    </motion.div>
  );
}
