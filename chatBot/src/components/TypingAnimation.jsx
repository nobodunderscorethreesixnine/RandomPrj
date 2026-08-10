import { motion } from "motion/react";

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
    y: [0, -5, 0],
    transition: { duration: 0.6, repeat: Infinity },
  },
};

export default function TypingMsgAnimation() {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="flex gap-1.5"
    >
      {[0, 1, 2].map((index) => {
        return (
          <motion.span
            key={index}
            variants={dotVariants}
            className="h-3 w-1 rounded-full bg-gray-700"
          ></motion.span>
        );
      })}
    </motion.div>
  );
}
