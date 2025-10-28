import { FileSignature, Lock, Database, Key, Layers, Zap } from "lucide-react";

export default function Features() {
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
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            핵심 기능
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RFC 표준과 블록체인 기술을 결합한 완벽한 보안 솔루션
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-500 flex items-start"
                  >
                    <span className="text-blue-600 mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Verification Status */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border-l-4 border-green-500">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                100% 명세서 검증 완료
              </h3>
              <p className="text-gray-600">
                83개 항목 전체 검증, 61개 테스트 함수, 7,848 라인 테스트 코드
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-green-500 text-white px-6 py-3 rounded-full font-bold text-lg">
                ✓ 검증 완료
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
