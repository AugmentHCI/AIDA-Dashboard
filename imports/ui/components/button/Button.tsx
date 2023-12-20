import React from "react";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";

export type ButtonStyle = "primary" | "secondary" | "ternary";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: ButtonStyle;
  disabled?: boolean;
  loading?: boolean;
}

function Button({
  children,
  onClick,
  className = "",
  type = "button",
  style = "primary",
  disabled = false,
  loading = false,
}: ButtonProps) {
  const STYLE: Record<ButtonStyle, string> = {
    primary:
      "bg-primary-700 hover:bg-primary-800 text-white border dark:bg-primary-600 shadow-sm gap-2 disabled:bg-slate-400 dark:disabled:bg-slate-600 border-transparent dark:hover:bg-primary-800",
    secondary:
      "hover:bg-slate-200 text-slate-700 border-2 border-slate-200 shadow-sm gap-2 disabled:text-slate-300 disabled:hover:bg-white bg-transparent dark:hover:bg-transparent dark:text-slate-100 dark:disabled:text-slate-400 dark:disabled:border-slate-400 dark:hover:bg-slate-200 dark:hover:text-slate-700",
    ternary:
      "text-primary-700 underline dark:text-slate-200 gap-1 px-0 border-transparent",
  };
  return (
    <button
      type={type}
      disabled={disabled}
      className={`w-fit text-ellipsis overflow-hidden whitespace-nowrap items-center select-none active:scale-[0.97] disabled:scale-100 transition-all flex justify-center px-6 py-2.5 text-base font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 md:w-auto ${STYLE[style]} ${className}`}
      onClick={(e) => onClick && onClick(e)}
    >
      {children}
      {loading ? <TailSpin height={16} /> : null}
    </button>
  );
}

export default Button;
