import React from "react";
import Data from "../../data/mockdata.json"
import SplitText from "../../components/ui/SplitText";
import { PrimaryButton } from "../../components/ui/Button";
import { HeroIcon } from "../../components/ui/HeroIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

// Collection hero section
export const HeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[url(/images/herobg3.jpg)] bg-cover bg-center bg-no-repeat h-screen w-full flex flex-col justify-end items-center">
        <div className="absolute inset-0 z-0 bg-primary/15 backdrop-blur-sm"></div>
        <div className="grid grid-cols-12 gap-4 relative z-10">
          <div className="col-span-12">
            <div className="flex flex-col items-center justify-center text-center">
              <HeroIcon colorClass="text-white"/>
              <SplitText className="md:text-8xl text-5xl text-gold-500 mb-5.5 font-semibold tracking-wide">OUR JEWELS</SplitText>
              <p className="text-gold-100 md:mb-12.5 mb-8 block xl:mx-100 mx-4">
                From delicate everyday essentials to statement heirlooms, our
                jewelry is crafted to celebrate your moments—today and forever.
              </p>
              <PrimaryButton
                size="lg"
                className="font-playfair-display font-bold"
              >
                SHOP FINE JEWELRY
              </PrimaryButton>
            </div>
          </div>
        </div>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            centeredSlides={true}
            speed={800}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
            loop={true}
            freeMode={true}
            modules={[FreeMode, Autoplay]}
            className="collectionSwiper absolute bottom-0 left-0 w-full z-20 mt-8"
          >
            {Data.collection.map((collection)=>(
              <SwiperSlide key={collection.id}>
                <img
                  src={`/images/collection/${collection.src}`}
                  alt={collection.alt}
                  className="rounded-t-full h-110 w-full object-cover mt-8"
                />
              </SwiperSlide>
            ))} 
        </Swiper>
      </section>
    </>
  );
};
