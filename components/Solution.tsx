import { Shield, Lock, Database, CheckCircle } from "lucide-react";
import type { ComponentType } from "react";

type ColorKey = "blue" | "sky" | "cyan";

interface SolutionItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  color: ColorKey;
}

export default function Solution() {
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
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SAGE의 해결책
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            표준 기반 Trust Layer로 AI Agent 통신을 안전하게 보호합니다
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${
                colorClassMap[solution.color].from
              } ${
                colorClassMap[solution.color].to
              } p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2`}
            >
              <div
                className={`${
                  colorClassMap[solution.color].bg
                } w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
              >
                <solution.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-700 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle
                      className={`h-5 w-5 ${
                        colorClassMap[solution.color].check
                      } mr-2 mt-0.5 flex-shrink-0`}
                    />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Trust Layer 아키텍처
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-md mb-2">
                <p className="font-semibold text-gray-900">Application Layer</p>
                <p className="text-sm text-gray-600">AI Agents</p>
              </div>
            </div>
            <div className="text-4xl text-gray-400">↓</div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-xl shadow-lg mb-2 text-white">
                <p className="font-bold">SAGE Trust Layer</p>
                <div className="text-xs mt-2 space-y-1">
                  <div>✓ Message Signing</div>
                  <div>✓ Encryption</div>
                  <div>✓ DID Verification</div>
                </div>
              </div>
            </div>
            <div className="text-4xl text-gray-400">↓</div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-md mb-2">
                <p className="font-semibold text-gray-900">Transport Layer</p>
                <p className="text-sm text-gray-600">HTTP/HTTPS</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              기존 코드 최소 수정으로 Trust Layer 적용 가능
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
