import React from "react";
import Data from "../../data/mockdata.json";
import {
  IoLocationOutline,
  IoMailOutline,
  IoCallOutline,
} from "react-icons/io5";

const iconMap = {
  location: IoLocationOutline,
  mail: IoMailOutline,
  call: IoCallOutline,
};

// our contact details cards
export const ContactInfo = () => {
  return (
    <>
      <section className="sm:my-25 my-18.5 text-center flex justify-center items-center overflow-hidden">
        <div className="sm:grid sm:grid-cols-12 sm:gap-x-8 sm:space-y-0 space-y-8">
          {Data.contactInfo.map((info, index) => {
            const Icon = iconMap[info.icon];
            return (
              <div
                className={`lg:col-span-4 sm:col-span-6 lg:py-8 ${index === Data.contactInfo.length - 1 ? "sm:col-start-4 sm:py-8 pb-8" : ""}`}
                key={info.id}
              >
                <div className="max-w-100 h-full bg-primary rounded-2xl flex flex-col justify-center items-center text-center p-6 shadow-xl">
                  <div className="size-16 text-3xl flex flex-col justify-center items-center text-center border border-gold/25 rounded-full bg-gold/15 text-gold mb-6">
                    <Icon />
                  </div>
                  <h1 className="text-gold text-2xl mb-2">{info.title}</h1>
                  {info.icon === "location" ? (
                    <address className="text-gold-300/75">{info.desc}</address>
                  ) : (
                    <p className="text-gold-300/75">{info.desc}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
