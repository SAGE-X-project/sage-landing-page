// SAGE Landing Page Constants

// External Links
export const LINKS = {
  GITHUB_REPO: "https://github.com/sage-x-project/sage",
  GITHUB_LANDING: "https://github.com/SAGE-X-project/sage-landing-page",
  DOCUMENTATION: "https://github.com/sage-x-project/sage#readme",
  API_REFERENCE: "https://github.com/sage-x-project/sage/wiki",
  EXAMPLES: "https://github.com/sage-x-project/sage/tree/main/examples",
} as const;

// Contact Information
export const CONTACT = {
  EMAIL: "contact@sage-project.io",
  GITHUB_ISSUES: "https://github.com/sage-x-project/sage/issues",
} as const;

// Social Media (if needed in the future)
export const SOCIAL = {
  TWITTER: "",
  DISCORD: "",
  TELEGRAM: "",
} as const;

// Project Information
export const PROJECT = {
  NAME: "SAGE",
  FULL_NAME: "Secure Agent Guarantee Engine",
  TAGLINE: "Trust Layer for AI Agent Era",
  DESCRIPTION:
    "RFC 표준 기반 메시지 서명/암호화 + 블록체인 DID 검증으로 안전한 AI Agent 생태계를 구축합니다.",
  KEYWORDS:
    "AI Agent, Security, Blockchain, RFC-9421, RFC-9180, DID, Trust Layer, SAGE",
} as const;

// Event Information
export const EVENT = {
  NAME: "2025 오픈소스 개발자대회 출품작",
  ORGANIZER: "과학기술정보통신부 · 정보통신산업진흥원 주최",
} as const;

// Navigation Items
export const NAV_ITEMS = [
  { name: "소개", href: "#hero" },
  { name: "문제", href: "#problem" },
  { name: "솔루션", href: "#solution" },
  { name: "기능", href: "#features" },
  { name: "기술", href: "#technology" },
  { name: "로드맵", href: "#roadmap" },
] as const;
