"use client";

import { Shield, Lock, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { LINKS, EVENT } from "@/lib/constants";
import { fadeInUp, fadeInDown, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Hero() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <motion.div
          className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-48 h-48 md:w-72 md:h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-48 h-48 md:w-72 md:h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-8"
            variants={fadeInDown}
          >
            <Shield className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
            <span className="text-xs md:text-sm font-semibold text-gray-700">
              {EVENT.NAME}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight px-4"
            variants={fadeInUp}
          >
            <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Trust Layer for
            </span>
            <br />
            <span className="text-gray-900">AI Agent Era</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto px-4"
            variants={fadeInUp}
          >
            AI Agent 시대, 보안은 선택이 아닌 필수입니다
          </motion.p>
          <motion.p
            className="text-base sm:text-lg text-gray-500 mb-12 max-w-2xl mx-auto px-4"
            variants={fadeInUp}
          >
            RFC 표준 기반 메시지 서명/암호화 + 블록체인 DID 검증으로
            <br className="hidden sm:block" />
            안전한 AI Agent 생태계를 구축합니다
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4"
            variants={fadeInUp}
          >
            <a
              href={LINKS.GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <span>GitHub에서 보기</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 transform hover:-translate-y-1 transition-all"
            >
              자세히 알아보기
            </a>
          </motion.div>

          {/* Key Features Preview */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4"
            variants={staggerContainer}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                RFC-9421 서명
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                종단간 메시지 무결성 보장
              </p>
            </motion.div>
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="bg-sky-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-sky-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                RFC-9180 암호화
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                HPKE 기반 종단간 암호화
              </p>
            </motion.div>
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow sm:col-span-2 md:col-span-1"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="bg-cyan-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                블록체인 DID
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                투명한 Agent 신원 검증
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
