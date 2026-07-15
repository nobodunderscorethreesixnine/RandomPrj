import "./App.css";
import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

function getFormattedTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "2-digit",
  });
}

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const ws = useRef(null);
  const scrollDiv = useRef(null);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorType, setErrorType] = useState("");

  useEffect(() => {
    scrollDiv.current.scrollIntoView();
  }, [messages, isBotTyping]);

  function addMsg(data) {
    setMessages((prev) => [...prev, data]);
  }

  // BAD code = while i check userInput i trim the value but while passing to server i didn't pass the trim value, so if msg
  // contains whitespace it will be send AND IMPROVED code = early exit (avoids deeply nested if statements)
  // function sendMsg() {
  //   if (userInput.trim() !== "") {
  //     const msg = {
  //       from: "client",
  //       status: "reply",
  //       msg: userInput,
  //       timeStamp: getFormattedTime(),
  //       type: "connect",
  //     };
  //     ws.current.send(msg);
  //     addMsg(msg);
  //     setUserInput("");
  //   }
  // }
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
      setIsBotTyping(false);
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

  function checkEntryKey(key) {
    if (key === "Enter") sendMsg();
  }

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8080");

    ws.current.addEventListener("error", () => {
      // console.log("error", e);
      setIsError(true);
      setErrorType("Could not connect to server. Is it running ?");
    });

    ws.current.addEventListener("open", () => {
      console.log("connection succeed");
    });

    ws.current.addEventListener("close", () => {
      console.log("connection closed");
    });

    ws.current.addEventListener("message", (e) => {
      // const packet = JSON.parse(e.data);
      //
      // if (packet.status === "typing") {
      //   setIsBotTyping(true);
      // } else if (packet.status === "reply") {
      //   setIsBotTyping(false);
      //   addMsg({ from: "bot", msg: packet.msg, timeStamp: packet.timeStamp });
      // }
      try {
        const packet = JSON.parse(e.data);

        if (packet.status === "typing") {
          setIsBotTyping(true);
        } else if (packet.status === "reply") {
          setIsBotTyping(false);
          // addMsg({ from: "bot", msg: packet.msg, timeStamp: packet.timeStamp });
          addMsg(packet);
        }
      } catch (e) {
        setIsError(true);
        setErrorType(`Parsing error, refresh the browser ${e.message} `);
      }
    });

    return () => {
      ws.current.close();
    };
  }, []);

  return (
    <section>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyUp={(e) => checkEntryKey(e.key)}
        className="bg-black p-2 text-white"
      />
      <button onClick={sendMsg}>Send Msg</button>
      <section className="flex w-sm flex-col gap-20 border border-red-500 p-2">
        {messages.map((item, index) => {
          return item.from === "client" ? (
            <li key={index} className="bg-black text-white">
              {item.msg}
              {item.timeStamp}
            </li>
          ) : (
            <li key={index} className="bg-gray-500 text-right text-black">
              {item.msg}
              {item.timeStamp}
            </li>
          );
        })}
        {isBotTyping && <TypingMsgAnimation />}
        <div ref={scrollDiv}></div>
      </section>
      {/* <TypingMsgAnimation /> */}
    </section>
  );
}

// IMPROVED code = learn about variants, we can also write transition inside animatoin property, search about it.
// function TypingMsgAnimation() {
//   return (
//     <div className="flex justify-center items-end gap-2 border h-20">
//       <motion.span
//         className="w-3 h-3 bg-gray-400 rounded-full"
//         initial={{ y: -20 }}
//         animate={{ y: 0 }}
//         transition={{
//           duration: 0.7,
//           repeat: Infinity,
//           delay: 0.1,
//           ease: "easeInOut",
//           repeatType: "reverse",
//         }}
//       ></motion.span>
//       <motion.span
//         className="w-3 h-3 bg-gray-400 rounded-full"
//         initial={{ y: -20 }}
//         animate={{ y: 0 }}
//         transition={{
//           duration: 0.7,
//           repeat: Infinity,
//           delay: 0.2,
//           ease: "easeInOut",
//           repeatType: "reverse",
//         }}
//       ></motion.span>
//       <motion.span
//         className="w-3 h-3 bg-gray-400 rounded-full"
//         initial={{ y: -20 }}
//         animate={{ y: 0 }}
//         transition={{
//           duration: 0.7,
//           repeat: Infinity,
//           delay: 0.3,
//           ease: "easeInOut",
//           repeatType: "reverse",
//         }}
//       ></motion.span>
//     </div>
//   );
// }

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const dotVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
  },
};

