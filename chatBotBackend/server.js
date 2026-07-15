const botInstruction = require("./botInstruction.js");
const WebSocket = require("ws");

function getFormattedTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

const welcomeMsg = botInstruction("menu");
const wss = new WebSocket.Server({ port: 8080 });

// wss.on("connection", (socket) => {
//   socket.on("message", (data) => {
//     socket.send(botInstruction(data.toString()));
//     console.log(data.toString());
//   });
// });

wss.on("connection", (socket) => {
  socket.send(
    JSON.stringify({
      from: "bot",
      status: "reply",
      msg: welcomeMsg,
      timeStamp: getFormattedTime(),
      type: "connect",
    }),
  );

  socket.on("message", (data) => {
    const clientMsg = JSON.parse(data.toString());
    console.log(clientMsg.msg);
    if (clientMsg.type === "disconnect") {
      socket.close();
      console.log(socket, "connection close");
    } else {
      setTimeout(() => {
        socket.send(
          JSON.stringify({
            from: "bot",
            status: "typing",
            msg: null,
            timeStamp: null,
            type: "connect",
          }),
        );
      }, 1000);
      setTimeout(() => {
        const replyMsg = botInstruction(clientMsg.msg, wss);
        socket.send(
          JSON.stringify({
            from: "bot",
            status: "reply",
            msg: replyMsg,
            timeStamp: getFormattedTime(),
            type: "connect",
          }),
        );
      }, 3000);
    }
  });
});

// wss.on("connection", (socket) => {
//   socket.on("message", (data) => {
//   const clientMsg = data.toString()
//   if (replyMsg.type === 'disconnect') {
//     socket.close()
//   } else {
//     socket.send(
//       JSON.stringify({ status: "typing", msg: null, timeStamp: null }),
//     );
//   }
//
// })}

//   socket.send(
//     JSON.stringify({ status: "typing", msg: null, timeStamp: null }),
//   );
//
//   setTimeout(() => {
//     const replyMsg = botInstruction(data.toString());
//     socket.send(
//       JSON.stringify({
//         status: "reply",
//         msg: replyMsg,
//         timeStamp: getFormattedTime(),
//       }),
//     );
//   }, 3000);
//   console.log(data.toString());
// });
//
