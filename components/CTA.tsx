"use client";

import { Github, Mail, FileText, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { LINKS, CONTACT, EVENT } from "@/lib/constants";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTA() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="cta"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50"
    >
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Side - CTA */}
            <motion.div
              className="p-6 sm:p-8 md:p-12 flex flex-col justify-center"
              variants={fadeInLeft}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
                지금<br className="sm:hidden" /> 시작하세요
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold mb-8">
                SAGE로 안전한
              </p>
              <p className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-black mb-8">
                AI Agent를 만들어보세요
              </p>

              <div className="space-y-4">
                <a
                  href={LINKS.GITHUB_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full bg-gray-900 text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors group"
                >
                  <div className="flex items-center">
                    <Github className="h-6 w-6 mr-3" />
                    <span className="font-semibold">GitHub Repository</span>
                  </div>
                  <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href={LINKS.DOCUMENTATION}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 transition-colors group"
                >
                  <div className="flex items-center">
                    <FileText className="h-6 w-6 mr-3" />
                    <span className="font-semibold">Documentation</span>
                  </div>
                  <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href={`mailto:${CONTACT.EMAIL}`}
                  className="flex items-center justify-between w-full bg-cyan-600 text-white px-6 py-4 rounded-xl hover:bg-cyan-700 transition-colors group"
                >
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-3" />
                    <span className="font-semibold">Contact Us</span>
                  </div>
                  <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </motion.div>

            {/* Right Side - Stats */}
            <motion.div
              className="bg-gradient-to-br from-blue-600 to-cyan-600 p-6 sm:p-8 md:p-12 flex flex-col justify-center text-white"
              variants={fadeInRight}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">프로젝트 현황</h3>
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <div className="text-3xl sm:text-4xl font-bold mb-2">100%</div>
                  <div className="text-xs sm:text-sm opacity-90">명세서 검증 완료</div>
                </motion.div>
                <motion.div
                  className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <div className="text-3xl sm:text-4xl font-bold mb-2">261+</div>
                  <div className="text-xs sm:text-sm opacity-90">Go 소스 파일</div>
                </motion.div>
                <motion.div
                  className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <div className="text-3xl sm:text-4xl font-bold mb-2">3+</div>
                  <div className="text-xs sm:text-sm opacity-90">지원 블록체인</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Conference Badge */}
        <motion.div className="mt-8 sm:mt-12 text-center" variants={fadeInUp}>
          <div className="inline-flex items-center space-x-2 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg text-sm sm:text-base">
            <span className="text-gray-700 font-semibold">{EVENT.NAME}</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">{EVENT.ORGANIZER}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
