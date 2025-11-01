"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import ConveyorBelt from "./elements/ConveyorBelt";
import Packet from "./elements/Packet";

interface Scene6Props {
  scrollYProgress: MotionValue<number>;
}

export default function Scene6_ConveyorBelt({ scrollYProgress }: Scene6Props) {
  const sceneProgress = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const sceneOpacity = useTransform(scrollYProgress, [0.7, 0.71, 0.79, 0.8], [0, 1, 1, 0]);

  // Conveyor belt - appears
  const beltScale = useTransform(sceneProgress, [0, 0.2], [0.8, 1]);
  const beltOpacity = useTransform(sceneProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.8]);

  // Packet - travels along the belt
  const packetX = useTransform(sceneProgress, [0, 0.3, 0.6, 1], [-300, -100, 150, 400]);
  const packetY = useTransform(sceneProgress, [0, 0.3, 0.6, 1], [0, 0, 30, 50]);
  const packetScale = useTransform(sceneProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const packetOpacity = useTransform(sceneProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  // Amazon tag - appears and sticks to packet
  const tagOpacity = useTransform(sceneProgress, [0.3, 0.45, 0.9, 1], [0, 1, 1, 0.8]);
  const tagScale = useTransform(sceneProgress, [0.3, 0.5], [0.5, 1]);
  const tagY = useTransform(sceneProgress, [0.3, 0.5], [-50, 0]);

  // Warning indicators
  const warningOpacity = useTransform(sceneProgress, [0.4, 0.5, 0.6], [0, 1, 1]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{ opacity: sceneOpacity, zIndex: 65 }}
    >
      <div className="w-full h-full bg-gradient-to-b from-slate-950 via-orange-950/20 to-slate-950 flex items-center justify-center overflow-hidden relative">

        {/* Industrial Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="industrialGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="#f97316" />
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f97316" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#industrialGrid)" />
          </svg>
        </div>

        {/* Conveyor Belt System */}
        <motion.div
          className="absolute"
          style={{
            scale: beltScale,
            opacity: beltOpacity,
          }}
        >
          <ConveyorBelt />
        </motion.div>

        {/* Fake Packet on Belt */}
        <motion.div
          className="absolute"
          style={{
            x: packetX,
            y: packetY,
            scale: packetScale,
            opacity: packetOpacity,
          }}
        >
          <div className="relative">
            <Packet label="FAKE DATA" />

            {/* Amazon Tag attached to packet */}
            <motion.div
              className="absolute -top-16 left-1/2 -translate-x-1/2"
              style={{
                opacity: tagOpacity,
                scale: tagScale,
                y: tagY,
              }}
            >
              <div className="bg-orange-500 px-6 py-3 rounded-lg border-4 border-orange-600 shadow-2xl relative">
                {/* Tag hole */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-700 rounded-full border-2 border-orange-600" />

                {/* Tag content */}
                <div className="text-center">
                  <p className="text-xl font-bold text-white mb-1">AMAZON</p>
                  <p className="text-xs text-orange-100">Destination</p>
                </div>

                {/* Barcode */}
                <div className="mt-2 flex space-x-0.5">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="w-1 h-6 bg-black" />
                  ))}
                </div>
              </div>

              {/* String connecting tag to packet */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-orange-400" />
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          className="absolute top-16 left-1/2 -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            잘못된 목적지로 전송됩니다
          </h2>
          <p className="text-lg text-gray-400 font-light">
            조작된 패킷이 Amazon으로 향하고 있습니다
          </p>
        </motion.div>

        {/* Warning - Misdirection Alert */}
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
          style={{ opacity: warningOpacity }}
        >
          <div className="bg-orange-900/90 px-8 py-4 rounded-lg border-2 border-orange-500 shadow-2xl">
            <p className="text-base font-bold text-orange-200 tracking-wide text-center mb-2">
              ⚠️ 경로 변경 감지
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="text-center">
                <p className="text-gray-400">예상 목적지</p>
                <p className="text-green-400 font-mono">Original Site</p>
              </div>
              <div className="text-2xl text-gray-500">→</div>
              <div className="text-center">
                <p className="text-gray-400">실제 목적지</p>
                <p className="text-orange-400 font-bold font-mono">AMAZON</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Danger particles - orange themed */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-500/20 rounded-full"
              style={{
                left: `${(i * 21 + 10) % 100}%`,
                top: `${(i * 27 + 20) % 100}%`,
              }}
              animate={{
                x: [0, 40, 0],
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + (i % 2),
                repeat: Infinity,
                delay: i * 0.25,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
