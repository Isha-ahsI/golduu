import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Data from "../data/mockdata.json";
import { PrimaryButton } from "../components/ui/Button";
import { HeroIcon } from "../components/ui/HeroIcon";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const iconMap = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaTwitter,
};

export const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // ✅ Set target date (6 months from now)
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 6);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gold-500/75 p-16">
        <div className="flex-1 flex flex-col items-center justify-center">
          <HeroIcon colorClass="text-primary" />
          <div className="mb-16 text-center">
            <h1 className="capitalize lg:text-5xl sm:text-4xl text-3xl font-medium mb-4">
              Somthing Awesome Is In the work
            </h1>
            <p className="text-lg text-primary/75">
              We're working hard to bring you something amazing. Stay tuned!
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto sm:mb-20 mb-16">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="relative sm:w-30 w-25 sm:h-30 h-25 flex flex-col items-center justify-center"
              >
                <div className="absolute w-full h-full rotate-45 border border-primary/75 rounded-xl drop-shadow-lg drop-shadow-primary"></div>
                <div className="text-3xl sm:text-4xl font-bold text-primary">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-primary/75 uppercase tracking-wider">
                  {unit}
                </div>
              </div>
            ))}
          </div>
          <form className="w-full">
            <div className="input-group flex items-center border border-primary/50 bg-transaprent rounded-md ps-2 pe-2 py-1 backdrop-blur-md w-full focus-within:border-primary focus-within:shadow-[0_0px_35px_rgba(var(--color-gold-rgb),0.25)]">
              <input
                type="email"
                placeholder="Enter Your Email"
                id="yourEmail"
                name="yourEmail"
                className="flex-1 bg-transparent text-primary text-base placeholder-primary/50 sm:p-2 p-1 focus:outline-none"
                required
              />
              <PrimaryButton
                type="submit"
                size="sm"
                className="rounded-md hover:translate-y-0 sm:block hidden bg-primary text-gold-300"
              >
                Subscribe
              </PrimaryButton>
            </div>
            <PrimaryButton
              type="submit"
              size="sm"
              className="rounded-md hover:translate-y-0 sm:mt-0 mt-4 sm:hidden block mx-auto bg-primary text-gold-300"
            >
              Subscribe
            </PrimaryButton>
          </form>
        </div>
        <div className="flex items-center justify-center gap-3 mb-4">
          {Data.socialIcon.map((icon) => {
            const Icon = iconMap[icon.socialMedia];
            return (
              <Link to="/" key={icon.id}>
                <div
                  className={`bg-primary/25 rounded-full p-2 transition-all duration-300 ease-in-out ${icon.extraClass} hover:-translate-y-1 hover:scale-120`}
                >
                  <Icon className="text-gold-100 hover:text-white text-xl" />
                </div>
              </Link>
            );
          })}
        </div>
        <p className="text-center">
          © {new Date().getFullYear()} | GolDuu — Powered by{" "}
          <Link
            to="https://mantrakshdevs.com/"
            className="underline decoration-1 text-primary/75 hover:text-primary transition-colors duration-300 ease-linear"
            target="_blank"
          >
            Mantraksh Devs
          </Link>
        </p>
      </div>
    </>
  );
};
