"use client";

import { motion } from "framer-motion";
import { Package } from "lucide-react";

interface PacketProps {
  className?: string;
  label?: string;
}

export default function Packet({ className = "", label = "DATA" }: PacketProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      {/* Packet Box - 3D Carrier Style */}
      <div className="relative w-24 h-24 perspective-1000">
        {/* Front Face */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg border-2 border-amber-800 shadow-2xl flex items-center justify-center">
          <Package className="w-12 h-12 text-amber-200" strokeWidth={2} />
        </div>

        {/* Top Face - 3D Effect */}
        <div className="absolute -top-2 left-1 right-1 h-4 bg-gradient-to-b from-amber-500 to-amber-600 rounded-t-lg transform -skew-x-12 border-t-2 border-l-2 border-r-2 border-amber-700" />

        {/* Side Face - 3D Effect */}
        <div className="absolute -right-2 top-1 bottom-1 w-4 bg-gradient-to-r from-amber-700 to-amber-800 rounded-r-lg transform skew-y-12 border-r-2 border-t-2 border-b-2 border-amber-900" />

        {/* Label Sticker */}
        <div className="absolute bottom-2 left-2 right-2 bg-white/90 rounded px-2 py-1 text-center">
          <p className="text-xs font-bold text-amber-900">{label}</p>
        </div>

        {/* Tape Lines */}
        <div className="absolute top-1/3 left-0 right-0 h-1 bg-amber-400/40" />
        <div className="absolute top-1/2 left-1 right-1 h-0.5 bg-amber-300/30" />
      </div>

      {/* Shadow */}
      <div className="absolute -bottom-2 left-2 right-2 h-2 bg-black/20 blur-md rounded-full" />
    </motion.div>
  );
}
