import { Github, Mail, FileText, ExternalLink } from "lucide-react";
import { LINKS, CONTACT, EVENT } from "@/lib/constants";

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Side - CTA */}
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                지금 시작하세요
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                SAGE로 안전한 AI Agent를 만들어보세요
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
                  className="flex items-center justify-between w-full bg-indigo-600 text-white px-6 py-4 rounded-xl hover:bg-indigo-700 transition-colors group"
                >
                  <div className="flex items-center">
                    <FileText className="h-6 w-6 mr-3" />
                    <span className="font-semibold">Documentation</span>
                  </div>
                  <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href={`mailto:${CONTACT.EMAIL}`}
                  className="flex items-center justify-between w-full bg-purple-600 text-white px-6 py-4 rounded-xl hover:bg-purple-700 transition-colors group"
                >
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-3" />
                    <span className="font-semibold">Contact Us</span>
                  </div>
                  <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Right Side - Stats */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-12 flex flex-col justify-center text-white">
              <h3 className="text-2xl font-bold mb-8">프로젝트 현황</h3>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-90">명세서 검증 완료</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-4xl font-bold mb-2">261+</div>
                  <div className="text-sm opacity-90">Go 소스 파일</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-4xl font-bold mb-2">3+</div>
                  <div className="text-sm opacity-90">지원 블록체인</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conference Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-gray-700 font-semibold">{EVENT.NAME}</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">{EVENT.ORGANIZER}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
