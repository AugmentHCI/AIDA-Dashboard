import React from "react";
import Label from "../typography/Label";

interface RangeSliderProps {
  value?: number;
  label?: string;
  onChange?: (value: number) => void;
  step?: number;
  from?: number;
  to?: number;
}

function RangeSlider({
  onChange,
  value = 50,
  label,
  step,
  from = 0,
  to = 100,
}: RangeSliderProps) {
  return (
    <>
      {label && <Label htmlFor="range">{label}</Label>}
      <input
        id="range"
        type="range"
        value={value}
        step={step}
        min={from}
        max={to}
        onChange={(e) =>
          onChange &&
          parseInt(e.target.value) &&
          onChange(parseInt(e.target.value))
        }
        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-300 dark:bg-slate-600"
      />
    </>
  );
}

export default RangeSlider;
