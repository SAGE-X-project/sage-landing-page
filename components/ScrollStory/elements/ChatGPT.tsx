"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { Plus, MessageSquare, User, Menu, ArrowUp } from "lucide-react";

interface ChatGPTProps {
  typingProgress: MotionValue<number>;
  messageSubmitted: MotionValue<number>;
}

export default function ChatGPT({ typingProgress, messageSubmitted }: ChatGPTProps) {
  const text = "yo can u get me those meta smart glasses from amazon?";

  // 입력창의 텍스트가 사라지는 애니메이션
  const inputOpacity = useTransform(messageSubmitted, [0, 0.3], [1, 0]);

  // 채팅 메시지가 나타나는 애니메이션
  const chatMessageOpacity = useTransform(messageSubmitted, [0.3, 0.6], [0, 1]);
  const chatMessageY = useTransform(messageSubmitted, [0.3, 0.6], [20, 0]);

  return (
    <div className="w-full h-full bg-[#212121] flex">
      {/* Left Sidebar */}
      <div className="w-64 bg-[#171717] border-r border-gray-800 flex flex-col">
        {/* New Chat Button */}
        <div className="p-3">
          <button className="w-full flex items-center space-x-2 px-3 py-2.5 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors">
            <Plus className="w-4 h-4 text-gray-300" />
            <span className="text-sm text-gray-300 font-medium">New chat</span>
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto px-3 space-y-1">
          <div className="px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-300 truncate">Samsung Galaxy S26</span>
            </div>
          </div>
          <div className="px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-300 truncate">Samsung memory</span>
            </div>
          </div>
          <div className="px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-300 truncate">Doge when mars</span>
            </div>
          </div>
          <div className="px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-300 truncate">space-x is awesome</span>
            </div>
          </div>
        </div>

        {/* User Profile - Elon Musk */}
        <div className="p-3 border-t border-gray-800">
          <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
                alt="Elon Musk"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm text-gray-300 font-medium">Musk</span>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <h3 className="text-white font-semibold">ChatGPT 5</h3>
          </div>
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <Menu className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {/* Assistant Message */}
          <div className="mb-6 flex items-start space-x-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">AI</span>
            </div>
            <div className="flex-1 pt-1">
              <p className="text-gray-200 text-sm leading-relaxed">
                Hey! How can I help you today?
              </p>
            </div>
          </div>

          {/* User Message - appears after submission */}
          <motion.div
            className="flex items-start space-x-4 justify-end"
            style={{ opacity: chatMessageOpacity, y: chatMessageY }}
          >
            <div className="flex-1 flex justify-end">
              <div className="bg-[#2f2f2f] rounded-3xl px-5 py-3 max-w-md">
                <p className="text-white text-sm">
                  {text}
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
                alt="Elon Musk"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Input Area */}
        <motion.div className="px-6 pb-6" style={{ opacity: inputOpacity }}>
          <div className="bg-[#2f2f2f] rounded-3xl px-5 py-3 flex items-center space-x-3 shadow-lg">
            <div className="flex-1 text-white text-sm">
              <TypedText text={text} progress={typingProgress} />
            </div>
            <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0">
              <ArrowUp className="w-4 h-4 text-black" strokeWidth={3} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Separate component for typed text to avoid hook issues
function TypedText({ text, progress }: { text: string; progress: MotionValue<number> }) {
  const chars = text.split("");
  const charCount = useTransform(progress, [0, 1], [0, text.length]);

  return (
    <span className="relative inline-block">
      {chars.map((char, index) => {
        const opacity = useTransform(
          charCount,
          [index, index + 0.1],
          [0, 1]
        );
        const display = useTransform(
          charCount,
          (count) => count > index ? "inline" : "none"
        );

        return (
          <motion.span
            key={index}
            style={{
              opacity,
              display: display as any,
            }}
          >
            {char}
          </motion.span>
        );
      })}
      {/* Blinking cursor that follows the typed text */}
      <motion.span
        className="inline-block w-0.5 h-4 bg-white ml-0.5 align-middle"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  );
}
