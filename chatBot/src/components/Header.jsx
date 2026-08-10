import { motion } from "motion/react";

const word = "Connection //".split("");
const boxVariants = {
  hidden: { opacity: 0, scaleX: 0, borderColor: "#FF4911" },
  visible: {
    opacity: 1,
    scaleX: 1,
    borderColor: "#FF4911",
    transition: {
      duration: 0.5,
      staggerChildren: 0.05,
      delayChildren: 0.4,
    },
  },

  connected: {
    opacity: 1,
    scaleX: 1,
    borderColor: "#7FBC8C",
    transition: { duration: 0.8 },
  },
};

const letterVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  connected: { opacity: 1 },
};

export default function Header({ isConnection }) {
  return (
    <header className="flex justify-center pt-10">
      <motion.h3
        variants={boxVariants}
        initial="hidden"
        animate={isConnection ? "connected" : "visible"}
        style={{ transformOrigin: "right" }}
        className={`relative flex border-6 p-4 text-4xl tracking-wide`}
      >
        <a href="/">
          {word.map((character, index) => (
            <motion.span key={index} variants={letterVariant}>
              {character}
            </motion.span>
          ))}
        </a>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          className={`absolute -top-6 left-3 -z-20 h-20 w-60 border ${isConnection ? "border-[#7FBC8C]" : " border-[#FF6B6B]"}`}
        ></motion.div>
      </motion.h3>
    </header>
  );
}
