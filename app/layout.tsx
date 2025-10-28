import type { Metadata } from "next";
import "./globals.css";
import { PROJECT } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${PROJECT.NAME} - ${PROJECT.FULL_NAME}`,
  description: `${PROJECT.TAGLINE}. ${PROJECT.DESCRIPTION}`,
  keywords: PROJECT.KEYWORDS,
  icons: {
    icon: "/favicon.ico",
  },
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
