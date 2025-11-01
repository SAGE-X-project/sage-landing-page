"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import MacBook from "./elements/MacBook";
import ChatGPT from "./elements/ChatGPT";

interface Scene1Props {
  scrollYProgress: MotionValue<number>;
}

export default function Scene1_MacBookTyping({ scrollYProgress }: Scene1Props) {
  // Scene 1 happens from 0% to 15% of total scroll
  const sceneProgress = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  // MacBook animations - 완전히 로딩되는 시간을 더 길게
  const macbookScale = useTransform(sceneProgress, [0, 0.4, 1], [0.5, 1, 1]);
  const macbookY = useTransform(sceneProgress, [0, 0.4], [200, 0]);
  const macbookOpacity = useTransform(sceneProgress, [0, 0.3], [0, 1]);

  // Scene1에서 화면 확대 (15% ~ 30%) - 흔들림 없이 부드럽게
  const zoomScale = useTransform(scrollYProgress, [0.15, 0.30], [1, 8]);

  // Typing animation - 맥북 로딩 완전 완료 후 시작 (0.4 완료 → 0.5부터 타이핑 시작)
  const typingProgress = useTransform(sceneProgress, [0.5, 0.85], [0, 1]);

  // 타이핑 완료 후 메시지 전송 애니메이션 (0.85 ~ 1.0)
  const messageSubmitted = useTransform(sceneProgress, [0.85, 1], [0, 1]);

  // Scene1은 Scene2로 부드럽게 전환 (롤러코스터 후 터널로)
  const sceneOpacity = useTransform(scrollYProgress, [0.15, 0.28, 0.30], [1, 1, 0]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        opacity: sceneOpacity,
        zIndex: 100,
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${(i * 17 + 23) % 100}%`,
              top: `${(i * 13 + 41) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Content Container - Centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Title - Above MacBook */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            평범한 하루의 시작
          </h2>
          <p className="text-lg text-gray-400 font-light">
            AI에게 간단한 요청을 합니다
          </p>
        </motion.div>

        {/* MacBook with ChatGPT - Centered */}
        <motion.div
          style={{
            opacity: macbookOpacity,
            scale: zoomScale,
          }}
        >
          <MacBook scale={macbookScale} y={macbookY}>
            <ChatGPT
              typingProgress={typingProgress}
              messageSubmitted={messageSubmitted}
            />
          </MacBook>
        </motion.div>
      </div>
    </motion.div>
  );
}
