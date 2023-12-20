import React from "react";

interface PProps {
  className?: string;
  children: React.ReactNode;
}

function P({ className, children }: PProps) {
  return (
    <p
      className={`text-base font-normal text-slate-500 dark:text-slate-200 ${className}`}
    >
      {children}
    </p>
  );
}

export default P;
