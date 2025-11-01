"use client";

import { motion } from "framer-motion";
import { CheckCircle, FlaskConical, FileCode, Network } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Stats() {
  const { ref, isInView } = useScrollAnimation();

  const stats = [
    {
      icon: CheckCircle,
      label: "명세서 검증",
      value: "100%",
      description: "83개 항목",
      detail: "RFC-9421, RFC-9180 완벽 준수",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: FlaskConical,
      label: "테스트 함수",
      value: "61+",
      description: "7,848 라인",
      detail: "엄격한 품질 관리",
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: FileCode,
      label: "소스 파일",
      value: "261+",
      description: "Go 언어",
      detail: "고성능 구현",
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: Network,
      label: "지원 블록체인",
      value: "3+",
      description: "Ethereum, Kaia, Solana",
      detail: "멀티체인 호환",
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12 sm:mb-16" variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            검증된 구현
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            표준 준수와 코드 품질로 입증된 신뢰성
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-br ${stat.bgColor} p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden group`}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity from-white to-transparent" />

              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
              </div>

              {/* Value */}
              <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-base sm:text-lg text-gray-900 font-bold mb-1">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-sm text-gray-700 font-medium mb-2">
                {stat.description}
              </div>

              {/* Detail */}
              <div className="text-xs text-gray-600">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          variants={fadeInUp}
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-sm sm:text-base text-gray-300">
              오픈소스로 공개된 모든 코드와 테스트
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
