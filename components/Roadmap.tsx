"use client";

import { Calendar, Rocket, Building, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Roadmap() {
  const { ref, isInView } = useScrollAnimation();

  const phases = [
    {
      icon: Rocket,
      period: "단기 (6개월)",
      title: "Foundation",
      items: [
        "rs-sage-core (Rust) 개발",
        "WebAssembly 지원",
        "다중 언어 SDK 완성 (Go, Python, TypeScript, Java)",
        "PyPI, npm, Maven 패키지 등록",
        "모바일 Agent 앱 개발",
      ],
      colorClasses: {
        gradient: "from-blue-50 to-blue-100",
        bg: "bg-blue-600",
        text: "text-blue-600",
        badge: "bg-blue-200 text-blue-800",
        border: "border-blue-600",
      },
      status: "진행 중",
    },
    {
      icon: Building,
      period: "중기 (1년)",
      title: "Ecosystem",
      items: [
        "SAGE-ADK (Agent Development Kit) 출시",
        "Agent Marketplace 구축",
        "MCP (Model Context Protocol) 통합",
        "주요 AI 플랫폼 연동 (OpenAI, Google, Anthropic)",
        "기업 파트너십 체결",
      ],
      colorClasses: {
        gradient: "from-sky-50 to-sky-100",
        bg: "bg-sky-600",
        text: "text-sky-600",
        badge: "bg-sky-200 text-sky-800",
        border: "border-sky-600",
      },
      status: "계획됨",
    },
    {
      icon: Globe,
      period: "장기 (2-3년)",
      title: "Global Standard",
      items: [
        "IETF 표준화 제안",
        "W3C DID 확장 표준화",
        "산업별 특화 솔루션 (금융, 의료, 공공)",
        "글로벌 Agent 생태계 구축",
        "국제 컨퍼런스 개최",
      ],
      colorClasses: {
        gradient: "from-cyan-50 to-cyan-100",
        bg: "bg-cyan-600",
        text: "text-cyan-600",
        badge: "bg-cyan-200 text-cyan-800",
        border: "border-cyan-600",
      },
      status: "비전",
    },
  ];

  return (
    <section id="roadmap" className="py-12 sm:py-16 md:py-20 bg-white">
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
            로드맵
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            안전한 AI Agent 생태계를 향한 여정
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-sky-500 to-cyan-500"></div>

          {/* Phases */}
          <div className="relative z-10 space-y-8 sm:space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              >
                <div
                  className={`relative z-20 bg-gradient-to-br ${phase.colorClasses.gradient} p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  {/* Icon */}
                  <div className="flex items-start mb-4 sm:mb-6">
                    <div
                      className={`${phase.colorClasses.bg} p-3 sm:p-4 rounded-xl mr-3 sm:mr-4 flex-shrink-0`}
                    >
                      <phase.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-2 flex-wrap">
                        <Calendar
                          className={`h-4 w-4 sm:h-5 sm:w-5 ${phase.colorClasses.text}`}
                        />
                        <span
                          className={`text-xs sm:text-sm font-semibold ${phase.colorClasses.text}`}
                        >
                          {phase.period}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                        {phase.title}
                      </h3>
                      <span
                        className={`inline-block px-2 sm:px-3 py-1 ${phase.colorClasses.badge} text-xs font-semibold rounded-full`}
                      >
                        {phase.status}
                      </span>
                    </div>
                  </div>

                  {/* Items */}
                  <ul className="space-y-2 sm:space-y-3">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span
                          className={`${phase.colorClasses.text} mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0`}
                        >
                          ✓
                        </span>
                        <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline Dot */}
                <div
                  className={`hidden md:block absolute top-6 sm:top-8 ${
                    index % 2 === 0
                      ? "right-0 translate-x-1/2"
                      : "left-0 -translate-x-1/2"
                  } w-5 h-5 sm:w-6 sm:h-6 ${
                    phase.colorClasses.bg
                  } rounded-full border-4 border-white shadow-lg`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <motion.div
          className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 p-6 sm:p-8 md:p-12 rounded-2xl text-white text-center"
          variants={fadeInUp}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">우리의 비전</h3>
          <p className="text-lg sm:text-xl mb-4 sm:mb-6 opacity-90">
            HTTP에 HTTPS가 필요했듯이, AI Agent에는 SAGE가 필요합니다
          </p>
          <p className="text-base sm:text-lg opacity-80 max-w-3xl mx-auto">
            SAGE와 함께, 안전한 AI Agent 시대를 만들어갑니다
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
