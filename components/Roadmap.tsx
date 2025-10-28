import { Calendar, Rocket, Building, Globe } from "lucide-react";

export default function Roadmap() {
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
      color: "blue",
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
      color: "sky",
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
      color: "cyan",
      status: "비전",
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            로드맵
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            안전한 AI Agent 생태계를 향한 여정
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-sky-500 to-cyan-500"></div>

          {/* Phases */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                <div
                  className={`bg-gradient-to-br from-${phase.color}-50 to-${
                    phase.color
                  }-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  {/* Icon */}
                  <div className="flex items-start mb-6">
                    <div
                      className={`bg-${phase.color}-600 p-4 rounded-xl mr-4 flex-shrink-0`}
                    >
                      <phase.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <Calendar
                          className={`h-5 w-5 text-${phase.color}-600`}
                        />
                        <span
                          className={`text-sm font-semibold text-${phase.color}-700`}
                        >
                          {phase.period}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {phase.title}
                      </h3>
                      <span
                        className={`inline-block px-3 py-1 bg-${phase.color}-200 text-${phase.color}-800 text-xs font-semibold rounded-full`}
                      >
                        {phase.status}
                      </span>
                    </div>
                  </div>

                  {/* Items */}
                  <ul className="space-y-3">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span
                          className={`text-${phase.color}-600 mr-3 mt-1 flex-shrink-0`}
                        >
                          ✓
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline Dot */}
                <div
                  className={`hidden md:block absolute top-8 ${
                    index % 2 === 0
                      ? "right-0 translate-x-1/2"
                      : "left-0 -translate-x-1/2"
                  } w-6 h-6 bg-${
                    phase.color
                  }-600 rounded-full border-4 border-white shadow-lg`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 p-8 md:p-12 rounded-2xl text-white text-center">
          <h3 className="text-3xl font-bold mb-4">우리의 비전</h3>
          <p className="text-xl mb-6 opacity-90">
            HTTP에 HTTPS가 필요했듯이, AI Agent에는 SAGE가 필요합니다
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            SAGE와 함께, 안전한 AI Agent 시대를 만들어갑니다
          </p>
        </div>
      </div>
    </section>
  );
}
