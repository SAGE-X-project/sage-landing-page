"use client";

import { motion } from "framer-motion";
import { Wifi, Radio, Plane } from "lucide-react";

interface RouterProps {
  className?: string;
}

export default function Router({ className = "" }: RouterProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      {/* Airport Terminal Building */}
      <div className="relative w-96 h-64">
        {/* Main Building */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-800 rounded-t-3xl border-4 border-slate-600 shadow-2xl">
          {/* Control Tower */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-b from-slate-600 to-slate-700 rounded-t-lg border-4 border-slate-500">
            <div className="absolute top-2 left-1/2 -translate-x-1/2">
              <Radio className="w-8 h-8 text-blue-400 animate-pulse" />
            </div>
          </div>

          {/* Router WiFi Icon - Center */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2">
            <Wifi className="w-16 h-16 text-blue-400" strokeWidth={2} />
          </div>

          {/* Airport Label */}
          <div className="absolute top-28 left-1/2 -translate-x-1/2 bg-slate-900/80 px-6 py-2 rounded-lg border border-blue-500/50">
            <p className="text-sm font-bold text-blue-400 tracking-wider">ROUTER TERMINAL</p>
          </div>

          {/* Gates - Left Side */}
          <div className="absolute top-32 left-4 space-y-2">
            <div className="flex items-center space-x-2 bg-slate-900/60 px-3 py-1.5 rounded">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-gray-300 font-mono">GATE A1</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-900/60 px-3 py-1.5 rounded">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-gray-300 font-mono">GATE A2</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-900/60 px-3 py-1.5 rounded">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-xs text-gray-300 font-mono">GATE A3</span>
            </div>
          </div>

          {/* Gates - Right Side */}
          <div className="absolute top-32 right-4 space-y-2">
            <div className="flex items-center space-x-2 bg-slate-900/60 px-3 py-1.5 rounded">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-gray-300 font-mono">GATE B1</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-900/60 px-3 py-1.5 rounded">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-gray-300 font-mono">GATE B2</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-900/60 px-3 py-1.5 rounded">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-xs text-gray-300 font-mono">GATE B3</span>
            </div>
          </div>

          {/* Runway Lights at Bottom */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-blue-400 rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Plane Icon - Circling */}
        <motion.div
          className="absolute -top-8 -right-8"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Plane className="w-8 h-8 text-blue-300" />
        </motion.div>

        {/* Base/Ground */}
        <div className="absolute -bottom-4 left-0 right-0 h-6 bg-gradient-to-b from-slate-600 to-slate-700 rounded-b-2xl" />
      </div>

      {/* Shadow */}
      <div className="absolute -bottom-6 left-8 right-8 h-4 bg-black/30 blur-xl rounded-full" />
    </motion.div>
  );
}
