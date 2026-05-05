import React from "react";
import { PrimaryButton } from "../../components/ui/Button";
import { HeroIcon } from "../ui/HeroIcon";
import SplitText from "../../components/ui/SplitText";

// Home herosection
export const HeroSection = () => {

  return (
    <>
      <section className="bg-center bg-no-repeat bg-cover h-screen relative z-0 flex justify-center items-center overflow-hidden bg-[url(/images/herobg.jpg)]">
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/30 backdrop-blur-xs"></div>
        <div className="container relative z-20">
          <div className="grid grid-cols-12 justify-center text-center">
            <div className="col-span-12">
              <HeroIcon colorClass="text-white"/>
              <SplitText className="md:text-8xl text-5xl text-gold-500 mb-5.5 font-semibold tracking-widest">Modern Jewelry</SplitText>
              <SplitText className="text-gold-100 md:text-5xl text-2xl mb-0.75 font-normal tracking-widest">for</SplitText>
              <SplitText className="md:text-8xl text-5xl text-gold-500 mb-5.5 font-semibold tracking-widest">Modern You</SplitText>
              <p className="text-gold-100 md:mb-12.5 mb-8 block xl:mx-100 mx-4">
                Discover a world where timeless elegance meets modern
                craftsmanship. At JIVA, every piece is thoughtfully designed to
                celebrate life’s most cherished momenFrom delicate everyday
                essentials to bostatement creations, our jewelry is crafted to
                shine with you—today, tomorrow, and forever.
              </p>
              <div className="flex flex-wrap items-center justify-center md:gap-10 gap-4">
                <PrimaryButton
                  size="lg"
                  className="font-playfair-display font-bold"
                >
                  Shop Now
                </PrimaryButton>
                <PrimaryButton
                  size="lg"
                  className="font-playfair-display font-bold"
                >
                  Explore More
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
