import React from "react";

interface H2Props {
  className?: string;
  children: React.ReactNode;
}

function H2({ className, children }: H2Props) {
  return (
    <h2
      className={`mb-4 text-2xl font-bold text-slate-700 dark:text-slate-100  md:text-4xl lg:text-5xl motion-safe:transition-all ${className}`}
    >
      {children}
    </h2>
  );
}

export default H2;
