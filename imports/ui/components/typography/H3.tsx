import React from "react";

interface H3Props {
  className?: string;
  children: React.ReactNode;
}

function H3({ className, children }: H3Props) {
  return (
    <h3
      className={`mb-4 text-xl font-bold md:text-3xl lg:text-4xl motion-safe:transition-all ${
        className ? className : "text-slate-700 dark:text-slate-100"
      }`}
    >
      {children}
    </h3>
  );
}

export default H3;
