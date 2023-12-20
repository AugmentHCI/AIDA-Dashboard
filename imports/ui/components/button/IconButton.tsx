import React from "react";
import { twMerge } from "tailwind-merge";
import Icon, { IconType } from "../displays/Icon";

interface IconButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  icon: IconType;
  disabled?: boolean;
}

function IconButton({
  onClick,
  type = "button",
  icon,
  className,
  disabled = false,
}: IconButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={twMerge(
        "w-12 h-12 hover:bg-slate-200 flex justify-center items-center rounded-lg text-slate-500 transition-all dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-slate-300 bg-slate-100 dark:bg-slate-700 dark:border dark:border-slate-600",
        className
      )}
      onClick={(e) => onClick && onClick(e)}
    >
      <Icon icon={icon} size="20" />
    </button>
  );
}

export default IconButton;
