import React from "react";


// badge component
export const Badge = ({ Icon, text }) => {
  return (
    <>
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
        <Icon className="h-4 w-4" />
        <span>{text}</span>
      </span>
    </>
  );
};
