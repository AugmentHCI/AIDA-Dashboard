import React from "react";
import RadioButton from "../input/RadioButton";

interface RadioGroupProps {
  name: string;
  options: string[];
  selectedOption: string;
  onClick?: (value: string) => void;
}

function RadioGroup({
  name,
  options,
  onClick,
  selectedOption,
}: RadioGroupProps) {
  return (
    <div className="flex flex-col items-start justify-center gap-4">
      {options.map((option) => {
        return (
          <div
            key={option}
            className="flex items-center justify-center gap-1 text-lg text-slate-500 dark:text-slate-200"
          >
            <RadioButton
              value={option}
              name={name}
              checked={selectedOption === option}
              onClick={(e) => onClick && onClick(e)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default RadioGroup;
