import React from "react";
import Data from "../../data/mockdata.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import SplitText from "../../components/ui/SplitText";

// testimonial component
export const Testimonial = () => {
  return (
    <>
      <section className="sm:my-25 my-18.5 text-center flex justify-center items-center overflow-hidden">
        <div className="container">
          {/* testimonial header */}
          <div className="mb-12.5 mx-4">
            <SplitText className="md:text-4xl text-3xl font-semibold text-black mb-2 tracking-wide">A Word From</SplitText>
            <SplitText className="md:text-5xl text-4xl font-medium text-primary-400 mb-4 tracking-wide">Our Happy Customers</SplitText>
            <p className="text-black/50">
              From everyday moments to life’s special celebrations, our jewelry
              has become part of many meaningful stories. Here’s what our
              customers have to say.
            </p>
          </div>
          {/* testimonial swiper */}
          <div className="xl:mx-2 mx-6">
            <Swiper
              spaceBetween={20}
              loop={true}
              speed={600}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              slidesPerView={"1"}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1400: {
                  slidesPerView: 4,
                },
              }}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="testiSwiper"
            >
              {Data.testiDetails.map((testi) => (
                <SwiperSlide className="py-16" key={testi.id}>
                  <div className="bg-primary p-7.5 relative overflow-visible">
                    <div className="h-30 w-30 overflow-hidden rounded-full absolute -top-15 left-1/2 -translate-x-1/2 z-20 border-5 border-gold-100 border-offset-0">
                      <img
                        src={`/images/avatars/${testi.src}`}
                        alt="avtar image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-7.5 border-2 border-primary-100 relative z-10">
                      <h6 className="text-xl font-bold text-gold-400 mb-5 mt-7.5">
                        {testi.name}
                      </h6>
                      <p className="text-gold-100 font-light mb-6.5">
                        “ {testi.desc} ”
                      </p>
                      <div className="flex items-center justify-center space-x-1">
                        {[...Array(5)].map((_, index) => {
                          if (index + 0.5 === testi.rating) {
                            // Half star
                            return (
                              <FaStarHalfAlt
                                key={index}
                                className="text-gold-400"
                              />
                            );
                          } else if (index < testi.rating) {
                            // Full star
                            return (
                              <FaStar key={index} className="text-gold-400" />
                            );
                          } else {
                            // Empty star
                            return (
                              <FaRegStar
                                key={index}
                                className="text-gold-400"
                              />
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
