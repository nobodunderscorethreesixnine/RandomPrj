import { useState, useEffect, useRef } from "react";
import TypingMsgAnimation from "./TypingAnimation.jsx";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import toast from "react-hot-toast";

function getFormattedTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "2-digit",
  });
}

export default function BotInterface({
  setIsBotClick,
  isConnection,
  setIsConnection,
}) {
  const ws = useRef(null);
  const [userInput, setUserInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const scrollDiv = useRef(null);
  // const [isConnection, setIsConnection] = useState(false);
  // isError and errorTpe can be in same state

  useEffect(() => {
    scrollDiv.current.scrollIntoView({ block: "nearest" });
  }, [messages, isBotTyping]);

  function addMsg(data) {
    setMessages((prev) => [...prev, data]);
  }

  function sendMsg() {
    const sanitizeInput = userInput.trim();
    if (!sanitizeInput) return;

    if (sanitizeInput === "close") {
      ws.current.send(
        JSON.stringify({
          from: "client",
          status: "reply",
          msg: null,
          timeStamp: null,
          type: "disconnect",
        }),
      );
      ws.current.close();
      setIsBotClick(false);
    } else {
      const payload = JSON.stringify({
        from: "client",
        status: "reply",
        msg: sanitizeInput,
        timeStamp: getFormattedTime(),
        type: "connect",
      });
      ws.current.send(payload);
      addMsg(JSON.parse(payload));
    }

    setUserInput("");
  }

  function checkEntyKey(key) {
    if (key === "Enter") sendMsg();
  }

  useEffect(() => {
    // ws.current = new WebSocket("ws://localhost:8080");
    ws.current = new WebSocket(import.meta.env.VITE_WS_URL);

    ws.current.addEventListener("close", () => {
      console.log("connection closed");
      setIsBotTyping(false);
      setIsConnection(false);
      toast("Connection closed", {
        icon: "✅",
        style: {
          border: "4px solid black",
          borderBottom: "8px solid black",
          borderLeft: "8px solid black",
          borderRight: "8px solid black",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          borderRadius: "opx",
          backgroundColor: "#7FBC8C",
          fontSize: "1.1rem",
        },
      });
    });

    ws.current.addEventListener("error", () => {
      console.log("error");
      toast("Error, something went wrong", {
        icon: "⚠️",
        style: {
          border: "4px solid black",
          borderBottom: "8px solid black",
          borderLeft: "8px solid black",
          borderRight: "8px solid black",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          borderRadius: "opx",
          backgroundColor: "#FF6B6B",
          fontSize: "1.1rem",
        },
      });
      setIsBotClick(false);
    });

    ws.current.addEventListener("open", () => {
      console.log("connected");
      setIsConnection(true);
      toast("Connected successfully", {
        icon: "✅",
        style: {
          border: "4px solid black",
          borderBottom: "8px solid black",
          borderLeft: "8px solid black",
          borderRight: "8px solid black",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          borderRadius: "opx",
          backgroundColor: "#7FBC8C",
          fontSize: "1.1rem",
        },
      });
    });

    ws.current.addEventListener("message", (e) => {
      const packet = JSON.parse(e.data);

      if (packet.status === "typing") {
        setIsBotTyping(true);
      } else if (packet.status === "reply") {
        setIsBotTyping(false);
        addMsg(packet);
      }
    });

    return () => {
      ws.current.close();
    };
  }, []);

  //   Before 1,2,3 now work on the logic, like if server is closed and if i click the button then i am still showing
  //   the botInterface instead of that i should show a toast notification of error which is 'server error' or something.
  //   And make the toast notification a unique one like cyberpunk style
  //
  //   ANd for latter on add this in goal, i will change my portfolio to brualisim and neo-brutalisim.
  //
  //   1. i have to animate a little differnce between displaying a border and message
  //   2. And see once if writing animation on message is good idea or no ? (current i prefer not to add animation on text like
  //   displaying fade in etc)
  // 3. now i have to do this like when user click the button i want to display some animatin glitch like screen tearing like a pixleted
  //
  {
    /* <main className="flex flex-1 flex-col items-center gap-2 border p-4"> */
  }
  return (
    <main className="my-8 flex flex-1 flex-col items-center gap-2 p-4">
      <section
        className="relative flex h-[600px] w-full max-w-[350px] flex-col gap-4 overflow-y-scroll border-r-6 border-b-6 p-2"
        // className="flex h-[600px] w-full max-w-[350px] flex-col gap-4 overflow-y-scroll border border-3 border-r-6 border-b-6 p-2"
      >
        <svg className="pointer-events-none absolute inset-0 h-full w-full">
          <motion.rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="none"
            stroke="#000000"
            strokeWidth="4"

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
        {messages.map((msg, index) =>
          msg.from === "client" ? (
            <p
              key={`${index}x`}
              className="relative border border-r-4 p-2 text-right text-lg text-black lg:text-xl"
            >
              <span>{msg.msg}</span>
              <span className="absolute -bottom-0 left-1 text-base text-gray-400">
                {msg.timeStamp}
              </span>
            </p>
          ) : (
            <p
              key={`${index}y`}
              className="relative border border-l-4 p-2 text-lg whitespace-pre-line text-black lg:text-xl"
            >
              <span>{msg.msg}</span>
              <span className="absolute right-1 bottom-0 text-base text-gray-400">
                {msg.timeStamp}
              </span>
            </p>
          ),
        )}
        {isBotTyping && <TypingMsgAnimation />}
        <div ref={scrollDiv}></div>
      </section>

      <section className="flex w-full max-w-[350px] items-center gap-2 border-2 border-t-0 border-dashed bg-[#FDFD96]">
        <textarea
          disabled={!isConnection}
          autoFocus
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyUp={(e) => checkEntyKey(e.key)}
          className="flex-1 p-2 text-lg outline-none lg:text-xl"
        ></textarea>
        <Icon
          icon="material-symbols-light:send-outline"
          width={30}
          className=""
          onClick={sendMsg}
        />
      </section>
      {/* </div> */}
    </main>
  );
}

// now i will use 'mask'or something to make blur on top of screen and below of screen and try to make UI much better but now i have to test for basic function
//     like auto scrolling when new message popup and when user type close
// i have to close the connection properly. I will display toast
// notification.
