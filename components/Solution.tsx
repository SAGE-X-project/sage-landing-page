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
    { from: string; to: string; bg: string; check: string }
  > = {
    blue: {
      from: "from-blue-50",
      to: "to-blue-100",
      bg: "bg-blue-600",
      check: "text-blue-600",
    },
    sky: {
      from: "from-sky-50",
      to: "to-sky-100",
      bg: "bg-sky-600",
      check: "text-sky-600",
    },
    cyan: {
      from: "from-cyan-50",
      to: "to-cyan-100",
      bg: "bg-cyan-600",
      check: "text-cyan-600",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4">
            SAGE의 해결책
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            표준 기반 Trust Layer로 AI Agent 통신을 안전하게 보호합니다
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
              } p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all`}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div
                className={`${
                  colorClassMap[solution.color].bg
                } w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}
              >
                <solution.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle
                      className={`h-4 w-4 sm:h-5 sm:w-5 ${
                        colorClassMap[solution.color].check
                      } mr-2 mt-0.5 flex-shrink-0`}
                    />
                    <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
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
