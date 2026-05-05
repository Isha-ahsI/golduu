import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Silk from "../../components/ui/Silk";

export const Loader = () => {
  const isMdUp = window.innerWidth >= 768;
  const text = "Loading Elegance…";

  return (
    <>
      <AnimatePresence>
        <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 h-full w-full z-10">
            <Silk />
          </div>
          <div className="relative flex flex-col items-center justify-center z-20">
            <div className="relative flex flex-col items-center justify-center mb-12">
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative md:w-75 w-50 md:h-75 h-50 flex items-center justify-center"
                >
                <div className="absolute -top-[5%] -bottom-[5%] -left-[5%] -right-[2%] rounded-full border border-gold-500 animate-[rotateClockwise_6s_linear_infinite]"></div>
                <div className="absolute -top-[5%] inset-[-2%] -bottom-[5%] -left-[2%] -right-[5%] rounded-full border border-gold-500 animate-[rotateCounter_8s_linear_infinite]"></div>
                </motion.div>
                <motion.div
                initial={{
                    x: isMdUp ? -600 : -400,
                    scale: 2,
                    rotate: -180,
                    filter: "blur(10px)",
                }}
                animate={{ x: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                }}
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                >
                <motion.img
                    src="/images/logo/logo-sm.png"
                    alt="Logo"
                    className="h-50 w-50 object-contain drop-shadow-2xl  drop-shadow-gold-500"
                    animate={{
                    scale: [0.95, 1, 0.95],
                    }}
                    transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    }}
                />
                </motion.div>
            </div>
            <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 1,ease: "easeOut"}} className="flex space-x-1 text-gold-500 text-2xl font-semibold tracking-widest mb-4 text-shadow-md text-shadow-gold-500">
              {text.split("").map((char, i) => (
                <span
                  key={i}
                  className="animate-fadePass drop-shadow-md"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {char}
                </span>
              ))}
            </motion.div>
            <motion.p initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 1,ease: "easeOut"}} className="text-gold-300/75 font-light">Where beauty meets craftsmanship</motion.p>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};
