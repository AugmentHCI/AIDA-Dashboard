import React from "react";

export interface RadioButtonProps {
  id?: string;
  value: string;
  name: string;
  checked: boolean;
  onClick: (value: string) => void;
}

function RadioButton({ id, value, name, onClick, checked }: RadioButtonProps) {
  return (
    <div className="flex items-center">
      <input
        id={id ?? value}
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onClick={(e) => {
          const target = e.target as HTMLInputElement;
          onClick && onClick(target.value);
        }}
        className="w-5 h-4 mr-1 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="default-radio-1"
        className="ml-2 text-base font-medium text-slate-500 dark:text-slate-300"
      >
        {value}
      </label>
    </div>
  );
}

export default RadioButton;
