import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Data from "../../data/mockdata.json";
import SplitText from "../../components/ui/SplitText";
import { PrimaryButton } from "../../components/ui/Button";
import { HeroIcon } from "../../components/ui/HeroIcon";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

// Hero section for about us page
export const HeroSection = () => {
  return (
    <>
      <section className="h-screen w-full relative flex justify-center items-center overflow-hidden">
        <div className="lg:w-2/3 w-full h-full relative z-10 overflow-hidden">
          <Swiper
            spaceBetween={0}
            loop={true}
            effect={"fade"}
            speed={1000}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            slidesPerView={"1"}
            modules={[Autoplay, EffectFade]}
            className="heroSectionSwiper h-full w-full"
          >
            {Data.heroBgImg.map((img) => (
              <SwiperSlide className="h-full w-full" key={img.id}>
                <img
                  src={img.src}
                  alt="Hero Image"
                  className="h-full w-full object-cover relative z-10"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 w-full h-full z-20 bg-black/25"></div>
          <div className="bg-gold-100/75 hidden lg:flex items-center justify-between p-4 mb-4 rounded-2xl gap-6 max-w-100 absolute z-30 bottom-0 left-8">
            <img
              src="/images/instaimgs/insta3.jpg"
              alt=""
              className="w-40 h-26 object-cover overflow-hidden rounded-lg"
            />
            <div className="lg:text-start text-center">
              <h1 className="capitalize text-wrap font-semibold mb-2">
                Beautiful in every detail
              </h1>
              <small className="text-primary/75">
                Each piece is designed to celebrate your blending luxury and
                sparkle in every detail.
              </small>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 lg:h-full w-3/4 lg:relative lg:top-0 lg:left-0 lg:translate-0 lg:bg-primary lg:backdrop-blur-none lg:rounded-none lg:border-0 flex flex-col items-center justify-center absolute z-20 bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 backdrop-blur-lg rounded-xl border border-gold-100/25 lg:shadow-none shadow-2xl">
          <div className="relative z-10 text-center flex flex-col items-center justify-center">
            <HeroIcon colorClass="text-white"/>
            <SplitText className="md:text-6xl text-5xl text-gold-500 font-semibold mb-4 tracking-wide">Our Story</SplitText>
            <p className="text-gold-300/75 text-lg sm:mb-8 mb-4">
              Where every detail is designed to last beyond trends.
            </p>
            <div className="flex items-center justify-center group gap-2 sm:mb-8 mb-4">
              <PrimaryButton
                size="lg"
                className="font-playfair-display font-bold"
              >
                Let's Get Started
              </PrimaryButton>
              <button className="hidden md:block bg-gold-300 text-primary rounded-full p-4 transition-all duration-300 ease-linear group-hover:translate-x-2 group-hover:bg-transparent group-hover:text-gold-300 group-hover:animate-pulse">
                <FaArrowRightLong />
              </button>
            </div>
          </div>
          <div className="relative lg:absolute lg:bottom-12 z-10 mx-4">
            <div className="bg-gold-100/50 lg:hidden flex flex-col items-center justify-center p-4 mb-4 rounded-2xl gap-6 max-w-100">
              <img
                src="/images/instaimgs/insta3.jpg"
                alt=""
                className="w-40 h-26 object-cover overflow-hidden rounded-lg"
              />
              <div className="lg:text-start text-center">
                <h1 className="capitalize text-wrap font-semibold mb-2">
                  Beautiful in every detail
                </h1>
                <small className="text-primary/75">
                  Each piece is designed to celebrate your blending luxury and
                  sparkle in every detail.
                </small>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center justify-center bg-gold-100/10 px-4 py-2 rounded-full">
                {Data.avatarsImg.map((avatar, index) =>
                  avatar.type === "img" ? (
                    <div
                      key={index}
                      className={`md:size-12 size-10 rounded-full overflow-hidden border-3 lg:border-primary border-gold-100/10 ${index !== 0 ? "-ml-4" : ""}`}
                    >
                      <img
                        src={`/images/avatars/${avatar.src}`}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div key={index} className="md:size-12 size-10 rounded-full overflow-hidden border-3 lg:border-primary border-gold-100/10 bg-gold-300/50 -ml-4 flex items-center justify-center">
                      <IoMdAdd className="text-primary text-2xl" />
                    </div>
                  ),
                )}
              </div>
              <div>
                <h1 className="font-semibold text-3xl text-gold-500">
                  230k
                </h1>
                <p className="text-gold-300/50">Happy Client</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block absolute -left-4 w-32 h-full z-0 bg-primary [clip-path:polygon(0%_0%,8%_5%,0%_10%,8%_15%,0%_20%,8%_25%,0%_30%,8%_35%,0%_40%,8%_45%,0%_50%,8%_55%,0%_60%,8%_65%,0%_70%,8%_75%,0%_80%,8%_85%,0%_90%,8%_95%,0%_100%,100%_100%,100%_0%)]"></div>
          <div className="hidden lg:block absolute -left-16 w-32 h-full -z-10 bg-black/25 mask-l-from-60% mask-l-to-90% blur-2xl [clip-path:polygon(0%_0%,8%_5%,0%_10%,8%_15%,0%_20%,8%_25%,0%_30%,8%_35%,0%_40%,8%_45%,0%_50%,8%_55%,0%_60%,8%_65%,0%_70%,8%_75%,0%_80%,8%_85%,0%_90%,8%_95%,0%_100%,100%_100%,100%_0%)]"></div>
        </div>
      </section>
    </>
  );
};
