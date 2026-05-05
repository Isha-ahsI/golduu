import React from "react";
import Data from "../../data/mockdata.json";
import SplitText from "../../components/ui/SplitText";

export const PopularCats = () => {
  return (
    <>
      <section className="sm:my-25 my-18.5 text-center flex justify-center items-center overflow-hidden">
        <div className="container">
          {/* popular categories header */}
          <SplitText className="md:text-5xl text-4xl font-semibold md:mb-26 mb-14 text-black tracking-wide">Popular <span className="text-primary-400">Categories</span></SplitText>
          {/* popular categories items */}
          <div className="grid xl:grid-cols-6 sm:grid-cols-3 grid-cols-1 xl:gap-0 gap-8 mb-4">
            {Data.categories.map((category) => (
              <div
                className="flex flex-col items-center justify-center"
                key={category.id}
              >
                <div className="group cursor-pointer">
                  <img
                    src={category.src}
                    alt={category.title}
                    className="rounded-full overflow-hidden object-cover md:size-43 size-30 md:border-12 border-8 border-primary-400/40 shadow-lg/30 mb-4 transition-all duration-400 group-hover:scale-105 group-hover:-translate-y-3 group-hover:shadow-2xl"
                  />
                  <p className="relative inline-block font-semibold text-primary-400 md:text-2xl text-lg group-hover:text-shadow-lg">
                    <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-primary-400/50 after:scale-x-0 after:origin-right after:transition-transform after:duration-400 group-hover:after:scale-x-100 group-hover:after:origin-left">
                      {category.title}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
