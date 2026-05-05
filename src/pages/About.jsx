import React from "react";
import { CtaSection } from "../components/home/CtaSection";
import { InstagramSlider } from "../components/home/InstagramSlider";
import { Services } from "../components/home/Services";
import { HeroSection } from "../components/aboutus/HeroSection";
import Philosophy from "../components/aboutus/Philosophy";
import { FeatureSection } from "../components/aboutus/FeatureSection";
import { ProcessSection } from "../components/aboutus/ProcessSection";

export const About = () => {
  return (
    <>
      <HeroSection />
      <Philosophy />
      <ProcessSection />
      <FeatureSection />
      <Services />
      <CtaSection />
      <InstagramSlider />
    </>
  );
};
