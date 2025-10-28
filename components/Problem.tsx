import { AlertTriangle, Users, DollarSign, TrendingUp } from "lucide-react";

export default function Problem() {
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
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section
      id="problem"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            다가오는 위기
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI Agent 시대의 보안 위협은 실재하며 시급합니다
          </p>
        </div>

        {/* Threats Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {threats.map((threat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className={`${threat.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}
              >
                <threat.icon className={`h-8 w-8 ${threat.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {threat.title}
              </h3>
              <p className="text-gray-600">{threat.description}</p>
            </div>
          ))}
        </div>

        {/* Academic Papers */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
            학계가 경고하는 위험
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900">
                "A Survey of LLM-Driven AI Agent Communication"
              </p>
              <p className="text-gray-600 text-sm">
                AI Agent 통신 프로토콜의 보안 취약점 분석 및 방어 대책 필요성
                강조
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                "The Dark Side of LLMs: Agent-based Attacks"
              </p>
              <p className="text-gray-600 text-sm">
                AI Agent를 통한 시스템 장악 공격 가능성 실증
              </p>
            </div>
          </div>
        </div>

        {/* Historical Pattern */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            역사는 반복됩니다
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-gray-400 mb-2">1990s</div>
              <div className="font-semibold text-gray-900 mb-2">
                HTTP → HTTPS
              </div>
              <div className="text-sm text-gray-600">
                보안 사고 후 10년+ 소요
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-gray-400 mb-2">2010s</div>
              <div className="font-semibold text-gray-900 mb-2">
                모바일 앱 보안
              </div>
              <div className="text-sm text-gray-600">수많은 피해 후 규제</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-md border-2 border-indigo-300">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                2025
              </div>
              <div className="font-semibold text-gray-900 mb-2">
                AI Agent (SAGE)
              </div>
              <div className="text-sm text-indigo-600 font-semibold">
                🎯 선제적 대응!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
