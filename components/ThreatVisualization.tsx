"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { AlertTriangle, User, Bot, Server, Eye, CreditCard, Lock } from "lucide-react";
import { useRef } from "react";

export default function ThreatVisualization() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // 시나리오 단계
  const scenarios = [
    {
      icon: User,
      title: "일상의 시작",
      description: "출근하면서 AI에게 오늘 일정을 물어봅니다",
      risk: false,
    },
    {
      icon: Bot,
      title: "AI Agent 네트워크",
      description: "ChatGPT는 캘린더 Agent, 이메일 Agent와 대화합니다",
      risk: false,
    },
    {
      icon: Server,
      title: "데이터 전송",
      description: "여러 서버를 거쳐 정보가 전달됩니다",
      risk: true,
      warning: "암호화되지 않은 통신",
    },
    {
      icon: Eye,
      title: "정보 노출",
      description: "중간 서버에서 당신의 일정, 이메일 내용이 노출됩니다",
      risk: true,
      warning: "개인정보 유출 위험",
    },
    {
      icon: CreditCard,
      title: "위험 확대",
      description: "민감한 금융 정보, 비밀번호까지 탈취 가능",
      risk: true,
      warning: "자산 탈취 위험",
    },
  ];

  return (
    <section
      id="threat"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-slate-900 via-red-950/20 to-slate-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1),transparent_70%)]" />

      <motion.div
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-red-500/30 mb-6">
            <AlertTriangle className="h-5 w-5 text-red-400" />
            <span className="text-sm font-semibold text-red-300">실제 위협 시나리오</span>
          </div>

          <h2 className="text-display font-bold text-white mb-6 tracking-tight">
            이렇게 당신의 정보가
            <br />
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent font-extrabold">
              유출됩니다
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            평범한 AI 사용, 그 뒤에 숨겨진 위험
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 via-red-500/50 to-red-600/50 transform -translate-x-1/2" />

          {/* Scenarios */}
          <div className="space-y-12 md:space-y-20">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    className={`inline-block p-6 md:p-8 rounded-2xl backdrop-blur-sm ${
                      scenario.risk
                        ? "bg-red-500/10 border-2 border-red-500/30"
                        : "bg-blue-500/10 border-2 border-blue-500/30"
                    }`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {scenario.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-4">{scenario.description}</p>
                    {scenario.warning && (
                      <div className="inline-flex items-center space-x-2 bg-red-500/20 px-4 py-2 rounded-full">
                        <AlertTriangle className="h-4 w-4 text-red-400" />
                        <span className="text-sm font-semibold text-red-400">
                          {scenario.warning}
                        </span>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Icon Circle */}
                <div className="relative z-10">
                  <motion.div
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center ${
                      scenario.risk
                        ? "bg-gradient-to-br from-red-500 to-orange-500"
                        : "bg-gradient-to-br from-blue-500 to-cyan-500"
                    } shadow-2xl`}
                    animate={{
                      boxShadow: scenario.risk
                        ? [
                            "0 0 20px rgba(239, 68, 68, 0.5)",
                            "0 0 40px rgba(239, 68, 68, 0.8)",
                            "0 0 20px rgba(239, 68, 68, 0.5)",
                          ]
                        : [
                            "0 0 20px rgba(59, 130, 246, 0.5)",
                            "0 0 40px rgba(59, 130, 246, 0.8)",
                            "0 0 20px rgba(59, 130, 246, 0.5)",
                          ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <scenario.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </motion.div>

                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-800 border-2 border-slate-600 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{index + 1}</span>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center p-8 bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm border-2 border-red-500/30 rounded-2xl">
            <AlertTriangle className="w-16 h-16 text-red-400 mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              이것은 미래의 이야기가 아닙니다
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl">
              ChatGPT, Claude, Gemini를 사용하는 지금 이 순간에도
              <br />
              <span className="text-red-400 font-semibold">당신의 데이터는 보호받지 못하고 있습니다</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
