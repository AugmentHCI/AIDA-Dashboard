import React from "react";
import Label from "../typography/Label";

type SizeType = "sm" | "md" | "lg";

const SizeClass: Record<SizeType, string> = {
  sm: "w-32",
  md: "w-60",
  lg: "w-96",
};

interface TextInputProps {
  label?: string;
  placeholder?: string;
  children?: React.ReactNode;
  value: string | number;
  onChange: (e: string) => void;
  size?: SizeType;
  type?: "text" | "number";
}

function TextInput({
  label,
  placeholder,
  value,
  onChange,
  size = "md",
  type = "text",
}: TextInputProps) {
  return (
    <div className="flex flex-col">
      {label && <Label>{label}</Label>}
      <input
        className={`px-4 py-2 border rounded-md dark:border-slate-700 dark:bg-slate-900 border-slate-200 text-slate-700 dark:text-slate-200 ${SizeClass[size]}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default TextInput;
