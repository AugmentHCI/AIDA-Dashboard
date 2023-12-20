import React from "react";

interface H5Props {
  className?: string;
  children: React.ReactNode;
}

function H5({ className, children }: H5Props) {
  return (
    <h5
      className={`mb-4 text-base font-semibold uppercase  md:text-lg lg:text-lg motion-safe:transition-all ${
        className ?? "text-slate-700 dark:text-slate-100"
      }`}
    >
      {children}
    </h5>
  );
}

export default H5;
