"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Packet from "./elements/Packet";
import Hacker from "./elements/Hacker";

interface Scene5Props {
  scrollYProgress: MotionValue<number>;
}

export default function Scene5_PacketSwap({ scrollYProgress }: Scene5Props) {
  const sceneProgress = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);
  const sceneOpacity = useTransform(scrollYProgress, [0.55, 0.57, 0.68, 0.7], [0, 1, 1, 0]);

  // Original packet - moves in, then swapped out
  const originalPacketX = useTransform(sceneProgress, [0, 0.3, 0.5, 0.7], [-200, -80, 0, 0]);
  const originalPacketY = useTransform(sceneProgress, [0, 0.3], [0, 0]);
  const originalPacketOpacity = useTransform(sceneProgress, [0, 0.2, 0.5, 0.6], [0, 1, 1, 0]);
  const originalPacketScale = useTransform(sceneProgress, [0, 0.3, 0.5, 0.6], [0.8, 1, 1, 0.5]);

  // Fake packet - appears and replaces original
  const fakePacketX = useTransform(sceneProgress, [0.5, 0.7, 1], [0, 0, 200]);
  const fakePacketY = useTransform(sceneProgress, [0.5, 0.6, 0.8], [100, 0, -50]);
  const fakePacketOpacity = useTransform(sceneProgress, [0.5, 0.6, 0.9, 1], [0, 1, 1, 0.8]);
  const fakePacketScale = useTransform(sceneProgress, [0.5, 0.7], [0.5, 1]);

  // Hacker - performs the swap
  const hackerX = useTransform(sceneProgress, [0, 0.4, 0.7, 1], [300, 100, 100, 120]);
  const hackerY = useTransform(sceneProgress, [0, 0.3], [50, 0]);
  const hackerOpacity = useTransform(sceneProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.7]);
  const hackerRotate = useTransform(sceneProgress, [0.4, 0.5, 0.6], [0, -10, 0]);

  // Flash effects during swap
  const swapFlashOpacity = useTransform(sceneProgress, [0.48, 0.52, 0.56], [0, 0.6, 0]);
  const glitchOpacity = useTransform(sceneProgress, [0.5, 0.52, 0.54, 0.56, 0.58], [0, 0.3, 0, 0.2, 0]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{ opacity: sceneOpacity, zIndex: 70 }}
    >
      <div className="w-full h-full bg-gradient-to-b from-red-950/40 via-slate-950 to-slate-950 flex items-center justify-center overflow-hidden relative">

        {/* Swap Flash Effect */}
        <motion.div
          className="absolute inset-0 bg-red-500"
          style={{ opacity: swapFlashOpacity }}
        />

        {/* Glitch Effect */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: glitchOpacity }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
               style={{ backgroundSize: '200% 100%', animation: 'slideGlitch 0.3s infinite' }} />
        </motion.div>

        {/* Danger Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="dangerGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#ef4444" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dangerGrid)" />
          </svg>
        </div>

        {/* Original Packet - legitimate */}
        <motion.div
          className="absolute"
          style={{
            x: originalPacketX,
            y: originalPacketY,
            opacity: originalPacketOpacity,
            scale: originalPacketScale,
          }}
        >
          <Packet label="META GLASSES" />
        </motion.div>

        {/* Fake Packet - malicious */}
        <motion.div
          className="absolute"
          style={{
            x: fakePacketX,
            y: fakePacketY,
            opacity: fakePacketOpacity,
            scale: fakePacketScale,
          }}
        >
          <div className="relative">
            <Packet label="FAKE DATA" className="opacity-90" />
            {/* Evil glow */}
            <div className="absolute inset-0 bg-red-500/20 rounded-lg blur-md animate-pulse" />
          </div>
        </motion.div>

        {/* Hacker - performing the swap */}
        <motion.div
          className="absolute"
          style={{
            x: hackerX,
            y: hackerY,
            opacity: hackerOpacity,
            rotate: hackerRotate,
          }}
        >
          <Hacker />
        </motion.div>

        {/* Title */}
        <motion.div
          className="absolute top-16 left-1/2 -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-2 tracking-tight">
            패킷이 바꿔치기 당했습니다
          </h2>
          <p className="text-lg text-gray-400 font-light">
            악의적인 공격자가 당신의 데이터를 조작했습니다
          </p>
        </motion.div>

        {/* Swap Animation Indicator */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ opacity: swapFlashOpacity }}
        >
          <div className="text-6xl font-bold text-red-500 animate-pulse">⚠️</div>
        </motion.div>

        {/* Warning Messages */}
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 space-y-3"
          style={{ opacity: fakePacketOpacity }}
        >
          <div className="bg-red-900/90 px-8 py-4 rounded-lg border-2 border-red-500 shadow-2xl">
            <p className="text-base font-bold text-red-200 tracking-wide text-center">
              🚨 데이터 무결성 위반 감지
            </p>
          </div>
          <div className="bg-slate-900/90 px-6 py-3 rounded border border-red-500/50 text-center">
            <p className="text-sm text-gray-300">
              원본: <span className="text-green-400 line-through">META GLASSES</span> →
              변조됨: <span className="text-red-400 font-bold">FAKE DATA</span>
            </p>
          </div>
        </motion.div>

        {/* Danger particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-500/20 rounded-full"
              style={{
                left: `${(i * 17 + 15) % 100}%`,
                top: `${(i * 29 + 10) % 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 60 - 30, 0],
                y: [0, Math.random() * 60 - 30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + (i % 2),
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
