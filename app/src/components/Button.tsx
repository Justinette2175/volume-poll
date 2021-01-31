import React from "react";
import clsx from "clsx";

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button className={clsx(className, "px-3 py-1 rounded mx-1")} {...props}>
      {children}
    </button>
  );
};
