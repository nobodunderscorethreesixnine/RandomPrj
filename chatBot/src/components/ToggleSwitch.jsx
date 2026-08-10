import { motion } from "motion/react";

export default function ToggleSwitch({ isModeAi, setIsModeAi }) {
  return (
    <div className="relative flex w-[200px] justify-between gap-1 border border-4 border-b-6 border-black bg-[#7FBC8C] p-1 text-2xl font-bold sm:w-[250px]">
      <motion.div
        animate={{ x: isModeAi ? "calc(100% + 4px)" : "0%" }}
        transition={{ type: "tween" }}
        className="absolute top-1 bottom-1 w-[calc(50%-6px)] border-2 border-t-4 border-black bg-[#FF6B6B]"
      />

      <div
        onClick={() => setIsModeAi(false)}
        className="relative z-10 flex-1 cursor-pointer py-1 text-center"
      >
        <span>Bot</span>
      </div>

      <div
        onClick={() => setIsModeAi(true)}
        className="relative z-10 flex-1 cursor-pointer py-1 text-center"
      >
        <span>AI Bot</span>
      </div>
    </div>
  );
}
