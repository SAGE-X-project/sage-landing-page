"use client";

import { Shield, Lock, CheckCircle, ArrowRight } from "lucide-react";
import { LINKS, EVENT } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-8">
            <Shield className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">
              {EVENT.NAME}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Trust Layer for
            </span>
            <br />
            <span className="text-gray-900">AI Agent Era</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            AI Agent 시대, 보안은 선택이 아닌 필수입니다
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            RFC 표준 기반 메시지 서명/암호화 + 블록체인 DID 검증으로
            <br />
            안전한 AI Agent 생태계를 구축합니다
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href={LINKS.GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <span>GitHub에서 보기</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 transform hover:-translate-y-1 transition-all"
            >
              자세히 알아보기
            </a>
          </div>

          {/* Key Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                RFC-9421 서명
              </h3>
              <p className="text-sm text-gray-600">종단간 메시지 무결성 보장</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                RFC-9180 암호화
              </h3>
              <p className="text-sm text-gray-600">HPKE 기반 종단간 암호화</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">블록체인 DID</h3>
              <p className="text-sm text-gray-600">투명한 Agent 신원 검증</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
