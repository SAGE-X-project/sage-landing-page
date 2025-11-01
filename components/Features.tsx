"use client";

import { FileSignature, Lock, Database, Key, Layers, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Features() {
  const { ref, isInView } = useScrollAnimation();
  const features = [
    {
      icon: FileSignature,
      title: "메시지 서명 검증",
      description:
        "RFC-9421 표준 기반 HTTP 메시지 서명으로 변조 시도를 즉시 탐지합니다.",
      details: [
        "Signature-Input/Signature 헤더 생성",
        "타임스탬프 및 Nonce 검증",
        "중간자 공격 방지",
      ],
    },
    {
      icon: Lock,
      title: "종단간 암호화",
      description: "RFC-9180 HPKE를 활용한 강력한 메시지 암호화를 제공합니다.",
      details: [
        "DHKEM (X25519) 키 교환",
        "ChaCha20Poly1305 AEAD 암호화",
        "Forward Secrecy 보장",
      ],
    },
    {
      icon: Database,
      title: "블록체인 DID",
      description:
        "Ethereum, Kaia, Solana 등 다중 블록체인에서 Agent 신원을 관리합니다.",
      details: [
        "ERC-8004 표준 준수",
        "멀티키 지원 (최대 10개)",
        "Commit-Reveal 패턴",
      ],
    },
    {
      icon: Key,
      title: "다양한 암호 알고리즘",
      description: "검증된 암호화 알고리즘들을 플러그인 방식으로 지원합니다.",
      details: [
        "Ed25519, Secp256k1, P-256",
        "RSA-256, X25519",
        "OS Keychain 통합",
      ],
    },
    {
      icon: Layers,
      title: "다중 언어 SDK",
      description:
        "Go, Python, TypeScript, Rust 등 다양한 언어로 쉽게 통합할 수 있습니다.",
      details: [
        "5줄 이내 코드로 적용",
        "언어별 관용적 API",
        "풍부한 예제 코드",
      ],
    },
    {
      icon: Zap,
      title: "세션 관리",
      description: "안전하고 효율적인 세션 기반 통신을 지원합니다.",
      details: [
        "Session ID/Nonce 관리",
        "TTL 기반 세션 만료",
        "재생 공격 방지",
      ],
    },
  ];

  return (
    <section
      id="features"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12 sm:mb-16" variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
            핵심 기능
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            RFC 표준과 블록체인 기술을 결합한 완벽한 보안 솔루션
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-blue-500/20 shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/40 transition-all"
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 border border-blue-500/30">
                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-xs sm:text-sm text-gray-400 flex items-start"
                  >
                    <span className="text-blue-400 mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Verification Status */}
        <motion.div
          className="mt-12 sm:mt-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 sm:p-8 rounded-2xl border-l-4 border-green-500 backdrop-blur-sm"
          variants={fadeInUp}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                100% 명세서 검증 완료
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                83개 항목 전체 검증, 61개 테스트 함수, 7,848 라인 테스트 코드
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg whitespace-nowrap">
                ✓ 검증 완료
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
