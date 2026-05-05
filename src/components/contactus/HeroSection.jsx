import React from "react";
import { HeroIcon } from "../ui/HeroIcon";
import SplitText from "../../components/ui/SplitText";

// Contact hero section
export const HeroSection = () => {
  return (
    <>
      <section className="relative z-0 bg-[url(/images/contactbg.jpg)] bg-cover bg-center bg-no-repeat py-50 w-full text-center flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/25 backdrop-blur-[2px]"></div>
        <div className="relative z-20">
            <HeroIcon colorClass="text-white" />
            <SplitText className="md:text-5xl text-4xl text-gold-500 mt-8 font-semibold tracking-wide"> CONTACT US</SplitText>
        </div>
      </section>
    </>
  );
};
