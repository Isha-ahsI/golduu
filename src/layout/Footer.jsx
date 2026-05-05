import React from "react";
import { Link } from "react-router-dom";
import Data from "../data/mockdata.json";
import { PrimaryButton } from "../components/ui/Button";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const iconMap = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaTwitter,
};

export const Footer = () => {
  return (
    <>
      <footer className="bg-primary sm:pt-10 pt-18.5 pb-4">
        <div className="mx-12.5">
          <div className="lg:grid lg:grid-cols-12 lg:gap-4 mb-8 lg:items-center lg:space-y-0 space-y-12">
            {/* logo and description */}
            <div className="xl:col-span-3 col-span-12 flex flex-col xl:justify-start xl:items-start justify-center items-center xl:text-start text-center">
              <Link to="/home">
                <img
                  src="/images/logo/logo-light.png"
                  alt="Logo"
                  className="w-50 h-full"
                />
              </Link>
              <p className="text-wrap text-gold-100/75 my-4">
                Discover timeless elegance with our handcrafted jewelry. Each
                piece is designed to celebrate your unique style and add a touch
                of sparkle to every moment.
              </p>
              <div className="flex gap-3">
                {Data.socialIcon.map((icon) => {
                  const Icon = iconMap[icon.socialMedia];
                  return (
                    <Link to="/" key={icon.id}>
                      <div
                        className={`bg-white/20 rounded-full p-1.5 transition-all duration-300 ease-in-out ${icon.extraClass} hover:-translate-y-1 hover:scale-120`}
                      >
                        <Icon className="text-gold-300 hover:text-white text-lg" />
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="lg:mt-8 mt-4">
                <h5 className="text-gold-300 mb-3">
                  Subscribe Our Newsletters
                </h5>
                <form className="sm:space-y-0 space-y-4">
                  <div className="input-group flex items-center border border-gold-500/25 bg-white/25 rounded-md ps-2 pe-2 py-1 backdrop-blur-md max-w-3xl focus-within:border-gold-500 focus-within:shadow-[0_0px_35px_rgba(var(--color-gold-rgb),0.25)]">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      id="ctaEmail"
                      name="ctaEmail"
                      className="flex-1 bg-transparent text-white text-base placeholder-white/50 sm:p-2 p-1 focus:outline-none"
                      required
                    />
                    <PrimaryButton
                      type="submit"
                      size="sm"
                      className="rounded-md hover:translate-y-0 sm:block hidden"
                    >
                      Subscribe
                    </PrimaryButton>
                  </div>
                  <PrimaryButton
                    type="submit"
                    size="sm"
                    className="rounded-md hover:translate-y-0 sm:hidden block mx-auto"
                  >
                    Subscribe
                  </PrimaryButton>
                </form>
              </div>
            </div>
            {/* quick links */}
            <div className="xl:col-span-6 lg:col-span-8 col-span-12">
              <div className="flex sm:flex-row flex-col xl:justify-center lg:justify-start justify-around lg:space-x-16 space-x-0 sm:space-y-0 space-y-8">
                <div>
                  <h5
                    className="text-gold-500 mb-6 uppercase relative inline-block text-lg font-semibold 
                    after:content-[''] after:absolute after:left-0
                    after:-bottom-2 after:w-12 after:h-0.5 after:bg-gold-500/75"
                  >
                    Quick Links
                  </h5>
                  <ul className="space-y-3">
                    {Data.quickLinks.map((link) => (
                      <li key={link.id}>
                        <Link
                          to={link.to}
                          className="text-gold-300 transition-all duration-300 linear hover:text-gold-500 relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
                      after:-bottom-1 after:w-0 hover:after:w-full after:h-px after:transition-all after:duration-300 after:ease-linear after:bg-gold-500 hover:tracking-wide text-lg font-light hover:font-normal"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5
                    className="text-gold-500 mb-6 uppercase relative inline-block text-lg font-semibold 
                    after:content-[''] after:absolute after:left-0
                    after:-bottom-2 after:w-8 after:h-0.5 after:bg-gold-500/75"
                  >
                    Our Shop
                  </h5>
                  <ul className="space-y-3">
                    {Data.shopLinks.map((link) => (
                      <li key={link.id}>
                        <Link
                          to={link.to}
                          className="text-gold-300 transition-all duration-300 linear hover:text-gold-500 relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
                      after:-bottom-1 after:w-0 hover:after:w-full after:h-px  after:transition-all after:duration-300 after:ease-linear after:bg-gold-500 hover:tracking-wide text-lg font-light hover:font-normal"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5
                    className="text-gold-500 mb-6 uppercase relative inline-block text-lg font-semibold 
                    after:content-[''] after:absolute after:left-0
                    after:-bottom-2 after:w-12 after:h-0.5 after:bg-gold-500/75"
                  >
                    Get In Touch
                  </h5>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <IoLocationOutline className="text-gold-500 bg-gold-100/15 backdrop-blur-lg rounded-full size-8 p-1 border border-gold-500/25" />
                      <address className="text-gold-300 font-light">
                        45 Madison Avenue, Suite 210,
                        <br /> New York, NY 10010 USA
                      </address>
                    </li>
                    <li className="flex items-center gap-3">
                      <MdOutlineLocalPhone className="text-gold-500 bg-gold-100/15 backdrop-blur-lg rounded-full size-8 p-1 border border-gold-500/25" />
                      <p className="text-gold-300 font-light">
                        +1 (212) 555-7890
                      </p>
                    </li>
                    <li className="flex items-center gap-3">
                      <IoMailOutline className="text-gold-500 bg-gold-100/15 backdrop-blur-lg rounded-full size-8 p-1 border border-gold-500/25" />
                      <p className="text-gold-300 font-light">
                        xyz.example@yahoo.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* gallery */}
            <div className="xl:col-span-3 lg:col-span-4 col-span-12 flex flex-col items-center justify-center">
              <h5 className="text-gold-300 mb-8 uppercase">Latest Gallery</h5>
              <div className="columns-3 gap-4">
                <div className="aspect-3/2 overflow-hidden mb-4 rounded-sm brightness-75 transition-all duration-300 ease-linear hover:brightness-100 group">
                  <img
                    className="w-full h-full object-cover transform transition-transform duration-300 ease-linear group-hover:scale-110"
                    src="/images/collection/product1.jpg"
                  />
                </div>
                <div className="aspect-2/3 overflow-hidden rounded-sm brightness-75 transition-all duration-300 ease-linear hover:brightness-100 group">
                  <img
                    className="w-full h-full object-cover transform transition-transform duration-300 ease-linear group-hover:scale-110"
                    src="/images/collection/chain/img4.jpg"
                  />
                </div>
                <div className="aspect-square overflow-hidden mb-4 rounded-sm brightness-75 transition-all duration-300 ease-linear hover:brightness-100 group">
                  <img
                    className="w-full h-full object-cover transform transition-transform duration-300 ease-linear group-hover:scale-110"
                    src="/images/collection/product3.jpg"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-sm brightness-75 transition-all duration-300 ease-linear hover:brightness-100 group">
                  <img
                    className="w-full h-full object-cover transform transition-transform duration-300 ease-linear group-hover:scale-110"
                    src="/images/collection/product4.jpg"
                  />
                </div>
                <div className="aspect-2/3 overflow-hidden mb-4 rounded-sm brightness-75 transition-all duration-300 ease-linear hover:brightness-100 group">
                  <img
                    className="w-full h-full object-cover transform transition-transform duration-300 ease-linear group-hover:scale-110"
                    src="/images/collection/product5.jpg"
                  />
                </div>
                <div className="aspect-3/2 overflow-hidden rounded-sm brightness-75 transition-all duration-300 ease-linear hover:brightness-100 group">
                  <img
                    className="w-full h-full object-cover transform transition-transform duration-300 ease-linear group-hover:scale-110"
                    src="/images/collection/product6.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="border border-gold-300/10 mb-2" />
          {/* copyright */}
          <div className="flex flex-wrap justify-center items-center text-center text-gold-300/75">
            <span>
              © {new Date().getFullYear()} GolDuu — Powered by{" "}
              <Link
                to="https://mantrakshdevs.com/"
                className="underline decoration-1 text-gold-300/75 hover:text-gold-500 transition-colors duration-300 ease-linear"
                target="_blank"
              >
                Mantraksh Devs
              </Link>
            </span>
            <span className="mx-2 text-xs">
              <GoDotFill />
            </span>
            <ul className="flex flex-wrap items-center sm:justify-end justify-center">
              <li>
                <Link
                  to="/"
                  className="text-gold-300/75 transition-color duration-300 ease-linear hover:text-gold-500 underline decoration-1"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <span className="mx-2">|</span>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gold-300/75 transition-color duration-300 ease-linear hover:text-gold-500 underline decoration-1"
                >
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
