"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Router from "./elements/Router";
import Packet from "./elements/Packet";

interface Scene3Props {
  scrollYProgress: MotionValue<number>;
}

export default function Scene3_PacketJourney({ scrollYProgress }: Scene3Props) {
  const sceneProgress = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const sceneOpacity = useTransform(scrollYProgress, [0.25, 0.27, 0.38, 0.4], [0, 1, 1, 0]);

  // Background layer - slow parallax
  const bgX = useTransform(sceneProgress, [0, 1], [-100, 100]);
  const bgOpacity = useTransform(sceneProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  // Router - medium speed, scales up then down
  const routerScale = useTransform(sceneProgress, [0, 0.3, 0.7, 1], [0.5, 1.2, 1.2, 0.8]);
  const routerY = useTransform(sceneProgress, [0, 0.5, 1], [100, 0, -50]);
  const routerOpacity = useTransform(sceneProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Packet - fast movement, travels left to right
  const packetX = useTransform(sceneProgress, [0, 0.3, 0.7, 1], [-400, -50, 50, 400]);
  const packetY = useTransform(sceneProgress, [0, 0.3, 0.5, 0.7, 1], [0, -30, 0, -20, 0]);
  const packetRotate = useTransform(sceneProgress, [0, 0.5, 1], [0, 5, 0]);
  const packetScale = useTransform(sceneProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const packetOpacity = useTransform(sceneProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  // Network lines animation
  const lineOpacity = useTransform(sceneProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{ opacity: sceneOpacity, zIndex: 80 }}
    >
      <div className="w-full h-full bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 flex items-center justify-center overflow-hidden relative">

        {/* Background - Airport Silhouette (slow parallax) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ x: bgX, opacity: bgOpacity }}
        >
          <div className="absolute bottom-20 left-0 right-0 h-32 bg-gradient-to-t from-slate-800/40 to-transparent" />
        </motion.div>

        {/* Network Lines - Background layer */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: lineOpacity }}
        >
          <defs>
            <linearGradient id="networkLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Horizontal data flow lines */}
          <motion.line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="url(#networkLine)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.line
            x1="0"
            y1="45%"
            x2="100%"
            y2="45%"
            stroke="url(#networkLine)"
            strokeWidth="2"
            strokeDasharray="10 5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 0.2, ease: "easeInOut" }}
          />
          <motion.line
            x1="0"
            y1="55%"
            x2="100%"
            y2="55%"
            stroke="url(#networkLine)"
            strokeWidth="2"
            strokeDasharray="10 5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 0.4, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Router - Center, medium layer */}
        <motion.div
          className="absolute"
          style={{
            scale: routerScale,
            y: routerY,
            opacity: routerOpacity,
          }}
        >
          <Router />
        </motion.div>

        {/* Packet - Foreground, fast movement */}
        <motion.div
          className="absolute"
          style={{
            x: packetX,
            y: packetY,
            rotate: packetRotate,
            scale: packetScale,
            opacity: packetOpacity,
          }}
        >
          <Packet label="META GLASSES" />
        </motion.div>

        {/* Title */}
        <motion.div
          className="absolute top-20 left-1/2 -translate-x-1/2 text-center"
          style={{ opacity: routerOpacity }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            라우터를 통과합니다
          </h2>
          <p className="text-lg text-gray-400 font-light">
            패킷이 첫 번째 관문을 지나는 중...
          </p>
        </motion.div>

        {/* Floating particles for depth */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-blue-400/20 rounded-full"
              style={{
                left: `${(i * 19 + 15) % 100}%`,
                top: `${(i * 23 + 30) % 100}%`,
              }}
              animate={{
                x: [0, 50, 0],
                y: [0, -40, 0],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
