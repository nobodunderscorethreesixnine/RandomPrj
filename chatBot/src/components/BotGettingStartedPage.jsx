import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import AnimatedRobot from "./RobotSvgAnimate";

export default function BotGettingStartedPage({ setIsBotClick }) {
  return (
    <motion.main
      exit={{
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)",
        transition: { duration: 0.3 },
      }}
      className="flex flex-1 items-center justify-center gap-4 sm:gap-16 md:gap-24"
    >
      <AnimatedRobot setIsBotClick={setIsBotClick} />

      <motion.section
        initial={{ borderColor: "rgba(252, 165, 165, 0)" }}
        animate={{ borderColor: "#FF4911" }}
        transition={{ delay: 1, duration: 0.4 }}
        className="flex flex-col items-center border-4"
      >
        <strong className="text-4xl tracking-wide uppercase ">Tools Use</strong>
        {/* flex items-center gap-4 text-2xl */}

        <ul className="flex flex-col border border-0 border-t-4 uppercase">
          <li className="flex items-center">
            <Icon
              width="30"
              icon="devicon:react"
              // className="flex-1 border border-x-0 border-l-0"
              className="flex-1 border-x-0 border-l-0"
            />
            <span className="flex-2 border border-4 border-y-0 border-r-0 bg-[#FF7A5c] p-1 text-2xl tracking-wide">
              React
            </span>
          </li>

          <li className="flex items-center">
            <Icon
              width="30"
              icon="devicon:tailwindcss"
              // className="flex-1 border border-x-0 border-l-0"
              className="flex-1 border-x-0 border-l-0"
            />
            <span className="flex-2 border border-4 border-r-0 bg-[#A7DbD8] p-1 text-2xl tracking-wide">
              Tailwindcss
            </span>
          </li>

          <li className="flex items-center">
            <Icon
              width="35"
              icon="bxl:motion-js"
              // className="flex-1 border border-x-0 border-l-0"
              className="flex-1 border-x-0 border-l-0"
            />
            <span className="flex-2 border border-4 border-t-0 border-r-0 bg-[#CAA1FF] p-1 text-2xl tracking-wide">
              Motion
            </span>
          </li>
        </ul>
      </motion.section>
    </motion.main>
  );
}
