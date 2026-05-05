import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// split text component
const SplitText = ({ children , className = ""}) => {
  const ref = useRef(null);

  useEffect(() => {
    const letters = ref.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      {
        x: 40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 1.5,
        stagger: 0.03,

        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="overflow-hidden">
      <h1
        ref={ref}
        className={className}
      >
        {React.Children.map(children, (child) => {
          // If it's a string → split letters
          if (typeof child === "string") {
            return child.split("").map((char, i) => (
              <span key={i} className="letter inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ));
          }
          return React.cloneElement(child, {
            children: child.props.children
              .split("")
              .map((char, i) => (
                <span key={i} className="letter inline-block">
                  {char}
                </span>
              )),
          });
        })}
        
      </h1>
    </div>
  );
};

export default SplitText;