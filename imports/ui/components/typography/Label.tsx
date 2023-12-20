import React from "react";
import { twMerge } from "tailwind-merge";

interface LabelProps {
  className?: string;
  children: React.ReactNode;
  htmlFor?: string;
}

function Label({ className, children, htmlFor }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={twMerge(
        "mb-1 text-sm font-bold capitalize text-slate-700 dark:text-slate-300",
        className
      )}
    >
      {children}
    </label>
  );
}

export default Label;
