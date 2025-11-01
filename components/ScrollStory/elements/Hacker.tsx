"use client";

import { motion } from "framer-motion";
import { UserX, Skull } from "lucide-react";

interface HackerProps {
  className?: string;
}

export default function Hacker({ className = "" }: HackerProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      {/* Hacker Character - Pickpocket/Thief Style */}
      <div className="relative w-32 h-40">
        {/* Head */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full border-2 border-red-500/50">
          {/* Hood Shadow */}
          <div className="absolute inset-0 bg-black/60 rounded-full" />

          {/* Skull Face */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Skull className="w-8 h-8 text-red-400" strokeWidth={2} />
          </div>

          {/* Glowing Red Eyes */}
          <div className="absolute top-5 left-3 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <div className="absolute top-5 right-3 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        </div>

        {/* Hood/Cape */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-20 h-6 bg-gradient-to-b from-gray-800 to-black rounded-t-full" />

        {/* Body */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-14 h-20 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border-2 border-red-500/30">
          {/* Dark Coat/Jacket */}
          <div className="absolute inset-0 bg-black/40 rounded-lg" />

          {/* Warning Badge */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2">
            <UserX className="w-6 h-6 text-red-500" strokeWidth={2} />
          </div>

          {/* Zipper Line */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gray-600" />
        </div>

        {/* Arms - Reaching Out (pickpocket gesture) */}
        <motion.div
          className="absolute top-20 -left-2 w-12 h-3 bg-gray-700 rounded-full origin-right"
          style={{ rotate: -30 }}
          animate={{ rotate: [-30, -20, -30] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-20 -right-2 w-12 h-3 bg-gray-700 rounded-full origin-left"
          style={{ rotate: 30 }}
          animate={{ rotate: [30, 20, 30] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Warning Aura */}
        <motion.div
          className="absolute inset-0 border-2 border-red-500/30 rounded-full blur-sm"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Shadow */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-3 bg-black/40 blur-md rounded-full" />
      </div>

      {/* Danger Label */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-red-900/80 px-3 py-1 rounded border border-red-500">
        <p className="text-xs font-bold text-red-300 tracking-wide">THREAT</p>
      </div>
    </motion.div>
  );
}
