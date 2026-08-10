import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import ChatInterface from "./mobileInterface/ChatInterface.jsx";

function getFormattedTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "2-digit",
  });
}

export default function AiBotInterface({
  setIsModeAi,
  isConnection,
  setIsConnection,
  setIsBotClick,
}) {
  const ws = useRef(null);
  const [userInput, setUserInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [messages, setMessages] = useState([]);

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
      setIsModeAi(false);
      setIsConnection(false);
    } else {
      const payload = JSON.stringify({
        from: "client",
        status: "reply",
        msg: sanitizeInput,
        timeStamp: getFormattedTime(),
        type: "message",
      });
      ws.current.send(payload);
      addMsg(JSON.parse(payload));
    }

    setUserInput("");
  }

  function checkEnterKey(key) {
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
          borderRadius: "0px",
          backgroundColor: "#FF6B6B",
          fontSize: "1.1rem",
        },
      });
      setIsBotClick(false);
      setIsModeAi(false);
    });

    ws.current.addEventListener("open", () => {
      ws.current.send(JSON.stringify({ type: "init", mode: "Ai" }));
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
      console.log(e.data);
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

  return (
    <ChatInterface
      onSend={sendMsg}
      onChange={setUserInput}
      value={userInput}
      messages={messages}
      isTyping={isBotTyping}
    />
  );
}
