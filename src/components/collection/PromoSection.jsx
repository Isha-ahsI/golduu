import React from "react";
import Data from "../../data/mockdata.json"
import { PrimaryButton } from "../ui/Button";

// Promo section
export const PromoSection = () => {
  return (
    <>
      <section className="sm:my-25 my-18.5 bg-primary sm:py-25 py-18.5 px-12.5 flex items-center justify-center">
        <div className="sm:grid sm:grid-cols-12 sm:gap-4 sm:space-y-0 space-y-6">
          {Data.promoCard.map((promo)=>(
            <div className="md:col-span-6 sm:col-span-12" key={promo.id}>
              <div className={`max-w-150 max-h-100 overflow-hidden ${promo.id === 1? "rounded-bl-4xl md:rounded-tr-none rounded-tr-4xl " :"rounded-tr-4xl md:rounded-bl-none rounded-bl-4xl "} relative flex flex-col justify-center items-center`}>
                <img src={`/images/promo/${promo.src}`} alt="promo image" className="h-full w-full object-cover flex items-center justify-center relative z-0"/>
                <div className="absolute bg-primary/40 inset-0 z-10"></div>
                <div className="absolute z-20 text-center">
                  <h1 className="font-semibold sm:text-4xl text-2xl text-gold-100 md:mb-12 mb-6 mx-8">{promo.title}</h1>
                  <PrimaryButton className="bg-gold" size="lg">Shop the Look</PrimaryButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
