import React, { useState } from "react";

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (e: boolean) => void;
}

function Checkbox({ checked = false, onChange }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <input
      className="inline-block w-4 h-4 bg-white rounded cursor-pointer text-primary-6000 border-slate-300 focus:ring-blue-200 dark:focus:ring-blue-200 dark:ring-offset-slate-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600"
      type="checkbox"
      checked={isChecked}
      onChange={() => {
        if (onChange) onChange(!isChecked);
        setIsChecked((checked) => !checked);
      }}
    />
  );
}

export default Checkbox;
