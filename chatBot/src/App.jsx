import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "motion/react";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import BotInterface from "./components/BotInterface.jsx";
import BotGettingStartedPage from "./components/BotGettingStartedPage.jsx";
import AiBotInterface from "./components/AiBotInterface.jsx";

export default function App() {
  const [isBotClick, setIsBotClick] = useState(false);
  const [isConnection, setIsConnection] = useState(false);
  const [isModeAi, setIsModeAi] = useState(false);

  return (
    <section className="relative grid min-h-screen grid-rows-[auto_1fr_auto] overflow-hidden bg-no-repeat">
      <Toaster position="top-right" />
      <div className="pointer-events-none absolute -right-10 -bottom-10 -z-10 h-60 w-60 rotate-230 bg-[url('../src/assets/images/circuitPattern.webp')] bg-cover bg-no-repeat opacity-10 md:h-80 md:w-80"></div>
      <div className="pointer-events-none absolute -top-10 -left-10 -z-10 h-60 w-60 rotate-50 bg-[url('../src/assets/images/circuitPattern.webp')] bg-cover bg-no-repeat opacity-10 md:h-80 md:w-80"></div>

      <div className="pointer-events-none absolute -top-10 -right-10 -z-10 hidden h-60 w-60 rotate-135 bg-[url('../src/assets/images/circuitPattern.webp')] bg-cover bg-no-repeat opacity-10 md:h-80 md:w-80 lg:block"></div>

      <div className="pointer-events-none absolute -bottom-10 -left-10 -z-10 hidden h-60 w-60 -rotate-35 bg-[url('../src/assets/images/circuitPattern.webp')] bg-cover bg-no-repeat opacity-10 md:h-80 md:w-80 lg:block"></div>
      <Header isConnection={isConnection} />

      <AnimatePresence mode="wait">
        {isBotClick ? (
          <div className="w-full max-w-5xl justify-self-center p-4 sm:p-6">
            {!isModeAi ? (
              <BotInterface
                key="chatBot"
                isConnection={isConnection}
                setIsConnection={setIsConnection}
                isModeAi={isModeAi}
                setIsModeAi={setIsModeAi}
                setIsBotClick={setIsBotClick}
              />
            ) : (
              <AiBotInterface
                key="chatBotAI"
                isConnection={isConnection}
                setIsConnection={setIsConnection}
                isModeAi={isModeAi}
                setIsModeAi={setIsModeAi}
                setIsBotClick={setIsBotClick}
              />
            )}
          </div>
        ) : (
          <BotGettingStartedPage
            key="home"
            setIsBotClick={setIsBotClick}
            isModeAi={isModeAi}
            setIsModeAi={setIsModeAi}
          />
        )}
      </AnimatePresence>

      <Footer />
    </section>
  );
}
