import React from "react";
import Data from "../../data/mockdata.json";
import { useLike } from "../../context/LikeContext";
import { PiHeart, PiHeartFill } from "react-icons/pi";
import { PrimaryButton } from "../../components/ui/Button";
import { OutlineButton } from "../ui/Button";
import { FaLongArrowAltRight } from "react-icons/fa";

// Chain collection section
export const Chain = () => {
  const { like, handleLike } = useLike();
  return (
    <>
      <section className="sm:my-25 my-18.5 bg-primary sm:py-25 py-18.5 px-12.5">
        <div className="md:grid md:grid-cols-12 gap-16 items-center">
          <div className="xl:col-span-7 md:col-span-12">
            <h1 className="md:text-5xl text-4xl sm:leading-16 leading-12 font-semibold mb-12 text-gold-300 tracking-wide sm:text-start text-center">
              All you need for effortless,
              <br /> everyday elegance in one chain.
            </h1>
            <div className="xs:grid xs:grid-cols-12 xs:gap-6 xs:space-y-0 space-y-8">
              {Data.chain.map((chain) => (
                <div
                  className="md:col-span-4 xs:col-span-6 xl:flex-none flex flex-col"
                  key={chain.id}
                >
                  <div className="lg:h-75 lg:w-full h-full w-full overflow-hidden rounded-2xl relative group">
                    <img
                      src={`/images/collection/chain/${chain.src}`}
                      alt="chain collection"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-white/70 from-10% via-white/20 via-75% to-transparent to-100% opacity-0 transition-opacity duration-400 ease-linear z-10 group-hover:opacity-100"></div>
                    <button
                      onClick={() => handleLike(chain.id)}
                      className="absolute top-4 right-4 bg-white/75 size-9 rounded-full flex justify-center items-center text-xl z-20 cursor-pointer"
                    >
                      {like?.[chain.id] ? (
                        <PiHeartFill className="text-red-400" />
                      ) : (
                        <PiHeart className="text-primary-400" />
                      )}
                    </button>
                    <div className="absolute -bottom-20 left-0 mx-4 mb-4 transition-all duration-400 z-20 linear opacity-0 group-hover:opacity-100  group-hover:bottom-0">
                      <h5 className="text-primary font-medium text-xl mb-1">
                        Minimal Muse Chain
                      </h5>
                      <p className="text-primary font-light mb-2">
                        14K Yellow Gold & Lab Grown Diamonds
                      </p>
                      <p className="text-primary font-medium">$125</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center sm:justify-start justify-center gap-4 mt-10">
              <PrimaryButton size="lg">Shop Now</PrimaryButton>
              <OutlineButton
                size="lg"
                className="border-gold-300 text-gold-300 before:bg-gold-300 hover:text-primary group"
              >
                Explore Collection{" "}
                <FaLongArrowAltRight className="ms-2 transition-all duration-300 ease-linear group-hover:translate-x-4" />
              </OutlineButton>
            </div>
          </div>
          <div className="xl:col-span-5 xl:block hidden">
            <div className="w-full h-175 overflow-hidden rounded-2xl">
              <img
                src="/images/collection/chain/img4.jpg"
                alt="chain"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