// Bad Code = i forgot to write 'return' for map because i am using curly braces{} not parenthesis.
// function TypingMsgAnimation() {
//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="initial"
//       animate="animate"
//       className="flex h-20 items-center justify-center gap-1.5"
//     >
//       {[0, 1, 2].map((index) => {
//         <motion.span
//           key={index}
//           variants={dotVariants}
//           className="h-2 w-2.5 rounded-full bg-gray-400"
//         ></motion.span>;
//       })}
//     </motion.div>
//   );
// }

function TypingMsgAnimation() {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="flex h-20 items-center justify-center gap-1.5"
    >
      {[0, 1, 2].map((index) => {
        return (
          <motion.span
            key={index}
            variants={dotVariants}
            className="h-2 w-2.5 rounded-full bg-gray-400"
          ></motion.span>
        );
      })}
    </motion.div>
  );
}

// now my plan is to check whether user click send msg or not if user clicked the button
//  then i will put a condition in useEffect() to check and
// send then msg to server. Why ? because then i would have access to ws.send() method
// if i didn't do this then there is no way i can access ws.send() outside
// useEffect()
// export default function App() {
//   // const [userInput, setUserInput] = useState("");
//   // const [serverResMsg, setServerResMsg] = useState("");
//   const [userInput, setUserInput] = useState("");
//   const [userResMsg, setUserResMsg] = useState([]);
//   const [serverResMsg, setServerResMsg] = useState([]);
//   const ws = useRef(null);
//
//   // function userInputHandler(data) {
//   //   setUserResMsg([...userResMsg, data]);
//   // }
//   //
//   // function serverResHandler(data) {
//   //   setServerResMsg([...serverResMsg, data]);
//   // }
//
//   function userInputHandler(data) {
//     setUserResMsg((prev) => [...prev, data]);
//   }
//
//   function serverResHandler(data) {
//     setServerResMsg((prev) => [...prev, data]);
//   }
//   useEffect(() => {
//     ws.current = new WebSocket("ws://localhost:8080");
//
//     ws.current.addEventListener("open", () => {
//       console.log("connection succeed");
//     });
//
//     ws.current.addEventListener("message", (e) => {
//       console.log("mesage from server", e.data);
//       // setServerResMsg(e.data);
//       serverResHandler(e.data);
//     });
//
//     return () => {
//       ws.current.close();
//     };
//   }, []);
//
//   return (
//     <section>
//       <input
//         type="text"
//         value={userInput}
//         onChange={(e) => setUserInput(e.target.value)}
//         className="bg-black text-white p-2"
//       />
//       <button
//         onClick={() => {
//           (ws.current.send(userInput), userInputHandler(userInput));
//         }}
//       >
//         Send Msg
//       </button>
//       <section className="border border-red-500 w-sm p-2 flex gap-20 ">
//         <ul>
//           {userResMsg.map((item) => (
//             <li key={item} className="mb-6">
//               {item}
//             </li>
//           ))}
//         </ul>
//
//         <ul>
//           {serverResMsg.map((item) => (
//             <li key={item} className="mt-6">
//               {item}
//             </li>
//           ))}
//         </ul>
//       </section>
//     </section>
//   );
// ws.current.close();
// }
