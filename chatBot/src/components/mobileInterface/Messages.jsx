import { useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import TypingAnimation from "../TypingAnimation";

export default function Messages({ msg, isTyping }) {
  const autoScroll = useRef("");
  useEffect(() => {
    autoScroll.current.scrollIntoView({ block: "nearest" });
  }, [msg, isTyping]);
  return (
    <section className="flex h-full min-h-0 scrollbar-none flex-col gap-6 overflow-scroll p-0">
      {msg?.map((item, index) => (
        <MessageBubble key={`${index}x`} msg={item} />
      ))}
      {isTyping && <TypingAnimation />}
      <div ref={autoScroll}></div>
    </section>
  );
}
