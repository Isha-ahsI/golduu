import React from "react";
import Data from "../../data/mockdata.json";
import SplitText from "../../components/ui/SplitText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Bracelet collection section
export const Bracelet = () => {
  return (
    <>
      <section className="sm:my-25 my-18.5 text-center flex justify-center items-center overflow-hidden">
        <div className="container">
          <SplitText className="md:text-5xl text-4xl font-semibold md:mb-25 mb-12.5 text-black text-center tracking-wide"> Classic Bracelet <span className="text-primary-400"> Collection</span></SplitText>
          <div className="xl:mx-2 mx-6">
            <Swiper
                spaceBetween={30}
                loop={true}
                speed={800}
                autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                }}
                grabCursor={true}
                slidesPerView={"1"}
                breakpoints={{
                640: { slidesPerView: 2 },
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
                className="braceletSwiper"
            >
                {Data.bracelet.map((bracelet)=>(
                    <SwiperSlide key={bracelet.id} className="pb-20">
                        <div className="flex flex-col justify-center items-center">
                            <div className="sm:h-full sm:w-full max-h-100 max-w-100 overflow-hidden rounded-2xl mb-4">
                                <img src={`/images/collection/bracelet/${bracelet.src}`} alt="bracelet image" className="h-full w-full object-cover"/>
                            </div>
                            <div className="flex justify-between gap-2">
                                <div className="text-start">
                                    <h6 className="font-semibold text-lg">Luna Gold Bracelet</h6>
                                    <p className="text-sm text-primary/75">Crafted in certified 18K gold forlasting brilliance.</p>
                                </div>
                                <h6 className="font-semibold text-lg">$420.00</h6>
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
