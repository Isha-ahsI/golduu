import React from "react";
import Data from "../../data/mockdata.json";
import { BsArrowRight } from "react-icons/bs";
import SplitText from "../../components/ui/SplitText";

export const Favorites = () => {
  return (
    <>
      <section className="sm:my-25 my-18.5 flex justify-center items-center">
        <div className="mx-5">
          {/* favorites title */}
          <SplitText className="md:text-5xl text-4xl font-semibold md:mb-25 mb-12.5 text-black text-center tracking-wide">Customer <span className="text-primary-400"> Favorites</span></SplitText>
          {/* favorites grid */}
          <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-6">
            {Data.favorites.map((fav) => (
              <div
                className="group relative overflow-hidden max-w-113.25 h-184 rounded-xl shadow-xl transform transition duration-400 ease-in-out hover:-translate-y-4 hover:shadow-2xl"
                key={fav.id}
              >
                <img
                  src={`/images/favorites/${fav.src}`}
                  alt={fav.title}
                  className="w-full h-full object-cover relative z-10 transition-scale duration-400 ease-in-out group-hover:scale-110"
                />
                <div className="absolute z-20 inset-0 group-hover:bg-primary/30 group-hover:backdrop-blur-[2px] transition-all duration-400 ease-in-out"></div>
                <div className="absolute z-30 bottom-0 -left-75 opacity-0 mb-4 mx-4 transition-all duration-400 ease-linear group-hover:opacity-100 group-hover:left-0">
                  <h4 className="font-semibold text-white text-2xl mb-2">
                    {fav.title}
                  </h4>
                  <button className="group/btn flex items-center gap-2 text-white font-normal text-lg hover:gap-4 hover:text transition-all duration-150 ease-linear">
                    <span className="relative uppercase group/btn">
                      <span className="relative text-base tracking-wide transition-font duration-150 ease-linear group-hover/btn:font-medium group-hover/btn:tracking-[.25em]">
                        Shop now
                        <span
                          className="absolute left-0 -bottom-0.5 w-full h-px bg-white origin-bottom-right scale-x-0 
                                                transition-transform duration-300 ease-out group-hover/btn:scale-x-100 group-hover/btn:origin-bottom-left"
                        ></span>
                      </span>
                    </span>
                    <BsArrowRight className="text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
