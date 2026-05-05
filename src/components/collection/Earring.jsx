import React from "react";
import { OutlineButton } from "../ui/Button";
import Data from "../../data/mockdata.json";
import { useLike } from "../../context/LikeContext";
import { PiHeart, PiHeartFill } from "react-icons/pi";

// Earring collection section
export const Earring = () => {
 const { like, handleLike } = useLike();
  return (
    <>
      <section className="sm:my-25 my-18.5 mx-4">
        <div className="sm:grid sm:grid-cols-12 lg:gap-x-8 lg:gap-y-16 sm:gap-y-8 sm:space-y-0 space-y-8 lg:items-stretch mb-25">
          <div className="lg:col-span-8 sm:col-span-12">
            <div className="sm:grid sm:grid-cols-12 sm:gap-8 sm:space-y-0 space-y-8">
              {Data.earring.slice(0,6).map((earring) => (
                <div
                  className="xl:col-span-4 sm:col-span-6"
                  key={earring.id}
                >  
                  <div className="h-75 w-full relative overflow-hidden rounded-xl shadow-lg flex flex-col items-center justify-center group">
                    <img
                      src={`/images/collection/earring/${earring.src}`}
                      alt="earring collection"
                      className="h-full w-full object-cover relative z-0"
                    />
                    <button
                      onClick={() => handleLike(earring.id)}
                      className="absolute top-4 right-4 bg-white/75 size-9 rounded-full flex justify-center items-center text-xl z-10 cursor-pointer"
                    >
                      {like?.[earring.id] ? (
                        <PiHeartFill className="text-red-400" />
                      ) : (
                        <PiHeart className="text-primary-400" />
                      )}
                    </button>
                  </div>
                  <div className="mt-4">
                     <h5 className="text-primary font-medium text-xl mb-1">
                        Minimal Muse Chain
                        </h5>
                        <p className="text-primary font-light mb-2">
                        14K Yellow Gold & Lab Grown Diamonds
                        </p>
                        <p className="text-primary font-medium">$125</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 sm:col-span-6 lg:me-0 sm:me-6">
              <div className="h-full w-full rounded-xl overflow-hidden shadow-lg relative group">
                <img
                  src="/images/collection/earring/img5.jpg"
                  alt=""
                  className="h-full w-full object-cover transition-all duration-300 ease-linear group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-white/70 from-10% via-white/20 via-75% to-transparent to-100% opacity-0 transition-opacity duration-400 ease-linear z-10 group-hover:opacity-100"></div>
               <button
                 onClick={() => handleLike("btn1")}
                  className="absolute top-4 right-4 bg-white/75 size-9 rounded-full flex justify-center items-center text-xl z-20 cursor-pointer"
                >
                  {like["btn1"] ? (
                    <PiHeartFill className="text-red-400" />
                  ) : (
                    <PiHeart className="text-primary-400" />
                  )}
                </button>
                <div className="absolute -bottom-20 left-0 mx-4 mb-6 transition-all duration-400 z-20 linear opacity-0 group-hover:opacity-100  group-hover:bottom-0">
                  <h5 className="text-primary text-3xl font-medium mb-2">
                    Classic Collection
                  </h5>
                  <p className="text-primary/75 mb-6">
                    “Timeless silhouettes crafted in radiant gold, our Classic
                    Earrings are designed to complement every moment — blending
                    understated elegance with enduring beauty for effortless,
                    everyday luxury.”
                  </p>
                  <OutlineButton size="sm">Discover Now</OutlineButton>
                </div>
              </div>
          </div>
           <div className="lg:col-span-4 sm:col-span-6">
              <div className="h-full w-full rounded-xl overflow-hidden shadow-lg relative group">
                <img
                  src="/images/collection/earring/img8.jpg"
                  alt=""
                  className="h-full w-full object-cover transition-all duration-300 ease-linear group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-white/70 from-10% via-white/20 via-75% to-transparent to-100% opacity-0 transition-opacity duration-400 ease-linear z-10 group-hover:opacity-100"></div>
                <button
                 onClick={() => handleLike("btn2")}
                  className="absolute top-4 right-4 bg-white/75 size-9 rounded-full flex justify-center items-center text-xl z-20 cursor-pointer"
                >
                  {like["btn2"] ? (
                    <PiHeartFill className="text-red-400" />
                  ) : (
                    <PiHeart className="text-primary-400" />
                  )}
                </button>
                <div className="absolute -bottom-20 left-0 mx-4 mb-6 transition-all duration-400 z-20 linear opacity-0 group-hover:opacity-100  group-hover:bottom-0">
                  <h5 className="text-primary text-3xl font-medium mb-2">
                    Classic Collection
                  </h5>
                  <p className="text-primary/75 mb-6">
                    “Timeless silhouettes crafted in radiant gold, our Classic
                    Earrings are designed to complement every moment — blending
                    understated elegance with enduring beauty for effortless,
                    everyday luxury.”
                  </p>
                  <OutlineButton size="sm">Discover Now</OutlineButton>
                </div>
              </div>
            {/* </div> */}
          </div>
          <div className="lg:col-span-8 sm:col-span-12">
            <div className="sm:grid sm:grid-cols-12 sm:gap-6 sm:space-y-0 space-y-6">
              {Data.earring.slice(6,12).map((earring) => (
                <div
                  className="xl:col-span-4 sm:col-span-6"
                  key={earring.id}
                >
                  <div className="h-75 w-full relative overflow-hidden rounded-xl shadow-lg flex flex-col items-center justify-center">
                    <img
                      src={`/images/collection/earring/${earring.src}`}
                      alt="earring collection"
                      className="h-full w-full object-cover relative z-0"
                    />
                    <button
                      onClick={() => handleLike(earring.id)}
                      className="absolute top-4 right-4 bg-white/75 size-9 rounded-full flex justify-center items-center text-xl z-10 cursor-pointer"
                    >
                      {like?.[earring.id] ? (
                        <PiHeartFill className="text-red-400" />
                      ) : (
                        <PiHeart className="text-primary-400" />
                      )}
                    </button>
                  </div>
                  <div className="mt-4">
                     <h5 className="text-primary font-medium text-xl mb-1">
                        Minimal Muse Chain
                        </h5>
                        <p className="text-primary font-light mb-2">
                        14K Yellow Gold & Lab Grown Diamonds
                        </p>
                        <p className="text-primary font-medium">$125</p>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
