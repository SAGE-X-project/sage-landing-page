import { Code, Server, Cloud, Box } from "lucide-react";

export default function Architecture() {
  return (
    <section id="architecture" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            시스템 아키텍처
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            확장 가능한 플러그인 기반 설계
          </p>
        </div>

        {/* Architecture Layers */}
        <div className="space-y-6 mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border-l-4 border-blue-500">
            <div className="flex items-start">
              <Code className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Application Layer
                </h3>
                <p className="text-gray-600 mb-3">
                  AI Agents (ChatGPT, Gemini, Claude, etc.)
                </p>
                <div className="text-sm text-gray-500">
                  기존 Agent 코드 최소 수정으로 SAGE 통합 가능
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border-l-4 border-blue-500">
            <div className="flex items-start">
              <Server className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  SAGE Trust Layer
                </h3>
                <div className="grid md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      core/rfc9421/
                    </p>
                    <p className="text-xs text-gray-600">메시지 서명/검증</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      hpke/
                    </p>
                    <p className="text-xs text-gray-600">HPKE 암호화</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      did/
                    </p>
                    <p className="text-xs text-gray-600">DID 관리</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      crypto/
                    </p>
                    <p className="text-xs text-gray-600">암호화 엔진</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      session/
                    </p>
                    <p className="text-xs text-gray-600">세션 관리</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      transport/
                    </p>
                    <p className="text-xs text-gray-600">HTTP/WebSocket</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-500">
            <div className="flex items-start">
              <Cloud className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Integration Layer
                </h3>
                <div className="grid md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      Blockchain
                    </p>
                    <p className="text-xs text-gray-600">
                      Ethereum, Kaia, Solana
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      Multi-Lang SDKs
                    </p>
                    <p className="text-xs text-gray-600">
                      Go, Python, TypeScript
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      CLI Tools
                    </p>
                    <p className="text-xs text-gray-600">
                      sage-crypto, sage-did
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plugin Architecture */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
          <div className="flex items-center mb-6">
            <Box className="h-6 w-6 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              플러그인 아키텍처
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-gray-900 mb-3">Crypto Plugins</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Secp256k1 (ECDSA)</li>
                <li>• Ed25519 (EdDSA)</li>
                <li>• X25519 (ECDH)</li>
                <li>• RSA-256</li>
                <li>• ChaCha20Poly1305</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-gray-900 mb-3">
                Blockchain Plugins
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Ethereum Adapter</li>
                <li>• Kaia Adapter</li>
                <li>• Solana Adapter</li>
                <li>• Custom Chain Support</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-gray-900 mb-3">Storage Plugins</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• File Storage</li>
                <li>• Vault Storage</li>
                <li>• OS Keychain</li>
                <li>• Cloud Storage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
