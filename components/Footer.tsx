import { Shield, Github, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-indigo-500" />
              <span className="text-2xl font-bold text-white">SAGE</span>
            </div>
            <p className="text-gray-400 mb-4">
              Secure Agent Guarantee Engine
              <br />
              Trust Layer for AI Agent Era
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/sage-x-project/sage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@sage-project.io"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">프로젝트</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  소개
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  기능
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  className="hover:text-white transition-colors"
                >
                  기술
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  className="hover:text-white transition-colors"
                >
                  로드맵
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">리소스</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/sage-x-project/sage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Examples
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} SAGE Project. Licensed under LGPL-v3.
            </div>
            <div className="text-sm text-gray-400">
              2025 오픈소스 개발자대회 출품작
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
