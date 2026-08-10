import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import AnimatedRobot from "./RobotSvgAnimate";
import ToggleSwitch from "./ToggleSwitch";

export default function BotGettingStartedPage({
  setIsModeAi,
  isModeAi,
  setIsBotClick,
}) {
  return (
    <motion.main
      exit={{
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)",
        transition: { duration: 0.3 },
      }}
      className="grid grid-rows-[auto_1fr] items-center gap-4 py-20 sm:py-30"
    >
      <div className="col-span-2 justify-self-center">
        <ToggleSwitch isModeAi={isModeAi} setIsModeAi={setIsModeAi} />
      </div>

      <div className="justify-self-end">
        <AnimatedRobot setIsBotClick={setIsBotClick} />
      </div>

      <motion.section
        initial={{ borderColor: "rgba(252, 165, 165, 0)" }}
        animate={{ borderColor: "#FF4911" }}
        transition={{ delay: 1, duration: 0.4 }}
        className="flex flex-col items-center justify-self-start border-4"
      >
        <strong className="text-4xl tracking-wide uppercase">Tools Use</strong>

        <ul className="flex flex-col border border-0 border-t-4 uppercase">
          <li className="flex items-center">
            <Icon
              width="30"
              icon="devicon:react"
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
              className="flex-1 border-x-0 border-l-0"
            />
            <span className="flex-2 border border-4 border-t-0 border-r-0 bg-[#CAA1FF] p-1 text-2xl tracking-wide">
              Motion
            </span>
          </li>
          <li className="flex items-center">
            <Icon
              width="25"
              icon="devicon:nodejs"
              className="flex-1 border-x-0 border-l-0"
            />
            <span className="flex-2 border border-4 border-t-0 border-r-0 bg-[#69D2E7] p-1 text-2xl tracking-wide">
              node js
            </span>
          </li>
        </ul>
      </motion.section>
      {/* </section> */}
    </motion.main>
  );
}
