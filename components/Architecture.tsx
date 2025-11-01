"use client";

import { Code, Server, Cloud, Box } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Architecture() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="architecture" className="py-12 sm:py-16 md:py-20 bg-slate-900">
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
            시스템 아키텍처
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            확장 가능한 플러그인 기반 설계
          </p>
        </motion.div>

        {/* Architecture Layers */}
        <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <motion.div
            className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 p-4 sm:p-6 rounded-2xl border-l-4 border-blue-500 backdrop-blur-sm"
            variants={fadeInLeft}
          >
            <div className="flex items-start">
              <Code className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mt-1 mr-3 sm:mr-4 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  Application Layer
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-2 sm:mb-3">
                  AI Agents (ChatGPT, Gemini, Claude, etc.)
                </p>
                <div className="text-xs sm:text-sm text-gray-400">
                  기존 Agent 코드 최소 수정으로 SAGE 통합 가능
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 sm:p-6 rounded-2xl border-l-4 border-blue-500"
            variants={fadeInLeft}
          >
            <div className="flex items-start">
              <Server className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-1 mr-3 sm:mr-4 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  SAGE Trust Layer
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-3">
                  <div className="bg-white p-2 sm:p-3 rounded-lg">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">
                      core/rfc9421/
                    </p>
                    <p className="text-xs text-gray-600">메시지 서명/검증</p>
                  </div>
                  <div className="bg-white p-2 sm:p-3 rounded-lg">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">
                      hpke/
                    </p>
                    <p className="text-xs text-gray-600">HPKE 암호화</p>
                  </div>
                  <div className="bg-white p-2 sm:p-3 rounded-lg">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">
                      did/
                    </p>
                    <p className="text-xs text-gray-600">DID 관리</p>
                  </div>
                  <div className="bg-white p-2 sm:p-3 rounded-lg">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">
                      crypto/
                    </p>
                    <p className="text-xs text-gray-600">암호화 엔진</p>
                  </div>
                  <div className="bg-white p-2 sm:p-3 rounded-lg">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">
                      session/
                    </p>
                    <p className="text-xs text-gray-600">세션 관리</p>
                  </div>
                  <div className="bg-white p-2 sm:p-3 rounded-lg">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">
                      transport/
                    </p>
                    <p className="text-xs text-gray-600">HTTP/WebSocket</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 rounded-2xl border-l-4 border-green-500"
            variants={fadeInLeft}
          >
            <div className="flex items-start">
              <Cloud className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-1 mr-3 sm:mr-4 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Integration Layer
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-3">
                  <div className="bg-white p-2 sm:p-3 rounded-lg">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">
                      Blockchain
                    </p>
                    <p className="text-xs text-gray-600">
                      Ethereum, Kaia, Solana
                    </p>
                  </div>
                  <div className="bg-white p-2 sm:p-3 rounded-lg">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">
                      Multi-Lang SDKs
                    </p>
                    <p className="text-xs text-gray-600">
                      Go, Python, TypeScript
                    </p>
                  </div>
                  <div className="bg-white p-2 sm:p-3 rounded-lg">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">
                      CLI Tools
                    </p>
                    <p className="text-xs text-gray-600">
                      sage-crypto, sage-did
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Plugin Architecture */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 rounded-2xl"
          variants={fadeInUp}
        >
          <div className="flex items-center mb-4 sm:mb-6">
            <Box className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 sm:mr-3" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              플러그인 아키텍처
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <motion.div
              className="bg-white p-4 sm:p-6 rounded-xl shadow-md"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <h4 className="font-bold text-gray-900 mb-3 text-sm sm:text-base">Crypto Plugins</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• Secp256k1 (ECDSA)</li>
                <li>• Ed25519 (EdDSA)</li>
                <li>• X25519 (ECDH)</li>
                <li>• RSA-256</li>
                <li>• ChaCha20Poly1305</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-white p-4 sm:p-6 rounded-xl shadow-md"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <h4 className="font-bold text-gray-900 mb-3 text-sm sm:text-base">
                Blockchain Plugins
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• Ethereum Adapter</li>
                <li>• Kaia Adapter</li>
                <li>• Solana Adapter</li>
                <li>• Custom Chain Support</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-white p-4 sm:p-6 rounded-xl shadow-md sm:col-span-2 md:col-span-1"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <h4 className="font-bold text-gray-900 mb-3 text-sm sm:text-base">Storage Plugins</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• File Storage</li>
                <li>• Vault Storage</li>
                <li>• OS Keychain</li>
                <li>• Cloud Storage</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
