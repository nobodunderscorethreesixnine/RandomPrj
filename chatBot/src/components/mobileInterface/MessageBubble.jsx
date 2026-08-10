import ReactMarkdown from "react-markdown";
import { motion } from "motion/react";

export default function MessageBubble({ msg }) {
  return msg.from === "client" ? (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="relative border border-r-6 p-2 text-right"
    >
      <p className="text-xl">{msg.msg}</p>
      <span className="absolute -bottom-5 left-0">{msg.timeStamp}</span>
    </motion.div>
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="relative border border-l-6 p-2"
    >
      <div className="text-xl whitespace-pre-wrap">
        <ReactMarkdown>{msg.msg}</ReactMarkdown>
      </div>
      <span className="absolute right-0 -bottom-5">{msg.timeStamp}</span>
    </motion.div>
  );
}
