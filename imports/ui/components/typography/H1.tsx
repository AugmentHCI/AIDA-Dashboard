import React from "react";

interface H1Props {
  className?: string;
  children: React.ReactNode;
}

function H1({ className, children }: H1Props) {
  return (
    <h1
      className={`mb-4 text-3xl font-bold text-slate-700 dark:text-slate-100 md:text-5xl lg:text-6xl motion-safe:transition-all ${className}`}
    >
      {children}
    </h1>
  );
}

export default H1;
