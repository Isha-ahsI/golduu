import React from "react";
import Data from "../../data/mockdata.json";
import SplitText from "../../components/ui/SplitText";
import { useLike } from "../../context/LikeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import { RiShoppingBag4Line } from "react-icons/ri";
import { PiHeartBold, PiHeartFill } from "react-icons/pi";
import { PrimaryButton } from "../ui/Button";

// Arrivals latest products section
export const Arrivals = () => {
  const { like, handleLike } = useLike();
  return (
    <>
      <section className="sm:my-25 my-18.5 bg-[url(/images/arrivalsbg.jpg)] bg-cover bg-center bg-no-repeat sm:py-25 py-18.5 flex flex-col justify-center items-center text-center relative z-0 overflow-hidden">
        <div className="absolute inset-0 bg-primary/25 z-10 backdrop-blur-xs"></div>
        <div className="container relative z-20">
          <div className="sm:mb-20 mb-8">
            <SplitText className="md:text-8xl text-5xl text-gold font-semibold mb-4 tracking-wide"> New Arrivals</SplitText>
            <p className="text-gold-100 md:mb-12.5 mb-8 block xl:mx-100 mx-4">
              Step into the world of our latest creations—designed to elevate
              your style with unmatched brilliance,crafted to add a touch of elegance and brilliance to your everyday style.
            </p>
          </div>
          <div className="sm:mx-2 mx-4 mb-16">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              speed={800}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  centeredSlides: true,
                  spaceBetween: 20,
                },
              }}
              loop={true}
              freeMode={true}
              modules={[FreeMode, Autoplay]}
              className="arrivalsSwiper absolute bottom-0 left-0 w-full z-20 mt-8"
            >
              {Data.arrivals.map((arrivals) => (
                <SwiperSlide key={arrivals.id}>
                  <div className="bg-gold-100 p-6 overflow-hidden rounded-xl">
                    <h1 className="text-primary font-bold text-lg text-start mb-4">
                      Aurora Trilogy Diamond Ring
                    </h1>
                    <div className="w-full h-125 rounded-xl flex flex-col items-center justify-center overflow-hidden">
                      <img
                        src={`/images/collection/${arrivals.src}`}
                        alt="new arrivals"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <h1 className="text-primary font-bold text-xl text-start">
                        ${arrivals.price}
                      </h1>
                      <div className="flex justify-center items-center gap-2">
                        <RiShoppingBag4Line className="text-2xl" />
                        <button
                          onClick={() => handleLike(arrivals.id)}
                          className="text-2xl"
                        >
                          {like?.[arrivals.id] ? (
                            <PiHeartFill className="text-red-400" />
                          ) : (
                            <PiHeartBold className="text-primary" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <PrimaryButton size="xl">Shop Collection</PrimaryButton>
        </div>
      </section>
    </>
  );
};
