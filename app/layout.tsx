import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { PROJECT } from "@/lib/constants";
import SmoothScroll from "@/components/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

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
    <html lang="ko" className={spaceGrotesk.variable}>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
