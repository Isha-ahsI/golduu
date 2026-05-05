import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PrimaryButton } from "../components/ui/Button";
import { FaUser, FaLock, FaLockOpen } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const SignIn = () => {
  const [active, setActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const logEmail = formData.get("logEmailId");
    const logPsw = formData.get("logPassword");
    const username = formData.get("username");
    const authEmail = formData.get("authEmail");
    const authPsw = formData.get("authPassword");

    // Add your authentication logic here
    console.log("Form submitted:", {
      logEmail,
      logPsw,
      username,
      authEmail,
      authPsw,
    });

    // For now, just navigate
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-[url(/images/contactbg.jpg)] relative z-0 bg-center bg-cover bg-no-repeat">
        <div className="absolute z-10 bg-black/25 inset-0 backdrop-blur-xs"></div>
        <div
          className={`relative z-20 lg:w-225 md:w-150 md:h-150 h-auto w-full bg-white/50 backdrop-blur-md rounded-[30px] lg:mx-0 mx-8 shadow-lg overflow-hidden transition-all duration-700 flex justify-center items-center ${active ? "active" : ""}`}
        >
          {/* LOGIN FORM */}
          <div
            className={`lg:absolute relative z-40 top-0 right-0 h-full flex items-center justify-center p-10 transition-all ${active ? "lg:invisible hidden opacity-0 w-0 duration-400" : "lg:visible block opacity-100 lg:w-1/2 w-full duration-700"}`}
          >
            <form
              className="w-full text-center flex flex-col justify-center h-full"
              onSubmit={handleSubmit}
            >
              <h2 className="text-3xl font-bold mb-4 tracking-widest lg:hidden block">
                Welcome Back!
              </h2>
              <h1 className="text-3xl mb-4 font-semibold tracking-wider">
                Login
              </h1>
              <div className="relative my-6">
                <input
                  type="email"
                  id="logEmailId"
                  name="logEmailId"
                  className="w-full p-4 text-primary bg-primary/10 border border-primary/25 rounded-lg outline-none placeholder-primary/75 transition-all ease-linear duration-300  focus-within:border-primary"
                  placeholder="Email ID"
                />
                <IoMdMail className="absolute right-3 top-1/2 -translate-y-1/2 text-primary text-xl" />
              </div>

              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  id="logPassword"
                  name="logPassword"
                  className="w-full p-4 text-primary bg-primary/10 border border-primary/25 rounded-lg outline-none placeholder-primary/75 transition-all ease-linear duration-300  focus-within:border-primary"
                  placeholder="Password"
                />
                <span
                  onClick={togglePassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary text-xl cursor-pointer"
                >
                  {showPassword ? <FaLockOpen /> : <FaLock />}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-8">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="appearance-none h-4 w-4 bg-transparent border border-primary rounded-sm checked:bg-primary checked:after:content-['✓'] checked:after:text-gold-300 checked:after:text-sm checked:after:block checked:after:leading-none checked:after:text-center checked:after:font-bold"
                />
                <p>Remember me</p>
              </div>
              <PrimaryButton
                className="bg-primary w-full text-gold lg:mb-0 mb-8"
                type="submit"
              >
                Log In
              </PrimaryButton>
              <p className="mt-auto lg:hidden block">
                Don't have an account ? {" "}
                <Link onClick={() => setActive(true)} className="underline">
                  Register
                </Link>
              </p>
            </form>
          </div>

          {/* REGISTER FORM */}
          <div
            className={`lg:absolute relative z-40 top-0 left-0 h-full flex items-center justify-center p-10 transition-all ${active ? "lg:visible block opacity-100 lg:w-1/2 w-full duration-700" : "lg:invisible hidden opacity-0 w-0 duration-400"}`}
          >
            <form
              className="w-full text-center flex flex-col justify-center h-full"
              onSubmit={handleSubmit}
            >
              <h2 className="text-3xl font-bold mb-4 tracking-widest lg:hidden block">
                Hello, Welcome!
              </h2>
              <h1 className="text-3xl mb-4 font-semibold tracking-wider">
                Register
              </h1>

              <div className="relative my-6">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full p-4 text-primary bg-primary/10 border border-primary/25 rounded-lg outline-none placeholder-primary/75 transition-all ease-linear duration-300  focus-within:border-primary"
                  placeholder="Username"
                />
                <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-primary text-xl" />
              </div>

              <div className="relative mb-6">
                <input
                  type="email"
                  id="authEmail"
                  name="authEmail"
                  className="w-full p-4 text-primary bg-primary/10 border border-primary/25 rounded-lg outline-none placeholder-primary/75 transition-all ease-linear duration-300  focus-within:border-primary"
                  placeholder="Email ID"
                />
                <IoMdMail className="absolute right-3 top-1/2 -translate-y-1/2 text-primary text-xl" />
              </div>

              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  id="authPassword"
                  name="authPassword"
                  className="w-full p-4 text-primary bg-primary/10 border border-primary/25 rounded-lg outline-none placeholder-primary/75 transition-all ease-linear duration-300  focus-within:border-primary"
                  placeholder="Password"
                />
                <span
                  onClick={togglePassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary text-xl cursor-pointer"
                >
                  {showPassword ? <FaLockOpen /> : <FaLock />}
                </span>
              </div>
              <div className="flex sm:items-cente r gap-2 mb-8">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="appearance-none h-4 w-4 bg-transparent border border-primary rounded-sm checked:bg-primary checked:after:content-['✓'] checked:after:text-gold-300 checked:after:text-sm checked:after:block checked:after:leading-none checked:after:text-center checked:after:font-bold"
                />
                <p className="text-start">I agree to terms and conditions</p>
              </div>
              <PrimaryButton
                className="bg-primary w-full text-gold lg:mb-0 mb-8"
                type="submit"
              >
                Register
              </PrimaryButton>
              <p className="mt-auto lg:hidden block">
                Already have an account ? {" "}
                <Link onClick={() => setActive(false)} className="underline">
                  LogIn
                </Link>
              </p>
            </form>
          </div>

          {/* TOGGLE PANEL */}
          <div className="absolute inset-0 lg:flex hidden z-30">
            {/* LEFT */}
            <div
              className={`w-full flex flex-col justify-center items-center bg-primary-400 rounded-e-full text-gold-300 transition-all duration-700 ${active ? "-translate-x-full" : ""}`}
            >
              <h2 className="text-3xl font-bold mb-8 tracking-widest">
                Welcome Back!
              </h2>
              <p className="mb-4">Don't have an account? </p>
              <PrimaryButton
                onClick={() => setActive(true)}
                className="bg-gold text-primary"
              >
                Register
              </PrimaryButton>
            </div>

            {/* RIGHT */}
            <div
              className={`w-full flex flex-col justify-center items-center bg-primary-400 rounded-s-full text-gold-300 transition-all duration-700 ${active ? "translate-x-0" : "translate-x-full"}`}
            >
              <h2 className="text-3xl font-bold mb-8 tracking-widest">
                Hello, Welcome!
              </h2>
              <p className="mb-4">Already have an account? </p>
              <PrimaryButton
                onClick={() => setActive(false)}
                className="bg-gold text-primary"
              >
                Login
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
