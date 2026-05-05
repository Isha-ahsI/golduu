import React from "react";
import Data from "../../data/mockdata.json";
import SplitText from "../../components/ui/SplitText";
import {
  RiDiamondRingLine,
  RiDiamondLine,
  RiGift2Line,
  RiShieldCheckLine,
} from "react-icons/ri";

// icon map
const iconMap = {
  ring: RiDiamondRingLine,
  diamond: RiDiamondLine,
  gift: RiGift2Line,
  quality: RiShieldCheckLine,
};

// services
export const Services = () => {
  return (
    <>
      <section className="sm:mb-25 mb-18.5">
        <div className="bg-primary text-center pt-50 pb-25 relative z-0">
          {/* services header */}
          <div className="w-full sm:h-40 h-30 absolute -top-px left-0 bg-gold-300 lg:[clip-path:polygon(0%_0%,101%_0%,50%_100%,-1%_0%,0%_100%)] [clip-path:polygon(0%_0%,130%_0%,50%_100%,-30%_0%,0%_100%)] drop-shadow-lg"></div>
          <SplitText className="text-primary md:text-5xl text-4xl font-bold absolute top-0 left-1/2 transform -translate-x-1/2 sm:mt-10 z-10 tracking-wide">Our Services</SplitText>
          <div
            className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 2xl:gap-25 sm:gap-15 gap-10 2xl:mx-25 sm:mx-15 mx-4"
          >
            {/* services items */}
            {Data.services.map((service) => {
              const Icon = iconMap[service.type];
              return (
                <div
                  className="flex flex-col items-center justify-start h-full"
                  key={service.id}
                >
                  <div
                    height="111px"
                    width="111px"
                    className="bg-gold-transparent border-3 border-gold-500 rounded-full h-27.75 w-27.75 flex items-center justify-center mb-6.5
                  "
                  >
                    <Icon className="text-gold-500 text-6xl" />
                  </div>
                  <h2 className="text-gold-500 font-bold text-2xl fw-bold mb-3">
                    {service.title}
                  </h2>
                  <small className="text-gold-500/75 font-normal text-lg">
                    {service.desc}
                  </small>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
