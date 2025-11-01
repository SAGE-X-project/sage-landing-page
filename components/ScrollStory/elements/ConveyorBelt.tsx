"use client";

import { motion } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";

interface ConveyorBeltProps {
  className?: string;
}

export default function ConveyorBelt({ className = "" }: ConveyorBeltProps) {
  return (
    <motion.div className={`relative ${className}`}>
      {/* Conveyor Belt System */}
      <div className="relative w-[600px] h-64">

        {/* Main Belt - Horizontal */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-24 bg-gradient-to-b from-gray-700 to-gray-800 border-t-4 border-b-4 border-gray-600 shadow-2xl">
          {/* Belt Surface Pattern */}
          <div className="absolute inset-0 flex items-center">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-12 h-1 bg-gray-600"
                style={{ left: `${i * 8.5}%` }}
                animate={{ x: [-10, 610] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Moving Rollers */}
          <div className="absolute -bottom-3 left-0 right-0 flex justify-between px-8">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="w-6 h-6 rounded-full bg-gray-600 border-2 border-gray-500"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </div>

        {/* Junction Point - Split Path */}
        <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-32 h-32">
          {/* Decision Arrow - Pointing to different paths */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-yellow-600 rounded-full w-16 h-16 flex items-center justify-center shadow-xl">
            <motion.div
              animate={{ rotate: [0, -45, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight className="w-8 h-8 text-yellow-200" strokeWidth={3} />
            </motion.div>
          </div>

          {/* Path Labels */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-800 px-3 py-1 rounded border border-gray-600">
            <p className="text-xs text-gray-300 font-mono">ROUTING</p>
          </div>
        </div>

        {/* Upper Path - Alternative Route (faded) */}
        <div className="absolute top-8 right-0 w-48 h-16 bg-gradient-to-b from-gray-700/50 to-gray-800/50 border-2 border-gray-600/50 rounded-r-xl opacity-40">
          <div className="absolute top-1/2 -translate-y-1/2 left-4">
            <p className="text-xs text-gray-400 font-mono">Original Route</p>
          </div>
        </div>

        {/* Lower Path - Amazon Destination (highlighted) */}
        <div className="absolute bottom-8 right-0 w-56 h-20 bg-gradient-to-b from-orange-700 to-orange-800 border-4 border-orange-500 rounded-r-xl shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Package className="w-8 h-8 text-orange-200 mx-auto mb-1" />
              <p className="text-sm font-bold text-orange-100">AMAZON</p>
              <p className="text-xs text-orange-200/70">Redirected</p>
            </div>
          </div>

          {/* Pulsing glow */}
          <motion.div
            className="absolute inset-0 bg-orange-500/30 rounded-r-xl"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Support Structure */}
        <div className="absolute -bottom-8 left-1/4 w-3 h-12 bg-gradient-to-b from-gray-600 to-gray-700" />
        <div className="absolute -bottom-8 left-1/2 w-3 h-12 bg-gradient-to-b from-gray-600 to-gray-700" />
        <div className="absolute -bottom-8 left-3/4 w-3 h-12 bg-gradient-to-b from-gray-600 to-gray-700" />

        {/* Base Platform */}
        <div className="absolute -bottom-10 left-0 right-0 h-2 bg-gray-800" />
      </div>
    </motion.div>
  );
}
