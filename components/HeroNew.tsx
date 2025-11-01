"use client";

import { Shield, Zap, Lock, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { LINKS, EVENT } from "@/lib/constants";
import { useEffect, useState } from "react";

export default function HeroNew() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ left: string; top: string; duration: number; delay: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(generatedParticles);
  }, []);

  // AI Agent 네트워크 노드들
  const agents = [
    { id: 1, x: 20, y: 30, label: "ChatGPT", delay: 0 },
    { id: 2, x: 40, y: 20, label: "Claude", delay: 0.2 },
    { id: 3, x: 60, y: 35, label: "Gemini", delay: 0.4 },
    { id: 4, x: 80, y: 25, label: "Assistant", delay: 0.6 },
    { id: 5, x: 50, y: 50, label: "You", delay: 0.3, isUser: true },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Agent Network Visualization */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full">
          {/* Connection Lines */}
          {agents.map((agent, i) =>
            agents.slice(i + 1).map((target, j) => (
              <motion.line
                key={`${i}-${j}`}
                x1={`${agent.x}%`}
                y1={`${agent.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{
                  duration: 2,
                  delay: agent.delay + 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                }}
              />
            ))
          )}
        </svg>

        {/* Agent Nodes */}
        {agents.map((agent) => (
          <motion.div
            key={agent.id}
            className="absolute"
            style={{
              left: `${agent.x}%`,
              top: `${agent.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: agent.delay, duration: 0.5 }}
          >
            <motion.div
              className={`relative ${
                agent.isUser
                  ? "w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500"
                  : "w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600"
              } rounded-full flex items-center justify-center shadow-2xl`}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: agent.delay,
              }}
            >
              {agent.isUser ? (
                <Shield className="w-8 h-8 text-white" />
              ) : (
                <Zap className="w-6 h-6 text-blue-300" />
              )}

              {/* Pulse Effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: agent.delay,
                }}
              />
            </motion.div>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-xs text-blue-200 font-medium">
                {agent.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-red-500/30 mb-8">
            <AlertTriangle className="h-4 w-4 text-red-400" />
            <span className="text-sm font-semibold text-red-300">
              AI 시대의 보안 위협
            </span>
          </div>

          <h1 className="text-hero mb-6 leading-[1.1] tracking-tighter">
            <span className="block text-white mb-2 font-bold">당신의 AI는</span>
            <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent font-extrabold">
              안전한가요?
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto font-medium leading-relaxed tracking-tight">
            AI Agent들이 대화하는 순간,
            <br className="hidden sm:block" />
            당신의 개인정보가 위험에 노출됩니다
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            ChatGPT, Claude, Gemini... AI들은 서로 대화하며 더 똑똑해지지만
            <br />
            <span className="text-red-400 font-semibold">누구도 보안은 생각하지 않습니다</span>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="#threat"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-red-600 to-orange-600 rounded-full overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">위험 확인하기</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#solution"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              해결책 보기
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
