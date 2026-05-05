import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useLike } from "../../context/LikeContext";
import Data from "../../data/mockdata.json";
import { PiHeart, PiHeartFill } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import SplitText from "../../components/ui/SplitText";

export const BestSeller = () => {
  const { like, handleLike } = useLike();
  return (
    <>
      <section className="sm:my-25 my-18.5 flex justify-center items-center">
        <div className="container">
          {/* best seller title */}
          <div className="mb-17.5 text-center">
            <SplitText className="md:text-5xl text-4xl font-semibold text-primary mb-3.5 tracking-wide">Best Sellers</SplitText>
            <p className="text-primary-400/75 md:text-xl text-md">
              Discover the latest designs crafted to match today’s trends
            </p>
          </div>
          {/* best seller swiper */}
          <Swiper
            spaceBetween={37}
            loop={true}
            speed={800}
            grabCursor={true}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            slidesPerView={"1"}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation]}
            className="bestSellerSwiper relative px-12"
          >
            {Data.bestSeller.map((seller) => (
              <SwiperSlide key={seller.id}>
                <div className="flex flex-col justify-center items-center">
                  <div className="group cursor-auto">
                    <div className="w-75 h-83.25 rounded-2xl overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-shadow duration-400">
                      <img
                        src={seller.src}
                        alt={seller.title}
                        className="w-full h-full object-cover transition-all duration-400 linear z-10 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_25%,var(--color-black)_100%)]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10"></div>
                      <button
                        onClick={() => handleLike(seller.id)}
                        className="absolute -top-8 right-3.75 bg-white/75 size-9 rounded-full flex justify-center items-center text-xl z-30 transition-all duration-400 linear opacity-0 group-hover:opacity-100 group-hover:top-5 cursor-pointer"
                      >
                        {like?.[seller.id] ? (
                          <PiHeartFill className="text-red-400" />
                        ) : (
                          <PiHeart className="text-primary-400" />
                        )}
                      </button>
                      <div className="absolute -bottom-8.5 left-0 right-0 bg-primary/50 backdrop-blur-md text-white text-center py-2 transition-all duration-400 z-30 linear opacity-0 group-hover:opacity-100 group-hover:bottom-0 cursor-pointer">
                        <p className="font-medium">Add To Cart</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h5 className="text-primary font-medium text-xl mb-1">
                      {seller.title}
                    </h5>
                    <p className="text-primary/75 font-light mb-2">
                      {seller.desc}
                    </p>
                    <p className="text-primary font-medium">${seller.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="group bg-primary/25 custom-prev absolute top-35 left-2 z-20 cursor-pointer rounded-full px-4 py-2 transition-all duration-150 ease-linear transform hover:bg-white/25 backdrop-blur-sm shadow-sm shadow-primary-500/75 hover:scale-75">
              <div className="h-10 w-6 relative">
                <div className="arrow-top bg-white/75 w-full top-[50%] h-1 -right-1.25 rounded-full overflow-hidden absolute after:content-[''] after:bg-primary after:h-full after:absolute after:top-0 after:transition-all after:duration-150 -rotate-45 origin-bottom-left after:left-0 after:right-full after:delay-0 group-hover:after:right-0 group-hover:after:delay-150" />
                <div className="arrow-bottom bg-white/75 w-full top-[50%] h-1 -right-1.25 rounded-full overflow-hidden absolute after:content-[''] after:bg-primary after:h-full after:absolute after:top-0 after:transition-all after:duration-150 rotate-45 origin-top-left after:right-0 after:left-full after:delay-150 group-hover:after:left-0 group-hover:after:delay-0" />
              </div>
            </div>
            <div className="group bg-primary/25 custom-next absolute top-35 right-2 z-20 cursor-pointer rounded-full px-4 py-2 transition-all duration-150 ease-linear transform hover:bg-white/25 backdrop-blur-sm shadow-sm shadow-primary-500/75 hover:scale-75">
              <div className=" h-10 w-6 relative">
                <div className="arrow-top bg-white/75 w-full top-[50%] h-1 -left-1.25 rounded-full overflow-hidden absolute after:content-[''] after:bg-primary after:h-full after:absolute after:top-0 after:transition-all after:duration-150 rotate-45 origin-bottom-right after:right-0 after:left-full after:delay-0 group-hover:after:left-0 group-hover:after:delay-150" />
                <div className="arrow-bottom bg-white/75 w-full top-[50%] h-1 -left-1.25 rounded-full overflow-hidden absolute after:content-[''] after:bg-primary after:h-full after:absolute after:top-0 after:transition-all after:duration-150 -rotate-45 origin-top-right after:left-0 after:right-full after:delay-150 group-hover:after:right-0 group-hover:after:delay-0" />
              </div>
            </div>
          </Swiper>
          <div className="flex justify-center items-center mt-12">
            <button className="group flex items-center gap-2 text-primary font-normal text-lg hover:gap-4 hover:text transition-all duration-150 ease-linear">
              <span className="relative uppercase group">
                <span className="relative transition-font duration-150 ease-linear group-hover:font-medium">
                  Shop now
                  <span
                    className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-primary origin-bottom-right scale-x-0 
                    transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left"
                  ></span>
                </span>
              </span>
              <BsArrowRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
