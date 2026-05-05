import React from "react";
import Data from "../../data/mockdata.json";
import SplitText from "../../components/ui/SplitText";

// trusted by 
export const TrustedBy = () => {
  return (
    <>
      <section className="sm:my-25 my-18.5 flex flex-col justify-center items-center mx-16">
        {/* trusted by header */}
        <SplitText className="md:text-5xl text-4xl font-semibold md:mb-26 mb-14 text-black tracking-wide">Crafted <span className="text-primary-400">Together</span></SplitText>
        
        {/* trusted by items */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 xl:gap-37.5 md:gap-12 gap-8 justify-center items-center">
            {Data.trusted.map((item) => (
                <img src={item.src} alt={item.alt} className="sm:w-full sm:height-full w-60" key={item.id}/>
            ))}
        </div>
      </section>
    </>
  );
};
