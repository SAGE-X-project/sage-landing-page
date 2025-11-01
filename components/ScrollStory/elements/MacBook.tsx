"use client";

import { motion, MotionValue } from "framer-motion";
import { ReactNode } from "react";

interface MacBookProps {
  children: ReactNode;
  scale?: MotionValue<number>;
  y?: MotionValue<number>;
  className?: string;
}

export default function MacBook({ children, scale, y, className = "" }: MacBookProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ scale, y }}
    >
      {/* MacBook Body */}
      <div className="relative mx-auto" style={{ width: "1000px", height: "625px" }}>
        {/* Screen Bezel */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-3 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl z-20" />

          {/* Screen */}
          <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
            {children}
          </div>
        </div>

        {/* Bottom Lip */}
        <div className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl" />
      </div>

      {/* Keyboard Base */}
      <div className="relative mx-auto mt-1" style={{ width: "1100px", height: "30px" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-600 rounded-b-3xl transform perspective-1000"
             style={{
               transformStyle: "preserve-3d",
               transform: "rotateX(5deg)"
             }}
        />
      </div>
    </motion.div>
  );
}
