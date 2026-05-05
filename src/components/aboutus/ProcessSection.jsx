import React from "react";
import Data from "../../data/mockdata.json"
import SplitText from "../../components/ui/SplitText";

// Process section 
export const ProcessSection = () => {
  return (
    <>
      <section className="sm:my-25 my-18.5 flex justify-center items-center text-center bg-[url(/images/processbg.jpg)] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute z-10 inset-0 bg-primary/50 backdrop-blur-lg"></div>
        <div className="relative z-20 sm:my-25 my-18.5">
          <div className="mb-12">
            <SplitText className="md:text-5xl text-4xl text-gold-100 mb-4 tracking-wide">How We Create Timeless Jewelry</SplitText>
            <p className="text-gold-300/75 text-md">
              Timeless creations thoughtfully designed and crafted to reflect
              our passion for beauty, detail, and enduring elegance.
            </p>
          </div>
          <div className="sm:grid sm:grid-cols-12 sm:gap-12 sm:items-start mx-4">
            {Data.processData.map((process)=>(
            <div className="lg:col-span-3 sm:col-span-6 sm:mb-0 mb-6 text-center flex flex-col items-center justify-center" key={process.id}>
              <p className="font-bold sm:text-8xl text-6xl text-gold/50 mb-4">
                {process.num}
              </p>
              <div className="w-0.5 h-16 bg-gray-100 my-4"></div>
              <h1 className="text-gold-300 sm:text-4xl text-2xl">
                {process.title}
              </h1>
            </div>  
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
