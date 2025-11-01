"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Lock, Check, Zap } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function SageShield() {
  const containerRef = useRef(null);
  const [particles, setParticles] = useState<Array<{ left: string; top: string; duration: number; delay: number }>>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const shieldScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.2, 1]);
  const shieldRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = Array.from({ length: 30 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 3,
    }));
    setParticles(generatedParticles);
  }, []);

  const protections = [
    {
      title: "메시지 암호화",
      description: "AI Agent 간 모든 대화를 암호화",
      icon: Lock,
    },
    {
      title: "신원 검증",
      description: "블록체인으로 Agent 진위 확인",
      icon: Check,
    },
    {
      title: "실시간 보호",
      description: "통신 순간마다 자동으로 보호",
      icon: Zap,
    },
  ];

  return (
    <section
      id="solution"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-slate-900 via-blue-950/30 to-slate-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30 mb-6">
            <Shield className="h-5 w-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300">SAGE의 해답</span>
          </div>

          <h2 className="text-display font-bold text-white mb-6 tracking-tight">
            디지털 세계의
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent font-extrabold">
              보안 보호막
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            SAGE는 AI Agent 통신을 보호하는 투명한 방패입니다
          </p>
        </motion.div>

        {/* Main Shield Visualization */}
        <div className="relative h-[600px] md:h-[700px] flex items-center justify-center mb-20">
          {/* Central Shield */}
          <motion.div
            style={{ scale: shieldScale }}
            className="relative z-20"
          >
            {/* Rotating Rings */}
            <motion.div
              style={{ rotate: shieldRotate }}
              className="absolute inset-0 -m-20"
            >
              <div className="w-full h-full border-2 border-blue-500/30 rounded-full" />
            </motion.div>
            <motion.div
              style={{ rotate: useTransform(shieldRotate, (v) => -v) }}
              className="absolute inset-0 -m-32"
            >
              <div className="w-full h-full border-2 border-cyan-500/20 rounded-full" />
            </motion.div>

            {/* Main Shield */}
            <motion.div
              className="relative w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl"
              animate={{
                boxShadow: [
                  "0 0 40px rgba(59, 130, 246, 0.5)",
                  "0 0 80px rgba(59, 130, 246, 0.8)",
                  "0 0 40px rgba(59, 130, 246, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Shield className="w-24 h-24 md:w-32 md:h-32 text-white" strokeWidth={1.5} />

              {/* Pulse Effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-blue-400"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Protection Features - Orbiting */}
          {protections.map((protection, index) => {
            const angle = (index * 360) / protections.length;
            const radius = 250;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                initial={{ x, y, opacity: 0, scale: 0 }}
                whileInView={{
                  x,
                  y,
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                }}
              >
                <motion.div
                  className="relative -ml-20 -mt-20 w-40 md:w-48 p-4 md:p-6 bg-slate-800/90 backdrop-blur-sm border border-blue-500/30 rounded-xl"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-3">
                      <protection.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white font-bold mb-2 text-sm md:text-base">
                      {protection.title}
                    </h4>
                    <p className="text-gray-400 text-xs md:text-sm">
                      {protection.description}
                    </p>
                  </div>

                  {/* Connection Line to Shield */}
                  <svg className="absolute inset-0 pointer-events-none" style={{ overflow: "visible" }}>
                    <motion.line
                      x1="50%"
                      y1="50%"
                      x2={`${50 - (x / 2.5)}%`}
                      y2={`${50 - (y / 2.5)}%`}
                      stroke="rgba(59, 130, 246, 0.3)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    />
                  </svg>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Without SAGE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-red-500/10 backdrop-blur-sm border-2 border-red-500/30 rounded-2xl"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                <span className="text-3xl">❌</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">SAGE 없이</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>개인정보 노출 위험</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>중간자 공격 가능</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>메시지 변조 위험</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>자산 탈취 가능성</span>
              </li>
            </ul>
          </motion.div>

          {/* With SAGE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-blue-500/10 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">SAGE와 함께</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                <span>종단간 암호화 보호</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                <span>변조 즉시 탐지</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                <span>블록체인 신원 검증</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                <span>완벽한 데이터 보안</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
