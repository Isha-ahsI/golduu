import React from "react";
import Data from "../../data/mockdata.json";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineSignature } from "react-icons/ai";
import { LuSparkles } from "react-icons/lu";
import { RiPokerHeartsLine } from "react-icons/ri";

const iconMap = {
    signature: AiOutlineSignature,
    style: LuSparkles,
    world: RiPokerHeartsLine,
};

// Feature section 
export const FeatureSection = () => {
    return (
        <>
            <section className="sm:my-25 my-18.5 flex justify-center items-center mx-4">
                <div className="flex flex-wrap justify-center items-stretch gap-6">
                    {Data.featureInfo.map((feature) => {
                        const Icon = iconMap[feature.icon];
                        return (
                            <div
                                className={`relative rounded-full overflow-hidden max-w-100 max-h-150 shadow-lg transition-all duration-300 ease-linear hover:shadow-[0_0px_60px_rgba(var(--color-gold-rgb),0.8)] hover:-translate-y-2 ${feature.id !== 2 ? "xl:scale-90" : ""}`}
                                key={feature.id}
                            >
                                <img
                                    src={`/images/featuresimgs/${feature.src}`}
                                    alt={feature.title}
                                    className="relative w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/25 backdrop-blur-sm"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center justify-center text-center w-full p-4">
                                    <div className="size-15 border-3 border-white rounded-full flex items-center justify-center mb-8">
                                        <Icon className="text-white text-3xl" />
                                    </div>
                                    <h1 className="text-white font-semibold text-xl mb-4">
                                        {feature.title}
                                    </h1>
                                    <p className="text-white/75 sm:mb-12 mb-4">{feature.desc}</p>
                                    <button className="group/btn flex items-center gap-2 text-white font-normal text-lg hover:gap-4 hover:text transition-all duration-150 ease-linear">
                                        <span className="relative uppercase group/btn">
                                            <span className="relative text-base tracking-wide transition-font duration-150 ease-linear group-hover/btn:font-medium group-hover/btn:tracking-[.25em]">
                                                Read More
                                                <span
                                                    className="absolute left-0 -bottom-0.5 w-full h-px bg-white origin-bottom-right scale-x-0 
                                                                                            transition-transform duration-300 ease-out group-hover/btn:scale-x-100 group-hover/btn:origin-bottom-left"
                                                ></span>
                                            </span>
                                        </span>
                                        <BsArrowRight className="text-white" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};
