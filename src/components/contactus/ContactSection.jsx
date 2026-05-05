import React from "react";
import Data from "../../data/mockdata.json";
import SplitText from "../../components/ui/SplitText";
import { FaUserAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaTags } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";

const iconMap = {
  user: FaUserAlt,
  mail: IoMdMail,
  tag: FaTags,
  message: AiFillMessage,
};

// customer contact form section
export const ContactSection = () => {
  return (
    <>
      <section className="sm:my-25 my-18.5 text-center flex flex-col justify-center items-center overflow-hidden">
        <div className="mx-4">
          <div className="sm:mb-16 mb-8">
            <SplitText className="md:text-5xl text-4xl font-semibold text-primary-400 mb-4 tracking-wide">Have Any Questions ?</SplitText>
            <p className="text-primary-400/75 md:text-xl text-md">
              Whether you need support or more details, we’re here to help.
              Connect with us and we’ll respond as quickly as possible.
            </p>
          </div>
          <form className="sm:grid sm:grid-cols-12 sm:gap-6 sm:space-y-0 space-y-6">
            {Data.userContact.map((userInfo) => {
              const Icon = iconMap[userInfo.icon];
              return (
                <div key={userInfo.id} className={userInfo.col}>
                  <div className="input-group flex items-stretch rounded-lg overflow-hidden mb-3 group focus-within:ring-3 ring-primary/40">
                    <span className="input-group-addon flex items-center px-5 border border-primary bg-primary text-gold-300">
                      <Icon className="text-gold-300 text-lg" />
                    </span>
                    {userInfo.type === "textarea" ? (
                      <textarea
                        id={userInfo.name}
                        name={userInfo.name}
                        rows="3"
                        placeholder={userInfo.placeholder}
                        className="flex-1 bg-transparent text-primary text-base placeholder-primary/40 px-3 py-3 focus:outline-none border border-primary/40 rounded-e-lg"
                        required
                      ></textarea>
                    ) : (
                      <input
                        type={userInfo.type}
                        placeholder={userInfo.placeholder}
                        id={userInfo.name}
                        name={userInfo.name}
                        className="flex-1 bg-transparent text-primary text-base placeholder-primary/40 px-3 py-3 focus:outline-none border border-primary/40 rounded-e-lg"
                        required
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </form>
        </div>
      </section>
    </>
  );
};
