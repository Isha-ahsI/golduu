import React from "react";
import { InstagramSlider } from "../components/home/InstagramSlider";
import { HeroSection } from "../components/contactus/HeroSection";
import { ContactInfo } from "../components/contactus/ContactInfo";
import { ContactSection } from "../components/contactus/ContactSection";
import { Location } from "../components/contactus/Location";

export const Contact = () => {
  return (
    <>
      <HeroSection />
      <ContactInfo />
      <ContactSection />
      <Location />
    </>
  );
};
