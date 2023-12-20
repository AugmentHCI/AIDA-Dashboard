import React from "react";

type Size = "sm" | "md" | "lg";

const SizeClass: Record<Size, string> = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1 text-base",
  lg: "px-4 py-1 text-lg",
};

export interface TagProps {
  className?: string;
  children: React.ReactNode;
  size?: Size;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

function Tag({
  className = "relative",
  children,
  onClick,
  size = "sm",
}: TagProps) {
  const CLASS = `bg-primary-100 text-primary-700 dark:bg-primary-700 dark:text-primary-100 inline-flex rounded-full font-medium items-center space-x-1 justify-center w-fit gap-1 ${
    onClick ? "cursor-pointer" : "cursor-default"
  } ${SizeClass[size]} ${className}`;
  return (
    <span className={CLASS} onClick={(e) => onClick && onClick(e)}>
      {children}
    </span>
  );
}

export default Tag;
