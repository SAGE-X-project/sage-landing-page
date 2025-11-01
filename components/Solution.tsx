"use client";

import { Shield, Lock, Database, CheckCircle } from "lucide-react";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type ColorKey = "blue" | "sky" | "cyan";

interface SolutionItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  color: ColorKey;
}

export default function Solution() {
  const { ref, isInView } = useScrollAnimation();
  const colorClassMap: Record<
    ColorKey,
    { from: string; to: string; bg: string; check: string; iconBg: string }
  > = {
    blue: {
      from: "from-blue-500",
      to: "to-blue-700",
      bg: "bg-white/20",
      check: "text-white",
      iconBg: "backdrop-blur-sm",
    },
    sky: {
      from: "from-sky-500",
      to: "to-sky-700",
      bg: "bg-white/20",
      check: "text-white",
      iconBg: "backdrop-blur-sm",
    },
    cyan: {
      from: "from-cyan-500",
      to: "to-cyan-700",
      bg: "bg-white/20",
      check: "text-white",
      iconBg: "backdrop-blur-sm",
    },
  };
  const solutions: SolutionItem[] = [
    {
      icon: Lock,
      title: "RFC-9421 메시지 서명",
      description: "HTTP Message Signatures 표준으로 종단간 메시지 무결성 보장",
      features: [
        "메시지 변조 즉시 탐지",
        "중간 서버의 조작 방지",
        "메시지 출처 검증",
      ],
      color: "blue",
    },
    {
      icon: Shield,
      title: "RFC-9180 HPKE 암호화",
      description: "Hybrid Public Key Encryption으로 종단간 메시지 암호화",
      features: [
        "중간 서버가 내용 확인 불가",
        "개인정보/금융정보 보호",
        "Forward Secrecy 보장",
      ],
      color: "sky",
    },
    {
      icon: Database,
      title: "블록체인 DID 관리",
      description: "분산 신원 인증으로 투명한 Agent 검증",
      features: [
        "조작 불가능한 Agent 정보",
        "공개키 위변조 방지",
        "멀티체인 지원 (Ethereum, Kaia, Solana)",
      ],
      color: "cyan",
    },
  ];

  return (
    <section id="solution" className="py-12 sm:py-16 md:py-20 bg-white">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12 sm:mb-16" variants={fadeInUp}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 px-4 tracking-tight">
            SAGE의 해결책
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-bold max-w-4xl mx-auto px-4 mb-4">
            표준 기반 Trust Layer로
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent font-black max-w-4xl mx-auto px-4">
            AI Agent 통신을 안전하게 보호합니다
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
          variants={staggerContainer}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${
                colorClassMap[solution.color].from
              } ${
                colorClassMap[solution.color].to
              } p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all overflow-hidden relative`}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              {/* Decorative background pattern */}
              <div className="absolute bottom-0 left-0 w-40 h-40 opacity-10">
                <div className="absolute bottom-4 left-4 w-20 h-20 border-4 border-white rounded-full" />
                <div className="absolute bottom-10 left-10 w-10 h-10 border-4 border-white" />
              </div>

              <div className="relative z-10">
                <div
                  className={`${
                    colorClassMap[solution.color].bg
                  } ${colorClassMap[solution.color].iconBg} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6`}
                >
                  <solution.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
                  {solution.title}
                </h3>
                <p className="text-base sm:text-lg text-white/90 font-medium mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle
                        className={`h-5 w-5 sm:h-6 sm:w-6 ${
                          colorClassMap[solution.color].check
                        } mr-3 mt-0.5 flex-shrink-0`}
                      />
                      <span className="text-white font-medium text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 rounded-2xl"
          variants={fadeInUp}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-4">
            Trust Layer 아키텍처
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8">
            <motion.div
              className="text-center w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md mb-2">
                <p className="font-semibold text-gray-900 text-sm sm:text-base">Application Layer</p>
                <p className="text-xs sm:text-sm text-gray-600">AI Agents</p>
              </div>
            </motion.div>
            <div className="text-3xl sm:text-4xl text-gray-400 rotate-90 md:rotate-0">↓</div>
            <motion.div
              className="text-center w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 sm:p-6 rounded-xl shadow-lg mb-2 text-white">
                <p className="font-bold text-sm sm:text-base">SAGE Trust Layer</p>
                <div className="text-xs mt-2 space-y-1">
                  <div>✓ Message Signing</div>
                  <div>✓ Encryption</div>
                  <div>✓ DID Verification</div>
                </div>
              </div>
            </motion.div>
            <div className="text-3xl sm:text-4xl text-gray-400 rotate-90 md:rotate-0">↓</div>
            <motion.div
              className="text-center w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md mb-2">
                <p className="font-semibold text-gray-900 text-sm sm:text-base">Transport Layer</p>
                <p className="text-xs sm:text-sm text-gray-600">HTTP/HTTPS</p>
              </div>
            </motion.div>
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <p className="text-gray-600 text-xs sm:text-sm px-4">
              기존 코드 최소 수정으로 Trust Layer 적용 가능
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
