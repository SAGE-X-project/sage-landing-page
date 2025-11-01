"use client";

import { AlertTriangle, Users, DollarSign, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Problem() {
  const { ref, isInView } = useScrollAnimation();
  const threats = [
    {
      icon: AlertTriangle,
      title: "TLS/HTTPS의 한계",
      description: "구간별 암호화로 중간 서버에서 변조 가능",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      icon: Users,
      title: "Agent Card 불충분",
      description: "메타데이터만 제공, 신뢰성 검증 불가능",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      icon: DollarSign,
      title: "금융 자산 위협",
      description: "결제 메시지 변조, 송금 정보 위변조 가능",
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
    {
      icon: TrendingUp,
      title: "Agent 급증",
      description: "OpenAI, Google 등 누구나 Agent 생성 가능",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
  ];

  return (
    <section
      id="problem"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4">
            다가오는 위기
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            AI Agent 시대의 보안 위협은 실재하며 시급합니다
          </p>
        </motion.div>

        {/* Threats Grid */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
          variants={staggerContainer}
        >
          {threats.map((threat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div
                className={`${threat.bgColor} w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4`}
              >
                <threat.icon className={`h-7 w-7 sm:h-8 sm:w-8 ${threat.color}`} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {threat.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{threat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Academic Papers */}
        <motion.div
          className="bg-gradient-to-r from-red-50 to-orange-50 p-6 sm:p-8 rounded-2xl border-l-4 border-red-500"
          variants={fadeInLeft}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center flex-wrap">
            <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 mr-2" />
            학계가 경고하는 위험
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                &quot;A Survey of LLM-Driven AI Agent Communication&quot;
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">
                AI Agent 통신 프로토콜의 보안 취약점 분석 및 방어 대책 필요성
                강조
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                &quot;The Dark Side of LLMs: Agent-based Attacks&quot;
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">
                AI Agent를 통한 시스템 장악 공격 가능성 실증
              </p>
            </div>
          </div>
        </motion.div>

        {/* Historical Pattern */}
        <motion.div className="mt-12 sm:mt-16 text-center" variants={fadeInUp}>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 px-4">
            역사는 반복됩니다
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <motion.div
              className="bg-white p-5 sm:p-6 rounded-xl shadow-md"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-gray-400 mb-2">1990s</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                HTTP → HTTPS
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                보안 사고 후 10년+ 소요
              </div>
            </motion.div>
            <motion.div
              className="bg-white p-5 sm:p-6 rounded-xl shadow-md"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-gray-400 mb-2">2010s</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                모바일 앱 보안
              </div>
              <div className="text-xs sm:text-sm text-gray-600">수많은 피해 후 규제</div>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 sm:p-6 rounded-xl shadow-md border-2 border-blue-300 sm:col-span-2 md:col-span-1"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                2025
              </div>
              <div className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                AI Agent (SAGE)
              </div>
              <div className="text-xs sm:text-sm text-blue-600 font-semibold">
                선제적 대응!
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
