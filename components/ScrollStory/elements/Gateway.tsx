"use client";

import { motion } from "framer-motion";
import { Bus, Shield, Clock } from "lucide-react";

interface GatewayProps {
  className?: string;
}

export default function Gateway({ className = "" }: GatewayProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      {/* Bus Terminal Building */}
      <div className="relative w-[450px] h-72">
        {/* Main Terminal Structure */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-800 to-emerald-900 rounded-2xl border-4 border-emerald-600 shadow-2xl overflow-hidden">

          {/* Terminal Sign */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-emerald-700 px-8 py-3 rounded-t-xl border-4 border-emerald-500 shadow-lg">
            <div className="flex items-center space-x-2">
              <Bus className="w-6 h-6 text-emerald-200" />
              <p className="text-lg font-bold text-emerald-100 tracking-wider">GATEWAY TERMINAL</p>
            </div>
          </div>

          {/* Gateway Shield Icon - Center */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2">
            <Shield className="w-16 h-16 text-emerald-300" strokeWidth={2} />
          </div>

          {/* Platform Information Board */}
          <div className="absolute top-28 left-1/2 -translate-x-1/2 bg-slate-900/80 px-6 py-3 rounded-lg border-2 border-emerald-500/60 min-w-[280px]">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <p className="text-xs text-emerald-400 font-mono">ARRIVAL & DEPARTURE</p>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-300 font-mono">Platform 1</span>
                <span className="text-green-400 font-mono">● ON TIME</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-300 font-mono">Platform 2</span>
                <span className="text-green-400 font-mono">● ON TIME</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-300 font-mono">Platform 3</span>
                <span className="text-yellow-400 font-mono">◐ DELAYED</span>
              </div>
            </div>
          </div>

          {/* Platform Numbers - Left */}
          <div className="absolute bottom-8 left-6 space-y-2">
            <div className="bg-emerald-900/70 px-4 py-2 rounded border-l-4 border-emerald-400">
              <p className="text-sm font-bold text-emerald-200">Platform 1</p>
              <p className="text-xs text-emerald-300/70">Local Network</p>
            </div>
            <div className="bg-emerald-900/70 px-4 py-2 rounded border-l-4 border-emerald-400">
              <p className="text-sm font-bold text-emerald-200">Platform 2</p>
              <p className="text-xs text-emerald-300/70">ISP Gateway</p>
            </div>
          </div>

          {/* Platform Numbers - Right */}
          <div className="absolute bottom-8 right-6 space-y-2">
            <div className="bg-emerald-900/70 px-4 py-2 rounded border-r-4 border-emerald-400">
              <p className="text-sm font-bold text-emerald-200">Platform 3</p>
              <p className="text-xs text-emerald-300/70">WAN Route</p>
            </div>
            <div className="bg-emerald-900/70 px-4 py-2 rounded border-r-4 border-yellow-400">
              <p className="text-sm font-bold text-emerald-200">Platform 4</p>
              <p className="text-xs text-yellow-300/70">Inspection</p>
            </div>
          </div>

          {/* Terminal Lights */}
          <div className="absolute top-4 left-0 right-0 flex justify-around px-8">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-emerald-400 rounded-full"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {/* Decorative Benches/Waiting Area */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-12 h-2 bg-emerald-700/50 rounded" />
            ))}
          </div>
        </div>

        {/* Bus Icons - Moving */}
        <motion.div
          className="absolute top-1/2 -left-12"
          animate={{
            x: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Bus className="w-10 h-10 text-emerald-400" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 -right-12"
          animate={{
            x: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Bus className="w-10 h-10 text-emerald-400 transform scale-x-[-1]" />
        </motion.div>

        {/* Base/Platform */}
        <div className="absolute -bottom-4 left-0 right-0 h-6 bg-gradient-to-b from-emerald-700 to-emerald-800 rounded-b-2xl" />
      </div>

      {/* Shadow */}
      <div className="absolute -bottom-6 left-12 right-12 h-4 bg-black/30 blur-xl rounded-full" />
    </motion.div>
  );
}
