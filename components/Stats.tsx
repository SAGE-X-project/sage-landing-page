export default function Stats() {
  const stats = [
    { label: "명세서 검증", value: "100%", description: "83개 항목" },
    { label: "테스트 함수", value: "61+", description: "7,848 라인" },
    { label: "소스 파일", value: "261+", description: "Go 언어" },
    {
      label: "지원 블록체인",
      value: "3+",
      description: "Ethereum, Kaia, Solana",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-900 font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
