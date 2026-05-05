import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation ,Autoplay } from "swiper/modules";
import Data from "../../data/mockdata.json";
import SplitText from "../../components/ui/SplitText";
import { useLike } from "../../context/LikeContext";
import { HeroIcon } from "../../components/ui/HeroIcon";
import { OutlineButton } from "../ui/Button";
import { PiHeartBold, PiHeartFill } from "react-icons/pi";
import { RiShoppingBag4Line } from "react-icons/ri";

// Rings collection section
export const Rings = () => {
  const { like, handleLike } = useLike();
  return (
    <>
      <section className="sm:my-25 my-18.5 bg-[url(/images/ringbg.jpg)] bg-cover bg-center bg-no-repeat sm:pt-25 pt-18.5 flex flex-col justify-center items-center relative z-0 overflow-hidden">
        <div className="absolute z-10 left-0 right-0 bottom-0 w-full h-175 bg-linear-to-t from-gold-300 from-10% via-gold-300/25 via-75% to-transparent to-100%"></div>
        <div className="container relative z-20">
          <div className="mb-225 flex flex-col justify-center items-center text-center">
            <HeroIcon colorClass="text-primary" />
            <SplitText className="md:text-5xl text-4xl sm:leading-16 leading-12 font-semibold mb-4 text-primary tracking-wide">Crafted for the Moment</SplitText>
            <SplitText className="md:text-5xl text-4xl sm:leading-16 leading-12 font-semibold mb-4 text-primary tracking-wide">You Say Forever</SplitText>
            <p className="text-primary/75 mb-8 block xl:mx-100 mx-4 ">
              Meticulously designed with exceptional diamonds and timeless
              craftsmanship.
            </p>
            <OutlineButton>Shop Now</OutlineButton>
          </div>
          <div className="mx-4">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              loop={true}
              speed={600}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="ringSwiper relative"
            >
              {Data.rings.map((ring) => (
                <SwiperSlide key={ring.id} className="py-8">
                  <div className="flex flex-col justify-center items-center">
                    <div className="relative max-h-100 max-w-100 overflow-hidden rounded-2xl group shadow-xl">
                      <img
                        src={`/images/collection/rings/${ring.src}`}
                        alt=""
                        className="h-full w-full object-cover relative z-0"
                      />
                      <div className="absolute z-10 bg-black/25 inset-0 transition-all duration-300 ease-linear opacity-0 group-hover:opacity-100 backdrop-blur-xs"></div>
                      <button
                        onClick={() => handleLike(ring.id)}
                        className="absolute -top-8 right-3.75 text-xl z-20 transition-all duration-400 linear opacity-0 group-hover:opacity-100 group-hover:top-5 cursor-pointer"
                      >
                        {like?.[ring.id] ? (
                          <PiHeartFill className="text-red-400" />
                        ) : (
                          <PiHeartBold className="text-gold-300" />
                        )}
                      </button>
                      <div className="absolute z-30 -bottom-16 left-0 w-full px-4 pb-4 transition-all duration-300 ease-linear opacity-0 group-hover:opacity-100 group-hover:bottom-0 flex items-end justify-between">
                        <h1 className="text-gold-300 text-xl">
                          Round Cut Hidden Halo Pave Engagement Ring
                        </h1>
                        <RiShoppingBag4Line className="text-3xl text-gold-300" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="group bg-primary/25 custom-prev absolute top-1/2 -translate-y-1/2 left-2 z-20 cursor-pointer rounded-full px-4 py-2 transition-all duration-150 ease-linear transform hover:bg-white/25 backdrop-blur-sm shadow-sm shadow-primary-500/75 hover:scale-75">
                <div className="sm:h-10 sm:w-6 h-8 w-4 relative">
                  <div className="arrow-top bg-white/75 w-full top-[50%] h-1 -right-1.25 rounded-full overflow-hidden absolute after:content-[''] after:bg-primary after:h-full after:absolute after:top-0 after:transition-all after:duration-150 -rotate-45 origin-bottom-left after:left-0 after:right-full after:delay-0 group-hover:after:right-0 group-hover:after:delay-150" />
                  <div className="arrow-bottom bg-white/75 w-full top-[50%] h-1 -right-1.25 rounded-full overflow-hidden absolute after:content-[''] after:bg-primary after:h-full after:absolute after:top-0 after:transition-all after:duration-150 rotate-45 origin-top-left after:right-0 after:left-full after:delay-150 group-hover:after:left-0 group-hover:after:delay-0" />
                </div>
              </div>
              <div className="group bg-primary/25 custom-next absolute top-1/2 -translate-y-1/2 right-2 z-20 cursor-pointer rounded-full px-4 py-2 transition-all duration-150 ease-linear transform hover:bg-white/25 backdrop-blur-sm shadow-sm shadow-primary-500/75 hover:scale-75">
                <div className=" sm:h-10 sm:w-6 h-8 w-4 relative">
                  <div className="arrow-top bg-white/75 w-full top-[50%] h-1 -left-1.25 rounded-full overflow-hidden absolute after:content-[''] after:bg-primary after:h-full after:absolute after:top-0 after:transition-all after:duration-150 rotate-45 origin-bottom-right after:right-0 after:left-full after:delay-0 group-hover:after:left-0 group-hover:after:delay-150" />
                  <div className="arrow-bottom bg-white/75 w-full top-[50%] h-1 -left-1.25 rounded-full overflow-hidden absolute after:content-[''] after:bg-primary after:h-full after:absolute after:top-0 after:transition-all after:duration-150 -rotate-45 origin-top-right after:left-0 after:right-full after:delay-150 group-hover:after:right-0 group-hover:after:delay-0" />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
