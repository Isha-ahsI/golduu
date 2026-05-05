import React from "react";
import { IoDiamondOutline } from "react-icons/io5";

// hero icon component
export const HeroIcon = ({colorClass}) => {
  const icons = [1, 2, 3];
  return (
    <>
      <div className="flex items-center justify-center gap-3.5">
        {icons.map((item, index) => (
          <IoDiamondOutline
            key={index}
            className={`animate-[sparkle_3s_infinite] ${index === 1 ? "w-[28.32px] h-[29.15px]" : "w-[21.37px] h-5.5"} ${colorClass}`}
          />
        ))}
      </div>
    </>
  );
};
