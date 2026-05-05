import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { PrimaryButton } from "../components/ui/Button";
import { FaLongArrowAltLeft,FaHome } from "react-icons/fa";

export const NotFound = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center text-center justify-center bg-[radial-gradient(circle_at_center,var(--color-gold-300)_0%,var(--color-gold-500)_50%,var(--color-primary)_100%)] p-12">
        <div className="flex justify-center items-center">
          <p className="md:text-[16rem] text-9xl font-bold text-primary/75 leading-none text-shadow-[0_0_20px_rgba(88,67,51,0.5)]">
            4
          </p>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            src="/images/diamond.png"
            alt="Diamond"
            className="md:size-60 size-30 rotate-20 drop-shadow-[0_0_20px_rgba(88,67,51,0.8)]"
          />
          <p className="md:text-[16rem] text-9xl font-bold text-primary/75 leading-none text-shadow-[0_0_20px_rgba(88,67,51,0.5)]">
            4
          </p>
        </div>
        <h1 className="text-primary text-4xl font-semibold">
          Ooops , Page Not found
        </h1>
        <div className="flex flex-wrap
         justify-center items-center gap-8 mt-8">
           <Link to="/">
            <PrimaryButton
              size="lg"
              className="bg-primary text-gold-300 flex items-center gap-2"
            >
              Home <FaHome />
            </PrimaryButton>
           </Link>
          <button className="group flex items-center gap-2 text-primary text-lg" onClick={() => window.history.back()}>
            <FaLongArrowAltLeft className="transition-transform duration-300 text-2xl ease-linear group-hover:-translate-x-2"/>
            <span className="relative uppercase group">
              <span className="relative transition-font duration-150 ease-linear font-medium">
               Go Back
                <span
                  className="absolute right-0 -bottom-0.5 w-full h-0.5 bg-primary origin-bottom-left scale-x-0 
                              transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-bottom-right"
                ></span>
              </span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
