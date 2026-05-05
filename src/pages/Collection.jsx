import React from "react";
import { CtaSection } from "../components/home/CtaSection";
import { InstagramSlider } from "../components/home/InstagramSlider";
import { HeroSection } from "../components/collection/HeroSection";
import { Earring } from "../components/collection/Earring";
import { Chain } from "../components/collection/Chain";
import { Favorites } from "../components/home/Favorites";
import { Rings } from "../components/collection/Rings";
import { PromoSection } from "../components/collection/PromoSection";
import { Bracelet } from "../components/collection/Bracelet";
import { Arrivals } from "../components/collection/Arrivals";

export const Collection = () => {
  return (
    <>
      <HeroSection />
      <Earring />
      <Chain />
      <Favorites />
      <Rings />
      <PromoSection />
      <Bracelet />
      <Arrivals />
      <CtaSection />
      <InstagramSlider />
    </>
  );
};
