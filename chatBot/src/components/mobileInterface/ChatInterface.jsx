import { motion } from "motion/react";
import Messages from "./Messages";
import ChatInput from "./ChatInput";

export default function ChatInterface({
  value,
  onChange,
  onSend,
  messages,
  isTyping,
}) {
  return (
    <section className="relative grid h-[80vh] grid-rows-[1fr_auto] gap-1 p-4">
      <svg className="pointer-events-none absolute inset-0 h-full w-full">
        <motion.rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="none"
          stroke="#000000"
          strokeWidth="8"

          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
            type: "spring",
            bounce: 0.6,
          }}
        />
      </svg>
      <Messages msg={messages} isTyping={isTyping} />
      <ChatInput value={value} onChange={onChange} onSend={onSend} />
    </section>
  );
}
