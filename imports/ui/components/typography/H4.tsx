import React from "react";

interface H4Props {
  className?: string;
  children: React.ReactNode;
}

function H4({ className, children }: H4Props) {
  return (
    <h4
      className={`mb-4 text-lg font-bold text-slate-700 dark:text-slate-100  md:text-2xl lg:text-3xl motion-safe:transition-all ${className}`}
    >
      {children}
    </h4>
  );
}

export default H4;
