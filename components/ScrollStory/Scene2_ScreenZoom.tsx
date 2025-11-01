"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Packet from "./elements/Packet";

interface Scene2Props {
  scrollYProgress: MotionValue<number>;
}

export default function Scene2_ScreenZoom({ scrollYProgress }: Scene2Props) {
  const sceneProgress = useTransform(scrollYProgress, [0.30, 0.35], [0, 1]);
  const sceneOpacity = useTransform(scrollYProgress, [0.30, 0.31, 0.35, 0.37], [0, 1, 1, 0]);

  // 회로 기판이 나타남
  const circuitOpacity = useTransform(sceneProgress, [0, 0.15], [0, 1]);

  // 터널 진입 - 광케이블 터널로 빨려들어가는 효과
  const tunnelOpacity = useTransform(sceneProgress, [0.1, 0.25], [0, 1]);
  const tunnelScale = useTransform(sceneProgress, [0.1, 1], [0.5, 3]);

  // 광케이블 라인들이 뒤로 지나가는 효과 (지하철 터널 느낌)
  const cableMovement = useTransform(sceneProgress, [0.2, 1], [0, 1000]);

  // 패킷이 터널을 따라 이동
  const packetZ = useTransform(sceneProgress, [0.3, 1], [-500, 0]);
  const packetOpacity = useTransform(sceneProgress, [0.3, 0.5, 0.9, 1], [0, 1, 1, 0]);
  const packetScale = useTransform(sceneProgress, [0.3, 0.6, 1], [0.3, 1, 1.2]);

  // 텍스트는 씬 시작과 동시에 나타남
  const textOpacity = useTransform(sceneProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  // 디지털 파티클들이 빠르게 지나감
  const particleSpeed = useTransform(sceneProgress, [0.3, 1], [0, 2000]);

  // 회로를 따라 좌우로 꺾이는 효과 (카메라 뷰 이동)
  const circuitPathX = useTransform(
    sceneProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, -150, 100, -120, 80, 0]
  );

  const circuitPathY = useTransform(
    sceneProgress,
    [0, 0.15, 0.35, 0.55, 0.75, 0.9, 1],
    [0, 80, -120, 90, -100, 60, 0]
  );

  // 회로 경로를 따라 회전하는 효과
  const circuitPathRotate = useTransform(
    sceneProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, -5, 8, -6, 4, 0]
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{ opacity: sceneOpacity, zIndex: 90 }}
    >
      <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden relative">

        {/* 회로 경로를 따라 움직이는 컨테이너 */}
        <motion.div
          className="absolute inset-0"
          style={{
            x: circuitPathX,
            y: circuitPathY,
            rotate: circuitPathRotate,
          }}
        >

        {/* 1. 회로 기판 배경 */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: circuitOpacity }}
        >
          <div className="w-full h-full bg-gradient-to-b from-green-950/20 to-blue-950/20">
            {/* 회로 패턴 */}
            <svg className="w-full h-full opacity-30">
              <defs>
                <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 0 50 L 30 50 L 30 20 L 70 20 L 70 80 L 100 80"
                        stroke="#22d3ee" strokeWidth="2" fill="none" />
                  <circle cx="30" cy="50" r="3" fill="#22d3ee" />
                  <circle cx="30" cy="20" r="3" fill="#22d3ee" />
                  <circle cx="70" cy="20" r="3" fill="#22d3ee" />
                  <circle cx="70" cy="80" r="3" fill="#22d3ee" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
          </div>
        </motion.div>

        {/* 2. 광케이블 터널 - 원근감 있는 터널 */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: tunnelOpacity }}
        >
          {/* 터널의 광케이블 라인들 - 지하철 터널처럼 */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * 360;
            const radius = 40 + (i % 3) * 5;
            return (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{
                  width: "2px",
                  height: "200%",
                  background: `linear-gradient(to bottom, transparent, #3b82f6, #06b6d4, transparent)`,
                  transformOrigin: "center top",
                  transform: `translateX(-50%) translateY(-50%) rotate(${angle}deg) translateY(-${radius}%)`,
                  y: cableMovement,
                  opacity: 0.6,
                }}
              />
            );
          })}

          {/* 터널 중심 빛 */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ scale: tunnelScale }}
          >
            <div className="w-32 h-32 rounded-full bg-cyan-400/20 blur-3xl" />
          </motion.div>
        </motion.div>

        {/* 3. 디지털 파티클들 - 빠르게 지나가는 데이터 */}
        <motion.div className="absolute inset-0" style={{ opacity: tunnelOpacity }}>
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent"
              style={{
                left: `${(i * 37 + 20) % 100}%`,
                top: `${(i * 23) % 100}%`,
                y: particleSpeed,
                opacity: (i % 3) * 0.3 + 0.3,
              }}
            />
          ))}
        </motion.div>

        {/* 4. 패킷이 터널을 따라 앞으로 다가옴 */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            opacity: packetOpacity,
            scale: packetScale,
            z: packetZ,
          }}
        >
          <Packet label="META GLASSES" />
          {/* 패킷 뒤 트레일 효과 */}
          <motion.div
            className="absolute inset-0 -z-10"
            style={{
              background: "radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
        </motion.div>

        {/* 5. 속도감 라인들 */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: tunnelOpacity }}
        >
          <defs>
            <linearGradient id="speedLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${i * 12}%`}
              y1="0%"
              x2={`${50 + (i - 4) * 5}%`}
              y2="100%"
              stroke="url(#speedLine)"
              strokeWidth="2"
              style={{ y: cableMovement }}
            />
          ))}
        </motion.svg>

        {/* Title */}
        <motion.div
          className="absolute top-20 left-1/2 -translate-x-1/2 text-center z-10"
          style={{ opacity: textOpacity }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 tracking-tight">
            광케이블을 따라 이동 중
          </h2>
          <p className="text-lg text-cyan-300/70 font-light">
            Router까지 데이터가 전송되는 중...
          </p>
        </motion.div>

        {/* 속도 표시 */}
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10"
          style={{ opacity: textOpacity }}
        >
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/50 rounded-lg px-6 py-3">
            <p className="text-cyan-400 font-mono text-sm">
              <span className="text-cyan-300">Speed:</span> <span className="font-bold">299,792 km/s</span>
            </p>
          </div>
        </motion.div>

        </motion.div>
        {/* 회로 경로 컨테이너 끝 */}

      </div>
    </motion.div>
  );
}
