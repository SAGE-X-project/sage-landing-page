"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Gateway from "./elements/Gateway";
import Hacker from "./elements/Hacker";
import Packet from "./elements/Packet";

interface Scene4Props {
  scrollYProgress: MotionValue<number>;
}

export default function Scene4_GatewayHacker({ scrollYProgress }: Scene4Props) {
  const sceneProgress = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const sceneOpacity = useTransform(scrollYProgress, [0.4, 0.42, 0.53, 0.55], [0, 1, 1, 0]);

  // Gateway - appears and stays center
  const gatewayScale = useTransform(sceneProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.9]);
  const gatewayY = useTransform(sceneProgress, [0, 0.3], [150, 0]);
  const gatewayOpacity = useTransform(sceneProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.8]);

  // Packet - enters from left, slows down at center
  const packetX = useTransform(sceneProgress, [0, 0.4, 0.6, 1], [-500, -100, 0, 100]);
  const packetY = useTransform(sceneProgress, [0, 0.3, 0.6, 1], [50, 0, 0, -20]);
  const packetScale = useTransform(sceneProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]);
  const packetOpacity = useTransform(sceneProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.6]);

  // Hacker - sneaks in from the side
  const hackerX = useTransform(sceneProgress, [0.3, 0.7, 1], [400, 120, 80]);
  const hackerY = useTransform(sceneProgress, [0.3, 0.5, 0.7], [100, 20, 0]);
  const hackerOpacity = useTransform(sceneProgress, [0.3, 0.5, 0.9, 1], [0, 1, 1, 0.8]);
  const hackerScale = useTransform(sceneProgress, [0.3, 0.6], [0.5, 1]);

  // Warning flash when hacker appears
  const warningOpacity = useTransform(sceneProgress, [0.5, 0.55, 0.6, 0.65], [0, 0.3, 0, 0.2]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{ opacity: sceneOpacity, zIndex: 75 }}
    >
      <div className="w-full h-full bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950 flex items-center justify-center overflow-hidden relative">

        {/* Warning Flash - Red Alert */}
        <motion.div
          className="absolute inset-0 bg-red-600/20"
          style={{ opacity: warningOpacity }}
        />

        {/* Background Network Grid */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Gateway Terminal - Center */}
        <motion.div
          className="absolute"
          style={{
            scale: gatewayScale,
            y: gatewayY,
            opacity: gatewayOpacity,
          }}
        >
          <Gateway />
        </motion.div>

        {/* Packet - Traveling through */}
        <motion.div
          className="absolute"
          style={{
            x: packetX,
            y: packetY,
            scale: packetScale,
            opacity: packetOpacity,
          }}
        >
          <Packet label="META GLASSES" />
        </motion.div>

        {/* Hacker - Sneaking in from the right */}
        <motion.div
          className="absolute"
          style={{
            x: hackerX,
            y: hackerY,
            scale: hackerScale,
            opacity: hackerOpacity,
          }}
        >
          <Hacker />
        </motion.div>

        {/* Title */}
        <motion.div
          className="absolute top-20 left-1/2 -translate-x-1/2 text-center"
          style={{ opacity: gatewayOpacity }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            게이트웨이에 도착했습니다
          </h2>
          <p className="text-lg text-gray-400 font-light">
            하지만 위험한 존재가 나타났습니다...
          </p>
        </motion.div>

        {/* Warning Text - appears when hacker shows up */}
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
          style={{ opacity: hackerOpacity }}
        >
          <div className="bg-red-900/80 px-6 py-3 rounded-lg border-2 border-red-500 shadow-2xl">
            <p className="text-sm font-bold text-red-200 tracking-wide flex items-center space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span>⚠️ 의심스러운 활동 감지됨</span>
            </p>
          </div>
        </motion.div>

        {/* Floating particles - darker/more ominous */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-400/10 rounded-full"
              style={{
                left: `${(i * 23 + 10) % 100}%`,
                top: `${(i * 31 + 20) % 100}%`,
              }}
              animate={{
                x: [0, -30, 0],
                y: [0, 30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + (i % 3),
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
