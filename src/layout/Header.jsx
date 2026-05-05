import React, { useState, useEffect } from "react";
import Data from "../data/mockdata.json";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { PrimaryButton } from "../components/ui/Button";
import { Navlink } from "../components/ui/Navlink";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuBadgeHelp, LuUser } from "react-icons/lu";
import { IoClose, IoLogOutOutline } from "react-icons/io5";
import { LiaHomeSolid } from "react-icons/lia";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiPhoneCall } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";

const iconMap = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaTwitter,
};

export const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [activeLinks, setActiveLinks] = useState({});
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-primary z-40 w-full text-center h-10 flex items-center justify-center overflow-hidden top-0 left-0">
        <small className="text-gold-300">
          Up to 50% off on Selected Collections!
        </small>
      </div>

      <nav
        className={`z-40 fixed py-6 px-4 top-10 left-1/2 -translate-x-1/2 flex items-center justify-between transition-all duration-300 ease-linear overflow-hidden ${scrolled ? "bg-primary/75 backdrop-blur-lg shadow-md w-[90%] rounded-3xl" : "bg-transparent w-full rounded-none"}`}
      >
        <div className="hidden lg:flex items-center justify-center gap-3">
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
        <div className="flex items-center lg:justify-center justify-start relative">
          {/* left links */}
          <ul className="hidden lg:flex justify-center items-center gap-x-10">
            {Data.navlink.slice(0, 2).map((link) => (
              <li
                className={`transition-bg bg-transparent duration-500 overflow-hidden relative group px-3 py-1 hover:bg-gold-300/25 ${activeLinks[link.id] ? "bg-gold-300/25" : ""}`}
                key={link.id}
              >
                <Navlink
                  to={link.to}
                  word1={link.title}
                  word2={link.title}
                  onActiveChange={(isActive) =>
                    setActiveLinks((prev) => ({ ...prev, [link.id]: isActive }))
                  }
                >
                  {link.title}
                </Navlink>
                <span className="absolute top-0 left-0 w-full h-0.5 bg-gold-300/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-300/50 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              </li>
            ))}
          </ul>

          {/* Logo centered */}
          <div className="xl:mx-16 lg:mx-12 mx-0">
            <Link to="/home">
              <img
                src="/images/logo/logo-light.png"
                alt="Logo"
                className="w-30 h-full sm:block hidden"
              />
              <img
                src="/images/logo/logo-sm.png"
                alt="Logo"
                className="w-10 h-full block sm:hidden"
              />
            </Link>
          </div>

          {/* right links */}
          <ul className="hidden lg:flex justify-center items-center gap-x-10">
            {Data.navlink.slice(2, 4).map((link) => (
              <li
                className={`transition-bg bg-transparent duration-400 overflow-hidden relative group px-3 py-1 hover:bg-gold-300/25 ${activeLinks[link.id] ? "bg-gold-300/25" : ""}`}
                key={link.id}
              >
                <Navlink
                  to={link.to}
                  end
                  word1={link.title}
                  word2={link.title}
                  onActiveChange={(isActive) =>
                    setActiveLinks((prev) => ({ ...prev, [link.id]: isActive }))
                  }
                />
                <span className="absolute top-0 left-0 w-full h-0.5 bg-gold-300/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-300/50 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-6 ml-auto lg:ml-0">
          <BsCart3 className="text-gold-300 text-2xl" />
          <PrimaryButton size="sm" onClick={() => navigate("/sign-in")}>
            Sign In
          </PrimaryButton>
          <div
            className="lg:hidden w-12 h-8 cursor-pointer flex flex-col items-center justify-center gap-3"
            onClick={() => setOpen(!open)}
          >
            <div
              className={`w-[50%] h-0.75 bg-gold-300 rounded-full transition-all duration-300 origin-left  ${open ? "-rotate-45 translate-y-4" : "translate-y-[0.45rem]"}`}
            ></div>
            <div
              className={`w-[50%] h-0.75 bg-gold-300 rounded-full transition-all duration-300 origin-center ${open ? "hidden" : "block"}`}
            ></div>
            <div
              className={`w-[50%] h-0.75 bg-gold-300 rounded-full transition-all duration-300 origin-left ${open ? "rotate-45 -translate-y-4" : "-translate-y-[0.45rem]"}`}
            ></div>
          </div>
        </div>
      </nav>

      {/* overlay */}
      {open && (
        <div
          className="fixed lg:hidden inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* sidebar */}
      <div
        className={`fixed lg:hidden top-0 right-0 h-full sm:w-85 w-75 bg-primary z-50 flex flex-col justify-between transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4">
          <p className="text-gold-100 text-xl font-medium">Menu</p>
          <button
            className="bg-transparent border-0 transition-all duration-300 ease-in-out hover:bg-white/25 rounded-lg"
            onClick={() => setOpen(false)}
          >
            <IoClose className="text-gold-300/50 text-3xl transition-all duration-300 ease-in-out hover:rotate-90 hover:text-gold-300" />
          </button>
        </div>
        <div className="flex flex-col space-y-2 px-4 mt-4">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `text-gold-300 flex items-center p-2 space-x-2 transition-all duration-300 linear hover:bg-gold-300/50 hover:rounded-full hover:text-primary hover:font-semibold text-lg ${isActive ? "bg-gold-300/50 text-primary font-semibold" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            <LiaHomeSolid className="text-[22px]" />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              `text-gold-300 flex items-center p-2 space-x-2 transition-all duration-300 linear hover:bg-gold-300/50 hover:rounded-full hover:text-primary hover:font-semibold text-lg ${isActive ? "bg-gold-300/50 text-primary font-semibold" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            <LuUser className="text-[22px]" />
            <span>About Us</span>
          </NavLink>
          <NavLink
            to="/collections"
            className={({ isActive }) =>
              `text-gold-300 flex items-center p-2 space-x-2 transition-all duration-300 linear hover:bg-gold-300/50 hover:rounded-full hover:text-primary hover:font-semibold text-lg ${isActive ? "bg-gold-300/50 text-primary font-semibold" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            <HiOutlineShoppingBag className="text-[22px]" />
            <span>Collections</span>
          </NavLink>
          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              `text-gold-300 flex items-center p-2 space-x-2 transition-all duration-300 linear hover:bg-gold-300/50 hover:rounded-full hover:text-primary hover:font-semibold text-lg ${isActive ? "bg-gold-300/50 text-primary font-semibold" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            <PiPhoneCall className="text-[22px]" />
            <span>Contact Us</span>
          </NavLink>
          <PrimaryButton
            size="sm"
            className="mt-4 w-full font-semibold"
            onClick={() => navigate("/sign-in")}
          >
            Sign In
          </PrimaryButton>
        </div>
        <div className="mt-auto pb-4">
          <div className="flex flex-col space-y-2 px-4 ">
            <NavLink
              to="/help"
              className={({ isActive }) =>
                `text-gold-300 flex items-center p-2 space-x-2 transition-all duration-300 linear hover:bg-gold-300/50 hover:rounded-full hover:text-primary hover:font-semibold ${isActive ? "bg-gold-300/50 text-primary font-semibold" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              <LuBadgeHelp className="text-xl" />
              <span>Help</span>
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `text-gold-300 flex items-center p-2 space-x-2 transition-all duration-300 linear hover:bg-gold-300/50 hover:rounded-full hover:text-primary hover:font-semibold ${isActive ? "bg-gold-300/50 text-primary font-semibold" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              <IoSettingsOutline className="text-xl" />
              <span>Settings</span>
            </NavLink>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                `text-gold-300 flex items-center p-2 space-x-2 transition-all duration-300 linear hover:bg-gold-300/50 hover:rounded-full hover:text-primary hover:font-semibold ${isActive ? "bg-gold-300/50 text-primary font-semibold" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              <IoLogOutOutline className="text-xl" />
              <span>Logout</span>
            </NavLink>
          </div>
          <hr className="border-gold-100 opacity-10 my-4" />
          <div className="flex items-center justify-end space-x-2 px-4">
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
        </div>
      </div>
    </>
  );
};
