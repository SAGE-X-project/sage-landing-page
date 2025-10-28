import { Code2, Shield, Database, GitBranch } from "lucide-react";

export default function Technology() {
  const techStack = {
    standards: [
      { name: "RFC-9421", desc: "HTTP Message Signatures" },
      { name: "RFC-9180", desc: "HPKE Encryption" },
      { name: "W3C DID", desc: "Decentralized Identifiers" },
      { name: "ERC-8004", desc: "Identity/Reputation Registry" },
    ],
    languages: [
      { name: "Go", version: "1.22+", usage: "핵심 구현" },
      { name: "Solidity", version: "0.8.20", usage: "스마트 컨트랙트" },
      { name: "TypeScript", version: "5+", usage: "SDK" },
      { name: "Python", version: "3.9+", usage: "SDK" },
    ],
    blockchain: [
      { name: "Ethereum", networks: "Mainnet, Sepolia" },
      { name: "Kaia", networks: "Cypress, Kairos" },
      { name: "Solana", networks: "Mainnet, Devnet" },
    ],
    crypto: [
      { name: "Ed25519", use: "EdDSA 서명" },
      { name: "Secp256k1", use: "ECDSA 서명 (Ethereum)" },
      { name: "X25519", use: "ECDH 키 교환" },
      { name: "ChaCha20Poly1305", use: "AEAD 암호화" },
    ],
  };

  return (
    <section
      id="technology"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            기술 스택
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            검증된 표준과 최신 기술의 조합
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Standards */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-xl mr-4">
                <GitBranch className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">표준 준수</h3>
            </div>
            <div className="space-y-4">
              {techStack.standards.map((std, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg font-mono text-sm font-semibold mr-3 flex-shrink-0">
                    {std.name}
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{std.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-xl mr-4">
                <Code2 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                프로그래밍 언어
              </h3>
            </div>
            <div className="space-y-4">
              {techStack.languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-900">
                      {lang.name}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">
                      {lang.version}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">{lang.usage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Blockchain */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-xl mr-4">
                <Database className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                블록체인 지원
              </h3>
            </div>
            <div className="space-y-4">
              {techStack.blockchain.map((chain, index) => (
                <div key={index}>
                  <div className="font-semibold text-gray-900 mb-1">
                    {chain.name}
                  </div>
                  <div className="text-sm text-gray-600">{chain.networks}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Sepolia Testnet 배포:</span>
                  <br />
                  <code className="text-xs bg-white px-2 py-1 rounded mt-1 inline-block">
                    0x487d...09BF
                  </code>
                </p>
              </div>
            </div>
          </div>

          {/* Crypto */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-pink-100 p-3 rounded-xl mr-4">
                <Shield className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                암호화 알고리즘
              </h3>
            </div>
            <div className="space-y-4">
              {techStack.crypto.map((algo, index) => (
                <div key={index}>
                  <div className="font-semibold text-gray-900 mb-1">
                    {algo.name}
                  </div>
                  <div className="text-sm text-gray-600">{algo.use}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Source */}
        <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            오픈소스 라이선스
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                LGPL-v3
              </div>
              <div className="text-sm text-gray-600">SAGE Core</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">MIT</div>
              <div className="text-sm text-gray-600">Smart Contracts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">BSD-3</div>
              <div className="text-sm text-gray-600">Dependencies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                Apache-2.0
              </div>
              <div className="text-sm text-gray-600">CLI Tools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
