import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "motion/react";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import BotInterface from "./components/BotInterface.jsx";
import BotGettingStartedPage from "./components/BotGettingStartedPage.jsx";
//importing motion

{
  /* <section className="relative flex min-h-screen flex-col overflow-hidden border border-red-500 bg-no-repeat"> */
}
export default function App() {
  const [isBotClick, setIsBotClick] = useState(false);
  const [isConnection, setIsConnection] = useState(false);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-no-repeat">
      <Toaster position="top-right" />
      <div className="pointer-events-none absolute -right-10 -bottom-10 -z-10 h-60 w-60 rotate-230 bg-[url('../src/assets/images/circuitPattern.webp')] bg-cover bg-no-repeat opacity-10 md:h-80 md:w-80"></div>
      <div className="pointer-events-none absolute -top-10 -left-10 -z-10 h-60 w-60 rotate-50 bg-[url('../src/assets/images/circuitPattern.webp')] bg-cover bg-no-repeat opacity-10 md:h-80 md:w-80"></div>

      <div className="pointer-events-none absolute -top-10 -right-10 -z-10 hidden h-60 w-60 rotate-135 bg-[url('../src/assets/images/circuitPattern.webp')] bg-cover bg-no-repeat opacity-10 md:h-80 md:w-80 lg:block"></div>

      <div className="pointer-events-none absolute -bottom-10 -left-10 -z-10 hidden h-60 w-60 -rotate-35 bg-[url('../src/assets/images/circuitPattern.webp')] bg-cover bg-no-repeat opacity-10 md:h-80 md:w-80 lg:block"></div>
      <Header isConnection={isConnection} />

      <AnimatePresence mode="wait">
        {isBotClick ? (
          <BotInterface
            key="chat"
            setIsBotClick={setIsBotClick}
            isConnection={isConnection}
            setIsConnection={setIsConnection}
          />
        ) : (
          <BotGettingStartedPage key="home" setIsBotClick={setIsBotClick} />
        )}
      </AnimatePresence>

      <Footer />
    </section>
  );
}

{
  /* <motion.div */
}
{
  /*   initial={{ opacity: 0.3 }} */
}
{
  /*   animate={{ opacity: 0.8 }} */
}
{
  /*   transition={{ */
}
{
  /*     repeat: Infinity, */
}
{
  /*     duration: 3, */
}
{
  /*     repeatType: "reverse", */
}
{
  /*     ease: "easeInOut", */
}
{
  /*   }} */
}
{
  /*   className="pointer-events-none absolute -right-10 -bottom-10 -z-10 h-60 w-60 rotate-230 bg-[url('../src/assets/images/circuitPattern.webp')] bg-cover bg-no-repeat opacity-10 md:h-80 md:w-80" */
}
{
  /* ></motion.div> */
}
{
  /**/
}
{
  /* <motion.div */
}
{
  /*   initial={{ opacity: 0.3 }} */
}
{
  /*   animate={{ opacity: 0.8 }} */
}
{
  /*   transition={{ */
}
{
  /*     repeat: Infinity, */
}
{
  /*     duration: 3, */
}
{
  /*     repeatType: "reverse", */
}
{
  /*     ease: "easeInOut", */
}
{
  /*     delay: 2, */
}
{
  /*   }} */
}
{
  /*   className="pointer-events-none absolute -top-10 -left-10 -z-10 h-60 w-60 rotate-50 bg-[url('../src/assets/images/circuitPattern.webp')] bg-cover bg-no-repeat opacity-10 md:h-80 md:w-80" */
}
{
  /* ></motion.div> */
}
