import React from "react";
import { Link } from "react-router-dom";
import Data from "../../data/mockdata.json";
import SplitText from "../../components/ui/SplitText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IoLogoInstagram } from "react-icons/io5";

export const InstagramSlider = () => {
  return (
    <>
      <section className="sm:mt-25 mt-18.5 flex flex-col justify-center items-center">
        {/* instagram slider header */}
        <SplitText className="sm:text-3xl text-lg text-medium mb-8 tracking-wide">Follow Us On Instagram</SplitText>
        {/* instagram slider items */}
        <Swiper
          spaceBetween={0}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          slidesPerView={"1"}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 5,
            },
          }}
          modules={[Autoplay]}
          className="instaImgSwiper w-full overflow-hidden"
        >
          {Data.instaImg.map((insta) => (
            <SwiperSlide key={insta.id}>
              <div className="relative w-full h-100 group">
                <img
                  src={`/images/instaimgs/${insta.src}`}
                  alt="Instagram Image"
                  className="w-full h-full object-cover relative z-10 transition-all duration-400 ease-linear group-hover:grayscale-100"
                />
                <div className="absolute inset-0 z-20 bg-transparent backdrop-blur-xs opacity-0 scale-10 transition-all duration-400 ease-linear group-hover:opacity-100 group-hover:scale-100">
                  <div className="absolute z-30 top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white rounded-tl-lg opacity-0 transition-opacity duration-400 ease-linear group-hover:opacity-100"></div>
                  <div className="absolute z-30 top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white rounded-tr-lg opacity-0 transition-opacity duration-400 ease-linear group-hover:opacity-100"></div>
                  <div className="absolute z-30 bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white rounded-bl-lg opacity-0 transition-opacity duration-400 ease-linear group-hover:opacity-100"></div>
                  <div className="absolute z-30 bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white rounded-br-lg opacity-0 transition-opacity duration-400 ease-linear group-hover:opacity-100"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-1/2 z-30 opacity-0 transition-opacity duration-400 ease-linear group-hover:opacity-100">
                    <Link
                      to="/"
                      className="size-11.25 flex justify-center items-center relative overfow-hidden group/btn"
                    >
                      <div className="h-full w-full flex items-center justify-center bg-transparent backdrop-blur-lg rounded-lg border border-white/25 transition-color duration-300 ease-linear group-hover/btn:bg-white/25">
                        <IoLogoInstagram className="text-white text-xl" />
                      </div>
                      <div className="absolute -z-10 w-full h-full rounded-lg bg-linear-220 from-indigo-500 via-purple-500 to-pink-500 tranform transition-all duration-300 ease-linear group-hover/btn:rotate-35 group-hover/btn:origin-bottom "></div>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};
