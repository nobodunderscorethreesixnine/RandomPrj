require("dotenv").config();
const botInstruction = require("./botInstruction.js");
const WebSocket = require("ws");
const MODE = require("./constant.js");
const callAI = require("./geminiAiRequest.js");

function getFormattedTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function defaultWelcomeMsg(mode) {
  if (mode === MODE.ai) {
    return JSON.stringify({
      from: "ai",
      status: "reply",
      msg: "Hi ! I am an AI assistant. How can I help you?",
      timeStamp: getFormattedTime(),
      type: "connect",
    });
  } else if (mode === MODE.bot) {
    return JSON.stringify({
      from: "bot",
      status: "reply",
      msg: botInstruction("menu"),
      timeStamp: getFormattedTime(),
      type: "connect",
    });
  }
}

function typingPkg() {
  return JSON.stringify({
    from: "bot",
    status: "typing",
    msg: null,
    timeStamp: null,
    type: "connect",
  });
}

function replyPkg(from, msg) {
  return JSON.stringify({
    from: from,
    status: "reply",
    msg: msg,
    timeStamp: getFormattedTime(),
    type: "connect",
  });
}

const PORT = process.env.PORT || 8080;
const wss = new WebSocket.Server({ port: PORT });
console.log(`WebSocket server started on port ${PORT}`);

wss.on("connection", (socket) => {
  let chatMode = MODE.bot;
  socket.on("message", async (data) => {
    const packet = JSON.parse(data);
    switch (packet.type) {
      case "init":
        chatMode = packet.mode;
        socket.send(defaultWelcomeMsg(chatMode));
        break;
      case "disconnect":
        socket.close();
        break;
      case "message":
        if (chatMode === MODE.bot) {
          setTimeout(() => socket.send(typingPkg()), 1000);
          const replyMsg = botInstruction(packet.msg, wss);
          setTimeout(() => socket.send(replyPkg(MODE.bot, replyMsg)), 3000);
        } else if (chatMode === MODE.ai) {
          setTimeout(() => socket.send(typingPkg()), 1000);

          const reply = await callAI(packet.msg);
          socket.send(replyPkg(MODE.ai, reply));
        }
        break;
    }
  });
});
