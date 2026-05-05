import React from "react";
import { useLike } from "../../context/LikeContext";
import Data from "../../data/mockdata.json";
import { PiHeartBold, PiHeartFill } from "react-icons/pi";
import SplitText from "../../components/ui/SplitText";


// top collection
export const TopCollection = () => {
  const { like, handleLike } = useLike();
  return (
    <section className="bg-center bg-no-repeat bg-cover sm:py-37.5 py-25 relative z-0 flex justify-center items-center overflow-hidden bg-[url(/images/collectbg.jpg)] md:rounded-tl-[500px] md:rounded-br-[500px]">
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/30"></div>
      <div className="container relative z-20 2xl:mx-50 xl:mx-25 md:mx-40">
        {/* top collection header */}
        <div className="flex flex-col items-center justify-center sm:mb-20 mb-10 text-center sm:mx-0 mx-4">
          <span className="badge bg-primary/75 text-gold-500 mb-4 font-normal text-xs px-4 py-1.5 rounded-full backdrop-blur-[92px]">
            Best Seller
          </span>
          <SplitText className="sm:text-[70px] text-4xl font-semibold text-black mb-4 tracking-wide"> The Pieces That <span className="text-gold-500">Define Us</span></SplitText>
          <p className="text-gold-300 md:text-xl text-md">
            Timeless creations thoughtfully designed and crafted to reflect our
            passion for beauty, detail, and enduring elegance.
          </p>
        </div>
        {/* top collection items */}
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center sm:gap-17.5 gap-12">
          {Data.topCollection.map((top) => (
            <div
              className="relative overflow-hidden lg:w-90.25 lg:h-85.25 w-62.5 h-56.25 rounded-2xl group"
              key={top.id}
            >
              <img
                src={top.src}
                alt={top.title}
                className="h-full w-full object-cover relative z-10"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_25%,theme(colors.white/75%)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-20"></div>
              <button
                onClick={() => handleLike(top.id)}
                className="absolute -top-8 right-3.75 text-xl z-30 transition-all duration-400 linear opacity-0 group-hover:opacity-100 group-hover:top-5 cursor-pointer"
              >
                {like?.[top.id] ? (
                  <PiHeartFill className="text-red-400" />
                ) : (
                  <PiHeartBold className="text-primary-400" />
                )}
              </button>
              <div className="absolute -bottom-20 left-0 ms-4 mb-4 transition-all duration-400 z-30 ease-linear opacity-0 group-hover:opacity-100  group-hover:bottom-0">
                <h5 className="text-primary text-xl font-medium">
                  {top.title}
                </h5>
                <p className="text-primary/75 font-light">{top.desc}</p>
                <p className="text-primary font-medium">${top.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
