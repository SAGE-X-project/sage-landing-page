import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAGE - Secure Agent Guarantee Engine",
  description:
    "Trust Layer for AI Agent Era. RFC 표준 기반 메시지 서명/암호화 + 블록체인 DID 검증으로 안전한 AI Agent 생태계를 구축합니다.",
  keywords:
    "AI Agent, Security, Blockchain, RFC-9421, RFC-9180, DID, Trust Layer, SAGE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
