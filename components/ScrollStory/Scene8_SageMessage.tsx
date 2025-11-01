"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { Shield } from "lucide-react";

interface Scene8Props {
  scrollYProgress: MotionValue<number>;
}

export default function Scene8_SageMessage({ scrollYProgress }: Scene8Props) {
  const textY = useTransform(scrollYProgress, [0.84, 0.9], [300, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.84, 0.87, 0.95, 1], [0, 1, 1, 0.3]);

  const sageOpacity = useTransform(scrollYProgress, [0.88, 0.92], [0, 1]);
  const sageScale = useTransform(scrollYProgress, [0.88, 0.92], [0.8, 1]);

  const glowOpacity = useTransform(scrollYProgress, [0.87, 0.92], [0, 0.4]);

  return (
    <motion.div
      className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden"
      style={{ opacity: textOpacity, zIndex: 90 }}
    >
      {/* Radial glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent"
        style={{ opacity: glowOpacity }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${(i * 13 + 20) % 100}%`,
              top: `${(i * 17 + 30) % 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <motion.div
        className="text-center max-w-5xl px-8 relative z-10"
        style={{ y: textY }}
      >
        {/* Main message */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
          우리는 우리의 요청이 agent를 넘어
          <br />
          목적지까지 제대로 배달될지 알 수 없다.
        </h2>

        {/* SAGE reveal */}
        <motion.div
          className="relative inline-block"
          style={{ opacity: sageOpacity, scale: sageScale }}
        >
          {/* Glow background */}
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />

          <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 px-12 py-6 rounded-2xl border-2 border-blue-400 shadow-2xl">
            <div className="flex items-center space-x-4">
              <Shield className="w-12 h-12 text-white" strokeWidth={2} />
              <div className="text-left">
                <p className="text-sm text-blue-200 mb-1">그래서</p>
                <p className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                  SAGE가 필요하다
                </p>
              </div>
            </div>
          </div>

          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 border-2 border-blue-400 rounded-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          style={{ opacity: sageOpacity }}
        >
          Secure Agent Gateway for Enterprise - 당신의 데이터를 안전하게 보호합니다
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
